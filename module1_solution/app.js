(function(){
	angular.module('LunchCheck',[])
	.controller('LunchCheckController',DIController);
	
	DIController.$inject=['$scope'];
	
	function DIController($scope){
		$scope.lunchItem="";
		$scope.statusType="";
		$scope.checkedMessage="";
		$scope.verifyLunchItem=function(){
			$scope.statusType="correct";
			var itemCount = findItemCount($scope.lunchItem);
			if(itemCount == 0){
				$scope.checkedMessage="Please enter data first";
				$scope.statusType="error";
			}
			else if(itemCount <= 3){
				$scope.checkedMessage="Enjoy!";
			}
			else{
				$scope.checkedMessage="Too much!";
			}
			
		}
	}
	function findItemCount(lunchItem){
		var items = lunchItem.split(",");
		var count = 0;
		for(var i=0;i<items.length;++i){
			if(items[i].trim()!=""){
				count++;
			}
		}
		return count;
	}
})();