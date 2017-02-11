var buildButton = document.getElementById("build");



function tree (clickEvent) {
	var treeSize = document.getElementById("size").value;
	var treeCharacter = document.getElementById("character").value;
	// console.log(treeCharacter);

	for (var i = 0; i < treeSize; i++) {
		var printTree = "";
		for (var j = 0; j < (treeSize - ( i + 1)); j++) {		
			printTree += " ";
		}
		for (var k = 0; k < ((i * 2) + 1); k++) {
			printTree += treeCharacter
		}
		console.log(printTree);


		
	}
}




buildButton.addEventListener("click", tree);


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