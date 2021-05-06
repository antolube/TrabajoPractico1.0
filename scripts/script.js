const goTopBtn = document.getElementById("goTopBtn");
const testimoniales = document.getElementById("testimoniales");
const info = document.getElementById("info");

goTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.onscroll = () => {
  document.documentElement.scrollTop > document.documentElement.clientHeight && document.documentElement.scrollTop !== 0
    ? (goTopBtn.style.display = "flex")
    : (goTopBtn.style.display = "none");
};

