class BaseClass {
    // Propriedades
    constructor (x,y, width, height, angle){ // recebe argumentos da função
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':2.0

        }
        this.body = Bodies.rectangle(x,y,width,height, options)
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/bird.png");
        World.add(world, this.body);
    }


   // Funções:
   display (){
       var pos = this.body.position;
       var angle = this.body.angle; 
       push();
       translate(pos.x, pos.y);
       rotate (angle);
       imageMode(CENTER);
       image(this.image, 0,0, this.width,this.height);
       pop ();
   }
}