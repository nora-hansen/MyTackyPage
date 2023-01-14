let pp  = document.getElementById('ppTxt');  //Peepee or poopoo text
let bg  = document.getElementById('mainBg'); //Background color of main tag
let rgb = false;
let peepy = false;

// Change peepee poopoo text
function ppTextChange(button) {
    pp.textContent = button;
}

/**
 * @brief   Change background color of main tag
 * 
 * @see     -   genRandomColor()
 * @see     -   peepyBg()
 * @param c -   Desired color value, or "random" if [Surprise me!] is clicked
 */
function changeBgColor(c) {
    // Disable RGB if active
    rgb = false;
    // Reset.... stuff
    peepy = false;
    bg.style.background = 'none';
    document.getElementById("secret").innerHTML='';

    // If color name is empty, set to custom color
    if (c == '') {
        let customColor = document.getElementById('iColor').value;
        c = customColor;
    // :O ???
    if (c == 'peepy')	{
        peepy = true;
        peepyBg();
    }
    // If color name is random, generate random color
    } else if (c == 'random') {
        c = genRandomColor();
    } else if (c == 'rgb') {
        rgb = true;
        rgbBg();
    }  
    // Set color of background to new color
    bg.style.backgroundColor = c;
    if (event.keyCode == 13) {
        event.preventDefault();
    }
}

/**
 * @brief   -   Generate a random RGB color
 * 
 * @return  -   RGB string
 */
function genRandomColor() {
    // Generate three random numbers between and including 0-255
    let r =Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    // Make color string to be passed to changeBgColor function
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    return color;
}

// Initial color values for RGB button
// Need to put them here so they are not reset for each recursion, otherwise bg stays red!!
let r = 255;
let g = 0;
let b = 0;

/**
 * @brief   -   Function to change background color of main tag over time using recursion
 * 
 * !!NOTE, USING THIS RENDERS OTHER FUNCTIONS UNUSABLE UNLESS REFRESHING THE PAGE
 */
function rgbBg() {

    if (rgb) {
        // If color is pure red..
        if (r == 255 && g < 255 && b == 0) {
            g++;    // Increase green
            // If color is yellow...
        } else if (g == 255 && r > 0) {
            r--;    // Decrease red
            // If color is pure green...
        } else if (g == 255 && b < 255) {
            b++;    // Increase blue
            // If color is cyan...
        } else if (b == 255 && g > 0) {
            g--;    // Decrease green
            // If color is pure blue...
        } else if (b == 255 && r < 255) {
            r++;    // Increase red
            // If color is pink/purple...
        } else if (r == 255 && b > 0) {
            b--;    // Decrease blue
        }

        // Create the color string to be passed
        let color = 'rgb(' + r + ',' + g + ',' + b + ')';
        console.log(color); // Log color (for debugging purposes !)
        // Set the color
        bg.style.backgroundColor = color;
        // Wait, then run function again
        setTimeout(rgbBg, 10);
    }
}

/**
 * @brief   -   Don't look! Spoilers! Well, activate Peepy mod
 */
function peepyBg()    {
    if (peepy)  {
        console.log('peepy find!!');
        document.getElementById("secret").innerHTML='<iframe width="1" height="1" src="https://www.youtube.com/embed/Yep6GVM0IYs?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

        bg.style.backgroundImage = "url('https://steamuserimages-a.akamaihd.net/ugc/1709663684930978178/22B2494E4F60EA1C9CEE3B2D759400336F5088FA/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true')";
    }
}

