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
      codeceptjs-cli-reporter: {
        stdout: '-',
        options: {
          verbose: true,
          steps: true,
        }
      },
      mochawesome: {
       stdout: './output/console.log',
       options: {
         reportDir: './output',
         reportFilename: 'report'
      },
      mocha-junit-reporter: {
        stdout: './output/console.log',
        options: {
          mochaFile: './output/result.xml'
        },
        attachments: true //add screenshot for a failed test
      }
    }
  }  
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  name: 'test-einnysn'
}
