const fs = window.modules.fs    // fs module

window.onload = () => {
  if (!fs.existsSync('webp-images')) {
    fs.mkdirSync('webp-images', (err) => {
      if (err) { throw err }
      console.log("made webp-images dir !")
    })
  }
}

function webp() {
  // 元ファイル一覧の取得
  const files = fs.readdirSync('./webp-images', { withFileTypes: false });
  
  // ファイル分処理
  files.map(file => {
    window.modules.sharp_webp(file, 80)   // preload function
  })
}

