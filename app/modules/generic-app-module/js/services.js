'use strict';


// Demonstrate how to register services
// In this case it is a simple constant service.
angular.module('GenericTool.services', []).
  value('version', '0.1');
