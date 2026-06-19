const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('https://www.truevalleytravels.com/terms-and-conditions', {waitUntil: 'networkidle2'});
  const termsText = await page.evaluate(() => document.body.innerText);
  require('fs').writeFileSync('terms.txt', termsText);

  await page.goto('https://www.truevalleytravels.com/privacy-policy', {waitUntil: 'networkidle2'});
  const privacyText = await page.evaluate(() => document.body.innerText);
  require('fs').writeFileSync('privacy.txt', privacyText);

  await browser.close();
  console.log("Done");
})();
