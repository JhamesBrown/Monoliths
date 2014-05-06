#pragma strict
var closest : GameObject;
var closestDist = Mathf.Infinity;
var speed : int = 5;
var health : int = 100;

var hit : boolean;

var beastGib : Transform;

function Start () {
	hit = false;
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
	
	if (health <= 0){
		onDeath();
	}
	
	if (hit == true) {
		onHit();
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
			}
			
		}
}

function OnCollisionEnter (col : Collision) {
	if (col.gameObject.tag == "Villager") {
		Destroy(col.gameObject);
		closestDist = Mathf.Infinity;
	}	
}
function onHit () {
	renderer.material.color = Color(1.0,0.0,0.0);
	yield WaitForSeconds (0.2);
	renderer.material.color = Color(238.0/255.0,65.0/255.0,65.0/255.0);
}

function onDeath() {
	for (var i = 0; i < 20; i++) {
		Instantiate(beastGib, transform.position + Vector3(Random.Range(-1,1),Random.Range(-1,1),Random.Range(-1,1)), Quaternion.identity);
	}
	Destroy(gameObject);
}