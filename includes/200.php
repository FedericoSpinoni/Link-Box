<?php include('includes/head.php') ?>

<form method='POST' action='includes/download.php?form=<?php echo $file?>'>
    <div class="container" id="dropzone">
        <div class="slide">
            <div class="divisor-space"></div>
            <div class="form">
                <div class="file-downloads" id="uploads">
                    <?php
                        $files = scandir($dir);
                        foreach($files as $file) {
                            if ($file != "." && $file != "..") {
                                echo "<div class='div-fileList'>";
                                echo "<p class='fileList'>" . $file . "</p>";
                                echo "</div>";
                            }
                        }
                    ?>
                </div>
                <div class="divisor"></div>
                <label for="submit" class="btn-gradient green">Download</label>
                <input type="submit" id="submit" name='submit'>
            </div>
        </div>
    </div>
</form>

<?php include('includes/foot.php') ?>