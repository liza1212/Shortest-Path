//variable
let isNodePressed = false
let nodes=[]
let nodeValue= null





function setup(){
    canvas = createCanvas(window.innerWidth,window.innerHeight-100)
    canvas.position(0,99);
    canvas.mouseReleased(create)

    grid = createDiv()
    grid.attribute('class','grid')
    
    start = createDiv("Start ")
    start.attribute('class','startbox')
    grid.child(start)
    startsel = createSelect()
    startsel.attribute('class','startsel')
    start.child(startsel)

    dest = createDiv("Destination ")
    dest.attribute('class','destbox')
    grid.child(dest)
    destsel = createSelect()
    destsel.attribute('class','destsel')
    dest.child(destsel)

    //calculate button 
    calcbutton= createButton("Calculate")
    calcbutton.attribute('class','calculate')
    grid.child(calcbutton)

    //input node box with input and two button
    getNode = createDiv()
    getNode.attribute('class','getNodeBox')
    //getNode.position(500,500)
    
    inpNode = createInput('Enter node value');
    inpNode.input(addNodeInput);
    inpNode.attribute('class','nodeinput')
    getNode.child(inpNode)

    setNode= createButton("Set")
    setNode.attribute('class','setNodeB')
    getNode.child(setNode)

    delNode= createButton("Delete")
    delNode.attribute('class','setDelB')
    getNode.child(delNode)
    
    getNode.hide()

    getEdge = createDiv()
    getEdge.attribute('class','getEdgeBox')
    //getEdge.position(400,400)
    
    inpEdge = createInput('Enter Edge Value');
    inpEdge.input(addEdgeInput);
    inpEdge.attribute('class','edgeinput')
    getEdge.child(inpEdge)

    setEdge= createButton("Set")
    setEdge.attribute('class','setEdgeB')
    getEdge.child(setEdge)

    delEdge= createButton("Delete")
    delEdge.attribute('class','delEdgeB')
    getEdge.child(delEdge)

    getEdge.hide();

    noLoop()
}

function draw(){

    background(255);

    if (nodeValue != null) {
        console.log('peek')
        nodes.push(new Node(getNode.position().x, getNode.position().y, nodeValue, '#28fc03'))
        startsel.option(nodes[nodes.length - 1].showValue());
        destsel.option(nodes[nodes.length - 1].showValue())
    }

    for (var node of nodes) {
        node.display()
    }
}

function addNodeInput(){
    nodeValue = this.value()
}

function addEdgeInput(){
    edgeValue = this.value()
}

function addNode(){
    
    if (nodeValue != null) {
        console.log('sup')
        redraw()
        getNode.hide()
    }
}

function removeNode() {
    getNode.hide()
}

function create(){
    for(var node of nodes){
        if (node.isPressed()){
            isNodePressed = true;
            console.log(node.getX(),node.getY())
            
        }
    }
    if(!isNodePressed){
        getNode.position(mouseX,mouseY)
        getNode.show()
        setNode.mouseReleased(addNode)
        delNode.mouseReleased(removeNode)
    }
    else{
        isNodePressed = false;
    }

}