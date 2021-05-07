const { contextBridge } = require('electron')
const sharp = require('sharp')

contextBridge.exposeInMainWorld('modules', {
  fs: require('fs'),      // fs module

  // wepb task
  sharp_webp: (target, quality) => {
    const progress = document.getElementById('progress')

    sharp(`./_img/${target}`)
      .webp({quality: quality})
      .toFile(`./_webp/${target}.webp`, (err, info) => {
        const li = document.createElement('li')
        let text
        
        if (err) {
          // throw err;
          console.log(err);

          // エラー表示
          text = document.createTextNode(`【${target}】 webp err !!!`)
          li.appendChild(text)
          progress.appendChild(li)
        }
        console.log(info);
        console.log(target + ' Done (´-ω-`)');

        // 完了表示
        text = document.createTextNode(`【${target}】 convert to webp !`)
        li.appendChild(text)
        progress.appendChild(li)
      })
  },

  // compress task
  sharp_compress: (target, quality) => {
    const progress = document.getElementById('progress')

    sharp(`./_img/${target}`)
      .png({quality: quality/10})
      .jpeg({quality: quality})
      .toFile(`./_compressed/${target}`, (err, info) => {
        const li = document.createElement('li')
        let text

        if (err) {
          // throw err;
          console.log(err);

          // エラー表示
          text = document.createTextNode(`【${target}】 compress err !!!`)
          li.appendChild(text)
          progress.appendChild(li)
        }
        console.log(info);
        console.log(target + ' Done (´-ω-`)');

        // 完了表示
        text = document.createTextNode(`【${target}】 compressed !`)
        li.appendChild(text)
        progress.appendChild(li)
      })
  },

  // resize task
  sharp_resize: (target, Width, Height) => {
    const progress = document.getElementById('progress')

    sharp(`./_img/${target}`)
      .resize({
        width: Width,
        height: Height
      })
      .toFile(`./_resized/${target}`, (err, info) => {
        const li = document.createElement('li')
        let text

        if (err) {
          // throw err;
          console.log(err);

          // エラー表示
          text = document.createTextNode(`【${target}】 resize err !!!`)
          li.appendChild(text)
          progress.appendChild(li)
        }
        console.log(info);
        console.log(target + ' Done (´-ω-`)');

        // 完了表示
        text = document.createTextNode(`【${target}】 resized !`)
        li.appendChild(text)
        progress.appendChild(li)
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