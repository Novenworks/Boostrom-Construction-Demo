const fs = require("fs");
const path = require("path");
const https = require("https");

const dir = path.join(process.cwd(), "public", "images");
fs.mkdirSync(dir, { recursive: true });

const files = [
  ["logo-white.png", "https://static.wixstatic.com/media/d542bc_f87fe6a5343f46f6b657b64a3d60adbb~mv2.png"],
  ["project-02.jpeg", "https://static.wixstatic.com/media/d542bc_9a49e6123ad0469c92b017dbe3784ba9~mv2.jpeg"],
  ["project-03.jpg", "https://static.wixstatic.com/media/d542bc_b5f32b14d5f24f50b7e853fa212889cf~mv2.png"],
  ["project-04.jpeg", "https://static.wixstatic.com/media/d542bc_87abe22db9da444a8b7a8fb65381ba64~mv2.jpeg"],
  ["project-05.jpg", "https://static.wixstatic.com/media/d542bc_8e18357b106549bfbebedb6f8d06b0d2~mv2.png"],
];

function get(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        fs.unlinkSync(dest);
        return get(res.headers.location, dest).then(resolve, reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(url + " " + res.statusCode));
      }
      res.pipe(file);
      file.on("finish", () => file.close(resolve));
    }).on("error", reject);
  });
}

(async () => {
  for (const [name, url] of files) {
    const dest = path.join(dir, name);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log("have", name);
      continue;
    }
    console.log("fetch", name);
    await get(url, dest);
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
