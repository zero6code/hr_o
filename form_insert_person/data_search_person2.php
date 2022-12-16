<?php 
require_once("../connectDB.php");

$conn = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);


	// isset( $_GET['search'] ) ? $data = $_GET['search'] : $data = "aaa";
	// echo $data;

	isset( $_GET['search'] ) ? $data = $_GET['search'] : $data = "";
	// $data = $_GET['searchdata'];
	//echo $data;
    $dataPerson = $conn->query(sprintf("
    SELECT person.id, cid, pname, fname, lname, birth_date, position.position_name,position.position_code,
    class_position.class_position_type_name2,class_position.class_position_shortname, department.dep_name, department.dep_code, groupwork.groupwork_name,groupwork.groupwork_code,
    government_emp_type.government_emp_type_code,government_emp_type.government_emp_type_name,record_use
		FROM person 
        LEFT JOIN gogov_new ON gogov_new.person_id = person.id 
        LEFT JOIN position ON position.position_code = person.position_code 
        LEFT JOIN class_position ON class_position.class_position_shortname = person.class_position_shortname 
        LEFT JOIN department ON department.dep_code = person.dep_code 
        LEFT JOIN groupwork ON groupwork.groupwork_code = person.groupwork 
        LEFT JOIN department_other ON department_other.id = gogov_new.dep_project_owner 
		LEFT JOIN government_emp_type ON government_emp_type.government_emp_type_code = person.government_emp_type 
        WHERE concat_ws(cid, pname, fname, lname, birth_date, position_name, class_position_type_name2, dep_name, groupwork_name, government_emp_type_name) like '%%{$data}%%' group by person.id order by person.record_use = 'Y'")) or die("aaaa");

    $output = [];

    if (mysqli_num_rows($dataPerson) > 0){
    	while($row = mysqli_fetch_assoc($dataPerson)){
    		$output[] = $row;
    	}
    }else{
    	$output['empty'] = ['empty'];
    }

    mysqli_close($conn);

  echo json_encode($output);
    // while($data1 =  $daataPerson->fetch_object()){

    //     printf('
        	
                // <tr>
                //     <th scope="row">%s</th>
                //     <td>%s</td>
                //     <td>%s %s</td>
                //     <td style="display: flex">
                //         <button id="editbtn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" value="">แก้ไข</button>
                //            <button id="deletebtns" type="button" class="btn btn-danger" style="margin-left: 2px" onclick="deleteInSearch(%s)">ลบ</button>
                //     </td>
                // </tr>
   
    //             ', $data1->id, $data1->cid, $data1->fname, $data1->lname,  $data1->id  );

    
    // }
 ?>