
const nodeDiameter = 35
let node;
let nodeList= [];
class Controller{

	addNode(node){
		nodeList.push(node);
	}

	addEdge(from,to){
		
		for(let node of nodeList)
		{
			if(node.id === from.id)
			{
				from.filhos.push(to)
			}

			else(node.id === to.id)
			{
				to.pais.push(from)
			}
		}


	}

}

class Node{
	x
	y
	filhos
	pais
	id

	constructor(x, y,id)
	{
		this.x = x;
		this.y = y;
		this.id = id;
	}

	click(px,py)
	{
		let d = dist(px,py,this.x,this.y)

		if(d <= nodeDiameter/2) console.log("foi")


		console.log(d)
		console.log(mouseX,mouseY,node.x,node.y)

	}
}




function setup(){
	// Creates a canvas with 800px width and 600px height
	createCanvas(800, 600);
	frameRate(30)

	node = new Node(100, 50,"teste");

	node2 = new Node(150,200,"teste");

	console.log(node.x, node.y);

	background(127);
}

let value = 0;

function draw()
{
	
	circle(node.x, node.y,nodeDiameter);
	circle(node2.x, node2.y,nodeDiameter);

	line(node.x, node.y, node2.x,node2.y)

}

function mouseClicked() {

	node.click(mouseX,mouseY)
	node2.click(mouseX,mouseY)


}
