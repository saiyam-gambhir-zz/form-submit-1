var ValidationType = function() {
};

ValidationType.prototype.minCharactersCheck = function(field, minimumCharacter) {
  return field.value.trim().length < minimumCharacter ? false : true;
}

ValidationType.prototype.checkForRegEx = function(field, regEx) {
  return field.value.match(regEx) ? true : false;
};

ValidationType.prototype.checkForBlankField = function(field) {
  return field.value.trim().length ? true : false;
}