#pragma strict

var monolithSelfScript : monolith_Script;

var colour: Color;
var health : int;
var attack : int;
var speed : int;


function Start () {
	monolithSelfScript = gameObject.GetComponent(monolith_Script);
	
	
	
	
}

function Update () {
	//if (monolithSelfScript.monolithClass == "soldier") {
	if (monolithSelfScript.monolithClass == 0) {
		colour = Color(75.0/255.0, 200.0/255.0, 255.0/255.0);
		health = 100;
		attack = 10;
		speed = 20;
	}
	
	//if (monolithSelfScript.monolithClass == "heavy") {
	if (monolithSelfScript.monolithClass == 1) {
		colour = Color(63.0/255.0, 181.0/255.0, 57.0/255.0);
		health = 100;
		attack = 10;
		speed = 1;
	}
	//if (monolithSelfScript.monolithClass == "idol") {
	if (monolithSelfScript.monolithClass == 2) {
		colour = Color(141.0/255.0, 37.0/255.0, 147.0/255.0);
		health = 100;
		attack = 10;
		speed = 50;
	}
	//if (monolithSelfScript.monolithClass == "mender") {
	if (monolithSelfScript.monolithClass == 3) {
		colour = Color(63.0/255.0, 181.0/255.0, 57.0/255.0);
		health = 100;
		attack = 10;
		speed = 5;
	}
	//if (monolithSelfScript.monolithClass == "caterer") {
	if (monolithSelfScript.monolithClass == 4) {
		colour = Color(224.0/255.0, 220.0/255.0, 65.0/255.0);
		health = 100;
		attack = 10;
		speed = 5;
	}
	//if (monolithSelfScript.monolithClass == "blocker") {
	if (monolithSelfScript.monolithClass == 5) {
		colour = Color(173.0/255.0, 173.0/255.0, 170.0/255.0);
		health = 100;
		attack = 10;
		speed = 5;
	}
	
	
	
	monolithSelfScript.colour = colour;
	monolithSelfScript.health = health;
	monolithSelfScript.attack = attack;
	monolithSelfScript.speed = speed;

}