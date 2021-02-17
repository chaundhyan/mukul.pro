function clearText() {
    document.getElementById("nanoSeconds").value = "";
    document.getElementById("milliSeconds").value = "";
    document.getElementById("seconds").value = "";
    document.getElementById("minute").value = "";
    document.getElementById("hour").value = "";
    document.getElementById("day").value = "";
}

function convert(textBox) {
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