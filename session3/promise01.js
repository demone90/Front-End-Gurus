let randomArrayWords = ['cat','obama','engineering','dog',
 'italian', 'german', 'beer', 'drunk', 'football','marriage', 'google', 'berlin', 'coffee'
,'china','nerds', 'business', 'money']

const random = Math.floor(Math.random() * randomArrayWords.length);
const randomWord = randomArrayWords[random];

const randomIndex = Math.floor(Math.random() * 24)


let giphyApi = "https://api.giphy.com/v1/gifs/search?api_key=vFubwQqA41vOWpFeAA4lAkBGk1AzgUYg&limit=25&offset=0&rating=g&lang=en&q=" + randomWord;

fetch(giphyApi)
    .then(response => response.json())
    .then(json => createImageParagraph(json.data[randomIndex].images.fixed_height.url, randomWord))
    .catch(error => console.log(error))


function createImageParagraph(giphyUrl, randomWord) {
    var div = document.getElementById('content'),
    img = document.createElement('img'),
    p = document.createElement('p'),

    text = document.createTextNode('Random word: ' + randomWord);

    img.src = giphyUrl;

    p.appendChild(text);
    div.appendChild(img);
    div.appendChild(p);
}

// function promise() {
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve("foo");
//         }, 300);
//       });
      
// }