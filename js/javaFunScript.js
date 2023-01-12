let pp = document.getElementById('ppTxt');  //Peepee or poopoo text
let bg = document.getElementById('mainBg'); //Background color of main tag

// Change peepee poopoo text
function ppTextChange(button) {
    pp.textContent = button;
}

/**
 * @brief   Change background color of main tag
 * 
 * @see -   genRandomColor()
 */
function changeBgColor(c) {
    // If color name is empty, set to custom color
    if (c == '') {
        let customColor = document.getElementById('iColor').value;
        c = customColor;
        // If color name is random, generate random color
    } else if (c == 'random') {
        c = genRandomColor();
    }
    // Set color of background to new color
    bg.style.backgroundColor = c;

}

// Generate random color RGB
function genRandomColor() {
    let r =Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    return color;
}