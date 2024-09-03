
let bottomFilm = 2000
let topFilm = -2250
let circleX = 20
let filmX = 200
let spoolAngle = 0
let spoolSpin = 0
let guitarStrings = -960
let stringsY = 10
let guitarHole = 200
let moveHole = -2250


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(212, 149, 83)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  push()//bottom film roll

  translate(bottomFilm, 550)
 
  for(let i = 0; i <= 6; i ++){ 
    fill(255)
    noStroke()
    rect(-filmX * i, 0, 200, 150)//outer white border
  
    fill(212, 149, 83)
    rect(-filmX * i, 0, 180, 100)//inner rect

  for(let j = 0; j <= 65; j++){
    circle(circleX * j - 1310, -63, 10)//roll circle cuts
    circle(circleX * j - 1310, 62, 10)
  }
}

  bottomFilm = bottomFilm -1

  if(bottomFilm < 900){
    bottomFilm = 1100
  }

  pop()

  if(vocal < 45){
    spoolSpin = map(vocal, 0, 100, 0.1, 0.4)
  }
  else{
    spoolSpin = map(vocal, 0, 100, 0.4, 2)
  }
  spoolAngle = spoolAngle + spoolSpin
  

  push()

  translate(0, 450)
  rotate(spoolAngle)
  image(img, -245, -255)

  pop()

  push()

  rotate(335)

  push()
  
  translate(topFilm, 300)
 
  for(let i = 0; i <= 6; i ++){ 
    fill(255)
    noStroke()
    rect(filmX * i, 0, 200, 150)
  
    fill(212, 149, 83)
    rect(filmX * i, 0, 180, 100)

  for(let j = 0; j <= 65; j ++){
    circle(circleX * j - 10, -63, 10)
    circle(circleX * j - 10, 62, 10)
  }
}

  noStroke()
  fill(143, 91, 48)
  for(let i = 0; i <= 6; i ++){
    circle(guitarHole * i, 0, 70)
  }

  pop()
  
  topFilm = topFilm +1 

  if(topFilm > -300){
    topFilm = -500
  }

  // push()

  // translate(moveHole, 0)

 

  // pop()

  // moveHole = moveHole +1
  // if(moveHole > -300){
  //   movehole = -500
  // }

  stroke(255)
  strokeWeight(3)
  for(let k = 0; k <= 6; k ++){
  line(-150, stringsY * k + 270, guitarStrings, stringsY * k + 270)
  }

  guitarStrings = guitarStrings +1

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