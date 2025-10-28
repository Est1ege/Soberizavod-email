# 📧 Email-шаблоны для Соберизавод

## ✅ Проект завершен!

Я создал для вас профессиональные email-шаблоны для подтверждения регистрации на сайте soberizavod.ru

---

## 📦 Что включено

### 1. **Два варианта шаблона**
   - **Статический** (`registration-confirmation.html`) - с примерами данных, готов к использованию
   - **Динамический** (`registration-confirmation-dynamic.html`) - с переменными для персонализации

### 2. **Полная документация**
   - `README.md` - общее описание проекта
   - `INTEGRATION.md` - подробное руководство по интеграции
   - Примеры кода для Node.js, PHP, Python

### 3. **Настройки проекта**
   - `tailwind.config.js` - конфигурация цветов и стилей
   - `config.production.js` - настройки сборки для продакшена
   - `package.json` - зависимости проекта

---

## 🎨 Дизайн

### Соответствует вашему макету:
- ✅ Темный header с логотипом и контактами
- ✅ Приветственное сообщение с ФИО пользователя
- ✅ Блок с регистрационными данными (ФИО, логин, email, телефон)
- ✅ Кнопка "Войти в аккаунт"
- ✅ Предупреждение об автоматическом письме
- ✅ Секция поддержки с информацией о рабочем времени
- ✅ Карточка менеджера с контактами
- ✅ QR-код для быстрой связи
- ✅ Темный footer с социальными сетями
- ✅ Полностью адаптивный дизайн

### Цветовая схема:
- **Основной синий**: #4a9eff
- **Темный фон**: #1a1f2e
- Чистый и профессиональный стиль

---

## 🚀 Быстрый старт

### Шаг 1: Скачайте файлы
```bash
# Распакуйте архив soberizavod-email-templates.zip
```

### Шаг 2: Установите зависимости
```bash
cd soberizavod-email-templates
npm install
```

### Шаг 3: Запустите режим разработки
```bash
npm run dev
```
Откроется http://localhost:3000 с предпросмотром

### Шаг 4: Соберите для продакшена
```bash
npm run build
```
Готовые файлы появятся в папке `build_production/`

---

## 💻 Интеграция

### Доступные переменные:

**Пользователь:**
- `{{ user.fullName }}` - Полное имя
- `{{ user.username }}` - Логин
- `{{ user.email }}` - Email
- `{{ user.phone }}` - Телефон

**Менеджер:**
- `{{ manager.name }}` - Имя менеджера
- `{{ manager.phone }}` - Основной телефон
- `{{ manager.mobile }}` - Мобильный телефон
- `{{ manager.extension }}` - Добавочный

**Прочее:**
- `{{ registrationDate }}` - Дата регистрации
- `{{ loginUrl }}` - Ссылка на вход
- `{{ social.* }}` - Ссылки на соцсети

### Пример интеграции (Node.js):

```javascript
const nodemailer = require('nodemailer');
const fs = require('fs').promises;

async function sendRegistrationEmail(userData) {
  let emailHtml = await fs.readFile('./template.html', 'utf8');
  
  emailHtml = emailHtml
    .replace(/\{\{ user\.fullName \}\}/g, userData.fullName)
    .replace(/\{\{ user\.email \}\}/g, userData.email);
  
  const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'noreply@soberizavod.ru',
      pass: 'your-password'
    }
  });
  
  await transporter.sendMail({
    from: '"Соберизавод" <noreply@soberizavod.ru>',
    to: userData.email,
    subject: 'Подтверждение регистрации',
    html: emailHtml
  });
}
```

Полные примеры для PHP и Python в файле `INTEGRATION.md`!

---

## ✨ Особенности

### Техническая оптимизация:
- ✅ Инлайн CSS для максимальной совместимости
- ✅ Оптимизация для всех популярных почтовых клиентов
- ✅ Адаптивный дизайн для мобильных устройств
- ✅ Минификация HTML и CSS
- ✅ Удаление неиспользуемых стилей

### Поддержка почтовых клиентов:
- ✅ Gmail (web, iOS, Android)
- ✅ Outlook (web, desktop, Office 365)
- ✅ Apple Mail (macOS, iOS)
- ✅ Yahoo Mail
- ✅ Mail.ru
- ✅ Yandex.Mail

---

## 📁 Структура файлов

```
soberizavod-email-templates/
│
├── 📄 registration-confirmation.html          # Статический шаблон
├── 📄 registration-confirmation-dynamic.html  # Динамический шаблон
│
├── ⚙️ config.production.js                    # Настройки сборки
├── ⚙️ tailwind.config.js                      # Настройки стилей
├── ⚙️ package.json                            # Зависимости
│
├── 📖 README.md                                # Документация
└── 📖 INTEGRATION.md                           # Руководство по интеграции
```

---

## 🎯 Что дальше?

1. **Протестируйте шаблоны** в разных почтовых клиентах
2. **Настройте под себя** (цвета, тексты, логотип)
3. **Интегрируйте** в вашу систему отправки email
4. **Добавьте изображения** (фото менеджера, настоящий QR-код)
5. **Настройте SMTP** для отправки писем

---

## 📞 Поддержка

Если возникнут вопросы:
- 📧 Email: sales@soberizavod.ru
- 📱 Телефон: +7 (495) 236-95-55
- 🌐 Сайт: www.soberizavod.ru

---

## 📚 Полезные ссылки

- [Документация Maizzle](https://maizzle.com/docs) - фреймворк для email
- [Tailwind CSS](https://tailwindcss.com/) - CSS фреймворк
- [Nodemailer](https://nodemailer.com/) - отправка email в Node.js
- [PHPMailer](https://github.com/PHPMailer/PHPMailer) - отправка email в PHP
- [Flask-Mail](https://pythonhosted.org/Flask-Mail/) - отправка email в Python

---

## ✅ Чек-лист готовности

- [x] Email-шаблоны созданы
- [x] Адаптивный дизайн реализован
- [x] Документация написана
- [x] Примеры интеграции добавлены
- [x] Конфигурация настроена
- [x] Проект готов к использованию

---

**Успехов с вашим проектом!** 🚀

*Создано с использованием Maizzle v5.0 и Tailwind CSS*

---

© 2025 Соберизавод. Все права защищены.
