function makePlusFunction() {
    let adds = 0;
    for (let i = 0; i < arguments.length; i++) {
        adds += arguments[i]
    }
    return adds
}
console.log(makePlusFunction(4, -8)) //-4
console.log(makePlusFunction(4, 8)) //12
console.log(makePlusFunction(4, 6)) //10

