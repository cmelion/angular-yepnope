/* jasmine specs for controllers go here */

describe('horizontalCtrl', function(){
  var horizontalCtrlInst, scope={};  

  beforeEach(function(){
	  horizontalCtrlInst = new hbo.seTool.controllers.horizontalCtrl(scope);
  });


  it('should set layout to horizontal', function() {
    //spec body
	  expect(scope.message).toEqual("HORIZONTAL");
  });
});


describe('verticalCtrl', function(){
  var verticalCtrlInst, scope={};

  beforeEach(function(){
    verticalCtrlInst = new hbo.seTool.controllers.verticalCtrl(scope);
  });


  it('should set layout to vertical', function() {
    //spec body
	  expect(scope.message).toEqual("VERTICAL");
  });
});

describe('fooCtrl', function(){
	  var fooCtrlInst, scope={};

	  beforeEach(function(){
	    fooCtrlInst = new hbo.seTool.controllers.fooCtrl(scope);
	  });


	  it('should set the included template text to FOO', function() {
	    //spec body
		  expect(scope.message).toEqual("FOO");
	  });
});

describe('barCtrl', function(){
	  var barCtrlInst, scope={};

	  beforeEach(function(){
	    barCtrlInst = new hbo.seTool.controllers.barCtrl(scope);
	  });


	  it('should set the included template text to BAR', function() {
	    //spec body
		  expect(scope.message).toEqual("BAR");
	  });
});
