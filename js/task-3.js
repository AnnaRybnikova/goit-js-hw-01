function getElementWidth(content, padding, border) {
    return getFloat(content) + getFloat(padding) * 2 + getFloat(border) * 2;
}

function getFloat(string) {
    return Number.parseFloat(string);
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200