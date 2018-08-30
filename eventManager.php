<?php

    // Initialize PDO database
   $conn = new PDO("mysql:host=localhost;dbname=calapp", "root", "");
  
   //recupération des données post
   $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

 switch ($request->{'action'}) {
    case 'affichertout':
    $ev = [];
    $query = "SELECT *
            FROM events";
    $result = $conn->prepare($query);
    $result->execute();
    echo json_encode($result->fetchAll());		
                break;
	case 'ajout':
                
                // $req->execute(array(
                // 'pseudo' => $_POST['img.pseudo'],
                // 'image' => $_POST['img.link'],
                // 'dateinsert' => date("Y-m-d H:i:s")
                // ));

                echo $request->{'test'};
                $query="INSERT INTO `events` (`id`, `title`, `localisation`, `start_event`, `date`, `end_event`, `Activities_id`) VALUES (NULL, 'test', 'st brieuc', '00:20:00.374', '67:00:00.000', '67:00:00.000', '8');";
                $result = $conn->prepare($query);
                $result->execute();
                break;

} 