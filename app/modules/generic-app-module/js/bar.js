/* Controller for Horizontal template */
hbo.namespace('hbo.GenericTool.controllers');
if (!hbo.GenericTool.controllers.barCtrl){
	hbo.GenericTool.controllers.barCtrl = function($scope){
		 $scope.message = "BAR";
	};
	console.log("instantiated barCtrl");		
}