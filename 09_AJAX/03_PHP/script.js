const TEXT_HINT_DOM = document.getElementById("textHint");

function showHint(string) {
     if (string.length == 0) {
          TEXT_HINT_DOM.innerHTML = "";
          return;
     } else {
          const XML_HTTP = new XMLHttpRequest();

          XML_HTTP.onload = function() {
               TEXT_HINT_DOM.innerHTML = this.responseText;
          };

          XML_HTTP.open("GET", "./getHint.php?q=" + string);
          XML_HTTP.send();
     }
}