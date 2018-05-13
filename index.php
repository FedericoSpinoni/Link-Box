<?php include('includes/head.php') ?>

    <div class="container" id="dropzone">
        <div class="slide">
            <form method='post' enctype="multipart/form-data">
                <label for="file" class="btn-gradient green">Choose Files</label>
                <input type="file" id="file" name="files[]" multiple="multiple">
                <div class="divisor"></div>
                <div class="form">
                    <div class="file-uploads" id="uploads"></div>
                    <div class="divisor"></div>
                    <input type="password" name="psw" class="password" placeholder="Password">
                    <div class="divisor"></div>
                    <label for="submit" class="btn-gradient green">Upload</label>
                    <input type="submit" id="submit" name='submit'>
                </div>
            </form>
        </div>
    </div>

<?php include('includes/foot.php') ?>