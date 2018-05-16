var dropzone = document.getElementById('dropzone');
var submit = document.getElementById('submit');
var input = document.getElementById('file');
var formData = new FormData();

function checkList(file) {
    for (var x = 0; x < formData.getAll("file[]").length; x++) {
        if (formData.getAll('file[]')[x].name == file.name) {
            updateFile(file, x);
            return true;
        }
    }
    addFile(file);
}

var displayFiles = function (data) {
    var uploads = document.getElementById('uploads');
    var div = document.createElement("div");
    div.id = data.name;
    div.className = "div-fileList";

    var img = document.createElement("img");
    img.src = 'img/delete-icon.png';
    img.className = "img-delete";
    img.setAttribute('onclick', "deleteFile('" + data.name + "')");

    var p = document.createElement('p');
    p.className = "fileList";
    p.innerText = data.name;

    uploads.appendChild(div);
    div.appendChild(p);
    div.appendChild(img);
}

function deleteFile(file) {
    var keep = formData.getAll('file[]');
    formData.delete('file[]');
    for (var x = 0; x < keep.length; x++) {
        if (keep[x].name != file) {
            formData.append('file[]', keep[x]);
        }
    }
    var uploads = document.getElementById('uploads');
    var id = document.getElementById(file);
    uploads.removeChild(id);
    console.log(formData.getAll("file[]"));
}

function updateFile(file, x) {
    formData.set('file[]'[x], file);
}

function addFile(file) {
    formData.append('file[]', file);
    displayFiles(file);
}

function progressHandler(event) {
    var percent = (event.loaded / event.total) * 100;
    document.getElementById("progressBar").value = Math.round(percent);
    document.getElementById("status").innerHTML = Math.round(percent) + "%";
}

function progressBar(xhr) {
    var uploads = document.getElementById('uploads');
    var progressBar = document.createElement("progress");
    var status = document.createElement("h3");
    progressBar.id = "progressBar";
    progressBar.setAttribute('value', "0");
    progressBar.setAttribute('max', "100");
    status.id = "status";
    uploads.appendChild(progressBar);
    uploads.appendChild(status);
    xhr.upload.addEventListener("progress", progressHandler, false);
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
    var xhr = new XMLHttpRequest();
    var uploads = document.getElementById('uploads');
    while (uploads.hasChildNodes()) {
        uploads.removeChild(uploads.firstChild);
    }
    xhr.onload = function () {
        console.log("Upload complete");
    }
    if (formData.getAll("file[]").length > 0) {
        progressBar(xhr);
        xhr.open('post', 'includes/upload.php');
        xhr.send(formData);
    }
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
input.onchange = function (e) {
    files = e.target.files;
    upload(files);
}