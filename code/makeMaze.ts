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
    //walls
    walls?: number[];
}

function getRandomModifiers(node: NodeM){
    return [0,0];
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
}

function connectNodes(maze: MazeM, curNode: NodeM, location: number){
    let nodes: Array<NodeM> = maze.nodes;
    let cols: number = maze.width;
    curNode.visited = true;
    

    if(curNode.ValidN){
        curNode.directions[Directions.North] = nodes[location-cols];

        if(!nodes[location-cols].visited){
            connectNodes(maze, maze.nodes[location-cols], location-cols);
        }
    }

    if(curNode.ValidE){
        curNode.directions[Directions.East] = nodes[location+1];
        if(!nodes[location+1].visited){
            connectNodes(maze, maze.nodes[location+1], location+1);
        }
        
    }

    if(curNode.ValidS){
        curNode.directions[Directions.South] = nodes[location+cols];
        if(!nodes[location+cols].visited){
            connectNodes(maze, maze.nodes[location+cols], location+cols);
        }
        
    }

    if(curNode.ValidW){
        curNode.directions[Directions.West] = nodes[location-1];
        if(!nodes[location-1].visited){
            connectNodes(maze, maze.nodes[location-1], location-1);
        }
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
    output += "North: " + tempNode.ValidN; 
    output += ", East: " + tempNode.ValidE; 
    output += ", South: " + tempNode.ValidS; 
    output += ", West: " + tempNode.ValidW; 
    output += "\n"
}

console.log(output);