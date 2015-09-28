
var ipApp = angular.module("InvalidPopup",[]);

ipApp.controller("InvalidPopupController" , function($scope){
	var vm = $scope;
	vm.isFixVisible = true;
	vm.fixGtinInfo = function(){
		vm.isFixVisible=false;
	}
	vm.updateGtinInfo =  function(){
		vm.isFixVisible=true;
	}
});

