let i = 0;

function timedCount() {
     i++;

     // Mandar pro HTML
     postMessage(i);
     setTimeout("timedCount()", 500);
}

timedCount();