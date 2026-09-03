NEXUS AI

Полнофункциональное веб-приложение с интеграцией искусственного интеллекта, системой аутентификации и современным стеком технологий. Проект включает бэкенд на Express, фронтенд на React с TypeScript, а также поддержку десктопной версии через Tauri.

Особенности
🔐 Полноценная аутентификация — регистрация, вход, восстановление пароля через email

🤖 Интеграция с OpenAI — использование AI-моделей для генерации контента

🧩 Feature-Sliced-Design — код разделён на логические модули для лёгкой поддержки и масштабирования

📱 Адаптивный интерфейс — современный UI на React с Tailwind CSS

🖥️ Десктопная версия — поддержка Tauri для нативных приложений

🧪 Тестирование — покрытие тестами с использованием Vitest и React Testing Library

TECHNOLOGY
BACKEND
Express 5 — серверная платформа

PostgreSQL — реляционная база данных

JWT — аутентификация через JSON Web Tokens

Bcrypt — хеширование паролей

Nodemailer — отправка email для восстановления пароля

OpenAI SDK — интеграция с AI-моделями

FRONTEND
React 19 — библиотека для построения интерфейсов

TypeScript — типизированный JavaScript

Vite — быстрая сборка и разработка

Tailwind CSS 4 — утилитарный CSS-фреймворк

React Router 7 — маршрутизация

Zustand — управление состоянием

React Hook Form — работа с формами

TOOLS
Tauri — сборка десктопных приложений

ESLint — статический анализ кода

Vitest — юнит-тестирование

Установка и запуск
Требования
Node.js (версия 18+)

PostgreSQL (локально или удалённо)

Ключ API OpenAI

Настройка
Клонируйте репозиторий:

bash
git clone https://github.com/krims31/full-stack-AI.git
cd full-stack-AI
Установите зависимости:

bash
npm install
Создайте файл .env в корне проекта со следующими переменными:

env
# База данных
DATABASE_URL=postgresql://user:password@localhost:5432/your_db

# JWT
JWT_SECRET=your_secret_key

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Email для восстановления пароля
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
Настройте базу данных (примените миграции, если они есть).

Запуск
Режим разработки:

bash
npm run dev
Сборка проекта:

bash
npm run build
Запуск в production:

bash
npm start
Десктопная версия (Tauri):

bash
npm run tauri
Структура проекта
text
full-stack-AI/
├── backend/                 # Серверная часть
│   ├── app/                 # Основной код приложения
│   ├── interface/           # API-слой (контроллеры, middleware)
│   ├── modules/             # Бизнес-логика (аутентификация, AI и др.)
│   ├── shared/              # Общие утилиты и конфигурации
│   └── types/               # TypeScript-типы
├── frontend/                # Клиентская часть
│   ├── app/                 # Провайдеры, роутинг, App.tsx
│   ├── entities/            # Сущности (например, user)
│   ├── features/            # Фичи приложения (восстановление пароля и др.)
│   ├── pages/               # Страницы приложения
│   └── shared/              # Переиспользуемые UI-компоненты и утилиты
├── packaging/               # Сборка и деплой (включая ai-nexus)
├── public/                  # Статические файлы
└── package.json             # Корневой package.json (монорепозиторий)
API-эндпоинты (основные)
Метод	Эндпоинт	Описание
POST	/api/auth/register	Регистрация пользователя
POST	/api/auth/login	Вход в систему
POST	/api/auth/forgot-password	Запрос на восстановление пароля
POST	/api/auth/reset-password	Сброс пароля
POST	/api/ai/generate	Генерация контента через OpenAI
Полный список эндпоинтов можно найти в папке backend/interface/.

Скрипты
Команда	Описание
npm run dev	Запуск фронтенда в режиме разработки
npm run build	Сборка фронтенда и бэкенда
npm run build:frontend	Сборка только фронтенда
npm run build:backend	Сборка только бэкенда
npm start	Запуск собранного бэкенда
npm run test	Запуск тестов
npm run test:ui	Запуск тестов с UI
npm run lint	Проверка кода линтером
npm run preview	Предпросмотр собранного фронтенда
npm run tauri	Сборка/запуск десктопной версии
Переменные окружения
Переменная	Описание	Обязательная
DATABASE_URL	URL подключения к PostgreSQL	Да
JWT_SECRET	Секретный ключ для JWT	Да
OPENAI_API_KEY	API-ключ OpenAI	Да (для AI-функций)
EMAIL_USER	Email для отправки писем	Да (для восстановления пароля)
EMAIL_PASS	Пароль приложения для email	Да (для восстановления пароля)
PORT	Порт для сервера (по умолчанию 3000)	Нет
Вклад в проект
Форкните репозиторий

Создайте ветку для вашей фичи (git checkout -b feature/amazing-feature)

Зафиксируйте изменения (git commit -m 'Add some amazing feature')

Отправьте в ветку (git push origin feature/amazing-feature)

Откройте Pull Request

Лицензия
Этот проект распространяется под лицензией MIT. Подробности смотрите в файле LICENSE.
