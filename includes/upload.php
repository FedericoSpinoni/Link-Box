<?php

    function random_string($length) {
        $key = '';
        $keys = array_merge(range(0, 9), range('a', 'z'), range('A', 'Z'));
    
        for ($i = 0; $i < $length; $i++) {
            $key .= $keys[array_rand($keys)];
        }
    
        return $key;
    }

    $folder_name = random_string(7);

    if (!file_exists('../uploads/' . $folder_name)) {
        mkdir('../uploads/' . $folder_name, 0777, true);
    }

    $total = count($_FILES['file']['name']);

    for($i=0; $i<$total; $i++) {
        $uploaded[] = array(
            'name' => $_FILES['file']['name'][$i],
            'file' => "../uploads/" . $_FILES['file']['name'][$i],
        );
        $tmpFilePath = $_FILES['file']['tmp_name'][$i];
        if ($tmpFilePath != ""){
            $newFilePath = "./../uploads/" . $folder_name . '/' . $_FILES['file']['name'][$i];
            if(move_uploaded_file($tmpFilePath, $newFilePath)) {
                
            }
        }
    }

    echo $folder_name;

?>