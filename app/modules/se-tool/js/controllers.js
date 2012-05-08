'use strict';
/* App Controllers */
// The top level AppController dynamically sets state for:
//     templates.layout (simulates ng-view but allows for multiple includes)
hbo.seTool.controller('AppController', ['$rootScope','$route','$location', function ($rootScope,$route,$location) { 
    $rootScope.$on('$beforeRouteChange', function(scope, newRoute){
    	var $rt = newRoute.$route;
        if (!$rt) return;
    	$rt.dependencies = $rt.dependencies?$rt.dependencies:false;
        //Load dependencies then set template in oncomplete method
        yepnope({
        	  test: ($rt.loaded === true)||(!$rt.dependencies),
        	  nope: $rt.dependencies.nope,
        	  complete: function () {
        		  $rootScope.templates = $rt.templates;
        		  //The controllers weren't loaded, manually trigger render
        		  if (!$rt.loaded) $rootScope.$digest();  
        		  $rt.loaded = true;        		  
        		  console.log("route complete");
        	  }
        	});        
        
    });
}]); 
