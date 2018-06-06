<?php

    $folder_name = $_GET['form'];
    $dir = "../uploads/" .  $folder_name;
    $archive = "../uploads/" .  $folder_name . ".zip";

    $zip = new ZipArchive;
    $zip->open($archive, ZipArchive::CREATE);
    $files = scandir($dir);
    unset($files[0], $files[1]);
    foreach ($files as $file) {
        $zip->addFile($dir . '/' . $file, $file);
    }
    $zip->close();

    ob_end_clean();
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="'.basename($archive).'"');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($archive));
    readfile($archive);
    unlink($archive);
    exit;