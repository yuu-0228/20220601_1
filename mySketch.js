function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
}

var x = 0
var y = 0
var vx = 10
var vy = 10
function draw() {
	
	if(mouseIsPressed){

	background(255)
	x=x
	y=y
	
	fill(0) //後髮	
	strokeWeight(4)
	stroke(0)
	beginShape()	
		curveVertex(x+130,y+115)	
		curveVertex(x,y+110) 
		curveVertex(x-110,y+115) 
		curveVertex(x-110,y-90) 
		curveVertex(x,y-138) 
		curveVertex(x+100,y-112)
		curveVertex(x+130,y+115)	
		curveVertex(x,y+110) 
		curveVertex(x-110,y+115)
	endShape()
		
	fill('#FFE4C4') //臉
	strokeWeight(4)	
	stroke('#DEB887')
	ellipse(x,y,250,230)
	
	fill(0)	//右眉2
	strokeWeight(5)
	stroke(0)
	beginShape()
		curveVertex(x-75,y-20)
		curveVertex(x-50,y-15)
		curveVertex(x-25,y-10)
		curveVertex(x-50,y-15)
		curveVertex(x-75,y-20)
		curveVertex(x-50,y-15)
		curveVertex(x-25,y-10)
  endShape()
	
	fill(0)	//左眉2
	strokeWeight(5)
	stroke(0)
	beginShape()
		curveVertex(x+15,y-10)
		curveVertex(x+40,y-15)
		curveVertex(x+65,y-20)
		curveVertex(x+40,y-15)
		curveVertex(x+15,y-10)
		curveVertex(x+40,y-15)
		curveVertex(x+65,y-20)
		curveVertex(x+40,y-15)
	endShape()
	
	fill(255) // 右眼
	strokeWeight(10)
	stroke(0)
	beginShape()
		curveVertex(x-70,y-5)
		curveVertex(x-20,y+20)
		curveVertex(x-70,y+45)
		curveVertex(x-20,y+20)
	  curveVertex(x-70,y-5)
		curveVertex(x-20,y+20)
		curveVertex(x-70,y+45)
	endShape()
	
	fill(255) // 左眼
	strokeWeight(10)
	stroke(0)
	beginShape()
		curveVertex(x+70,y-5)
		curveVertex(x+20,y+20)
		curveVertex(x+70,y+45)
		curveVertex(x+20,y+20)
	  curveVertex(x+70,y-5)
		curveVertex(x+20,y+20)
		curveVertex(x+70,y+45)
	endShape()
	
	fill('#FFC0CB') //嘴巴 2
	strokeWeight(3)
	stroke('#F08080')
	beginShape()
		curveVertex(x-30,y+60)
		curveVertex(x+30,y+60)
		curveVertex(x,y+90)
		curveVertex(x-30,y+60)
		curveVertex(x+30,y+60)
		curveVertex(x,y+90)
	endShape()
	
	fill('#444444') //頭髮	
	strokeWeight(4)
	stroke(0)
	beginShape()	
		curveVertex(x+50,y-65)
		curveVertex(x+107,y+125)
		curveVertex(x+165,y+100)
		curveVertex(x+150,y-25)
		curveVertex(x+100,y-125)
		curveVertex(x,y-160)
		curveVertex(x-100,y-125) 
  	curveVertex(x-145,y-25) 
		curveVertex(x-155,y+75) 
		curveVertex(x-135,y+115)
		curveVertex(x-95,y+120)
		curveVertex(x-50,y-60)
		curveVertex(x+50,y-65)
		curveVertex(x+107,y+125)
		curveVertex(x+165,y+100)
	endShape()		
	
	fill(	'#B0E0E6') //衣服	
	strokeWeight(4)
	stroke('#5F9EA0')
	beginShape()
		curveVertex(x-30,y+138)
		curveVertex(x+30,y+138)
		curveVertex(x+55,y+250)
		curveVertex(x-55,y+250)
		curveVertex(x-30,y+138)
		curveVertex(x+30,y+138)
		curveVertex(x+55,y+250)	
	endShape()
	
	fill('#FFE4C4') // 會動的手手
	strokeWeight(4)
	stroke('#DEB887')
	ellipse(x-75+random(-20,+20),y+175+random(-20,+20),35,35)	
	ellipse(x+75+random(-20,+20),y+175+random(-20,+20),35,35)

	x=x+vx
	y=y+vy
	vy=vy+0.3
	
	if(y>height)
	{
	vy=-vy*0.8
	y=height
		}ellipse(x+75,y+175,35,35)
	}
	
	else{
	
	background(255);
	x=mouseX
	y=mouseY
		
	fill(0) //後髮	
	strokeWeight(4)
	stroke(0)
	beginShape()	
		curveVertex(x+130,y+115)	
		curveVertex(x,y+110) 
		curveVertex(x-110,y+115) 
		curveVertex(x-110,y-90) 
		curveVertex(x,y-138) 
		curveVertex(x+100,y-112)
		curveVertex(x+130,y+115)	
		curveVertex(x,y+110) 
		curveVertex(x-110,y+115)
	endShape()
	
	fill('#FFE4C4') //臉
	strokeWeight(4)	
	stroke('#DEB887')
	ellipse(x,y,250,230)

  fill(0)	//右眉
	strokeWeight(5)
	stroke(0)
	beginShape()
		curveVertex(x-75,y-15)
		curveVertex(x-50,y-18)
		curveVertex(x-25,y-15)
		curveVertex(x-50,y-18)
		curveVertex(x-75,y-15)
		curveVertex(x-50,y-18)
		curveVertex(x-25,y-15)
	endShape()	
	
	fill(0)	//左眉
  strokeWeight(5)
	stroke(0)
	beginShape()
		curveVertex(x+15,y-15)
		curveVertex(x+40,y-18)
		curveVertex(x+65,y-15)
		curveVertex(x+40,y-18)
		curveVertex(x+15,y-15)
		curveVertex(x+40,y-18)
		curveVertex(x+65,y-15)
  endShape()	
	
	fill(255) // 眼睛
	strokeWeight(3)
	stroke(0)
	ellipse(x-45,y+20,50,50)	
	ellipse(x+45,y+20,50,50)	

	fill(0)
	noStroke() //眼球	
	ellipse(x-45,y+20,20,20)	
	ellipse(x+45,y+20,20,20)	
	
	fill(255) //高光
	noStroke()	
	ellipse(x-50,y+20,5,5)	
	ellipse(x+40,y+20,5,5)			
	
	fill('#FFC0CB') //嘴巴
	strokeWeight(3)
	stroke('#F08080')
	ellipse(x,y+70,17,25)	
	
	fill('#444444') //頭髮	
	strokeWeight(4)
	stroke(0)
	beginShape()	
		curveVertex(x+50,y-65)
		curveVertex(x+107,y+125)
		curveVertex(x+165,y+100)
		curveVertex(x+150,y-25)
		curveVertex(x+100,y-125)
		curveVertex(x,y-160)
		curveVertex(x-100,y-125) 
  	curveVertex(x-145,y-25) 
		curveVertex(x-155,y+75) 
		curveVertex(x-135,y+115)
		curveVertex(x-95,y+120)
		curveVertex(x-50,y-60)
		curveVertex(x+50,y-65)
		curveVertex(x+107,y+125)
		curveVertex(x+165,y+100)
	endShape()		
		
	fill(	'#B0E0E6') //衣服	
	strokeWeight(4)
	stroke('#5F9EA0')
	beginShape()
		curveVertex(x-30,y+138)
		curveVertex(x+30,y+138)
		curveVertex(x+55,y+250)
		curveVertex(x-55,y+250)
		curveVertex(x-30,y+138)
		curveVertex(x+30,y+138)
		curveVertex(x+55,y+250)	
	endShape()	

		fill('#FFE4C4') // 手手
		strokeWeight(4)
		stroke('#DEB887')
		ellipse(x-75,y+175,35,35)	
		ellipse(x+75,y+175,35,35)

	}
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
