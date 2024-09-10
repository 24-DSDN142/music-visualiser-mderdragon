let bottomFilm = 2000
let topFilm = -2250
let circleX = 20
let filmX = 200
let rollSpeed = 4

let spoolAngle = 0
let spoolSpin = 0

let guitarStrings = -960
let stringsY = 12
let guitarHole = 200
let bassStrings = -5760
let bassStringsY = 20

let moveHole = -2250
let moveBook = -2340
let moveKit = -3140
let moveBallad = -3940
let moveLovesong = -4540
let moveLines = -4850
let moveLyrics = -5250
let moveWaves = -7540
let moveLungs = -8340
let moveGun = -8940
let moveCar = -9340
let moveHeart = -9940
let moveFlash = -11940

let quaverNote = false
let beamNote = false
let noteTimer = 10

let converging = 89
let diverging = 300

let lyricTimer = 5
let wordI = false
let wordKnow = false
let wordIts = false
let wordFor = false
let wordThe = false
let wordBetter = false

let waveTimer = 20
let waveI = false
let waveII = false
let waveIII = false
let midWave = 0

let flashTimer = 20
let book = false
let medkit = false
let ballad = false
let lovesong = false
let lines = false
let wave = false
let lungs = false
let gun = false
let drive = false
let heart = false





// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(212, 149, 83)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  push() //draw bottom film roll

  translate(bottomFilm, 550)

  for (let i = 0; i <= 6; i++) {
    fill(255)
    noStroke()
    rect(-filmX * i, 0, 200, 150) //white border

    fill(212, 149, 83)
    rect(-filmX * i, 0, 180, 100) //inner frame

    for (let j = 0; j <= 65; j++) {
      circle(circleX * j - 1310, -63, 10) //border circles
      circle(circleX * j - 1310, 62, 10)
    }
  }

  bottomFilm = bottomFilm - rollSpeed //move bottom roll

  if (bottomFilm < 900) { //reset bottom roll
    bottomFilm = 1100
  }

  pixels = map(drum, 0, 100, 0, 200)

  for (let i = 0; i <= 6; i++) {
    if(pixels > 100){
      image(imgPixelsI, -filmX * i + -90, -50)
    } else {
      image(imgPixelsII, -filmX * i + -90, -50)
    }
  }

  pop()

  if (vocal < 45) { //rotate spool in accordance to vocals
    spoolSpin = map(vocal, 0, 100, 0.1, 0.4)
  } else {
    spoolSpin = map(vocal, 0, 100, 0.4, 2)
  }
  spoolAngle = spoolAngle + spoolSpin


  push()

  translate(0, 450) //load spool image
  rotate(spoolAngle)
  image(imgSpool, -245, -255)

  pop()

  push()

  rotate(335) //rotate top film roll

  push() //draw top film roll

  translate(topFilm, 300)

  for (let i = 0; i <= 6; i++) {
    fill(255)
    noStroke()
    rect(filmX * i, 0, 200, 150) //white border

    fill(212, 149, 83)
    rect(filmX * i, 0, 180, 100) //inner frame

    for (let j = 0; j <= 65; j++) {
      circle(circleX * j - 10, -63, 10) //border circles
      circle(circleX * j - 10, 62, 10)
    }
  }
  pop()

  push()

  translate(moveHole, 300)

  noStroke()
  fill(143, 91, 48)
  for (let i = 0; i <= 7; i++) { //draw guitar holes
    circle(guitarHole * i - 240, 0, 70)
    circle(guitarHole * i - 5040, 0, 70)
    circle(guitarHole * i - 9840, 0, 70)
  }

  pop()

  let strum = map(other, 0, 100, 0, 200) //strum in accordance to other

  stroke(245, 202, 157)

  if (strum > 145) { //toggle string vibration
    strokeWeight(4)
  } else {
    strokeWeight(2)
  }

  for (let h = 0; h <= 5; h++) { //draw guitar strings
    for (let k = 0; k <= 5; k++) {
      line(guitarStrings - 1 - (200 * h), stringsY * k + 270, guitarStrings - 179 - (200 * h), stringsY * k + 270)
      line(guitarStrings - 9600 - (200 * h), stringsY * k + 270, guitarStrings - 9780 - (200 * h), stringsY * k + 270)
    }
  }

  let bassStrum = map(bass, 0, 100, 0, 200) //strum in accordance to other

  stroke(245, 202, 157)

  if (bassStrum > 145) { //toggle string vibration
    strokeWeight(4)
  } else {
    strokeWeight(2)
  }

  for (let h = 0; h <= 7; h++) { //draw bass strings
    for (let k = 0; k <= 3; k++) {
      line(bassStrings - 1 - (200 * h), bassStringsY * k + 270, bassStrings	 - 179 - (200 * h), bassStringsY * k + 270)
    }
  }

  topFilm = topFilm + rollSpeed //move top roll + guitar
  guitarStrings = guitarStrings + rollSpeed
  bassStrings = bassStrings + rollSpeed
  moveHole = moveHole + rollSpeed

  if (topFilm >= -300) { //reset top roll
    topFilm = -500
  }

  pencilWiggle = map(other, 0, 100, 50, 90)

  for (let i = 0; i <= 3; i++) { //load book frames
    image(imgBook, moveBook - (200 * i), 250)

    push()

    translate(moveBook + 115 - (200 * i), 283)
    rotate(pencilWiggle) //wiggle pencil

    strokeWeight(1) //draw pencil
    stroke(143, 91, 48)
    fill(245, 202, 157)
    triangle(-2.5, -10, 0, 0, 2.5, -10)
    fill(212, 149, 83)
    rect(0, -25, 5, 30)
    fill(143, 48, 48)
    rect(0, -40, 5, 5)

    pop()

  }

  moveBook = moveBook + rollSpeed //move book

  bloodSpread = map(other, 0, 100, -0.5, 1.4)

  for (let i = 0; i <= 3; i++) { //load med kit
    noStroke()
    fill(143, 91, 48)
    rect(moveKit + 90 - (200 * i), 300, 180, 100)
    image(imgMedkit, moveKit - (200 * i), 250)

    push()

    translate(moveKit + 179 - (200 * i), 300)
    scale(bloodSpread)

    fill(143, 48, 48)
    arc(0, 10, 100, 30, 90, 270)
    arc(0, -10, 50, 15, 90, 270)

    pop()
  }

  moveKit = moveKit + rollSpeed //move med kit

  pageFlip = map(other, 0, 100, 0, 200)

  for (let i = 0; i <= 2; i++) { //load page flipping
    if (pageFlip > 145) {
      image(imgPageflipI, moveBallad - (200 * i), 250)
    } else {
      image(imgPageflipII, moveBallad - (200 * i), 250)
    }
  }

  moveBallad = moveBallad + rollSpeed //move page flipping

  lovesongScale = map(other, 0, 100, 0.5, 0.7)

  for (let i = 0; i <= 1; i++) {
    noStroke()
    fill(143, 91, 48)
    rect(moveLovesong + 90 - (200 * i), 300, 180, 100)

    push()

    translate(moveLovesong + 70 - (200 * i), 325) //position bottom left corner
    scale(lovesongScale) //heartbeat

    image(imgHeart, -140, -75)

    pop()

    fill(245, 202, 157)
    stroke(245, 202, 157)
    strokeWeight(3)

    musicNotes = map(other, 0, 100, 0, 200)

    if (noteTimer >= 10) {
      if (musicNotes > 145 && quaverNote == false) {
        quaverNote = true
      } else if (musicNotes > 145 && quaverNote == true && beamNote == false) {
        beamNote = true
      } else if (musicNotes > 145 && beamNote == true) {
        quaverNote = false
        beamNote = false
      }

      noteTimer = 0
    }

    if (quaverNote == true) {
      circle(moveLovesong + 90 - (200 * i), 315, 10)
      line(moveLovesong + 95 - (200 * i), 315, moveLovesong + 90 - (200 * i), 285)
      line(moveLovesong + 90 - (200 * i), 285, moveLovesong + 100 - (200 * i), 295)
    }

    if (beamNote == true) {
      circle(moveLovesong + 135 - (200 * i), 295, 10)
      line(moveLovesong + 140 - (200 * i), 295, moveLovesong + 145 - (200 * i), 275)
      circle(moveLovesong + 155 - (200 * i), 305, 10)
      line(moveLovesong + 160 - (200 * i), 305, moveLovesong + 165 - (200 * i), 285)
      line(moveLovesong + 145 - (200 * i), 275, moveLovesong + 165 - (200 * i), 285)
    }
  }

  noteTimer = noteTimer + 1
  moveLovesong = moveLovesong + rollSpeed


  for (let i = 0; i <= 1; i++) {
    noStroke()
    fill(143, 91, 48)
    rect(moveLines - (200 * i), 300, 180, 100)

    stroke(245, 202, 157)
    strokeWeight(6)

    if (diverging < 350) {
      if (converging > 10) {
        line(moveLines - 89 - (200 * i), 300, moveLines - (200 * i) - converging, 300)
        line(moveLines + 89 - (200 * i), 300, moveLines - (200 * i) + converging, 300)
      } else {
        line(moveLines - 89 - (200 * i), 300, moveLines - 10 - (200 * i), 300)
        line(moveLines + 89 - (200 * i), 300, moveLines + 10 - (200 * i), 300)
        line(moveLines - 10 - (200 * i), 300, moveLines - (200 * i) + diverging - 310, diverging)
        line(moveLines + 10 - (200 * i), 300, moveLines - (200 * i) - diverging + 310, -diverging + 600)
      }
    } else {
      converging = 89
      diverging = 300
    }
  }

  moveLines = moveLines + rollSpeed

  converging = converging - 0.4

  if (converging <= 10) {
    diverging = diverging + 0.4
  }

  lyrics = map(vocal, 0, 100, 0, 200)

  if (lyricTimer >= 35) {
    if (moveLyrics > -100){
      if (lyrics > 160 && wordI == false) {
        wordI = true
      } else if (lyrics > 160 && wordI == true && wordKnow == false) {
        wordKnow = true
      } else if (lyrics > 160 && wordKnow == true && wordIts == false) {
        wordIts = true
      } else if (lyrics > 160 && wordIts == true && wordFor == false) {
        wordFor = true
      } else if (lyrics > 157 && wordFor == true && wordThe == false) {
        wordThe = true
      } else if (lyrics > 157 && wordThe == true && wordBetter == false) {
        wordBetter = true
      } 
    }
  }

  for (let i = 0; i <= 2; i++) {
    noStroke()
    fill(143, 91, 48)
    rect(moveLyrics - (200 * i), 300, 180, 100)
    rect(moveLyrics - (400 * i) - 6400, 300, 180, 100)

    textFont('font')
    fill(245, 202, 157)
    noStroke()
    if(moveLyrics > -100){
    if (wordI == true) {
      text("i", moveLyrics -70 - (200 * i), 295)
      text("i", moveLyrics -6470 - (400 * i), 295)
    }

    if (wordKnow == true) {
      text("know", moveLyrics -55 - (200 * i), 295)
      text("know", moveLyrics -6455 - (400 * i), 295)
    }

    if (wordIts == true) {
      text("it's", moveLyrics + 5 - (200 * i), 295)
      text("it's", moveLyrics - 6395 - (400 * i), 295)
    }

    if (wordFor == true) {
      text("for", moveLyrics + 40 - (200 * i), 295)
      text("for", moveLyrics - 6360 - (400 * i), 295)
    }

    if (wordThe == true) {
      text("the", moveLyrics - 30 - (200 * i), 325)
      text("the", moveLyrics - 6430 - (400 * i), 325)
    }

    if (wordBetter == true) {
      stroke(143, 48, 48)
      text("better.", moveLyrics + 10 - (200 * i), 325)
      text("better.", moveLyrics - 6390 - (400 * i), 325)
    }
  }
  }

  if (moveLyrics >= -100){
    lyricTimer = lyricTimer + 1
  }

  moveLyrics = moveLyrics + rollSpeed

  if(moveLyrics > 7300){
    moveLyrics = 6901
    moveFlash = 204
  }

  waves = map(bass, 0, 100, 0, 200)

  if (waveTimer >= 20) {
    if (waves > 145 && waveI == false) {
      waveI = true
    } else if (waves > 145 && waveI == true && waveII == false) {
      waveII = true
    } else if (waves > 145 && waveII == true && waveIII == false && midWave == 0) {
      waveIII = true
      midWave = midWave + 1
    } else if (waves > 145 && waveII == true && waveIII == true) {
      waveIII = false
    } else if (waves > 145 && waveII == true && waveIII == false && midWave == 1) {
      waveII = false
      midWave = midWave + 1
    } 

    if(midWave > 1){
      midWave = 0
    }

    waveTimer = 0
  }

  for (let i = 0; i <= 4; i++) {
    if(waveI == true){
      image(imgWaveI, moveWaves - (200 * i), 250)
    }

    if(waveII == true){
      image(imgWaveII, moveWaves - (200 * i), 250)
    }

    if (waveIII == true){
      image(imgWaveIII, moveWaves - (200 * i), 250)
    }
  }

  waveTimer = waveTimer + 1
  moveWaves = moveWaves + rollSpeed

  lungScale = map(bass, 0, 100, 0.2, 1)

  for (let i = 0; i <= 2; i++) {
    noStroke()
    fill(143, 91, 48)
    rect(moveLungs + 90 - (200 * i), 300, 180, 100)

    push()

    translate(moveLungs + 90 - (200 * i), 300)
    scale(lungScale)
    image(imgLungs, -90, -50)

    pop()
  }

  moveLungs = moveLungs + rollSpeed

  gunSmoke = map(bass, 0, 100, 0, 200)

  for (let i = 0; i <= 1; i++) { //load page flipping
    if (gunSmoke > 145) {
      image(imgGunsmoke, moveGun - (200 * i), 250)
    } else {
      image(imgGun, moveGun - (200 * i), 250)
    }
  }

  moveGun = moveGun + rollSpeed

  car = map(bass, 0, 100, 0, 200)

  for (let i = 0; i <= 2; i++) { //load page flipping
    if (car > 145) {
      image(imgCarI, moveCar - (200 * i), 250)
    } else {
      image(imgCarII, moveCar - (200 * i), 250)
    }
  }

  moveCar = moveCar + rollSpeed

  heartScale = map(bass, 0, 100, 0.2, 1)

  for (let i = 0; i <= 3; i++) {
    noStroke()
    fill(143, 91, 48)
    rect(moveHeart + 90 - (200 * i), 300, 180, 100)

    push()

    translate(moveHeart + 90 - (200 * i), 300)
    scale(heartScale)
    image(imgHeart, -90, -50)

    pop()
  }

  moveHeart = moveHeart + rollSpeed

  flashing = map(other, 0, 100, 0, 200)

  if (flashTimer >= 25) {
    if (flashing > 100 && book == false) {
      book = true
    } else if (flashing > 100 && book == true && medkit == false) {
      medkit = true
    } else if (flashing > 100 && medkit == true && ballad == false) {
      ballad = true
    } else if (flashing > 100 && ballad == true && lovesong == false) {
      lovesong = true
    } else if (flashing > 100 && lovesong == true && lines == false) {
      lines = true
    } else if (flashing > 100 && lines == true && wave == false) {
      wave = true
    } else if (flashing > 100 && wave == true && lungs == false) {
      lungs = true
    } else if (flashing > 100 && lungs == true && gun == false) {
      gun = true
    } else if (flashing > 100 && gun == true && drive == false) {
      drive = true
    } else if (flashing > 100 && drive == true && heart == false) {
      heart = true
    } else if (flashing > 100 && heart == true) {
      medkit = false
      ballad = false
      lovesong = false
      lines = false
      wave = false
      lungs = false
      gun = false
      drive = false
      heart = false
    }

    flashTimer = 0
  }
  
  for (let i = 0; i <= 2; i++) {

    if(book == true){
      image(imgBook, moveFlash - (400 * i), 250)
    }

    if(medkit == true){
      rect(moveFlash + 90 - (400 * i), 300, 180, 100)
      image(imgMedkit, moveFlash - (400 * i), 250)
    }

    if (ballad == true){
      image(imgPageflipI, moveFlash - (400 * i), 250)
    }

    if (lovesong == true){
      image(imgLovesong, moveFlash - (400 * i), 250)
    }

    if (lines == true){
      image(imgLines, moveFlash - (400 * i), 250)
    }

    if (wave == true){
      image(imgWaveII, moveFlash - (400 * i), 250)
    }

    if (lungs == true){
      rect(moveFlash + 90 - (400 * i), 300, 180, 100)
      image(imgLungs, moveFlash - (400 * i), 250)
    }

    if (gun == true){
      rect(moveFlash + 90 - (400 * i), 300, 180, 100)
      image(imgGun, moveFlash - (400 * i), 250)
    }

    if (drive == true){
      image(imgCarI, moveFlash - (400 * i), 250)
    }

    if (heart == true){
      rect(moveFlash + 90 - (400 * i), 300, 180, 100)
      image(imgHeart, moveFlash - (400 * i), 250)
    }
  }

  flashTimer = flashTimer + 1
  moveFlash = moveFlash + rollSpeed
  
  


  
  pop()

 
}

 // if (tickTest >= 50){
  //   line(0,0,100,100)
  //   tickTest = 0
  // }
  // tickTest = tickTest + 1


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