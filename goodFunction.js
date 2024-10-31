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

