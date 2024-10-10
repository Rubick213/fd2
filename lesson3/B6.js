
function buildWrapper(tag) {
    let mnemonic = {
        '&': '&amp;',
        "'": '&apos;',
        '"': '&quot;',
        '>': '&gt;',
        '<': '&lt;',   
    }

    return function (str, attributes) {
        let checkAttributes = ''

        if (attributes) {
            let objMnemonic = attributes
            
            for (const el in objMnemonic) {
                let valueMnemonic = testMnemonic(objMnemonic[el],mnemonic)
                checkAttributes += ` ${el}='${valueMnemonic}'`
            };
        } 
    
        let tagStart = `<${tag}${checkAttributes}>`
        let tagEnd = `</${tag}>`
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

let wrapP = buildWrapper(`P`)
let wrapH1 = buildWrapper('H1')

console.log( wrapP("Однажды в студёную зимнюю пору") );
console.log( wrapP("Однажды в студёную зимнюю пору",{lang:"ru"}) );
console.log( wrapP("Однажды в <студёную> зимнюю пору") );
console.log( wrapH1("СТИХИ",{align:"center",title:"M&M's"}) );

