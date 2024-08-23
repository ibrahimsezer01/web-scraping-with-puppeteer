const puppeteer = require('puppeteer')
const fs = require('fs/promises')

async function start() {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate the page to a URL.
    await page.goto("https://learnwebcode.github.io/practice-requests/")

    // Gets all image URLs from the page
    const images = await page.$$eval("img", (image) => {
        return image.map((x) => x.src)
    });

    // Save the image URLs to a file in imageURLs.txt
    await fs.writeFile(`imageURLs.txt`, images.join("\n"))

    // Downloads the image URLs from the page
    for (let imageUrl of images) {
        const response = await page.goto(imageUrl)
        const buffer = await response.buffer();
        await fs.writeFile(imageUrl.split("/").pop(), buffer);
    }

    // Close the browser
    await browser.close();
}

start()
