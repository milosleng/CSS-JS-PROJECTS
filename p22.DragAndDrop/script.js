const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//loop
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

//drag functions/ events
function dragStart() {
  //this points to const fill, because the function fires off there!
  this.className += ' hold';
  setTimeout(() => (this.className = ' invisible'), 0);
}

function dragEnd() {
  this.className = ' fill';
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}
function dragLeave() {
  this.className = 'empty';
}
function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}
