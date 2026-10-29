// เขียนฟังก์ชัน async ชื่อ getGreeting(name) ที่ await ผลลัพธ์จาก Promise ง่าย ๆ ตัวหนึ่งที่ resolve ทันทีด้วยข้อความ 'สวัสดี ' รวมกับชื่อที่รับเข้ามา
//  แล้ว return ข้อความนั้นออกไป จากนั้นเรียกใช้ getGreeting('บิว') แล้วแสดงผลลัพธ์ด้วย .then()

// เขียนโค้ดของคุณที่นี่

async function getGreeting (name) {
  return await Promise.resolve (`สวัสดี ${name}`);
};

getGreeting(1)
  .then(result => console.log(result))