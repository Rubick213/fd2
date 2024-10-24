
//  ошибка была в том что формула x1,x2 делил на 0 а на ноль делить нельзя и из-за
//  этого получалось NaN и -infinity  

function squareRoots(a,b,c) {
    if (a === 0 ) {      
        return [-(c / b)] 
    }

    let d = b * b - 4 * a * c;
    
    if (d < 0) {
        return []
    }
    if (d === 0) {
        return [-b/(2*a)]
    } 
    if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a)
        let x2 = (-b - Math.sqrt(d)) / (2 * a)
        return [x1,x2]
    }
}


function resultSqrt() {
    const a = +prompt('Число "a"')
    const b = +prompt('Число "b"')
    const c = + prompt('Число "c"')
    const roots = squareRoots(a,b,c)

    if (roots.length === 0) {
        alert('Корней нет!')
    } 
    if (roots.length === 1) {
        alert(`Корень один! : ${roots[0]}`)
    } 
    if (roots.length === 2)  {
        alert(`Корней два! : ${roots[0]}, ${roots[1]}`)
    }
}



function squareRootsTests() {

    {
        console.log('тест 1,1,1 -> нет корней');
        const roots=squareRoots(1,1,1);
        console.log( (roots.length==0)
            ?'пройден':'НЕ ПРОЙДЕН!' )
    }

    {
        console.log('тест 1,-2,-3 -> два корня 3,-1');
        const roots=squareRoots(1,-2,-3);
        console.log( ((roots.length==2)&&(roots[0]==3)&&(roots[1]==-1))
            ?'пройден':'НЕ ПРОЙДЕН!' )
    }

    {
        console.log('тест -1,-2,15 -> два корня -5,3');
        const roots=squareRoots(-1,-2,15);
        console.log( ((roots.length==2)&&(roots[0]==-5)&&(roots[1]==3))
            ?'пройден':'НЕ ПРОЙДЕН!' )
    }

    {
        console.log('тест 1,12,36 -> один корень -6');
        const roots=squareRoots(1,12,36);
        console.log( ((roots.length==1)&&(roots[0]==-6))
            ?'пройден':'НЕ ПРОЙДЕН!' )
    }

    {
        console.log('тест 0,5,-10 -> один корень 2');
        const roots=squareRoots(0,5,-10);
        console.log( ((roots.length==1)&&(roots[0]==2))
            ?'пройден':'НЕ ПРОЙДЕН!' )
    }
}

try{
    console.log('до исключения');
    let a = b
    console.log('после исключения ');
}
catch(ex){
    console.error('исключение');
    console.warn(`имя : ${ex.name}`);
    console.error((`тип: ${ex.message}`));
}