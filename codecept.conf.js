exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      waitForNavigation:  [ "domcontentloaded", "networkidle0" ],
       chrome:{
        args: ['--no-sandbox']
      }
    }
  },
  mocha: {
    reporterOptions: {
        mochaFile: 'output/result.xml'
    }
  },  
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  name: 'test-einnysn'
}
