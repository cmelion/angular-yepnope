describe('steeperTool', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/modules/se-tool/index.html');
  });


  it('should automatically redirect to /iframe-tests when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/iframe-tests");
  });


  describe('iframe-tests', function() {

    beforeEach(function() {
      browser().navigateTo('#/iframe-tests');
    });


    it('should render an iframe with src set to wikipedia.com when user navigates to /iframe-tests', function() {
      expect(element('iframe').attr('src')).
        toEqual('http://wikipedia.com');
    });
    
    it('should render an iframe with a width of 400px when user navigates to /iframe-tests', function() {
    	sleep(2);
    	expect(element('iframe').outerWidth()).
          toEqual(404);
      });    
    
  });


  describe('config1', function() {

    beforeEach(function() {
      browser().navigateTo('#/config1');
    });


    it('should render partial for view 2 when navigates to /config1', function() {
    	expect(element('[ng-view] p:first').text()).
        toMatch(/partial for view 2/);
    });

  });
});
