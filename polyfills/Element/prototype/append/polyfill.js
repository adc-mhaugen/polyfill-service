Document.prototype.append = Element.prototype.append = function append() {
	if (!arguments.length) {
		return;
	}
	this.appendChild(_mutation(arguments));
};
