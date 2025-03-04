const chromium = require("@sparticuz/chromium");
const puppeteer = require("puppeteer-core");
const path = require("path");

chromium.setGraphicsMode = false;

(async () => {
  const browser = await puppeteer.launch({
    executablePath: await chromium.executablePath(),
    headless: true,
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800 });
  const fileUrl = `file:${path.join(__dirname, "index.html")}`;
  await page.goto(fileUrl);

  // remove unnecessary elements for printing
  await page.evaluate(() => {
    const sidebarUtility = document.querySelector(".sidebar-utility");
    if (sidebarUtility) sidebarUtility.remove();

    const elements = document.querySelectorAll(".typing-effect, .typing-effect-delayed");
    elements.forEach((element) => {
      element.classList.forEach((className) => {
        if (className === "typing-effect" || className === "typing-effect-delayed") {
          element.classList.remove(className);
        }
      });
    });

    const githubForkMe = document.getElementById("fork-me-ongithub-id");
    if (githubForkMe) githubForkMe.remove();

    // Adjust the content to fit on one page
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.width = "210mm"; // A4 width
    document.body.style.height = "297mm"; // A4 height
    document.body.style.overflow = "hidden";
  });

  // Generate the PDF and save it locally
  await page.pdf({
    path: "cv-julien-jean.pdf",
    format: "A4",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  await browser.close();
})();
