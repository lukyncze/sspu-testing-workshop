interface PrintCountProps {
  element: HTMLButtonElement;
  counter: number;
}

const printCount = ({element, counter}: PrintCountProps) => {
  element.innerHTML = `count is ${counter}`;
};

export const setCounter = (count: number) => count * 10;

export const setupCounter = (element: HTMLButtonElement) => {
  let counter = 0;
  let timesClicked = 0;

  element.addEventListener('click', () => {
    timesClicked++;
    printCount({element, counter});
    counter = setCounter(timesClicked);
  });

  initialization({element, counter});
};

const initialization = ({element, counter}: PrintCountProps) => {
  setCounter(0);
  printCount({element, counter});
};

