const fs = window.modules.fs    // fs module

// mk dir
window.onload = () => {
  // img
  if (!fs.existsSync('_img')) {
    fs.mkdirSync('_img', (err) => {
      if (err) { throw err }
      console.log("made img dir !")
    })
  }

  // webp
  if (!fs.existsSync('_webp')) {
    fs.mkdirSync('_webp', (err) => {
      if (err) { throw err }
      console.log("made webp dir !")
    })
  }

  // compressed
  if (!fs.existsSync('_compressed')) {
    fs.mkdirSync('_compressed', (err) => {
      if (err) { throw err }
      console.log("made compressed dir !")
    })
  }

  // resized
  if (!fs.existsSync('_resized')) {
    fs.mkdirSync('_resized', (err) => {
      if (err) { throw err }
      console.log("made resized dir !")
    })
  }
}

function webp() {
  // 元ファイル一覧の取得
  const files = fs.readdirSync('./_img', { withFileTypes: false });
  
  // クオリティ指定
  const Quality = Number(document.getElementById("webp-quality-input").value);

  // ファイル分処理
  files.map(file => {
    window.modules.sharp_webp(file, Quality)   // preload function
  })
}

function compress() {
  // 元ファイル一覧の取得
  const files = fs.readdirSync('./_img', { withFileTypes: false });
  
  // クオリティ指定
  const Quality = Number(document.getElementById("compress-quality-input").value);

  // ファイル分処理
  files.map(file => {
    window.modules.sharp_compress(file, Quality)   // preload function
  })
}

function resize() {
  // 元ファイル一覧の取得
  const files = fs.readdirSync('./_img', { withFileTypes: false });
  
  // サイズ指定
  const Width = Number(document.getElementById("resize-width").value);
  const Height = Number(document.getElementById("resize-height").value);

  // ファイル分処理
  files.map(file => {
    window.modules.sharp_resize(file, Width, Height)   // preload function
  })
}

