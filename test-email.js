// =====================================
// ТЕСТОВЫЙ СКРИПТ ДЛЯ ОТПРАВКИ EMAIL
// =====================================

import nodemailer from 'nodemailer';
import fs from 'fs';

// ============================================
// ВЫБЕРИТЕ МЕТОД (раскомментируйте нужный):
// ============================================

// ===== МЕТОД 1: MAILTRAP (РЕКОМЕНДУЕТСЯ) =====
// 1. Зарегистрируйтесь на https://mailtrap.io
// 2. Создайте inbox
// 3. Скопируйте SMTP данные
// 4. Вставьте их ниже

const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'a9ecf8eef8db46', // Замените!
    pass: '11390f799d4d50'  // Замените!
  }
});

// ===== МЕТОД 2: GMAIL =====
// Раскомментируйте этот блок и закомментируйте Mailtrap выше

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'yestau.good@gmail.com',      // Замените!
//     pass: 'fixmafdbzsttxibf' // App Password из настроек Gmail
//   }
// });


// ===== МЕТОД 3: YANDEX =====
// Раскомментируйте этот блок
/*
const transporter = nodemailer.createTransport({
  host: 'smtp.yandex.ru',
  port: 465,
  secure: true,
  auth: {
    user: 'ваш_email@yandex.ru',    // Замените!
    pass: 'пароль_приложения'       // Из настроек Yandex
  }
});
*/

// ============================================
// НАСТРОЙКИ ПИСЬМА
// ============================================

// Читаем HTML шаблон
let emailHtml;
try {
  emailHtml = fs.readFileSync(
    // './build_local/src/templates/registration-confirmation-dynamic.html',
    './registration-confirmation-dynamic.html',
    'utf8'
  );
} catch (error) {
  console.error('❌ Ошибка: Не найден файл шаблона!');
  console.log('💡 Сначала выполните: npm run build');
  process.exit(1);
}

// Заменяем переменные тестовыми данными
emailHtml = emailHtml
  .replace(/\{\{ user\.fullName \}\}/g, 'Иван Иванов')
  .replace(/\{\{ user\.username \}\}/g, 'ivanov123')
  .replace(/\{\{ user\.email \}\}/g, 'ivanov@example.com')
  .replace(/\{\{ user\.phone \}\}/g, '+7 999 123 45 67')
  .replace(/\{\{ registrationDate \}\}/g, 'Сегодня в 15:30')
  .replace(/\{\{ loginUrl \}\}/g, 'https://soberizavod.ru/login')
  .replace(/\{\{ manager\.name \}\}/g, 'Волнухин Иван')
  .replace(/\{\{ manager\.phone \}\}/g, '+7 (495) 236-95-55')
  .replace(/\{\{ manager\.mobile \}\}/g, '+7 (929) 554-17-92')
  .replace(/\{\{ manager\.extension \}\}/g, '+7 (929) 554-17-92')
  .replace(/\{\{ social\.youtube \}\}/g, '#')
  .replace(/\{\{ social\.telegram \}\}/g, '#')
  .replace(/\{\{ social\.vk \}\}/g, '#')
  .replace(/\{\{ social\.instagram \}\}/g, '#')
  .replace(/\{\{ social\.linkedin \}\}/g, '#');

// Настройки отправки
const mailOptions = {
  from: '"Соберизавод" <noreply@soberizavod.ru>',
  to: 'test@example.com', // Можете изменить на свой email
  subject: '🧪 ТЕСТ: Подтверждение регистрации на soberizavod.ru',
  html: emailHtml
};

// ============================================
// ОТПРАВКА
// ============================================

console.log('📧 Отправка тестового письма...');
console.log('⏳ Подождите...\n');

transporter.sendMail(mailOptions)
  .then(info => {
    console.log('✅ УСПЕШНО! Письмо отправлено!\n');
    console.log('📨 Message ID:', info.messageId);
    console.log('📬 Кому:', mailOptions.to);
    console.log('\n🔍 Проверьте:');
    console.log('   - Для Mailtrap: откройте inbox на mailtrap.io');
    console.log('   - Для Gmail/Yandex: проверьте свою почту (и папку Спам)');
    console.log('\n✨ Готово!');
  })
  .catch(error => {
    console.error('\n❌ ОШИБКА при отправке:\n');
    console.error(error.message);
    console.log('\n💡 Возможные причины:');
    console.log('   1. Неправильные username/password');
    console.log('   2. Не установлен nodemailer (npm install nodemailer)');
    console.log('   3. Не выполнен build (npm run build)');
    console.log('   4. Для Gmail нужен App Password');
    console.log('   5. Для Yandex нужно включить SMTP в настройках');
  });