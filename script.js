let section = document.getElementById("section");
let text = document.querySelector(".text");
let afterClick = document.querySelector(".afterClick");
const canvas = document.querySelector("#celibrate");

const jsConfetti = new JSConfetti();

text.addEventListener("click", () => {
  section.style.display = "none";
  afterClick.style.display = "inline";
  jsConfetti.addConfetti({
    emojis: ["😍0", "💛", "😍", "🎉", "💛", "😍0", "💛", "😍", "🎉", "💛"],
  });
  jsConfetti.addConfetti();
});
