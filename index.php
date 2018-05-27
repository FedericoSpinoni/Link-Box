<?php include('includes/head.php') ?>

    <div class="container" id="dropzone">
        <div class="slide">
            <label for="file" class="btn-gradient green">Choose Files</label>
            <input type="file" id="file" name="files[]" multiple="multiple">
            <div class="divisor"></div>
            <div class="form">
                <div class="file-uploads" id="uploads"></div>
                <div class="divisor"></div>
                <label for="submit" class="btn-gradient green">Upload</label>
                <input type="button" id="submit" name='submit'>
            </div>
        </div>
    </div>

<script type="text/javascript" language="javascript" src="js/function.js"></script>

<?php include('includes/foot.php') ?>