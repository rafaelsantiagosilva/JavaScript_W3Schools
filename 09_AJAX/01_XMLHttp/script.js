const PARAGRAPH_RESULT = document.getElementById('result');

function loadDoc(){
     const XHTTP = new XMLHttpRequest();

     XHTTP.onload = function() {
          PARAGRAPH_RESULT.innerHTML = this.responseText;
     }

     XHTTP.open("GET", "./Documents/ajax_info.txt");
     XHTTP.send();
}