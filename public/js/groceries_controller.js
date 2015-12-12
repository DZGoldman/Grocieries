app.controller('GroceriesCtrl', GroceriesCtrl);

 var allGroceries=[];


function GroceriesCtrl($scope, $http) {
  //initialize with current database

  this.start = function () {
    $http.get('/index').then(function (data) {
      data.data.forEach(function (grocery) {
          allGroceries.push(grocery.foodItem)
        })
    })
    return allGroceries
  }

  this.all = allGroceries;

  this.newGrocery = '';

  this.add = function () {

    this.all.push(this.newGrocery);

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
  };

  this.delete = function ($index) {
    var objectData = {data1: this.all[$index]};

    $.ajax(
       {
       dataType: 'json',
       data: objectData,
       type: 'delete',
       url: '/destroy'
     }
    );
    this.all.splice($index, 1);
  };
  this.edit = function () {
    console.log('editing');
  }

};
