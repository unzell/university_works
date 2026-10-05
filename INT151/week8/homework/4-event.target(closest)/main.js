// ปุ่มลบสินค้าในตะกร้า (ผูก listener ทีละปุ่ม + closest)
// มี <ul id="cart-list"> ที่มีสินค้าหลายแถว แต่ละแถวเป็น <li> และมีปุ่มลบที่มี class btn-remove อยู่ภายใน

// จงเขียน JavaScript เพื่อ query ปุ่ม .btn-remove ทุกปุ่ม และผูก click event listener ให้กับปุ่มแต่ละปุ่ม โดยเมื่อผู้ใช้กดปุ่มลบ ให้ใช้ 
// event.target ร่วมกับ closest() เพื่อค้นหา <li> ที่เป็นแถวสินค้าของปุ่มนั้น และลบแถวดังกล่าวออกจาก DOM

// 🔧 ตอนตรวจ ระบบจะจำลองการกดปุ่ม/พิมพ์/ส่งฟอร์มให้เอง — เขียนแค่โค้ดผูก listener ไม่ต้องเรียก click() เอง
// เขียนโค้ดของคุณที่นี่
const removeBtns = document.getElementsByClassName("btn-remove");
console.log(removeBtns)

for (const btn of removeBtns) {
  btn.addEventListener('click', () => {
  const li = btn.closest('li');
  li.remove()
} );
};
