import { Given, When, Then } from "@cucumber/cucumber";

Given(/^I am on practice page \"([^\"]*)\"$/, async function (appurl: string) {
  await browser.url(appurl);
  await browser.maximizeWindow();
});

Then(/^I validat page header \"([^\"]*)\"$/, async (headertext: string) => {
  const header = $("//h1");
  expect(await header).toHaveText(headertext);
});

When(
  /^I enter firstname (.+) and lastname (.+)$/,
  async (fname: string, lname: string) => {
    const fname_input = $("[name=firstname]");
    const lname_input = $("[name=lastname]");
    await (await fname_input).setValue(fname);
    await (await lname_input).setValue(lname);
  }
);

When(
  /^I select gender (.+) years (.+) favorite chai (.+) and reason (.+)$/,
  async (gender: string, yrs: string, favchai: string, reason: string) => {
    const gender_radio = await $$("[name=sex]");
    const experience_radio = await $$("[name=exp]");
    const favchai_checkbox = await $$("input[name*=Tea]");
    const whychai_checkobox = await $$("[name=tool]");

    for (let i = 0; i < gender_radio.length; i++) {
      const element = await gender_radio[i].getAttribute("value");
      if (element === gender) {
        await gender_radio[i].click();
        break;
      }
    }

    for (let i = 0; i < experience_radio.length; i++) {
      const element = await experience_radio[i].getAttribute("value");
      if (element === yrs) {
        await experience_radio[i].click();
        break;
      }
    }

    for (let i = 0; i < favchai_checkbox.length; i++) {
      const element = await favchai_checkbox[i].getAttribute("value");
      if (element === favchai) {
        await favchai_checkbox[i].click();
        break;
      }
    }

    for (let i = 0; i < whychai_checkobox.length; i++) {
      const element = await whychai_checkobox[i].getAttribute("value");
      if (element === reason) {
        await whychai_checkobox[i].click();
        break;
      }
    }
  }
);

When(
  /^I select continent (.+) and commands (.+)$/,
  async (continent: string, command: string) => {
    const continet_dropdown = await $("#continents");
    const selCommands_multiselect = await $("#selenium_commands");

    await continet_dropdown.selectByVisibleText(continent);
    await selCommands_multiselect.selectByVisibleText(command);
    await browser.pause(5000);
  }
);

When(/^I click on submit button$/, async () => {
  const submit_btn = await $("#submit");
  await submit_btn.click();
});
