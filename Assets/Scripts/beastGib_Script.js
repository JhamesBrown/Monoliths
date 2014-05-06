#pragma strict
var dissolveTime : int;


function Start () {
	dissolveTime = Random.Range(1,5) + Time.time;
}

function Update () {
	if (Time.time >= dissolveTime) {
		Destroy(gameObject);
	}
}