app.controller('GroceriesCtrl', GroceriesCtrl);

function GroceriesCtrl() {

  this.all = [];

  this.newGrocery = '';

  this.add = function () {

    this.all.push(this.newGrocery);
    //TODO create new Grocery
    var objectData = {data1: this.newGrocery}

    $.ajax(
       {
       dataType: 'json',
       data: objectData,
       type: 'post',
       url: '/new'
     }
    );
    this.newGrocery = ''
  }

};

//on page load, add all of them
