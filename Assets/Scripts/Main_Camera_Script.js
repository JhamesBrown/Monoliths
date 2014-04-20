#pragma strict
var cameraController : Transform;
var deadZone = 0.15;
var speed = 5;



function Start () {
	cameraController = GameObject.Find("cameraController").transform;
}

function Update () {
if (cameraController != null){
    var v3 = cameraController.position;
    v3.y = transform.position.y;
    if (Vector3.Distance(v3, cameraController.position) > deadZone) {
       transform.position = Vector3.Lerp(transform.position, v3, speed * Time.deltaTime);
    }
}
	else {
		transform.position = Vector3(0,-20, 0);
	}

	
	
}