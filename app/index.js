// webp quality output
const webpQualityInput = document.getElementById("webp-quality-input");
const webpQualityTarget = document.getElementById("webp-quality-value");

const webpValue = (webpQualityInput, webpQualityTarget) => {
  return function () {
    webpQualityTarget.innerHTML = webpQualityInput.value;
  };
};
webpQualityInput.addEventListener("input", webpValue(webpQualityInput, webpQualityTarget));

// compress quality output
const CompressQualityInput = document.getElementById("compress-quality-input");
const CompressQualityTarget = document.getElementById("compress-quality-value");

const compressValue = (CompressQualityInput, CompressQualityTarget) => {
  return function () {
    CompressQualityTarget.innerHTML = CompressQualityInput.value;
  };
};
CompressQualityInput.addEventListener("input", compressValue(CompressQualityInput, CompressQualityTarget));

// file name change
const InputFile = document.getElementById("input-img");
const fileName = document.getElementById("file-name");

const outputFileName = (InputFile, fileName) => {
  return function() {
    console.log(InputFile.files.length);
    fileName.innerHTML = `${InputFile.files.length}ファイル選択中`;
  };
};
InputFile.addEventListener("input", outputFileName(InputFile, fileName));