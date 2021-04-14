const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    const x = e.clientX;
    const y = e.clientY;

    //where the button starts on left and top
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    //calculating where in the button we click
    const yInside = y - buttonTop;
    const xInside = x - buttonLeft;

    //creating circle el
    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    this.appendChild(circle);

    //removing circle from DOM
    setTimeout(() => {
      circle.remove();
    }, 500);
  });
});
