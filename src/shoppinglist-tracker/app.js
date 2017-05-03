(function(){
  'use strict';
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ShoppingListCheckOffService() {
    var API = this;

    var itemsToBuyList = [
      {name: "cookies", quantity: 10},
      {name: "chips", quantity: 10},
      {name: "candies", quantity: 4},
      {name: "chocolates", quantity: 3},
      {name: "ice creams", quantity: 2}
    ];

    var boughtItemsList = [];

    API.getItemsToBuy = function () {
      return itemsToBuyList;
    };

    API.updateItemsList = function (index) {
      boughtItemsList[boughtItemsList.length] = itemsToBuyList[index];
      itemsToBuyList.splice(index,1);
    }

    API.getBoughtItemsList = function () {
      return boughtItemsList;
    }

  }

  function ToBuyController(ShoppingListCheckOffService) {
    var buyCtrl = this;

    buyCtrl.itemsToBuyList = ShoppingListCheckOffService.getItemsToBuy();
    buyCtrl.boughtItem = function (index) {
      ShoppingListCheckOffService.updateItemsList(index);
    }

  }

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtCtrl = this;

    boughtCtrl.boughtItemsList = ShoppingListCheckOffService.getBoughtItemsList();
  }

})();
