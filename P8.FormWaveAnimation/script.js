const labels = document.querySelectorAll('.form-control label');

//putting each letter of label into <span></span>
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    )
    .join('');
});
