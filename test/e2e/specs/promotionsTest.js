// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'promotionsTests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 2000)
      .assert.elementPresent('.product-promotions')
      .elements('css selector', '.product-promotions li', function (result) {
          browser.assert.equal(result.value.length, 2);
      })
      .end()
  }
}
