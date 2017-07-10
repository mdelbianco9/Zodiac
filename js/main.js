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




 	// the problem is that  the if statment is not listening correctly. The function is just doing the "if ststments" return elements. 
 	// "for loop" is working
 	// "myfunction" wont restart after it returns correct value
function myfunction() {
	// 
	for (var i = 0; i < array.length; i++){
 		// goes and gets value of entered text
 		var inputdata = document.getElementById("sign-input").value;
 // compares input text value to value of a sign name
 	if (inputdata == "aries") {
 		console.log("Aries is working")
 		// Displays Name of sign
 		document.getElementById("sign-name").innerHTML = array[0].first;
 		// Displays image

 		// Displays Lits of Attributes
 		document.getElementById("sign-info").innerHTML = array[0].attributes;
 	}
 	else if (inputdata == "taurus") {
 		console.log("Taurus is working");
 		// Displays Name of sign
 		document.getElementById("sign-name").innerHTML = array[1].first;
 		// Displays image

 		// Displays Lits of Attributes
 		document.getElementById("sign-info").innerHTML = array[1].attributes;
 	}
 	else if (inputdata == array[i].first) {
 		console.log("Pulling from array works");
 		// Displays Name of sign
 		document.getElementById("sign-name").innerHTML = array[i].first;
 		// Displays image

 		// Displays Lits of Attributes
 		document.getElementById("sign-info").innerHTML = array[i].attributes;
 	}

 		
 	}};
 	
 










