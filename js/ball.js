class Ball{
    constructor(x,y){
        var options= {
            density:1,
            friction:0.5
        }
       this.image1 = loadImage("images/ball1.png"); 
       this.image2 = loadImage("images/ball2.png");
       this.image3 = loadImage("images/ball3.png");
       this.image4 = loadImage("images/ball4.png");
       this.image5 = loadImage("images/ball5.png");
       this.image6 = loadImage("images/ball6.png");
       


       
        this.body = Bodies.circle(x,y,20);
        World.add(world,this.body);

    }
    display1(){
        ellipseMode(RADIUS);
        FileList()
        ellipse(this.body.position.x, this.body.position.y, 20,20)
        imageMode(CENTER);
        
            image(this.image1, this.body.position.x, this.body.position.y, 20, 20);
    }
    display2(){
        imageMode(CENTER);
            image(this.image2, this.body.position.x, this.body.position.y, 20, 20);
    }
            display3(){
                imageMode(CENTER);
            image(this.image3, this.body.position.x, this.body.position.y, 20, 20);
        }

            display4(){
                imageMode(CENTER);
            image(this.image4, this.body.position.x, this.body.position.y, 20, 20);
            }
            display5(){
                imageMode(CENTER);
             image(this.image5, this.body.position.x, this.body.position.y, 20, 20);
            }
            display6(){
                imageMode(CENTER)
            
             image(this.image6, this.body.position.x, this.body.position.y, 20, 20);
            }
            
            
            
        }
        
    

