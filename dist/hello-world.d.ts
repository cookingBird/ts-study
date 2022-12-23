type Person = {
    name: string;
    age: number;
    sayHello: HelloWorld;
};
declare type HelloWorld = () => string;
export declare function sayByeBye(): Person;
export {};
