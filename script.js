let btnElem = document.createElement("button");
btnElem.innerText = "Click"
document.body.append(btnElem);


btnElem.addEventListener("click", doClick);

function doClick() {
    let divElem = document.getElementById("result");
    divElem.innerText = "cookies";
}
let obj = { name: "Sorting images" }

let h1Elem = document.createElement("h1")
h1Elem.innerText = obj.name
document.body.append(h1Elem)


let images = [

    { number: '2', likes: '3', url: 'https://img.stackshare.io/stack/5/default_e436fbdf25e5c8e89e2137cf2f1dd2cffa56d8e1.png' },
    { number: '4', likes: '4', url: 'https://img.stackshare.io/stack/9/default_ce2cf17eee07d2fe12f8074a4c85b9f1220a92cd.png' },
    { number: '3', likes: '1', url: 'https://img.stackshare.io/stack/2/default_04dd469129d2bfe4f9fbe36583faac05993d6643.jpeg' },
    { number: '1', likes: '2', url: 'https://img.stackshare.io/stack/151/default_3ce09436992cc7acf205672544d986a3fc92f006.png' }
];

function filter() {
    let input = document.getElementById("SelecFilter");
    let word = input.value;

    if (word == "") {

        word = input.value.toLowerCase();
    }
    if (word == "likes") {
        filterByLikes();
        createCookie(word);
    } else if (word == "number") {
        filterBynumber();
        createCookie(word);

    } else {
    }
}

function createCookie(word) {
    var expirationTime = new Date();
    expirationTime.setMinutes(expirationTime.getMinutes() + 1);
    document.cookie =
        "sortType=" + word + "; expires=" + expirationTime.toUTCString();


}
window.onload = function () {
    if (
        document.cookie != undefined &&
        document.cookie.indexOf("sortType") != -1
    ) {
        word = document.cookie.split("=")[1];

    }
};




function filterByLikes() {
    let input = document.getElementById("SelecFilter");
    images.sort(compare);
    function compare(a, b) {
        if (a.likes < b.likes) {
            return -1;
        } else if (a.likes > b.likes) {
            return 1;
        } else {
            return 0;
        }
    }
    var counter = 0;
    for (imageItem of images) {
        let imgElem = document.getElementsByTagName("img");
        imgElem[counter++].src = imageItem.url;
    }
}

function filterBynumber() {
    let input = document.getElementById("SelecFilter");
    images.sort(compare);
    function compare(a, b) {
        if (a.number < b.number) {
            return -1;
        } else if (a.number > b.number) {
            return 1;
        } else {
            return 0;
        }
    }
    var counter = 0;
    for (imageItem of images) {
        let imgElem = document.getElementsByTagName("img");
        imgElem[counter++].src = imageItem.url;
    }
}
