/**
 * Рендерит собранный сайт в headless Chrome и печатает его в PDF
 * ровно теми же печатными стилями (`@media print` + src/view/print-comp/*),
 * что и кнопка печати в шапке.
 *
 * Требует готовый dist — `npm run pdf` собирает его сам.
 * Результат: pdf/cv-en.pdf и pdf/cv-ru.pdf.
 */
import { preview } from 'vite'
import puppeteer from 'puppeteer'
import { access, mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = join(root, 'dist')
const outDir = join(root, 'pdf')

const LANGS = ['en', 'ru']

// A4 при 96dpi. Вьюпорт должен совпадать с листом, иначе vh/vw из печатных
// стилей (.p-left { min-height: 100vh }) посчитаются не так, как в диалоге
// печати браузера.
const A4_VIEWPORT = { width: 794, height: 1123 }

async function exists(path) {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

async function main() {
  if (!(await exists(join(distDir, 'index.html')))) {
    console.error('[pdf] dist/index.html не найден — сначала выполните `npm run build`.')
    process.exit(1)
  }

  await mkdir(outDir, { recursive: true })

  const server = await preview({
    root,
    preview: { port: 4179, strictPort: false, open: false },
  })
  const url = server.resolvedUrls.local[0]
  console.log(`[pdf] preview: ${url}`)

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  })

  try {
    for (const lng of LANGS) {
      const page = await browser.newPage()
      await page.setViewport(A4_VIEWPORT)

      // localStorage привязан к origin, поэтому язык можно положить только
      // после первой загрузки — дальше перезагружаемся уже с нужным.
      await page.goto(url, { waitUntil: 'domcontentloaded' })
      await page.evaluate((value) => localStorage.setItem('cv-language', value), lng)
      await page.goto(url, { waitUntil: 'networkidle0' })
      await page.evaluate(() => document.fonts.ready)

      const file = `cv-${lng}.pdf`
      await page.pdf({
        path: join(outDir, file),
        format: 'A4',
        printBackground: true,
        preferCSSPageSize: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
      })
      await page.close()

      console.log(`[pdf] ✓ pdf/${file}`)
    }
  } finally {
    await browser.close()
    if (typeof server.close === 'function') {
      await server.close()
    } else {
      server.httpServer.close()
    }
  }
}

main().then(
  () => process.exit(0),
  (error) => {
    console.error('[pdf] ошибка:', error)
    process.exit(1)
  },
)
