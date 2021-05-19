const fs = window.modules.fs    // fs module

function compress() {
  // 元ファイル一覧の取得
  const files = document.getElementById("input-img").files
  
  // クオリティ指定
  const Quality = Number(document.getElementById("compress-quality-input").value)

  // ファイル分処理
  Array.from(files).forEach(file => {
    window.modules.sharp_compress(file.path, file.name, Quality)   // preload function
  })
}

function webp() {
  // 元ファイル一覧の取得
  const files = document.getElementById("input-img").files
  
  // クオリティ指定
  const Quality = Number(document.getElementById("webp-quality-input").value)

  // ファイル分処理
  Array.from(files).forEach(file => {
    window.modules.sharp_webp(file.path, file.name, Quality)   // preload function
  })
}

function resize() {
  // 元ファイル一覧の取得
  const files = document.getElementById("input-img").files
  
  // サイズ指定
  const Width = Number(document.getElementById("resize-width").value)
  const Height = Number(document.getElementById("resize-height").value)

  // ファイル分処理
  Array.from(files).forEach(file => {
    window.modules.sharp_resize(file.path, file.name, Width, Height)   // preload function
  })
}

