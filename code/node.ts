interface Node {
    solution?: boolean;
    x: number;
    y: number;
    north?: Node;
    east?: Node;
    south?: Node;
    west?: Node;
}

function setSolution(node: Node, sol: boolean){
    node.solution = sol;
}

function setDirectionalNode(origNode: Node, nextNode: Node, direction: number){

    switch(direction){
        case Directions.North:
            break;
        case Directions.East:
            break;
        case Directions.South:
            break;
        case Directions.West:
            br
        default:
            throw new Error("Invalid Direction: setDirectionalNode")
    }

}