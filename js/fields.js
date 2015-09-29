var validationMessages = {
  messageForTextArea : 'Please enter minimum 50 characters in comments.',
  messageForEmail : 'Email format is not correct. Please fill again.',
  messageForUrl : 'Url format is not correct. Please fill again.',
  recieveNotificationMessage : 'Are You Sure you want to recieve notification?',
  doNotRecieveNotificationMessage : "Are You Sure you don't want to recieve notification?"
};

var InputTypeText = function(field) {
  this.field = field;
};

var TextArea = function(field, minimumCharacter) {
  this.field = field;
  this.minimumCharacter = minimumCharacter;
};

var InputTypeEmail = function(field, regularEx) {
  this.field = field;
  this.regularEx = regularEx;
};

var InputTypeUrl = function(field, regularEx) {
  this.field = field;
  this.regularEx = regularEx;
};

var InputTypeCheckbox = function(field) {
  this.field = field;
};

InputTypeText.prototype = new FormFields();
TextArea.prototype = new FormFields();
InputTypeEmail.prototype = new FormFields();
InputTypeUrl.prototype = new FormFields();

InputTypeText.prototype.validate = function() {
  var flag = true;
  var field = this.field;
  for(index = 0, totalFields = field.length; index < totalFields; index++) {
    if(!this.checkForBlankField(field[index])) {
      this.showMessage(field[index].getAttribute("data-name") + " can't be empty.");
      flag = false;
    }
  }
  return flag;
};

TextArea.prototype.validate = function() {
  return this.minCharactersCheck(this.field, 50) ? true : (this.showMessage(validationMessages.messageForTextArea) , false);
};

InputTypeEmail.prototype.validate = function() {
  return this.checkForRegEx(this.field, this.regularEx) ? true : (this.showMessage(validationMessages.messageForEmail), false);
};

InputTypeUrl.prototype.validate = function() {
  return this.checkForRegEx(this.field, this.regularEx) ? true : (this.showMessage(validationMessages.messageForUrl), false);
};

InputTypeCheckbox.prototype.checkConfirmation = function(message) {
  return confirm(message);
};

InputTypeCheckbox.prototype.showConfirmation = function() {
  return this.field.checked ? this.checkConfirmation(validationMessages.recieveNotificationMessage) : this.checkConfirmation(validationMessages.doNotRecieveNotificationMessage);
};