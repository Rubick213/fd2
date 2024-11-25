// func1------------------------------------------
// позволяет узнать реальный класс обьекта
// function getClassName(obj) {
//     if ( obj.constructor && obj.constructor.name )
//     return obj.constructor.name;
//     const c=Object.prototype.toString.apply(obj);
//     return c.substring(8,c.length-1);
//     }

// func2------------------------------------------
// function Animal() {
//     this.eyes=2; // пусть у каждого животного 2 глаза
//     }
//     // методы всегда добавляем в прототип - это позволяет экономить память
//     Animal.prototype.showEyes=function()
//     { console.log('eyes: '+this.eyes); }
//     Animal.prototype.setLegs=function(legs)
//     { this.legs=legs; }
//     Animal.prototype.showLegs=function()
//     { console.log('legs: '+this.legs); }

//     function Tiger() {
//     Animal.call(this); // явно вызываем конструктор класса-предка
//     this.setLegs(4); // плюс к тому что есть у животного, у тигра 4 ноги...
//     }
//     Tiger.prototype=
//     Object.create(Animal.prototype); // тигр - это животное, наследуемся
//     Tiger.prototype.constructor=Tiger; // рекомендуется
//     Tiger.prototype.roar=function() // ...и тигр умеет рычать
//     { console.log('я реву!'); }

//     function Butterfly() {
//     Animal.call(this); // явно вызываем конструктор класса-предка
//     this.setLegs(6); // плюс к тому что есть у животного, у бабочки 6 ног...
//     }
//     Butterfly.prototype=
//     Object.create(Animal.prototype); // бабочка - это животное, наследуемся
//     Butterfly.prototype.constructor=Butterfly; // рекомендуется
//     Butterfly.prototype.fly=function() // ...и бабочка умеет летать
//     { console.log('я летаю!'); }

//func3------
// дебоунсинг, функция которая срабатывает через некоторое время например перевод слов

    // функция позволяет установить обработчик func,
    // который не срабатывает слишком часто -
    // если immediate=false - func будет вызван в конце серии событий,
    // если immediate=true - func будет вызван в начале серии событий
    // серия событий - последовательность событий,
    // интервалы между которыми не превыщают interval миллисекунд
    
// function debounceSerie(func,interval,immediate) {
//     let timer;
//     return function() {
//         let context=this, args=arguments;
//         let later=function() {
//             timer=null;
//             if ( !immediate )
//                 func.apply(context,args);
//         };
//         let callNow=immediate&&!timer;
//         clearTimeout(timer);
//         timer=setTimeout(later,interval);
//         if ( callNow )
//             func.apply(context,args);
//     };
// }

// const phraseElem=document.getElementById('IPhrase');
// phraseElem.addEventListener('keyup',
//     debounceSerie(translatePhrase,500,false));
// // пока мы часто жмём клавиши - translatePhrase вызван НЕ будет

// function translatePhrase() {
//     // запускаем длительную операцию по обработке фразы
//     const phrase=document.getElementById('IPhrase').value;
//     console.log('перевожу фразу: '+phrase);
// }