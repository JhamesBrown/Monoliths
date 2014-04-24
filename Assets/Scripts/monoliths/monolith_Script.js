#pragma strict
// Scripts the monoliths(units) need to connect with when spawned
@HideInInspector var cameraController : cameraController_Script;
@HideInInspector var gameManager : gameManager_Script;

//interaction and unit states
@HideInInspector var selected : boolean;
@HideInInspector var moving : boolean;
@HideInInspector var destination : Vector3;
@HideInInspector var deadZone = 0.5;
@HideInInspector var scrape : AudioClip;

//properties: these are all assigned to the monolith by the monoliths properties script which should be applied to the prefab
var monolithClass : int;
var colour : Color;
var health : int;
var attack : int;
var speed : int = 4;

var selectedIndicator_Prefab : GameObject;
var selectedIndicator :GameObject;




function Start () {
// on start(spawn) the monoliths(units) set themselves to idle
// connect to the gameManager(to find out assigned class and connect to the worship(resource) variable
// connect to the cameraController(player viewport and input handler) to be ready to receive player commands
	
	selected = false;
	moving = false;
	cameraController = GameObject.FindGameObjectWithTag("CameraController").GetComponent(cameraController_Script);
	gameManager = GameObject.FindGameObjectWithTag("GameManager").GetComponent(gameManager_Script);
	monolithClass = gameManager.monolithClass;
	cameraController.unselectMonoliths();
	// Set main color to colour specified by classProperties_Script
	
}

function Update () {
	renderer.material.color = colour;

	if (moving == true && gameManager.worship >= 1) {
	//monolith will move and play movement sound if the player has given it a destination and has worship(resource) available
	
		if (!audio.isPlaying){	//movement sound start	
			audio.Play();
		}
		var step = speed * Time.deltaTime;
		transform.LookAt(destination + Vector3(0.0, 0.08, 0.0));
		transform.position = Vector3.MoveTowards(transform.position, destination, step);
		gameManager.worship --;
		if (Vector3.Distance(transform.position, destination) < deadZone) { // detects when player has reached destination and stops movement & sound
			audio.Stop();
			moving = false;
		}
	}
	if (gameManager.worship <= 0) { //when the player runs out of worship(resource) the monoliths will stop moving and playing movement sound
		audio.Stop();
		moving = false;
	}
	
	if (selected) {
		// selection indicator above the monoliths transform
		if (selectedIndicator == null) {
			selectedIndicator = Instantiate(selectedIndicator_Prefab, transform.position + Vector3(0,3,0), Quaternion.identity);
			selectedIndicator.transform.parent = transform;
		}
		var ray = Camera.main.ScreenPointToRay(Input.mousePosition); // makes a ray from player view into screen area
		var hit : RaycastHit; 
	    if (Physics.Raycast (ray, hit,100.0)) {
	    	
	    	
			if (hit.transform.gameObject.tag == ("ground") && Input.GetMouseButtonDown(1)){ //if monolith is selected and player Rclicks on ground it stores the position of the rayhit as its destination
				destination = hit.point + Vector3(0.0, 0.9, 0.0);
				moving = true;
			}
		}
	}
	if (!selected) { //removes selectedIndicator from above the monoliths transform
		if (selectedIndicator != null){
			Destroy(selectedIndicator);
		}
	}
}

