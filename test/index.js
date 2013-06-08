var test = require("tape")

var generators = require("../index")

test("generators is a function", function (assert) {
    assert.equal(typeof generators, "function")
    assert.end()
})
