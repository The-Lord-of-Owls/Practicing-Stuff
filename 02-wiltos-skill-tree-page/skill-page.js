//Grab referances to important elements we need
const instructionsElement = document.getElementById("instructions")
const creationElement = document.getElementById("creation")
const instructOutputElement = document.getElementById("instructions-output")
const outputElement = document.getElementById("output")
		
//Text for instructions
const instructionText = "Use the options below to setup your skill tree for the Advance Lightsaber Combat System skill tree. For the Usergroups and Job Restrictions sections you do not have to add anything unless you want those restrictions in place."
const outputInstructionText = "Copy the following code into your skilltree file"

//Setup the page
instructionsElement.innerHTML = `<strong>${instructionText}</strong>`
outputElement.style.display = "none"
instructOutputElement.innerHTML = `<strong>${outputInstructionText}</strong>`
instructOutputElement.style.display = "none"
		
//Functionality
function addUsergroup(){}

function addJob(){}

function addTier(){}

function addSkill(){}

function generateSkilltree(){
	instructOutputElement.style.display = ""
	outputElement.style.display = ""
}