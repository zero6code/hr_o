<?php 

require_once "shr/login.php";

class main {
	
	// $login = new login();

	public function __construct(){
		$this->cls();
		$this->title();
		new login();
	}


	public function cls() { 
		echo chr(27).chr(91).'H'.chr(27).chr(91).'J'; 
	}  //^[H^[J clear screen

	public function title() {
		echo "********************************************************************\n
			HR MENAGE SYSTEM\n\n********************************************************************\n";
	}
}

new main();

?>