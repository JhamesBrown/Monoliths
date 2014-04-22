#pragma strict
@HideInInspector var selected : boolean;
@HideInInspector var cameraController : cameraController_Script;
@HideInInspector var moving : boolean;
 var destination : Vector3;

 var deadZone = 0.5;

//var monolithClasses = new Array("soldier",  "heavy", "idol", "mender", "caterer", "blocker");
var monolithClasses : int;
var monolithClass : int;

var colour : Color;
var health : int;
var attack : int;
var speed : int = 4;




function Start () {

	//monolithClass = monolithClasses[Random.Range(0,5)];
	monolithClass = Random.Range(0,5);
	selected = false;
	moving = false;
	cameraController = GameObject.FindGameObjectWithTag("CameraController").GetComponent(cameraController_Script);
}

function Update () {
	
	if (moving == true) {
		var step = speed * Time.deltaTime;
		transform.position = Vector3.MoveTowards(transform.position, destination, step);
		if (Vector3.Distance(transform.position, destination) < deadZone) {
			moving = false;
		}
	}
	
	if (selected) {
		renderer.material.color = Color(1.0,0,0,0);
		
		var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	
	var hit : RaycastHit;
    if (Physics.Raycast (ray, hit,100.0)) {
    	
    	
		if (hit.transform.gameObject.tag == ("ground") && Input.GetMouseButtonDown(1)){ 
			destination = hit.point + Vector3(0.0, 0.9, 0.0);
			moving = true;
		}
		
		
	}
		

		
	}
	if (!selected) {
		renderer.material.color = colour;
	}
	
	
}

