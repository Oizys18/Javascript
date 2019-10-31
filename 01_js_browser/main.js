/* 1. <input> 태그 안의 값을 잡는다. */
const inputArea = document.querySelector('#js-userinput')
const button = document.querySelector('#js-go')
const resultArea = document.querySelector('#result-area')


button.addEventListener('click', e => {
    searchAndPush(inputArea.value)
})

inputArea.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
        searchAndPush(inputArea.value)
    }
})

/* 2. Giphy API 를 통해 data 를 받아서 가공한다.     */
const searchAndPush = keyword => {
    resultArea.innerHTML = null


    
    // 환경변수 설정 어떻게 하는지 모르겠다.........................................
    const API_KEY = 'Fy3grJjeYphUvRehfcbzlqepTlDsSAqc'

    // URL + ?q= + '검색어' + '&api_key=' + API_KEY
    const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`

    // XMLHttpRequest(): python의 requests.get(url) 과 같은  기능 해준다.
    const GiphyAPICall = new XMLHttpRequest()
    // GiphyAPICall.open('HTTP method', URL) 요청보내는 함수 
    GiphyAPICall.open('GET', URL)
    GiphyAPICall.send()

    /* 데이터 핸들링 */
    // 데이터가 도착하면 이벤트를 발생시킨다. 
    GiphyAPICall.addEventListener('load', e => {
        const parsedData = JSON.parse(e.target.response)
        pushToDom(parsedData)

    })

    /* 3. GIF 파일들을 index.html(DOM)에 밀어 넣어서 보여준다. */
    const pushToDom = data => {
        const dataSet = data.data
        dataSet.forEach(imgData => {
            let imgURL = imgData.images.original.url
            const elem = document.createElement('img')
            elem.src = imgURL
            resultArea.appendChild(elem)
            elem.className = 'container-large'
        });

    }
}




// pushToDom을 아래에 만들고 위에서 불러도 ㄱㅊ, 
// JS는 함수를 먼저 모두 저장한 후에 위에서부터 순서대로 실행해줌