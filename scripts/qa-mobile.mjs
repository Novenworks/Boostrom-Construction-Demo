import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true,
});
const page = await ctx.newPage();
await page.goto("http://localhost:3011/", { waitUntil: "networkidle" });
await page.waitForTimeout(500);
await page.screenshot({ path: "tmp/qa/mobile-viewport-hero.png" });
await page.getByRole("button", { name: "Menu" }).click();
await page.waitForTimeout(300);
await page.screenshot({ path: "tmp/qa/mobile-menu.png" });
await page.getByRole("button", { name: "Menu" }).click();
await page.evaluate(() => window.scrollTo(0, 1100));
await page.waitForTimeout(300);
await page.screenshot({ path: "tmp/qa/mobile-services.png" });
await browser.close();
console.log("ok");
