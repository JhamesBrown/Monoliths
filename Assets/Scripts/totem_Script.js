#pragma strict
var selected : boolean;
var cameraController : cameraController_Script;

var deadZone = 0.15;
var speed = 1;

function Start () {
	selected = false;
	cameraController = GameObject.FindGameObjectWithTag("CameraController").GetComponent(cameraController_Script);
}

function Update () {
	if (selected) {
		renderer.material.color = Color(1.0,0,0,0);
		
		
		var v3 = cameraController.newPoint; // this is not really right, it needs to not ease as it gets near the point, and it needs to go to the point even when its not selected
    	v3.y = transform.position.y;
	    //if (Vector3.Distance(v3, cameraController.newPoint) > deadZone) {
	       transform.position = Vector3.Lerp(transform.position, v3, speed * Time.deltaTime);
	    //}
		
	}
	if (!selected) {
		renderer.material.color = Color(0.3,0.8,1.0,0);
	}
}