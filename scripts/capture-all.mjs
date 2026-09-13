import { chromium } from "playwright";
import path from "node:path";
import fs from "node:fs";
import { execSync } from "node:child_process";

const root = path.resolve(import.meta.dirname, "..");
const OUTREACH = path.join(root, "public", "outreach");
fs.mkdirSync(OUTREACH, { recursive: true });

const LOCAL = process.env.CAPTURE_URL || "http://localhost:3000/";
const ORIGINAL = "https://www.boostromconstruction.com/";
const FFMPEG =
  process.env.FFMPEG ||
  "C:\\Users\\vince\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\\ffmpeg-9.0.1-full_build\\bin\\ffmpeg.exe";

async function run() {
  const browser = await chromium.launch({ headless: true });

  console.log("BEFORE original desktop...");
  const orig = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const origPage = await orig.newPage();
  await origPage.goto(ORIGINAL, { waitUntil: "domcontentloaded", timeout: 90000 });
  await origPage.waitForTimeout(5000);
  await origPage.screenshot({
    path: path.join(OUTREACH, "before-original-desktop.png"),
    fullPage: true,
  });
  await orig.close();

  console.log("AFTER desktop 1440...");
  const desk = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const deskPage = await desk.newPage();
  await deskPage.goto(LOCAL, { waitUntil: "networkidle" });
  await deskPage.waitForTimeout(2000);
  await deskPage.screenshot({
    path: path.join(OUTREACH, "after-desktop.png"),
    fullPage: true,
  });
  await desk.close();

  console.log("AFTER mobile 390...");
  const mob = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  const mobPage = await mob.newPage();
  await mobPage.goto(LOCAL, { waitUntil: "networkidle" });
  await mobPage.waitForTimeout(2000);
  await mobPage.screenshot({
    path: path.join(OUTREACH, "after-mobile.png"),
    fullPage: true,
  });
  await mob.close();

  console.log("Scroll recording...");
  const videoDir = path.join(root, "temp-video");
  fs.mkdirSync(videoDir, { recursive: true });
  const rec = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    recordVideo: { dir: videoDir, size: { width: 1440, height: 900 } },
  });
  const recPage = await rec.newPage();
  await recPage.goto(LOCAL, { waitUntil: "networkidle" });
  await recPage.waitForTimeout(1500);
  const totalHeight = await recPage.evaluate(() => document.body.scrollHeight);
  const steps = 32;
  const dist = Math.max(120, (totalHeight - 900) / steps);
  for (let i = 0; i < steps; i++) {
    await recPage.evaluate((d) => window.scrollBy({ top: d, behavior: "smooth" }), dist);
    await recPage.waitForTimeout(280);
  }
  await recPage.waitForTimeout(1200);
  await recPage.evaluate(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  await recPage.waitForTimeout(1200);
  await recPage.close();
  await rec.close();

  const webm = fs.readdirSync(videoDir).find((f) => f.endsWith(".webm"));
  if (!webm) throw new Error("No webm recorded");
  const raw = path.join(videoDir, webm);
  const mp4 = path.join(OUTREACH, "after-scroll.mp4");
  const gif = path.join(OUTREACH, "after-scroll.gif");
  execSync(`"${FFMPEG}" -y -i "${raw}" -c:v libx264 -pix_fmt yuv420p -r 30 -crf 22 -preset medium "${mp4}"`, {
    stdio: "inherit",
  });
  const palette = path.join(videoDir, "palette.png");
  execSync(`"${FFMPEG}" -y -i "${mp4}" -vf "fps=12,scale=720:-1:flags=lanczos,palettegen" "${palette}"`, {
    stdio: "inherit",
  });
  execSync(
    `"${FFMPEG}" -y -i "${mp4}" -i "${palette}" -filter_complex "fps=12,scale=720:-1:flags=lanczos[x];[x][1:v]paletteuse" "${gif}"`,
    { stdio: "inherit" }
  );

  await browser.close();
  fs.rmSync(videoDir, { recursive: true, force: true });
  console.log("Captures written to public/outreach");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
