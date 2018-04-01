/* Choose File */
function ChooseFile(){
    function handleFileSelect(evt) {
        var files = evt.target.files; // FileList object
    
        // files is a FileList of File objects. List some properties.
        var output = [];
        for (var i = 0, f; f = files[i]; i++) {
            output.push('<p>', escape(f.name), '</p>');
        }
        document.getElementById('list').innerHTML = output.join('');
    }
    
    document.getElementById('file').addEventListener('change', handleFileSelect, false);
}

/* Drop files here */

function DropFile(){
    function handleFileSelect(evt) {
        evt.stopPropagation();
        evt.preventDefault();
    
        var files = evt.dataTransfer.files; // FileList object.
    
        // files is a FileList of File objects. List some properties.
        var output = [];
        for (var i = 0, f; f = files[i]; i++) {
            output.push('<p>', escape(f.name), '</p>');
        }
        document.getElementById('list').innerHTML = output.join('');
    }
    
    function handleDragOver(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
    }
    
    // Setup the dnd listeners.
    var dropZone = document.getElementById('drop_zone');
    dropZone.addEventListener('dragover', handleDragOver, false);
    dropZone.addEventListener('drop', handleFileSelect, false);
}