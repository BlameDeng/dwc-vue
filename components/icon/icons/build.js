const fs = require("fs");
const path = require("path");
const { compile } = require("@vue/compiler-dom");

const iconsDir = path.resolve(__dirname, "icons");
const componentsDir = path.resolve(__dirname, "components");
const iconListPath = path.resolve(__dirname, "icon-list.json");

const iconList = new Set();

const dirs = [iconsDir];

while (dirs.length) {
  const current = dirs.shift();

  const subs = fs.readdirSync(current);

  for (const sub of subs) {
    const p = path.resolve(current, sub);
    const s = fs.statSync(p);

    if (s.isDirectory()) {
      dirs.push(p);
    } else {
      svgToVue(sub, path.resolve(current, sub));
    }
  }
}

fs.writeFileSync(iconListPath, JSON.stringify(Array.from(iconList)), "utf8");

function svgToVue(filename, filePath) {
  const svg = fs.readFileSync(filePath, "utf8");

  const code = compile(svg, {
    mode: "module",
  }).code;

  const iconName = filename.replace(/\.svg$/, "");

  const dest = path.resolve(componentsDir, iconName + ".js");

  fs.writeFileSync(dest, code + "\n\nexport default render", "utf8");

  iconList.add(iconName);
}
