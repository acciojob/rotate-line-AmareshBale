//your JS code here. If required.
function rotateLine() {
	const line = document.getElementById("line");
	let currentAngle = parseInt(line.style.transform.replace('rotate(', '').replace('deg)', '')) || 0;
	currentAngle += 2;
	line.style.transform=`rotate(${currentAngle}deg)`;
	
}
setInterval(rotateLine,20)