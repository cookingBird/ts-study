const foo: Person = {
  name: 'foo',
  age: 1,
  sayHello: function () {
    return this.name + this.age;
  },
};
type Person = {
  name: string;
  age: number;
  sayHello: HelloWorld;
};
declare type HelloWorld = () => string;
function sayHello(fo: Person = foo) {
  return fo;
}

export function sayByeBye(): Person {
  return foo;
}
interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: Array<string>;
  cards: any[];
  createCardPicker: (this: Deck) => () => Card;
}

let deck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function (this: Deck) {
    // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit);

interface LengthWise {
  length: number;
}

function identity<T extends LengthWise>(agr: T): T {
  console.log(agr.length);
  return agr;
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// type GetInstance<T> = T.new();

// class CreateInstance {
//   constructor(): string;
// }

function create<T>(instance: { new (): T }): T {
  return new instance();
}

type Alias = { num: number };
interface Interface {
  num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

interface Square {
  kind: 'square';
  size: number;
}
interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}
interface Circle {
  kind: 'circle';
  radius: number;
}
type Shape = Square | Rectangle | Circle;
function area(s: Shape) {
  switch (s.kind) {
    case 'square':
      return s.size * s.size;
    case 'rectangle':
      return s.height * s.width;
    case 'circle':
      return Math.PI * s.radius ** 2;
  }
}

let personProps: keyof Person;

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};
type Partial<T> = {
  [K in keyof T]?: T[K];
};

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Record<K extends string, T> = {
  [P in K]: T;
};
