function intializeMaze(maze) {
    var row = maze.height;
    var col = maze.width;
    var tempArr = new Array;
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            var temp = { visited: false };
            // intialize North and South directions
            if (i == 0) {
                temp.WallN = true;
                temp.WallS = false;
            }
            else if (i == row - 1) {
                temp.WallS = true;
                temp.WallN = false;
            }
            else {
                temp.WallN = false;
                temp.WallS = false;
            }
            // intialize West and East directions
            if (j == 0) {
                temp.WallW = true;
                temp.WallE = false;
            }
            else if (j == col - 1) {
                temp.WallE = true;
                temp.WallW = false;
            }
            else {
                temp.WallW = false;
                temp.WallE = false;
            }
            tempArr.push(temp);
        }
    }
    maze.nodes = tempArr;
}
var maze = { height: 3, width: 3 };
intializeMaze(maze);
var row = maze.height;
var col = maze.width;
var nodes = maze.nodes;
var output = "";
for (var i = 0; i < row * col; i++) {
    var tempNode = nodes[i];
    output += "Index: " + i + "\n";
    output += "North: " + tempNode.WallN;
    output += ", East: " + tempNode.WallE;
    output += ", South: " + tempNode.WallS;
    output += ", West: " + tempNode.WallW;
    output += "\n";
}
console.log(output);
