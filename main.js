var buildButton = document.getElementById("build");

function buildTree (clickEvent) {
	var treeSize = document.getElementById("size").value;
	// console.log(treeSize);	
	var treeCharacter = document.getElementById("character").value;
	// console.log(treeCharacter);
	var printTree = "";
	
	for (var i = 0; i < treeSize; i++) {

		for (var j = 0; j < ((treeSize * 2) - 2); j++) {
			// console.log(treeSize - 1);
			// console.log("i =" + i);
			// console.log("j =" + j);
			console.log(i + j);
			if (j + i === (treeSize - 1) && (j + i) <= ((treeSize - 1) + j)) {
				printTree += treeCharacter;
			} else {
				printTree += "x";
				
			}
	}
		console.log(printTree);
}
}



buildButton.addEventListener("click", buildTree);