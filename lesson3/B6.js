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
        let objMnemonic = attributes
        for (const el in objMnemonic) {
            let valueMnemonic = testMnemonic(objMnemonic[el],mnemonic)

            checkAttributes += ` ${el}='${valueMnemonic}';`
        };
    } 

    let tagStart = `<${tag}${checkAttributes}>`
    let tagEnd = `</${tag}>`

    return function (str) {
            let strRpl = testMnemonic(str,mnemonic)
            
            return `${tagStart}${strRpl}${tagEnd}`
    } 
}

function testMnemonic(str,obj) {
    let resultStr = str
    for (const el in obj) {
        if (resultStr.includes(el)) {
             resultStr = resultStr.replaceAll(el,obj[el])
        
            // console.log(el,obj[el]);
        }
    } 
    return resultStr
}

// let wrapP = buildWrapper(`p`)
let wrapH1 = buildWrapper('h1',testObj)


// console.log(wrapP(`'Какой нибуть текст и конечно же <мнемоника>`))
console.log(wrapH1(`'Какой нибуть текст и конечно же <мнемоника>`))


// document.write(wrapH1(`привет как едела`))


