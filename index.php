<?php include('includes/head.php') ?>

<?php include('includes/function.php') ?>

    <div class="container">
        <div class="slide">
        <form method='post' enctype="multipart/form-data">
                <label for="file" class="btn-gradient green">Choose Files</label>
                <input type="file" id="file" name="files[]" multiple="multiple">
                <div id="drop_zone" class="drop">Drop Files</div>
                <div class="divisor"></div>

                    <script>ChooseFile();</script>

                <div class="form">

                    <div class="file-uploads" id="list">

                        <script>DropFile();</script>
                        <?php include('includes/upload.php') ?>
                    
                    </div>

                    <div class="divisor"></div>

                    <div class="textarea-container">
                        <textarea name="message" placeholder="Message"></textarea>
                        <div class="textarea-size"></div>
                    </div>


                    <div class="divisor"></div>
                        <input type="password" name="psw" class="password" placeholder="Password">
                
                </div>
                <div class="divisor"></div>

                <label for="submit" class="btn-gradient green">Upload</label>
                <input type="submit" id="submit" name='submit'>
            </form>
        </div>
    </div>

<?php include('includes/foot.php') ?>