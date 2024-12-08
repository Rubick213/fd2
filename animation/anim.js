// сердце увеличиваеться и уменьшаеться
// {
//     const canvas = document.getElementById('ctx')
//     const ctx = canvas.getContext('2d')
//     let wc = canvas.offsetWidth
//     let hc = canvas.offsetHeight

//     let xStart = 200
//     let yEnd = 100
//     let plus = 10
//     //////1
//     let cx1 = 150
//     let cy1 = 50
//     let x1 = 100
//     let y1 = 100
//     ////2
//     let cx2 = 25
//     let cy2 = 200
//     let x2 = 200
//     let y2 = 300
//     ////3
//     let cx3 = 375
//     let cy3 = 200
//     let x3 = 300
//     let y3 = 100
//     ////4
//     let cx4 = 250
//     let cy4 = 50
//     let x4 = 200
//     let y4 = 100
//     let check = true
//     let r1 = 60
//     let r2 = 150
//     an()
//     function an() {
//         ctx.clearRect(0,0,wc,hc)
//         ctx.lineWidth = 2
//         let grad = ctx.createRadialGradient(200,190,r1,200,180,r2)
//         grad.addColorStop(0,'rgba(252,0,0,1)')
//         grad.addColorStop(0.33,'rgba(255,24,24,0.66)')
//         grad.addColorStop(0.66,'rgba(255,78,78,0.33)')
//         grad.addColorStop(0.99,'rgba(255,251,251,0.1)')
//         ctx.fillStyle=grad
//         ctx.beginPath()
//         ctx.moveTo(xStart,yEnd)
//         ctx.quadraticCurveTo(150,cy1,x1,y1)
//         ctx.quadraticCurveTo(cx2,cy2,x2,y2)
//         ctx.quadraticCurveTo(cx3,cy3,x3,y3)
//         ctx.quadraticCurveTo(cx4,cy4,x4,y4)
//         ctx.fill()
        
//         if (check) {
//             if (yEnd < 150) {
//                 r1 -= 0.15
//                 r2 -= 0.15
//                 yEnd += 0.1 *2*2
//                 ///1
//                 cy1 += 0.03 *2*2
//                 x1 += 0.02 *2*2
//                 y1 += 0.1 *2*2
//                 ///2
//                 cx2 += 0.15*2*2
//                 y2 -= 0.08*2*2
//                 //3
//                 cx3 -= 0.15*2*2
//                 x3 -= 0.02*2*2
//                 y3 += 0.1*2*2
//                 //4
//                 cy4 += 0.03*2*2
//                 y4 += 0.1*2*2
//             } else {
//                 check = false
//             }
//         } else {
//             if (yEnd > 100) {
//                 r1 += 0.15
//                 r2+=0.15
//                 yEnd -= 0.1*2*2
//                 ///1
//                 cy1 -= 0.03*2*2
//                 x1 -= 0.02*2*2
//                 y1 -= 0.1*2*2
//                 ///2
//                 cx2 -= 0.15*2*2
//                 y2 += 0.08*2*2
//                 //3
//                 cx3 += 0.15*2*2
//                 x3 += 0.02*2*2
//                 y3 -= 0.1*2*2
//                 //4
//                 cy4 -= 0.03*2*2
//                 y4 -= 0.1*2*2
//             } else {
//                 check = true
//             }
        
//         }
//         requestAnimationFrame(an)
        
//     }
// }

const canvas = document.getElementById('ctx')
const ctx = canvas.getContext('2d')
let wc = canvas.offsetWidth
let hc = canvas.offsetHeight

ctx.beginPath()
ctx.strokeStyle = 'blue'
ctx.fillStyle = 'blue'
ctx.lineWidth = 4
ctx.lineJoin='round'
ctx.shadowColor='blue';
ctx.shadowOffsetX=0;
ctx.shadowOffsetY=0;
ctx.shadowBlur=15;
ctx.moveTo(175,0)
ctx.lineTo(150,50)
ctx.lineTo(250,100)
ctx.lineTo(200,200)
ctx.lineTo(210,300)
ctx.lineTo(200,400)
ctx.stroke()
ctx.beginPath()
ctx.moveTo(250,100)
ctx.lineTo(255,150)
ctx.lineTo(300,160)
ctx.lineTo(325,225)
ctx.stroke()
ctx.beginPath()
// ctx.moveTo(310,200)
// ctx.lineTo()
// ctx.lineTo()
// ctx.lineTo()
// ctx.stroke()
ctx.beginPath()
ctx.moveTo(190,390)
ctx.lineTo(180,350)
ctx.lineTo(160,370)
ctx.lineTo(150,330)
ctx.stroke()













