function clearTimeText() {
    document.getElementById("nanoSeconds").value = "";
    document.getElementById("milliSeconds").value = "";
    document.getElementById("seconds").value = "";
    document.getElementById("minute").value = "";
    document.getElementById("hour").value = "";
    document.getElementById("day").value = "";
}

function clearConverterText() {
	document.getElementById("cMessage").value = "";
}

function convertTime(textBox) {
	toSecond(textBox);
	toNanoSeconds(textBox);
	toMilliSeconds(textBox);
	toMinutes(textBox);
	toHours(textBox);
	toDays(textBox);
}

function toSecond(textBox) {
	var value = textBox.value.trim()
	if (textBox.id == "minute"){
		document.getElementById("seconds").value = value * 60;
	} else if (textBox.id == "hour") {
		document.getElementById("seconds").value = value * 3600;
	} else if (textBox.id == "day") {
		document.getElementById("seconds").value = value * 86400;
	} else if (textBox.id == "milliSeconds") {
		document.getElementById("seconds").value = value * 0.001;
	} else if (textBox.id == "nanoSeconds") {
		document.getElementById("seconds").value = value * 0.0000000001;
	}
}

function toNanoSeconds(textBox) {
	var value = textBox.value.trim()
	if (textBox.id == "minute"){
		document.getElementById("nanoSeconds").value = value * 60000000000;
	} else if (textBox.id == "hour") {
		document.getElementById("nanoSeconds").value = value * 3600000000000;
	} else if (textBox.id == "day") {
		document.getElementById("nanoSeconds").value = value * 86400000000000;
	} else if (textBox.id == "milliSeconds") {
		document.getElementById("nanoSeconds").value = value * 1000000;
	} else if (textBox.id == "seconds") {
		document.getElementById("nanoSeconds").value = value * 1000000000;
	}
}

function toMilliSeconds(textBox) {
	var value = textBox.value.trim()
	if (textBox.id == "minute"){
		document.getElementById("milliSeconds").value = value * 60000;
	} else if (textBox.id == "hour") {
		document.getElementById("milliSeconds").value = value * 3600000;
	} else if (textBox.id == "day") {
		document.getElementById("milliSeconds").value = value * 86400000;
	} else if (textBox.id == "nanoSeconds") {
		document.getElementById("milliSeconds").value = value * 0.000001;
	} else if (textBox.id == "seconds") {
		document.getElementById("milliSeconds").value = value * 1000;
	}
}

function toMinutes(textBox) {
	var value = textBox.value.trim()
	if (textBox.id == "seconds"){
		document.getElementById("minute").value = value * 0.0166667;
	} else if (textBox.id == "hour") {
		document.getElementById("minute").value = value * 60;
	} else if (textBox.id == "day") {
		document.getElementById("minute").value = value * 1440;
	} else if (textBox.id == "nanoSeconds") {
		document.getElementById("minute").value = value * 0.01666666667;
	} else if (textBox.id == "milliSeconds") {
		document.getElementById("minute").value = value * 0.01667;
	}
}

function toHours(textBox) {
	var value = textBox.value.trim()
	if (textBox.id == "seconds"){
		document.getElementById("hour").value = value * 0.000277778;
	} else if (textBox.id == "minute") {
		document.getElementById("hour").value = value * 0.0166667;
	} else if (textBox.id == "day") {
		document.getElementById("hour").value = value * 24;
	} else if (textBox.id == "nanoSeconds") {
		document.getElementById("hour").value = value * 0.00000000000027778;
	} else if (textBox.id == "milliSeconds") {
		document.getElementById("hour").value = value * 0.00000000027778;
	}
}

function toDays(textBox) {
	var value = textBox.value.trim()
	if (textBox.id == "seconds"){
		document.getElementById("day").value = value * 0.000011575;
	} else if (textBox.id == "hour") {
		document.getElementById("day").value = value * 0.0416667;
	} else if (textBox.id == "minute") {
		document.getElementById("day").value = value * 0.000694445;
	} else if (textBox.id == "nanoSeconds") {
		document.getElementById("day").value = value * 0.000000000000011575;
	} else if (textBox.id == "milliSeconds") {
		document.getElementById("day").value = value * 0.000000011575;
	}
}

function convert() {
    var whichConverter = document.getElementById("converter-id").value;
    if (whichConverter == 'xmlToJSON') {
        xmlToJSONConverter(new DOMParser().parseFromString(document.getElementById("cMessage").value.trim(), 'text/xml'))
    } else if (whichConverter == 'jsonToXml') {
        jsonToXmlConverter()
    } else {
        document.getElementById("cMessage").value = "Invalid Converter selected.";
    }
}

function xmlToJSONConverter(xml) {
	// Create the return object
      var obj = {};

      if (xml.nodeType == 1) {
        // element
        // do attributes
        if (xml.attributes.length > 0) {
          obj["@attributes"] = {};
          for (var j = 0; j < xml.attributes.length; j++) {
            var attribute = xml.attributes.item(j);
            obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
          }
        }
      } else if (xml.nodeType == 3) {
        // text
        obj = xml.nodeValue;
      }

      // do children
      // If all text nodes inside, get concatenated text from them.
      var textNodes = [].slice.call(xml.childNodes).filter(function(node) {
        return node.nodeType === 3;
      });
      if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
        obj = [].slice.call(xml.childNodes).reduce(function(text, node) {
          return text + node.nodeValue;
        }, "");
      } else if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
          var item = xml.childNodes.item(i);
          var nodeName = item.nodeName;
          if (typeof obj[nodeName] == "undefined") {
            obj[nodeName] = xmlToJSONConverter(item);
          } else {
            if (typeof obj[nodeName].push == "undefined") {
              var old = obj[nodeName];
              obj[nodeName] = [];
              obj[nodeName].push(old);
            }
            obj[nodeName].push(xmlToJSONConverter(item));
          }
        }
      }
      document.getElementById("cMessage").value = JSON.stringify(obj, undefined, 4);
}

function jsonToXmlConverter() {
var Parser = require("fast-xml-parser").j2xParser;
//default options need not to set
var defaultOptions = {
    attributeNamePrefix : "@_",
    attrNodeName: "@", //default is false
    textNodeName : "#text",
    ignoreAttributes : true,
    cdataTagName: "__cdata", //default is false
    cdataPositionChar: "\\c",
    format: false,
    indentBy: "  ",
    supressEmptyNode: false,
    tagValueProcessor: a=> he.encode(a, { useNamedReferences: true}),// default is a=>a
    attrValueProcessor: a=> he.encode(a, {isAttributeValue: isAttribute, useNamedReferences: true})// default is a=>a
};
var parser = new Parser(defaultOptions);
var xml = parser.parse(document.getElementById("cMessage").value.trim());
}