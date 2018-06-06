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

submit.onclick = function (e) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        console.log("Download completed");
    }
    progressBar(xhr);
    xhr.open('post', 'includes/download.php?form=' + document.URL);
    xhr.send();
}