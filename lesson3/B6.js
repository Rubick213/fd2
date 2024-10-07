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

    let tagFunction = function (tag,attributes = '') {
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

    return tagFunction

}

let wrap = buildWrapper(`'Какой нибуть "текст и &конечно же <мнемоника>`)
console.log(wrap('div',testObj))


// document.write(wrap('h1',testObj))
