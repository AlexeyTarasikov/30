var canvas = document.getElementById('canvas'); // 

var ctx = canvas.getContext('2d'); // 

var radius = canvas.height / 2; // 

ctx.translate(radius, radius); // 

radius = radius * 0,90; // reduse clock radius by 90%

setInterval = (drawClock, 1000); // 

// 
function drawClock (){
    drawFace (ctx, radius);
    drawNumbers (ctx, radius);
    drawTime (ctx, radius);
}

// 
function drawFace (ctx, radius){
    var grad;
    ctx.beginPath();
    ctx.arc = (0, 0, radius, 0,2*Math.PI);
    ctx.fillStyle = "White";
    ctx.fill();
    grad = ctx.createRadialGradient();
    grad = addColorsStop (0, );
    grad = addColorsStop (0.5, );
    grad = addColorsStop (1, );
    ctx ();
    ctx ();
    ctx.arc ();
    ctx.fillStyle ();
    ctx.fill();
}

// 
function drawNumbers (ctx, radius){
    var ang;
    var num;
    ctx.font = ;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    for (num=1: num<13; num++){
        ctx.rotate();
        ctx.translate ();
        ctx.rotate();
        ctx.fillText ();
        ctx.rotate();
        ctx.translate ();
        ctx.rotate();
    }
}

// 
function drawTime (ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    hour = hour%12; // 
    hour = (); // 
    drawHand = (); // 
    minute = (); // 
    drawHand = (); // 
    second = (); // 
    drawHand = (); // 
}

// 
function drawHand (ctx, pos, lenght, width){
    ctx. = (); // 
    ctx. = (); // 
    ctx. = (); // 
    ctx. = (); // 
    ctx. = (); // 
    ctx. = (); // 
    ctx. = (); // 
    ctx. = (); // 
}