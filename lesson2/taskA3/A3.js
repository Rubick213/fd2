
let str = prompt('Введите строку')

function palindrop (str) {
    if (str === null) {
        return str
    }

    let strLow = str.toLowerCase().replace(/[,.!";:?'-]/g, "").replace(/ /g,'').replace(/ё/g,'е').replace(/ь/g,'').replace(/ъ/g,'')
    let maxIndex = strLow.length - 1
    let mid = Math.ceil((maxIndex) / 2)
    let midRound = maxIndex % 2 === 1 ? mid : mid + 1

    // console.log(`strLow => ${strLow}\nlength => ${strLow.length}\nmaxIndex => ${maxIndex}\nmid => ${mid}\nmidRound => ${midRound}`);

        for (let i = mid - 1; i >= 0; i--) {
         
            if (strLow[i] === strLow[midRound]) {            
            console.log(`${strLow}\nсимвол ${strLow[i]} под индексом ${i} РАВЕН символу ${strLow[i]} под индексом ${midRound}`);
            
            midRound++
         } else {
            console.log(`${strLow}\nсимвол ${strLow[i]} под индексом ${i} НЕ РАВЕН символу ${strLow[i]} под индексом ${midRound}`);

            return false
         }   
            
        }
        
    return true
}
let result = palindrop(str)

function out(strOut) {
    let res
    switch (strOut) {
        case null:
            res = 'Отмена' 
            break;
        case false:
            res = 'Это не палиндроп'
            break;
        default:
            res = 'это палиндроп'
            break;
    }

    return alert(res)
}
out(result)
// Лида! Ланцет отец наладил.
// Во, гробик - довод киборгоВ!
// Во, дорубили б уродоВ!
// Кит - еретиК.
// Ужа сопливого в ил посажУ
// Дарили б еду - дебил и раД!
// А за работу - дадут? - Оба разА!
// Допер, "препоД"?
// Еж оленю - не ложЕ!
// А мудила в НИИ - инвалид умА!
// Ах, ортопед, где потрохА?
//сашшас
//сашас

//вариант с рекрсией 



