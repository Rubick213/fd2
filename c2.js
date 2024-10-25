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
console.log(x1);



//test
const testH1 = {
    '1': [h1,h2,false],
    '2': [h1.a,h2.a,true],
    '3': [h1.b,h2.b,false],
    '4': [h1.b.b1,h2.b.b1,true],
    '5': [h1.c,h2.c,false],
    '6': [h1.c[0],h2.c[0],true],
    '7': [h1.d,h2.d,true],
    '8': [h1.e,h2.e,true],
    '9': [isNaN(h2.f),true],
    '10':[(h2.c instanceof Array), true]
}

const testA1 = {
    '1': [a1,a2,false],
    '2': [typeof(a2),typeof(a1),true],
    '3': [a1[0],a2[0],true],
    '4': [a1[1],a2[1],false],
    '5': [a1[1].b1,a2[1].b1, true],
    '6': [a1[2],a2[2],false],
    '7': [a1[2][0],a2[2][0], true],
    '8': [a1[3],a2[3],true],
    '9': [a1[4],a2[4],true],
    '10': [isNaN(a2[5]),true],
    '11': [(a2[2] instanceof Array),true]
}
const testV1 = {
    '1': [typeof(v2), typeof(v1),true],
    '2': [v1,v2,true]
}
const testZ1 = {
    '1': [typeof(z1), typeof(z2),true],
    '2': [z1,z2,true]
}
const testN1 = {
    '1': [typeof(v2), typeof(v1),true],
    '2': [isNaN(n2),true]
}
const testX1 = {
    '1': [x1,x2,false],
    '2': [x1[2],x2[2],true],
    '3': [x1[0],x2[0],false],
    '4': [x1[0].age,x2[0].age,true],
    '5': [x1[0].arr,x2[0].arr,false],
    '6': [x1[3][1]['2.3'][5],x2[3][1]['2.3'][5],false]
};

function testCopy(original,copy,objTest) {
    let no = 0;
    let yeas = 0;
    let countTest = 0
    
    for (const key in objTest) {
        const valueArr =  objTest[key]
        const elArr = valueArr.length-1

        const check = valueArr[0] === valueArr[1] 
        
        if (valueArr[elArr] === check) {
            console.log(`тест[${key}] прошел`);
            // console.log(check);
            yeas++
        } else {
            console.log(`НЕ ПРОШЕЛ!!! => №${key}` );
            // console.log(check);
            no++
        }
        countTest++
    }

    console.log(`всего тестов ${countTest}: из них прошли ${yeas}, и не прошли ${no}`);
}
// testCopy(a1,a2,testH1)
// testCopy(h1,h2,testA1)
// testCopy(v1,v2,testV1)
// testCopy(z1,z2,testZ1)
// testCopy(n1,n2,testN1)
// testCopy(x1,x2,testX1)
