let stroke = prompt('введите строку')
// let z = stroke.replace(' ','')
// console.log(+stroke);


function spaceDelete(el) {
    if (el === null) {
        return el
    }
    if (+el === 0 && isNaN(parseInt(el))) {
        console.log('строка пустая или состоит из проебелов');
        return ''
    }
    let outStr = el
    let left = 0
    let right = outStr.length-1

    if (outStr[left] !== ' ' && outStr[right] !== ' ') {
        console.log('пробелов в конце и в начале строки нет');
        return outStr
    }

   while (true) {
    
    if (outStr[left] === ' ') {
        left++
    } else if ( outStr[right] === ' ') {
        right--
    } else {
        break
    }
   }

    return outStr.slice(left,right+1)
}
let space = spaceDelete(stroke)


function out(str) {
    let out
    if (str === null) {
        out = 'Отмена'
    } else {
        out = `*/${str}/*`
    }

    alert(out)
}
out(space)

