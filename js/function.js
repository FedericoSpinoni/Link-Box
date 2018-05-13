(function() {
    var dropzone = document.getElementById('dropzone');
    var submit = document.getElementById('submit');
    
    var displayFiles = function(data) {
        var uploads = document.getElementById('uploads'),
            p,
            x;
        
        for(x = 0; x < data.length; x++) {
            p = document.createElement('p');
            p.innerText = data[x].name;

            uploads.appendChild(p);
        }
    }

    var upload = function(files) {
        var formData = new FormData(),
            xhr = new XMLHttpRequest(),
            x;

        for(x = 0; x < files.length; x++) {
            formData.append('file[]', files[x]);
        }

        displayFiles(files);

        /*  xhr.onload  = function() {
            var data = JSON.parse(this.responseText);
            displayUploads(files);
        } */

        xhr.open('post', 'includes/upload.php');
        xhr.send(formData);
    }
    dropzone.ondrop = function(e) {
        e.preventDefault();
        this.className = 'container';
        upload(e.dataTransfer.files);
    }
    submit.onclick = function(e) {
        // click submit
        console.log('submit');
    }
    dropzone.ondragover = function() {
        this.className = 'container dragover';
        return false;
    }
    dropzone.ondragleave = function() {
        this.className = 'container';
        return false;
    }
}());