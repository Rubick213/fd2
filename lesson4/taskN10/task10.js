
    // function randomDiap(n,m) {
    //         return Math.floor(Math.random()*(m-n+1))+n;
    // }

    // function mood(colorsCount) {
    //     const colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];

    //     console.log( 'цветов: ' + colorsCount );
    //     for ( let i=1; i<=colorsCount; i++ ) {
    //         const n=randomDiap(1,7);
    //         const colorName=colors[n];
    //         console.log( colorName );
    //     }
    // }

    // mood(3);


///// доработанная версия
function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1)) + n        
}
// полезная функция
function mood(colorsCount) {
    const colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
    const colorsObj = {}
    
    console.log( 'цветов: ' + colorsCount );

    for (let i = 1; i <= colorsCount; i++) {
        let n
        do {
            n =  randomDiap(1,7)
        } while (n in colorsObj);
        const colorName = colors[n]
        colorsObj[colorName] = true
        
    }
    console.log(colorsObj);
}

mood(3);

