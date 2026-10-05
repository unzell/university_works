// Todo List: Enter เพิ่มรายการ + ลบด้วย listener เดียวที่ <ul> (Event Delegation)
// มี <input id="todo-input"> และ <ul id="todo-list"> ให้เขียนโค้ด

// (1) เมื่อกด Enter ในช่อง input และมีข้อความ ให้สร้าง <li> ใหม่ (มี <span> เก็บข้อความที่กรอกเข้ามาผ่าน input และ <button class="todo-delete">ลบ</button>) แล้ว append เข้า list 
// พร้อมเคลียร์ input
// (2) ผูก listener เดียว ที่ <ul> จัดการกดปุ่มลบ (ลบทั้งแถว)
// ตัวอย่างเช่น กรอก input เป็น Shopping จะได้

// <ul id="todo-list">
//   <li>
//       <span>Shopping</span>
//       <button class="todo-delete">ลบ</button>
//   </li>
// </ul>

//https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values

const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');



todoInput.addEventListener('keydown', (event) => {
  //or you can check with trim()
  if (event.key === 'Enter' && !/^\s*$/.test(event.target.value) ) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = event.target.value

    const button = document.createElement('button');
    button.classList.add('todo-delete')
    button.textContent = 'ลบ'
    // button.addEventListener('click', (e) => { e.target.closest('li').remove()}) this wouldn't be eventDelegation

    li.append(span, button)
    todoList.append(li)
  } 
  event.target.value = ''
})

// DELEGATION (when a parent has many children)
todoList.addEventListener('click', (event) => {
  if (event.target.classList.contains('todo-delete')) {
    event.target.closest('li').remove()
  }
})