// 파일 작성을 위해, 외부파일/라이브러리 import하는 것 
const fs = require('fs') // fs === filesystem 

// JS는 '키'로 작성하지 않아도 찰떡같이 알아서 작성해줌 
const me = {
    name:'john',
    sleep:function(){
        console.log('zZZ')
    },
    appleProducts: {
        macBook:'2018Pro',
        iPad:'2018Pro',
    },
}
// 하지만 호출시에는 '키'로 꼭 붙여줘야함 
// console.log(me['name'])

// property 접근처럼, '.'으로도 접근 가능  
// console.log(me.name)

// 함수 호출 가능 
// console.log(me.sleep) // [Function: sleep]
// console.log(me.sleep()) // zZZ

// dot notation 
// console.log(me.appleProducts.macBook) // 2018Pro





// JSON(JavaScript Object Notation )
const products ={
    name:'chanu',
    movieTitle:{
        killbill:'seen',
        django:'notSeen',
        UBD:'notSeen',
        Joker:'seen',
    },
    gameTitle:{
        Witcher:'played',
        Kirby:'NotPlayed',
        ElderScroll:'played',
        celeste:'played',
    },
}

// JSON.stringify() : object -> JSON(string)   
// console.log(JSON.stringify(products))
myJson = JSON.stringify(products)
// callback 함수를 넣어야함.. (에러핸들링) //// 비동기적 파일라이팅 but 넘 귀찮
// fs.writeFile('products.json', myJson, err=>{})

// writeFileSync를 사용하면 동기적 파일 라이팅, 콜백 없다 
fs.writeFileSync('products2.json', myJson)




// JSON.parse() :  JSON(string) -> object 
const myObject = JSON.parse(myJson)
console.log(myObject)
console.log(typeof myObject)

