const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  console.log(event.offsetX);
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.floor(Math.random() * 100 + 1);
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";

  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 2000);
});
