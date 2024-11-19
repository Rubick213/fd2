'use strict'
const body = document.body
const container = body.querySelector('.container')
const InputDiameter = document.getElementById('diameterClock')
const btn = document.getElementById('btn')

btn.addEventListener('click', buildClock)
function buildClock() {
    const value = Number(InputDiameter.value)
    if (value && (value >= 200 && value <= 800) ) {
        container.style.display = 'none' //блок с полем ввода и кнопкой
        let wrapClock = document.createElement('div') // создаем радиус часов(род блок)
        wrapClock.style.width = value+'px'
        wrapClock.style.height = value+'px'
        wrapClock.style.backgroundColor = '#FCCA66'
        wrapClock.style.borderRadius = '50%'
        wrapClock.style.position = 'relative'
        
        const absoluteWidth = (15 / 100) * value // ширина и высота цифр-часов по отношению род блока (15%)
        const center =  value / 2 // центр круга по оси 'X' и 'Y'
        const distance = (80 / 100) * center // растояние цифр-часов по отношению центра род блока (80%)

        const time = new Date()
        const sec = time.getSeconds()*360/60 // градус стрелки секунды
        const min = time.getMinutes()*360/60 // градус стрелки минуты
        const hour = time.getHours()*360/12 + time.getMinutes()/2 // градус стрелки часов
         // создаем циферблат
         for (let i = 1; i <= 12; i++) {
            const angle = (2*Math.PI / 12) * i 
            const left = center + distance * Math.sin(angle) //положение цифр-часов X
            const top = center - distance * Math.cos(angle) //положение цифр-часов Y
            const childWrapClock = document.createElement('div')
            childWrapClock.style.display = 'flex'
            childWrapClock.style.justifyContent = 'center'
            childWrapClock.style.alignItems = 'center'
            childWrapClock.style.width = absoluteWidth + 'px'
            childWrapClock.style.height = absoluteWidth + 'px'
            childWrapClock.style.borderRadius = '50%'
            childWrapClock.style.backgroundColor = '#48B382'
            childWrapClock.style.fontSize = absoluteWidth/2 + 'px'//ширина шрифта заисящая от ширины своего родителя 
            childWrapClock.innerText = i
            childWrapClock.style.position = 'absolute'
            childWrapClock.style.left = Math.abs(left - absoluteWidth/2 ) + 'px'
            childWrapClock.style.top = Math.abs(top - absoluteWidth/2) + 'px'
            wrapClock.appendChild(childWrapClock)
        }
        //  табло с временем //
            const screen = document.createElement('div') 
            screen.setAttribute('class','screen')
            screen.innerHTML = time.toLocaleTimeString()
            screen.style.fontSize = value / 10  + 'px'
            wrapClock.appendChild(screen)

            const addArrow = (className,deg) => {
                const arrow = document.createElement('div')
                arrow.setAttribute('class', className)
                arrow.style.transform = `rotate(${deg}deg)`
                wrapClock.appendChild(arrow)
                return arrow
            }
            const minuteArrow = addArrow('minute',min)
            const secondArrow = addArrow('second',sec)
            const hourArrow = addArrow('hour',hour)

            setInterval(second,1000)
            function second() {
                const getTime= new Date()
                const getSeconds = getTime.getSeconds()*360/60
                const getMinutes = getTime.getMinutes()*360/60
                const getHours = getTime.getHours()*360/12 + getTime.getMinutes()/2

                secondArrow.style.transform = `rotate(${getSeconds}deg)`
                minuteArrow.style.transform=`rotate(${getMinutes}deg)`
                hourArrow.style.transform=`rotate(${getHours}deg)`
                screen.innerText = getTime.toLocaleTimeString()
                console.log(getTime.toLocaleTimeString());
            }
            body.appendChild(wrapClock)
    }
}


