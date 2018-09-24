<?php
    session_start();
    $user = $_SESSION['user'];
    if($user == 'admin'){
        echo '{
            "message": "This is a secret message only for admins",
            "success": true 
        }';
    }else{
        echo '{
            "message": "Failed to ",
            "success": false
    }
?>
