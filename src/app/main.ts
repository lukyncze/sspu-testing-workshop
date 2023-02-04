import Counter from '../tests/8-mocking/Counter';
import './assets/css/style.css';

const counterElement = document.querySelector<HTMLButtonElement>('#counter')!;
const counter = new Counter(counterElement);

counterElement.addEventListener('click', () => counter.handleClick());

