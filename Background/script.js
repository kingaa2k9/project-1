var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var input=document.querySelector(".color3")
var body=document.getElementById("gradient");
var button=document.querySelector("button");
// var h2=document.querySelector("h2");


function setGradient(){
	body.style.background="linear-gradient(to right, "+color1.value+", "+color2.value+")";
}

function setc(){
	body.style.color="rgba(0,0,0,"+input.value+")";
	input.value=" ";
}

function keyc(e){
	if(e.which===13)
	{
		setc();
	}
}
setGradient();
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
button.addEventListener("click",setc);
input.addEventListener("keypress",keyc);
// console.log(css);
// console.log(color1);
// console.log(color2);