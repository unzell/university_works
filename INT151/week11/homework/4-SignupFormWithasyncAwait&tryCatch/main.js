// เขียนฟังก์ชัน async ชื่อ submitSignupForm(formData) ที่ตรวจสอบก่อนว่า formData.email มีรูปแบบถูกต้องด้วย regex หรือไม่ (emailPattern = /^[\w.-]+@[\w-]+\.[a-z]{2,}$/i) 
// ถ้าไม่ถูกต้องให้ throw new Error('อีเมลไม่ถูกต้อง') ทันที (ยังไม่ต้องเรียก mockApiCall) 
// ถ้าถูกต้องให้ await เรียก mockApiCall(formData) แล้ว return ผลลัพธ์ที่ได้ ทั้งหมดนี้ต้องครอบด้วย try/catch 
// เพื่อจัดการ error ทั้งจากการ validate และจาก mockApiCall โดยใน catch (error) ให้ console.error("สมัครสมาชิกไม่สำเร็จ:", error.message) และ throw error ตามลำดับ

// ── กำหนดไว้ให้แล้ว ไม่ต้องแก้ ──
function mockApiCall(formData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData.password.length < 8) {
        reject(new Error("รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร"));
      } else {
        resolve({ success: true, userId: 501 });
      }
    }, 500);
  });
}

// เขียนฟังก์ชัน async submitSignupForm(formData) ของคุณที่นี่

async function submitSignupForm(formData) {
  const emailRegex =  /^[\w.-]+@[\w-]+\.[a-z]{2,}$/i
  try {
    if (!emailRegex.test(formData.email)) throw new Error('อีเมลไม่ถูกต้อง');
    const result = await mockApiCall(formData);
    return result;
  } catch(err) {
    console.error("สมัครสมาชิกไม่สำเร็จ:", err.message);
    throw err
  }
};
console.log(await submitSignupForm({email:'bad-email', password:'12121212'}))