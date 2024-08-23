const puppeteer = require('puppeteer')
const fs = require('fs/promises')

async function start() {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate the page to a URL.
    await page.goto("https://learnwebcode.github.io/practice-requests/")

    // Find by id clickme button and get the data
    await page.click("#clickme")

    // Get the text content of the div with id "data"
    const data = await page.$eval("#data", e => e.textContent)

    console.log(data);
    

    // Close the browser
    await browser.close();
}

start()