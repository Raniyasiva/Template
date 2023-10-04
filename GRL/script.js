const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
  const img = box.querySelector(".my-image img");

  box.addEventListener("mouseover", () => {
    img.style.transform = "rotate(-150deg)";
  });

  box.addEventListener("mouseleave", (event) => {
    if (event.target == img || event.target.parentNode == box) {
        return;
    }
    img.style.transform = "";
  });
});

//dropdown
const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('show-dropdown');
});

