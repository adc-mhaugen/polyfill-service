Document.prototype.prepend = Element.prototype.prepend = function prepend() {
	if (!arguments.length) {
		return;
	}
	this.insertBefore(_mutation(arguments), this.firstChild);
};
