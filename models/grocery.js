var mongoose = require('mongoose');

var GrocerySchema = new mongoose.Schema({
  foodItem: String
});

var Grocery = mongoose.model('Grocery', GrocerySchema);

module.exports = Grocery;
