class Counter {
  private counter = 0;
  private timesClicked = 0;
  private element: HTMLButtonElement;

  constructor(element: HTMLButtonElement) {
    this.element = element;
    this.printCount();
  }

  private updateCounter() {
    this.timesClicked++;
    this.counter = this.timesClicked * 10;
    this.printCount();
  }

  private printCount() {
    this.element.innerHTML = `count is ${this.counter}`;
  }

  public handleClick = () => {
    this.updateCounter();
  };
}

export default Counter;

