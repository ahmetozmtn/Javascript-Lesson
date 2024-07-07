// ES5

var helloES5 = function (name) {
    console.log("Hello " + name);
};
helloES5("Andrian");

var totalES5 = function (num1, num2) {
    return num1 + num2;
};

console.log(totalES5(10, 20));

// ES6 - Arrow Function

const helloES6 = (name) => {
    console.log("Hello " + name);
};

helloES6("Alex");

const totalES6 = (num1, num2) => num1 + num2;

console.log(totalES6(10, 20));
