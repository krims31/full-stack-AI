# 🚀 NEXUS AI

### Full-Stack AI Platform — React · TypeScript · Express · PostgreSQL · OpenAI · Tauri

**NEXUS AI** — полнофункциональная AI-платформа с системой аутентификации, генерацией контента с использованием OpenAI и адаптивным интерфейсом. Проект построен с разделением frontend/backend, масштабируемой архитектурой **Feature-Sliced Design** и возможностью запуска как веб-приложения и нативного desktop-приложения через **Tauri**.

> Проект разработан как полноценное full-stack приложение, демонстрирующее навыки разработки, проектирования архитектуры, работы с API, базами данных, аутентификацией, AI-интеграциями и тестированием.

---

## ✨ Возможности

### 🔐 Аутентификация

* Регистрация нового пользователя
* Авторизация
* JWT-аутентификация
* Хеширование паролей через bcrypt
* Защищённые API endpoints
* Восстановление пароля через email
* Сброс пароля по токену

### 🤖 AI-функциональность

* Интеграция с OpenAI API
* Генерация AI-контента
* Серверная обработка AI-запросов
* Защита API-ключей — ключ OpenAI не передаётся на клиент
* Расширяемая архитектура для добавления новых AI-функций

### 🎨 Frontend

* Современный адаптивный интерфейс
* React 19 + TypeScript
* Tailwind CSS 4
* React Router 7
* React Hook Form
* Zustand для управления состоянием
* Компонентный подход
* Разделение UI и бизнес-логики

### 🖥️ Desktop

Приложение может запускаться как нативное desktop-приложение с использованием **Tauri**.

Это позволяет использовать единую frontend-кодовую базу для:

* Web
* Windows
* macOS
* Linux

### 🧪 Качество кода

* Vitest
* React Testing Library
* ESLint
* TypeScript
* Модульная архитектура
* Разделение ответственности между слоями приложения

---

# 🏗️ Архитектура

Проект организован с использованием принципов **Feature-Sliced Design (FSD)** на frontend и модульного подхода на backend.

```text
full-stack-AI/
│
├── backend/
│   ├── app/
│   │   └── Application configuration
│   │
│   ├── interface/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── middleware/
│   │
│   ├── modules/
│   │   ├── auth/
│   │   ├── ai/
│   │   └── ...
│   │
│   ├── shared/
│   │   ├── config/
│   │   ├── database/
│   │   └── utils/
│   │
│   └── types/
│
├── frontend/
│   ├── app/
│   │   ├── providers/
│   │   ├── router/
│   │   └── App.tsx
│   │
│   ├── entities/
│   │   └── user/
│   │
│   ├── features/
│   │   ├── authentication/
│   │   ├── password-recovery/
│   │   └── ai-generation/
│   │
│   ├── pages/
│   │   ├── login/
│   │   ├── register/
│   │   ├── dashboard/
│   │   └── ...
│   │
│   └── shared/
│       ├── ui/
│       ├── api/
│       ├── hooks/
│       └── utils/
│
├── packaging/
│   └── desktop / deployment
│
├── public/
│
├── package.json
└── README.md
```

### Почему FSD?

Feature-Sliced Design позволяет разделить приложение по ответственности и уменьшить связанность между модулями.

Например:

```text
entities/
    user/

features/
    authentication/
    password-recovery/
    ai-generation/

pages/
    login/
    register/
    dashboard/
```

Такой подход упрощает:

* поддержку проекта;
* добавление новых функций;
* повторное использование компонентов;
* тестирование;
* работу нескольких разработчиков над проектом.

---

# 🔄 Как работает приложение

```text
┌─────────────────────────────┐
│          React UI           │
│      React + TypeScript     │
└──────────────┬──────────────┘
               │
               │ HTTP / REST API
               ▼
┌─────────────────────────────┐
│        Express Server       │
│                             │
│  Auth │ AI │ Middleware     │
└───────┬─────────────┬───────┘
        │             │
        ▼             ▼
┌──────────────┐  ┌──────────────┐
│ PostgreSQL   │  │   OpenAI     │
│              │  │     API      │
└──────────────┘  └──────────────┘
        │
        ▼
   User data
```

### AI-запрос

1. Пользователь вводит запрос в интерфейсе.
2. React отправляет запрос на backend.
3. Express проверяет авторизацию.
4. Backend формирует запрос к OpenAI.
5. OpenAI возвращает результат.
6. Backend отдаёт результат клиенту.
7. React отображает сгенерированный контент.

**OpenAI API key хранится только на сервере**, поэтому клиент не получает доступ к секретному ключу.

---

# 🔑 API

Основные endpoints:

| Method | Endpoint                    | Description                  |
| ------ | --------------------------- | ---------------------------- |
| `POST` | `/api/auth/register`        | Регистрация пользователя     |
| `POST` | `/api/auth/login`           | Авторизация                  |
| `POST` | `/api/auth/forgot-password` | Запрос восстановления пароля |
| `POST` | `/api/auth/reset-password`  | Сброс пароля                 |
| `POST` | `/api/ai/generate`          | Генерация AI-контента        |

API организован по модулям, поэтому добавление новых возможностей не требует изменения всей серверной части.

---

# 🛡️ Безопасность

В проекте реализованы базовые механизмы безопасности full-stack приложения:

* JWT для аутентификации;
* bcrypt для безопасного хранения паролей;
* секреты и API-ключи через environment variables;
* OpenAI API вызывается только с backend;
* защищённые API endpoints;
* отдельный flow восстановления пароля;
* валидация входных данных.

> Для production-развёртывания проект может быть дополнительно усилен rate limiting, security headers, CSRF/XSS-защитой, refresh tokens, audit logging и централизованной обработкой ошибок.

---

# 🧰 Technology Stack

## Frontend

| Technology          | Purpose             |
| ------------------- | ------------------- |
| **React 19**        | UI                  |
| **TypeScript**      | Type safety         |
| **Vite**            | Development & build |
| **Tailwind CSS 4**  | Styling             |
| **React Router 7**  | Routing             |
| **Zustand**         | State management    |
| **React Hook Form** | Forms & validation  |

## Backend

| Technology     | Purpose          |
| -------------- | ---------------- |
| **Node.js**    | Runtime          |
| **Express 5**  | REST API         |
| **PostgreSQL** | Database         |
| **JWT**        | Authentication   |
| **bcrypt**     | Password hashing |
| **Nodemailer** | Email delivery   |
| **OpenAI SDK** | AI integration   |

## Desktop & Tooling

| Technology                | Purpose             |
| ------------------------- | ------------------- |
| **Tauri**                 | Desktop application |
| **Vitest**                | Testing             |
| **React Testing Library** | UI testing          |
| **ESLint**                | Code quality        |

---

# 📦 Installation

## Requirements

* Node.js 18+
* PostgreSQL
* OpenAI API key
* Email account with SMTP/App Password

### 1. Clone repository

```bash
git clone https://github.com/krims31/full-stack-AI.git

cd full-stack-AI
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create `.env` in the project root:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/your_db

# Authentication
JWT_SECRET=your_secret_key

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Email
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Server
PORT=3000
```

### 4. Configure PostgreSQL

Create the required database and apply project migrations if available.

### 5. Start development server

```bash
npm run dev
```

---

# 🚀 Available Scripts

| Command                  | Description                   |
| ------------------------ | ----------------------------- |
| `npm run dev`            | Start development environment |
| `npm run build`          | Build frontend + backend      |
| `npm run build:frontend` | Build frontend                |
| `npm run build:backend`  | Build backend                 |
| `npm start`              | Start production backend      |
| `npm run test`           | Run tests                     |
| `npm run test:ui`        | Run tests with UI             |
| `npm run lint`           | Run ESLint                    |
| `npm run preview`        | Preview frontend build        |
| `npm run tauri`          | Run/build desktop application |

---

# 🧠 Engineering Decisions

### Почему React + TypeScript?

TypeScript позволяет обнаруживать большое количество ошибок ещё на этапе разработки и делает кодовую базу более предсказуемой при масштабировании.

### Почему Express?

Express предоставляет минималистичную основу для построения REST API и позволяет самостоятельно организовать архитектуру backend-приложения.

### Почему PostgreSQL?

PostgreSQL подходит для хранения пользователей, authentication-related данных и дальнейшего расширения модели приложения.

### Почему Zustand?

Для данного проекта Zustand позволяет реализовать глобальное состояние без большого количества boilerplate-кода.

### Почему Tauri?

Tauri позволяет переиспользовать существующий frontend и создавать desktop-приложение без необходимости писать отдельный интерфейс.

---

# 📈 Возможности для дальнейшего развития

Архитектура проекта позволяет расширять приложение без существенной переработки существующего кода.

Планируемые направления:

* [ ] Streaming AI responses
* [ ] История AI-запросов
* [ ] Сохранение и управление генерациями
* [ ] Несколько AI-моделей
* [ ] User profile
* [ ] Refresh token authentication
* [ ] Rate limiting
* [ ] Docker / Docker Compose
* [ ] CI/CD
* [ ] Production deployment
* [ ] Более широкое test coverage
* [ ] Мониторинг и logging
* [ ] Role-based access control

---

# 🎯 Что демонстрирует проект

NEXUS AI — это не просто интерфейс для работы с AI.

Проект демонстрирует практический опыт работы с:

* **Full-Stack разработкой**
* **React + TypeScript**
* **Node.js / Express**
* **REST API**
* **PostgreSQL**
* **JWT authentication**
* **Password recovery**
* **OpenAI API**
* **Feature-Sliced Design**
* **State management**
* **Form handling**
* **Testing**
* **Desktop development with Tauri**
* **Environment configuration**
* **Модульной архитектурой**

---

# 👨‍💻 Project Highlights

### 🔐 Authentication

Полный authentication flow от регистрации до восстановления пароля.

### 🤖 AI Integration

Интеграция внешнего AI API через backend с изоляцией секретных ключей.

### 🧩 Scalable Architecture

Feature-Sliced Design на frontend и модульная структура backend позволяют масштабировать приложение.

### 🖥️ Cross-platform

Одна frontend-кодовая база может использоваться как для web, так и для desktop-приложения.

### 🧪 Testing

Проект покрывается unit/component тестами с использованием Vitest и React Testing Library.

---

# 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 About the Project

**NEXUS AI** был разработан как практический full-stack проект с фокусом не только на UI, но и на архитектуре, безопасности, API-интеграциях, работе с базой данных и масштабируемости приложения.

Главная цель проекта — показать полный цикл разработки современного веб-приложения: от проектирования архитектуры и frontend-интерфейса до backend API, базы данных, аутентификации, AI-интеграции, тестирования и desktop-сборки.

