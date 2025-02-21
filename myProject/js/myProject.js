// const container = document.querySelector('.container')
// const gameBtn = document.querySelector('.game_btn')
// const startGame = document.querySelector('.startGame')

// function gameGo(event) {
//     let element = getComputedStyle(container)
//     let styleStartGame = getComputedStyle(startGame)
//     let startGameCount = parseFloat(styleStartGame.opacity)
//     let containerCount = parseFloat(element.opacity)
    
//     let interval = setInterval(countOpacity,30)

//     function countOpacity() {
//         containerCount -= 0.1
//         container.style.opacity = containerCount
//         if (containerCount <= 0) {
//             container.style.display = 'none' 
//             clearInterval(interval)
//             console.log(interval);
//             interval = setInterval(countOpacityPlus,30)
//         }
//     }
//     function countOpacityPlus() {
//         startGame.style.display = 'block'
//         startGameCount += 0.1
//         startGame.style.opacity = startGameCount
//         if (startGameCount >= 1) {
//             clearInterval(interval)
//         }
//     }
// }

// gameBtn.addEventListener('click', gameGo)

class Menu {
    constructor(btn,specContainer,container,btnClose) {
        this.btn = document.querySelectorAll(btn),
        this.specialContainer = document.querySelectorAll(specContainer)
        this.container = document.querySelector(container)
        this.btnClose = document.querySelector(btnClose)
        this.interval = null
        this.init()
        this.clickClose()
    }
    init() {
        this.btn.forEach((element,index) => {
            element.addEventListener('click',(event) => {
                this.clickBtn(index)
            })
        });
    }
    clickBtn(index) {
        let block = this.btn[index]
        let styleBlock = parseFloat(getComputedStyle(block).opacity)
        this.interval = setInterval(()=>{
            styleBlock -= 0.1
            this.container.style.opacity = styleBlock
            if (styleBlock <= 0) {
                this.container.style.display = 'none'
                clearInterval(this.interval)
                this.showBlock(index)
            }
        },40)
    }
    showBlock(index){
        let specBlock = this.specialContainer[index]
        let styleSpecBlock = parseFloat(getComputedStyle(specBlock).opacity)
        specBlock.style.display = 'block'
        this.interval = setInterval(() => {
            styleSpecBlock += 0.1
            specBlock.style.opacity = styleSpecBlock
        },40)

        if (styleSpecBlock >= 1) {
            clearInterval(this.interval)
        }
    }
    ///////кнопка закрытия
    clickClose() {
        this.btnClose.addEventListener('click',(event)=> {
            console.log('clsoe');
          this.specialContainer.forEach(element => {
            element.style.opacity = 0
            element.style.display = 'none'
          })
          this.container.style.opacity = 1
          this.container.style.display = 'flex'  
        })
    }
    
 }
 let menu = new Menu('.btn','.special_container','.container','.btn_close')


 class LvlGet {
    constructor(lvl){
        this.lvl = document.querySelectorAll(lvl)
        this.eventLvl()
    }
    eventLvl() {
        this.lvl.forEach((el,index) => {
            el.addEventListener('click',()=>{
                this.server(el,index)
            })
        })
        
    }
    server(eventTarget,index) {
        let dataId = eventTarget.dataset.id
        
        
        this.addLvl(obj)
    }
    addLvl() {

        let div = document.createElement('div')
        for (let i = 0; i < 12; i++) {
            let divChild = document.createElement('div')

        }
    }
 }
 let Lvl = new LvlGet('.lvl')

 let sukach = {
    boxLvl:{
        lvl:{
            'lvl1':[],
            'lvl2':[],
            'lvl3':[],
            'lvl4':[],
            'lvl5':[],
            'lvl6':[],
            'lvl7':[],
            'lvl8':[],
            'lvl9':[],
            'lvl10':[],
            'lvl11':[],
            'lvl12':[],
            'lvl13':[],
            'lvl14':[],
            'lvl15':[],
            'lvl16':[],
            
        },
    },
    user:{},

 }