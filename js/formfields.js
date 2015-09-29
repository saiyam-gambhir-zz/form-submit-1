var FormFields = function() {
};

FormFields.prototype = new ValidationType();

FormFields.prototype.showMessage = function(message) {
  alert(message);
};