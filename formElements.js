const puppeteer = require('puppeteer')

async function start() {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate the page to a URL.
    await page.goto("https://learnwebcode.github.io/practice-requests/")

    // Write the blue values in ourfield id is
    await page.type("#ourfield", "blue")

    // Click the submit button and wait for the page to navigate
    await Promise.all([page.click("#ourform button"), page.waitForNavigation()])

    // Read the content of the message element
    const text = await page.$eval("#message", e => e.textContent)

    console.log(text);

    // Close the browser
    await browser.close();
}

start()