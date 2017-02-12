//Get a reference to the Grow Your Tree Button in the DOM
var buildButton = document.getElementById("build"); 


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



// inputs.addEventListener("keyup", function (event){
// 	if (event.keyCode == 13) {
// 		buildButton.click();
// 	}
// });

// document.onkeypress = function (e) {
//  e = e || window.event;
//  var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
//  if (charCode == 13) {

//         // Do something here
//         treeInfo();
//     }
// };


//  buildButton
//  	.addEventListener("keyup", treeInfo) {
//     event.preventDefault();
//     if (event.keyCode == 13) {
//         buildButton.click();
//     }
// };


//Tree with orniments
// var buildButton = document.getElementById("build");

// function buildTree (clickEvent) {
// 	var treeSize = document.getElementById("size").value;
// 	var treeCharacter = document.getElementById("character").value;
// 	// console.log(treeCharacter);

// 	for (var i = 0; i < treeSize; i++) {
// 		var printTree = "";
// 		for (var j = 0; j < (treeSize - ( i + 1)); j++) {		
// 			printTree += " ";
// 		}
// 		for (var k = 0; k < ((i * 2) + 1); k++) {
// 			if (k % 2 !== 0 && i % 2 !== 0) {
// 				printTree += "o"
// 			} else {
// 				printTree += treeCharacter
// 			}
// 		}
// 		console.log(printTree);


		
// 	}
// }




// buildButton.addEventListener("click", buildTree);