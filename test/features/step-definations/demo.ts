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
  await browser.waitUntil(async function () {
    return (
      (await browser.getTitle()) ===
      "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
    )
  }, {timeout: 20000, interval: 500, timeoutMsg: `Failed to load WDIO page: ${await browser.getTitle()}`});

  let url = await browser.getUrl();
  chai.expect(url).to.equal(expectedURL);
});

/**
 * Web Interactions
 */
Given(/^A web page is opened$/, async function () {
  await browser.url("https://www.amazon.in/");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
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

  //let ele = await $(`[type=number]`);
  //await ele.setValue("12345");

  // let num = 12345;
  // let str = num.toString();

  // await ele.click();

  // for (let index = 0; index < str.length; index++) {
  //   let charStr =  str.charAt(index);
  //   await browser.pause(1000);
  //   await browser.keys(charStr);
  // }

  /**
   * 2. Dropdown
   * Actions:
   * 1. Assert Default option is selected
   * 2. Select by Attribute, text, index
   * 3. Get list of options
   */

  /** 1. Assert Default option is selected */
  // let ele = await $('//select/option[@selected="selected"]');
  // let val = await ele.getText();
  // console.log(`>> value : `, val);

  // chai.expect(val).to.equal("Please select an option");

  /** 2. Select by Attribute, text, index */
  //let ddEle = await $('#dropdown');
  //await ddEle.selectByVisibleText("Option 2");
  //await ddEle.selectByAttribute("value", "1");
  //await ddEle.selectByIndex(2);

  /** 3. Get list of options */
  // let eleArr = await $$(`select > option`);
  // let arr = [];
  // for (let i = 0; i < eleArr.length; i++) {
  //   let ele = eleArr[i];
  //   let val = await ele.getText();
  //   console.log(val);

  //   arr.push(val);
  // }

  // console.log(`Options : ${arr}`);

  /**
   * 3. Checkbox
   * Actions
   * 1. Select an option
   * 2. Unselect an option (if selected)
   * 3. Assert if option is selected
   * 4. select all options
   */

  //let ele = await $(`//form[@id="checkboxes"]/input[2]`);

  // if (!(await ele.isSelected)) {
  //   await ele.click();
  // }

  // let isChecked = await ele.isSelected();
  // chai.expect(isChecked).to.be.true;

  // let eleArr = await $$(`//form[@id="checkboxes"]/input`);

  // for (let i = 0; i < eleArr.length; i++) {
  //   let ele = eleArr[i];
  //   if (!(await ele.isSelected())) {
  //     await ele.click();
  //   }
  // }

  /**
   * 4. windows handling
   * Actions
   * 1. Launch the browser
   * 2. Open another window
   * 3. Switch to the window based on the title
   * 4. Switch back to the main window
   */

  // (await $(`=Click Here`)).click();
  // (await $(`=Elemental Selenium`)).click();
  // let currentWinTitle = await browser.getTitle();
  // let parentWinHandle = await browser.getWindowHandle();

  // console.log(` currentWinTitle : ${currentWinTitle}`);
  // let winHandles = await browser.getWindowHandles();

  // // Select a specific window
  // for (let i = 0; i < winHandles.length; i++ ) {
  //   console.log(`>> ${winHandles[i]}`);
  //   await browser.switchToWindow(winHandles[i]);
  //   currentWinTitle = await browser.getTitle();
  //   if (currentWinTitle === "Home | Elemental Selenium") {
  //     await browser.switchToWindow(winHandles[i]);
  //     let headerTxtEleSel = await (await $(`<h1>`)).getText();
  //     console.log(`headerTxtEleSel : ${headerTxtEleSel}`);
  //     // Rest of the actions go here ...
  //     break;
  //   }
  // }

  // // Switch to parent window
  // await browser.switchToWindow(parentWinHandle);
  // let parentHeaderTxt = await (await browser.$(`<h3>`)).getText();
  // console.log(` parentHeaderTxt : ${parentHeaderTxt}`);

  /**
   * 5. Alert handling
   */
  // (await $(`button=Click for JS Prompt`)).click();
  // if (browser.isAlertOpen()) {
  //   let alertTxt = await browser.getAlertText();
  //   console.log(` alert text : ${alertTxt}`);
  //   await browser.sendAlertText(`Hello, JS prompt...`);
  //   await browser.acceptAlert();
  // }

  /**
   * 5. Upload file
   */

  // (await $(`#file-upload`)).addValue(`${process.cwd()}/data/fileupload/dummy.txt`);
  // (await $(`#file-submit`)).click();

  /**
   * 6. Frames
   */

  // (await $(`=iFrame`)).click();
  // let ele = await $(`#mce_0_ifr`);
  // await browser.switchToFrame(ele);

  // await browser.keys(["Meta", "A"]);

  // //Interaction with Frame
  // (await $(`#tinymce`)).setValue('Typing something in frame...');

  // // Switch to parent frame
  // await browser.switchToParentFrame();

  /**
   * 7. Basic scrolling
   */
  // (await $(`span=Best Sellers in Toys & Games`)).scrollIntoView();

  /**
   *  Web tables
   */

  /** 1. Check number of rows and columns */
  // let rowCount = await $$(`//table[@id="table1"]/tbody/tr`).length;
  // chai.expect(rowCount).to.equal(4);
  // console.log(`>> Number of rows: ${rowCount}`);

  // let colCount = await $$(`//table[@id="table1"]/thead/tr/th`).length;
  // console.log(`>> Number of cols: ${colCount}`);
  // chai.expect(colCount).to.equal(6);

  /** 2. Get whole table data */
  // let arr = [];
  // for(let i = 0; i < rowCount; i++) {
  //   let personObj = {
  //     lastname : "",
  //     firstname : "",
  //     email : "",
  //     due : "",
  //     web : ""
  //   }
  //   for(let j = 0; j < colCount; j++) {
  //     let cellVal = await (await $(`//table[@id="table1"]/tbody/tr[${i+1}]/td[${j+1}]`)).getText();
  //     if(j === 0) personObj.lastname = cellVal;
  //     if(j === 1) personObj.firstname = cellVal;
  //     if(j === 2) personObj.email = cellVal;
  //     if(j === 3) personObj.due = cellVal;
  //     if(j === 4) personObj.web = cellVal;
  //   }
  //   arr.push(personObj);
  // }
  // console.log(`Whole table : ${JSON.stringify(arr)}`);

  /** Get a single row [Based on condition] */
  // let arr = [];
  // for (let i = 0; i < rowCount; i++) {
  //   let personObj = {
  //     lastname: "",
  //     firstname: "",
  //     email: "",
  //     due: "",
  //     web: "",
  //   };
  //   for (let j = 0; j < colCount; j++) {
  //     let cellVal = await (
  //       await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[${j + 1}]`)
  //     ).getText();

  //     let firstname = await (
  //       await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[2]`)
  //     ).getText();

  //     if (firstname === "Jason") {
  //       if (j === 0) personObj.lastname = cellVal;
  //       if (j === 1) personObj.firstname = cellVal;
  //       if (j === 2) personObj.email = cellVal;
  //       if (j === 3) personObj.due = cellVal;
  //       if (j === 4) personObj.web = cellVal;
  //     }
  //   }
  //   if (personObj.firstname) {
  //     arr.push(personObj);
  //   }
  // }
  // console.log(`Whole table : ${JSON.stringify(arr)}`);

  /** 4. Get a single column */
  // let dueArr = [];
  // for (let i = 0; i < rowCount; i++) {
  //   let dueValue = await (
  //     await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[4]`)
  //   ).getText();
  //   dueArr.push(dueValue);
  // }
  // console.log(`Due values : ${dueArr}`);

  /** 5. Get a single cell value [Based on another cell] */
  // let arr = [];
  // for (let i = 0; i < rowCount; i++) {

  //     let price = await (
  //       await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[4]`)
  //     ).getText();

  //     let firstname = await (await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[2]`)).getText();

  //     if(+(price.replace("$","")) > 50) {
  //       arr.push(firstname);

  //   }
  // }
  // console.log(`>> Value : ${arr}`);

  /**
   * Scrolling
   * VISIBLE PORTION
   * https://www.amazon.in/
   */
  // scroll down
  await browser.execute(() => {
    window.scrollBy(0, window.innerHeight);
  });

  await browser.pause(2000);

  // scroll top
  await browser.execute(() => {
    window.scrollBy(0, -window.innerHeight);
  });

  /**
   * INVISIBLE PORTION
   */

  await browser.pause(2000);

  // Scroll top
  await browser.execute(() => {
    window.scrollBy(0, document.body.scrollHeight);
  });

  await browser.pause(2000);
  // Scroll top
  await browser.execute(() => {
    window.scrollBy(0, document.body.scrollTop);
  });
  await browser.pause(3000);
});
