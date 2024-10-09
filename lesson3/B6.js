 let testObj = {
    align: 'center',
    title:"M&M's",
    class: 'string',
 }


function buildWrapper(tag,attributes) {

    let checkAttributes = ''
    let mnemonic = {
        '&': '&amp;',
        "'": '&apos;',
        '"': '&quot;',
        '>': '&gt;',
        '<': '&lt;',   
    }

    if (attributes) {
        
        for (const el in attributes) {
          for(const valueMnemonic in mnemonic) {
            if (attributes[el].includes(valueMnemonic)) {
                attributes[el] = attributes[el].replaceAll(valueMnemonic,mnemonic[valueMnemonic])

                // console.log(`${attributes[el]} : ключ=${valueMnemonic} значение=${mnemonic[valueMnemonic]}`);
            }
          }   
        checkAttributes += ` ${el}='${attributes[el]}';`
        };
    } 

    let tagStart = `<${tag}${checkAttributes}>`
    let tagEnd = `</${tag}>`

    return function (str) {
            let strRpl = str
            for (const el in mnemonic) {
                if (str.includes(el)) {
                     strRpl = strRpl.replaceAll(el,mnemonic[el])
                
                    // console.log(el,mnemonic[el]);
                }
            } 
            return `${tagStart}${strRpl}${tagEnd}`
    } 
}


// let wrapP = buildWrapper(`p`)
let wrapH1 = buildWrapper('h1',testObj)


// console.log(wrapP(`'Какой нибуть текст и конечно же <мнемоника>`))
console.log(wrapH1(`Ю>>>`))


document.write(wrapH1(`привет ка кедела`))


