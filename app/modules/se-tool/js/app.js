'use strict';
var hbo = hbo || {};

// Declare app level module which depends on filters, and services
hbo.seTool = angular.module('SETool', ['SETool.filters', 'SETool.services', 'SETool.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/horizontal', {templates: { layout:	'partials/horizontal.html',
    												 left:		'partials/foo.html',
    												 right:		'partials/bar.html'
    												},
    									dependencies: {
    										nope: {
    											'horizontal': 'js/horizontal.js',
    											'foo'		: 'js/foo.js',
    											'bar'		: 'js/bar.js'	
  }}});
    $routeProvider.when('/vertical', {templates: {	layout:		'partials/vertical.html',
    												top:		'partials/foo.html',
    												bottom:		'partials/bar.html'
    											 },
    								  dependencies: {
    										nope: {
    											'vertical'	: 'js/vertical.js',
    											'foo'		: 'js/foo.js',
    											'bar'		: 'js/bar.js'
  }}});    
    $routeProvider.otherwise({redirectTo: '/horizontal'});
}]);