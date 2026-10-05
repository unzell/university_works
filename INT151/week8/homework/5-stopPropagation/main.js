// เมนู dropdown เปิด/ปิด และคลิกที่อื่นให้ปิด
// มี <button id="user-menu-btn">เมนู</button> และ <div id="user-dropdown">...</div> (CSS แสดง dropdown เฉพาะตอนมี class open)

// เขียนโค้ด

// (1) กดปุ่มให้ toggle class open ของ dropdown พร้อม stopPropagation ไม่ให้ event ไหลไปโดน document
// (2) กดที่ไหนก็ได้นอกเมนูให้ปิดเมนู (เอา class open ออก)

// เขียนโค้ดของคุณที่นี่
const menuBtn = document.getElementById('user-menu-btn');
const userDropdown = document.getElementById('user-dropdown');

menuBtn.addEventListener('click', (event) => {
  userDropdown.classList.toggle('open');
  event.stopPropagation();
});

document.addEventListener('click', (event) => {
  userDropdown.classList.remove('open');
});

