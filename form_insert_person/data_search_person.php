<?php 
require_once("../connectDB.php");

$conn = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);


	// isset( $_GET['search'] ) ? $data = $_GET['search'] : $data = "aaa";
	// echo $data;

	isset( $_GET['search'] ) ? $data = $_GET['search'] : $data = "";
	// $data = $_GET['searchdata'];
	//echo $data;
    $dataPerson = $conn->query(sprintf("

            SELECT id, cid, pname, fname, lname, birth_date,
                (select position_name from position where position.position_code = person.position_code) as position_name,
                position_code,
                (select class_position_type_name2 from class_position where class_position.class_position_shortname = person.class_position_shortname) as class_position_name,
                class_position_shortname,
                (select dep_name from department where department.dep_code = person.dep_code) as dep_name,
                dep_code,
                (select groupwork_name from groupwork where groupwork.groupwork_code = person.groupwork) as groupwork_name,
                groupwork,
                (select government_emp_type_name from government_emp_type where government_emp_type.government_emp_type_code = person.government_emp_type) as gov_type_name,
                government_emp_type from person where concat(cid, fname, lname) like '%%{$data}%%'")) or die("aaaa");

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