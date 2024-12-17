
export class ObjStorageClass{
    constructor(product) {
       this.product = product
       this.storage = {}
       this.getChange()
    }

    saveChange(){
        localStorage[this.product] = JSON.stringify(this.storage)
    }
    getChange(){
        if (localStorage[this.product]) {
            try {
                this.storage = JSON.parse(localStorage[this.product])
            }
            catch(er) {
            }
        }    
    }

    addValue(key,value) {
    
        this.storage[key] = value   
        
        this.saveChange()
    }

    getValue(key){
        this.getChange()
        return this.storage[key]
    }
    deleteValue(key) {
        this.getChange()
        if (this.storage.hasOwnProperty(key)) {
            delete this.storage[key]
            this.saveChange()
            return true
        } 
        return false
    }
    getKeys() {
        this.getChange()
        console.log(this.storage);
        return  Object.keys(this.storage)
    }
}
let Alko = new ObjStorageClass('drink')






let test = document.querySelectorAll('.btn')
test.forEach(elBtn => {
    elBtn.addEventListener('click', () => {
        let setId = elBtn.dataset.id
        let key
        let value
        let outFunc
        switch (setId) {
            case '1':
                key = testPrompt('Введите название')
                if (key) {
                    value = bool(['Страна происхождения','рецепт преготовления'])
                    if (value) {
                        Alko.addValue(key ,value)
                    }
                }
                break;
            case '2':
                key = testPrompt('информация')
                if(key) {
                  outFunc = Alko.getValue(key)
                  out(outFunc,key)
                }
                break;
            case '3':
                key = testPrompt('что удалить?')
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
        // console.log(`обработчик событий для кнопок =>`, Alko.storage);
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
    // console.log(`функция вывода => ${value} `);
}