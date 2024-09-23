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
        
        if (userName == null) {
            out = ''
            index = 0
            return false
        } else {
            userName.split('').forEach(el => {
                if(isFinite(el)) {
                    checkNum = true
                }
            })
        }

        if (userName.trim() == '' || checkNum) {
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
    // let check = true
    while (true) {
        age = prompt('Ваш возраст в годах')
        if (age === null) {
            return false 
        }

        if (!+age || isNaN(+age) || +age < 0 ) {
            outA('вы ввели не верные даные: Возраст')
        } else {
            return +age
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
    
    return `Ваш возраст в годах: ${age};\nВаш возраст в днях: ${age*365};\nЧерез 5 лет вам будет: ${+age + 5};\n${out};`
}
// console.log(gender())


function result() {
    let outTest = test(user)
    let outTestAge
    let genderr
    
    if (outTest) {
        outTestAge = test(year)    
    }

    if (outTestAge) {
        genderr = gender(outTestAge)
        return outA(`${outTest};\n${genderr}`)
    }
}
result()



////////////////вспомогательные функции////////////////////

//функция для вывода данных
function outA (value) {
    alert(value)
}

//функция проверяет имя и годы пользователя
function test(par) {
    let user = par()

    if (!user) {
        outA('God Bye')
    } else {
        return user
    } 
    return false
}

//функция проверка пенсии
function outGender(age,gen,pens) {
    if (age >= pens ) {
        return `Ваш пол: ${gen};\nВы на пенсии: да`
    } else {
        return `Ваш пол: ${gen};\nВы на пенсии: нет`
    }
}  


