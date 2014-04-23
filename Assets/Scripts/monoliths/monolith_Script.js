#pragma strict
@HideInInspector var selected : boolean;
@HideInInspector var cameraController : cameraController_Script;
@HideInInspector var gameManager : gameManager_Script;
@HideInInspector var moving : boolean;
@HideInInspector var destination : Vector3;
@HideInInspector var scrape : AudioClip;
@HideInInspector var deadZone = 0.5;


var monolithClass : int;
var colour : Color;
var health : int;
var attack : int;
var speed : int = 4;





function Start () {
	
	selected = false;
	moving = false;
	cameraController = GameObject.FindGameObjectWithTag("CameraController").GetComponent(cameraController_Script);
	gameManager = GameObject.FindGameObjectWithTag("GameManager").GetComponent(gameManager_Script);
	monolithClass = gameManager.monolithClass;
	cameraController.unselectMonoliths();
}

function Update () {
	if (moving == true) {
		if (!audio.isPlaying){		
			audio.Play();
		}
		var step = speed * Time.deltaTime;
		transform.LookAt(destination + Vector3(0.0, 0.1, 0.0));
		transform.position = Vector3.MoveTowards(transform.position, destination, step);
		if (Vector3.Distance(transform.position, destination) < deadZone) {
			audio.Stop();
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

