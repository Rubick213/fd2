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
    let randomY = Math.random() * 3
    let randomNum  = Math.floor(randomY) - 1
    this.speedY = randomNum
    this.speedX = randomY > 1.5 ? 1 : -1
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
        }
        if (this.posX - this.radius < 0) {
            this.posX = this.radius
            leftCount++
            leftNum.textContent=leftCount
            check = true
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
    
    if (ctx.isPointInPath(this.posX, this.posY) === ctx.isPointInPath(B.posX+15 ,B.posY) || ctx.isPointInPath(this.posX, this.posY) === ctx.isPointInPath(B.posX-15 ,B.posY)) {
        if (!check) {
            B.speedX = -B.speedX
            B.posX = B.posX > w/2?B.posX - B.radius : B.posX + B.radius
        }
        

    }
}
Rrocket.startRocket()
Lrocket.startRocket()
// console.log(Rrocket);
// console.log(Lrocket);
////функция начала игры
function startGame(){
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
            // console.log(key);
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





// ctx.beginPath()
// ctx.fillRect(w-25,h/2-50,50,100)
// ctx.stroke()

// let x = ctx.isPointInPath(w/2,w/2)
// console.log(x);









// const img = new Image()
// img.src = '../img/images-removebg-preview.png'
// console.log(img);
// console.log(zrandom/100);
    
/////////////////обработчики события клавиш down and up
// img.onload = function() {
//     let check = true /// флажочек при повторном нажатии клавиши старт 
    
//     btnStart.onclick = function() {
        
//         let random = Math.random()
//         let randomNumber = Math.floor(Math.random() * 4); 
//         let sign = Math.random() < 0.5 ? -1 : 1; 
//         let res = randomNumber * sign / 100
//         B.speedX = random < 0.5 ?  -0.02 : 0.02 
//         B.speedY = 0

//         gameTick()
//         function gameTick () {
//             ctx.clearRect(0,0,can.width,can.height)
//             LRocket.addXY()
//             RRocket.addXYR()
//             if (check) {
//                 B.centerImgX += B.speedX
//                 B.centerImgY += B.speedY   
//             }
            
//             if (B.centerImgX + B.width/2  > can.width) {
//                 B.centerImgX = B.centerImgX - B.width/2
//                 check = false
//             }
//             ctx.drawImage(img, B.centerImgX, B.centerImgY, B.width,B.height)
//             setInterval(gameTick,45)
//         }
//     }
//     window.onkeydown = function (event){
//         let key = event.code
//         // console.log(key);
//         switch (key) {
//             case 'ShiftLeft':
//                     LRocket.speed = -0.03
//                 break;
//             case 'ControlLeft':
//                     LRocket.speed = 0.03
//                 break;
//             case 'ArrowUp':
//                 RRocket.speed = -0.03
//                 break;
//             case 'ArrowDown':
//                 RRocket.speed = 0.03
//                 break;
//         }
//         // console.log(LRocket.speed);
//         // console.log(RRocket.speed);
//     }
//     window.onkeyup = function (event) {
//         let key = event.code
//         switch (key) {
//             case 'ShiftLeft':
//             case 'ControlLeft':
//                 LRocket.speed = 0
//                 break;
//             case 'ArrowUp':
//             case 'ArrowDown':
//                 RRocket.speed = 0
//                 break;
//         }
//         // console.log(LRocket.speed);
//         // console.log(RRocket.speed);
//     }
//     //////////функция конструктор мячика
//     const Ball = function() {
//         let self=this
//         self.width=30
//         self.height=30
//         self.speedX=0.02
//         self.speedY=0
//         self.centerImgX=can.offsetWidth/2-self.width/2
//         self.centerImgY=can.offsetHeight/2-self.height/2 
//         console.log(self);
//     }
//     const B = new Ball()
//     Ball.prototype.moveBall = function() {
        
//        ctx.beginPath()
//        ctx.arc(20, 20, 10, 0, Math.PI * 2);
//        arc.stroke()
        

//     }
//     B.moveBall()
    
//     //////////функция конструктор левой ракетки
//     const LeftRocket = function() {
//         let self = this
//         self.width = 20
//         self.height = 70
//         self.y = can.height/2-self.height/2
//         self.speed = 0
//     }
//     const LRocket = new LeftRocket()
//     LeftRocket.prototype.addXY = function() {
//         if (LRocket.y < 0) {
//             this.y = 0
//         }
//         if (LRocket.y > (can.height - this.height)) {
//             this.y = can.height - this.height
//         }
//         this.y += this.speed
//         ctx.beginPath()
//         ctx.lineWidth = 3
//         ctx.strokeRect(0,this.y,this.width,this.height)
//         // ctx.strokeRect()
//     }
//     LRocket.addXY()
//     // LRocket.addXY()
//     console.log(LRocket);

//     ///////// функция конструктор правой ракетки 
//     const RigthRocket = function() { 
//         let self = this
//         self.width = 20
//         self.height = 70
//         self.y = can.height/2-self.height/2
//         self.speed = 0
//     }
//     const RRocket = new RigthRocket()
//     RigthRocket.prototype.addXYR = function() {
//         if (RRocket.y < 0) {
//             this.y = 0
//         }
//         if (RRocket.y > (can.height - this.height)) {
//             this.y = can.height - this.height
//         }
//         this.y += this.speed
//         ctx.beginPath()
//         ctx.lineWidth = 3
//         ctx.strokeRect(can.width-this.width,this.y,this.width,this.height)
//         // console.log(this.y);
//     }
//     RRocket.addXYR()
//     console.log(RRocket);

//     ///////////////// интервал 
   
// ctx.beginPath()
// ctx.lineWidth = 2
// ctx.rect(0,0,20,70)
// ctx.stroke()

// ctx.beginPath()
// ctx.lineWidth = 2.5
// ctx.rect(480,70,20,60)
// ctx.stroke()

// ctx.beginPath()
// ctx.lineWidth = 2
// ctx.moveTo(0,100)
// ctx.lineTo(500,100)
// ctx.stroke()

// let img = new Image()
// img.src='../img/images-removebg-preview.png'
// const widthImg = 30
// const heightImg = 30
// img.onload = function() {
//     ctx.drawImage(img, can.offsetWidth/2 - widthImg/2, can.offsetHeight/2 - heightImg/2,widthImg,heightImg)
//     img.globalAlpha = 0
// }
//

