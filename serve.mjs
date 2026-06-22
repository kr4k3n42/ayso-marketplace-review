import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = process.cwd();
const port = Number(process.env.PORT || 8000);
const basePath = (process.env.BASE_PATH || "").replace(/^\/|\/$/g, "");
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml"
};

createServer(async (request, response) => {
  try {
    let pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    pathname = normalize(pathname).replace(/^[/\\]+/, "");
    if (basePath && pathname === basePath) {
      response.statusCode = 301;
      response.setHeader("Location", `/${basePath}/`);
      response.end();
      return;
    }
    if (basePath && pathname.startsWith(`${basePath}\\`)) pathname = pathname.slice(basePath.length + 1);
    if (basePath && pathname.startsWith(`${basePath}/`)) pathname = pathname.slice(basePath.length + 1);
    let file = join(root, pathname || "index.html");
    if (!file.startsWith(root)) throw new Error("Invalid path");
    if ((await stat(file)).isDirectory()) file = join(file, "index.html");

    response.setHeader("Content-Type", types[extname(file)] || "application/octet-stream");
    response.end(await readFile(file));
  } catch {
    response.statusCode = 404;
    response.end("Not found");
  }
}).listen(port, "0.0.0.0", () => {
  const previewPath = basePath ? `/${basePath}/` : "/";
  console.log(`AYSO Marketplace running at http://localhost:${port}${previewPath}`);
});
