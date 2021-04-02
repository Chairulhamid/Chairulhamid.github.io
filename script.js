//untuk scrool header
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

//untuk pesan kontak form
const scriptURL = "https://script.google.com/macros/s/AKfycbwGvbPfJEpOQRq_Jpik3KxrcyAOJJqXBMudmnSPmN1b5RDLOyXrobElMvwKAqwOwD3Crw/exec";
const form = document.forms["contact-form-chairulhamid"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //ketika tombol submit di kirm
  //tampil tombol loading
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      //ketika tombol submit di kirm
      //hialngkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // tampil alert
      myAlert.classList.toggle("d-none");
      //reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
