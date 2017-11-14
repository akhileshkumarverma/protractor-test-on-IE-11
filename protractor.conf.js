var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var params = process.argv;
var args = process.argv.slice(3);

exports.config = {
  //directConnect: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  allScriptsTimeout: 10000,
  framework: 'jasmine2',
  baseUrl: "http://www.protractortest.org",
  localSeleniumStandaloneOpts: {
    jvmArgs: ['-Dwebdriver.ie.driver=./node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer3.7.0.exe'
    ]
  },
  onPrepare: function () {
    browser.driver.manage().window().maximize();
    browser.ignoreSynchronization = false;

    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: __dirname+'/qualityreports/testresults/e2e',
        takeScreenshots: false,
        filePrefix: 'automationReport',
        consolidate: true,
        cleanDestination: false,
        consolidateAll: true

      })
    );
  },


  suites:{
    example:['./test/e2e/specs/**/homeSpec.js']
  },

  capabilities:
    {
      'browserName': 'internet explorer',
      'platform': 'ANY',
      'version': '11'
    },


  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 200000
  }
};