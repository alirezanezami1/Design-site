let comments = [
    {name : 'ahmad', img : 'img/PicsArt_10-20-03.02.21.jpg' , comment : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, doloribus cupiditate? Provident aperiam beatae iste sed minus sequi ipsum dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, doloribus.'},
    {name : 'tina', img : 'img/PicsArt_10-20-03.01.35.jpg' , comment : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, doloribus cupiditate? Provident aperiam beatae iste sed minus sequi ipsum dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit'},
    {name : 'ali', img : 'img/PicsArt_10-20-03.01.51.jpg' , comment : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, doloribus cupiditate? Provident aperiam beatae iste sed minus sequi ipsum dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, doloribus.sit amet consectetur adipisicing elit'},
]

let img = document.querySelector('.sec-4 .row div')
let p = document.querySelector('.sec-4 .row p')
let h4 = document.querySelector('.sec-4 .row h4')
let right = document.querySelector('.fa-angle-right')
let left = document.querySelector('.fa-angle-left')

let commentIndex = 0;

function users (info) {
    img.style.backgroundImage =  'url('+info.img+')'
p.innerHTML = info.comment
h4.innerHTML = info.name
}

users(comments[commentIndex])

function nextComment () {
    commentIndex++
    if (commentIndex > comments.length - 1) {
        commentIndex = 0
    }
    users (comments[commentIndex])
}

function preComment () {
    commentIndex--
    if (commentIndex < 0) {
        commentIndex = comments.length - 1
    }
    users (comments[commentIndex])
}


right.addEventListener('click' , nextComment )
left.addEventListener('click' , preComment )


