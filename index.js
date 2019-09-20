var btn = document.getElementById('btn');
var input = document.getElementById('input');
var list = document.getElementById('list');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');

var colors = [];

btn.addEventListener('click', getColor);
btn2.addEventListener('click', randomColor);
btn3.addEventListener('click', googleSearch);
input.addEventListener('input', inputChange);

btn.disabled = true;
btn3.disabled = true;

function inputChange() {
    if (/^#[0-9A-F]{6}$/i.test(input.value)) {
        btn.disabled = false;
        btn3.disabled = false;
    } else {
        btn.disabled = true;
        btn3.disabled = true;
    }
}

function googleSearch(){
    var s = input.value;
    var search = `rgb(${parseInt(s.slice(1, 3),16)}, ${parseInt(s.slice(3, 5),16)}, ${parseInt(s.slice(5, 7),16)})`;
    window.open('http://google.com/search?q='+search);
}

function getColor() {
    var result = input.value;
    input.value = "";
    btn.disabled = true;
    colors.push(result);
    updateList();
}

var col = {
    "#000000": "black",
    "#000080": "navy",
    "#00008b": "darkblue",
    "#0000cd": "mediumblue",
    "#0000ff": "blue",
    "#006400": "darkgreen",
    "#008000": "green",
    "#008080": "teal",
    "#008b8b": "darkcyan",
    "#00bfff": "deepskyblue",
    "#00ced1": "darkturquoise",
    "#00fa9a": "mediumspringgreen",
    "#00ff00": "lime",
    "#00ff7f": "springgreen",
    "#00ffff": "cyan",
    "#191970": "midnightblue",
    "#1e90ff": "dodgerblue",
    "#20b2aa": "lightseagreen",
    "#228b22": "forestgreen",
    "#2e8b57": "seagreen",
    "#2f4f4f": "darkslategray",
    "#32cd32": "limegreen",
    "#3cb371": "mediumseagreen",
    "#40e0d0": "turquoise",
    "#4169e1": "royalblue",
    "#4682b4": "steelblue",
    "#483d8b": "darkslateblue",
    "#48d1cc": "mediumturquoise",
    "#4b0082": "indigo",
    "#556b2f": "darkolivegreen",
    "#5f9ea0": "cadetblue",
    "#6495ed": "cornflowerblue",
    "#663399": "rebeccapurple",
    "#66cdaa": "mediumaquamarine",
    "#696969": "dimgray",
    "#6a5acd": "slateblue",
    "#6b8e23": "olivedrab",
    "#708090": "slategray",
    "#778899": "lightslategray",
    "#7b68ee": "mediumslateblue",
    "#7cfc00": "lawngreen",
    "#7fff00": "chartreuse",
    "#7fffd4": "aquamarine",
    "#800000": "maroon",
    "#800080": "purple",
    "#808000": "olive",
    "#808080": "gray",
    "#87ceeb": "skyblue",
    "#87cefa": "lightskyblue",
    "#8a2be2": "blueviolet",
    "#8b0000": "darkred",
    "#8b008b": "darkmagenta",
    "#8b4513": "saddlebrown",
    "#8fbc8f": "darkseagreen",
    "#90ee90": "lightgreen",
    "#9370d8": "mediumpurple",
    "#9400d3": "darkviolet",
    "#98fb98": "palegreen",
    "#9932cc": "darkorchid",
    "#9acd32": "yellowgreen",
    "#a0522d": "sienna",
    "#a52a2a": "brown",
    "#a9a9a9": "darkgray",
    "#add8e6": "lightblue",
    "#adff2f": "greenyellow",
    "#afeeee": "paleturquoise",
    "#b0c4de": "lightsteelblue",
    "#b0e0e6": "powderblue",
    "#b22222": "firebrick",
    "#b8860b": "darkgoldenrod",
    "#ba55d3": "mediumorchid",
    "#bc8f8f": "rosybrown",
    "#bdb76b": "darkkhaki",
    "#c0c0c0": "silver",
    "#c71585": "mediumvioletred",
    "#cd5c5c": "indianred ",
    "#cd853f": "peru",
    "#d2691e": "chocolate",
    "#d2b48c": "tan",
    "#d3d3d3": "lightgrey",
    "#d87093": "palevioletred",
    "#d8bfd8": "thistle",
    "#da70d6": "orchid",
    "#daa520": "goldenrod",
    "#dc143c": "crimson",
    "#dcdcdc": "gainsboro",
    "#dda0dd": "plum",
    "#deb887": "burlywood",
    "#e0ffff": "lightcyan",
    "#e6e6fa": "lavender",
    "#e9967a": "darksalmon",
    "#ee82ee": "violet",
    "#eee8aa": "palegoldenrod",
    "#f08080": "lightcoral",
    "#f0e68c": "khaki",
    "#f0f8ff": "aliceblue",
    "#f0fff0": "honeydew",
    "#f0ffff": "azure",
    "#f4a460": "sandybrown",
    "#f5deb3": "wheat",
    "#f5f5dc": "beige",
    "#f5f5f5": "whitesmoke",
    "#f5fffa": "mintcream",
    "#f8f8ff": "ghostwhite",
    "#fa8072": "salmon",
    "#faebd7": "antiquewhite",
    "#faf0e6": "linen",
    "#fafad2": "lightgoldenrodyellow",
    "#fdf5e6": "oldlace",
    "#ff0000": "red",
    "#ff00ff": "magenta",
    "#ff1493": "deeppink",
    "#ff4500": "orangered",
    "#ff6347": "tomato",
    "#ff69b4": "hotpink",
    "#ff7f50": "coral",
    "#ff8c00": "darkorange",
    "#ffa07a": "lightsalmon",
    "#ffa500": "orange",
    "#ffb6c1": "lightpink",
    "#ffc0cb": "pink",
    "#ffd700": "gold",
    "#ffdab9": "peachpuff",
    "#ffdead": "navajowhite",
    "#ffe4b5": "moccasin",
    "#ffe4c4": "bisque",
    "#ffe4e1": "mistyrose",
    "#ffebcd": "blanchedalmond",
    "#ffefd5": "papayawhip",
    "#fff0f5": "lavenderblush",
    "#fff5ee": "seashell",
    "#fff8dc": "cornsilk",
    "#fffacd": "lemonchiffon",
    "#fffaf0": "floralwhite",
    "#fffafa": "snow",
    "#ffff00": "yellow",
    "#ffffe0": "lightyellow",
    "#fffff0": "ivory",
    "#ffffff": "white"
};

function findColoursBetween(strHEX) {
    var num = parseInt(strHEX.slice(1), 16);
    var keys = Object.keys(col);

    var result = [];
    for (var i = 0; i < keys.length; i++) {
        var currentNum = parseInt(keys[i].slice(1), 16);
        if (num < currentNum) {
            result.push(keys[i], keys[i - 1]);
            break;
        }
    }
    return result;
}


function updateList() {
    var li = document.createElement('li');
    if(col[colors[colors.length - 1]]){
        li.innerText = col[colors[colors.length - 1]];
    } else {
        var between = findColoursBetween(colors[colors.length - 1]);
        var bigger = col[between[0]];
        var smaller = col[between[1]];
        li.innerText = "Between: " + smaller + " and " + bigger;
    }
    li.style.color = colors[colors.length - 1];
    list.appendChild(li);
}

function randomColor() {
    const symbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    var randomResult = "";
    for (let counter = 0; counter < 6; counter++) {
        randomResult += symbols[Math.floor(Math.random() * 16)];
    }
    input.value = "#" + randomResult;
    inputChange();
}
