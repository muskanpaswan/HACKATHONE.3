// let Object = {
//     a: 1,
//     b: 2,
// }
// console.log(Object["b"])




function toArray(obj) {
    let arr  = [];
    for(const key in obj) {
        let innerarr = [];
        innerarr.push(key);
        innerarr.push(obj[key])
        arr.push(innerarr)
    }
    return arr
}
console.log(toArray({a:1, b:2}))