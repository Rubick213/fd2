const body = document.querySelector('body')
const InputDiameter = document.getElementById('diameterClock')
const container = body.querySelector('.container')
const btn = document.getElementById('btn')
const MQRes=Modernizr.mq('canvas');
    console.log(MQRes);
btn.addEventListener('click', addHour)
// const width  = 500

function addHour() {
    
    const width = parseInt(InputDiameter.value)
    if (width && (width >= 200 && width <= 800) ) {
        
        container.style.display = 'none'
        const canvas = document.createElement('canvas')
        const graphics = canvas.getContext('2d')
        canvas.setAttribute('width',width)
        canvas.setAttribute('height',width)
        body.appendChild(canvas)

        
       
        x()
        function x () {    
            graphics.clearRect(0, 0, width, width)
            
            const hoursFaceWidth = 20/100*width //размер цифр часов
            const hoursFaseLineWidth = 10/100*hoursFaceWidth //толщина строки цифр часов
            const distance = 75/100*width

            graphics.beginPath()
            graphics.fillStyle = 'white'
            graphics.strokeStyle = 'black'
            const lineWidth = graphics.lineWidth = 3/100*width //толщина линии часов
            graphics.arc(width/2,width/2,width/2 - lineWidth,0,Math.PI*2,false)
            graphics.stroke()
            graphics.fill()
            

            for (let i = 1; i <= 12; i++) {
                const angle = (Math.PI*2/12) * i - (Math.PI/2)     
                const hoursFaceX = width + distance * Math.cos(angle)
                const hoursFaceY = width + distance * Math.sin(angle)
                
                graphics.beginPath()
                graphics.fillStyle = 'white'
                graphics.strokeStyle = 'black'
                graphics.lineWidth = hoursFaseLineWidth
                graphics.arc(hoursFaceX/2,hoursFaceY/2,hoursFaceWidth/2 - hoursFaseLineWidth,0,Math.PI*2,false)
                graphics.stroke()
                graphics.fill()

                graphics.fillStyle = 'black'
                graphics.font = `bold ${50/100*hoursFaceWidth}px Arial`
                graphics.textAlign = 'center'
                graphics.textBaseline = 'middle'
                graphics.fillText(`${i}`, hoursFaceX/2,hoursFaceY/2)           
            }
            
            
             const time = new Date()
             console.log(time.toLocaleTimeString());
             const sec = time.getSeconds() * 360 / 60
             const min = time.getMinutes()*360/60
             const h = time.getHours()*360/12 + time.getMinutes()/2
             const milSec = time.getMilliseconds()

             const secArrow = {
                x_y:45/100*width,
                strokeStyle:'brown',
                lineWidth:1.5/100*width
             }
             const minArrow = {
                x_y: 35/100*width,
                strokeStyle:'black',
                lineWidth:2.5/100*width,
             }
             const hoursArrow = {
                x_y: 20/100*width,
                strokeStyle:'black',
                lineWidth:4.5/100*width,
             }

            const arrow = (timeA,xy,color,lineWidth) => {
                const secX = (width/2) + (xy) * Math.cos((timeA - 90) * Math.PI / 180);
                const secY = (width/2) + (xy) * Math.sin((timeA - 90) * Math.PI / 180);
                graphics.beginPath();
                graphics.strokeStyle = color;
                graphics.lineCap = 'round'
                graphics.lineWidth = lineWidth; // Толщина стрелки секунд
                graphics.moveTo(width / 2, width / 2);              
                graphics.lineTo(secX, secY);
                graphics.stroke();
            }
            arrow(sec,secArrow.x_y,secArrow.strokeStyle,secArrow.lineWidth)
            arrow(min,minArrow.x_y,minArrow.strokeStyle,minArrow.lineWidth)
            arrow(h,hoursArrow.x_y,hoursArrow.strokeStyle,hoursArrow.lineWidth)
            
            //круг в центре
            graphics.fillStyle = 'black'
            graphics.font = `bold ${8/100*width}px Arial`
            graphics.fillText(`${time.toLocaleTimeString()}`, width/2,width/3) 
            
            //круг в центре как бы болтик 
            graphics.beginPath()
            graphics.fillStyle = 'white'
            graphics.strokeStyle ='black'
            graphics.lineWidth = 3/100*width
            graphics.arc(width/2,width/2,4/100*width,0,Math.PI*2,false)
            graphics.fill()
            graphics.stroke()
            setTimeout(x,1010 - milSec) 
        }
        
    }
}
// addHour()
