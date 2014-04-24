#pragma strict

function Start () {

}

function Update () {

}

//collision detection 
// when the aura collides with a villager it will make them purple ** this is just a test at the moment
function OnTriggerEnter (col : Collider){
	if(col.gameObject.tag =="Villager"){
		col.gameObject.renderer.material.color = Color(141.0/255.0, 37.0/255.0, 147.0/255.0);
	}
}
function OnTriggerExit (col : Collider){
	if(col.gameObject.tag =="Villager"){
		col.gameObject.renderer.material.color = Color(248.0/255.0, 184.0/255.0, 184.0/255.0);
	}
}