var buildButton = document.getElementById("build");
// var inputs = document.querySelectorAll("input[type=text]");


function treeInfo () {
	var treeSize = document.getElementById("size").value;
	var treeCharacter = document.getElementById("character").value;
		if (treeSize === "" || treeCharacter == "") {
			alert("Boths field must have a value!")
		} else {
			var treeComponets = {	height: treeSize,
									char: treeCharacter };
			tree(treeComponets);
		}
}




function tree (treeComponets) {

	for (var i = 0; i < treeComponets.height; i++) {
		var printTree = "";
		for (var j = 0; j < (treeComponets.height - ( i + 1)); j++) {		
			printTree += " ";
		}
		for (var k = 0; k < ((i * 2) + 1); k++) {
			printTree += treeComponets.char
		}
		console.log(printTree);


		
	}
}

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