#pragma strict
var closest : GameObject;
var closestDist = Mathf.Infinity;
var speed : int = 5;

function Start () {

}

function Update () {
 	villagerFind(transform.position, 40);
 	if (closest == null) {
 		closestDist = Mathf.Infinity;
 	}
 	
 	if (closest != null) {
 	var step = speed * Time.deltaTime;
		transform.LookAt(closest.transform.position + Vector3(0.0, 1.0, 0.0));
		transform.position = Vector3.MoveTowards(transform.position, closest.transform.position + Vector3(0.0, 1.0, 0.0), step);
	}
}

function villagerFind(center : Vector3 , radius : float) {
		var hitColliders = Physics.OverlapSphere(center, radius);
		
		for (var i = 0; i < hitColliders.Length; i++) {
			if (hitColliders[i].tag == "Villager") {
				if (closestDist >= Vector3.Distance(transform.position, hitColliders[i].transform.position)) {
					closestDist = Vector3.Distance(transform.position, hitColliders[i].transform.position);
					closest = hitColliders[i].gameObject;
				}
				
				  
				//Debug.Log(hitColliders[i].transform.position);
				//Debug.Log("the closest is"+ closestDist);
			}
			
		}
}

function OnCollisionEnter (col : Collision) {
	if (col.gameObject.tag == "Villager") {
		Destroy(col.gameObject);
		closestDist = Mathf.Infinity;
	}	
}