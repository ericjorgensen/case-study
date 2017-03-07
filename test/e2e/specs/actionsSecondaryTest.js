// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'actionsPrimaryTests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 2000)
      .assert.elementPresent('.product-actions-secondary')
      .assert.elementPresent('#add-to-registry')
      .assert.containsText('#add-to-registry', 'ADD TO REGISTRY')
      .assert.elementPresent('#add-to-list')
      .assert.containsText('#add-to-list', 'ADD TO LIST')
      .assert.elementPresent('#share')
      .assert.containsText('#share', 'SHARE')
      .end()
  }
}