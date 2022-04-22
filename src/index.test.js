const puppeteer = require('puppeteer')
const getPrintedCoords = require('./index')
const path = require('path')
jest.setTimeout(1_600_000)


describe('Timeline', () => {
  let browser = null;
  let page = null;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false, // show gui
      slowMo: 150,
      devtools: false, // show devTools
    });
    page = await browser.newPage();
  })

  afterAll(async () => {
    await browser.close();
  });

  it('test Coords', async () => {
    const coords = getPrintedCoords()
    const credentials = await new Promise((resolve, reject) => {
        prompt.get(['coords'], (error, result) => {
          resolve(result);
        });
      });
      
      const text = credentials.coords;
      console.log(text)
      
  })
})
 