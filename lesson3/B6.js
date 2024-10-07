 let testObj = {
    align: 'center',
    title:'M&amp;M&apos;s',
    class: 'string',
 }


function buildWrapper(str) {
    let strRpl = str
    let mnemonic = {
        '&': '&#38;',
        "'": '&#39;',
        '"': '&#34;',
        '>': '&#62;',
        '<': '&#60;',   
    }

    for (const el in mnemonic) {
        if (strRpl.includes(el)) {
            strRpl = strRpl.replaceAll(el,mnemonic[el])

            // console.log(el,mnemonic[el]);
        }
    }

    return function (tag,attributes = '') {
        let checkAttributes = ''

        if (attributes) {
            for (const el in attributes) {
                checkAttributes += `${el}='${attributes[el]}';`
            }
        } 

        let tagStart = `<${tag} ${checkAttributes}>`
        let tagEnd = `</${tag}>`
        
        return `${tagStart}${strRpl}${tagEnd}`
    }

    

}

let wrapP = buildWrapper(`'Какой нибуть "текст и &конечно же <мнемоника>`)
let wrapH1 = buildWrapper(`'Какой нибуть "текст и &конечно же <мнемоника>`)


console.log(wrapP('p'))
console.log(wrapH1('h1',testObj))


// document.write(wrapP('p',testObj))
