
// 2 ปุ่มอ่านเพิ่มเติม/ย่อ ด้วย classList.toggle
// มี <button id="toggle-btn">อ่านเพิ่มเติม</button> และ <p id="detail" class="hidden">รายละเอียดสินค้า...</p> (CSS ซ่อน element ที่มี class hidden ไว้แล้ว)
// เขียนโค้ดผูก click event ที่ปุ่ม ให้สลับ (toggle) class hidden ของ <p> ทุกครั้งที่กด

// เขียนโค้ดของคุณที่นี่

const toggleBtn = document.querySelector('#toggle-btn');
const detail =  document.querySelector('#detail');

toggleBtn.addEventListener('click', () => {
  detail.classList.toggle('hidden');
});