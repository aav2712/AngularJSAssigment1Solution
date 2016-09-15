(function () {
	'use strict';

	angular.module('LunchCheck', []).controller('LunchCheckController',Cont);

	Cont.$inject = ['$scope'];
	function Cont ($scope) {

		$scope.verifyAmount = function () {
			var items = $scope.listItems;
			var isNote = false;
			$scope.note = "";
			$scope.fgColor = "green";
			$scope.boxColor = "#fff";
			if (items == undefined || items == "") {
				$scope.fgColor="red";
				$scope.boxColor="red";
				$scope.diagnostic="Please enter data first";
			}
			else {
				var validItems = 0;
				var item = "";
				var char = "";
				for (var i = 0; i < items.length; i++) {
					char = items.charAt(i);
					if (char != ",") {
						item += char;
					}
					else {
						if (item.trim() != "") {validItems++}
						else {isNote = isNote || true};
						item = ""; 
					}
				};
				if (item != "") {
					validItems++
				};
				isNote = isNote || items.charAt(items.length - 1) == ",";
				if (validItems == 0) {
					$scope.diagnostic="Please enter data first";
					$scope.fgColor="red";
					$scope.boxColor="red";
				}
				else {
					if (validItems > 3) {
						$scope.diagnostic="Too much!"
						$scope.boxColor="green";
					}
					else {
						$scope.diagnostic="Enjoy!"
						$scope.boxColor="green";
					};
				};
				if (isNote) {
					$scope.note = "Empty items ignored"
				};

			};
		};
	};


})();
