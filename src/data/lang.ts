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

    "about1": "<span>Fullstack developer</span> with <span>6 years of commercial experience</span>. I have built products in <span>fintech</span>, social networking, logistics and e-commerce - from architecture design through release to running them in production.",
    "about2": "I work across the <span>full development cycle</span>: interfaces, server side, databases, CI/CD and deployment. Beyond the web, I have shipped <span>mobile apps</span> for iOS and Android and <span>cross-browser extensions</span> for Chrome, Firefox and Safari.",
    "about3": "Experienced in <span>distributed and international teams</span> working in Scrum. I have <span>coordinated the work of a development department</span>, taken part in task planning, <span>architecture design</span> and technology selection, and I review code and own its quality.",
    "about4": "Stack: <span>React / React Native</span>, <span>Vue 2/3</span>, <span>TypeScript</span>, <span>Node.js</span>, <span>NestJS</span>, <span>GraphQL</span>, <span>PostgreSQL</span>, <span>MongoDB</span>, <span>Redis</span>, <span>Docker</span>. I set up <span>CI/CD</span> and deploy to cloud platforms.",

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

    "EPAM Anywhere Desc": "Participated in developing an internal corporate web application as part of an international team: migrated the interface from a legacy stack to React and fixed bugs.<br><br><b>Results:</b><ol><li>Took part in migrating the legacy interface from jQuery to React: rewrote screens onto a component architecture with Redux and React Router while preserving business logic;</li><li>Fixed 30+ UI bugs in a React SPA across 10+ country locales: forms, balance fields, statuses and business logic per country requirements;</li><li>Worked with an enterprise stack: EPAM UUI (internal design system), Elastic APM, GitLab CI/CD, Jira, code review in a distributed team.</li></ol><b>Stack:</b> React, Redux, TypeScript, jQuery, Axios, SASS/SCSS, Elastic APM, GitLab CI, Jira",
    "Wooppay Desc": "Developed the frontend of products for a Kazakh fintech company: an electronic wallet, payment services and user accounts. Wooppay is the first Kazakh electronic money system entered into the register of the National Bank of Kazakhstan.<br><br><b>Results:</b><ol><li>Built interfaces for payment scenarios in Vue.js: payment and transfer forms, service connection, transaction history, user account;</li><li>Worked with two generations of the codebase in parallel - legacy modules in Vue 2 and JavaScript, and new modules in Vue 3 and TypeScript; migrated components from the Options API to the Composition API, extracting logic into composables;</li><li>Organised state management with Pinia: stores split by domain, typed actions and getters. Took part in code review and maintenance of shared UI components.</li></ol><b>Stack:</b> Vue 2, Vue 3, Composition API, Pinia, TypeScript, JavaScript",
    "Ecitty Desc": "Developed the social network ecitty.com: geo-located post feed, real-time messenger, subscription system, push notifications, admin moderation panel.<br><br><b>Process:</b> Scrum, 2-week sprints. Team: 8 people (2 front, 3 back, designer, QA, analyst/project manager)<br><br><b>Results:</b><ol><li>Designed and implemented a GraphQL API from scratch: 40+ queries, 60+ mutations, 9 real-time subscriptions (WebSocket), cursor pagination, Apollo Persisted Queries with Redis caching;</li><li>Designed the monorepo architecture (Lerna) with 3 NestJS microservices and 20+ MongoDB collections with optimized indexes (GeoJSON, TTL, soft-delete);</li><li>Built a real-time messenger (frontend + backend): private and group chats, delivery and read statuses, reactions, user blocking, push notifications via Firebase Cloud Messaging;</li><li>Developed the geo-located post feed on React and Apollo Client: publication editor with media upload to S3, Google Maps API with geo-search of posts (MongoDB 2dsphere), MobX (18 stores), PWA with Workbox;</li><li>Implemented the full authentication cycle: JWT with access/refresh token rotation, OAuth 2.0, SMS verification, WhatsApp OTP, rate-limiting. Wrote 100+ unit tests (Jest), set up CI/CD on GitHub Actions and deployment via Docker Compose + Nginx.</li></ol><b>Stack:</b> React, NestJS, TypeScript, GraphQL, Apollo Client/Server, MobX, MongoDB, Redis, Docker, Nginx, GitHub Actions, Firebase FCM, AWS S3, Jest",
    "Cupcake Development Desc": "Developed commercial products for international clients in a distributed team: logistics platform, browser extensions, food delivery mobile app, cart-sharing SaaS service.<br><br><b>Results:</b><ol><li>Built the backend of a logistics platform on NestJS + Fastify + Drizzle ORM (PostgreSQL): air cargo tariff calculation engine with Excel parsing, AmoCRM integration (OAuth2), async route optimization via Yandex MQ + S3. Deployed to Yandex Serverless Containers;</li><li>Developed two cross-browser extensions (Chrome, Firefox, Safari) on React + TypeScript (Manifest V3): a cashback extension injecting badges into search results via Shadow DOM, and a cart-sharing extension supporting 286 retailers via vendor-specific DOM scrapers;</li><li>Built a food delivery mobile app on React Native (iOS + Android): catalog, cart, online payment (card, SBP), Yandex Maps, real-time order tracking via WebSocket, push notifications (FCM + OneSignal), loyalty program. Optimized performance and covered key modules with unit tests;</li><li>Developed a React SPA (Jotai, TanStack Query, MUI, Tailwind) and an Express.js backend (PostgreSQL, Firebase, Redis, Stripe subscriptions, OAuth) for a cart-sharing SaaS service with retailer API integrations (Amazon PAAPI, Walmart, eBay, Kroger);</li><li>Configured CI/CD on GitHub Actions: Yandex Cloud deployment, Docker image builds, DB migrations, Sentry monitoring, CodePush OTA updates.</li></ol><b>Stack:</b> NestJS, Fastify, React, React Native, TypeScript, PostgreSQL, Drizzle ORM, Firebase, Redis, Express.js, Tailwind CSS, MUI, Jotai, TanStack Query, Stripe, Docker, GitHub Actions, Yandex Cloud, Chrome Extensions (MV3), Sentry, Jest",
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

    "about1": "<span>Fullstack-разработчик</span> с <span>6-летним коммерческим опытом</span>. Разрабатывал продукты в <span>финтехе</span>, социальных сетях, логистике и e-commerce - от проектирования архитектуры до релиза и работы в продакшене.",
    "about2": "Закрываю <span>весь цикл разработки</span>: интерфейсы, серверная часть, базы данных, CI/CD и деплой. Помимо веба делал <span>мобильные приложения</span> под iOS и Android и <span>кроссбраузерные расширения</span> для Chrome, Firefox и Safari.",
    "about3": "Есть опыт работы в <span>распределённых и международных командах</span> по Scrum. <span>Координировал работу отдела разработки</span>, участвовал в планировании задач, <span>проектировании архитектуры</span> и выборе технологий, провожу код-ревью и отвечаю за качество кода.",
    "about4": "Стек: <span>React / React Native</span>, <span>Vue 2/3</span>, <span>TypeScript</span>, <span>Node.js</span>, <span>NestJS</span>, <span>GraphQL</span>, <span>PostgreSQL</span>, <span>MongoDB</span>, <span>Redis</span>, <span>Docker</span>. Настраиваю <span>CI/CD</span> и деплой в облачных платформах.",

    "Russian": "Русский",
    "English": "Английский",
    "native": "родной",
    "intermediate (B1)": "средний (B1)",

    "Karaganda Polytechnic College": "Карагандинский Политехнический Колледж",
    "Karaganda Technical University": "Карагандинский Технический Университет",
    "Information Technology and progaraming": "Информационные технологии и программирование",
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

    "EPAM Anywhere Desc": "Участвовал в разработке внутреннего корпоративного веб-приложения в составе международной команды: переводил интерфейс со старого стека на React и исправлял баги.<br><br><b>Результаты работы:</b><ol><li>Участвовал в миграции legacy-интерфейса с jQuery на React: переписывал экраны на компонентную архитектуру с Redux и React Router, сохраняя бизнес-логику;</li><li>Исправил 30+ UI-багов в React SPA для локалей 10+ стран: формы, поля баланса, статусы и бизнес-логика под требования каждой страны;</li><li>Работал с enterprise-стеком: EPAM UUI (внутренняя дизайн-система), Elastic APM, GitLab CI/CD, Jira, code review в распределённой команде.</li></ol><b>Стек:</b> React, Redux, TypeScript, jQuery, Axios, SASS/SCSS, Elastic APM, GitLab CI, Jira",
    "Wooppay Desc": "Разрабатывал фронтенд продуктов казахстанской финтех-компании: электронный кошелёк, платёжные сервисы и личные кабинеты пользователей. Wooppay - первая казахстанская система электронных денег, внесённая в реестр Нацбанка РК.<br><br><b>Результаты работы:</b><ol><li>Разрабатывал интерфейсы платёжных сценариев на Vue.js: формы оплаты и переводов, подключение услуг, история операций, личный кабинет пользователя;</li><li>Работал параллельно с двумя поколениями кодовой базы - legacy-модулями на Vue 2 и JavaScript и новыми модулями на Vue 3 и TypeScript; переводил компоненты с Options API на Composition API, вынося логику в composables;</li><li>Организовал управление состоянием на Pinia: разделение сторов по доменам, типизированные экшены и геттеры. Участвовал в код-ревью и поддержке общих UI-компонентов.</li></ol><b>Стек:</b> Vue 2, Vue 3, Composition API, Pinia, TypeScript, JavaScript",
    "Ecitty Desc": "Разрабатывал социальную сеть ecitty.com: лента постов с геолокацией, real-time мессенджер, система подписок, push-уведомления, админ-панель модерации.<br><br><b>Процесс работы:</b> Scrum, 2 недели на спринт. Команда: 8 человек (2 front, 3 back, дизайнер, QA, аналитик/project manager)<br><br><b>Результаты работы:</b><ol><li>Спроектировал и реализовал GraphQL API с нуля: 40+ queries, 60+ mutations, 9 real-time subscriptions (WebSocket), курсорная пагинация, Apollo Persisted Queries с Redis-кэшированием;</li><li>Спроектировал архитектуру монорепозитория (Lerna) из 3 NestJS-микросервисов и 20+ коллекций MongoDB с оптимизированными индексами (GeoJSON, TTL, soft-delete);</li><li>Разработал real-time мессенджер (frontend + backend): приватные и групповые чаты, статусы доставки и прочтения, реакции, блокировка пользователей, push-уведомления через Firebase Cloud Messaging;</li><li>Разработал ленту постов с геолокацией на React и Apollo Client: редактор публикаций с загрузкой медиа на S3, карта на Google Maps API с геопоиском постов (MongoDB 2dsphere), MobX (18 сторов), PWA на Workbox;</li><li>Реализовал полный цикл аутентификации: JWT с ротацией access/refresh токенов, OAuth 2.0, SMS-верификация, WhatsApp OTP, rate-limiting. Написал 100+ unit-тестов (Jest), настроил CI/CD на GitHub Actions и деплой через Docker Compose + Nginx.</li></ol><b>Стек:</b> React, NestJS, TypeScript, GraphQL, Apollo Client/Server, MobX, MongoDB, Redis, Docker, Nginx, GitHub Actions, Firebase FCM, AWS S3, Jest",
    "Cupcake Development Desc": "Разрабатывал коммерческие продукты для международных клиентов в распределённой команде: логистическая платформа, браузерные расширения, мобильное приложение доставки еды, SaaS-сервис обмена корзинами.<br><br><b>Результаты работы:</b><ol><li>Разработал backend логистической платформы на NestJS + Fastify + Drizzle ORM (PostgreSQL): движок расчёта авиагрузовых тарифов с парсингом Excel, интеграция с AmoCRM (OAuth2), асинхронная оптимизация маршрутов через Yandex MQ + S3. Деплой в Yandex Serverless Containers;</li><li>Разрабатывал два кроссбраузерных расширения (Chrome, Firefox, Safari) на React + TypeScript (Manifest V3): cashback-расширение с инъекцией бейджей в поисковую выдачу через Shadow DOM и расширение для обмена корзинами с поддержкой 286 ретейлеров через vendor-specific DOM-скраперы;</li><li>Разрабатывал мобильное приложение доставки еды на React Native (iOS + Android): каталог, корзина, онлайн-оплата (карта, СБП), Yandex Maps, real-time отслеживание заказа через WebSocket, push-уведомления (FCM + OneSignal), программа лояльности. Провёл оптимизацию производительности и покрыл ключевые модули unit-тестами;</li><li>Разрабатывал React SPA (Jotai, TanStack Query, MUI, Tailwind) и Express.js backend (PostgreSQL, Firebase, Redis, Stripe-подписки, OAuth) для SaaS-сервиса обмена корзинами с интеграцией API ретейлеров (Amazon PAAPI, Walmart, eBay, Kroger);</li><li>Настраивал CI/CD на GitHub Actions: деплой в Yandex Cloud, сборка Docker-образов, миграции БД, Sentry-мониторинг, CodePush OTA-обновления.</li></ol><b>Стек:</b> NestJS, Fastify, React, React Native, TypeScript, PostgreSQL, Drizzle ORM, Firebase, Redis, Express.js, Tailwind CSS, MUI, Jotai, TanStack Query, Stripe, Docker, GitHub Actions, Yandex Cloud, Chrome Extensions (MV3), Sentry, Jest",
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
