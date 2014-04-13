#pragma strict

	var scrollDistance : int = 5;
	var scrollSpeed : float = 10;
	var ray = new Ray ();
	
	

function Start () {

}

function Update () {
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
	
	
	var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	Debug.DrawRay (ray.origin, ray.direction * 100, Color.green);
	
	var hit : RaycastHit;
    if (Physics.Raycast (ray, hit,100.0)) {
    	 Debug.DrawLine (ray.origin, hit.point);
    	 if (hit.transform.gameObject.tag == ("totemWarrior") && Input.GetMouseButtonDown(0)){
          print ("You clicked on the totem");
          hit.collider.gameObject.GetComponent(totem_Script).selected = true;
		}
		if (hit.transform.gameObject.tag == ("ground") && Input.GetMouseButtonDown(0)){
        	print ("You clicked on the ground");
        	var totems = GameObject.FindGameObjectsWithTag("totemWarrior");
			for (var i : int = 0; i < totems.length; i++){
				totems[i].GetComponent(totem_Script).selected = false;
			}
		}
		
	}
	
}