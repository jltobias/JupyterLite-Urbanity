(() => {
  "use strict";

  document.querySelectorAll("[data-layer-toggle]").forEach((input) => {
    const layerName = input.getAttribute("data-layer-toggle");
    const applyVisibility = () => {
      document.querySelectorAll(`[data-layer="${layerName}"]`).forEach((layer) => {
        layer.hidden = !input.checked;
      });
    };
    input.addEventListener("change", applyVisibility);
    applyVisibility();
  });

  const scene = document.querySelector("[data-scene]");
  const rotateX = document.querySelector("[data-rotate-x]");
  const rotateY = document.querySelector("[data-rotate-y]");
  if (scene && rotateX && rotateY) {
    const updateRotation = () => {
      scene.style.transform = `rotateX(${rotateY.value}deg) rotateY(${rotateX.value}deg)`;
    };
    rotateX.addEventListener("input", updateRotation);
    rotateY.addEventListener("input", updateRotation);
    updateRotation();
  }
})();
