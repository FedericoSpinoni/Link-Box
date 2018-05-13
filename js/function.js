(function() {
    var dropzone = document.getElementById('dropzone');
    var submit = document.getElementById('submit');
    var button = document.getElementById('button');
    var xhr = new XMLHttpRequest();
    var formData = new FormData();
    console.log(formData);
    
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
        var x;

        for(x = 0; x < files.length; x++) {
            console.log(files[x]);
            // aggiungi files alla lista (NON AGGIORNA formData)
            formData.append('file[]', files[x]);
            console.log(formData);
        }

        displayFiles(files);

        /*  xhr.onload  = function() {
            var data = JSON.parse(this.responseText);
            displayUploads(files);
        } */
    }
    dropzone.ondrop = function(e) {
        e.preventDefault();
        this.className = 'container';
        upload(e.dataTransfer.files);
    }
    button.onclick = function(e) {
        console.log(formData);
    }
    submit.onclick = function(e) {
        // click submit
        // controllo se è null
        // invia i file della lista
        xhr.open('post', 'includes/upload.php');
        xhr.send(formData);
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