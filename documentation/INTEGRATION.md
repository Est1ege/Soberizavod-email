# 📧 Руководство по интеграции email-шаблонов

## 1. Структура проекта

После распаковки архива вы увидите:

```
soberizavod-email-templates/
├── registration-confirmation.html          # Статический шаблон
├── registration-confirmation-dynamic.html  # Динамический шаблон
├── config.production.js                    # Настройки сборки
├── tailwind.config.js                      # Настройки Tailwind
├── package.json                            # Зависимости проекта
└── README.md                               # Документация
```

## 2. Установка и настройка

### Шаг 1: Установите Node.js
Если у вас еще не установлен Node.js (версия 18.20 или выше):
- Скачайте с https://nodejs.org/
- Установите на вашем компьютере

### Шаг 2: Установите зависимости
Откройте терминал в папке проекта и выполните:

```bash
npm install
```

### Шаг 3: Запустите режим разработки
Для локального просмотра и редактирования:

```bash
npm run dev
```

Откройте браузер на http://localhost:3000

### Шаг 4: Соберите для продакшена
Когда шаблоны готовы к использованию:

```bash
npm run build
```

Оптимизированные файлы появятся в папке `build_production/`

## 3. Интеграция с backend

### Вариант A: Node.js + Nodemailer

```javascript
const nodemailer = require('nodemailer');
const fs = require('fs').promises;

// Функция для отправки email регистрации
async function sendRegistrationEmail(userData) {
  // Читаем шаблон
  let emailHtml = await fs.readFile(
    './build_production/registration-confirmation.html',
    'utf8'
  );
  
  // Заменяем переменные
  emailHtml = emailHtml
    .replace(/\{\{ user\.fullName \}\}/g, userData.fullName)
    .replace(/\{\{ user\.username \}\}/g, userData.username)
    .replace(/\{\{ user\.email \}\}/g, userData.email)
    .replace(/\{\{ user\.phone \}\}/g, userData.phone)
    .replace(/\{\{ registrationDate \}\}/g, new Date().toLocaleString('ru-RU'))
    .replace(/\{\{ loginUrl \}\}/g, 'https://soberizavod.ru/login')
    .replace(/\{\{ manager\.name \}\}/g, 'Волнухин Иван')
    .replace(/\{\{ manager\.phone \}\}/g, '+7 (495) 236-95-55')
    .replace(/\{\{ manager\.mobile \}\}/g, '+7 (929) 554-17-92')
    .replace(/\{\{ manager\.extension \}\}/g, '+7 (929) 554-17-92');
  
  // Настройка транспорта
  const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru', // или ваш SMTP сервер
    port: 465,
    secure: true,
    auth: {
      user: 'noreply@soberizavod.ru',
      pass: 'your-password'
    }
  });
  
  // Отправка
  await transporter.sendMail({
    from: '"Соберизавод" <noreply@soberizavod.ru>',
    to: userData.email,
    subject: 'Подтверждение регистрации на soberizavod.ru',
    html: emailHtml
  });
}

// Использование
sendRegistrationEmail({
  fullName: 'Иванов Иван Иванович',
  username: 'ivanov123',
  email: 'ivanov@example.com',
  phone: '+7 999 123 45 67'
});
```

### Вариант B: PHP + PHPMailer

```php
<?php
require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;

function sendRegistrationEmail($userData) {
    // Читаем шаблон
    $emailHtml = file_get_contents('build_production/registration-confirmation.html');
    
    // Заменяем переменные
    $replacements = [
        '{{ user.fullName }}' => $userData['fullName'],
        '{{ user.username }}' => $userData['username'],
        '{{ user.email }}' => $userData['email'],
        '{{ user.phone }}' => $userData['phone'],
        '{{ registrationDate }}' => date('d.m.Y в H:i'),
        '{{ loginUrl }}' => 'https://soberizavod.ru/login',
        '{{ manager.name }}' => 'Волнухин Иван',
        '{{ manager.phone }}' => '+7 (495) 236-95-55',
        '{{ manager.mobile }}' => '+7 (929) 554-17-92',
        '{{ manager.extension }}' => '+7 (929) 554-17-92'
    ];
    
    $emailHtml = str_replace(
        array_keys($replacements),
        array_values($replacements),
        $emailHtml
    );
    
    // Настройка PHPMailer
    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();
    $mail->Host = 'smtp.yandex.ru';
    $mail->SMTPAuth = true;
    $mail->Username = 'noreply@soberizavod.ru';
    $mail->Password = 'your-password';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;
    
    // Получатель
    $mail->setFrom('noreply@soberizavod.ru', 'Соберизавод');
    $mail->addAddress($userData['email'], $userData['fullName']);
    
    // Контент
    $mail->isHTML(true);
    $mail->Subject = 'Подтверждение регистрации на soberizavod.ru';
    $mail->Body = $emailHtml;
    
    // Отправка
    $mail->send();
}

// Использование
sendRegistrationEmail([
    'fullName' => 'Иванов Иван Иванович',
    'username' => 'ivanov123',
    'email' => 'ivanov@example.com',
    'phone' => '+7 999 123 45 67'
]);
?>
```

### Вариант C: Python + Flask-Mail

```python
from flask import Flask
from flask_mail import Mail, Message
import re

app = Flask(__name__)

# Конфигурация
app.config['MAIL_SERVER'] = 'smtp.yandex.ru'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = 'noreply@soberizavod.ru'
app.config['MAIL_PASSWORD'] = 'your-password'

mail = Mail(app)

def send_registration_email(user_data):
    # Читаем шаблон
    with open('build_production/registration-confirmation.html', 'r', encoding='utf-8') as f:
        email_html = f.read()
    
    # Заменяем переменные
    replacements = {
        '{{ user.fullName }}': user_data['fullName'],
        '{{ user.username }}': user_data['username'],
        '{{ user.email }}': user_data['email'],
        '{{ user.phone }}': user_data['phone'],
        '{{ registrationDate }}': 'Сегодня в 13:53',
        '{{ loginUrl }}': 'https://soberizavod.ru/login',
        '{{ manager.name }}': 'Волнухин Иван',
        '{{ manager.phone }}': '+7 (495) 236-95-55',
        '{{ manager.mobile }}': '+7 (929) 554-17-92',
        '{{ manager.extension }}': '+7 (929) 554-17-92'
    }
    
    for key, value in replacements.items():
        email_html = email_html.replace(key, value)
    
    # Создание сообщения
    msg = Message(
        'Подтверждение регистрации на soberizavod.ru',
        sender=('Соберизавод', 'noreply@soberizavod.ru'),
        recipients=[user_data['email']]
    )
    msg.html = email_html
    
    # Отправка
    mail.send(msg)

# Использование
send_registration_email({
    'fullName': 'Иванов Иван Иванович',
    'username': 'ivanov123',
    'email': 'ivanov@example.com',
    'phone': '+7 999 123 45 67'
})
```

## 4. Настройка SMTP

### Yandex Mail (рекомендуется для .ru доменов)
- **Сервер**: smtp.yandex.ru
- **Порт**: 465 (SSL) или 587 (TLS)
- **Требует аутентификации**: Да

### Mail.ru
- **Сервер**: smtp.mail.ru
- **Порт**: 465 (SSL) или 587 (TLS)
- **Требует аутентификации**: Да

### Gmail (для тестирования)
- **Сервер**: smtp.gmail.com
- **Порт**: 465 (SSL) или 587 (TLS)
- **Требует аутентификации**: Да
- **Примечание**: Включите "Доступ для небезопасных приложений"

## 5. Кастомизация шаблона

### Изменение цветов
Отредактируйте `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#4a9eff',    // Ваш основной цвет
        'brand-dark': '#1a1f2e',    // Цвет header/footer
      }
    }
  }
}
```

### Изменение текста
Откройте `registration-confirmation-dynamic.html` и отредактируйте нужные части.

### Добавление логотипа
Замените SVG-логотип на изображение:

```html
<!-- Вместо SVG -->
<img src="https://soberizavod.ru/logo.png" alt="Соберизавод" height="48">
```

### Изменение QR-кода
Замените SVG-заглушку на реальный QR-код:

```html
<img src="{{ qrCodeUrl }}" alt="QR Code" width="96" height="96">
```

## 6. Тестирование

### Локальное тестирование
Используйте [Mailtrap](https://mailtrap.io/) для безопасного тестирования:

```javascript
// Nodemailer + Mailtrap
const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "your-mailtrap-user",
    pass: "your-mailtrap-password"
  }
});
```

### Тестирование на реальных клиентах
Отправьте тестовое письмо на:
- Gmail
- Outlook/Hotmail
- Mail.ru
- Yandex
- Apple Mail (если доступно)

## 7. Производительность

### Оптимизация изображений
- Используйте формат WebP для современных клиентов
- Добавьте fallback в JPEG/PNG
- Оптимальный размер: до 100KB на изображение

### Сжатие HTML
Maizzle автоматически минифицирует HTML при сборке production:

```javascript
// config.production.js
minify: {
  minifyCSS: true,
  minifyJS: true,
  removeComments: true
}
```

## 8. Частые проблемы

### Проблема: Письмо не доставляется
**Решение**: Проверьте настройки SPF, DKIM, DMARC для вашего домена

### Проблема: Стили не применяются в Outlook
**Решение**: Maizzle автоматически инлайнит CSS. Убедитесь, что используете `npm run build`

### Проблема: Изображения не загружаются
**Решение**: Используйте абсолютные URL с https://

## 9. Поддержка

Если возникли вопросы:
- Email: sales@soberizavod.ru
- Телефон: +7 (495) 236-95-55
- Документация Maizzle: https://maizzle.com/docs

---

© 2025 Соберизавод. Все права защищены.
