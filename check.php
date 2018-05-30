<?php
    $dir = "uploads/" . $_GET["id"];

    if(is_dir($dir)) {
        include('includes/200.php');
    }
    else {
        include('includes/404.php');
    }
?>