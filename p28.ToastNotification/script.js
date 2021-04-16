const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
];

button.addEventListener('click', () => {
  createNotification();
});

const colors = ['red', 'grey', 'orange', 'green'];

let count = 0;
function createNotification() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const toast = document.createElement('DIV');
  toast.classList.add('toast');

  //   SOLUTION for very message
  //   for (let i = 0; i < messages.length; i++) {
  //     toast.innerText = messages[count];
  //     toasts.appendChild(toast);
  //   }
  //   count++;
  //   if (count > messages.length - 1) {
  //     count = 0;
  //   }
  //   setTimeout(() => {
  //     toasts.removeChild(toast);
  //     count--;
  //   }, 5000);

  //RANDOM MESSAGE SOLUTION
  function changeBgColor() {
    return toast.classList.add(randomColor);
  }

  toast.innerText = getRandomMessage();
  toasts.appendChild(toast);
  changeBgColor();

  setTimeout(() => {
    toast.remove();
  }, 5000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
