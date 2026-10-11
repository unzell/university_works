// จัดการ DOM
// Cookie Consent Banner

// ให้สร้างหน้าเว็บสำหรับแสดง Cookie Consent Banner เพื่อให้ผู้ใช้ยอมรับการใช้งาน Cookie โดยมีความต้องการดังนี้

// 1. หน้าเว็บต้องมี Cookie Banner สำหรับแจ้งผู้ใช้เกี่ยวกับการใช้งาน Cookie และมีปุ่ม Accept Cookies สำหรับให้ผู้ใช้ยอมรับ (มีให้แล้วใน HTML ดังนี้: <div id="cookie-banner"> และ <button id="accept-cookie-btn">)
// 2. ให้สร้างฟังก์ชัน setCookie(name, value, days) สำหรับบันทึก Cookie โดย
//    - รับชื่อ Cookie ผ่าน parameter name
//    - รับค่าที่ต้องการจัดเก็บผ่าน parameter value
//    - รับจำนวนวันที่ Cookie มีอายุผ่าน parameter days
//    - คำนวณวันหมดอายุของ Cookie จากวันที่และเวลาปัจจุบัน
//    - กำหนด Cookie ให้สามารถใช้งานได้กับทุก path ของเว็บไซต์ (path=/)
// 3. ให้สร้างฟังก์ชัน getCookie(name) สำหรับค้นหา Cookie ตามชื่อที่กำหนด โดย
//    - อ่าน Cookie ทั้งหมดจาก document.cookie
//    - แยก Cookie แต่ละรายการออกจากกัน
//    - ค้นหา Cookie ที่มีชื่อตรงกับ parameter name
//    - ถ้าพบ ให้คืนค่าของ Cookie
//    - ถ้าไม่พบ ให้คืนค่า null
// 4. เมื่อผู้ใช้กดปุ่ม Accept Cookies
//    - ให้สร้าง Cookie ชื่อ cookieConsent
//    - กำหนดค่าเป็น "true"
//    - กำหนดอายุ Cookie เป็น 7 วัน
//    - ซ่อน Cookie Banner หลังจากบันทึก Cookie สำเร็จ (display: none)
// 5. เมื่อหน้าเว็บโหลดเสร็จ ให้ใช้ event DOMContentLoaded เพื่อตรวจสอบ Cookie cookieConsent
// 6. หากพบว่า cookieConsent มีค่าเป็น "true" ให้ซ่อน Cookie Banner โดยอัตโนมัติ
// 7. หากไม่พบ Cookie cookieConsent ให้แสดง Cookie Banner เพื่อให้ผู้ใช้สามารถกดปุ่มยอมรับได้
// 8. เมื่อผู้ใช้ Reload หรือกลับมาเปิดเว็บไซต์ใหม่ภายในระยะเวลา 7 วัน Cookie Banner ไม่ควรแสดงอีก หาก Cookie ยังไม่หมดอายุ


// เขียนโค้ดของคุณที่นี่
const acptCookieBtn = document.getElementById("accept-cookie-btn");
const cookieBanner = document.getElementById("cookie-banner");

// 2
function setCookie(name, value, days) {
  const encodedName = encodeURIComponent(name);
  const encodedValue = encodeURIComponent(value);
  let date = new Date()
  date.setTime(date.getTime() + (days*(1000*60*60*24)))
  
  document.cookie = `${encodedName}=${encodedValue}; expires=${date.toUTCString()}; path=/`
};

//3
function getCookie(cookieName) {
  const encodedCookieName =  encodeURIComponent(cookieName);
  const cookies = document.cookie.split('; ');
  const cookie = cookies.find(cookie => cookie.startsWith(encodedCookieName));
  let cookieValue 
  if (cookie) {
    cookieValue = cookie.split("=")[1];
    return cookieValue
  }
  return null ;
}

//4
acptCookieBtn.addEventListener('click', () => {
  setCookie("cookieConsent","true",7);
  cookieBanner.style.display = "none";

  setCookie("labTest", "abc", 2);
  console.log(getCookie("labTest"))
  console.log(getCookie("novalue"))
});

//5 6 7
document.addEventListener("DOMContentLoaded", () => {
  const cookieConsent = getCookie("cookieConsent") ;
  if ( cookieConsent === "true") {
    cookieBanner.style.display = "none"  
  }
})


// ── ห้ามลบบรรทัดข้างล่าง: เปิดให้ระบบเรียกฟังก์ชันของคุณตอนตรวจ ──
// window.setCookie = setCookie;
// window.getCookie = getCookie;