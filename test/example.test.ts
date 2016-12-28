import { suite, test, slow, timeout, skip, only } from "mocha-typescript";

// @suite
class Hello {
  @test "world"() { }

  @test("should fail when asserts are broken")
  asserts_fail() {
      // Any self-respecting assertion framework should throw
      var error = new Error("Assert failed");
      (<any>error).expected = "expected";
      (<any>error).actual = "to fail";
      throw error;
  }

  @test("should pass async tests")
   assert_pass_async(done: Function) {
       setTimeout(() => done(), 1);
   }

   @test("should fail async when given error")
   assert_fail_async(done: Function) {
       setTimeout(() => done(new Error("Oops...")), 1);
   }

  @test("should fail async when callback not called")
  @timeout(100)
  assert_fail_async_no_callback(done: Function) {
      // Never called... t/o intentional.
  }

  @test("should pass when promise resolved")
  promise_pass_resolved() {
      return new Promise((resolve, reject) => {
          setTimeout(() => resolve(), 1);
      });
  }

  @test("should fail when promise rejected!")
  promise_fail_rejected() {
      return new Promise((resolve, reject) => {
          setTimeout(() => reject(new Error("Ooopsss...")), 1);
      });
  }
}
