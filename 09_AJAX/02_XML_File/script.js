const XHTTP = new XMLHttpRequest();
const TABLE = document.getElementById("table");

function loadDoc() {
     XHTTP.onload = function () {
          processXmlFile(this);
     }

     XHTTP.open("GET", "./cd_catalog.xml");
     XHTTP.send();
}

function processXmlFile(xml) {
     const XML_DOC = xml.responseXML;
     const CD_TAGS_XML = XML_DOC.getElementsByTagName("CD");
     let tableInProcess =
          "<tr>" +
          "<th>Artista</th>" +
          "<th>Título</th>" +
          "</tr>";

     for (let i = 0; i < CD_TAGS_XML.length; i++) {
          tableInProcess +=
               `<tr><td>${CD_TAGS_XML[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue}</td>` +
               `<td>${CD_TAGS_XML[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue}</td></tr>`;
     }

     TABLE.innerHTML = tableInProcess;
}