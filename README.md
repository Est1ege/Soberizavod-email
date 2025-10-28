# Email-шаблоны Соберизавод

Этот проект содержит HTML email-шаблоны для интернет-магазина Соберизавод, созданные с использованием фреймворка Maizzle.

## 📧 Доступные шаблоны

### 1. Подтверждение регистрации
- **Файл статический**: `registration-confirmation.html`
- **Файл динамический**: `registration-confirmation-dynamic.html`
- **Назначение**: Отправляется новым пользователям после успешной регистрации

## 🚀 Быстрый старт

### Установка зависимостей
npm install

### Режим разработки
npm run dev

### Сборка для продакшена
npm run build

## 📝 Использование динамических переменных

Шаблон использует следующие переменные:
- user.fullName
- user.username
- user.email
- user.phone
- registrationDate
- loginUrl
- manager.name
- manager.phone
- manager.mobile

## 🎨 Кастомизация

Цвета бренда настроены в tailwind.config.js:
- brand-blue: #4a9eff
- brand-dark: #1a1f2e

## 📮 Интеграция

Готовые HTML-файлы находятся в папке build_production/ после сборки.
Вы можете интегрировать их с любым почтовым сервисом (Nodemailer, PHPMailer, Flask-Mail и т.д.)

## ✨ Особенности

- ✅ Адаптивный дизайн
- ✅ Инлайн CSS
- ✅ Поддержка всех популярных почтовых клиентов
- ✅ Оптимизирован для Gmail, Outlook, Apple Mail
- ✅ Темный header и footer
- ✅ Кнопка CTA
- ✅ Карточка менеджера
- ✅ QR-код

© 2025 Соберизавод
