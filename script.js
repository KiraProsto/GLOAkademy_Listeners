const btn = document.querySelector('#btn');
const textInput = document.querySelector('#text');
const square = document.querySelector('#square');

const innerBtn = document.querySelector('#e_btn');
const range = document.querySelector('#range');
const circle = document.querySelector('#circle');

const rangeSpan = document.querySelector('#range-span');

innerBtn.style.display = 'none';

btn.addEventListener('click', () => {
  square.style.backgroundColor = textInput.value;
});
console.log(btn);

range.addEventListener('input', () => {
  circle.style.width = range.value + '%';
  circle.style.height = range.value + '%';

  rangeSpan.textContent = range.value;
});
