// //1
// function ObjStorageFunc() {
//     let self = this

//         self.storage = {}
//     self.addVAlue = function(key,value) {
//         self.storage[key] = value
//     }
//     self.getValue = function(key) {
//         return self.storage[key]
//     }
//     self.deleteVAlue = function(key) {
//         if (key in self.storage) {
//             delete self.storage[key]
//             return true
//         } else {
//             return false
//         }
//     }
//     self.getKeys = function() {
//         return Object.keys(self.storage)
//     }
// }

// let StorageFunc = new ObjStorageFunc()

// StorageFunc.addVAlue('model','lexus') //сохраняет указанное значение под указанным ключом; если уже есть перезаписывает
// console.log(StorageFunc.getValue('model')) //возвращает значение по указанному ключу либо undefined;
// console.log(StorageFunc.deleteVAlue('model')) //удаляет значение с указанным ключом, возвращает true или false
// console.log(StorageFunc.getKeys()); //возвращает массив, состоящий из одних ключей.

// console.log(StorageFunc);


//3 
function ObjStorageFunc() {
    let self = this

    self.storage = {}

    self.addValue = function(key,value) {
        self.storage[key] = value
    }
    self.getValue = function(key) {
        return self.storage[key]
    }
    self.deleteValue = function(key) {
        if (key in self.storage) {
            delete self.storage[key]
            return true
        } 
        return false
    }
    self.getKeys = function() {
        return  Object.keys(self.storage)
    }
}

let Alko = new ObjStorageFunc()


let test = document.querySelectorAll('.btn')
test.forEach(elBtn => {
    elBtn.addEventListener('click', () => {
        let setId = elBtn.dataset.id
        let key
        let value
        let outFunc
        switch (setId) {
            case '1':
                key = testPrompt('Введите название напитка')
                if (key) {
                    value = bool(['Страна происхождения','рецепт преготовления'])
                    if (value) {
                        Alko.addValue(key ,value)
                    }
                }
                break;
            case '2':
                key = testPrompt('Название для информации напитка')
                if(key) {
                  outFunc = Alko.getValue(key)
                  out(outFunc,key)
                }
                break;
            case '3':
                key = testPrompt('Какой напиток удалить ?')
                if (key) {
                    outFunc = Alko.deleteValue(key)
                    out(outFunc)
                }
                
                break;
            case '4':
                outFunc = Alko.getKeys()
                out(outFunc)
                break;
        }
        console.log(`обработчик событий для кнопок =>`, Alko.storage);
    })
});


//функция проверки вводимых данных (promt())
function testPrompt(str) {
    let resultPrompt
    while (true) {
        resultPrompt = prompt(str)
        if (resultPrompt === null) {
            alert('До свидания')
            return resultPrompt
        }
        if (resultPrompt.trim()) {
            return resultPrompt.toLowerCase()
        }
    }
}
// функция описания напитка
function bool(arr) {
    let res = {};
    res['Алкоголь'] = confirm('он алкогольный?') ? 'да' : 'нет';
    for (let i = 0; i < arr.length; i++) {
        let valuesRes = testPrompt(arr[i])
        if (!valuesRes) {
            return false
        }
        res[arr[i]] = valuesRes
    } 
    return res
}

//функция оповещения пользователя
function out(value,name = null) {
    switch (value) {
        case undefined:
            alert('напитка нет в списке')
            break;
        case false:
        alert('Не удалено:\nв списке нет напитка!')
            break;
        case true:
        alert('Удалено!')
            break;
        default:
            if (Array.isArray(value)) {
                let testArr = value.length > 0 ? value.join(',') : 'Список пуст!'
                alert(testArr)
            } else {
                let str = `напиток : ${name}\n`
                for (const key in value) {
                    str += `${key}: ${value[key]}\n`
                }
                alert(str)
            }
            break;
    }
    console.log(`функция вывода => ${value} `);
}
