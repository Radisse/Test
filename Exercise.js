function insertText()
{
	document.getElementById("newContent").innerHTML = "Some new text: <br> Hello <br>";
}
function calculate()
{
	var t = widthBox.value;
	var w = document.getElementById("widthBox").value;
	var l = document.getElementById("lengthBox").value;
	var h = document.getElementById("heigthBox").value;
	
	w=parseFloat(w);
	h=parseFloat(h);
	l=parseFloat(l);
	var result = w*h*l;
	document.getElementById("result").innerHTML = "Resultatet er: " + result;
}