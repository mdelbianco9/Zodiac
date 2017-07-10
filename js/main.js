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
	first: "Aries",
	attributes: "Honest, Courageous, Passionate, Optimistic, Determined",
	image: ""
},
{
	first: "Taurus",
	attributes: "Patient, Reliable, Devoted, Responsible, Stable",
	image: ""
},
{
	first: "Gemini",
	attributes: "Gentle, Curious, Adaptable, Affectionate, Learns Quickly",
	image: ""
},
{
	first: "Cancer",
	attributes: "Loyal, Emotional, Sympathetic, Tenacious, Persuastive",
	image: ""
},
{
	first: "Leo",
	attributes: "Creative, Passionate, Generous, Warm-hearted, Cheerful",
	image: ""
},
{
	first: "Virgo",
	attributes: "Loyal, Analytical, Kind, Hardworking, Practical",
	image: ""
},
{
	first: "Libra",
	attributes: "Cooperative, Social, Fair-minded, Diplomatic, Gracious",
	image: ""
},
{
	first: "Scorpio",
	attributes: "Brave, Passionate, Recourceful, Stubborn, True friend",
	image: ""
},
{
	first: "Sagittarius",
	attributes: "Generous, Idealistic, Sense of Humor, Adventurous, Enthusiastic",
	image: ""
},
{
	first: "Caricorn",
	attributes: "Disiplined, Responsible, Self-control, Independant, Leader",
	image: ""
},
{
	first: "Aquarius",
	attributes: "Humanitarian, Progressive, Original, Loving, Intellectual",
	image: ""
},
{
	first: "Pisces",
	attributes: "Intuitive, Artistic, Gentle, Wise, Musical",
	image: ""
}
];

// The onclick function() that will take the input and display data


// Function that displays the input values
// var myfunc = function clickme () {
// 	for (var i = 0; i < array.length; i++){
// 	var inputdata = document.getElementById("sign-input");
// 	var signname = document.getElementById("sign-name");
// 	console.log(signname.value);
// }
// };
 // if (inputdata.value == array.first) {
 // 	console.log(array.first);
 // 	console.log(array.attributes);
 // }

// displays the value from a property in the object
 for (var i = 0; i < array.length; i++){
 	console.log(array[2].attributes);
 	// below code needs a function

 		function myfunction() {
 			// goes and gets value of entered text
 			var inputdata = document.getElementById("sign-input").value;
 			// compares input text value to value of the array.first
 	if (inputdata == "leo") 
 			document.getElementById("entertext").innerHTML = "This is the value entered" + inputdata;
 	};}
 	// above code needs and an if else statment to get a value from array if certian word is typed
 	document.getElementById("sign-info").innerHTML = array[4].attributes;
 	document.getElementById("sign-name").innerHTML = array[4].first;
 



// if the value of the input matches a value of the array sign, then display the value of the array




// for ( var i = 0; i < sign.length; i++)
// 	function clickme () {
// 		// this gets the input from user
// 		var input = document.getElementById("sign-input");
// 		// this will be the name displayed when button is clicked
// 		var display = document.getElementById("sign-name");
// 			if (input.value == sign[i]) {
// 			console.log("The sign is" + input.value);
// 			};
// 	};	
// };

// function myfunc () {
// 	for ( var i = 0; i < array.length; i++) {

// 	}
// }






