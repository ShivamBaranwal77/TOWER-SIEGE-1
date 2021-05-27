class launcher{
    constructor(bodyA, pointB){
        var option={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        
            this.pointB=pointB
            this.sling=Constraint.create(option)
            World.add(world,this.sling)
        }
    
        fly(){
            this.sling.bodyA=null;
        }

        attach(bodyA){
            this.sling.bodyA=body;
        }

        display(){
            if(this.sling.bodyA){
                var pointA=this.sling.bodyA.position;
                var pointB=this.pointB;
    
                strokeWeight(2);
                stroke('red')
                line(pointA.x,pointA.y,pointB.x,pointB.y);
            }
        }
    }