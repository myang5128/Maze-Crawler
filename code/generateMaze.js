"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utility_1 = require("./Utility");
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
    //makePaths(maze, maze.nodes[0]);
}
function connectNodes(maze, curNode, location) {
    var nodes = maze.nodes;
    var cols = maze.width;
    curNode.visited = true;
    if (curNode.ValidN) {
        var directionalNode = nodes[location - cols];
        curNode.directions[Utility_1.Directions.North] = directionalNode;
        if (!directionalNode.visited) {
            connectNodes(maze, directionalNode, location - cols);
        }
    }
    if (curNode.ValidE) {
        var directionalNode = nodes[location + 1];
        curNode.directions[Utility_1.Directions.East] = directionalNode;
        if (!directionalNode.visited) {
            connectNodes(maze, directionalNode, location + 1);
        }
    }
    if (curNode.ValidS) {
        var directionalNode = nodes[location + cols];
        curNode.directions[Utility_1.Directions.South] = directionalNode;
        if (!directionalNode.visited) {
            connectNodes(maze, directionalNode, location + cols);
        }
    }
    if (curNode.ValidW) {
        var directionalNode = nodes[location - 1];
        curNode.directions[Utility_1.Directions.West] = directionalNode;
        if (!directionalNode.visited) {
            connectNodes(maze, directionalNode, location - 1);
        }
    }
    curNode.visited = false;
}
function getRandomDirection(node) {
    var tempNode;
    while (!tempNode) {
        var index = Math.floor(Math.random() * 4);
        tempNode = node.directions[index];
        if (!tempNode.visited) {
            var tempIndex = node.walls.indexOf((index + 2) % 4);
            var lastIndex = node.walls.length - 1;
            if (tempIndex != lastIndex) {
                var holder = node.walls[lastIndex];
                node.walls[lastIndex] = node.walls[tempIndex];
                node.walls[tempIndex] = holder;
            }
            node.walls.pop();
            tempIndex = tempNode.walls.indexOf((index + 2) % 4);
            lastIndex = tempNode.walls.length - 1;
            if (tempIndex != lastIndex) {
                var holder = tempNode.walls[lastIndex];
                tempNode.walls[lastIndex] = tempNode.walls[tempIndex];
                tempNode.walls[tempIndex] = holder;
            }
            tempNode.walls.pop();
        }
    }
    return tempNode;
}
function makePaths(maze, curNode) {
    curNode.visited = true;
    var north;
    var east;
    var south;
    var west;
    do {
        var randomDirection = getRandomDirection(curNode);
        makePaths(maze, randomDirection);
        north = !curNode.directions[0].visited;
        east = !curNode.directions[1].visited;
        south = !curNode.directions[2].visited;
        west = !curNode.directions[3].visited;
    } while (north && east && south && west);
}
function toString(maze) {
    var nodes = maze.nodes;
    var row = maze.height;
    var col = maze.width;
    var retString = "";
    var northSouth = "---";
    var noSouth = "  ";
    var eastWest = "| ";
    var noEast = " ";
    retString += northSouth.repeat(col) + "\n";
    for (var i = 0; i < row; i++) {
        var southString = "";
        retString += eastWest;
        for (var j = 0; j < col; j++) {
            var node = nodes[i * col + j];
            var index = node.walls.indexOf(Utility_1.Directions.East);
            if (index != -1) {
                retString += eastWest;
            }
            else {
                retString += noEast;
            }
            index = node.walls.indexOf(Utility_1.Directions.South);
            if (index != -1) {
                southString += northSouth;
            }
            else {
                southString += noSouth;
            }
        }
        retString += eastWest + "\n" + southString + "\n";
    }
    retString += northSouth.repeat(col);
}
var maze = { height: 3, width: 3 };
intializeMazeNodes(maze);
var output = toString(maze);
console.log(output);
