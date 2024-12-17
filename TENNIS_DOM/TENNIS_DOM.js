const can = document.getElementById('tenis')
const btnStart = document.querySelector('button')
const leftNum = document.getElementById('left')
const rightNum = document.getElementById('right') 
let leftCount = 0
let rightCount = 0
const w = can.width = 500
const h = can.height = 200
const fps = 1000/20
let check = true
let checkInterval = true
const ctx = can.getContext('2d')
btnStart.addEventListener('click',startGame)
window.addEventListener('keydown', down)
window.addEventListener('keyup',up)

//////// audio
const pong = new Audio('../audio/Palloncino.mp3')
const hlop = new Audio("../audio/applaus.mp3")
///////

///////мяч
const Ball = function() {
    let self = this
    
    self.radius = 15
    self.posX = w/2
    self.posY = h/2
    self.speedY = 0
    self.speedX = 0
}
const B = new Ball()
// console.log(B);

Ball.prototype.startBall = function() {
    let angle = (Math.floor(Math.random()*(45-30+1))+30)/180*Math.PI // угол вылета мяча ()
    const xMul = Math.random()<0.5?1:-1
    const yMul = Math.random()<0.5?1:-1

    // let randomY = Math.random() * 3
    // let randomNum  = Math.floor(randomY) - 1


    this.speedY = Math.sin(angle)*yMul
    this.speedX = Math.cos(angle)*xMul
    this.posX = w/2
    this.posY = h/2
    ctx.clearRect(0,0,w,h)
    ctx.beginPath()
    ctx.fillStyle = 'green'
    ctx.arc(w/2,h/2,this.radius,0,Math.PI*2)
    ctx.fill()  
}
B.startBall()
Ball.prototype.moveBall = function() {
    if (!check) {
        this.posX += this.speedX
        this.posY += this.speedY
        if (this.posX > w - this.radius) {
            this.posX = w - this.radius
            rightCount++
            rightNum.textContent = rightCount
            check = true
            hlopA()
        }
        if (this.posX - this.radius < 0) {
            this.posX = this.radius
            leftCount++
            leftNum.textContent=leftCount
            check = true
            hlopA()
        }
        if (this.posY > h - this.radius || this.posY - this.radius < 0 ) {
            this.speedY = -this.speedY
            
        }
    }
    
    ctx.beginPath()
    ctx.fillStyle = 'green'
    ctx.arc(this.posX,this.posY,this.radius,0,Math.PI*2)
    ctx.fill()
    
}
///////////////////////////////рaкетки
const Rocket = function(RrocetL) {
    let self = this
    
    self.width=20,
    self.height=90, 
    self.speed = 0,
    self.posX=RrocetL? w - self.width : 0,
    self.posY=h/2-this.height/2
    self.fill=RrocetL? 'black':'blue'
}
const Rrocket = new Rocket(true);
const Lrocket = new Rocket(false);
Rocket.prototype.startRocket = function() {
    // ctx.clearRect(0,0,w,h)
    ctx.beginPath()
    ctx.fillStyle = this.fill
    ctx.rect(this.posX,this.posY,this.width,this.height)
    ctx.fill()
}
Rocket.prototype.moveRocket = function() {
    let i = B.posX
    this.posY += this.speed
    if (this.posY < 0) {
        this.speed = 0
        this.posY=0
    }
    if (this.posY > h - this.height) {
        this.speed=0
        this.posY = h - this.height
    }
    ctx.beginPath()
    ctx.fillStyle = this.fill
    ctx.rect(this.posX,this.posY,this.width,this.height)
    ctx.fill()
    
    if (ctx.isPointInPath(this.posX, this.posY) === ctx.isPointInPath(B.posX+B.radius ,B.posY) || ctx.isPointInPath(this.posX, this.posY) === ctx.isPointInPath(B.posX-B.radius ,B.posY)) {
        if (!check) {
            B.speedX = -B.speedX
            B.posX = B.posX > w/2 ? B.posX - B.radius : B.posX + B.radius
            pongA()
        }
        

    }
}
Rrocket.startRocket()
Lrocket.startRocket()
// console.log(Rrocket);
// console.log(Lrocket);
////функция начала игры
function startGame(){
    audioM()
    Rrocket.startRocket()
    Lrocket.startRocket()
    if (check) {
        B.startBall()
    }
    if (checkInterval) {
        setInterval(tick,5)
    }
    checkInterval = false
    check = false
}


function tick() {
    ctx.clearRect(0,0,w,h)
    Rrocket.moveRocket()
    Lrocket.moveRocket()
    B.moveBall()
    
}

/////onkeydown function 
function down(event) {
    let key = event.code

    switch (key) {
        case 'ShiftLeft':
                Lrocket.speed = -3
            break;
        case 'ControlLeft':
                Lrocket.speed = 3
            break;
        case 'ArrowUp':
            Rrocket.speed = -3
            break;
        case 'ArrowDown':
            Rrocket.speed = 3
            break;
    }
}
/////keyup
function up(event) {
    let key = event.code
    switch (key) {
        case 'ShiftLeft':
        case 'ControlLeft':
            Lrocket.speed = 0
            break;
        case 'ArrowUp':
        case 'ArrowDown':
            Rrocket.speed = 0
            break;
    }
}

function audioM() {
    pong.play()
    pong.pause()
    hlop.play()
    hlop.pause()
}
function hlopA() {
    hlop.currentTime = 0
    hlop.play()
}
function pongA() {
    pong.currentTime = 0
    pong.play()
}











// функция диапазона
// function randomDiap(n,m) {
//     return Math.floor(Math.random()*(m-n+1))+n;
// }
if (navigator.vibrate) {
    console.log(true);
} else {
    console.log(false);
}