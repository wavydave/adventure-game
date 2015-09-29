//submit button function

//function submit (){
//call what is in the text field
//if 




var xCoord = 1;
var yCoord = 1;
function submitButton(){
	if(document.getElementById("directionInput").value ==="right"){
		moveRight(xCoord,yCoord);
	}
	else if(document.getElementById("directionInput").value ==="down"){
		moveDown(xCoord,yCoord);
	}
	else if(document.getElementById("directionInput").value ==="left"){
		moveLeft(xCoord,yCoord);
	}
	if(document.getElementById("directionInput").value ==="up"){
		moveUp(xCoord,yCoord);
	}
}
var moveRight = function (xCoord, yCoord){
	console.log('#'+'c'+ xCoord + (yCoord + 1));
	return('#' + 'c' + xCoord + yCoord);
}
var moveDown = function (xCoord, yCoord){
	console.log('c'+ (xCoord + 1)+ yCoord);
	return('#'+'c' + xCoord + yCoord);
}
var moveLeft = function (xCoord, yCoord){
	if (xCoord <= 0) {
		var xCoord = 0;	
		console.log('#' + 'c'+ xCoord + yCoord);
		return('#'+'c' + xCoord + yCoord);
		
	}
	else{
		console.log( '#' + 'c'+ xCoord+ (yCoord - 1));
	return('#' + 'c' + xCoord + yCoord);
	}
	
}

var moveUp = function (xCoord, yCoord){
	if (yCoord <= 0) {
		var yCoord = 0;	
		console.log('#'+'c'+ xCoord + yCoord);
		return('#'+'c' + xCoord + yCoord);
		
	}
	else{
		console.log('#'+'c'+ (xCoord - 1) + yCoord);
	return('#'+'c' + xCoord + yCoord);
	}
	
}
//var setId = function(direction){
	//document.getElementById(direction())").className("abe");
//
	


moveDown(xCoord, yCoord);
moveRight(xCoord, yCoord);
