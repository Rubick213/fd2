'use strict'

let str = prompt('');


//1 forEach()
function vowelForEach(stroke) {
    if (!stroke) {
        return 0
    };

    let strokeArr = stroke.toLowerCase().split('');
    const vowelArr = ['а','у','о','и','э','ы','я','ю','е','ё'];

    let count = 0;
    strokeArr.forEach(el => {
        if (vowelArr.includes(el)) {
            count ++
        };
    })

    return count
}
let methodForEach = vowelForEach(str);
console.log(methodForEach);

//2 Filter()
function vowelFilter(stroke) {
    if (!stroke) {
        return 0
    };

    let strokeArr = stroke.toLowerCase().split('');
    const vowelArr = ['а','у','о','и','э','ы','я','ю','е','ё'];

    let result = strokeArr.filter(el => vowelArr.includes(el))

    return result.length
}
const methodFilter = vowelFilter(str)
console.log(methodFilter);

//3 reduce()

function vowelReduce (stroke) {
    if (!stroke) {
        return 0
    };

    let strokeArr = stroke.toLowerCase().split('');
    const vowelArr = ['а','у','о','и','э','ы','я','ю','е','ё'];
    
    return strokeArr.reduce((box, el) => {
        return  vowelArr.includes(el) ? box += 1 : box
      },0);
}
const methodReduce = vowelReduce(str)
console.log(methodReduce);

