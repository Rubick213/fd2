// let palindropStr = prompt()

// function clear(str) {
//     if (str === null) {
//         return str
//     }
//     if (str.trim() === '') {
//         return ''
//     }
//     return str.toLowerCase().replace(/[,.!";:?'-]/g, "").replace(/ /g,'').replace(/ё/g,'е').replace(/ь/g,'').replace(/ъ/g,'')
// }


// function testPalindrop(str) {

//     console.log(str);
    
//     if (str.length <= 1) {
//         return true
//     }

//     let min = 0
//     let max = str.length - 1

//     if (str[min] !== str[max]) {
//         return false
//     }

//     return testPalindrop(str.substr(min+1,max - 1))
// }


// function result(element) {
//     let clearFunc = clear(element) 
//     let out

//     if (clearFunc === null) {
//         out = 'Отмена'
//     } else if (element === '' ||  testPalindrop(clearFunc)) {
//         out = 'Палиндроп'
//     } else {
//         out = 'Не палиндроп'
//     }

//     alert(out)
// }

// result(palindropStr)



// let strPalindrop = prompt()

// function isPalindrome(str) {
//     console.log(str);

//     if (str === null) {
//         return str
//     }
//     if (str.trim() === '') {
//         return true
//     } 

//     let strClear =  str.toLowerCase().replace(/[,.!";:?'-]/g, "").replace(/ /g,'').replace(/ё/g,'е').replace(/ь/g,'').replace(/ъ/g,'')
 
//     function testPalindrome(test) {
//         console.log(test);

//         if (test.length <= 1) {
//             return true
//         } 

//         let min = 0
//         let max = test.length-1
        
//         if (test[min] !== test[max]) {
//             return false
//         }

//         return testPalindrome(test.substr(min+1,max - 1))
//     }

//     return testPalindrome(strClear)

// }



// function result(element) {
//     let out
//      if (element === null) {
//         out = 'Отмена'
//      } else if (!element) {
//         out = 'Это не палиндроп'
//      } else {
//         out = 'Это палиндроп'
//      }

//     alert(out)
// }

// result(isPalindrome(strPalindrop))
