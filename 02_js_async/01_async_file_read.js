const fs = require('fs') //변수에 담아야 해..

console.log('파일 읽기 전')

// // readFile & writeFile도 async함수다. 
// fs.readFile('products.json', (err, data) => {
//     console.log('파일 읽기')
//     console.log(JSON.parse(data))
//     setTimeout(()=>{console.log('ㅗㅜㅑ')},1000)
// })

let content = ''
content = fs.readFileSync('products.json')
console.log(JSON.parse(content))

// 비동기적함수( , function) 
//-> function의 역할: 함수 끝난 후 실행 

console.log('끝')