// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'quantityTests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.product-quantity')
      .click('.qty-decrease')
      .pause(500)
      .assert.value('#product-quantity-value', "0")
      .click('.qty-increase')
      .pause(500)
      .assert.value('#product-quantity-value', "1")
      .end()
  }
}
