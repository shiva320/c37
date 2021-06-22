class Ball {
    constructor(x,y,width,height){
        var options ={
            'density' : 1,
            'frictionAir' : 0.005,
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.postion;
        push()
        translate(pos.x, pos.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill("green")
        ellipse(0,0, this.width, this.height);
        pop()
    }
}