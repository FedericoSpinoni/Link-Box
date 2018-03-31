<?php
    $target_dir = "uploads/";
    $file_name = random_string(7);
    if(isset($_POST['submit'])){
        $zip = new ZipArchive;
        if ($zip->open('./uploads/' . $file_name . '.zip', ZipArchive::CREATE) === TRUE) {
            foreach ($_FILES['files']['name'] as $f => $name) {
                $target_file = $target_dir . basename($name);
                if (move_uploaded_file($_FILES["files"]["tmp_name"][$f], $target_file)) {
                    if (strlen($name) >= 28) {
                        echo "<p>" . substr($name, 0, 23). " ... ." . file_exensiont($name) . "&nbsp&nbsp&nbsp<br></p>";
                    }
                    else {
                        echo "<p>" . $name . "<br></p>";
                    }
                    $zip->addFile("uploads/" . $name, $file_name. "/" . $name);
                } else {
                    echo "<br>Sorry, you haven't selected any files.";
                }
            }
            $zip->close();
            foreach ($_FILES['files']['name'] as $f => $name) {
                if(file_exensiont($name) != 'zip' && file_exensiont($name) != '')
                    unlink("uploads/" . $name);
            }
        }
    }
?>