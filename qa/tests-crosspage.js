var Browser = require('zombie'),
  assert = require('chai').assert

var browser

suite('Cross page tests', function() {
  setup(function() {
    browser = new Browser()
  })

  test('requiring a group rate quote from the hood river page ' +
        'should populate the referrer field', function(done) {
    var referrer = 'http://localhost:3001/tours/hood-river'
    browser.visit(referrer, function() {
      browser.clickLink('.requestGroupRate', function() {
      console.log(browser.referrer)
        assert(browser.referer === referrer)
        done()
      })
    })
  })

  test('requiring a group rate from the oregon coast tour pate should ' +
        'populate the referrer field', function(done) {
    var referrer = 'http://localhost:3001/tours/oregon-coast'
    browser.visit(referrer, function() {
      browser.clickLink('.requestGroupRate', function() {
      console.log(browser.referrer)
        assert(browser.referer === referrer)
        done()
      })
    })
  })

  test('visiting "the request group rate" page directly should result ' +
        '', function(done) {
    browser.visit('http://localhost:3001/tours/hood-river', function() {
      assert(browser.referer === '')
      done()
    })
  })
})
