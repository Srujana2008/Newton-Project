class Rope{
    constructor(body1,body2,pointA,pointB){
        this.pointA = pointA
        this.pointB = pointB

        let options = {
            bodyA : body1,
            bodyB : body2,
            pointB:{x:this.pointA, y:this.pointB}
        }  
            con = Matter.Constraint.create(options);
    }
    display(){
       var pointA = this.rope.bodyA.position;
       var pointB = this.rope.bodyB.posiyion;
       line(this.pointA.x, this.pointA.y, this.pointB.x, this.pointB.y);
    }
}