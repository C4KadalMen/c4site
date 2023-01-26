var score = document.getElementById("score");
let point = 0;
score.innerHTML = point;

function isPressed()
{
	point++;
	score.innerHTML = point;
}

function resetScore()
{
	point = 0;
	score.innerHTML = point;
}
