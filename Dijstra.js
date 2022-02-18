let graph, source, destination,tank,top, max_size, dest_value, edge_weight
class PriorityQueue{
    constructor(max_size)
    {
        if(this.isNull(max_size))
        {
            max_size=10;
        }
        this.max_size=max_size;
        this.tank= [];
    }
    isEmpty()
    {
        return this.tank.length===0;
    }
    isFull()
    {
        return this.tank.length>=this.max_size;
    }
    enqueue(dest_value, edge_weight)
    {
        if(this.isFull())
        {   
            console.log("Queue is full");
            return;
        }
        let qElement= new this.Element(dest_value, edge_weight);
        let Added_to_queue=false;
        for (let i=0;i<this.tank.length;i++)
        {
            if (this.tank[i].edge_weight>qElement.edge_weight)
            {
                this.tank.splice(1,0,qEl)
            }
        }
        if(!Added_to_queue)
        {
            this.tank.push(qElement);
        }

    }
    PriorityQueue.prototype.Element = class {
        constructor(dest_value, edge_weight)
        {
            this.dest_value=dest_value;
            this.edge_weight=edge_weight;
        }
    }
}