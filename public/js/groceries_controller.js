app.controller('GroceriesCtrl', GroceriesCtrl);

function GroceriesCtrl() {

  this.all = [];

  this.newGrocery = '';

  this.add = function () {
    this.all.push(this.newGrocery);
    //TODO create new Grocery
  }

}
