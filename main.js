const max_num=10000;
const main_color="black";
const main_size=1200;
const cube_color="white";

const cube_size=main_size / Math.sqrt(max_num);
let x,y;
let num = 1,direction=0,turn_counter=0,turn_threshold=1;



function setup(){
    createCanvas(main_size,main_size);
    x =  (width - cube_size ) / 2;
    y = ( height + cube_size ) /2;;
    //textSize(64);
    //textAlign(CENTER,CENTER);
    fill(cube_color);
    background(main_color);
    rectMode(CENTER);
    frameRate(60);
}

function draw(){

    //text(num,x,y);
    checkPrime(num);

    switch (direction){
        case 0:x+=cube_size;break; //Going Right
        case 1: y-=cube_size;break;//Going UP
        case 2:x-=cube_size;break; //Going Left
        case 3: y+=cube_size;break;//Going Down
        default: console.warning("Error!");
    }

    if(num % turn_threshold==0){
        direction = ( direction + 1) % 4;
        turn_counter++;
        if(turn_counter%2==0){turn_threshold++;}
    }
    num++;
    if(num>max_num){noLoop();}
}

function checkPrime(value){
    if(value==1){return;}
    const limit = Math.sqrt(value);
    
    for (let i=2;i<limit;i++){
        if(value%i==0){return;}
    }

    rect(x,y,cube_size);
    return;
}