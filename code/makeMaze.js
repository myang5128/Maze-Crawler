"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utility_1 = require("./Utility");
function getRandomModifiers(node) {
    return [0, 0];
}
function intializeMazeNodes(maze) {
    var row = maze.height;
    var col = maze.width;
    var tempArr = new Array;
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            var tempWalls = [];
            var temp = {
                visited: false,
                directions: [null, null, null, null]
            };
            // intialize North and South directions
            if (i == 0) {
                temp.ValidN = false;
                temp.ValidS = true;
                tempWalls.push(Utility_1.Directions.South);
            }
            else if (i == row - 1) {
                temp.ValidS = false;
                temp.ValidN = true;
                tempWalls.push(Utility_1.Directions.North);
            }
            else {
                temp.ValidN = true;
                temp.ValidS = true;
                tempWalls.push(Utility_1.Directions.South);
                tempWalls.push(Utility_1.Directions.North);
            }
            // intialize West and East directions
            if (j == 0) {
                temp.ValidW = false;
                temp.ValidE = true;
                tempWalls.push(Utility_1.Directions.East);
            }
            else if (j == col - 1) {
                temp.ValidE = false;
                temp.ValidW = true;
                tempWalls.push(Utility_1.Directions.West);
            }
            else {
                temp.ValidW = true;
                temp.ValidE = true;
                tempWalls.push(Utility_1.Directions.West);
                tempWalls.push(Utility_1.Directions.East);
            }
            temp.walls = tempWalls;
            tempArr.push(temp);
        }
    }
    maze.nodes = tempArr;
    connectNodes(maze, maze.nodes[0], 0);
}
function connectNodes(maze, curNode, location) {
    console.log(location);
    var nodes = maze.nodes;
    var cols = maze.width;
    curNode.visited = true;
    if (curNode.ValidN) {
        curNode.directions[Utility_1.Directions.North] = nodes[location - cols];
        if (!nodes[location - cols].visited) {
            connectNodes(maze, maze.nodes[location - cols], location - cols);
        }
    }
    if (curNode.ValidE) {
        curNode.directions[Utility_1.Directions.East] = nodes[location + 1];
        if (!nodes[location + 1].visited) {
            connectNodes(maze, maze.nodes[location + 1], location + 1);
        }
    }
    if (curNode.ValidS) {
        curNode.directions[Utility_1.Directions.South] = nodes[location + cols];
        if (!nodes[location + cols].visited) {
            connectNodes(maze, maze.nodes[location + cols], location + cols);
        }
    }
    if (curNode.ValidW) {
        curNode.directions[Utility_1.Directions.West] = nodes[location - 1];
        if (!nodes[location - 1].visited) {
            connectNodes(maze, maze.nodes[location - 1], location - 1);
        }
    }
}
function makePaths(maze) {
}
var maze = { height: 3, width: 3 };
intializeMazeNodes(maze);
var row = maze.height;
var col = maze.width;
var nodes = maze.nodes;
var output = "";
for (var i = 0; i < row * col; i++) {
    var tempNode = nodes[i];
    output += "Index: " + i + "\n";
    output += "North: " + tempNode.ValidN;
    output += ", East: " + tempNode.ValidE;
    output += ", South: " + tempNode.ValidS;
    output += ", West: " + tempNode.ValidW;
    output += "\n";
}
console.log(output);
