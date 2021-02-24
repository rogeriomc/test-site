/**
 * Write a value to the output.
 * @param {string} value The value to write to the output. 
 */
function writeValue(value) {
    document.querySelector("#output").insertAdjacentText("beforeend", `${value}\n`);
}

/**
 * Write a key value pair to the output.
 * @param {string} key The key to write to the output.
 * @param {string} value The value to write to the output.
 */
function writeKeyValue(key, value) {
    writeValue(`${key}: ${value}`);
}

function writeKeyTypeValue(key, value) {
    const valueType = typeof value;
    writeKeyValue(`${key} (${valueType === "object" ? (value instanceof Array ? "array" : "object"): valueType})`, value);
}

writeValue("**************************************** Variables ****************************************");

(function () {
    let myVariable;
    myVariable = 'Bob';
    
    writeKeyValue("myVariable", myVariable); // myVariable: Bob
})();

(function () {
    let myVariable = 'Bob';
    
    writeKeyValue("myVariable", myVariable); // myVariable: Bob

    myVariable = 'Steve';
    
    writeKeyValue("myVariable", myVariable); // myVariable: Steve
})();

writeValue(""); // [CRLF]

(function () {
    let myVariable = 'Bob';

    writeKeyTypeValue("myVariable", myVariable); // myVariable (string): Bob
})();

(function () {
    let myVariable = 10;

    writeKeyTypeValue("myVariable", myVariable); // myVariable (number): 10
})();

(function () {
    let myVariable = true;

    writeKeyTypeValue("myVariable", myVariable); // myVariable (boolean): true
})();

(function () {
    let myVariable = [1, 'Bob', 'Steve', 10];

    writeKeyTypeValue("myVariable", myVariable); // myVariable (object): 1,Bob,Steve,10
    for (let index = 0; index < myVariable.length; index++) {
        writeKeyTypeValue(`myVariable[${index}]`, myVariable[index]); // myVariable[0] (number): 1 | myVariable[1] (string): Bob | myVariable[2] (string): Steve | myVariable[3] (number): 10
    }
})();

(function () {
    let myVariable = document.querySelector('h1');

    writeKeyTypeValue("myVariable", myVariable); // myVariable (object): [object HTMLHeadingElement]
    writeKeyTypeValue("myVariable.textContext", myVariable.textContent); // myVariable (string): JavaScript Basics
})();

writeValue(""); // [CRLF]

writeValue("\n**************************************** Comments ****************************************");

/*
    Everything in between is a comment.
*/

// This is a comment

writeValue("\n**************************************** Operators ****************************************");

// Addition

(function () {
    writeValue(6 + 9); // 15
    writeValue('Hello ' + 'world!'); // Hello world!
})();

writeValue(""); // [CRLF]

// Subtraction, Multiplication, Division

(function () {
    writeValue(9 - 3); // 6
    writeValue(8 * 2); // 16 - multiply in JS is an asterisk
    writeValue(9 / 3); // 3
})();

writeValue(""); // [CRLF]

// Assignment

(function () {
    let myVariable = 'Bob';
    writeKeyValue("myVariable", myVariable); // myVariable: Bob    
})();

writeValue(""); // [CRLF]

// Equality

(function () {
    let myVariable = 3;
    writeKeyTypeValue("myVariable === 4", myVariable === 4); // myVariable === 4 (boolean): false
})();

// Not, Does-not-equal
(function () {
    let myVariable = 3;
    writeKeyTypeValue("!(myVariable === 3)", !(myVariable === 3)); // !(myVariable === 3) (boolean): false
    writeKeyTypeValue("myVariable !== 3", myVariable !== 3); // myVariable !== 3 (boolean): false
})();

writeValue("\n**************************************** Conditionals ****************************************");

(function () {
    let iceCream = 'chocolate';

    if (iceCream === 'chocolate') {
        writeValue('Yay, I love chocolate ice cream!'); // Yay, I love chocolate ice cream!
    } else {
        writeValue('Awww, but chocolate is my favorite...');
    }
})();

writeValue("\n**************************************** Functions ****************************************");

(function () {
    let myVariable = document.querySelector('h1');
    writeKeyTypeValue("myVariable", myVariable); // myVariable (object): [object HTMLHeadingElement]

    writeKeyTypeValue("'hello!'", 'hello!'); // 'hello!' (string):  hello!

    document.querySelector("#sayHello").addEventListener("click", e => {
        e.stopPropagation();
        alert("Hello!");
    });
})();

writeValue(""); // [CRLF]

(function () {
    function multiply(num1, num2) {
        return num1 * num2;
    }

    writeValue(multiply(4, 7)); // 28
    writeValue(multiply(20, 20)); // 400
    writeValue(multiply(0.5, 3)); // 1.5
})();

writeValue("\n**************************************** Events ****************************************");

(function () {
    document.querySelector('html').onclick = function () {
        alert('Ouch! Stop poking me!');
    };
})();