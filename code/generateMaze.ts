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
    //makePaths(maze, maze.nodes[0]);
}

function connectNodes(maze: MazeM, curNode: NodeM, location: number){
    let nodes: Array<NodeM> = maze.nodes;
    let cols: number = maze.width;
    curNode.visited = true;
    
    

    if(curNode.ValidN){
        let directionalNode: NodeM = nodes[location-cols];
        curNode.directions[Directions.North] = directionalNode;
        if(!directionalNode.visited){
            connectNodes(maze, directionalNode, location-cols);
        }
    }

    if(curNode.ValidE){
        let directionalNode = nodes[location+1]; 
        curNode.directions[Directions.East] = directionalNode;
        if(!directionalNode.visited){
            connectNodes(maze, directionalNode, location+1);
        }
        
    }

    if(curNode.ValidS){
        let directionalNode: NodeM = nodes[location+cols];
        curNode.directions[Directions.South] = directionalNode;
        if(!directionalNode.visited){
            connectNodes(maze, directionalNode, location+cols);
        }
        
    }

    if(curNode.ValidW){
        let directionalNode: NodeM = nodes[location-1];
        curNode.directions[Directions.West] = directionalNode;
        if(!directionalNode.visited){
            connectNodes(maze, directionalNode, location-1);
        }
    }

    curNode.visited = false;
}

function getRandomDirection(node: NodeM){
    let tempNode: NodeM;

    while(!tempNode){
        let index: number = Math.floor(Math.random()*4);
        tempNode = node.directions[index];
        if(!tempNode.visited){
            let tempIndex: number = node.walls.indexOf((index+2)%4);
            let lastIndex: number = node.walls.length -1;
            if(tempIndex != lastIndex){
                let holder: number = node.walls[lastIndex];
                node.walls[lastIndex] = node.walls[tempIndex];
                node.walls[tempIndex] = holder;
            }
            node.walls.pop();

            tempIndex = tempNode.walls.indexOf((index+2)%4);
            lastIndex = tempNode.walls.length -1;
            if(tempIndex != lastIndex){
                let holder: number = tempNode.walls[lastIndex];
                tempNode.walls[lastIndex] = tempNode.walls[tempIndex];
                tempNode.walls[tempIndex] = holder;
            }
            tempNode.walls.pop();
        }
    }
    
    return tempNode;
}

function makePaths(maze: MazeM, curNode: NodeM){
    curNode.visited = true;
    let north: boolean;
    let east: boolean;
    let south: boolean;
    let west: boolean;

    do{
        let randomDirection: NodeM = getRandomDirection(curNode);
        makePaths(maze, randomDirection);
        
        north = !curNode.directions[0].visited;
        east = !curNode.directions[1].visited;
        south = !curNode.directions[2].visited;
        west = !curNode.directions[3].visited;
    }while(north && east && south && west)
}

function toString(maze: MazeM){
    let nodes: Array<NodeM> = maze.nodes;
    let row : number = maze.height;
    let col : number = maze.width;

    let retString: string = "";
    let northSouth: string = "---";
    let noSouth: string = "  ";
    let eastWest: string = "| ";
    let noEast: string = " "

    retString += northSouth.repeat(col) + "\n";
    for(let i = 0; i < row; i++){
        let southString: string = "";
        retString += eastWest;
        for(let j = 0; j < col; j++){
            let node = nodes[i*col+j];
            let index = node.walls.indexOf(Directions.East);

            if(index != -1){
                retString += eastWest;
            }else{
                retString += noEast;
            }

            index = node.walls.indexOf(Directions.South);
            
            if(index != -1){
                southString += northSouth;
            }else{
                southString += noSouth;
            }
        }
        retString += eastWest + "\n" + southString + "\n";
    }
    retString += northSouth.repeat(col);
}

let maze: MazeM = {height: 3, width: 3};
intializeMazeNodes(maze);
let output = toString(maze);
console.log(output);