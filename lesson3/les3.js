

let userPrompt = prompt('Введите строку!')

function vowel(str) {
    if (str === null) {
        return 'Отмена'
    }
    // if (str.trim() = '') {
    //     return 0
    // }

    let countLetters = 0
    
    let stroke = str.toLowerCase()
    let vowelArr = ['а','у','о','и','э','ы','я','ю','е','ё']
    
    //подсчет гласных букв
    for (let i = 0; i < stroke.length; i++) {
        if (vowelArr.includes(stroke[i])) {
            // console.log(`${stroke[i]}: находиться в массиве гласных под индексом ${vowelArr.indexOf(stroke[i])}`);
            countLetters++
        }  
    }
    
    
    return countLetters
}

let vowelLetters = vowel(userPrompt);

((out) => {
    alert(out)
})(vowelLetters)








