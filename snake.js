class Snake {
  
  constructor() {
  	this.body = [];
    this.body[0] = createVector(floor(w/2), floor(h/2));
    this.x= 0;
    this.y = 0;
    this.length = 0;
  }
  
  changeDirection(x, y) {
  	this.x = x;
    this.y = y;
  }
  
  update() {
  	let head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.x;
    head.y += this.y;
    this.body.push(head);
  }
  eat(pos) {
  	let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if(x == pos.x && y == pos.y) {
      this.grow();
      return true;
    }
    return false;
  }

  grow() {
  	let head = this.body[this.body.length-1].copy();
    this.length++;
    this.body.push(head);
  }
  

  
  display() {
  	for(let i = 0; i < this.body.length; i++) {
    	fill(0);
      noStroke();
      rect(this.body[i].x, this.body[i].y, 1, 1)
    }
  }
  endGame() {
  	let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if(x > w-1 || x < 0 || y > h-1 || y < 0) {
       return true;
    }
    for(let i = 0; i < this.body.length-1; i++) {
    	let part = this.body[i];
      if(part.x == x && part.y == y) {
      	return true;
      }
    }
    return false;
  }
}