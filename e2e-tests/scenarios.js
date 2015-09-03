'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('personalSite', function() {

  var home = element(by.repeater('link in links').row(0)).element(by.css('h1'));
  var cv = element(by.repeater('link in links').row(1)).element(by.css('h1'));
  var projects = element(by.repeater('link in links').row(2)).element(by.css('h1'));
  var works = element(by.repeater('link in links').row(3)).element(by.css('h1'));
  var contact = element(by.repeater('link in links').row(4)).element(by.css('h1'));
  var kgo = element(by.repeater('project in projects').row(0)).element(by.css('h1'));
  var gyst = element(by.repeater('project in projects').row(1)).element(by.css('h1'));
  var portfolio = element(by.repeater('project in projects').row(2)).element(by.css('h1'));

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

    it('should display 2 iframes', function() {
      expect(element.all(by.css('iframe')).count()).toEqual(2);
    });

    it('should display initial main image, and change it on thumb click', function() {
      var second_img = element(by.repeater('img in images.imageList').row(1)).element(by.css('img'));
      expect(element(by.css('#big_foto')).isPresent()).toBe(true);
      second_img.click();
      expect(element(by.css('#big_foto')).getAttribute('src')).toEqual(second_img.getAttribute('src'));
    });

  });

  describe('contact site', function() {

    beforeEach(function() {
      contact.click();
    });

    it('should display contact info and e-mail address', function() {
      expect(element(by.css('#contact_details')).isPresent()).toBe(true);
      expect(element(by.css('#contact_headers')).isPresent()).toBe(true);
      expect(element(by.css('div p a')).getText()).toEqual('p.kaczmarczyk@steinerstore.pl');
    });

  });

  describe('projects site', function() {

    beforeEach(function() {
      projects.click();
    });

    it('should navigate to proper project subsite', function() {
      projects.click();
      kgo.click();
      expect(browser.getCurrentUrl()).toMatch(/\/projects\/kgo/);
      projects.click();
      gyst.click();
      expect(browser.getCurrentUrl()).toMatch(/\/projects\/gyst/);
      projects.click();
      portfolio.click();
      expect(browser.getCurrentUrl()).toMatch(/\/projects\/portfolio/);
    });

    it('should display 3 images', function() {
      expect(element.all(by.css('img')).count()).toEqual(3);
    });

    it('should have links to 3 projects', function() {
      expect(element.all(by.css('section a')).count()).toEqual(3);
      element.all(by.css('section h1')).getText().then(function(posts) {
        var names = ['KGO - Kolezenska Giełda Ostrokołowa',
                     'GYST - Get Your Shit Together',
                     'Portfolio'];
        var i = 0;
        console.log(posts);
        for(i; i <= 2; i++) {
          expect(posts[i]).toEqual(names[i]);
        }
      })

      describe('subproject sites', function() {

        beforeEach(function() {
          var names = ['kgo', 'gyst', 'portfolio']
          var i = 0
        });

        it('should display 3 sections with images, descriptions and github link', function() {
          for(i, i<3, i++) {
            browser.get('app/index.html#/' + names[i]);
            expect(element.all(by.css('section')).count()).toEqual(3);
            expect(element.all(by.css('img.screenshot')).count()).toEqual(3);
            expect(element(by.binding('project.name')).isPresent()).toBe(true);
            expect(element(by.binding('project.description')).isPresent()).toBe(true);
            expect(element(by.binding('project.technologies')).isPresent()).toBe(true);
            expect(element(by.binding('project.github')).isPresent()).toBe(true);
            expect(element(by.binding('project.techDescription')).isPresent()).toBe(true);
          }
        });

      });

    });


  });

});
