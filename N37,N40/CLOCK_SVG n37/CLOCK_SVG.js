'use strict'
const body = document.body
const container = body.querySelector('.container')
const InputDiameter = document.getElementById('diameterClock')
const btn = document.getElementById('btn')
btn.addEventListener('click', addHours)
function addHours(){
    const valuetW = Number(InputDiameter.value)
if (valuetW && (valuetW >= 200 && valuetW <= 800) ) {
    container.style.display = 'none'
        const SVGNS="http://www.w3.org/2000/svg";
        const svg = document.createElementNS(SVGNS,'svg')
        svg.setAttribute('width', valuetW)
        svg.setAttribute('height',valuetW)
        
        let basisHours = document.createElementNS(SVGNS,'circle')    
        basisHours.setAttribute('fill', 'rgb(109, 135, 174)')
        basisHours.setAttribute('cx',valuetW/2)
        basisHours.setAttribute('cy',valuetW/2)
        basisHours.setAttribute('r',valuetW/2)
        svg.appendChild(basisHours)
        
        const center =  valuetW / 2 // центр круга по оси 'X' и 'Y'
        const distance = (77 / 100) * center // растояние цифр-часов по отношению центра род блока (77%)
        const radiusHours = (9 / 100) * valuetW // радиус цифер часов 9%
        let cxCircleX // ось х цирфчасов
        let cyCircleY // ось у цифр часов
        const fz = valuetW /7 //шрифт для цифр
        for (let i = 1; i <= 12; i++) {
            const angle = (2*Math.PI / 12) * i 
            const g = document.createElementNS(SVGNS,'g')
            const clockFace = document.createElementNS(SVGNS,'circle')
            const clockNumber = document.createElementNS(SVGNS,'text') 
            cxCircleX = center + distance * Math.sin(angle)
            cyCircleY = center - distance * Math.cos(angle)
            //////////////////////////// 
            clockFace.setAttribute('fill','black')
            clockFace.setAttribute('cx',cxCircleX)
            clockFace.setAttribute('cy',cyCircleY)
            clockFace.setAttribute('r',radiusHours)
            g.appendChild(clockFace)
            /////////////////////////////
            clockNumber.textContent = i
            clockNumber.setAttribute('x',cxCircleX)
            clockNumber.setAttribute('y',cyCircleY+fz/7)
            clockNumber.setAttribute('text-anchor','middle')
            clockNumber.setAttribute('dominant-baseline','middle')
            clockNumber.setAttribute('fill','rgb(109, 135, 174)')
            clockNumber.setAttribute('font-size',fz)
            g.appendChild(clockNumber)
            svg.appendChild(g)
        }

        const arrowX = valuetW/2
        const objArrowSec = { 
            height: 58 /100 *valuetW,
            arrowY: 3/100*valuetW,
            secWidth: 1/100*valuetW,
            color:'brown',
            stroke:'brown',
        }
        const objArrowMin = {
            height: 55 /100 *valuetW,
            arrowY: 10/100*valuetW,
            minWidth: 2.5/100*valuetW,
            color:'black',
            stroke:'rgb(109, 135, 174)'
        }
        const ObjArrowHours = {
            height: 45 /100 *valuetW,
            arrowY: 20/100*valuetW,
            hoursWidth: 3.5/100*valuetW,
            color:'black',
            stroke:'rgb(109, 135, 174)'
        }
        
        const addArrow = (width,height,x,y,color,stroke) => {
            const g = document.createElementNS(SVGNS,'g')
            const arrow = document.createElementNS(SVGNS,'rect')
            arrow.setAttribute('height',height)
            arrow.setAttribute('width',width)
            arrow.setAttribute('rx',50/100*width)
            arrow.setAttribute('x',x-width/2)
            arrow.setAttribute('y',y)
            arrow.setAttribute('fill',color)
            arrow.setAttribute('stroke',stroke)
            arrow.setAttribute('stroke-width',15/100*width)
            g.appendChild(arrow)
            svg.appendChild(g)
            return arrow
        }
        const secArrow = addArrow(objArrowSec.secWidth,objArrowSec.height,arrowX,objArrowSec.arrowY,objArrowSec.color,objArrowSec.stroke)
        const minuteArrow = addArrow(objArrowMin.minWidth,objArrowMin.height,arrowX,objArrowMin.arrowY,objArrowMin.color,objArrowMin.stroke)
        const hoursArrow = addArrow(ObjArrowHours.hoursWidth,ObjArrowHours.height,arrowX,ObjArrowHours.arrowY,ObjArrowHours.color,ObjArrowHours.stroke)
        
        ///время табло 
        const timeBox = document.createElementNS(SVGNS,'text')
        timeBox.textContent = 'afs'
        timeBox.setAttribute('x',center)
        timeBox.setAttribute('y',valuetW/3)
        timeBox.setAttribute('text-anchor','middle')
        timeBox.setAttribute('dominant-baseline','middle')
        timeBox.setAttribute('fill','brown')
        timeBox.setAttribute('font-size',8/100*valuetW)
        svg.appendChild(timeBox)
        
        second()
        function second() {
            const getTime= new Date()
            const getSeconds = getTime.getSeconds()*360/60
            const getMinutes = getTime.getMinutes()*360/60
            const getHours = getTime.getHours()*360/12 + getTime.getMinutes()/2
            const getMS = getTime.getMilliseconds()
            timeBox.textContent = getTime.toLocaleTimeString()
            secArrow.setAttribute('transform',`rotate(${getSeconds},${center},${center})`)
            minuteArrow.setAttribute('transform',`rotate(${getMinutes},${center},${center})`)
            hoursArrow.setAttribute('transform',`rotate(${getHours},${center},${center})`)
            console.log(getTime.toLocaleTimeString());
            setTimeout(second,1010 - getMS)
        
        }
        
        const centerCircle = document.createElementNS(SVGNS,'circle')
        const circleRadius = 3.7/100*valuetW
        centerCircle.setAttribute('cx',center)
        centerCircle.setAttribute('cy',center)
        centerCircle.setAttribute('r',circleRadius)
        centerCircle.setAttribute('fill','black')
        centerCircle.setAttribute('stroke','rgb(109, 135, 174)')
        centerCircle.setAttribute('stroke-width',15/100*circleRadius)
        svg.append(centerCircle)
        
        body.appendChild(svg)
        }
}

// addHours()
