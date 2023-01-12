//Peepee or poopoo
let pp = document.getElementById('ppTxt');
console.log(pp);

//Background color
let bg = document.getElementById('mainBg');

// Change peepee poopoo text
function ppTextChange(button) {
    pp.textContent = button;
}

// Change background of main
function changeBgColor(c) {
    if (c == '') {
        let customColor = document.getElementById('iColor').value;
        c = customColor;
    }
    bg.style.backgroundColor = c;

}