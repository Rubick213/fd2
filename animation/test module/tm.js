const server = 'https://fe.it-academy.by/Examples/dyn_form_ajax/formDef1.json'
const btn1 = document.querySelector('.btn1')

let z = null
btn1.onclick = function(event) {
  
    // $.ajax(server,{type:'GET',dataType:'json',success:god,error:er})
}

function god(data) {
    z = data
    console.log('god');
    console.log('данные после успешного завершения загрузки '+data);
}
function er() {
}
console.log('данные '+z);

// function loadD () {
//     $.ajax("https://fe.it-academy.by/Examples/net_city/cities.json",
//     {type:'GET',dataType:'json', cache:false,complete:com,success:god,error:fouls,xhrFields:{onprogress:progres}})
// }
// function god(data,textStatus,jqXHR) {
//     let text = document.querySelector('.box')
//     // text.innerHTML = x
//     console.log(data,textStatus,jqXHR);
// }
// function fouls(q,w) {
// console.log(q,w);
// }
// function com() {
//     document.querySelector('.progress').style.display = 'none'
//     document.querySelector('.box').innerHTML = 'Загрузка завершена!'
// }
// function progres(event) {
//     if (event.lengthComputable) {
//         // console.log(event.loaded/event.total*100);
//         let rec = Math.round(event.loaded/event.total*100)
//         document.querySelector('.progressChild').style.width = rec+'%'
//     }
// }

function fullScreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
      console.log(1);
    } else if(element.webkitrequestFullscreen) {
      element.webkitRequestFullscreen();
      console.log(2);
    } else if(element.mozRequestFullscreen) {
      element.mozRequestFullScreen();
      console.log(3);
    } else {
        console.log('no');
    }
  }

const btn2 = document.querySelector('.btn2')
btn2.onclick = function(event) {
    var html = document.documentElement
    fullScreen(html)
}
