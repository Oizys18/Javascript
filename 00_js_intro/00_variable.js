// JS 주석 
// Python의 변수지정 및 출력
// name = 'john'
// print(name)


// local 변수 ~ global 변수 
let x = 1 
x = 2
if (x==2) {
    let x = 3
    let y = 4
    console.log(x)
}
console.log(x)
// console.log(y) 블록 안에서만 선언되었기 때문에 에러 발생 


// 상수(불변) 선언: 대문자로 작성  
const MY_FAV = 10
console.log('내가 좋아하는 숫자는 ' + MY_FAV)
console.log(`내가 좋아하는 숫자는 ${MY_FAV}`)
// MY_FAV = 20
// console.log(MY_FAV)





const hi=(e=>{
    console.log('hi')
}) 
hi()