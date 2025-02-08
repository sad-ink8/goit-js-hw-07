function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');

const createBtn = document.querySelector('[data-create]');
function createBoxes() {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    let size = 30;

    for (let i = 0; i < amount; i++) {
      size += 10;
      const boxItem = document.createElement('div');
      boxItem.style.width = `${size}px`;
      boxItem.style.height = `${size}px`;
      boxItem.style.margin = '44px';
      boxItem.style.backgroundColor = getRandomHexColor();
      boxes.appendChild(boxItem);
    }
    input.value = '';
  }
}
createBtn.addEventListener('click', createBoxes);

const destroyBtn = document.querySelector('[data-destroy]');
function destroyBoxes() {
  boxes.innerHTML = '';
  input.value = '';
}
destroyBtn.addEventListener('click', destroyBoxes);
