import {Directions} from "./Utility";

interface MazeM{
    height: number;
    width: number;
    nodes?: Array<NodeM>;
}

interface NodeM{
    visited: boolean;
    // the nodes in each direction north, east, south, west
    directions: [NodeM, NodeM, NodeM, NodeM];
    nonVisitedDirection?: NodeM[];

    // If in the maze
    ValidN?: boolean;
    ValidE?: boolean;
    ValidS?: boolean;
    ValidW?: boolean;
    //walls
    walls?: number[];
}

function getRandomDirection(node: NodeM){
    let index: number = Math.floor(Math.random()*node.nonVisitedDirection.length);
    console.log(index);
    let retNode: NodeM = node.nonVisitedDirection[index];
    node.nonVisitedDirection.splice(index, 1);
    let nonVisited: NodeM[] = retNode.nonVisitedDirection;
    for(let i = 0; i < nonVisited.length; i++){
        /*
        if(_.isEqual(node, nonVisited[i])){
            nonVisited.splice(i,1);
        }
            */
    }
    // may not be need
    //retNode.nonVisitedDirection = nonVisited;
    return retNode;
}

function intializeMazeNodes(maze: MazeM){
    let row: number =  maze.height;
    let col: number = maze.width;
    let tempArr: Array<NodeM> = new Array<NodeM>;
    

    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            let tempWalls: number[] = [];
            let temp: NodeM ={
                visited: false, 
                directions: [null, null, null, null]
            };

            // intialize North and South directions
            if(i == 0){
                temp.ValidN = false;
                temp.ValidS = true;
                tempWalls.push(Directions.South);
            }else if (i == row-1){
                temp.ValidS = false;
                temp.ValidN = true;
                tempWalls.push(Directions.North);
            }else{
                temp.ValidN = true;
                temp.ValidS = true;
                tempWalls.push(Directions.South);
                tempWalls.push(Directions.North);
            }

            // intialize West and East directions
            if(j == 0){
                temp.ValidW = false;
                temp.ValidE = true;
                tempWalls.push(Directions.East);
            }else if (j == col-1){
                temp.ValidE = false;
                temp.ValidW = true;
                tempWalls.push(Directions.West);
            }else{
                temp.ValidW = true;
                temp.ValidE = true;
                tempWalls.push(Directions.West);
                tempWalls.push(Directions.East);
            }
            temp.walls = tempWalls;
            tempArr.push(temp);
        }
    }
    maze.nodes = tempArr;
    connectNodes(maze, maze.nodes[0], 0);
    makePaths(maze, maze.nodes[0]);
}

function connectNodes(maze: MazeM, curNode: NodeM, location: number){
    let nodes: Array<NodeM> = maze.nodes;
    let tempNonVisited: NodeM[] = [];
    let cols: number = maze.width;
    curNode.visited = true;
    
    

    if(curNode.ValidN){
        let directionalNode: NodeM = nodes[location-cols];
        curNode.directions[Directions.North] = directionalNode;
        tempNonVisited.push(directionalNode);
        if(!directionalNode.visited){
            connectNodes(maze, directionalNode, location-cols);
        }
    }

    if(curNode.ValidE){
        let directionalNode = nodes[location+1]; 
        curNode.directions[Directions.East] = directionalNode;
        tempNonVisited.push(directionalNode);
        if(!directionalNode.visited){
            connectNodes(maze, directionalNode, location+1);
        }
        
    }

    if(curNode.ValidS){
        let directionalNode: NodeM = nodes[location+cols];
        curNode.directions[Directions.South] = directionalNode;
        tempNonVisited.push(directionalNode);
        if(!directionalNode.visited){
            connectNodes(maze, directionalNode, location+cols);
        }
        
    }

    if(curNode.ValidW){
        let directionalNode: NodeM = nodes[location-1];
        curNode.directions[Directions.West] = directionalNode;
        tempNonVisited.push(directionalNode);
        if(!directionalNode.visited){
            connectNodes(maze, directionalNode, location-1);
        }
    }

    curNode.nonVisitedDirection = tempNonVisited;
    curNode.visited = false;
}

function makePaths(maze: MazeM, curNode: NodeM){
    let randomDirection: NodeM = getRandomDirection(curNode);


}

let maze: MazeM = {height: 3, width: 3};
intializeMazeNodes(maze);
let row: number = maze.height;
let col: number = maze.width;
let nodes: Array<NodeM> = maze.nodes;
let output: string = "";

for(let i = 0; i < row*col; i++){
    let tempNode: NodeM = nodes[i];
    
    output += "Index: " + i + ": "; //+ "\n";
    /*
    output += "North: " + tempNode.ValidN; 
    output += ", East: " + tempNode.ValidE; 
    output += ", South: " + tempNode.ValidS; 
    output += ", West: " + tempNode.ValidW; 
    output += "\n";
    */

    let length = tempNode.nonVisitedDirection.length;
    for(let j = 0; j < length; j++){
        if(tempNode.nonVisitedDirection[j]){
            output += j + "/" + (length-1) + ", ";
        }
    }
    output += "\n";
}

console.log(output);
