// Change the background color by clicking a button 

window.onload = () => { //For load  main() ;
    main();
}

function main(){

    const cgMain = document.querySelector("body");
    const cgBtn = document.getElementById("cg-btn");
    const output = document.getElementById("get-col");
    const copy = document.getElementById("cpy-btn");


    cgBtn.addEventListener('click', function (){

        const bgCol = genRGBcolor();
        cgMain.style.backgroundColor = bgCol;
        output.value = bgCol;
        copy.addEventListener('click', function ()
            {
                navigator.clipboard.writeText(bgCol);
            }
        );
    });
}

// generate rgb color 

function genRGBcolor(){

    // rgb(0 , 0, 0); to rgb(255, 255, 255);
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    // now place rgb 
    // This toString(16), This 16 represent a hexadecimal value like 2 is a binary value
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;

}







/*

=========  if i want rgba color =========

generate rgba color 

function genRGBAcolor(){

    // rgba(0 , 0, 0, 0); to rgba(255, 255, 255, 10);
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const alpha = Math.floor(Math.random() * 10);
    // now place rgb 

    return `rgb(${red}, ${green}, ${blue}, ${alpha});`;

}

*/