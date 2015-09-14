var FormFields = function() {
}

FormFields.prototype.showMessage = function(message) {
  alert(message);
}

var InpuTypeText = function(inputField) {
  this.inputField = inputField;
}

var TextArea = function(textField) {
  this.textField = textField;
}

var InputTypeCheckBox = function(checkBox) {
  this.checkBox = checkBox;
}

var InputTypeEmail = function(inputField, regularEx) {
  this.inputField = inputField;
  this.regularEx  = regularEx;
}

var InputTypeUrl = function(inputField, regularEx) {
  this.inputField = inputField;
  this.regularEx  = regularEx;
}

InpuTypeText.prototype   = new FormFields();
TextArea.prototype       = new FormFields();
InputTypeEmail.prototype = new FormFields();
InputTypeUrl.prototype   = new FormFields();

InpuTypeText.prototype.validate = function() {
  var flag = true;
  for(index = 0; index < this.inputField.length; index++) {
    if(this.inputField[index].value.trim().length <= 0) {
      this.showMessage(this.inputField[index].getAttribute("data-name") + " can't be empty.");
      flag = false;
    }
  }
  return flag;
}

TextArea.prototype.validate = function() {
  if(this.textField.value.trim().length <= 49) {
    this.showMessage('Please Enter Atleast 50 Characters in comments');
    return false;
  }
  return true;
}

InputTypeEmail.prototype.validate = function() {
  if(this.inputField.value.match(this.regularEx) && !this.inputField.value == "" ) {
    return true;
  }
  this.showMessage('Please Fill The Email Properly');
  return false;
}

InputTypeUrl.prototype.validate = function() {
  if(this.inputField.value.match(this.regularEx) && !this.inputField.value == "" ) {
    return true;
  }
  this.showMessage('Please Fill The Home Page Properly');
  return false;
}

InputTypeCheckBox.prototype.confirmation = function() {
  this.checkBox.onchange = function() {
    if(this.checked == true) {
     if(confirm("Are You Sure you want to recieve notification ?")) {
      this.checked = true;
     }
     else {
      this.checked = false;
     }
    }
  }
}