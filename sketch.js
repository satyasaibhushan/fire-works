var crakers = [];

function setup() {
	createCanvas(windowWidth,windowHeight);
	background(0);
}

function draw() {
	let color = createVector(random(75,255), random(75,255), random(75,255))
	if(random(1)<0.05)
	crakers.push(new craker(random(200,width-200),height,color,true));
	background(0,50);
	for(var i=crakers.length-1;i>0;i--)
	{console.log(crakers.length)
		//console.log(crakers[i].key )

		crakers[i].update();
		crakers[i].show();
		//crakers[i].explod();
	if(!crakers[i].key)
      {for(j=0;j<crakers[i].particles.length-1;j++)
		{crakers[i].particles[j].update();
			crakers[i].particles[j].show();
	  }
	   if(crakers[i].lifespan<0)
		   crakers.splice( i, 1);
		   
	}	
	}
    
}

class craker{
	constructor(x,y,col,key) {
       this.particles = [];
		this.x=x;
		this.lifespan=255;
		this.y=y;
		this.col=col;
		this.key=key;
		this.velx=random(-2,2)
		this.vely=random(9,13)
		if(!this.key){
			//for(var i=this.particles.length-1;i>0;i--){
				console.log('tength')
				this.velx=random(-3,3);
				this.vely=random(-2,4);
			//}
		}

		this.g = 0.1;
		// this.explode=0;
		stroke(col.x,col.y,col.z)
		fill(col.x,col.y,col.z)
	}
	update() {
	
	   this.y=this.y-this.vely;
	   this.x=this.x+this.velx;
	   this.vely=this.vely-this.g;
	   if(this.key){
		if(this.vely<0.1){
			this.key=false;
			this.explod();
		}
	  // }
		// else{
		// 	for(var i=this.particles.length-1;i>0;i--){
		// 		console.log('thislength')
	    //  	// this.particles[i].y=this.particles[i].y-this.particles[i].vely;
	   	// 	// this.particles[i].x=this.particles[i].x+this.particles[i].velx;
		// 	// this.particles[i].vely=this.particles[i].vely-this.particles[i].g;
		// 	this.particles[i].update;
		//}		
		
	   }
	}
	show(){
	  if (this.key){
		stroke(this.col.x,this.col.y,this.col.z)
		fill(this.col.x,this.col.y,this.col.z)
		ellipse(this.x, this.y, 10, 10)
	  }
	  else{this.lifespan-=4;
		  	for(var i=this.particles.length-1;i>0;i--){
				//console.log(this.lifespan)
				stroke(this.col.x,this.col.y,this.col.z,this.lifespan)
				fill(this.col.x,this.col.y,this.col.z,this.lifespan)
				ellipse(this.particles[i].x, this.particles[i].y, 1, 1)
				
	    }
		
	  }	

	}
	explod(){
		
	  for(var i=100;i>0;i--){
		//console.log('t')
		  var p =new craker(this.x,this.y,this.col,false);
		  this.particles.push(p)
		 
	  }

		
	}
}