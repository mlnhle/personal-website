"uses strict";

window.onload=(event) =>{ 
    setup()
};
//Global array to store the course id's of items in the favorite list.
var favoriteclasses=[]
//The setup() function adds an event listener that runs the addClass(e) function for each button when it is clicked.
function setup() {
    var btns = document.querySelectorAll("input")
    btns.forEach(btn=>{
        btn.addEventListener("click",event =>{
            addClass(event);
        })
    })
}
//The addClass(e) function adds the user's favorite courses to the favorites list. Duplicates are not added. 
function addClass(e) {
    if (!(favoriteclasses.includes(e.target.id))){
        favoriteclasses.push(e.target.id);
		document.getElementById("AddFaveCourses").innerHTML += document.getElementById("Class" + e.target.id).outerHTML;
    }
}
/*Expand the assignment: I added a button on top of the course table, and when it is clicked, an interactive pop-up alert is prompted.
The end user inputs their name, and then they are presented with a greeting that tells them to take a look at the courses I have
taken.*/
function promptGreeting() {
	let text;
	let person = prompt("Please enter your name:", "Minh Le");
	if (person == null || person == "") {
	  text = "Wait, don't cancel :(";
	} else {
	  text = "Hello, " + person + "! Welcome to my Course Page. Feel free to browse through the courses I've taken!";
	}
	document.getElementById("demo").innerHTML = text;
  }