<?php
// required headers
header("Access-Control-Allow-Origin: http://localhost:8888/LMS/");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/students.php';
$method = $_SERVER['REQUEST_METHOD'];
if($method == 'GET'){
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare student object
$students = new Students($db);
// read the details of students to be edited
$stmt = $students->getAll();
$num = $stmt->rowCount();
// check if more than 0 record found
if($num>0){
 
    // students array
    $students_arr=array();
    $students_arr=array(
        "status" => true,
        "message" => "sucesfull students",
    );
    $students_arr["students"]=array();
    
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        extract($row);
        $student=array(
            "id" => $id,
            "firstname" => $firstname,
            "lastname" => $lastname,
            "username" => $username,
            "password" => $password,
            "created" => $created
        );
        array_push($students_arr["students"], $student);
    }
 
    // set response code - 200 OK
    http_response_code(200);
}
else{
    $students_arr=array(
        "status" => false,
        "message" => "not students",
    );
    http_response_code(500);
}
}
else{
    $students_arr=array(
        "status" => false,
        "message" => "Incorrect Method",
    );
    http_response_code(500);
}
// make it json format
print_r(json_encode($students_arr));
?>