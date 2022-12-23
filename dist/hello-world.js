"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayByeBye = void 0;
const foo = {
    name: 'foo',
    age: 1,
    sayHello: function () {
        return this.name + this.age;
    },
};
function sayHello(fo = foo) {
    return fo;
}
function sayByeBye() {
    return foo;
}
exports.sayByeBye = sayByeBye;
let deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
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
function identity(agr) {
    console.log(agr.length);
    return agr;
}
function getProperty(obj, key) {
    return obj[key];
}
// type GetInstance<T> = T.new();
// class CreateInstance {
//   constructor(): string;
// }
function create(instance) {
    return new instance();
}
function area(s) {
    switch (s.kind) {
        case 'square':
            return s.size * s.size;
        case 'rectangle':
            return s.height * s.width;
        case 'circle':
            return Math.PI * Math.pow(s.radius, 2);
    }
}
let personProps;
