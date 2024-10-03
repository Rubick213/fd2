let palindropStr = prompt()

function clear(str) {
    if (str === null) {
        return str
    }
    if (str.trim() === '') {
        return ''
    }
    return str.toLowerCase().replace(/[,.!";:?'-]/g, "").replace(/ /g,'').replace(/ё/g,'е').replace(/ь/g,'').replace(/ъ/g,'')
}


function testPalindrop(str) {

    console.log(str);
    
    if (str.length <= 1) {
        return true
    }

    let min = 0
    let max = str.length - 1

    if (str[min] !== str[max]) {
        return false
    }

    return testPalindrop(str.substr(min+1,max - 1))
}


function result(element) {
    let clearFunc = clear(element) 
    let out

    if (clearFunc === null) {
        out = 'Отмена'
    } else if (element === '' ||  testPalindrop(clearFunc)) {
        out = 'Палиндроп'
    } else {
        out = 'Не палиндроп'
    }

    alert(out)
}

result(palindropStr)