// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'reviewsTests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 2000)
      .assert.elementPresent('.product-reviews.hidden-xs')
      .assert.elementPresent('.product-reviews.visible-xs')
      .elements('css selector', '.product-reviews.hidden-xs .product-reviews__review', function (result) {
          browser.assert.equal(result.value.length, 2);
      })
      .elements('css selector', '.product-reviews.visible-xs .product-reviews__review', function (result) {
          browser.assert.equal(result.value.length, 2);
      })
      .end()
  }
}
