#pragma strict
// this script connects itself to the core monolith behaviour which should also be applied to the prefab
// when a new monolith is spawned it checks this script to find out what properties it should have

var monolithSelfScript : monolith_Script;

//properties to send to core monolith script
var colour: Color;
var health : int;
var attack : int;
var speed : int;
var range : int;


var soldier : int = 0;

var aura_Prefab : GameObject;
var aura : GameObject;

var bread_Prefab : Transform;
var breadSpawned : boolean;


var beastScript : beast_Script;


function Start () {
	
	monolithSelfScript = gameObject.GetComponent(monolith_Script); 
}

function Update () {

	//"soldier"
	if (monolithSelfScript.monolithClass == soldier) {
		colour = Color(75.0/255.0, 200.0/255.0, 255.0/255.0);
		health = 100;
		attack = 10;
		speed = 20;
		range = 10;
		
		
			
		soldierAttack(transform.position, range);
		
	}
	
	//"heavy"
	if (monolithSelfScript.monolithClass == 1) {
		colour = Color(7.0/255.0, 102.0/255.0, 102.0/255.0);
		health = 100;
		attack = 10;
		speed = 1;
	}
	
	//"idol"
	if (monolithSelfScript.monolithClass == 2) {
		colour = Color(141.0/255.0, 37.0/255.0, 147.0/255.0);
		health = 100;
		attack = 10;
		speed = 20;
				
		
		if (aura == null) {
			aura = Instantiate(aura_Prefab, transform.position + Vector3(0,0.4,0), Quaternion.identity);
			aura.transform.parent = transform;
		}
	}
	
	//"mender"
	if (monolithSelfScript.monolithClass == 3) {
		colour = Color(63.0/255.0, 181.0/255.0, 57.0/255.0);
		health = 100;
		attack = 10;
		speed = 5;
	}
	
	//"caterer"	
	if (monolithSelfScript.monolithClass == 4) {
		colour = Color(224.0/255.0, 220.0/255.0, 65.0/255.0);
		health = 100;
		attack = 10;
		speed = 5;
		if (Input.GetKeyDown("space")){
			breadSpawned = false;
		}
		if (!breadSpawned) {
			spawnBread(5);
			
		}
	}
	
	//"blocker"	
	if (monolithSelfScript.monolithClass == 5) {
		colour = Color(173.0/255.0, 173.0/255.0, 170.0/255.0);
		health = 100;
		attack = 10;
		speed = 5;
	}
	
	
	//once it has loaded the properties of the class into the variables it sends them to the core monolith script
	monolithSelfScript.colour = colour;
	monolithSelfScript.health = health;
	monolithSelfScript.attack = attack;
	monolithSelfScript.speed = speed;

}

function spawnBread(breadSpawnAmount : int) {
	for (var i = 0; i < breadSpawnAmount; i++){
			Instantiate(bread_Prefab, transform.position + Vector3(0,0.7,0.0), Quaternion.identity);
		}
	breadSpawned = true;	
}

function soldierAttack(center : Vector3 , range : float) {
		
		var hitColliders = Physics.OverlapSphere(center, range );
		
		for (var i = 0; i < hitColliders.Length; i++) {
			if (hitColliders[i].tag == "Beast") {
			
				beastScript = hitColliders[i].GetComponent(beast_Script);
				beastScript.hit = true;
				beastScript.health -= 1;
			}
			
		}
		yield WaitForSeconds (1.0);
		
		
}