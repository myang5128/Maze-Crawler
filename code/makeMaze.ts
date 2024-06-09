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

    // If in the maze
    ValidN?: boolean;
    ValidE?: boolean;
    ValidS?: boolean;
    ValidW?: boolean;

    // If directoin is blocked by a wall
    WallN: boolean;
    WallE: boolean;
    WallS: boolean;
    WallW: boolean;
}

function getRandomModifiers(node: NodeM){
    return [0,0];
}

function intializeMazeNodes(maze: MazeM){
    let row: number =  maze.height;
    let col: number = maze.width;
    let tempArr: Array<NodeM> = new Array<NodeM>;
    let tempValidArr: [boolean, boolean, boolean, boolean];

    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            let temp: NodeM ={
                visited: false, 
                directions: [null, null, null, null], 
                WallN: true, 
                WallE: true, 
                WallS: true,
                WallW: true
            };

            // intialize North and South directions
            if(i == 0){
                temp.ValidN = false;
                temp.ValidS = true;
            }else if (i == row-1){
                temp.ValidS = false;
                temp.ValidN = true;
            }else{
                temp.ValidN = true;
                temp.ValidS = true;
            }

            // intialize West and East directions
            if(j == 0){
                temp.ValidW = false;
                temp.ValidE = true;
            }else if (j == col-1){
                temp.ValidE = false;
                temp.ValidW = true;
            }else{
                temp.ValidW = true;
                temp.ValidE = true;
            }

            tempArr.push(temp);
        }
    }
    maze.nodes = tempArr;
    connectNodes(maze, nodes[0], 0);
}

function connectNodes(maze: MazeM, curNode: NodeM, location: number){
    let nodes: Array<NodeM> = maze.nodes;

    if(!curNode.ValidN){
        curNode.directions[Directions.North] = nodes[location-8];
        connectNodes(maze, nodes[location-8], location-8);
    }

    if(!curNode.ValidE){
        curNode.directions[Directions.East] = nodes[location+1];
        connectNodes(maze, nodes[location+1], location+1);
    }

    if(!curNode.WallS){
        curNode.directions[Directions.South] = nodes[location+8];
        connectNodes(maze, nodes[location+8], location+8);
    }

    if(!curNode.WallW){
        curNode.directions[Directions.West] = nodes[location-1];
        connectNodes(maze, nodes[location-1], location-1);
    }

}

function makePaths(maze: MazeM){

}

let maze: MazeM = {height: 3, width: 3};
intializeMazeNodes(maze);
let row: number = maze.height;
let col: number = maze.width;
let nodes: Array<NodeM> = maze.nodes;
let output: string = "";

for(let i = 0; i < row*col; i++){
    let tempNode: NodeM = nodes[i];
    output += "Index: " + i + "\n"
    output += "North: " + tempNode.WallN; 
    output += ", East: " + tempNode.WallE; 
    output += ", South: " + tempNode.WallS; 
    output += ", West: " + tempNode.WallW; 
    output += "\n"
}

console.log(output);