const privateLang = {
  en: {
    "contacts": "contacts",
    "about": "about",
    "skills": "skills",
    "languages": "languages",
    "education": "education",
    "courses": "courses",
    "work": "work experience",
    "projects": "projects",
    "настоящее время": "present",
    "Август 2020": "August 2020",
    "Февраль 2021": "February 2021",
    "Январь 2023": "January 2023",
    "Ноябрь 2024": "November 2024",
    
    "Alexey Kuptsov": "Alexey Kuptsov",
    "frontend developer": "fullstack developer",
    "Kazakhstan, Karaganda": "Kazakhstan, Karaganda",

    "about1": "<span>Fullstack developer</span> with over <span>3 years of experience</span> in developing and maintaining web applications.",
    "about2": "I have experience in <span>team collaboration</span> and <span>development management</span>: coordinated the department's work, participated in task planning and technical decision-making for product development. Took part in <span>architecture design</span>, technology selection, and code quality improvement.",
    "about3": "Worked not only with web applications, but also with <span>mobile development</span> and <span>browser extensions</span>. Well-versed in the <span>full development lifecycle</span>, adhering to best practices and teamwork processes.",
    "about4": "Работаю с современным стеком: <span>React/React Native</span>, <span>Angular</span>, <span>Next.js</span>, <span>Node.js</span>, <span>NestJS</span>, <span>PostgreSQL</span>, <span>MongoDB</span>. Опыт работы с <span>CI/CD</span>, облачными платформами и <span>Docker</span>.",

    "Russian": "Russian",
    "English": "English",
    "native": "native",
    "intermediate (B1)": "intermediate (B1)",

    "Karaganda Polytechnic College": "Karaganda Polytechnic College",
    "Karaganda Technical University": "Karaganda Technical University",
    "Information Technology and progaraming": "Information Technology and Programming",
    "Information Technology": "Information Technology",

    "completed": "completed",
    "сertificate is pending...": "certificate is pending...",

    "PetStory Online": "PetStory Online",
    "Momentum": "Momentum",
    "Tags": "Fifteen Puzzle Game",
    "Songbird": "Songbird",
    "Online Store": "Online Store",
    "Gaming Zone": "Gaming Zone",
    "Airways": "Airways",
    "PetStory Online Desc": "<span>Responsive website layout</span> (up to 320px) for an online zoo with About and Donate pages. Implemented: carousel, scrolling comments, burger menu, and modal window with comments in the mobile version. Built with <span>vanilla JavaScript</span> (no libraries), HTML, CSS.",
    "Momentum Desc": "A clone of the Google Chrome browser extension. Features include changing image sources, a TODO list, player, and more. Built with vanilla JavaScript (no libraries), HTML, CSS.",
    "Tags Desc": "Implementation of <span>\"Fifteen Puzzle Game\"</span> with saving to localStorage and loading previously saved games, 6 difficulty levels. The entire game is written in <span>vanilla JavaScript</span> (no libraries) as an SPA, without using HTML tags inside the body tag.",
    "Songbird Desc": "A simple <span>quiz game</span> for guessing bird songs, with an additional gallery of all birds available in the game. The entire game is written in <span>vanilla JavaScript</span> (no libraries) as an SPA, without using HTML tags inside the body tag.",
    "Online Store Desc": "<span>Team development</span> with one other developer. Test online store with implemented features: filters, search, adding/removing items to/from the cart, fake purchase, etc. The application is written in <span>vanilla TypeScript</span> (no libraries, no Any type, no JavaScript) as an <span>SPA</span>.",
    "Gaming Zone Desc": "<span>Team development</span> with two other developers. A small application with various games. The entire frontend is written using React and TypeScript. <span>Backend</span> - <span>JavaScript</span> with <span>Express</span>. My responsibilities: Backend (<span>CRUD</span>, <span>WebSocket</span>), <span>CI/CD</span> - deploying to hosting using GitHub Actions, setting up <span>DNS</span> and hosting, authorization, user account, game preview page.",
    "Airways Desc": "<span>Team development</span> with one other developer. Test website for an airline carrier. The frontend is implemented using <span>Angular</span> and <span>TypeScript</span>. The <span>backend</span> is implemented using <span>NestJS</span>.",
    "PetStory Online Short Desc": "<span>Responsive website layout</span> up to 320px. JavaScript, HTML, CSS.",
    "Tags Short Desc": "<span>Fifteen Puzzle Game</span> with 6 difficulty levels and save functionality. JavaScript (SPA), CSS.",
    "Gaming Zone Short Desc": "<span>Application with games</span>, co-development. React, TypeScript, Express.",

    "EPAM Anywhere Desc": "Participated in developing an internal corporate web application as part of an international team. Fixed bugs and improved web application load times.<br><br><b>Results:</b><ol><li>Fixed 30+ UI bugs in a React SPA (Redux, React Router, Axios) for 10+ country locales, ensuring correct display of forms, balance fields, statuses, and business logic per country requirements;</li><li>Optimized web application loading: profiling, eliminating rendering bottlenecks, speeding up initial page loads;</li><li>Worked with enterprise stack: EPAM UUI (internal design system), Elastic APM for performance monitoring, GitLab CI/CD, Jira (EPMVTS tickets), code review in a distributed team.</li></ol><b>Stack:</b> React, Redux, TypeScript, Axios, SASS/SCSS, Elastic APM, GitLab CI, Jira",
    "Wooppay Desc": "Developed the frontend of products for a Kazakh fintech company: an electronic wallet, payment services and user accounts. Wooppay is the first Kazakh electronic money system entered into the register of the National Bank of Kazakhstan.<br><br><b>Results:</b><ol><li>Built interfaces for payment scenarios in Vue.js: payment and transfer forms, service connection, transaction history, user account;</li><li>Worked with two generations of the codebase in parallel - legacy modules in Vue 2 and JavaScript, and new modules in Vue 3 and TypeScript;</li><li>Migrated components from the Options API to the Composition API, extracting reusable logic into composables and increasing type coverage;</li><li>Organised application state management with Pinia: stores split by domain, typed actions and getters;</li><li>Took part in code review and maintenance of shared UI components, keeping interfaces consistent across products.</li></ol><b>Stack:</b> Vue 2, Vue 3, Composition API, Pinia, TypeScript, JavaScript",
    "Ecitty Desc": "Developed the social network ecitty.com: geo-located post feed, real-time messenger, subscription system, push notifications, admin moderation panel.<br><br><b>Process:</b> Scrum, 2-week sprints. Team: 8 people (2 front, 3 back, designer, QA, analyst/project manager)<br><br><b>Results:</b><ol><li>Designed and implemented GraphQL API from scratch: 40+ queries, 60+ mutations, 9 real-time subscriptions (WebSocket), cursor pagination, Apollo Persisted Queries with Redis caching;</li><li>Built real-time messenger (frontend + backend): private and group chats, delivery/read statuses, typing indicator, reactions, user blocking, push notifications via Firebase Cloud Messaging;</li><li>Implemented full authentication cycle: JWT with automatic access/refresh token rotation, OAuth 2.0 (Google, Facebook), SMS verification (SMSC.ru), WhatsApp OTP. Introduced 3-level rate-limiting and brute-force protection;</li><li>Developed geo-located post feed on React and Apollo Client: publication editor with media upload to S3 (pre-signed URL), Google Maps API map with geo-search of posts (MongoDB 2dsphere), reactions and comments system;</li><li>Designed monorepo architecture (Lerna) with 3 NestJS microservices and 20+ MongoDB collections with optimized indexes (GeoJSON, TTL, compound unique, soft-delete pattern);</li><li>On the frontend, introduced MobX (18 stores), PWA with Workbox (precaching, offline, push notifications via Service Worker), code splitting (React.lazy), Sentry monitoring, feature-based architecture with 22+ path aliases;</li><li>Ensured security: Helmet, throttling, AES-256-GCM encryption, anti-spam protection. Wrote 100+ unit tests (Jest). Set up CI/CD on GitHub Actions (auto-tests Node.js 20/22 + MongoDB + Redis) and deployment via Docker Compose + Nginx + SSL;</li><li>Implemented localization for 3 languages (ru, en, kk) on both layers (i18next + Accept-Language), email campaigns (Nodemailer), report system with admin moderation panel, online presence via heartbeat.</li></ol><b>Stack:</b> React, NestJS, TypeScript, GraphQL, Apollo Client/Server, MobX, MongoDB, Redis, Docker, Nginx, GitHub Actions, Firebase FCM, AWS S3, Passport.js, Google Maps API, WebSocket, Workbox (PWA), Sentry, Jest, Lerna, FFmpeg, i18next, CSS Modules",
    "Cupcake Development Desc": "Developed commercial products for international clients in a distributed team: logistics platform, browser extensions, food delivery mobile app, cart-sharing SaaS service.<br><br><b>Process:</b> Scrum, Jira, code review, distributed team.<br><br><b>Results:</b><ol><li>Built the backend of a logistics platform on NestJS + Fastify + Drizzle ORM (PostgreSQL): air cargo tariff calculation engine with Excel parsing using Strategy pattern, AmoCRM integration (OAuth2, deal import/export), async route optimization via Yandex MQ + S3, currency conversion via Central Bank of Russia. Deployed to Yandex Serverless Containers;</li><li>Developed two cross-browser extensions (Chrome, Firefox, Safari) on React + TypeScript + Vite/Webpack (Manifest V3): cashback extension with badge injection into search results (Google/Bing/Yahoo) via Shadow DOM, and cart-sharing extension supporting 286 retailers (Amazon, Walmart, IKEA, etc.) via vendor-specific DOM scrapers;</li><li>Built a pizza delivery mobile app on React Native (iOS + Android): catalog, cart, online payment (card, SBP), Yandex Maps (address selection, delivery zones), real-time order tracking via WebSocket, push notifications (FCM + OneSignal), loyalty program, promo codes, stories;</li><li>Performed mobile app performance optimization: memoization (React.memo, useMemo, useCallback), context and cart architecture refactoring, wrote unit tests for hooks, API, contexts, and components;</li><li>Developed React SPA (Jotai, TanStack Query, MUI, Tailwind) and Express.js backend (PostgreSQL, Firebase, Redis, Stripe subscriptions, OAuth via Google/Facebook/Apple/Microsoft) for a cart-sharing SaaS service with retailer API integrations (Amazon PAAPI, Walmart, eBay, Kroger);</li><li>Configured CI/CD on GitHub Actions for multiple projects: Yandex Cloud deployment, Docker image builds, DB migrations, Swagger documentation, Sentry monitoring, CodePush OTA updates for the mobile app.</li></ol><b>Stack:</b> NestJS, Fastify, React, React Native, TypeScript, PostgreSQL, Drizzle ORM, Firebase, Redis, Express.js, Vite, Webpack, Tailwind CSS, MUI, Jotai, TanStack Query, MobX, Stripe, Docker, GitHub Actions, Yandex Cloud, AWS SES, Chrome Extensions (MV3), Yandex Maps, Sentry, AppMetrica, Swagger, Jest, Puppeteer",
  } as any,
  ru: {
    "contacts": "контакты",
    "about": "обо мне",
    "skills": "навыки",
    "languages": "языки",
    "education": "образование",
    "courses": "курсы",
    "work": "опыт работы",
    "projects": "проекты",
    "настоящее время": "настоящее время",
    
    "Alexey Kuptsov": "Алексей Купцов",
    "frontend developer": "fullstack разработчик",
    "Kazakhstan, Karaganda": "Казахстан, Караганда",

    "about1": "<span>Fullstack-разработчик</span> с более чем <span>3-летним опытом</span> разработки и сопровождения веб-приложений.",
    "about2": "Имею опыт <span>командной работы</span> и <span>управления разработкой</span>: координировал работу отдела, участвовал в планировании задач и принятии технических решений по развитию продукта. Принимал участие в <span>проектировании архитектуры</span>, выборе технологий и улучшении качества кода.",
    "about3": "Работал не только с веб-приложениями, но и с <span>мобильной разработкой</span>, а также с <span>браузерными расширениями</span>. Хорошо ориентируюсь в <span>полном цикле разработки</span>, придерживаюсь лучших практик и процессов командной работы.",
    "about4": "Работаю с современным стеком: <span>React/React Native</span>, <span>Angular</span>, <span>Next.js</span>, <span>Node.js</span>, <span>NestJS</span>, <span>PostgreSQL</span>, <span>MongoDB</span>. Опыт работы с <span>CI/CD</span>, облачными платформами и <span>Docker</span>.",

    "Russian": "Русский",
    "English": "Английский",
    "native": "родной",
    "intermediate (B1)": "средний (B1)",

    "Karaganda Polytechnic College": "Карагандинский Политехнический Колледж",
    "Karaganda Technical University": "Карагандинский Технический Университет",
    "Information Technology and progaraming": "Информационные технологии и прогарамирование",
    "Information Technology": "Информационные технологии",

    "completed": "завершен",
    "сertificate is pending...": "ожидается выдача...",

    "PetStory Online": "PetStory Online",
    "Momentum": "Momentum",
    "Tags": "Пятнашки",
    "Songbird": "Songbird",
    "Online Store": "Online Store",
    "Gaming Zone": "Gaming Zone",
    "Airways": "Airways",
    "PetStory Online Desc": "<span>Адаптивная верстка</span> сайта (до 320px) для онлайн зоопарка, имеются страниц <span>About</span> и <span>Donate</span>. Реализованы: карусель, прокрутка комментариев, бургер меню и модальное окно с комментариями в мобильной версии, использован <span>чистый JavaScript</span> (без дополнительных библиотек), HTML, CSS.",
    "Momentum Desc": "Клон расширения для браузера Google Chrome. Есть возможность изменения источника изображений из API, дополнительно реализован TODO-лист, собственный плеер и т.д. Для реализации использовались <span>чистый JavaScript</span> (без дополнительных библиотек), HTML, CSS.",
    "Tags Desc": "Реализация игры <span>\"Пятнашки\"</span>, дополнительно реализовано сохранение игры в localStorage и загрузка ранее сохраненной игры, 6 уровней сложности. Вся игра написана на <span>чистом JavaScript</span> (без дополнительных библиотек) по принципу <span>SPA</span>, без использования HTML тэгов внутри тэга body.",
    "Songbird Desc": "Простая <span>игра-викторина</span> на угадывание пения птиц, дополнительно реализованная галерея всех птиц, имеющихся в игре. Вся игра написана на <span>чистом JavaScript</span> (без дополнительных библиотек) по принципу <span>SPA</span>, без использования HTML тэгов внутри тэга body.",
    "Online Store Desc": "<span>Совместная разработка</span> в команде из 2-х человек. Тестовый <span>интернет-магазин</span>, реализованы фильтры, поиск, добавление/удаление из корзины товаров, псевдо-покупка и др. Приложение написано на <span>чистом TypeScript</span> (без дополнительных библиотек, универсального типа Any и JavaScript) по принципу <span>SPA</span>, без использования HTML тэгов внутри тэга body.",
    "Gaming Zone Desc": "<span>Совместная разработка</span> в команде из 3-х человек. Небольшое приложение с различными играми. Вся front-end часть написана с использование библиотеки <span>React</span> и <span>TypeScript</span>. <span>Back-end</span> - <span>JavaScript</span> с использованием библиотеки <span>express</span>. Моя часть работы: Backend (<span>CRUD</span>, <span>WebSocket</span>), <span>CI/CD</span> - загрузка на хостинг с помощью <span>GitHub Actions</span>, работа с <span>DNS</span> и хостингом, авторизация, кабинет пользователя, страница предпросмотра игр.",
    "Airways Desc": "<span>Совместная разработка</span> в команде из 2-х человек. Тестовый сайт авиаперевозок, реализованны front-end часть с использованием <span>Angular</span> и <span>TypeScript</span>. <span>back-end</span> с использованием <span>nestjs</span>",
    "PetStory Online Short Desc": "<span>Адаптивная верстка</span> до 320px. JavaScript, HTML, CSS.",
    "Tags Short Desc": "<span>Игра в пятнашки</span> с 6 уровнями и сохраниением. JavaScript (SPA), CSS.",
    "Gaming Zone Short Desc": "<span>Приложение с играми</span>, совместная разработка. React, TypeScript, Express.",

    "EPAM Anywhere Desc": "Участвовал в разработке внутреннего корпоративного веб-приложения в составе международной команды. Фиксил баги и ускорял загрузку веб-приложения.<br><br><b>Результаты работы:</b><ol><li>Исправил 30+ UI-багов в React SPA (Redux, React Router, Axios) для локалей 10+ стран, обеспечивая корректное отображение форм, полей баланса, статусов и бизнес-логики под требования каждой страны;</li><li>Оптимизировал загрузку веб-приложения: профилирование, устранение узких мест рендеринга, ускорение начальной загрузки страниц;</li><li>Работал с enterprise-стеком: EPAM UUI (внутренняя дизайн-система), Elastic APM для мониторинга производительности, GitLab CI/CD, Jira (EPMVTS-тикеты), code review в распределённой команде.</li></ol><b>Стек:</b> React, Redux, TypeScript, Axios, SASS/SCSS, Elastic APM, GitLab CI, Jira",
    "Wooppay Desc": "Разрабатывал фронтенд продуктов казахстанской финтех-компании: электронный кошелёк, платёжные сервисы и личные кабинеты пользователей. Wooppay - первая казахстанская система электронных денег, внесённая в реестр Нацбанка РК.<br><br><b>Результаты работы:</b><ol><li>Разрабатывал интерфейсы платёжных сценариев на Vue.js: формы оплаты и переводов, подключение услуг, история операций, личный кабинет пользователя;</li><li>Работал параллельно с двумя поколениями кодовой базы - legacy-модулями на Vue 2 и JavaScript и новыми модулями на Vue 3 и TypeScript;</li><li>Переводил компоненты с Options API на Composition API, вынося переиспользуемую логику в composables и повышая покрытие типами;</li><li>Организовал управление состоянием приложения на Pinia: разделение сторов по доменам, типизированные экшены и геттеры;</li><li>Участвовал в код-ревью и поддержке общих UI-компонентов, следил за единообразием интерфейсов между продуктами.</li></ol><b>Стек:</b> Vue 2, Vue 3, Composition API, Pinia, TypeScript, JavaScript",
    "Ecitty Desc": "Разрабатывал социальную сеть ecitty.com: лента постов с геолокацией, real-time мессенджер, система подписок, push-уведомления, админ-панель модерации.<br><br><b>Процесс работы:</b> Scrum, 2 недели на спринт. Команда: 8 человек (2 front, 3 back, дизайнер, QA, аналитик/project manager)<br><br><b>Результаты работы:</b><ol><li>Спроектировал и реализовал GraphQL API с нуля: 40+ queries, 60+ mutations, 9 real-time subscriptions (WebSocket), курсорная пагинация, Apollo Persisted Queries с Redis-кэшированием;</li><li>Разработал real-time мессенджер (frontend + backend): приватные и групповые чаты, статусы доставки/прочтения, индикатор набора текста, реакции, блокировка пользователей, push-уведомления через Firebase Cloud Messaging;</li><li>Реализовал полный цикл аутентификации: JWT с автоматической ротацией access/refresh токенов, OAuth 2.0 (Google, Facebook), SMS-верификацию (SMSC.ru), WhatsApp OTP. Внедрил 3-уровневый rate-limiting и защиту от брутфорса;</li><li>Разработал ленту постов с геолокацией на React и Apollo Client: редактор публикаций с загрузкой медиа на S3 (pre-signed URL), карту на Google Maps API с геопоиском постов (MongoDB 2dsphere), систему реакций и комментариев;</li><li>Спроектировал архитектуру монорепозитория (Lerna) из 3 NestJS-микросервисов и 20+ коллекций MongoDB с оптимизированными индексами (GeoJSON, TTL, compound unique, soft-delete паттерн);</li><li>На фронтенде внедрил MobX (18 сторов), PWA на Workbox (precaching, offline, push-уведомления через Service Worker), code splitting (React.lazy), Sentry для мониторинга, feature-based архитектуру с 22+ path aliases;</li><li>Обеспечил безопасность: Helmet, throttling, AES-256-GCM шифрование, анти-спам защита. Написал 100+ unit-тестов (Jest). Настроил CI/CD на GitHub Actions (автотесты Node.js 20/22 + MongoDB + Redis) и деплой через Docker Compose + Nginx + SSL;</li><li>Реализовал локализацию на 3 языка (ru, en, kk) на обоих слоях (i18next + Accept-Language), email-рассылки (Nodemailer), систему репортов с админ-панелью модерации, онлайн-присутствие через heartbeat.</li></ol><b>Стек:</b> React, NestJS, TypeScript, GraphQL, Apollo Client/Server, MobX, MongoDB, Redis, Docker, Nginx, GitHub Actions, Firebase FCM, AWS S3, Passport.js, Google Maps API, WebSocket, Workbox (PWA), Sentry, Jest, Lerna, FFmpeg, i18next, CSS Modules",
    "Cupcake Development Desc": "Разрабатывал коммерческие продукты для международных клиентов в распределённой команде: логистическая платформа, браузерные расширения, мобильное приложение доставки еды, SaaS-сервис обмена корзинами.<br><br><b>Процесс работы:</b> Scrum, Jira, code review, распределённая команда.<br><br><b>Результаты работы:</b><ol><li>Разработал backend логистической платформы на NestJS + Fastify + Drizzle ORM (PostgreSQL): движок расчёта авиагрузовых тарифов с парсингом Excel по паттерну Strategy, интеграция с AmoCRM (OAuth2, импорт/экспорт сделок), асинхронная оптимизация маршрутов через Yandex MQ + S3, конвертация валют через ЦБ РФ. Деплой в Yandex Serverless Containers;</li><li>Разрабатывал два кроссбраузерных расширения (Chrome, Firefox, Safari) на React + TypeScript + Vite/Webpack (Manifest V3): cashback-расширение с инъекцией бейджей в поисковую выдачу (Google/Bing/Yahoo) через Shadow DOM, и расширение для обмена корзинами с поддержкой 286 ретейлеров (Amazon, Walmart, IKEA и др.) через vendor-specific DOM-скраперы;</li><li>Разрабатывал мобильное приложение доставки пиццы на React Native (iOS + Android): каталог, корзина, онлайн-оплата (карта, СБП), Yandex Maps (выбор адреса, зоны доставки), real-time отслеживание заказа через WebSocket, push-уведомления (FCM + OneSignal), программа лояльности, промокоды, stories;</li><li>Провёл оптимизацию производительности мобильного приложения: мемоизация (React.memo, useMemo, useCallback), рефакторинг архитектуры контекстов и корзины, написал unit-тесты на хуки, API, контексты и компоненты;</li><li>Разрабатывал React SPA (Jotai, TanStack Query, MUI, Tailwind) и Express.js backend (PostgreSQL, Firebase, Redis, Stripe-подписки, OAuth через Google/Facebook/Apple/Microsoft) для SaaS-сервиса обмена корзинами с интеграцией API ретейлеров (Amazon PAAPI, Walmart, eBay, Kroger);</li><li>Настраивал CI/CD на GitHub Actions для нескольких проектов: деплой в Yandex Cloud, сборка Docker-образов, миграции БД, Swagger-документация, Sentry-мониторинг, CodePush OTA-обновления для мобильного приложения.</li></ol><b>Стек:</b> NestJS, Fastify, React, React Native, TypeScript, PostgreSQL, Drizzle ORM, Firebase, Redis, Express.js, Vite, Webpack, Tailwind CSS, MUI, Jotai, TanStack Query, MobX, Stripe, Docker, GitHub Actions, Yandex Cloud, AWS SES, Chrome Extensions (MV3), Yandex Maps, Sentry, AppMetrica, Swagger, Jest, Puppeteer",
  } as any,
};

const lang = {} as any;

lang.ru = new Proxy(privateLang.ru, {
  get(target, key) {
    if (target[key]) {
      return target[key];
    }
    return key;
  }
});

lang.en = new Proxy(privateLang.en, {
  get(target, key) {
    if (target[key]) {
      return target[key];
    }
    return key;
  }
});

export default lang;
