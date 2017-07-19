// These words are the trigger to tell the function what to display.
var sign = ["aries", 
			"taurus", 
			"gemini", 
			"cancer", 
			"leo", 
			"virgo", 
			"libra", 
			"scorpio", 
			"sagittarius", 
			"capricorn", 
			"aquarius", 
			"pisces"
			];
// The characteristics of each sign in the form of an object with 5 names
var array = [{
	first: "ARIES",
	birth: "March 21 - April 19",
	attributes: "Honest, Courageous, Passionate, Optimistic, Determined",
	compatible: "Gemini, Leo, Sagittarius, Aquarius",
	image: "img/aries.jpg"
},
{
	first: "TAURUS",
	birth: "April 21 - May 20",
	attributes: "Patient, Reliable, Devoted, Responsible, Stable",
	compatible: "Cancer, Virgo, Capricorn, Pisces",
	image: "img/taurus.png"
},
{
	first: "GEMINI",
	birth: "May 21 - June 20",
	attributes: "Gentle, Curious, Adaptable, Affectionate, Learns Quickly",
	compatible: "Aries, Leo, Libra, Aquarius",
	image: "img/gemini.jpg"
},
{
	first: "CANCER",
	birth: "June 21 - July 22",
	attributes: "Loyal, Emotional, Sympathetic, Tenacious, Persuastive",
	compatible: "Taurus, Virgo, Scorpio, Pisces",
	image: "img/cancer.jpg"
},
{
	first: "LEO",
	birth: "July 23 - August 22",
	attributes: "Creative, Passionate, Generous, Warm-hearted, Cheerful",
	compatible: "Aries, Gemini, Libra, Sagittarius",
	image: "img/leo.jpg",
},
{
	first: "VIRGO",
	birth: "August 23 - September 22",
	attributes: "Loyal, Analytical, Kind, Hardworking, Practical",
	compatible: "Taurus, Cancer, Scorpio, Capricorn",
	image: "img/virgo.jpg"
},
{
	first: "LIBRA",
	birth: "September 23 - October 22",
	attributes: "Cooperative, Social, Fair-minded, Diplomatic, Gracious",
	compatible: "Gemini, Leo, Sagittarius, Aquarius",
	image: "img/libra.jpg"
},
{
	first: "SCORPIO",
	birth: "October 23 - November 21",
	attributes: "Brave, Passionate, Recourceful, Stubborn, True friend",
	compatible: "Cancer, Virgo, Capricorn, Pisces",
	image: "img/scorpio.jpg"
},
{
	first: "SAGITTARIUS",
	birth: "November 22 - December 21",
	attributes: "Generous, Idealistic, Sense of Humor, Adventurous, Enthusiastic",
	compatible: "Aries, Leo, Libra, Aquarius",
	image: "img/sagittarius.jpg"
},
{
	first: "CAPRICORN",
	birth: "December 22 - January 19",
	attributes: "Disiplined, Responsible, Self-control, Independant, Leader",
	compatible: "Taurus, Virgo, Scorpio, Pisces",
	image: "img/capricorn.jpg"
},
{
	first: "AQUARIUS",
	birth: "January 20 - February 18",
	attributes: "Humanitarian, Progressive, Original, Loving, Intellectual",
	compatible: "Aries, Gemini, Libra, Sagittarius",
	image: "img/aquarius.jpg"
},
{
	first: "PISCES",
	birth: "February 19 - March 20",
	attributes: "Intuitive, Artistic, Gentle, Wise, Musical",
	compatible: "Taurus, Cancer, Scorpio, Capricorn",
	image: "img/pisces.jpg"
}
];


// Triggers the function if the enter key is pressed
var hello = document.getElementById('sign-input');
hello.addEventListener('keypress', function enterKey(e) {
	if(e.keyCode == 13) {
		myfunction();
	};
}, false);

// focuses on input after 3 seconds
setTimeout(function(){$("#sign-input").focus(); }, 1000);

// Function to display info for user
function myfunction() {
	// Loops through the array to find the correct sign name 
	for (var i = 0; i < array.length; i++){
 		// goes and gets value of entered text
 		var inputdata = document.getElementById("sign-input").value;
 	// compares input text value to value of a sign name
 	if (inputdata.toUpperCase() === array[i].first) {
 		console.log("Pulling from array works");
 		// Displays Name of sign
 		document.getElementById("sign-name").innerHTML = array[i].first;
 		// Displays birthdates of each sign
 		document.getElementById("birth-dates").innerHTML = array[i].birth;
 		// Displays Lists of Attributes
 		document.getElementById("sign-info").innerHTML = array[i].attributes;
 		// Displays the compatability
 		document.getElementById("compat").innerHTML = "Best compatability: " + array[i].compatible;
 		// Displays image
 		document.getElementById("sign-image").src = array[i].image;
 		document.getElementById("sign-image").width = "300";
 		document.getElementById("sign-image").height = "300";
 		// Allows the function to restart
 		return;

 	};



 	// If "if" statment fails this will be done
 	console.log("no matches found")
 	document.getElementById("sign-name").innerHTML = "Sorry, No Matches Found"
 	document.getElementById("birth-dates").innerHTML = "";
 	document.getElementById("sign-image").src = "";
 	document.getElementById("sign-info").innerHTML = "";
 	document.getElementById("compat").innerHTML = "";
 	};
 };

document.getElementById("taurus").addEventListener("click", function(){
    document.getElementById("sign-name").innerHTML = array[i].first;
 		// Displays birthdates of each sign
 		document.getElementById("birth-dates").innerHTML = array[i].birth;
 		// Displays Lists of Attributes
 		document.getElementById("sign-info").innerHTML = array[i].attributes;
 		// Displays the compatability
 		document.getElementById("compat").innerHTML = "Best compatability: " + array[i].compatible;
 		// Displays image
 		document.getElementById("sign-image").src = array[i].image;
 		document.getElementById("sign-image").width = "300";
 		document.getElementById("sign-image").height = "300";
});

// This function allows the user to select a date to find their sign
   var datefunc = $("li").click(function(event) {
    	// returns the id of the li that is clicked on
        console.log(event.target.id);
       	var myid = event.target.id; 
       	for (i = 0; i < sign.length; i++) {
       		if (myid == sign[i]) {
       		document.getElementById("sign-name").innerHTML = array[i].first;
 			// Displays birthdates of each sign
 			document.getElementById("birth-dates").innerHTML = array[i].birth;
 			// Displays Lists of Attributes
 			document.getElementById("sign-info").innerHTML = array[i].attributes;
 			// Displays the compatability
 			document.getElementById("compat").innerHTML = "Best compatability: " + array[i].compatible;
 			// Displays image
 			document.getElementById("sign-image").src = array[i].image;
 			document.getElementById("sign-image").width = "300";
 			document.getElementById("sign-image").height = "300";;
 			$("#sign-input").focus();
 			// document.getElementById("dropdownul").style.visibility = "hidden";

 			return;
       		}
       	}
       	
    });





