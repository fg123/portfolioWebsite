var id = "";
function done() {
    parent.postMessage("F" + id, "*");
}
parent.postMessage("RequestID", "*");

function receiveMessage(event) {
    id = event.data;
}
window.addEventListener("message", receiveMessage, false);