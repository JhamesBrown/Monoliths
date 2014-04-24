#pragma strict
// this script connects itself to the core monolith behaviour which should also be applied to the prefab
// when a new monolith is spawned it checks this script to find out what properties it should have

var monolithSelfScript : monolith_Script;

//properties to send to core monolith script
var colour: Color;
var health : int;
var attack : int;
var speed : int;


function Start () {
	
	monolithSelfScript = gameObject.GetComponent(monolith_Script); 
}

function Update () {

	//"soldier"
	if (monolithSelfScript.monolithClass == 0) {
		colour = Color(75.0/255.0, 200.0/255.0, 255.0/255.0);
		health = 100;
		attack = 10;
		speed = 20;
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
		speed = 50;
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