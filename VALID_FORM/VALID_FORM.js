let form = document.forms.formTag
let input = document.querySelectorAll('input')

form.addEventListener('submit',validForm)

function validForm(event) {
    event = event || window.event
    let focusEl = false

    let inputTest = form.querySelectorAll('.inp')
    inputTest.forEach(startValue)
    function startValue(el) {
        let nameElement = el.getAttribute('name')
        let arrChecked =['rubric','public','comments']
        let span = el.parentNode.querySelector('.error')

        if (arrChecked.includes(nameElement)) {
            console.log(el.checked + ' ' + nameElement);
            if ((nameElement === 'rubric' && el.value === '3') || (nameElement === 'public' && el.value === '3' && el.checked)) {
                if (!focusEl) {
                    focusEl = el
                }
               span.classList.add('errorBlock') 
            }
            if (nameElement === 'comments' && !el.checked) {
                if (!focusEl) {
                    focusEl = el
                }
                el.focus()
               span.classList.add('errorBlock')
            }
        } else {
            if (!el.value || (span.classList.contains('errorBlock') && el.value)) {
                if (!focusEl) {
                    focusEl = el
                }
               span.classList.add('errorBlock') 
            }
        }
        
       
    }
    if (focusEl) {
        event.preventDefault()
        focusEl.focus()

    }

}

function text() {
    let inputText = document.querySelectorAll('.long_text')

    inputText.forEach(el => {
        el.addEventListener('blur', testText)
    });
    
    function testText(event) {
        event = event || window.event
                let type = this.getAttribute('name')
                let divBox = this.parentNode
                let error = divBox.querySelector('.error')
                
                // console.log(divBox);
                switch (type) {
                    case 'author':
                    case 'article':
                        // console.log(this.value.length);
                        if (this.value.length < 5) {
                            error.classList.add('errorBlock')
                            // console.log(divBox);
                        }
                        break;
                    case 'link':
                        // console.log(this.value.length);
                        if (this.value.length > 10 || !this.value.trim()) {
                            error.classList.add('errorBlock')
                            console.log(false);
                        }
                        break;
                    case 'person':
                        if ( !this.value.trim() || !isFinite(this.value)) {
                            error.classList.add('errorBlock')
                        }
                        break;
                    case 'title':
                        let urlStart = ['https://','http://']
                        let urlEnd = ['.ru','.com','.by']
                        let value = this.value
                        let startStr = urlStart.some(el => value.startsWith(el))
                        let endStr = urlEnd.some(el => value.endsWith(el))
                        if (!(startStr && endStr)) {
                            error.classList.add('errorBlock')
                        }
                        break;
                    case 'email':
                        let mail = ['@mail.ru','@gmail.com']
                        let valueMail = this.value
                        let mailTest = mail.some(el => valueMail.includes(el))
                        if (!mailTest) {
                            error.classList.add('errorBlock')
                        }
                        break;
                }
    }

    inputText.forEach(el => {
        el.addEventListener('input', deleteClass)
    })
    function deleteClass(event) {
        event = event || window.event
        let span = this.parentNode.querySelector('.error')
        let div = this.parentNode
        if (span.classList.contains('errorBlock')) {
            span.classList.remove('errorBlock')
        }
    }
}
text()

//data
function data() {
    let date = document.querySelector('input[type="date"]')
    date.addEventListener('blur', testDate)
    date.addEventListener('change', testDate)
    function testDate(event) {
            let span = this.parentNode.querySelector('.error')
            let dateValue = this.value
            
            let dataX = new Date()
            let minData = new Date('1995-01-01')
            let maxData = new Date(dataX.getFullYear() +'-'+ (dataX.getMonth()+1)+'-'+(dataX.getDate()+1))
            console.log(maxData);
            if (!dateValue) { 
                span.textContent = 'введите коректную дату'
                span.classList.add('errorBlock')              
            }else {
                let dateSelect = new Date(dateValue)
                if (dateSelect > maxData) {
                    span.textContent = `дата не может быть больше сегодняшей даты`
                    span.classList.add('errorBlock')
                } else if (dateSelect < minData) {
                    span.textContent = `дата не может быть меньше 01-01-1995`
                    span.classList.add('errorBlock')
                } else {
                    span.classList.remove('errorBlock')
                    span.textContent = ''
                }
            }
           
    }
}
data()
//rubrick
function rebrick() {
    let items = document.querySelector('select')

    items.addEventListener('change',item)
    items.addEventListener('blur',item)
    function item(event) {
        let span = this.parentNode.querySelector('.error')
        let option = this.value
        if (option === '3') {
            span.classList.add('errorBlock')
        } else {
            span.classList.remove('errorBlock')
        }
    }
}
rebrick()

//radio
function radio() {
    let radioType = document.querySelectorAll('input[type="radio"]')
    for (const inp of radioType) {
        inp.addEventListener('blur',testRadio)
        inp.addEventListener('change',testRadio)
    }
    
    function testRadio(event) {
        // console.log(this.value);
        let span = this.parentNode.querySelector('.error')
        if (this.value === '3') {
            span.classList.add('errorBlock')
        } else {
            span.classList.remove('errorBlock')
        }
    }
}
radio()

//checked
function checkBox() {
    let check = document.querySelector('input[type="checkbox"]')
    check.addEventListener('blur',testCheck)
    check.addEventListener('change',testCheck)
    function testCheck(event) {
        let span = this.parentNode.querySelector('.error')

        if (!this.checked) {
            span.classList.add('errorBlock')
        } else {
            span.classList.remove('errorBlock')
        }
        
    }
}
checkBox()


