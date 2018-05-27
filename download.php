<?php include('includes/head.php') ?>

<div class="container" id="dropzone">
    <div class="slide">
        <form enctype="multipart/form-data">
            <label class="btn-gradient green">File List</label>
            <div class="divisor"></div>
            <div class="form">
                <div class="file-uploads" id="uploads">
                    <?php
                        $dir = "uploads/" . $_GET["id"];

                        if(is_dir($dir)) {
                            $files = scandir($dir);
                            foreach($files as $file) {
                                if ($file != "." && $file != "..") {
                                    echo "<div class='div-fileList'>";
                                    echo "<p class='fileList'>" . $file . "</p>";
                                    echo "</div>";
                                }
                            }
                        }
                        else {
                            http_response_code(404);
                            //REINDIRIZZA A 404.php
                            header("location: 404.php");
                        }
                    ?>
                </div>
                <div class="divisor"></div>
                <label for="submit" class="btn-gradient green">Download</label>
                <input type="button" id="submit" name='submit'>
            </div>
        </form>
    </div>
</div>

<?php include('includes/foot.php') ?>