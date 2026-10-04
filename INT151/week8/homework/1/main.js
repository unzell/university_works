//1 ปุ่มไลค์นับจำนวนครั้งที่กด
//หน้าเว็บมี <button id="like-btn">❤ 0</button>
//เขียนโค้ดผูก click event ให้ปุ่มนี้ ทุกครั้งที่กด ให้ตัวเลขในปุ่มเพิ่มขึ้นทีละ 1 (เช่น ❤ 0 → ❤ 1 → ❤ 2)


const button = document.getElementById("like-btn");
button.addEventListener("click", () => {
  let [, number ] = button.textContent.split(" ");
  const result = `❤ ${++number}`;
    button.textContent = result;
});