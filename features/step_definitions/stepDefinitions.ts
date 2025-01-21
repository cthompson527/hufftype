import { expect } from "bun:test";
import { When, Then } from "@cucumber/cucumber";
import { sayHello } from "../../src";

When("the greeter says hello", function () {
  this.isWhatIsSaid = sayHello();
});

Then("I should have heard {string}", function (expectedResponse: string) {
  expect(expectedResponse).toBe(this.isWhatIsSaid);
});
