// let csv = new String;

handleFiles = (files) => {
  // Check for the various File API support.
  if (window.FileReader) {
    // FileReader are supported.
    var reader = new FileReader();
    // Read file into memory as UTF-8
    reader.readAsText(files[0]);

    // Handle errors load
    reader.onerror = function (evt) {
      if(evt.target.error.name == "NotReadableError") {
        alert("Canno't read file !");
      }
    }
    reader.onload = function (event) {
      csv = event.target.result;
      // console.log(csv);
    };

  } else {
    alert('FileReader are not supported in this browser.');
  }
};
