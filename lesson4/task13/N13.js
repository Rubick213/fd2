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

    self.drinkStorage = {}

    self.addValue = function(key,value) {
        self.drinkStorage[key] = value
    }
    self.getValue = function(key) {
        if (key in self.drinkStorage) {
            let infoOut = `название: ${key}\n`
            let objectDrink =  self.drinkStorage[key]
            for (const el in objectDrink) {                
                let keys = el;
                let values = objectDrink[el];
                infoOut += `${keys} : ${values}\n`

                console.log(keys);
            }
            outAlert(infoOut)
        } else {
            outAlert('В списке такого напитка нет')
        }
        // return self.drinkStorage[key]
    }
    self.deleteValue = function(key) {
        if (key in self.drinkStorage) {
            delete self.drinkStorage[key]
            outAlert('Удаленно')
        } else {
            outAlert('Не удалено')
        }
    }
    self.getKeys = function() {
        let arrObj = Object.keys(self.drinkStorage).join(',')
        console.log(arrObj);
        if (arrObj.length > 0) {
            outAlert(arrObj)
        } else {
            outAlert('В списке нет напитков')
        }
    }
}
let Alko = new ObjStorageFunc()


let test = document.querySelectorAll('.btn')
test.forEach(elBtn => {
    elBtn.addEventListener('click', () => {
        let setId = elBtn.dataset.id
        let key
        let value
        switch (setId) {
            case '1':
                key = testPrompt('Введите название напитка')
                if (key) {
                    value = bool(['Страна происхождения','рецепт преготовления'])
                    if (value) {
                        Alko.addValue(key ,value)
                    }
                }
                console.log(Alko.drinkStorage);
                break;
            case '2':
                key = testPrompt('Название для информации напитка')
                if(key) {
                    Alko.getValue(key)
                }
                console.log(Alko.drinkStorage);
                break;
            case '3':
                key = testPrompt('Какой напиток удалить ?')
                if (key) {
                    Alko.deleteValue(key)
                }
                console.log(Alko.drinkStorage);
                break;
            case '4':
                Alko.getKeys()
                break;
        }
    })
});


//функция проверки вводимых данных (promt())
function testPrompt(str) {
    let resultPrompt
    while (true) {
        resultPrompt = prompt(str)
        if (resultPrompt === null) {
            outAlert('До свидания')
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
function outAlert(str) {
    alert(str)
}