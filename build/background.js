var statesArray = ['unitedstatesofamerica', 'us', 'unitedstates', 'america', 'usa'];

var selectElements = document.getElementsByTagName('select');
var selectElement, optionElement;
for (var i = 0; i < selectElements.length; i++) {
	selectElement = selectElements[i];
	for (var j = 0; j < selectElement.length; j++) {
		optionElement = selectElement[j];
		if (statesArray.indexOf(optionElement.text.replace(/ /g, '').toLowerCase()) > -1) {
			selectElement.removeChild(optionElement)
			optionElement.setAttribute('selected', 'selected');
			selectElement.insertBefore(optionElement, selectElement[0]);
		}
	}
}
