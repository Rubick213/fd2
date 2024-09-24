// функция вывода
function result() {
    let outTest = user()
    let outTestAge = year()
    let genderr = gender(outTestAge)

    return outA(`${outTest};\n${genderr}`)
}
result()


// функция ФИО пользователя
function user() {
    let userName //здесь будте храниться значение prompt
    let fio = ['ваше имя','ваша фамилия','ваше отчество']
    let index = 0 // это индекс для массива 
    let out = '' // это рузульатат на выходе
    let checkNum // это флажок что бы понять есть ли цифры в строке 
    
    while (true) {
        userName = prompt(fio[index])
        checkNum = false

        if (!checkNum && userName) {
            let arr = userName.split('')
            for (let i = 0; i < arr.length; i++) {
                if (isFinite(arr[i])) {
                    checkNum = true
                    break
                }                
            }


            //я иммел ввиду использовать метод find
            //в место forEach, логика у меня была такая - метод находит цыфру и возврощает ее 
            // потом идет проверка, если  переменная checkNum положительная значит в строке есть цифра то это нам не подходит 
            // если все таки в строке нету цифры то возврощает undefined и дальшьу  проверка 
            // если она отрицательнач то значит все хорошо проходим дальше
            
            // checkNum = arr.find(el => isFinite(el))
        }
           

        if (userName == null || userName.trim() == '' || checkNum) {
            outA(`вы ввели не верные данные: ${fio[index].slice(5)}`)
        } else {
            out += userName + ' '
            index++
        }

        if (index > 2) {
            return `Ваше ФИО: ${out}` 
        }
    }   
}
// console.log(user())

// функция лет
function year() {
    let age

    while (true) {
        age = +prompt('Ваш возраст в годах')
        if (age === null || !age || isNaN(age) || age < 1) {
            outA('вы ввели не верные даные: Возраст')
        } else {
            return age
        }
    }

}
// console.log(year());

//функцияя подсчета лет и запроса пола
function gender(age) {
    let pensMan = 53
    let pensWomen = 43
    let women = 'Женский'
    let man = 'Мужской'
    let gen = confirm('Ваш пол Мужской?')
    let out = gen ? outGender(age,man,pensMan) : outGender(age,women,pensWomen) 
    
    return `Ваш возраст в годах: ${age};\nВаш возраст в днях: ${age*365};\nЧерез 5 лет вам будет: ${age + 5};\n${out};`
}
// console.log(gender())




////////////////вспомогательные функции////////////////////

//функция для вывода данных
function outA (value) {
    alert(value)
}

//функция проверка пенсии
function outGender(age,gen,pens) {
    if (age >= pens ) {
        return `Ваш пол: ${gen};\nВы на пенсии: да`
    } else {
        return `Ваш пол: ${gen};\nВы на пенсии: нет`
    }
}  


