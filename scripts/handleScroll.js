export default function handleScroll() {
  document.addEventListener("scroll", () => {
    const body = document.body;
    if (window.scrollY > 0) {
      body.classList.add("scrolled");
    } else {
      body.classList.remove("scrolled");
    }
  });
}
