import string from "./css.js";
let n = 0;
let duration = 50;
let container = document.querySelector("#code");
let styleTag = document.querySelector("#styleTag");

container.innerHTML = string.substring(0, n);
styleTag.innerHTML = string.substring(0, n);

const run = () => {
  n += 1;
  if (n > string.length) {
    window.clearInterval(id);
    return;
  }
  container.innerHTML = string.substring(0, n);
  styleTag.innerHTML = string.substring(0, n);
  container.scrollTop = container.scrollHeight;
};

let id = setInterval(() => {
  run();
}, duration);

$(".actions").on("click", "button", function (e) {
  let $button = $(e.currentTarget);
  let option = $button.attr("option");
  $button.addClass("active").siblings(".active").removeClass(".active");
  switch (option) {
    case "pause":
      window.clearInterval(id);
      break;
    case "play":
      id = setInterval(() => {
        run();
      }, duration);
      break;
    case "slow":
      window.clearInterval(id);
      duration = 100;
      id = setInterval(() => {
        run();
      }, duration);
      break;
    case "fast":
      window.clearInterval(id);
      duration = 7;
      id = setInterval(() => {
        run();
      }, duration);
      break;
    case "normal":
      window.clearInterval(id);
      duration = 50;
      id = setInterval(() => {
        run();
      }, duration);
      break;
    case "reset":
      window.clearInterval(id);
      n = 0;
      id = setInterval(() => {
        run();
      }, duration);
      break;
    case "skip":
      n = string.length;
      container.innerHTML = string.substring(0, n);
      styleTag.innerHTML = string.substring(0, n);
      container.scrollTop = container.scrollHeight;
      break;
  }
});
