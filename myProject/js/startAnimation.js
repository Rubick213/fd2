let canvas,ctx,w,h,snows

function init() {
    canvas = document.querySelector('#canvas_show')
    ctx = canvas.getContext('2d')
    resaizeRest()
    canvas.width = w
    canvas.height = h
    anim()
}

function resaizeRest () {
    w = window.innerWidth;
    h = window.innerHeight
    canvas.width = w
    canvas.height = h
    snows = []
    for (let i = 0; i < 500; i++) {
        snows.push(new Snows())
    }
}
function anim() {
    ctx.clearRect(0,0,w,h)
    drawScene()
    requestAnimationFrame(anim)
}
function drawScene() {
    for (let i = 0; i < snows.length; i++) {
        snows[i].update()
        snows[i].draw()
    }
}
function randomPos(min,max){
    return Math.round(Math.random()*(max-min)) + min
}

class Snows {
    constructor(){
        this.reset()
        this.color = '140, 175, 204';
        
    }
    reset() {
        this.x=randomPos(0,w);
        this.y=randomPos(-(h*0.3),h);
        this.xc = 0.3;
        this.yc = randomPos(10,15)/10;
        this.r=randomPos(5,40)/10;
        this.alpha = randomPos(-10,0)/10
        this.ac = randomPos(3,5)/200;
    }
    draw(){
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.r,0,Math.PI*2)
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`
        ctx.strokeStyle = `rgba(${this.color}, ${this.alpha})`
        ctx.fill()
        ctx.stroke()
        ctx.closePath()
    }
    update(){
        this.x += this.xc;
        this.y += this.yc;
        this.alpha += this.ac
        if (this.alpha > 2) {
            this.ac *= -1
        } else if(this.alpha < 0 && this.ac < 0){
            this.reset()
        } 
    }
}

window.addEventListener('DOMContentLoaded',init)
window.addEventListener('resize',resaizeRest)