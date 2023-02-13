class Counter {
  private timesClicked = 0;

  constructor(private element: HTMLButtonElement) {
    this.printCount();
  }

  private updateCounter() {
    this.timesClicked++;
    this.printCount();
  }

  private printCount() {
    this.element.innerHTML = `Count is ${this.timesClicked * 10}`;
  }

  public handleClick = () => {
    this.updateCounter();
  };
}

export default Counter;

