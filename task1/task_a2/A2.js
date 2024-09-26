let stroke = prompt('введите строку')
// let z = stroke.replace(' ','')
// console.log(+stroke);


function spaceDelete(el) {
    if (el === null) {
        return el
    }

    let left = 0
    let right = el.length-1

    for (let i = 0; i < el.length; i++) {
        if (el[i] === ' ') {
            left++
        } else {
            break
        }
    }

    if (el.length === left) {
        console.log('строка пустая или из пробелов');
        return ''
    }

    for (let i = el.length-1; i > 0; i--) {
        if (el[i] === ' ') {
            right--
        } else {
            break
        }     
    }

    if (left === 0 && right === el.length-1) {
        console.log('строка без пробелов');
        return el
    }
    return el.slice(left,right+1)

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

