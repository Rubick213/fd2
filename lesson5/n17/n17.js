'use strict'

const vowelArr = ['а','у','о','и','э','ы','я','ю','е','ё']
let str = prompt('').toLowerCase()


//1 forEach()
function vowelForEach(arr,stroke) {
    let strokeArr = stroke.split('');
    let count = 0;
    strokeArr.forEach(el => {
        if (arr.includes(el)) {
            count ++
        };
    })
    return count
}
let methodForEach = vowelForEach(vowelArr,str);
console.log(methodForEach);

//2 Filter()
function vowelFilter(arr,stroke) {
    let strokeArr = stroke.split('');

    let result = strokeArr.filter(el => arr.includes(el))
    return result.length
}
const methodFilter = vowelFilter(vowelArr,str)
console.log(methodFilter);

//3 reduce()

function vowelReduce (arr,stroke) {
    let strokeArr = stroke.split('');

    
    return strokeArr.reduce((box, el) => {
        return  arr.includes(el) ? box += 1 : box
      },0);
}
const methodReduce = vowelReduce(vowelArr,str)
console.log(methodReduce);

