document.addEventListener("DOMContentLoaded", () => {
  const a = document.querySelectorAll(".toggle");
  a.forEach((e) => {
    e.addEventListener("click", function () {
      let slider = this.nextElementSibling;
      if (slider.style.height) {
        slider.style.height = null;
        e.classList.remove("highlight");
      } else {
        document.querySelectorAll(".toggle.highlight").forEach((f) => {
          f.classList.remove("highlight");
          f.nextElementSibling.style.height = null;
        });
        e.classList.add("highlight");
        slider.style.height = slider.scrollHeight + "px";
      }
    })
  })
})