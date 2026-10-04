// <ul id="product-list">
//   <li>
//     T-Shirt <button class="btn-remove">Delete</button>
//   </li>
//   <li>
//     Hat <button class="btn-remove">Delete</button>
//   </li>
// </ul>

const list = document.getElementById('product-list')

// attach a listener just once, on the <ul>
list.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-remove')) {
    event.target.closest('li').remove()
  }
})