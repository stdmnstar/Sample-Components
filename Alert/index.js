function closeAlertBox() {
    const alertBox = document.getElementById("alertBox");
    const alertClose = document.getElementById("alertClose");
    const alertClose2 = document.getElementById("alertClose2");

    alertBox.parentNode.removeChild(alertBox);
    alertClose.parentNode.removeChild(alertClose);
    alertClose2.parentNode.removeChild(alertClose2);
}

function myAlert(msg) {
    const alertBox = document.createElement("div");
    document.body.appendChild(alertBox);
    alertBox.id = "alertBox";
    alertBox.innerHTML = msg;

    const alertClose = document.createElement("div");
    alertClose.id ="alertClose";
    alertClose.innerHTML = "X";
    alertBox.appendChild(alertClose);

    alertClose.onclick = closeAlertBox;

    const alertClose2 = document.createElement("div");
    alertClose2.id = "alertClose2";
    document.body.appendChild(alertClose2);
    alertClose2.onclick = closeAlertBox;
}