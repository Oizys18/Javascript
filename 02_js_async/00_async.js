/* non-blocking / Asynchronous  */

const nothing = () => {
    console.log('3초 끝남')
}
const nothing2 = () => {
    console.log('1초 끝남')
}
console.log('start')
console.log('end')

// python sleep()과 동일하지만 sleep(초단위시간), setTimeout(밀리세컨드,1/1000초단위)
setTimeout(nothing,10000) // 1번:
setTimeout(nothing2,1000) // 2번: 
//순서상 2번이 1번보다 나중에 실행되었지만 event loop에 추가된 이후 
//2번의 완료가 빨라서 1번보다 먼저 출력된다. 