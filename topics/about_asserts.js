
module("About Asserts (topics/about_asserts.js)");

test("ok", function() {
    ok(2 > 1 === true, 'what will satisfy the ok assertion?');
    ok(true === true, 'what will satisfy the ok assertion?');
});

test("not ok", function() {
    ok(2 < 1 === false, 'what is a false value?');
    ok(289898 < 1 === false, 'what is a false value?');
});

test("equal", function() {
    equal(2, 1 + 1, 'what will satisfy the equal assertion?');
    equal(10-8, 1 + 1, 'what will satisfy the equal assertion?');
    equal(5, 1 * 5, 'what will satisfy the equal assertion?');
    equal(189-187, 1 + 1, 'what will satisfy the equal assertion?');
});
