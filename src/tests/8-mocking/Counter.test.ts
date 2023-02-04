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
    expect(element.innerHTML).toBe('Count is 0');
  });

  describe('when user clicks on it button', () => {
    it('should have correct button text', () => {
      expect(counter['timesClicked']).toBe(0);
      expect(element.innerHTML).toBe('Count is 0');

      counter.handleClick();
      expect(counter['timesClicked']).toBe(1);
      expect(element.innerHTML).toBe('Count is 10');

      counter.handleClick();
      expect(counter['timesClicked']).toBe(2);
      expect(element.innerHTML).toBe('Count is 20');
    });

    it('should have the right number of clicks', () => {
      for (let i = 0; i < 50; i++) {
        counter.handleClick();
      }

      expect(counter['timesClicked']).toBe(50);
      expect(element.innerHTML).toBe('Count is 500');
    });
  });
});

