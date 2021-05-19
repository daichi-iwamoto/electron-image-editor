const { contextBridge } = require('electron')
const sharp = require('sharp')
const fs = require('fs')

contextBridge.exposeInMainWorld('modules', {
  fs: fs,      // fs module

  // compress task
  sharp_compress: (target, filename, quality) => {
    const progress = document.getElementById('progress')

    // 入力元
    let input = target.replace(/\\/g, '/')

    // 出力先
    let outdir = target.replace(filename, '')
    outdir = outdir.replace(/\\/g, '/')

    // compressedディレクトリ作成
    if (!fs.existsSync(`${outdir}compressed/`)) {
      fs.mkdirSync(`${outdir}compressed/`, (err) => {
        if (err) { throw err } else {
          console.log("made compressed dir !")
        }
      })
    }


    sharp(input)
      .png({quality: quality/10})
      .jpeg({quality: quality})
      .toFile(`${outdir}compressed/${filename}`, (err, info) => {
        const li = document.createElement('li')
        let text

        if (err) {
          // throw err;
          console.log(err);

          // エラー表示
          text = document.createTextNode(`【${input}】 compress err !!!`)
          li.appendChild(text)
          progress.appendChild(li)
        }
        console.log(info);
        console.log(target + ' Done (´-ω-`)');

        // 完了表示
        text = document.createTextNode(`【${input}】 compressed !`)
        li.appendChild(text)
        progress.appendChild(li)
      })
  },

  // wepb task
  sharp_webp: (target, filename, quality) => {
    const progress = document.getElementById('progress')

    // 入力元
    let input = target.replace(/\\/g, '/')

    // 出力先
    let outdir = target.replace(filename, '')
    outdir = outdir.replace(/\\/g, '/')

    // webpディレクトリ作成
    if (!fs.existsSync(`${outdir}webp/`)) {
      fs.mkdirSync(`${outdir}webp/`, (err) => {
        if (err) { throw err } else {
          console.log("made webp dir !")
        }
      })
    }

    sharp(input)
      .webp({quality: quality})
      .toFile(`${outdir}webp/${filename}.webp`, (err, info) => {
        const li = document.createElement('li')
        let text
        
        if (err) {
          // throw err;
          console.log(err);

          // エラー表示
          text = document.createTextNode(`【${input}】 webp err !!!`)
          li.appendChild(text)
          progress.appendChild(li)
        } else {
          console.log(info);
          console.log('/' + input + ' Done (´-ω-`)');
  
          // 完了表示
          text = document.createTextNode(`【${input}】 convert to webp !`)
          li.appendChild(text)
          progress.appendChild(li)
        }
      })
  },

  // resize task
  sharp_resize: (target, filename, Width, Height) => {
    const progress = document.getElementById('progress')

    // 入力元
    let input = target.replace(/\\/g, '/')

    // 出力先
    let outdir = target.replace(filename, '')
    outdir = outdir.replace(/\\/g, '/')

    // resizedディレクトリ作成
    if (!fs.existsSync(`${outdir}resized/`)) {
      fs.mkdirSync(`${outdir}resized/`, (err) => {
        if (err) { throw err } else {
          console.log("made resized dir !")
        }
      })
    }

    // 指定ありなしの条件分け
    if (Width > 0 && Height > 0) {
      sharp(input)
        .resize({
          width: Width,
          height: Height
        })
        .toFile(`${outdir}resized/${filename}`, (err, info) => {
          const li = document.createElement('li')
          let text
  
          if (err) {
            // throw err;
            console.log(err);
  
            // エラー表示
            text = document.createTextNode(`【${target}】 resize err !!!`)
            li.appendChild(text)
            progress.appendChild(li)
          } else {
            console.log(info);
            console.log(target + ' Done (´-ω-`)');
    
            // 完了表示
            text = document.createTextNode(`【${target}】 resized !`)
            li.appendChild(text)
            progress.appendChild(li)
          }
        })
    } else if (Width > 0) {
      sharp(input)
      .resize({
        width: Width
      })
      .toFile(`${outdir}resized/${filename}`, (err, info) => {
        const li = document.createElement('li')
        let text

        if (err) {
          // throw err;
          console.log(err);

          // エラー表示
          text = document.createTextNode(`【${target}】 resize err !!!`)
          li.appendChild(text)
          progress.appendChild(li)
        } else {
          console.log(info);
          console.log(target + ' Done (´-ω-`)');
  
          // 完了表示
          text = document.createTextNode(`【${target}】 resized !`)
          li.appendChild(text)
          progress.appendChild(li)
        }
      })
    } else if (Height > 0) {
      sharp(input)
      .resize({
        height: Height
      })
      .toFile(`${outdir}resized/${filename}`, (err, info) => {
        const li = document.createElement('li')
        let text

        if (err) {
          // throw err;
          console.log(err);

          // エラー表示
          text = document.createTextNode(`【${target}】 resize err !!!`)
          li.appendChild(text)
          progress.appendChild(li)
        } else {
          console.log(info);
          console.log(target + ' Done (´-ω-`)');
  
          // 完了表示
          text = document.createTextNode(`【${target}】 resized !`)
          li.appendChild(text)
          progress.appendChild(li)
        }
      })
    }
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