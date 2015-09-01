'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('personalSite', function() {

  var home = element(by.repeater('link in links').row(0));
  var cv = element(by.repeater('link in links').row(1));
  var projects = element(by.repeater('link in links').row(2));
  var works = element(by.repeater('link in links').row(3));
  var contact = element(by.repeater('link in links').row(4));
  
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
    cv.element(by.css('h1')).click();
    expect(browser.getCurrentUrl()).toMatch(/\/cv/);
    projects.element(by.css('h1')).click();
    expect(browser.getCurrentUrl()).toMatch(/\/projects/);
    works.element(by.css('h1')).click();
    expect(browser.getCurrentUrl()).toMatch(/\/works/);
    contact.element(by.css('h1')).click();
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
      cv.element(by.css('h1')).click();
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
  
});
