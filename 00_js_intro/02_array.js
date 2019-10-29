const nums = [1,2,3,4]

// 첫인자
console.log(nums[0])
// 마지막인자  '-1' 안된다..
console.log(nums[nums.length-1])

// reversing, reverse()하면 파이썬처럼 원본 변경 
console.log(nums.reverse())
console.log(nums)

// Stack 처럼 사용 가능 
// push
nums.push(0)
console.log(nums)
// pop()
console.log(nums.pop())
console.log(nums.pop())


// // 
// console.log(nums)
// nums[-1] = 1
// console.log(nums)


// Queue 처럼 사용 가능 
// unshift 맨 앞에 넣기 
nums.unshift(5)
console.log(nums)


// shift 맨 앞자리 pop
nums.shift()
console.log(nums)

// includes: python 'in'
console.log(nums.includes(2)) //true
console.log(nums.includes(100)) //false

// indexOf: indexing
console.log(nums.indexOf(3)) 



// 반복문: for (let num of nums){}
// iterable.forEach(function(){}) : iterable 순회하며 함수를 각각의 요소에 실행


// 새로운 빈 리스트 만들어서 push하기 
let newNums = []
nums.forEach(function(num){
    newNums.push(num * num)
})
console.log(newNums)

// Array helper map함수 사용하기 
// const squNums = nums.map(function(num){
//     return (num**2)
// })
const squNums = nums.map(num => num ** 2)
console.log(squNums)



