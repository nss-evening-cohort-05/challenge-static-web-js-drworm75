var buildButton = document.getElementById("build");

function buildTree (clickEvent) {
	var treeSize = document.getElementById("size").value;
	console.log(treeSize);	
	var treeCharacter = document.getElementById("character").value;
	console.log(treeCharacter);
}



buildButton.addEventListener("click", buildTree);