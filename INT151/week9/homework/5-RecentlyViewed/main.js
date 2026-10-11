// Recently Viewed Products with Cookie

// ให้สร้างโปรแกรมสำหรับ จัดเก็บรายการสินค้าที่ผู้ใช้ดูล่าสุด (Recently Viewed Products) โดยใช้ Cookie โดยมีความต้องการดังนี้

// 1. ให้สร้างฟังก์ชัน trackRecentlyViewed(productId) สำหรับบันทึก productId ของสินค้าที่ผู้ใช้เข้าชม
// 2. ให้จัดเก็บรายการสินค้าใน Cookie ชื่อ recentlyViewed
// 3. ข้อมูล productId หลายรายการให้จัดเก็บใน Cookie โดยใช้เครื่องหมาย comma , คั่นระหว่างค่า เช่น 101,102,103
// 4. เมื่อเรียก trackRecentlyViewed(productId) ให้ทำงานดังนี้:
//    - อ่านค่า Cookie recentlyViewed เดิม
//    - ถ้ายังไม่มี Cookie ให้เริ่มต้นด้วย Array ว่าง
//    - ถ้ามีข้อมูล ให้ใช้ split(',') แปลงข้อมูลเป็น Array
// 5. หาก productId ที่กำลังเพิ่ม มีอยู่ในรายการแล้ว
//    - ห้ามมี productId ซ้ำกัน
//    - ให้ลบ productId เดิมออกจากตำแหน่งเดิม
//    - เพิ่ม productId นั้นไว้ท้าย Array เพื่อแสดงว่าเป็นสินค้าที่ดูล่าสุด
// 6. ให้เพิ่ม productId ใหม่ไว้ท้าย Array เสมอ
// 7. ระบบต้องเก็บประวัติสินค้าได้ ไม่เกิน 5 รายการล่าสุด
//    - หากมีมากกว่า 5 รายการ ให้ลบรายการที่เก่าที่สุดออก
//    - เก็บเฉพาะ 5 รายการล่าสุด
// 8. หลังจากจัดการรายการเรียบร้อยแล้ว ให้แปลง Array กลับเป็น String โดยใช้ join(',')
// 9. ให้บันทึกรายการกลับลง Cookie recentlyViewed และกำหนดอายุ Cookie เป็น 7 วัน
// 10. โปรแกรมสามารถใช้ฟังก์ชัน setCookie() และ getCookie() จากแบบฝึกหัดก่อนหน้าในการจัดการ Cookie (แต่ละข้อเริ่มแยกกัน ต้องคัดลอกมาวางในข้อนี้ด้วย)

// เขียนโค้ดของคุณที่นี่

//10
function getCookie(cookieName) {
  const encodedCookieName =  encodeURIComponent(cookieName);
  const cookies = document.cookie.split('; ');
  const cookie = cookies.find(cookie => cookie.startsWith(encodedCookieName));
  let cookieValue 
  if (cookie) {
    cookieValue = cookie.split("=")[1];
    return decodeURIComponent(cookieValue)
  }
  return null ;
}

function setCookie(name, value, days) {
  const encodedName = encodeURIComponent(name);
  const encodedValue = encodeURIComponent(value);
  let date = new Date()
  date.setTime(date.getTime() + (days*(1000*60*60*24)))
  
  document.cookie = `${encodedName}=${encodedValue}; expires=${date.toUTCString()}; path=/`
};


function trackRecentlyViewed(productId) {
  const encodedProductId =  encodeURIComponent(productId);
  let cookie

  //4
// อ่านค่า Cookie recentlyViewed เดิม
  const currentRecentlyViewed = getCookie('recentlyViewed');
// ถ้ายังไม่มี Cookie ให้เริ่มต้นด้วย Array ว่าง
  if (!currentRecentlyViewed) {
    cookie = [];
    setCookie('recentlyViewed',encodedProductId,7)
    return cookie
  }
// ถ้ามีข้อมูล ให้ใช้ split(',') แปลงข้อมูลเป็น Array
  cookie=currentRecentlyViewed.split(',');
  
  //5
// ห้ามมี productId ซ้ำกัน
// ให้ลบ productId เดิมออกจากตำแหน่งเดิม
// เพิ่ม productId นั้นไว้ท้าย Array เพื่อแสดงว่าเป็นสินค้าที่ดูล่าสุด
  if (cookie.includes(encodedProductId)) {
    cookie.splice(cookie.indexOf(encodedProductId),1);
  };

  //6
//   ให้เพิ่ม productId ใหม่ไว้ที่ท้าย Array เสมอ
  cookie.push(encodedProductId);

  //7
// ระบบต้องเก็บประวัติสินค้าได้ ไม่เกิน 5 รายการล่าสุด
// หากมีมากกว่า 5 รายการ ให้ลบรายการที่เก่าที่สุดออก
// เก็บเฉพาะ 5 รายการล่าสุด
  if(cookie.length > 5) cookie.shift();


  //8
//   หลังจากจัดการรายการเรียบร้อยแล้ว ให้แปลง Array กลับเป็น String โดยใช้ join(',')
  const newCookieValue = cookie.join(",");

  //9
// ให้บันทึกรายการกลับลง Cookie recentlyViewed และกำหนดอายุ Cookie เป็น 7 วัน
  setCookie('recentlyViewed',newCookieValue,7);
}


// TEST
// document.cookie = `${encodeURIComponent('recentlyViewed')}=${encodeURIComponent("103,101,110,112,120")}`;
// console.log(document.cookie)
// trackRecentlyViewed(110)
// console.log(document.cookie)
// trackRecentlyViewed(111)
// console.log(document.cookie)
// trackRecentlyViewed(112)
// console.log(document.cookie)

// console.log(document.cookie)
// ── ห้ามลบบรรทัดข้างล่าง: เปิดให้ระบบเรียกฟังก์ชันของคุณตอนตรวจ ──
window.trackRecentlyViewed = trackRecentlyViewed;

