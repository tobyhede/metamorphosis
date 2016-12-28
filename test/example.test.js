"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var mocha_typescript_1 = require("mocha-typescript");
// @suite
var Hello = (function () {
    function Hello() {
    }
    Hello.prototype["world"] = function () { };
    Hello.prototype.asserts_fail = function () {
        // Any self-respecting assertion framework should throw
        var error = new Error("Assert failed");
        error.expected = "expected";
        error.actual = "to fail";
        throw error;
    };
    Hello.prototype.assert_pass_async = function (done) {
        setTimeout(function () { return done(); }, 1);
    };
    Hello.prototype.assert_fail_async = function (done) {
        setTimeout(function () { return done(new Error("Oops...")); }, 1);
    };
    Hello.prototype.assert_fail_async_no_callback = function (done) {
        // Never called... t/o intentional.
    };
    Hello.prototype.promise_pass_resolved = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve(); }, 1);
        });
    };
    Hello.prototype.promise_fail_rejected = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return reject(new Error("Ooopsss...")); }, 1);
        });
    };
    return Hello;
}());
__decorate([
    mocha_typescript_1.test
], Hello.prototype, "world");
__decorate([
    mocha_typescript_1.test("should fail when asserts are broken")
], Hello.prototype, "asserts_fail");
__decorate([
    mocha_typescript_1.test("should pass async tests")
], Hello.prototype, "assert_pass_async");
__decorate([
    mocha_typescript_1.test("should fail async when given error")
], Hello.prototype, "assert_fail_async");
__decorate([
    mocha_typescript_1.test("should fail async when callback not called"),
    mocha_typescript_1.timeout(100)
], Hello.prototype, "assert_fail_async_no_callback");
__decorate([
    mocha_typescript_1.test("should pass when promise resolved")
], Hello.prototype, "promise_pass_resolved");
__decorate([
    mocha_typescript_1.test("should fail when promise rejected!")
], Hello.prototype, "promise_fail_rejected");
