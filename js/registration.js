const EmailRegEx = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$';
const UrlRegEx = '(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})';

var RegistrationForm = function(regForm) {
  this.regForm = regForm;
  this.inputTypeText = new InputTypeText(document.getElementsByClassName('text-field'));
  this.textArea = new TextArea(document.getElementById('text-area'), 50);
  this.inputTypeEmail = new InputTypeEmail(document.getElementById('email'), EmailRegEx);
  this.inputTypeUrl = new InputTypeUrl(document.getElementById('url'), UrlRegEx);
  this.inputTypeCheckbox = new InputTypeCheckbox(document.getElementById('check'));
  this.fields = [this.inputTypeText, this.textArea, this.inputTypeEmail, this.inputTypeUrl];
};

RegistrationForm.prototype.validateFields = function() {
  var isValid = true;
  for(var index = 0, length = this.fields.length; index < length; index++) {
    isValid = (this.fields[index].validate() && isValid);
  }
  return isValid;
};

RegistrationForm.prototype.validateForm = function() {
  return this.validateFields() && this.inputTypeCheckbox.showConfirmation() ? true : false;
};

RegistrationForm.prototype.submitAfterValidate = function() {
  var _this = this;
  this.regForm.addEventListener('submit', function(event){
    return _this.validateForm() ? true : event.preventDefault();
  });
};

window.onload = function() {
  var registrationForm = new RegistrationForm(document.getElementById('reg-form'));
  registrationForm.submitAfterValidate();
};