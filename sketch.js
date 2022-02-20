let isNodePressed = false
let nodes=[]
let nodeValue= null
let edges=[]
let setSrc = false, toBeEdged= false
let src, dest
let makeEdgeB = false;

function setup(){
    data = new graphh()
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
    calcbutton.mouseReleased(shortestpath);
    

    //input node box with input and two button
    getNode = createDiv()
    getNode.attribute('class','getNodeBox')
    //getNode.position(500,500)
    getNodePrompt = createDiv('Enter node value:')
    getNode.child(getNodePrompt)

    inpNode = createInput('Node');
    inpNode.input(addNodeInput);
    inpNode.attribute('class','nodeinput')
    getNode.child(inpNode)

    setNode= createButton("Set")
    setNode.attribute('class','setNodeB')
    getNode.child(setNode)

    delNode= createButton("Cancel")
    delNode.attribute('class','setDelB')
    getNode.child(delNode)
    
    getNode.hide()

    getEdge = createDiv()
    getEdge.attribute('class','getEdgeBox')
    //getEdge.position(400,400)
    getEdgePrompt = createDiv('Enter edge value:')
    getEdge.child(getEdgePrompt)

    inpEdge = createInput('Edge');
    inpEdge.input(addEdgeInput);
    inpEdge.attribute('class','edgeinput')
    getEdge.child(inpEdge)

    setEdge= createButton("Set")
    setEdge.attribute('class','setEdgeB')
    getEdge.child(setEdge)

    delEdge= createButton("Cancel")
    delEdge.attribute('class','delEdgeB')
    getEdge.child(delEdge)

    getEdge.hide();
    noLoop()
}

function draw(){

    background(255);

    if (toBeEdged) {
        console.log('Edge drawn')
        edges.push(new Edge(src, dest, edgeValue))
        toBeEdged = false
        setSrc = false
    }
    else{
        if (nodeValue != null) {
            console.log('Node drawn')
            nodes.push(new Node(getNode.position().x, getNode.position().y, nodeValue, '#aaae9f'))
            startsel.option(nodes[nodes.length - 1].getValue());
            destsel.option(nodes[nodes.length - 1].getValue());
        }
    }

    

    for (var node of nodes) {
        node.display()
        if(setSrc){
            src.outline();
        }
    }

    if (edges.length != 0) {
        for (var edge of edges) {
            console.log(edge.getSource().getX(), edge.getSource().getY(), edge.getDest().getX(), edge.getDest().getY())
            edge.display()
        }
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
        
        console.log('Node added to graph')
        data.add_node(nodeValue)
        redraw()
        inpNode.value(null);
        getNode.hide()
        console.log(data)
    }
}

function removeNodePrompt() {
    inpNode.value(null);
    getNode.hide()
}

function removeNode(node){
    
    inpNode.value(null);
    getNode.hide()
}

function removeEdge(){
    inpEdge.value(null);
    getEdge.hide()
}

function setEdgeValue(){
    
    if(edgeValue!= null){
        toBeEdged = true
        srcSet = false
        makeEdgeB= false;
    console.log('Edge added to graph')
    data.add_edge(src.getValue(),dest.getValue(),edgeValue)
    redraw()
    inpEdge.value(null);
    getEdge.hide()
    console.log(data)
}
}

function handleEdge(node){
    if(!setSrc){
        src = node;
        setSrc = true
        redraw()
    }
    else{
        dest = node;
        getEdge.position((src.getX()+dest.getX())*0.5,(src.getY()+dest.getY())*0.5)
        getEdge.show()
        setEdge.mouseReleased(setEdgeValue)
        delEdge.mouseReleased(removeEdge)
    }
}

function create(){
    for(var node of nodes){
        if (node.isPressed()){
            isNodePressed = true;
            console.log(node.getX(),node.getY())
            handleEdge(node)
            break
            
        }
    }
    if(!isNodePressed){
        setSrc = false
        getNode.position(mouseX,mouseY)
        getNode.show()
        setNode.mouseReleased(addNode)
        delNode.mouseReleased(removeNode)
    }
    else{
        isNodePressed = false;
    }

}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight-100);
  }

function shortestpath()
{
    startNode=startsel.option(nodes[nodes.length - 1].getValue());
    endNode=destsel.option(nodes[nodes.length - 1].getValue())
    let Dkstra=new Dijkstra(data, startNode, endNode);
    Dkstra.shortest_Path_Finder();
    console.log(Dkstra);

}