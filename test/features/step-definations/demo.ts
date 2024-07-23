import { Given, When, Then } from "@wdio/cucumber-framework";
import * as chai from "chai";

Given(/^Google page is opened$/, async function () {
  await browser.url("https://www.google.com");
  await browser.pause(50000);
});

When(/^Search with (.*)$/, async function (searchItem) {
  console.log(`>> searchItem : ${searchItem}`);
  let ele = await $(`[name=q]`);
  await ele.setValue(searchItem);
  await browser.keys("Enter");
});

Then(/^Click on the first search result$/, async function () {
  let ele = await $(`<h3>`);
  await ele.click();
});

Then(/^URL should match (.*)$/, async function (expectedURL) {
  console.log(`>> expectedURL: ${expectedURL}`);
  let url = await browser.getUrl();
  chai.expect(url).to.equal(expectedURL);
});

/**
 * Web Interactions
 */
Given(/^A web page is opened$/, async function () {
  await browser.url("/inputs");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000});
  await browser.maximizeWindow();
});

When(/^Perform web interactions$/, async function () {
  /**
   * 1. Input box 
   * Actions:
   * 1. Type into input box
   * 2. clear the field and just type or add value
   * 3. click and type
   * 4. slow typing
   */

  let ele = await $(`[type=number]`);
  //await ele.setValue("12345");

  let num = 12345;
  let str = num.toString();

  await ele.click();

  for (let index = 0; index < str.length; index++) {
    let charStr =  str.charAt(index);
    await browser.pause(1000);
    await browser.keys(charStr);
  }

  await browser.pause(3000);
})
