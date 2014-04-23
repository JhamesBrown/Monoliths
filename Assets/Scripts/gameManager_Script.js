#pragma strict
var monolith : GameObject;
var monolithClass : int;
var spawnLoaded : boolean;

var spawnPoint : Vector3;
@HideInInspector var cameraController : cameraController_Script;

function Start () {
	spawnLoaded = false;
	cameraController = GameObject.FindGameObjectWithTag("CameraController").GetComponent(cameraController_Script);
}

function Update () {
	if (spawnLoaded) {
		var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	
		var hit : RaycastHit;
	    if (Physics.Raycast (ray, hit,100.0)) {
	    	if (Input.GetMouseButtonDown(0)){ 
				spawnPoint = hit.point + Vector3(0.0, 0.9, 0.0);
				Instantiate(monolith, spawnPoint, Quaternion.Euler(Vector3(270,0,0)));
				spawnLoaded = false;				
			}			
		}
	}
}

function OnGUI() {
	if (GUI.Button(Rect (Screen.width-100,350,100,25), "soldier")){
		monolithClass = 0;
		spawnLoaded = true;
		cameraController.unselectMonoliths();
	 	return;
	}
	if (GUI.Button(Rect (Screen.width-100,375,100,25), "heavy")){
		monolithClass = 1;
		spawnLoaded = true;
		cameraController.unselectMonoliths();
		return;
	}
	if (GUI.Button(Rect (Screen.width-100,400,100,25), "idol")){
		monolithClass = 2;
		spawnLoaded = true;
		cameraController.unselectMonoliths();
		return;
	}
	if (GUI.Button(Rect (Screen.width-100,425,100,25), "mender")){
		monolithClass = 3;
		spawnLoaded = true;
		cameraController.unselectMonoliths();
		return;
	}
	if (GUI.Button(Rect (Screen.width-100,450,100,25), "caterer")){
		monolithClass = 4;
		spawnLoaded = true;
		cameraController.unselectMonoliths();
		return;
	}
	if (GUI.Button(Rect (Screen.width-100,475,100,25), "blocker")){
		monolithClass = 5;
		spawnLoaded = true;
		cameraController.unselectMonoliths();
		return;
	}
}