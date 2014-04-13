#pragma strict
var selected : boolean;

function Start () {
	selected = false;
}

function Update () {
	if (selected) {
		renderer.material.color = Color(1.0,0,0,0);
	}
	if (!selected) {
		renderer.material.color = Color(0.3,0.8,1.0,0);
	}
}