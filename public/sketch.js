
var socket;

function setup() {
    var canvas = createCanvas(500, 270);
    canvas.parent('sketch-holder');
    background(51);

    socket = io.connect('http://localhost:3000');

    // om de canvas tekening te ontvangen, gebruiken we onderstaande functie (in een andere kleur)

    socket.on('mouse', newDrawing);
}

function newDrawing(data) {
    noStroke();
    fill(0, 255, 255);
    ellipse(data.x, data.y, 10, 10 );
}

function mouseDragged() {
    console.log('Sending: ' + mouseX + ' , ' + mouseY);

    var data = {
        x: mouseX,
        y: mouseY
    }

    socket.emit('mouse', data);

    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 10, 10 );
}

function draw() {
    
}


// function setup() {
//     var canvas = createCanvas(400, 200);
   
//     // Move the canvas so it’s inside our <div id="sketch-holder">.
//     canvas.parent('sketch-holder');
  
//     background(220, 220, 220);
// }

