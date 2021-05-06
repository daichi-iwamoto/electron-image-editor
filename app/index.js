// quality output
const qualityInput = document.getElementById("quality-input");
const qualityTarget = document.getElementById("quality-value");

const rangeValue = (qualityInput, qualityTarget) => {
  return function () {
    qualityTarget.innerHTML = qualityInput.value;
  };
};

qualityInput.addEventListener("input", rangeValue(qualityInput, qualityTarget));
