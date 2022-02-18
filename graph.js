let no_of_vertices,list_of_node_and_edges,new_node;
let ser, dest,val;
class graphh{
    constructor()
    {
        this.no_of_vertices=0;
        this.list_of_node_and_edges= new Map();
    }
    list_of_Vertices()
    {
        return this.list_of_node_and_edges.keys();
    }
    add_node(new_node)
    {
        this.list_of_node_and_edges.set(new_node,[]);
        this.no_of_vertices++;
        console.log('Node is added')
    }
    add_edge(src, dest,val)
    {
        let node_to_add=new Object();
        node_to_add["Value"]=dest;
        node_to_add["Weight"]=val;
        this.list_of_node_and_edges.get(src).push(node_to_add);
        console.log('Edge is added')
    }
}
let pear=new graphh();
pear.add_node(1);
pear.add_node(2);
pear.add_node(4);
pear.add_edge(1,2,7); //1:
pear.add_edge(2,3,4);
pear.add_edge(1,5,3);
console.log(pear);