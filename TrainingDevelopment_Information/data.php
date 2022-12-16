<?php 
session_start();
require_once("../connectDB.php");
// $_SESSION['ses_user']
class data {

	function __construct(){
		$this->getQuerydata1();
	}

	private function setConnect(){
		return new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);
	}

	private function querydata1(){
		$querydata = $this->setConnect()->query(sprintf("

				SELECT id, officialdoc_num AS num, gogov_topic AS topic, gogov_for AS type_name,Concat(gogov_real_date1,' ถึง ',gogov_real_date2) AS date_go,(
					CASE
						WHEN (SELECT dmh_child_name FROM department_other WHERE department_other.id = gogov_new.dep_project_owner) IS NULL THEN dep_project_owner
				        ELSE (SELECT dmh_child_name FROM department_other WHERE department_other.id = gogov_new.dep_project_owner)
					END
				)AS owner_p ,
				gogov_place,
				TRIM('\"' FROM JSON_EXTRACT((cost_registration->'$[0]'), '$.bath')) AS cost_regis1,
				(SELECT budget1 FROM gogov_back WHERE gogov_back.gogov_new_id = gogov_new.id) as budget1,
				(SELECT budget2 FROM gogov_back WHERE gogov_back.gogov_new_id = gogov_new.id) as budget2,
				(SELECT budget3 FROM gogov_back WHERE gogov_back.gogov_new_id = gogov_new.id) as budget3,
				(SELECT budget4 FROM gogov_back WHERE gogov_back.gogov_new_id = gogov_new.id) as budget4,
				(SELECT budget5 FROM gogov_back WHERE gogov_back.gogov_new_id = gogov_new.id) as budget5,
				((SELECT budget1 FROM gogov_back WHERE gogov_back.gogov_new_id = gogov_new.id)+
				(SELECT budget2 FROM gogov_back WHERE gogov_back.gogov_new_id = gogov_new.id)+
				(SELECT budget3 FROM gogov_back WHERE gogov_back.gogov_new_id = gogov_new.id)+
				(SELECT budget4 FROM gogov_back WHERE gogov_back.gogov_new_id = gogov_new.id)+
				(SELECT budget5 FROM gogov_back WHERE gogov_back.gogov_new_id = gogov_new.id)) AS budget_sum,
				Concat(
					(SELECT competency FROM gogov_back WHERE gogov_back.gogov_new_id = gogov_new.id),'<br>',
				    (SELECT competency2 FROM gogov_back WHERE gogov_back.gogov_new_id = gogov_new.id),'<br>',
				    (SELECT competency3 FROM gogov_back WHERE gogov_back.gogov_new_id = gogov_new.id)
				) AS comp_all,
				Concat(
					(SELECT skill FROM gogov_back WHERE gogov_back.gogov_new_id = gogov_new.id),'<br>',
				    (SELECT skill2 FROM gogov_back WHERE gogov_back.gogov_new_id = gogov_new.id),'<br>',
				    (SELECT skill3 FROM gogov_back WHERE gogov_back.gogov_new_id = gogov_new.id)
				) AS skill_all
				FROM gogov_new WHERE person_id = '{$_SESSION['person_id']}' AND status_use = 'Y'

			"));
		$output = [];
		if( mysqli_num_rows($querydata) > 0)
			while($data = $querydata->fetch_object()){
				$output[] = $data;
			}
		else{
			  $output['empty'] = ['empty'];
		}
		mysqli_close($this->setConnect());
		echo json_encode($output);
	}

		public function getQuerydata1(){
			return $this->querydata1();
		}
}
new data();

 ?>
