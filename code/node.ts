import {Directions} from "./Utility.ts";
export interface Node {
    solution?: boolean;
    location: readonly [number, number];
    north?: Node;
    east?: Node;
    south?: Node;
    west?: Node;
}

/**
 * 
 * @param node a node object
 * @returns a tuple with the xy coordinates 
 */
function getLocation(node: Node){
    return node.location;
}

/**
 * 
 * @param node the node object which we will be modifying 
 * @param sol whether this node object is considered to be on the solution path
 */
function setSolution(node: Node, sol: boolean){
    node.solution = sol;
}

/**
 * 
 * @param origNode the node object which we will be modifying 
 * @param nextNode a node object which will be pointed to by the original node
 * @param direction the direction nextNode will be considered to be
 */
function setDirectionalNode(origNode: Node, nextNode: Node, direction: number){
    switch(direction){
        case Directions.North:
            origNode.north = nextNode;
            break;
        case Directions.East:
            origNode.east = nextNode;
            break;
        case Directions.South:
            origNode.south = nextNode;
            break;
        case Directions.West:
            origNode.west = nextNode;
            break;
        default:
            throw new Error("Invalid Direction: setDirectionalNode")
    }

}