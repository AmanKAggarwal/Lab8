# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
Answer: Within a Github action that runs whenever code is pushed 
This would ensure that the tests run every time you make a change to your code base. This is essential because sometimes during development the developers might be under pressure and might push low quality code. However, to avoid such code to bring the overall quality of the app down, automated tests will enforce the developers to write and push high quality code. 

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

Answer: I would certainly write unit tests, but it would be broken down to test the several aspects of the messaging feature. Every signifant step of the application should be tested. First, tests should ensure that the frontend communicates accurate messages to the backend. Second, the backend should be tested such that it sends the accurate message to the desired user. Finally, it must be tested that the recieving user's frontend accurately reflects this message. To do some of these tests, restricting to simply unit tests might be ineffecient but they should surely be a part of the test flow.


3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
Yes, I would. Since, "max message length" is a simpler feature unit test could be used more effeciently in this case. However, the user interactions should also be tested, perhaps using unit tests or some frontend testing framework. 

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
Running the puppeteer tests with "headless" set to true would mean that all tests are run without any browser UI. In that case, though the test results are same, the developer cannot see puppeteer actually make interactions with the application through the browser. 

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
```
beforeAll(async () => {
    await page.goto(baseURL);
    const settingsButton = await page.$('header > img');
    settingsButton.click();
    await page.waitForTimeout(500);
  });
```
