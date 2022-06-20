class VogelEnBand{// In deze klasse worden de vogel en band getekend en bewogen. 
    constructor(){// dit is de constructor van de klasse VogelEnBand, hier worden de klassevariabelen gedeclareerd.
      this.intPosYVogel = 50;
      this.intPosXVogel = 400;
      this.intAfstandTussenVleugels = 44;
      this.intPosXLijn = 300;
      this.intPosYband = 525;
      this.intPosXBand = 56;
      this.intStartPosXBand = 50;
      this.intGrootteBuitenband = 50;
      this.intGroottebinnenband = 30;  
      this.intSnelheid = 1;
      
    }
    
    Draw() {// Door deze method worden de vogel en de band getekend.
      // vogel
      line(this.intPosXVogel, this.intPosYVogel, this.intPosXVogel + this.intAfstandTussenVleugels, this.intPosYVogel + this.intAfstandTussenVleugels);
      line(this.intPosXVogel + this.intAfstandTussenVleugels, this.intPosYVogel + this.intAfstandTussenVleugels, this.intPosXVogel + 94, this.intPosYVogel);
        
      // lijn waar de vogel over moet
      line(this.intPosXLijn , 0, this.intPosXLijn, height);
      
      // band
      fill(0);
      ellipse(this.intPosXBand, this.intPosYband, this.intGrootteBuitenband, this.intGrootteBuitenband);
      fill(250);
      ellipse(this.intPosXBand, this.intPosYband, this.intGroottebinnenband, this.intGroottebinnenband);
   
    }
    MoveVogel(moveX, moveY) {// Door deze method kan de vogel bewegen doormiddel van input.
          if (this.intPosXVogel + 94 + moveX < 800 && this.intPosXVogel + moveX > 0) {
              this.intPosXVogel += moveX;
              this.intPosYVogel += moveY;
          }
      }
    MoveBand(){// Door deze method beweegt de band als de vogel zich links van de lijn bevind.
      if(this.intPosXVogel < this.intPosXLijn){
        this.intPosXBand = this.intPosXBand + this.intSnelheid;
        if (this.intPosXBand > 175) {
          this.intPosXBand = 175;
        } 
      }
       }
  }
  class VerkeersBord{// In deze klasse wordt het verkeersbord getekend.
    constructor(){// Dit is de constructor van de klasse VerkeersBord, hier worden de klassevariabelen gedeclareerd.
      this.XPosBord = 200;
      //groot bord
      this.x1Bord = 170;
      this.x2Bord = 204;
      this.x3Bord = 238;
      this.y1Bord = 490;
      this.y2Bord = 450;
      this.y3Bord = 490;
      //pijl
      this.x1Pijl = 204;
      this.x2Pijl = 204;
      this.x3Pijl = 220;
      this.y1Pijl = 485;
      this.y2Pijl = 470;
      this.y3Pijl = 478;
    }
  
    Draw(){// Door deze method wordt het bord getekend.
      fill(0);
      rect(200, 550, 8, -60);
  
      fill(0, 0, 250);
      triangle(this.x1Bord, this.y1Bord, this.x2Bord, this.y2Bord, this.x3Bord, this.y3Bord);
  
      fill(250);
      rect(190, 473, 20, 8);
      triangle(this.x1Pijl, this.y1Pijl, this.x2Pijl, this.y2Pijl, this.x3Pijl, this.y3Pijl);
    }
  }
  
  class Tekening{// In deze klasse wordt de tekening voor een groot deel getekend.
    constructor(){// Dit is de constructor van de klasse Tekening, hier worden de klassevariabelen gedeclareerd.
      this.intGrondY = 550;
      this.intPosXDeur = 530;
      this.intBeginXVuilbak = 640;
      this.intBeginYVuilbak = 550;
      this.intBreedteVuilbak = 40;
      this.intHoogteVuilbak = -50;
      this.intXPosRaam = 390;
      this.intYPosRaam = 380;
      this.intPosXHuis = 360;
      this.intposYDak = 250;
    }
    
    Draw(){ // Door deze method wordt de tekening getekend.
      //gevel
      fill(150);
      rect(this.intPosXHuis, this.intGrondY, 260, -300);
      //dak
      fill(100);
      triangle(this.intPosXHuis, this.intposYDak, 620, 250, 490, 100);
      // deur
      fill(0, 0, 250);
      rect(this.intPosXDeur, this.intGrondY, 60, -100);
      fill(0);
      ellipse(580, 510, 10, 10);
      fill(250);
      rect(this.intPosXDeur + 10, this.intGrondY - 10, 40, -20);
      rect(this.intPosXDeur + 10,  this.intGrondY - 50, 40, -35);
      // raam
      rect(this.intXPosRaam, this.intYPosRaam, 100, -50);
      // vuilbak
      fill(0, 150, 50);
      rect(this.intBeginXVuilbak, this.intBeginYVuilbak, this.intBreedteVuilbak, this.intHoogteVuilbak);
      quad(this.intBeginXVuilbak - 5, this.intBeginYVuilbak - 50, this.intBeginXVuilbak + 45, this.intBeginYVuilbak - 50,  this.intBeginXVuilbak + 30, this.intBeginYVuilbak - 60, this.intBeginXVuilbak + 10, this.intBeginYVuilbak - 60);
    }
  }
  
  class Straat{// In deze klasse word de straat getekend.
    constructor(){// Dit is de constructor van de klasse Straat, hier worden de klassevariabelen gedeclareerd.
    this.intGrondY = 550;
    this.intYPosStreep = 585;
    this.intBreedteStreep = 80;
    this.intHoogteStreep = 30;
    this.intBreedteStraat = 800;
    this.intHoogteStraat = 100;
      
    }
    
    Draw(){ //Door deze method wordt de straat getekend.
      // grond
      fill(230);
      rect(0, this.intGrondY, this.intBreedteStraat, this.intHoogteStraat);
      //strepen
      for (let i = 1/3; i < 4; ++i){
        fill(255);
        rect(i * 200 , this.intYPosStreep, this.intBreedteStreep, this.intHoogteStreep);
      }
    }
  }
  
  class Bal{// In deze klasse wordt de bal getekend en bewogen.
    constructor(){
      this.intPosYBal = 365;
      this.intPosXBal = 440;
      this.intDiameter = 35;
      this.intSnelheid = 3;
    }
    Draw(){// Door deze method wordt de bal getekend.
      fill(250, 210, 0);
      ellipse(this.intPosXBal, this.intPosYBal, this.intDiameter, this.intDiameter);
    }
    Move(){// Door deze method valt de bal uit het raam.
      this.intPosYBal = this.intPosYBal + this.intSnelheid;
      if (this.intPosYBal > 535) {
        this.intPosYBal = 535;
      }
    }
  }
  
  function setup() // Door deze functie wordt er een canvas gemaakt.
  {
    createCanvas(750, 650);
  }
  
  let bewegendeVogel = new VogelEnBand();
  let tekening = new Tekening();
  let bal = new Bal();
  let straat = new Straat();
  let verkeersbord = new VerkeersBord();
  
  function draw() {// Deze functie toont alles in het gemaakte canvas.
    background(0, 170, 250);
    tekening.Draw();
    bal.Draw();
    bal.Move();
    bewegendeVogel.Draw();
    bewegendeVogel.MoveBand();
    straat.Draw();
    verkeersbord.Draw();
    
    if (keyIsDown(LEFT_ARROW)) {
        bewegendeVogel.MoveVogel(-10, 0);
    }
    if (keyIsDown(RIGHT_ARROW)) {
        bewegendeVogel.MoveVogel(10, 0);
      } 
  }
  