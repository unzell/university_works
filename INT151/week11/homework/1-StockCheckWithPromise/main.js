// เขียนฟังก์ชัน checkStock(productId) ที่คืนค่าเป็น Promise จำลองการตรวจสอบสต็อกสินค้า (ใช้ setTimeout หน่วงเวลา 500 มิลลิวินาที) โดยถ้า productId เป็นเลขคู่ ให้ resolve 
// ด้วยข้อความ 'มีสินค้า' ถ้าเป็นเลขคี่ ให้ reject ด้วย new Error('สินค้าหมด') จากนั้นทดสอบเรียกใช้ด้วย .then() และ .catch()

// เขียนโค้ดของคุณที่นี่

function checkStock (productId) {
  return new Promise ((resolve,reject)=> {
    setTimeout(()=> {
      productId % 2 === 0 
        ? resolve('มีสินค้า')
        : reject(new Error('สินค้าหมด'));
    }, 500);
  });
};

checkStock(1)
  .then(result => console.log(result))
  .catch(err => console.error(err.message));