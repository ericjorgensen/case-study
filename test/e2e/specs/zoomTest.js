// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'zoomTests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 2000)
      .assert.elementPresent('button.product-images__enlarge-image')
      .click('button.product-images__enlarge-image')
      .waitForElementVisible('.product-images__modal-slider-container', 500)
      .click('.product-images__modal-slider__next-arrow')
      .pause(500)
      .click('.product-images__modal-slider__prev-arrow')
      .end()
  }
}
