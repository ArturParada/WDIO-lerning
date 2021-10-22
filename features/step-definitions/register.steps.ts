import { Given, When, Then } from "@cucumber/cucumber";
import ChaiRegister from "../pageobjects/register.page";

Given(/^I am on practice page \"([^\"]*)\"$/, async function (appurl: string) {
  await browser.url(appurl);
  await browser.maximizeWindow();
});

Then(/^I validat page header \"([^\"]*)\"$/, async (headertext: string) => {
  expect(await ChaiRegister.header).toHaveText(headertext);
});

When(
  /^I enter firstname (.+) and lastname (.+)$/,
  async (fname: string, lname: string) => {
    await (await ChaiRegister.fname).setValue(fname);
    await (await ChaiRegister.lname).setValue(lname);
  }
);

When(
  /^I select gender (.+) years (.+) favorite chai (.+) and reason (.+)$/,
  async (gender: string, yrs: string, favchai: string, reason: string) => {
    await ChaiRegister.selectDropdown(await ChaiRegister.gender_radio, gender);

    await ChaiRegister.selectDropdown(await ChaiRegister.experience_radio, yrs);

    await ChaiRegister.selectDropdown(
      await ChaiRegister.favchai_checkbox,
      favchai
    );

    await ChaiRegister.selectDropdown(
      await ChaiRegister.whychai_checkobox,
      reason
    );
  }
);

When(
  /^I select continent (.+) and commands (.+)$/,
  async (continent: string, command: string) => {
    await (await ChaiRegister.continet_dropdown).selectByVisibleText(continent);
    await (
      await ChaiRegister.selCommands_multiselect
    ).selectByVisibleText(command);
  }
);

When(/^I click on submit button$/, async () => {
  await (await ChaiRegister.submit_btn).click();
});
