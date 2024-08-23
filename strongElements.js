const puppeteer = require('puppeteer')
const fs = require('fs/promises')

async function start() {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate the page to a URL.
    await page.goto("https://learnwebcode.github.io/practice-requests/")

    // Gets Strongs elements contents from the page
    const strongElements = await page.$$eval("strong", (strongElement) => {
        return strongElement.map((x) => x.textContent)
    });

    // Save the Strong elements contents to a file in strongElementFile.txt
    await fs.writeFile(`strongElements.txt`, strongElements.join("\n"))

    // Close the browser
    await browser.close();
}

start()