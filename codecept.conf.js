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
      'mocha-junit-reporter': {
        stdout: './reports/console.log',
        options: {
          mochaFile: './reports/result.xml',
          testsuitesTitle: 'CodeceptJS Tests',
        },
        "attachments": true //add screenshot for a failed test
      },
      'codeceptjs-cli-reporter': {
        stdout: '-',
        options: {
          steps: true,
        },
      },
    },
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  name: 'test-einnysn'
}
