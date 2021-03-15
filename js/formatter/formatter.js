function format() {
    var whichFormatter = document.getElementById("formatter-id").value;
    if (whichFormatter == 'jsonFormatter') {
        jsonFormatter()
    } else if (whichFormatter == 'xmlFormatter') {
        xmlFormatter()
    } else {
        document.getElementById("cMessage").value = "Invalid Formatter selected.";
    }
}

function jsonFormatter() {
    var obj;
    try {
		obj = JSON.parse(document.getElementById("cMessage").value.trim());
		document.getElementById("cMessage").value = JSON.stringify(obj, undefined, 4);
        document.getElementById("cMessage").select();
    } catch (e) {
		document.getElementById("cMessage").value = document.getElementById("cMessage").value.trim() + "\n" + e;
    }
}

function xmlFormatter() {
    var formatted = '', indent= '';
    tab = '\t';
    var xml = document.getElementById("cMessage").value.trim();
    xml.split(/>\s*</).forEach(function(node) {
        if (node.match( /^\/\w/ )) indent = indent.substring(tab.length); // decrease indent by one 'tab'
        formatted += indent + '<' + node + '>\r\n';
        if (node.match( /^<?\w[^>]*[^\/]$/ )) indent += tab;              // increase indent
    });
    document.getElementById("cMessage").value = formatted.substring(1, formatted.length-3);
    document.getElementById("cMessage").select();
}

function clearText() {
    document.getElementById("cMessage").value = "";
}