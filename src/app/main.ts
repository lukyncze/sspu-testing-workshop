import Counter from './Counter';
import './assets/css/style.css';

const counterElement = document.querySelector<HTMLButtonElement>('#counter')!;
const counter = new Counter(counterElement);

counterElement.addEventListener('click', () => counter.handleClick());

