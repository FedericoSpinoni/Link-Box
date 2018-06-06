<?php
    $file = $_GET["id"];
    $dir = "uploads/" . $file;

    if(is_dir($dir)) {
        include('includes/200.php');
    }
    else {
        include('includes/404.php');
    }
?>