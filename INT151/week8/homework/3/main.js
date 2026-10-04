// ตรวจอีเมลตอนส่งฟอร์มสมัครรับข่าวสาร
// มีฟอร์มสมัครรับข่าวสารโครงนี้

// <form id="newsletter-form">
//   <input id="news-email" type="email">
//   <span id="news-error"></span>
//   <button type="submit">สมัคร</button>
// </form>
// เขียนโค้ดผูก submit event ให้ preventDefault เสมอ แล้วตรวจสอบอีเมลด้วย regex /^[\w.-]+@[\w-]+\.[a-z]{2,}$/i

// ถ้าไม่ถูกต้อง ให้แสดงข้อความ error ใน <span id="news-error">
// ถ้าถูกต้อง ให้เคลียร์ error (span ว่าง) และ console.log ข้อความ สมัครสำเร็จ
// 🔧 ตอนตรวจ ระบบจะจำลองการกดปุ่ม/พิมพ์/ส่งฟอร์มให้เอง — เขียนแค่โค้ดผูก listener ไม่ต้องเรียก click() เอง

// เขียนโค้ดของคุณที่นี่
const newsletterForm = document.getElementById("newsletter-form");
const inputMail = document.getElementById("news-email");
const errorMsg = document.getElementById("news-error");

const mailRegex = /^[\w.-]+@[\w-]+\.[a-z]{2,}$/i;
const checkEmail = (regex, str) => regex.test(str);

newsletterForm.addEventListener('submit', (event) => {
    errorMsg.textContent = '';
    event.preventDefault();
    const userInput = inputMail.value
    if (checkEmail(mailRegex,userInput) ) {
      console.log('สมัครสำเร็จ');
    } else {
      errorMsg.textContent = 'error';
    }
});

