// const arrImgUrl = {
//     img1: ['/test/img/image_part_001.jpg','/test/img/image_part_002.jpg','/test/img/image_part_003.jpg',
//     '/test/img/image_part_004.jpg','/test/img/image_part_005.jpg','/test/img/image_part_006.jpg','/test/img/image_part_007.jpg',
//     '/test/img/image_part_008.jpg','/test/img/image_part_009.jpg','/test/img/image_part_010.jpg','/test/img/image_part_011.jpg',
//     '/test/img/image_part_012.jpg','/test/img/image_part_013.jpg','/test/img/image_part_014.jpg','/test/img/image_part_015.jpg','/test/img/image_part_016.jpg']
// }
// let boxImg = document.querySelectorAll('.capsul')
// const length = arrImgUrl.img1.length
// let randomEl = Math.floor(Math.random() * length)

// function addImg(img) {
//     let index = null
//     const checkRandomNumber = []
//     for (let i = 0; i < boxImg.length; i++) {
//         const length = img.length
//         const randomNumber = Math.floor(Math.random() * length)
//         const elImg = document.createElement('img')
//         if(elImg.dataset.set !== randomEl && !(checkRandomNumber.includes(randomNumber))) {
//             checkRandomNumber.push(randomNumber)
//             elImg.setAttribute('data-set',randomNumber ) // добовляем атрибут дата сет картинке
//             elImg.setAttribute('src',img[randomNumber ]) // добовляем url картинке
//         } else {
//             i--
//         }
//         console.log(elImg.dataset.set);
       
//         boxImg[i].appendChild(elImg)
//     }
// }
// addImg(arrImgUrl.img1)


