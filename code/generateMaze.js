"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utility_1 = require("./Utility");
function getRandomDirection(node) {
    var index = Math.floor(Math.random() * node.nonVisitedDirection.length);
    console.log(index);
    var retNode = node.nonVisitedDirection[index];
    node.nonVisitedDirection.splice(index, 1);
    var nonVisited = retNode.nonVisitedDirection;
    for (var i = 0; i < nonVisited.length; i++) {
        /*
        if(isEqual(node, nonVisited[i])){
            nonVisited.splice(i,1);
        }
            */
    }
    // may not be need
    //retNode.nonVisitedDirection = nonVisited;
    return retNode;
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
    makePaths(maze, maze.nodes[0]);
}
function connectNodes(maze, curNode, location) {
    var nodes = maze.nodes;
    var tempNonVisited = [];
    var cols = maze.width;
    curNode.visited = true;
    if (curNode.ValidN) {
        var directionalNode = nodes[location - cols];
        curNode.directions[Utility_1.Directions.North] = directionalNode;
        tempNonVisited.push(directionalNode);
        if (!directionalNode.visited) {
            connectNodes(maze, directionalNode, location - cols);
        }
    }
    if (curNode.ValidE) {
        var directionalNode = nodes[location + 1];
        curNode.directions[Utility_1.Directions.East] = directionalNode;
        tempNonVisited.push(directionalNode);
        if (!directionalNode.visited) {
            connectNodes(maze, directionalNode, location + 1);
        }
    }
    if (curNode.ValidS) {
        var directionalNode = nodes[location + cols];
        curNode.directions[Utility_1.Directions.South] = directionalNode;
        tempNonVisited.push(directionalNode);
        if (!directionalNode.visited) {
            connectNodes(maze, directionalNode, location + cols);
        }
    }
    if (curNode.ValidW) {
        var directionalNode = nodes[location - 1];
        curNode.directions[Utility_1.Directions.West] = directionalNode;
        tempNonVisited.push(directionalNode);
        if (!directionalNode.visited) {
            connectNodes(maze, directionalNode, location - 1);
        }
    }
    curNode.nonVisitedDirection = tempNonVisited;
    curNode.visited = false;
}
function makePaths(maze, curNode) {
    var randomDirection = getRandomDirection(curNode);
}
var maze = { height: 3, width: 3 };
intializeMazeNodes(maze);
var row = maze.height;
var col = maze.width;
var nodes = maze.nodes;
var output = "";
for (var i = 0; i < row * col; i++) {
    var tempNode = nodes[i];
    output += "Index: " + i + ": "; //+ "\n";
    /*
    output += "North: " + tempNode.ValidN;
    output += ", East: " + tempNode.ValidE;
    output += ", South: " + tempNode.ValidS;
    output += ", West: " + tempNode.ValidW;
    output += "\n";
    */
    var length_1 = tempNode.nonVisitedDirection.length;
    for (var j = 0; j < length_1; j++) {
        if (tempNode.nonVisitedDirection[j]) {
            output += j + "/" + (length_1 - 1) + ", ";
        }
    }
    output += "\n";
}
console.log(output);
