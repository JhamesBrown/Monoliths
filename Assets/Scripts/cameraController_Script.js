#pragma strict

	var scrollDistance : int = 5;
	var scrollSpeed : float = 10;
	var ray = new Ray ();
	var newPoint : Vector3;
	

function Start () {

}

function Update () {



// move viewpoint around when player pushes on the edge of the screen
	var mousePosX = Input.mousePosition.x;
	var mousePosY = Input.mousePosition.y;

	if (mousePosX < scrollDistance) { 
		transform.Translate(Vector3.right * -scrollSpeed * Time.deltaTime);
	}
	if (mousePosX >= Screen.width - scrollDistance) { 
		transform.Translate(Vector3.right * scrollSpeed * Time.deltaTime);
	}

	if (mousePosY < scrollDistance) {
		transform.Translate(Vector3.forward * -scrollSpeed * Time.deltaTime);
		}
	if (mousePosY >= Screen.height - scrollDistance) {
		transform.Translate(Vector3.forward * scrollSpeed * Time.deltaTime);
	}
	
	
	
// raycasting from camera controller tp point into the playing area

	var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	Debug.DrawRay (ray.origin, ray.direction * 100, Color.green);
	
	var hit : RaycastHit;
    if (Physics.Raycast (ray, hit,100.0)) {
    	//Debug.DrawLine (ray.origin, hit.point);
    	if (hit.transform.gameObject.tag == ("Monolith") && Input.GetMouseButtonDown(0)){
			if (Input.GetKey(KeyCode.LeftShift) != true) {
				unselectMonoliths(); 
			}		
        	hit.collider.gameObject.GetComponent(monolith_Script).selected = true;
		}
		if (hit.transform.gameObject.tag == ("ground") && Input.GetMouseButtonDown(0)){  //unselects all the monoliths if the player clicks on the ground
			unselectMonoliths();
				
		}

		
	}
	
}

function unselectMonoliths() {
	var monoliths = GameObject.FindGameObjectsWithTag("Monolith");
	for (var i : int = 0; i < monoliths.length; i++){
		monoliths[i].GetComponent(monolith_Script).selected = false;
	}
}