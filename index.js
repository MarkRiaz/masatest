var btn = document.getElementById('btn');
var btn2 = document.getElementById('btn2');
var srch = document.getElementById('srch');
var input = document.getElementById('input');
var list = document.getElementById('list');

var colors = [];

srch.addEventListener('click', srchGoogle)
btn2.addEventListener('click', randomColor)
btn.addEventListener('click', getColor);
input.addEventListener('keyup', inputChange)

btn.disabled = true;


function inputChange() {
    if (/^#[0-9A-F]{6}$/i.test(input.value)) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

function getColor() {
    var result = input.value;
    input.value = "";
    btn.disabled = true;
    colors.push(result);
    updateList();
}


function updateList() {
    var li = document.createElement('li'), b = '';
    li.innerText = "HEX:" + colors[colors.length - 1];
    li.style.color = colors[colors.length - 1];
    b = li.style.color;
    li.innerText = "HEX:" + colors[colors.length - 1] + " " + b;
    list.appendChild(li);
}

function randomColor() {
    var fst = '#' , baza = 'ABCDEF123456789' , x;
        for (let i = 0; i < 6; i++) {
            x = Math.floor(Math.random() * Math.floor(baza.length));
            fst = fst + baza[x];
        }
    input.value = fst;
    colors.push(fst);
    updateList();
}

function srchGoogle() {
    var y = colors[colors.length - 1];
    y = y.replace('#','%23');
    window.open('https://www.google.com/search?q='+y);
}






