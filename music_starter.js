
let bottomFilm = 2000
let topFilm = -2250
let circleX = 20
let filmX = 200
let spoolAngle = 0
let spoolSpin = 0
let guitarStrings = -960
let stringsY = 10
let stringsX = -160
let guitarHole = 200


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(212, 149, 83)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  push()//draw bottom film roll

  translate(bottomFilm, 550)
 
  for(let i = 0; i <= 6; i ++){ 
    fill(255)
    noStroke()
    rect(-filmX * i, 0, 200, 150)//white border
  
    fill(212, 149, 83)
    rect(-filmX * i, 0, 180, 100)//inner frame

  for(let j = 0; j <= 65; j++){
    circle(circleX * j - 1310, -63, 10)//border circles
    circle(circleX * j - 1310, 62, 10)
  }
}

  bottomFilm = bottomFilm -1//move bottom roll

  if(bottomFilm < 900){//reset bottom roll
    bottomFilm = 1100
  }

  pop()

  if(vocal < 45){//rotate spool in accordance to vocals
    spoolSpin = map(vocal, 0, 100, 0.1, 0.4)
  }
  else{
    spoolSpin = map(vocal, 0, 100, 0.4, 2)
  }
  spoolAngle = spoolAngle + spoolSpin
  

  push()

  translate(0, 450)//load spool image
  rotate(spoolAngle)
  image(img, -245, -255)

  pop()

  push()

  rotate(335)//rotate top film roll

  push()//draw top film roll
  
  translate(topFilm, 300)
 
  for(let i = 0; i <= 6; i ++){ 
    fill(255)
    noStroke()
    rect(filmX * i, 0, 200, 150)//white border
  
    fill(212, 149, 83)
    rect(filmX * i, 0, 180, 100)//inner frame

  for(let j = 0; j <= 65; j ++){
    circle(circleX * j - 10, -63, 10)//border circles
    circle(circleX * j - 10, 62, 10)
  }
}

  noStroke()
  fill(143, 91, 48)
  for(let i = 0; i <= 6; i ++){//draw guitar holes
    circle(guitarHole * i - 40, 0, 70)
  }

  pop()
  
  topFilm = topFilm +1 //move top roll + guitar holes

  if(topFilm > -300){//reset top roll + guitar holes
    topFilm = -500
  }

  let strum = map(other, 0, 100, 0, 200)

  stroke(255)

  if(strum > 145){
    strokeWeight(2)
  }
  else{
    strokeWeight(4)
  }
  
  for(let k = 0; k <= 6; k ++){//draw guitar strings
    line(stringsX, stringsY * k + 270, guitarStrings, stringsY * k + 270)
  }

 

  if(guitarStrings >= 800){
    stringsX = -100

    stringsX = stringsX +1
  }
  else{
    guitarStrings = guitarStrings +1//move guitar strings
  }

  pop()


  
}

// let bar_spacing = height / 10;
// let bar_height = width / 12;
// let bar_pos_x = width / 2;

// // vocal bar is red
// fill(200, 0, 0);
// rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
// fill(0);
// text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);

// // drum bar is green
// fill(0, 200, 0);
// rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
// fill(0);
// text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);

// // bass bar is blue
// fill(50, 50, 240);
// rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
// fill(0);
// text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);

// // other bar is white
// fill(200, 200, 200);
// rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
// fill(0);
// text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
// fill(255, 255, 0);

// // display "words"
// textAlign(CENTER);
// textSize(vocal);
// text(words, width/2, height/3);