// กำหนดฟังก์ชัน getUser(userId) และ getOrders(userId) ที่คืนค่าเป็น Promise ไว้ให้แล้ว (getUser คืน object ผู้ใช้ที่มี id และ name
//  เช่น { id: userId, name: "บิว" } getOrders คืน array ของออเดอร์ เช่น [{ id: 1 }, { id: 2 }, { id: 3 }]) 
// เขียนฟังก์ชัน getUserOrderCount(userId) โดยใช้ Promise Chaining (.then ต่อกัน ไม่ใช้ async/await) เพื่อเรียก getUser ก่อน 
// แล้วนำ user.id ไปเรียก getOrders ต่อ สุดท้าย return จำนวนออเดอร์ (orders.length)

// เขียนโค้ดของคุณที่นี่

function getUser(userId) {
  return Promise.resolve({ id: userId, name: "บิว" });
}

function getOrders(userId) {
  return Promise.resolve([{ id: 1 }, { id: 2 }, { id: 3 }]);
}

function getUserOrderCount(userId) {
  return getUser(userId)
    .then(user => getOrders(user.id))
    .then(orders => orders.length)
}

console.log(await getUserOrderCount(1))