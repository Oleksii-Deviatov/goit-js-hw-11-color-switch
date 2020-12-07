import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
}

refs.start.addEventListener('click', startChangeColor);
refs.stop.addEventListener('click', stopChangeColor)


let interval = null;

function startChangeColor() {
  refs.start.disabled = true;
  const  change = () => refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0,colors.length)];
  interval = setInterval(change, 1000);
}

function stopChangeColor() {
  refs.start.disabled = false;
  clearInterval(interval);
}



