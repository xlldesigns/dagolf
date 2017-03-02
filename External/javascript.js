function _(x){return document.getElementById(x);}
var ba, bi=0, intrvl;
var bca = [
    '<img src="Images/rotate1.jpg"/>',
	'<img src="Images/rotate2.jpg"/>',
	'<img src="Images/rotate3.jpg"/>',
	'<img src="Images/rotate4.jpg"/>',
	'<img src="Images/rotate5.jpg"/>'
];
function bubbles(bi){
	_("rotatingimages").style.opacity = 0;
	for(var i=0; i < ba.length; i++){
		ba[i].style.background = "rgba(0,0,0,.1)";
	}
	ba[bi].style.background = "white";
	setTimeout(function(){
		_("rotatingimages").innerHTML = bca[bi];
		_("rotatingimages").style.opacity = 1;
	}, 300);
}
function bubbleSlide(){
	bi++;
	if(bi == ba.length){
		bi = 0;
	}
	bubbles(bi);
}
window.addEventListener("load", function(){
	ba = _("bubbles").children;
	intrvl = setInterval(bubbleSlide, 3000);
});

//Modal
var img = document.getElementById('myImg1');
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;}
span.onclick = function() {modal.style.display = "none";}


//Contact Form
function checkform(){
	var firstname = document.getElementById('firstname').value;
	var firstnamebg = document.getElementById('firstname');
	var lastname = document.getElementById('lastname').value;
	var lastnamebg = document.getElementById('lastname');
	var commentarea = document.getElementById('commentarea').value;
	var commentareabg = document.getElementById('commentarea');
	
	if (firstname=="" || lastname==""){
		alert("Please fill out your name");
		return false;
	}else if(commentarea==""){
		alert("Please leave a comment");
		return false;
	}
}