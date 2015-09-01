'use strict';

describe('personalSite Controllers', function() {

  describe('CvController', function(){
    var scope, ctrl, $httpBackend;
    var cvData = {personal: {
                    languages: ["picza", "dupa"]
                  },
                  webDev: {
                    skills: {
                      list: ["piczsko", "dupsko"]
                    }
                  }
                };
    
    beforeEach(module('personalSite'));
    
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('json/cv.json').respond(cvData);
      scope = $rootScope.$new();
      ctrl = $controller('CvController', { $scope: scope});
    }));      

    it('should provide data from json file', function() {
      //spec body
      expect(scope.cv).toBeUndefined();
      $httpBackend.flush();
      expect(scope.cv).toEqual(cvData);
      expect(scope.languages).toEqual("picza, dupa");
      expect(scope.technologies).toEqual("piczsko, dupsko");                               
    });
  
  });
               
});