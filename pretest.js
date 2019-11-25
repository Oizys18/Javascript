//변수
// function myFunction1 () {
//     for( p=0; p < 1; p++) {
//     console.log(p)
//     }
//     console.log(p)
//     }
//     myFunction1()
//     console.log(p) // 확인
//     console.log(window.p) // 확인


//타입
// console.log(typeof(null))
// console.log(typeof(undefined))
// console.log(typeof(4))
// console.log(typeof('1'))
// console.log(typeof({1:2,4:3}))
// console.log(typeof(function(){}))


//for문
// const arr = [1,2,3]

// arr.forEach(i => {
//     console.log(i)
// })
// // console.log(arr2)

// for (i of arr){
//     console.log(i)
// }


// 배열
const arr = [1,2,3]
// console.log(arr.reverse())
// console.log(arr.push(4))
// console.log(arr)

// arr.filter(i => {
//     if (i === 2){
//         console.log(i)
//     }
// })

// console.log(arr.pop())
// console.log(arr)
// console.log(arr.join(0))

// console.log(arr.map(function (i, idx, arr) {
//     console.log(i, idx, arr)
// }))

// console.log(arr.includes(4))
// console.log(arr.indexOf(3))
// console.log(arr.find(function (n){
//     return n % 2 !== 0
// }))

console.log(arr.some(function(i,idx,arr){
	return i < 3
}))