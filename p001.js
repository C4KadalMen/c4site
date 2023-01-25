var score = document.getElementById("score");
let point = 0;
score.innerHTML = point;

function isPressed()
{
	point++;
	console.log("FUCK YOU!");
	score.innerHTML = point;
}
