function maxMin(numArr) {
    let max = maxmin(numArr);
    let min = minimum(numArr);
    return [min, max];
}
function maxmin(numArr) {
    let max = numArr[0];
    for (let i = 1; i < numArr.length; i++) {
        if (numArr[i] > max) {
            max = numArr[i]
        }
    }
    return max;
}

function minimum(numArr) {
    let min = numArr[0];
    for (let i = 1; i < numArr.length; i++) {
        if (numArr[i] < min) {
            min = numArr[i]
        }
    }
    return min
}
console.log(maxMin([3,5,8,7]))