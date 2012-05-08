/* Controller for Horizontal template */
hbo.namespace('hbo.seTool.controllers');
if (!hbo.seTool.controllers.fooCtrl){
	hbo.seTool.controllers.fooCtrl = function($scope){
		 $scope.message = "FOO";
	};
	console.log("instantiated fooCtrl");		
}