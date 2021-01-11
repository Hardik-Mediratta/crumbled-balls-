class Bin{
    constructor(x,y,width,height){
        var options= {
            isStatic:true
        }
        this.bodyy = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.bodyy);

        this.bodyyl = Bodies.rectangle((x-(width/2)),(y-(height*2)),height,width,options);
        World.add(world,this.bodyyl);

        this.bodyyr = Bodies.rectangle((x+(width/2)),(y-(height*2)),height,width,options);
        World.add(world,this.bodyyr);

        this.bodyy.width = width;
        this.bodyy.height = height;
       
    }
    display(){
        fill("red");
        rect(this.bodyy.position.x,this.bodyy.position.y,this.bodyy.height,this.bodyy.width);
        rect((this.bodyy.position.x-(this.bodyy.width/2)),(this.body.position.y-(this.bodyy.height*(2*(this.bodyy.width/100)))),this.bodyy.height,this.bodyy.width/2);
        rect((this.bodyy.position.x+(this.bodyy.width/2)),(this.body.position.y-(this.bodyy.height*(2*(this.bodyy.width/100)))),this.bodyy.height,this.bodyy.width/2);



    }






}