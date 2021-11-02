function preload(){

}
function setup(){
    Canvas=createCanvas(700, 650);
    Canvas.position(100, 200);
    video=createCapture(VIDEO);
    video.hide()
    tint_color=""
}
function draw(){
    fill("red")
    stroke("pink")
    circle(90, 100, 50)
    fill("blue")
    stroke("aqua")
    rect(120, 90, 450, 20)
    fill("red")
    stroke("pink")
    circle(600, 100, 50)

    fill("red")
    stroke("pink")
    circle(90, 620, 50)
    fill("blue")
    stroke("aqua")
    rect(120, 610, 450, 20)
    fill("red")
    stroke("pink")
    circle(600, 620, 50)

    fill("blue")
    stroke("aqua")
    rect(80,130,20, 450)

    rect(590,130,20, 450)
    image(video, 150, 150, 400, 450)
    tint(tint_color)
}
function FilterTint(){
    tint_color=document.getElementById("color").value;
}

function take_snapshot(){
save('student.png')
}