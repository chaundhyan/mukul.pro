function format() {
    var whichFormatter = document.getElementById("formatter-id").value;
    if (whichFormatter == 'jsonFormatter') {
        jsonFormatter()
    } else if (whichFormatter == 'xmlFormatter') {

    } else if (whichFormatter == 'option1Formatter') {

    } else if (whichFormatter == 'option2Formatter') {

    } else {
        document.getElementById("cMessage").value = "Invalid Formatter selected.";
    }
}

function jsonFormatter() {
    var obj = JSON.parse(document.getElementById("cMessage").value.trim());
    document.getElementById("cMessage").value = JSON.stringify(obj, undefined, 4);
    document.getElementById("cMessage").select();
}

function xmlFormatter() {

}

function clearText() {
    document.getElementById("cMessage").value = "";
}