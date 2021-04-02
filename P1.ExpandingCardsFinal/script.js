'use strict';

const panels = document.querySelectorAll('.panel');
//this will give us a node with all these panels, we can target them panels[0]..etc

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
