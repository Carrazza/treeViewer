
const nodeDiameter = 15
let node;

for(let i = 0 ; i < 200 ; i+=20)
{

}

class Node{
	x
	y
	filhos
	id
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
	}
}




function setup(){
	// Creates a canvas with 800px width and 600px height
	createCanvas(800, 600);
	frameRate(30)

	node = new Node(100, 50);

	console.log(node.x, node.y);

	background(127);
}

let value = 0;

function draw()
{
	
	

}

function mouseClicked() {

	fill(value);
	circle(mouseX,mouseY,nodeDiameter)


}
