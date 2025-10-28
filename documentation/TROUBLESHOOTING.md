# 🔧 Решение проблемы "Cannot read properties of undefined"

## ✅ Проблема решена!

Я обновил архив с правильной структурой проекта Maizzle.

## 📦 Что было исправлено:

1. ✅ Добавлена правильная структура папок (`src/templates`, `src/layouts`)
2. ✅ Создан файл `config.js` для dev-режима
3. ✅ Обновлен `config.production.js` с правильной конфигурацией
4. ✅ Добавлен базовый layout `src/layouts/main.html`
5. ✅ Шаблоны обновлены для использования layout
6. ✅ Добавлено `"type": "module"` в `package.json`
7. ✅ Tailwind конфигурация обновлена в ES module формат

## 🚀 Теперь запуск работает!

### Шаг 1: Скачайте обновленный архив
[Скачать soberizavod-email-templates.zip](soberizavod-email-templates.zip)

### Шаг 2: Распакуйте и установите зависимости

```bash
# Распакуйте архив
unzip soberizavod-email-templates.zip -d soberizavod-emails
cd soberizavod-emails

# Установите зависимости
npm install
```

### Шаг 3: Запустите dev-сервер

```bash
npm run dev
```

✅ **Теперь должно работать!** Откроется http://localhost:3000

### Шаг 4: Соберите для продакшена

```bash
npm run build
```

Файлы появятся в папке `build_production/`

---

## 📁 Новая структура проекта

```
soberizavod-emails/
├── src/
│   ├── templates/
│   │   ├── registration-confirmation.html
│   │   └── registration-confirmation-dynamic.html
│   ├── layouts/
│   │   └── main.html
│   ├── components/
│   └── images/
├── config.js                    # Dev конфигурация
├── config.production.js         # Production конфигурация
├── tailwind.config.js
├── package.json
├── README.md
└── QUICK_START.md
```

---

## 🎯 Что изменилось?

### До (не работало):
```
soberizavod-emails/
├── registration-confirmation.html  ❌ не в src/
├── config.production.js            ❌ нет config.js
└── package.json                    ❌ не ES module
```

### После (работает):
```
soberizavod-emails/
├── src/
│   ├── templates/                  ✅ правильная структура
│   │   ├── registration-confirmation.html
│   │   └── registration-confirmation-dynamic.html
│   └── layouts/
│       └── main.html               ✅ базовый layout
├── config.js                       ✅ dev конфигурация
├── config.production.js
├── tailwind.config.js
└── package.json                    ✅ type: module
```

---

## ❓ Если всё ещё не работает

### Проблема: Ошибка при установке
**Решение**: Убедитесь, что у вас Node.js версии 18.20 или выше
```bash
node -v
```

### Проблема: Порт 3000 занят
**Решение**: Измените порт в `config.js`:
```javascript
export default {
  server: {
    port: 3001,  // Используйте другой порт
  },
  // ...
}
```

### Проблема: Ошибки с модулями
**Решение**: Очистите и переустановите:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 💡 Полезные команды

```bash
# Режим разработки (автоперезагрузка)
npm run dev

# Сборка для production
npm run build

# Сборка конкретного окружения
npx maizzle build production
```

---

## ✨ Теперь всё готово!

После этих изменений проект должен работать без ошибок. 

Если возникнут другие вопросы - дайте знать! 🚀
