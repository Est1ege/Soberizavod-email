# 🚀 Быстрый старт

## Установка

1. Распакуйте архив
2. Откройте терминал в папке проекта
3. Выполните команды:

```bash
npm install
npm run dev
```

## Использование

### Режим разработки
```bash
npm run dev
```
Откроется http://localhost:3000

### Сборка для продакшена
```bash
npm run build
```
Результат в папке `build_production/`

## Быстрая интеграция

### Node.js
```javascript
const fs = require('fs').promises;
let html = await fs.readFile('./template.html', 'utf8');
html = html.replace('{{ user.fullName }}', 'Иван Иванов');
// Отправьте html через ваш почтовый сервис
```

### PHP
```php
$html = file_get_contents('./template.html');
$html = str_replace('{{ user.fullName }}', 'Иван Иванов', $html);
// Отправьте $html через PHPMailer
```

## Переменные

- `{{ user.fullName }}` - Имя пользователя
- `{{ user.email }}` - Email
- `{{ user.phone }}` - Телефон
- `{{ registrationDate }}` - Дата
- `{{ loginUrl }}` - Ссылка на вход

Полная документация в файлах README.md и INTEGRATION.md
