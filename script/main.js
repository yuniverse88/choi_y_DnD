// selcet your elements first 
//this is 1 to 1 connection
//let navButton = document.querySelector('#navButton');


// this is 1to many connection to an elements on the DOM
//

let navButtons = document.querySelectorAll('#buttonHolder img'),
    theHeadline = document.querySelector('#headLine h1'),
	puzzleBoard = document.querySelector
	('.puzzle-board');

// fuctions go in the middle

function changeBGImage() {
	debugger;
	//object.property = "new value"
	//theHeadline.textContent = "Drag and Drop is fun!";
	//theHeadline.style.color = "orange";
	//theHeadline.classList.add('orange-headline');

	//change the bgr img in the drop zone
	puzzleBoard.style.backgroundImage = 'url("../images/backGround"' + this.id + '"jpg")';
}

// event handling at the bottom
// how is the user going to interact with the elements / controls you provide?



//process a collection of elements and add an event handler to each
navButtons.forEach(button => button.addEventListener('click', changeBGImage));

// 1to 1
// navButton.addEventListener('click', changeBGImage);