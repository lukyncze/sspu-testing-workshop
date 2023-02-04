import Counter from './Counter';

interface Document {
  createElement: (tag: string) => HTMLButtonElement;
  body: {
    appendChild: (element: HTMLButtonElement) => void;
  };
}

const document: Document = {
  createElement: jest.fn().mockReturnValue({}),
  body: {
    appendChild: jest.fn(),
  },
};

Object.defineProperty(global, 'document', {
  value: document,
});

let element: HTMLButtonElement;
let counter: Counter;

describe('Counter', () => {
  beforeEach(() => {
    element = document.createElement('button');
    counter = new Counter(element);
  });

  it('should init class', () => {
    expect(counter).toBeDefined();
  });

  it('should have right button label when initialized', () => {
    expect(element.innerHTML).toBe('count is 0');
  });

  it('should increment the counter when clicking on the button', () => {
    expect(element.innerHTML).toBe('count is 0');
    expect(counter['timesClicked']).toBe(0);

    counter.handleClick();
    expect(element.innerHTML).toBe('count is 10');
    expect(counter['timesClicked']).toBe(1);

    counter.handleClick();
    expect(element.innerHTML).toBe('count is 20');
    expect(counter['timesClicked']).toBe(2);
  });

  it('should be clicked 25 times and have right button label', () => {
    for (let i = 0; i < 25; i++) {
      counter.handleClick();
    }

    expect(counter['timesClicked']).toBe(25);
    expect(element.innerHTML).toBe('count is 250');
  });
});

