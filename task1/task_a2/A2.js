let stroke = prompt('введите строку')

function spaceDelete(el) {
    let outStr = el
    
    if (!el) {
        return ''
    }
    while (true) {
        if (outStr.startsWith(' ')) {
            outStr = outStr.slice(1)
        } else if (outStr.endsWith(' ')) {
            outStr = outStr.slice(0,outStr.lastIndexOf(' '))
        } else {
            break
        }
    }

    return outStr
}
let space = spaceDelete(stroke)

function out(str) {
    alert(`/*${str}*/`)
}
out(space)

