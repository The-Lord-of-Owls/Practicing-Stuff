const slideShow = document.getElementById("slideshow");	//The element that displays the photo
const owlFacts = document.getElementById("owlfacts");	//Fact sheet element that displays facts about owls
const pauseButton = document.getElementById("pausebutton"); //Our pause button for the slideshow
const factSlider = document.getElementById("factslider");

const cycleDuration = 5000;		//We delay image changing by 5 seconds
let currentSheet = 0;			//The index of the currently displayed photo
const owlInfoSheets = [{		//The index to store owl facts and photos
		photo: "owls/one.png",
		fact: "Many owl species have asymmetrical ears. When located at different heights on the owl’s head, their ears are able to pinpoint the location of sounds in multiple dimensions. Ready, aim, strike."
	},{
		photo: "owls/two.png",
		fact: "The eyes of an owl are not true “eyeballs.” Their tube-shaped eyes are completely immobile, providing binocular vision which fully focuses on their prey and boosts depth perception."
	},{
		photo: "owls/three.png",
		fact: "Owls can rotate their necks 270 degrees. A blood-pooling system collects blood to power their brains and eyes when neck movement cuts off circulation."
	}
];

//We initialize our displayed content here
slideShow.src = owlInfoSheets[0].photo;
owlFacts.innerHTML = owlInfoSheets[0].fact;
pauseButton.innerHTML = "Pause?";
factSlider.max = owlInfoSheets.length-1;

//We will handle changing the slideshow here using a interval
let owlCyclePaused = false
setInterval(() => {
	if (!owlCyclePaused) {
		//Check if the next sheet is in the owlInfoSheets array
		if (currentSheet >= owlInfoSheets.length-1) {
			currentSheet = 0;
		} else {
			//If it is not, we cycle to the next sheet
			currentSheet++;
		}

		//Set the src for the slideshow element and our fact owlfact element
		slideShow.src = owlInfoSheets[currentSheet].photo;
		owlFacts.innerHTML = owlInfoSheets[currentSheet].fact;
		factSlider.value = currentSheet;
	}
}, cycleDuration);

function toggleCycle() {
	if (owlCyclePaused) {
		owlCyclePaused = false;
		pauseButton.innerHTML = "Pause?";
	} else {
		owlCyclePaused = true;
		pauseButton.innerHTML = "Resume?";
	}
}

function searchOwlFacts() {
	let nextSheet = factSlider.value;
	console.log(nextSheet)
	if ( owlInfoSheets[nextSheet] ) {
		owlCyclePaused = true;

		currentSheet = nextSheet;
		slideShow.src = owlInfoSheets[nextSheet].photo;
		owlFacts.innerHTML = owlInfoSheets[nextSheet].fact;
		pauseButton.innerHTML = "Resume?";
	}
}