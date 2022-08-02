"use strict";
function somarValores(input1, input2) {
    if (typeof input1 === "string" || typeof input2 === 'string') {
        return input1.toLocaleString() + input2.toLocaleString();
    }
    else {
        return input1 + input2;
    }
}
console.log(somarValores(1, 5));
console.log(somarValores('ola', ', tudo bem?'));
console.log(somarValores('1', 5));
