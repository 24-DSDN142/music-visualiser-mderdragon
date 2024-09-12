let redValue = 212
let greenValue = 149
let blueValue = 83

let bottomFilm = 2000
let topFilm = -2250
let circleX = 20
let filmX = 200
let rollSpeed = 1

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
  background(redValue, greenValue, blueValue)
  textFont('font'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  fill(143, 91, 48) //draw film projector
  noStroke()
  rect(675, 475, 200, 350)
  rect(675, 625, 250, 50)
  rect(675, 650, 150, 50)
  circle(560, 350, 75)
  ellipse(560, 470, 75, 120)
  noFill()
  stroke(245, 202, 157)
  strokeWeight(10)
  rect(675, 475, 100, 300)
  stroke(212, 149, 83)
  strokeWeight(20)
  line(600, 365, 700, 425)
  circle(560, 350, 5)
  ellipse(560, 470, 5, 50)

  if(moveFlash >= 200){ //change background to red
  if(redValue > 143){
    redValue = redValue - 0.025
  }
  
  if(greenValue > 48){
    greenValue = greenValue - 0.025
  }

  if(blueValue > 48){
    blueValue = blueValue - 0.025
  }
}

  push() 

  translate(bottomFilm, 550) //position film reel across bottom

  for (let i = 0; i <= 6; i++) { //repeat bottom film reel border
    fill(255)
    noStroke()
    rect(-filmX * i, 0, 200, 150) //white border

    fill(212, 149, 83)
    rect(-filmX * i, 0, 180, 100) //inner frame

    for (let j = 0; j <= 65; j++) {
      circle(circleX * j - 1290, -63, 10) //border circles
      circle(circleX * j - 1290, 62, 10)
    }
  }

  bottomFilm = bottomFilm - rollSpeed //move bottom roll

  if (bottomFilm < 900) { //reset bottom roll
    bottomFilm = 1100
  }

  pixels = map(drum, 0, 100, 0, 200) //new drum range for pixels

  for (let i = 0; i <= 6; i++) { //repeat pixel frames
    if(pixels > 150){ //draw pixel images according to drums in bottom reel
      image(imgPixelsI, -filmX * i + -90, -50)
    } else {
      image(imgPixelsII, -filmX * i + -90, -50)
    }
  }

  pop()

  if (vocal < 45) { //rotate spool in accordance to vocals
    spoolSpin = map(vocal, 0, 100, 0.1, 0.4) //slow speed for no vocals
  } else {
    spoolSpin = map(vocal, 0, 100, 0.4, 2) //faster for vocals
  }
  spoolAngle = spoolAngle + spoolSpin


  push()

  translate(0, 450) //draw centre left spool image
  rotate(spoolAngle) //rotate spool in accordance to vocals
  image(imgSpool, -245, -255)

  pop()

  push()

  rotate(335) //rotate top film reel + content within it

  push()

  translate(topFilm, 300) //position top film reel centrally

  for (let i = 0; i <= 6; i++) { //repeat top film reel border
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

  translate(moveHole, 300) //move guitar holes

  noStroke()
  fill(143, 91, 48)
  for (let i = 0; i <= 7; i++) { //repeat guitar holes
    circle(guitarHole * i - 240, 0, 70) //draw first hole appearance
    circle(guitarHole * i - 5040, 0, 70) //draw second hole appearance
    circle(guitarHole * i - 9840, 0, 70) //draw third hole appearance
  }

  pop()

  let strum = map(other, 0, 100, 0, 200) //strum in accordance to other

  stroke(245, 202, 157)

  if (strum > 145) { //toggle string vibration
    strokeWeight(4) //thick
  } else {
    strokeWeight(2) //thin
  }

  for (let h = 0; h <= 5; h++) { //repeat guitar frames
    for (let k = 0; k <= 5; k++) { //repeat for 6 strings
      line(guitarStrings - 1 - (200 * h), stringsY * k + 270, guitarStrings - 179 - (200 * h), stringsY * k + 270) //first guitar appearance
      line(guitarStrings - 9600 - (200 * h), stringsY * k + 270, guitarStrings - 9780 - (200 * h), stringsY * k + 270) //second guitar appearance
    }
  }

  let bassStrum = map(bass, 0, 100, 0, 200) //strum in accordance to other

  stroke(245, 202, 157)

  if (bassStrum > 145) { //toggle string vibration
    strokeWeight(4) //thick
  } else {
    strokeWeight(2) //thin
  }

  for (let h = 0; h <= 7; h++) { //repeat bass frames
    for (let k = 0; k <= 3; k++) { //repeat for 4 strings
      line(bassStrings - 1 - (200 * h), bassStringsY * k + 270, bassStrings	 - 179 - (200 * h), bassStringsY * k + 270) //draw bass strings
    }
  }

  topFilm = topFilm + rollSpeed //move top roll + guitar
  guitarStrings = guitarStrings + rollSpeed
  bassStrings = bassStrings + rollSpeed
  moveHole = moveHole + rollSpeed

  if (topFilm >= -300) { //reset top roll
    topFilm = -500
  }

  pencilWiggle = map(other, 0, 100, 50, 90) //new other range for rotation of pencil

  for (let i = 0; i <= 3; i++) { //repeat book frames
    image(imgBook, moveBook - (200 * i), 250) //draw book

    push()

    translate(moveBook + 115 - (200 * i), 283) //origin on tip of pencil
    rotate(pencilWiggle) //rotate pencil for writing effect

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

  bloodSpread = map(other, 0, 100, -0.5, 1.4) //new other range for scale of blood

  for (let i = 0; i <= 3; i++) { //repeat medkit frames
    noStroke()
    fill(143, 91, 48)
    rect(moveKit + 90 - (200 * i), 300, 180, 100) //background
    image(imgMedkit, moveKit - (200 * i), 250) //draw medkit

    push()

    translate(moveKit + 179 - (200 * i), 300)//origin on centre edge of frame for scaling blood
    scale(bloodSpread)//size of blood

    fill(143, 48, 48)
    arc(0, 10, 100, 30, 90, 270)//draw blood circles
    arc(0, -10, 50, 15, 90, 270)

    pop()
  }

  moveKit = moveKit + rollSpeed //move medkit

  pageFlip = map(other, 0, 100, 0, 200) //new other range for changing pageflip image

  for (let i = 0; i <= 2; i++) { //repeat page flipping frames
    if (pageFlip > 145) { //draw page flipping images
      image(imgPageflipI, moveBallad - (200 * i), 250)
    } else {
      image(imgPageflipII, moveBallad - (200 * i), 250)
    }
  }

  moveBallad = moveBallad + rollSpeed //move page flipping images

  lovesongScale = map(other, 0, 100, 0.5, 0.7) //new other range for scaling heart

  for (let i = 0; i <= 1; i++) { //repeat lovesong frames
    noStroke()
    fill(143, 91, 48)
    rect(moveLovesong + 90 - (200 * i), 300, 180, 100)//background

    push()

    translate(moveLovesong + 70 - (200 * i), 325) //position heart in bottom left corner
    scale(lovesongScale) //heartbeat

    image(imgHeart, -140, -75)//draw heart

    pop()

    fill(245, 202, 157)
    stroke(245, 202, 157)
    strokeWeight(3)

    musicNotes = map(other, 0, 100, 0, 200) //new other range for music note sequence

    if (noteTimer >= 10) { //load music notes sequentially
      if (musicNotes > 145 && quaverNote == false) { //quaver appears
        quaverNote = true
      } else if (musicNotes > 145 && quaverNote == true && beamNote == false) { //beam appears
        beamNote = true
      } else if (musicNotes > 145 && beamNote == true) { //both notes disappear
        quaverNote = false
        beamNote = false
      }

      noteTimer = 0 //reset sequence
    }

    if (quaverNote == true) { //draw quaver
      circle(moveLovesong + 90 - (200 * i), 315, 10)
      line(moveLovesong + 95 - (200 * i), 315, moveLovesong + 90 - (200 * i), 285)
      line(moveLovesong + 90 - (200 * i), 285, moveLovesong + 100 - (200 * i), 295)
    }

    if (beamNote == true) { //draw beam
      circle(moveLovesong + 135 - (200 * i), 295, 10)
      line(moveLovesong + 140 - (200 * i), 295, moveLovesong + 145 - (200 * i), 275)
      circle(moveLovesong + 155 - (200 * i), 305, 10)
      line(moveLovesong + 160 - (200 * i), 305, moveLovesong + 165 - (200 * i), 285)
      line(moveLovesong + 145 - (200 * i), 275, moveLovesong + 165 - (200 * i), 285)
    }
  }

  noteTimer = noteTimer + 1 //delay music notes timer until in frame 
  moveLovesong = moveLovesong + rollSpeed


  for (let i = 0; i <= 1; i++) { //repeat lines frames
    noStroke()
    fill(143, 91, 48)
    rect(moveLines - (200 * i), 300, 180, 100) //background

    stroke(245, 202, 157)
    strokeWeight(6)

    if (diverging < 350) { //start drawing lines
      if (converging > 10) { //converging
        line(moveLines - 89 - (200 * i), 300, moveLines - (200 * i) - converging, 300) //left line
        line(moveLines + 89 - (200 * i), 300, moveLines - (200 * i) + converging, 300) //right line
      } else { //diverging
        line(moveLines - 89 - (200 * i), 300, moveLines - 10 - (200 * i), 300) //paused left line
        line(moveLines + 89 - (200 * i), 300, moveLines + 10 - (200 * i), 300) //paused right line
        line(moveLines - 10 - (200 * i), 300, moveLines - (200 * i) + diverging - 310, diverging) //left line
        line(moveLines + 10 - (200 * i), 300, moveLines - (200 * i) - diverging + 310, -diverging + 600) // right line
      }
    } else { //repeat converging animation
      converging = 89
      diverging = 300
    }
  }

  moveLines = moveLines + rollSpeed

  converging = converging - 0.4

  if (converging <= 10) { //trigger diverging
    diverging = diverging + 0.4
  }

  lyrics = map(vocal, 0, 100, 0, 200) //new vocal range for lyric sequence

  if (lyricTimer >= 35) { //vocal timing
    if (moveLyrics > -100){
      if (lyrics > 160 && wordI == false) { //"i" appears
        wordI = true
      } else if (lyrics > 160 && wordI == true && wordKnow == false) { //"know" appears
        wordKnow = true
      } else if (lyrics > 160 && wordKnow == true && wordIts == false) { //"it's" appears
        wordIts = true
      } else if (lyrics > 160 && wordIts == true && wordFor == false) { //"for" appears
        wordFor = true
      } else if (lyrics > 157 && wordFor == true && wordThe == false) { //"the" appears
        wordThe = true
      } else if (lyrics > 157 && wordThe == true && wordBetter == false) {//"better." appears
        wordBetter = true
      } 
    }
  }

  for (let i = 0; i <= 2; i++) { //repeat lyric frames
    noStroke()
    fill(143, 91, 48)
    rect(moveLyrics - (200 * i), 300, 180, 100) //backgrounds
    rect(moveLyrics - (400 * i) - 6400, 300, 180, 100) //second appearance every two frames

    fill(245, 202, 157)
    noStroke()
    if(moveLyrics > -100){ //delay lyric drawing until in frame
    if (wordI == true) { //draw "i"
      text("i", moveLyrics -70 - (200 * i), 295)
      text("i", moveLyrics -6470 - (400 * i), 295) //second appearance every two frames
    }

    if (wordKnow == true) { //draw "know"
      text("know", moveLyrics -55 - (200 * i), 295)
      text("know", moveLyrics -6455 - (400 * i), 295) //second appearance every two frames
    }

    if (wordIts == true) { //draw "it's"
      text("it's", moveLyrics + 5 - (200 * i), 295)
      text("it's", moveLyrics - 6395 - (400 * i), 295) //second appearance every two frames
    }

    if (wordFor == true) { //draw "for"
      text("for", moveLyrics + 40 - (200 * i), 295)
      text("for", moveLyrics - 6360 - (400 * i), 295) //second appearance every two frames
    }

    if (wordThe == true) { //draw "the"
      text("the", moveLyrics - 30 - (200 * i), 325)
      text("the", moveLyrics - 6430 - (400 * i), 325) //second appearance every two frames
    }

    if (wordBetter == true) { //draw "better."
      stroke(143, 48, 48) //add red outline
      text("better.", moveLyrics + 10 - (200 * i), 325)
      text("better.", moveLyrics - 6390 - (400 * i), 325) //second appearance every two frames
    }
  }
  }

  if (moveLyrics >= -100){ //delay lyric timer until in frame
    lyricTimer = lyricTimer + 1
  }

  moveLyrics = moveLyrics + rollSpeed

  if(moveLyrics > 7300){ //reset for repeat
    moveLyrics = 6901
    moveFlash = 209
  }

  waves = map(bass, 0, 100, 0, 200) //new bass range for changing wave images

  if (waveTimer >= 20) { //delay change in wave image
    if (waves > 145 && waveI == false) { //low wave appears
      waveI = true
    } else if (waves > 145 && waveI == true && waveII == false) { //middle wave appears in forwards sequence
      waveII = true
    } else if (waves > 145 && waveII == true && waveIII == false && midWave == 0) { //high wave appears
      waveIII = true
      midWave = midWave + 1 //counter for middle wave
    } else if (waves > 145 && waveII == true && waveIII == true) { //high wave disappears
      waveIII = false
    } else if (waves > 145 && waveII == true && waveIII == false && midWave == 1) { //middle wave appears in backwards sequence
      waveII = false
      midWave = midWave + 1
    } 

    if(midWave > 1){ //reset counter for middle wave
      midWave = 0
    }

    waveTimer = 0 //reset wave sequence
  }

  for (let i = 0; i <= 4; i++) { //repeat waves frame
    if(waveI == true){ //draw low wave
      image(imgWaveI, moveWaves - (200 * i), 250)
    }

    if(waveII == true){ //draw middle wave
      image(imgWaveII, moveWaves - (200 * i), 250)
    }

    if (waveIII == true){ //draw high wave
      image(imgWaveIII, moveWaves - (200 * i), 250)
    }
  }

  waveTimer = waveTimer + 1
  moveWaves = moveWaves + rollSpeed

  lungScale = map(bass, 0, 100, 0.2, 1) //new bass range for scaling lungs

  for (let i = 0; i <= 2; i++) { //repeat lungs frames
    noStroke()
    fill(143, 91, 48)
    rect(moveLungs + 90 - (200 * i), 300, 180, 100) //background

    push()

    translate(moveLungs + 90 - (200 * i), 300) //centre origin in frame/lungs
    scale(lungScale) //breathing animation
    image(imgLungs, -90, -50) //draw lungs

    pop()
  }

  moveLungs = moveLungs + rollSpeed

  gunSmoke = map(bass, 0, 100, 0, 200) //new bass range for changing gun + smoking gun

  for (let i = 0; i <= 1; i++) { //repeat gun frames
    if (gunSmoke > 145) {
      image(imgGunsmoke, moveGun - (200 * i), 250) //draw gun
    } else {
      image(imgGun, moveGun - (200 * i), 250) //draw smoking gun
    }
  }

  moveGun = moveGun + rollSpeed

  car = map(bass, 0, 100, 0, 200) //new bass range for changing car images

  for (let i = 0; i <= 2; i++) { //repeat car frames
    if (car > 145) {
      image(imgCarI, moveCar - (200 * i), 250) //draw car 1
    } else {
      image(imgCarII, moveCar - (200 * i), 250) //draw car 2
    }
  }

  moveCar = moveCar + rollSpeed

  heartScale = map(bass, 0, 100, 0.2, 1) //new bass frame for scaling heart

  for (let i = 0; i <= 3; i++) { //repeat heart frames
    noStroke()
    fill(143, 91, 48)
    rect(moveHeart + 90 - (200 * i), 300, 180, 100) //background

    push()

    translate(moveHeart + 90 - (200 * i), 300) //centre origin in frame/heart
    scale(heartScale) //heartbeat animation
    image(imgHeart, -90, -50) //draw heart

    pop()
  }

  moveHeart = moveHeart + rollSpeed

  flashing = map(other, 0, 100, 0, 200) //new other range for flashing sequence

  if (flashTimer >= 25) { //delay change between images
    if (flashing > 145 && book == false) { //book appears
      book = true
    } else if (flashing > 100 && book == true && medkit == false) { //medkit + blood appears
      medkit = true
    } else if (flashing > 100 && medkit == true && ballad == false) { //pageflip appears
      ballad = true
    } else if (flashing > 100 && ballad == true && lovesong == false) { //heart + notes appear (asset)
      lovesong = true
    } else if (flashing > 100 && lovesong == true && lines == false) { //diverging lines appear (asset)
      lines = true
    } else if (flashing > 100 && lines == true && wave == false) { //wave appears
      wave = true
    } else if (flashing > 100 && wave == true && lungs == false) { //lungs appear
      lungs = true
    } else if (flashing > 100 && lungs == true && gun == false) { //smoking gun appears
      gun = true
    } else if (flashing > 100 && gun == true && drive == false) { //car appears
      drive = true
    } else if (flashing > 100 && drive == true && heart == false) { //heart appears
      heart = true
    } else if (flashing > 100 && heart == true) { //reset sequence starting from book
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

    flashTimer = 0 //reset delay for flashing sequence
  }
  
  for (let i = 0; i <= 2; i++) { //repeat flashing sequence every second frame

    if(book == true){ //draw book
      image(imgBook, moveFlash - (400 * i), 250)
    }

    if(medkit == true){
      fill(143, 91, 48)
      rect(moveFlash + 90 - (400 * i), 300, 180, 100)//background
      image(imgMedkit, moveFlash - (400 * i), 250) //draw medkit
      fill(143, 48, 48)
      arc(moveFlash + 179 - (400 * i), 310, 100, 30, 90, 270) //draw blood circles
      arc(moveFlash + 179 - (400 * i), 290, 50, 15, 90, 270)
    }

    if (ballad == true){ //draw pageflip
      image(imgPageflipI, moveFlash - (400 * i), 250)
    }

    if (lovesong == true){ //draw lovesong asset
      image(imgLovesong, moveFlash - (400 * i), 250)
    }

    if (lines == true){ //draw diverging lines asset
      image(imgLines, moveFlash - (400 * i), 250)
    }

    if (wave == true){ //draw wave
      image(imgWaveII, moveFlash - (400 * i), 250)
    }

    if (lungs == true){ 
      fill(143, 91, 48)
      rect(moveFlash + 90 - (400 * i), 300, 180, 100) //background
      image(imgLungs, moveFlash - (400 * i), 250) //draw lungs
    }

    if (gun == true){
      rect(moveFlash + 90 - (400 * i), 300, 180, 100) //background
      image(imgGunsmoke, moveFlash - (400 * i), 250) //draw smoking gun
    }

    if (drive == true){ //draw car
      image(imgCarI, moveFlash - (400 * i), 250)
    }

    if (heart == true){
      rect(moveFlash + 90 - (400 * i), 300, 180, 100) //background
      image(imgHeart, moveFlash - (400 * i), 250) //draw heart
    }
  }

  flashTimer = flashTimer + 1
  moveFlash = moveFlash + rollSpeed

  pop()

  push()

  translate(700, 100) //draw top right spool
  rotate(spoolAngle) //rotate spool with vocals
  image(imgSpool, -245, -255)

  pop()
}

 