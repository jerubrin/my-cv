# Alexey Kuptsov - CV
### [https://alexeykuptsov.ru/](https://alexeykuptsov.ru/)

## Экспорт в PDF

```bash
npm run pdf     # = npm run build + рендер PDF
```

На выходе — `pdf/cv-en.pdf` и `pdf/cv-ru.pdf`: A4, без полей, векторный текст.
Папка `pdf/` в git не коммитится, на сайт файлы не попадают — это локальная
утилита, отдельная от сборки CV.

`scripts/generate-pdf.mjs` поднимает `vite preview` над готовым `dist`,
открывает сайт в headless Chrome (puppeteer), подставляет язык через
`localStorage` и печатает страницу теми же печатными стилями
(`@media print` + `src/view/print-comp/*`), что и кнопка печати в шапке.
