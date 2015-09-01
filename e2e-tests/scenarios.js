'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('personalSite', function() {

  var home = element(by.repeater('link in links').row(0)).element(by.css('h1'));
  var cv = element(by.repeater('link in links').row(1)).element(by.css('h1'));
  var projects = element(by.repeater('link in links').row(2)).element(by.css('h1'));
  var works = element(by.repeater('link in links').row(3)).element(by.css('h1'));
  var contact = element(by.repeater('link in links').row(4)).element(by.css('h1'));
  
  beforeEach(function() {
    browser.get('app/index.html#/home');
  });
  
  it('should have 5 elements in navbar', function() {
    expect(element.all(by.repeater('link in links')).count()).toEqual(5);
    expect(home.getText()).toEqual('HOME');
    expect(cv.getText()).toEqual('CV');
    expect(projects.getText()).toEqual('PROJECTS');
    expect(works.getText()).toEqual('WORKS');
    expect(contact.getText()).toEqual('CONTACT');
  });
  
  it('should navigate to proper sites', function() {
    home.click();
    expect(browser.getCurrentUrl()).toMatch(/\/home/);
    cv.click();
    expect(browser.getCurrentUrl()).toMatch(/\/cv/);
    projects.click();
    expect(browser.getCurrentUrl()).toMatch(/\/projects/);
    works.click();
    expect(browser.getCurrentUrl()).toMatch(/\/works/);
    contact.click();
    expect(browser.getCurrentUrl()).toMatch(/\/contact/);
  });
  
  
  describe('home site', function() {
    
    it('should display image and bio text', function() {
      expect(element(by.css('#bio')).isPresent()).toBe(true);
      expect(element(by.css('#prof_foto')).isPresent()).toBe(true);
    });
    
  });
  
  
  describe('cv site', function() {
    
    beforeEach(function() {
      cv.click();
    });
    
    it('should display cv', function() {
      expect(element(by.css('#cv_container')).isPresent()).toBe(true);
    });
    
    it('should display 7 lists', function() {
      expect(element.all(by.css('.cv')).count()).toEqual(7);
    });
    
    it('should display cv download button', function() {
      expect(element(by.css('#download_button')).isPresent()).toBe(true);
    });
    
  });
  
  describe('works site', function() {
    
    beforeEach(function() {
      works.click();
    });
    
    it('should display 9 images', function() {
      expect(element.all(by.repeater('img in images.imageList')).count()).toEqual(9);      
    });
    
    it('should display initial main image, and change it on thumb click', function() {
      var second_img = element(by.repeater('img in images.imageList').row(1)).element(by.css('img'));
      expect(element(by.css('#big_foto')).isPresent()).toBe(true);
      second_img.click();
      expect(element(by.css('#big_foto')).getAttribute('src')).toEqual(second_img.getAttribute('src'));
    });
    
  });
  
});
