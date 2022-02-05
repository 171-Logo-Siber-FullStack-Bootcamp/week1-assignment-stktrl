import XmlHttpRequest from "xhr2";

var xhr = new XmlHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4) {
		if (xhr.status === 200) {
			console.log(xhr.responseText);
		} else {
			console.log("Error: " + xhr.status);
		}
	}
};
xhr.send(null);
