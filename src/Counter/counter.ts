interface PrintCountProps {
  element: HTMLButtonElement;
  counter: number;
}

const printCount = ({element, counter}: PrintCountProps) => {
  element.innerHTML = `count is ${counter}`;
};

export const setCounter = (count: number) => count * 10;

export const setupCounter = (element: HTMLButtonElement) => {
  let counter: number = 0;
  let timesClicked: number = 0;

  element.addEventListener('click', () => {
    timesClicked++;
    printCount({element, counter});
    counter = setCounter(timesClicked);
  });

  setCounter(0);
  printCount({element, counter});
};

