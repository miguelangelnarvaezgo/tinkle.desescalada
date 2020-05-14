import * as d3 from "../package/node_modules/d3";

let csv = new String;

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
      csv = processDataAsObj(csv);
      // processData(csv);
    };

  } else {
    alert('FileReader are not supported in this browser.');
  }
};

function processDataAsObj(csv){
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];

    //first line of csv
    var keys = allTextLines.shift().split(';');

    while (allTextLines.length) {
        var arr = allTextLines.shift().split(';');
        var obj = {};
        for(var i = 0; i < keys.length; i++){
            obj[keys[i]] = arr[i];
	}
        lines.push(obj);
    }
        console.log(lines);
        return lines;
}


//_____________________________________________app

const btn = document.querySelector('#btn-prueba');
btn.addEventListener('click', (event) => {
  alert(csv);
});
