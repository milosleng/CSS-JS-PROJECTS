// eventkey = e.key;
//eventKeyCode = e.keyCode;
//event.code = e.code

// const keys = document.querySelectorAll('.key');
// const arr = [...keys];
// console.log(arr);

// //e is event object
// window.addEventListener('keydown', (e) => {
//   console.log(e);
//   const eventKey = e.key;
//   const eventKeyCode = e.keyCode;
//   const eventCode = e.code;
//   arr[0].innerText = eventKey;
//   arr[1].innerText = eventKeyCode;
//   arr[2].innerText = eventCode;
// });

const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
    <div class="key">
    ${event.key === '' ? 'Space' : event.key}
    <small>event.key</small>
  </div>

  <div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
  </div>

  <div class="key">
    ${event.code}
    <small>event.code</small>
  </div>`;
});
