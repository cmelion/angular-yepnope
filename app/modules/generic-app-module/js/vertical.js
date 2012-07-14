/* Controller for Horizontal template */
hbo.namespace('hbo.GenericTool.controllers');
if (!hbo.GenericTool.controllers.verticalCtrl){
	hbo.GenericTool.controllers.verticalCtrl = function($scope){
		 $scope.message = "VERTICAL";
	};
	console.log("instantiated verticalCtrl");		
}