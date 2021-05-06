const { contextBridge } = require('electron')
const sharp = require('sharp')

contextBridge.exposeInMainWorld('modules', {
  fs: require('fs'),      // fs module

  // wepb task
  sharp_webp: (target, quality) => {
    console.log(target, quality)
    sharp(`./webp-images/${target}`)
      .webp({quality: quality})
      .toFile(`./webp-images/${target}.webp`, (err, info) => {
        if (err) {
          // throw err;
          console.log(err);
        }
        console.log(info);
        console.log(target + ' Done (´-ω-`)');
      })
  }
})

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})