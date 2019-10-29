// 함수선언식
function add(x, y) {
    return x + y
}

// 함수표현식 : function Expression (주로사용할것)
const sub = function(x, y) {
    return x - y
}

// 함수표현식 2 : arrow function (ES6)
// 앞의 'fuction'을 뒤의 =>로 뺀 것 
const mul = (x, y) => {
    return x * y 
}






const ssafy = function (name) {
    return `안녕, ${name}`
}
// 함수 인자가 단 1개면 괄호도 생략가능
// 리턴이 1개밖에 없으면 return도 생략가능 
// 표현식이 단 1개면 {}도 생략가능 
const ssafy1 = name => `안녕, ${name}` 


// 인자 안 받고 아무것도 리턴 안하는 함수 
// 인자가 없으면 빈 괄호 () 생성해야함, 리턴 없어도 {} 생성 
// 아님 '_' underBar 
const nothing = _ => _
// const nothing = () => {}
console.log(typeof nothing) // >>function

// 
const square = function (num) {
    return num ** 2
}
const square2 = num => num ** 2 
console.log(square2(10)) // >>100

