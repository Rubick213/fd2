let stroke = prompt('введите строку')



function spaceDelete(el) {
    if (!el) {
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
    alert(`/*${str}*/`)
}
out(space)

