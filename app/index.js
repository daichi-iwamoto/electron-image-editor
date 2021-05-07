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