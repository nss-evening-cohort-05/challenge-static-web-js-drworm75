//Get a reference to the Grow Your Tree Button in the DOM
var buildButton = document.getElementById("build");
var sizeField = document.getElementById("size");
var charField = document.getElementById("character"); 


//Function runs when Grow Your Tree is clicked.  
function treeInfo () {
	//Gets value from size text
	var treeSize = document.getElementById("size").value;
	//Gets value from character text
	var treeCharacter = document.getElementById("character").value;
		//Checks to see if either text field is empty
		if (treeSize === "" || treeCharacter == "") {
			alert("Boths field must have a value!")
		} else {
			//creates object of form info
			var treeComponets = {	height: treeSize,
									char: treeCharacter };
			tree(treeComponets);
		}
}

function tree (treeComponets) {
	//i loop for height of tree
	for (var i = 0; i < treeComponets.height; i++) {
		var printTree = "";
		//j loop creates spaces
		for (var j = 0; j < (treeComponets.height - ( i + 1)); j++) {		
			printTree += " ";
		}
		//k loop creates characters
		for (var k = 0; k < ((i * 2) + 1); k++) {
			printTree += treeComponets.char
		}
		//print line created by j and k loops
		console.log(printTree);		
	}
}

//looks for enter button press
function checkBuild(e) {
	if(e && e.keyCode == 13) {
		treeInfo();
	}
}



buildButton.addEventListener("click", treeInfo);
sizeField.addEventListener("keyup", checkBuild);
charField.addEventListener("keyup", checkBuild);

