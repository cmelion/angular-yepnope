/* Controller for Horizontal template */
hbo.namespace('hbo.GenericTool.controllers');
if (!hbo.GenericTool.controllers.fooCtrl){
	hbo.GenericTool.controllers.fooCtrl = function($scope){
		 $scope.message = "FOO";
	};
	console.log("instantiated fooCtrl");		
}