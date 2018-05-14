(function () {
    var dropzone = document.getElementById('dropzone');
    var submit = document.getElementById('submit');
    var input = document.getElementById('file');
    var formData = new FormData();

    function checkList (file) {
        for(var x = 0; x < formData.getAll("file[]").length; x++) {
            if(formData.getAll('file[]')[x].name == file.name) {
                updateFile(file, x);
                return true;
            }
        }
        addFile(file);
    }

    var displayFiles = function (data) {
        var uploads = document.getElementById('uploads');
        var div = document.createElement("div");
        div.id = "single-file";
        div.className = "div-fileList";

        var img = document.createElement("img");
        img.src = 'img/delete-icon.png';
        img.className = "img-delete";

        var p = document.createElement('p');
        p.className = "fileList";
        p.innerText = data.name;

        uploads.appendChild(div);
        div.appendChild(p);
        div.appendChild(img);
    }

    function updateFile (file, x) {
        formData.set('file[]'[x], file);
    }

    function addFile (file) {
        formData.append('file[]', file);
        displayFiles(file);
    }

    var upload = function (files) {
        for (var x = 0; x < files.length; x++)
            checkList(files[x]);
        console.log(formData.getAll("file[]"));
    }
    dropzone.ondrop = function (e) {
        e.preventDefault();
        this.className = 'container';
        upload(e.dataTransfer.files);
    }
    submit.onclick = function (e) {
        // controllo se è null
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var uploads = document.getElementById('uploads');
            while (uploads.hasChildNodes()) {   
                uploads.removeChild(uploads.firstChild);
            }
            console.log("Upload complete");
            console.log(formData.getAll("file[]"));
        }
        xhr.open('post', 'includes/upload.php');
        xhr.send(formData);
        formData.delete('file[]');
    }
    dropzone.ondragover = function () {
        this.className = 'container dragover';
        return false;
    }
    dropzone.ondragleave = function () {
        this.className = 'container';
        return false;
    }
    input.onchange = function(e) { 
        files = e.target.files;
        upload(files);
    }
}());