# Electron Application
[quick-start](https://www.electronjs.org/docs/tutorial/quick-start)

## Electron Install

```bash=
npm init -y
npm i --save-dev electron
```

## packageing

[electron-packager](https://github.com/electron/electron-packager)を使用

```bash=
npm install electron-packager --save-dev

# windows
electron-packager ./ image-editor --platform=win32 --arch=x64

# mac
electron-packager ./ image-editor --platform=darwin --arch=x64
```
