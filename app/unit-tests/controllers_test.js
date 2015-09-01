'use strict';

describe('personalSite Controllers', function() {

  beforeEach(module('personalSite'));
  
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
  
  
  describe('WorksController', function() {
    var scope, ctrl, $httpBackend;
    var imagesData = {imageList: ['src/img.jpg', 'src/img2.jpg']};
    
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('json/images.json').respond(imagesData);
      scope = $rootScope.$new();
      ctrl = $controller('WorksController', { $scope: scope });
    }));
          
    it('should provide images urls', function() {
      expect(scope.images).toBeUndefined();
      $httpBackend.flush();
      expect(scope.images).toEqual(imagesData);
      expect(scope.mainImage).toEqual('src/img.jpg');
    });
    
  });
               
});