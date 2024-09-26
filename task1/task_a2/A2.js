let stroke = prompt('введите строку')

function spaceDelete(el) {
    if (el === null) {
        return el
    } 
    if (+el === 0 && isNaN(parseInt(el))) {
        console.log('строка пустая или состоит из пробелов');
        return ''
    }

    let outStr = el
    let left = 0
    let right = outStr.length-1

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

