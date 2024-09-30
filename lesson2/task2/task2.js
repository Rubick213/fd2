let z = [ 5,[1,[3,[22],123,[221,104,[20]]]], 7,
    [ 4, [2], 8, [1,3], 2 ],
    [ 9, [] ],
    1, 8 ]

let test2 = [ 5, 7,
    [ 4, [2], 8, [1,3], 2 ],
    [ 9, [] ],
    1, 8 ]

function numArr(arr) {
    return arr.reduce((box,el) => {
        if (Array.isArray(el)) {
            // console.log(`массив => ${el} ==>сумма ${box}`);
           return box += numArr(el)
        } else {
            // console.log(`!!!! не массив !!!! => ${el} ==> сумма ${box}`);
            return box += el
        }
    },0)
}
console.log(numArr(test2));






