import {Node} from "./node.ts"

interface Maze{
    height: number;
    width: number;
    nodes?: Array<Node>;
    solutionPath?: Array<Node>;
    start?: readonly [number, number];
    end?: readonly [number, number];
}

function intializeNodes(maze: Maze){
    let y: number = maze.height;
    let x: number = maze.width;
    let tempList: Array<Node> = new Array<Node>;

    for(let i = 0; i < x; i++){
        for(let j = 0; j < y; j++){
            tempList.push({location: [i, j]});
        }
    }

    maze.nodes = tempList;

    // randomizes whether x/y has a random number
    let randomizeX1: boolean = !!(Math.round(Math.random()));
    // randomizes whether the one not chose from previous is then 0/(y-1 or x-1)
    let randomizeOther1: number = Math.round(Math.random());
    let randomNum;

    if(randomizeX1){
        randomNum = Math.floor(Math.random()*x);
        // [rand, 0] or [rand, y-1]
        maze.start = [randomNum, randomizeOther1*(y-1)];
    }else{
        randomNum = Math.floor(Math.random()*y);
        // [0, rand] or [x-1, rand]
        maze.start = [randomizeOther1*(x-1), randomNum];
    }

    let randomizeX2: boolean;
    let randomizeOther2: number;

    // ensures they the start end end are not on the same side
    do{
        // randomizes whether x/y has a random number
        randomizeX2 = !!(Math.round(Math.random()));
        // randomizes whether the one not chose from previous is then 0/(y-1 or x-1)
        randomizeOther2 = Math.round(Math.random());
    }while((randomizeX1 == randomizeX2) && (randomizeOther1 == randomizeOther2));


    if(randomizeX2){
        randomNum = Math.floor(Math.random()*x);
        // [rand, 0] or [rand, y-1]
        maze.end = [randomNum, randomizeOther1*(y-1)];
    }else{
        randomNum = Math.floor(Math.random()*y);
        // [0, rand] or [x-1, rand]
        maze.end = [randomizeOther1*(x-1), randomNum];
    }
}


function makeSolutionPath(maze: Maze){
    let stepsToEnd: number;
    let norths: number = 0, easts: number = 0, souths: number = 0, wests: number = 0;


}

function getDistance(loc1: [number, number], loc2 : [number, number]){
    return Math.abs(loc2[0] - loc1[0]) + Math.abs(loc2[1] - loc1[1]);
}