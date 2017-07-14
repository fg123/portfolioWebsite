parent.postMessage("RequestSystem", "*");
var system;
function receiveMessage(event) {
    system = event.data;
}
window.addEventListener("message", receiveMessage, false);