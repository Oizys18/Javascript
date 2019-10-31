/*
// 아래와 같은 코드를 axios로 대체하는 것 
const DogAPI = new XMLHttpRequest()
DogAPI.open()
DogAPI.send()
DogAPI.addEventListener()
*/


// const URL = "https://dog.ceo/api/breeds/image/random"
// const result = axios.get(URL)
// Promise 객체 (resolved)
// Promise 객체를 까보기 위해서 .then()
// result.then((result) => {
//     console.log(result.data.message)
// })



// 버튼에 합치기 
const imgs = document.querySelector('#imgs')
const dogBtn = document.querySelector("#dog")
const catBtn = document.querySelector('#cat')
dogBtn.addEventListener('click', e => {
    const URL = "https://dog.ceo/api/breeds/image/random"
    // imgs.innerHTML = null
    axios.get(URL)
        .then(result => {
            let imgURL = result.data.message
            const elem = document.createElement('img')
            elem.src = imgURL
            imgs.appendChild(elem)
            elem.style.height='300px'
            elem.style.width='300px'
            elem.className = 'rounded flex img-thumbnail'
        })
})

catBtn.addEventListener('click', e => {
    const URL = "https://api.thecatapi.com/v1/images/search"
    // imgs.innerHTML = null
    axios.get(URL)
        .then(result => {
            let imgURL = result.data[0].url
            const elem = document.createElement('img')
            elem.src = imgURL
            imgs.appendChild(elem)
            elem.style.height='300px'
            elem.style.width='300px'
            elem.className = 'rounded flex img-thumbnail'
        })
})









// 버튼이랑 함수랑 나누기 
// 1. axios -> dog 사진 요청
// 2. <body>아래에 <img> 받아온 사진 보여주기
// const dogURL = "https://dog.ceo/api/breeds/image/random"
// const getDogAndPush = () => {
//     axios.get(dogURL)
//         .then(response => {
//             // <body> 아래에 <img> 태그를 넣어준다.
//             let imgURL = response.data.message
//             const elem = document.createElement('img')
//             elem.src = imgURL
//             imgs.appendChild(elem)
//             elem.style.height='300px'
//             elem.style.width='300px'
//             elem.className = 'rounded flex img-thumbnail'
//         })
// }

// // 1. axios -> cat 사진 요청
// // 2. <body>아래에 <img> 받아온 사진 보여주기
// const catURL = "https://api.thecatapi.com/v1/images/search"
// const getCatAndPush = () => {
//     axios.get(catURL)
//         .then(response => {
//             // <body> 아래에 <img> 태그를 넣어준다.
//             const imgURL = response.data[0].url
//             const elem = document.createElement('img')
//             elem.src = imgURL
//             imgs.appendChild(elem)
//             elem.style.height='300px'
//             elem.style.width='300px'
//             elem.className = 'rounded flex img-thumbnail'
//         })
// }
// const dogBtn = document.querySelector("#dog")
// dogBtn.addEventListener('click', e => {getDogAndPush()})
// const catBtn = document.querySelector('#cat')
// catBtn.addEventListener('click', e => {getCatAndPush()})


