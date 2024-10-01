
let str = prompt('Введите строку')

function palindrop (str) {
    if (!str || str.trim() === '') {
        return out('Error')
    }

    let strLow = str.toLowerCase().replace(/[,.!";:?'-]/g, "").replace(/ /g,'').replace(/ё/g,'е').replace(/ь/g,'').replace(/ъ/g,'')
    let maxIndex = strLow.length - 1
    let mid = Math.ceil((maxIndex) / 2)
    let midRound = maxIndex % 2 === 1 ? mid : mid + 1

    console.log(`strLow => ${strLow}\nlength => ${strLow.length}\nmaxIndex => ${maxIndex}\nmid => ${mid}\nmidRound => ${midRound}`);

        for (let i = mid - 1; i >= 0; i--) {
            // console.log([i,midRound]);
         
            if (strLow[i] === strLow[midRound]) {            
            // console.log(`${strLow[i]}:${i} === ${strLow[mid+1]}:${midRound}`);
            
            midRound++
         } else {
            // console.log(`${strLow[i]}:${i} === ${strLow[midRound]}:${midRound}`);

            return out('Это не палиндроп')
         }   
            
        }
        
    return out('Это палиндроп')
}
palindrop(str)

function out(strOut) {
    alert(strOut)
}
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