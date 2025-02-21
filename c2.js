var h1={ a:5, b:{b1:6,b2:7}, c:[33,22], d:null, e:undefined, f:Number.NaN };
var a1=[ 5, {b1:6,b2:7}, [33,22], null, undefined, Number.NaN];
var v1="sss";
var z1=null;
var n1=Number.NaN;
const x1 = [
    {name:true,age:23,arr:[1,2,3]},
    23,
    'stroke',
    [ {'1':true,'2':false,'3':NaN}, {'2.1': 'sasha','2.2':24,'2.3':[1,2,3,4,5,[11,22,33]]} ],
    [1,2,3,[4,5,6,[7,8,9]]],
    [{},{},{}]
]

function deepCopy(collections) { 
    // console.log(collections);

    if (typeof collections !== 'object' || collections == null) {
        return collections
    }

    let outCopy

    if (Array.isArray(collections)) {
        outCopy = []
        collections.forEach(el => {
            outCopy.push(deepCopy(el))
            // console.log(outCopy);
        })
    } else {     
        outCopy = {}
        for (const key in collections) {
            outCopy[key] = deepCopy(collections[key])             
        }  
    
}
    return outCopy
}
var h2 = deepCopy(h1)
var a2 = deepCopy(a1);
var v2 = deepCopy(v1);
var z2 = deepCopy(z1);
var n2 = deepCopy(n1)
const x2 = deepCopy(x1)


//test
const testH1 = [
    {
        name:'h1 === h2',
/*1*/   test: () => h1 === h2,
        outPut: false
    },
    {
        name: 'h1.a === h2.a',
/*2*/   test: () => h1.a === h2.a,
        outPut: true
    },
    {
        name: 'h1.b === h2.b',
/*3*/   test: () => h1.b === h2.b,
        outPut: false
    },
    {
        name: 'h1.b.b1 === h2.b.b1',
/*4*/   test: () => h1.b.b1 === h2.b.b1,
        outPut: true
    },
    {
        name: 'h1.c === h2.c',
/*5*/   test: () => h1.c === h2.c,
        outPut: false 
    },
    {
        name: 'h1.c[0] === h2.c[0]',
/*6*/   test: () => h1.c[0] === h2.c[0],
        outPut: true 
    },
    {
        name: 'h1.d === h2.d',
/*7*/   test: () => h1.d === h2.d,
        outPut: true 
    },
    {
        name: 'h1.e === h2.e',
/*8*/   test: () => h1.e === h2.e,
        outPut: true 
    },
    {
        name: 'isNaN(h2.f)',
/*9*/   test: () => isNaN(h2.f),
        outPut: true 
    },
    {
        name: '(h2.c instanceof Array)',
/*10*/   test: () => (h2.c instanceof Array),
        outPut: true 
    },
]
const testA1 = [
    {
        name:'a1 === a2',
/*1*/   test: () => a1 === a2,
        outPut: false
    },
    {
        name: 'typeof(a1) === typeof(a2)',
/*2*/   test: () => typeof(a1) === typeof(a2),
        outPut: true
    },
    {
        name: 'a1[0] === a2[0]',
/*3*/   test: () => a1[0] === a2[0],
        outPut: true
    },
    {
        name: 'a1[1] === a2[1]',
/*4*/   test: () => a1[1] === a2[1],
        outPut: false
    },
    {
        name: 'a1[1].b1 === a2[1].b1',
/*5*/   test: () => a1[1].b1 === a2[1].b1,
        outPut: true 
    },
    {
        name: 'a1[2] === a2[2]',
/*6*/   test: () => a1[2] === a2[2],
        outPut: false 
    },
    {
        name: 'a1[2][0] === a2[2][0]',
/*7*/   test: () => a1[2][0] === a2[2][0],
        outPut: true 
    },
    {
        name: 'a1[3] === a2[3]',
/*8*/   test: () => a1[3] === a2[3],
        outPut: true 
    },
    {
        name: 'a1[4] === a2[4]',
/*9*/   test: () => a1[4] === a2[4],
        outPut: true 
    },
    {
        name: 'isNaN(a2[5])',
/*10*/   test: () => isNaN(a2[5]),
        outPut: true 
    },
    {
        name: '(a2[2] instanceof Array)',
/*11*/   test: () => (a2[2] instanceof Array),
        outPut: true 
    } 
]
const testV1 = [
    {
        name:'typeof(v1) === typeof(v2)',
/*1*/   test: () => typeof(v1) === typeof(v2),
        outPut: true
    },
    {
        name: 'v1 === v2',
/*2*/   test: () => v1 === v2,
        outPut: true
    }
]
const testZ1 = [
    {
        name:'typeof(z1) === typeof(z2)',
/*1*/   test: () => typeof(z1) === typeof(z2),
        outPut: true
    },
    {
        name: 'z1 === z2',
/*2*/   test: () => z1 === z2,
        outPut: true
    }
]
const testN1 = [
    {
        name:'typeof(n1) === typeof(n2)',
/*1*/   test: () => typeof(n1) === typeof(n2),
        outPut: true
    },
    {
        name: 'isNaN(n2)',
/*2*/   test: () => isNaN(n2),
        outPut: true
    }
]
const testX1 = [
    {
        name:'x1 === x2',
/*1*/   test: () => x1 === x2,
        outPut: false
    },
    {
        name: 'x1[2] === x2[2]',
/*2*/   test: () => x1[2] === x2[2],
        outPut: true
    },
    {
        name: 'x1[0] === x2[0]',
/*3*/   test: () => x1[0] === x2[0],
        outPut: false
    },
    {
        name: 'x1[0].age === x2[0].age',
/*4*/   test: () => x1[0].age === x2[0].age,
        outPut: true
    },
    {
        name: 'x1[0].arr === x2[0].arr',
/*5*/   test: () => x1[0].arr === x2[0].arr,
        outPut: false 
    },
    {
        name: "x1[3][1]['2.3'][5] === x2[3][1]['2.3'][5]",
/*6*/   test: () => x1[3][1]['2.3'][5] === x2[3][1]['2.3'][5],
        outPut: false
    }
]

function testCopy(ArrTest,name) {
    console.clear('')
    let no = 0;
    let yeas = 0;
    let countTest = ArrTest.length
    console.log('НАЗВАНИЕ ТЕСТА'+' ' + name);

    for (let i = 0; i < ArrTest.length; i++) {
        let name = ArrTest[i].name
        let test = ArrTest[i].test()
        let outPut = ArrTest[i].outPut

        if (test === outPut) {
            console.log(`test ${name}: равен  ${outPut} \n Прошел`);
            yeas++
        } else {
            console.log(`test ${name}: равен ${outPut} \n НЕ ПРОШОЛ!!!`);
            no++
        }
    }
    
    
    
    console.log(`всего тестов ${countTest}: из них прошли ${yeas}, и не прошли ${no}`);
}




console.log(2);
let asd = 12