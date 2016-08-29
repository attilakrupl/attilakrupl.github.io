function AISelectField(availableFields) {
  var randomField = board[Math.floor(Math.random() * availableFields.length)];
  return availableFields[randomField.id];
}
