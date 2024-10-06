

let userPrompt = prompt('Введите строку!')

function vowel(str) {
    if (str === null) {
        return 'Отмена'
    }
    if (str.trim() === '') {
        return 'пустая строка'
    }
    let count = {}
    let countLetters = 0
    let res = ''

    let stroke = str.toLowerCase().replaceAll(' ','')
    let vowelArr = ['а','у','о','и','э','ы','я','ю','е','ё']
    
    //подсчет гласных букв
    for (let i = 0; i < stroke.length; i++) {
        if (vowelArr.includes(stroke[i])) {
            // console.log(`${stroke[i]}: находиться в массиве гласных под индексом ${vowelArr.indexOf(stroke[i])}`);
            countLetters++

            if (!(stroke[i] in count)) {
                count[stroke[i]] = 1
            } else {
                count[stroke[i]]++
            }
        }  
    }
    
    // проверка ялвяется ли обьект пустой
    if (Object.keys(count).length == 0) {
        return 'В строке нет гласных'
    } else {
        let lettersEnd = countLetters > 1 ? 'гласных' : 'гласная'
        
        res = `в данной строке ${countLetters} ${lettersEnd} :\n`

        for (let el in count) {
            res += `${el}: ${count[el]} шт.\n`
        }
    }
    
    return res
}

let vowelLetters = vowel(userPrompt);

((out) => {
    alert(out)
})(vowelLetters)








