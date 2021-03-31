window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function menuToggle() {
  const menuToggle = document.querySelector(".menuToggle");
  const navigation = document.querySelector(".navigation");
  navigation.classList.toggle("active");
  menuToggle.classList.toggle("active");
}
