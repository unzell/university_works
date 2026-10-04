// เขียนโค้ดของคุณที่นี่
const removeBtns = document.getElementsByClassName("btn-remove");
console.log(removeBtns)

for (const btn of removeBtns) {
  btn.addEventListener('click', () => {
  const li = btn.closest('li');
  li.remove()
} );
};
