
var homePage = require("../page-Object/homePage.js");

describe("verify launch of zoom77 home page", function () {
  var home = new homePage();
  it("verify base URL of home page", function () {
    browser.get(browser.baseUrl);
    console.log(browser.baseUrl);
  });
   it("verify display of protractor logo on home page", function () {
     home.getHomePageLogoVisibility().then(function (val) {
       expect(val).toBe(true);
     });
   });
   it("verify presence of protractor logo on home page", function () {
     home.getHomePageLogoPresence().then(function (value) {
       expect(value).toBe(true);
     });
   });
});
