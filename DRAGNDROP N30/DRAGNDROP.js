// window.addEventListener('load',()=>{
//     let body = document.querySelector('body');
//     let img = body.querySelectorAll('img');
//     let zetIndex = 0;
//     (function () {
//         for (let i = img.length-1; i >= 0; i--){
//             let posInfo = img[i].getBoundingClientRect()
//             let scrollY = window.scrollY
//             let posTop = posInfo.top + scrollY
//             img[i].style.position = 'absolute'
//             img[i].style.top = posTop+'px'
//             img[i].style.left = posInfo.left+'px'
//             img[i].style.zIndex = zetIndex
//         };
//     }
//     ())    
    
    
    
    
//     /////////////////////////////////////////////////////////////////////
//     let type = null
//     let offsetX_Mouse // offsetX 
//     let offsetY_Mouse // offsetY
//     let lengthX 
//     let lengthY

//     body.addEventListener('mousedown',mouse)
    
//     function mouse(event) {
//         event.preventDefault()
//         console.log(document.elementFromPoint(event.clientX, event.clientY));
//         if (event.which === 1) {
//             if (event.target.tagName === 'IMG') {
//                 offsetX_Mouse = event.offsetX
//                 offsetY_Mouse = event.offsetY
//                 event.target.style.cursor = 'grabbing'
//                 type = event.type
//                 lengthX =  event.target.offsetWidth - offsetX_Mouse;
//                 lengthY = event.target.offsetHeight - offsetY_Mouse
//                 zetIndex++
//                 test(type)
                
//         }
//         }
        
//     }
//     ///////////////////////////////////////////////////////////////////////
//     body.addEventListener('mouseup',(event) => {      
//         event.preventDefault()
//         // if (event.target.tagName === 'IMG') {
//             let tag = event.target
//             tag.style.cursor = 'context-menu'
//             type = event.type
//             test(type)
//         // }
        
            
//     })
//     ///////////////////////////////////////////////////////////////////////
//     function test() {
//         if (type === 'mousedown') {
//             // console.log('yeas');
//             body.addEventListener('mousemove',move)
//         }
//         if(type === 'mouseup') {
//             // console.log('yeas2');
//             body.removeEventListener('mousemove',move)
//         }
        
//     }
        
//     //fucntion mouseDown
//     function move(event) {
//         event.preventDefault()
        
//         let y1 = event.clientY - offsetY_Mouse
//         let x1 = event.clientX - offsetX_Mouse
//         event.target.style.top = (y1 + window.scrollY) + 'px'
//         event.target.style.left = x1 + 'px'

//         event.target.style.zIndex = zetIndex
//         // console.log(event.clientX,event.clientY);
        
//     }

// })





// // pageX,Y - относительно веб страницы 
// //clientX,Y - относительно верхнего угла
// //offset X,Y - относительно самого элемента

// // console.log(clientTag);
// // console.log('Height:'+H);
// // console.log('width:'+W);
// // console.log('Px'+clX+' '+'Py:'+clY+'\n'+'ofsetX:'+ ofsX+'\n'+'ofsetY:'+ofyY);
// // console.log(img.getBuildi);

// // if (tag.tagName === 'IMG') 