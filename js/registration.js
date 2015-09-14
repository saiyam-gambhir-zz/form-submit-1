var RegistrationForm = function(form, submitButton) {
  this.form                  = form;
  this.submitButton          = submitButton;
  this.inpuTypeText          = new InpuTypeText(document.getElementsByClassName('text-field'));
  this.textArea              = new TextArea(document.getElementById('text-area'));
  this.inputTypeCheckBox     = new InputTypeCheckBox(document.getElementById('check'));
  this.inputTypeEmail        = new InputTypeEmail(document.getElementById('email'), '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$');
  this.inputTypeUrl          = new InputTypeUrl(document.getElementById('url'), '(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})');
}

RegistrationForm.prototype.submitAndValidate = function() {
  var _this = this;
  this.inputTypeCheckBox.confirmation();
  this.form.onsubmit = function() {
    if(_this.inpuTypeText.validate() & _this.textArea.validate() & _this.inputTypeEmail.validate() & _this.inputTypeUrl.validate()) {
      alert('Form Submitted Successfully');
      return true;
    }
    return false;
  }
}

RegistrationForm.prototype.bind = function() {
  this.submitAndValidate();
}

window.onload = function() {
  var registrationForm = new RegistrationForm(document.getElementById('reg-form'),document.getElementById('btn-submit'));
  registrationForm.bind();
}