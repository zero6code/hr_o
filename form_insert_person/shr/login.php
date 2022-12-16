<?php 

	class login {

		public string $username = "";
		public string $user = "";

		function __construct() {
			$this->inputLogin();
		}

		public function inputLogin() {
			$username = readLine("USERNAME >>> ");
			echo $this->getLogin($username);
		}

		public function getLogin(string $usernameA) {
			return $this->setLogin($usernameA);
		} 

		private function setLogin(string $usernameB){
			$user = $usernameB;
			return $user;
		}
	}
 ?>