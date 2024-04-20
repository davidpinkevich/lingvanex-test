const btns = document.querySelectorAll(".product__navigate button");
const carousel = document.querySelectorAll(".carousel__item");

const animation = [
  ["top", "mid", "bot"],
  ["mid", "top", "bot"],
  ["mid", "bot", "top"],
];

btns.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    for (let i = 0; i < carousel.length; i++) {
      carousel[i].className = `carousel__item ${animation[event.target.id][i]}`;
    }
    btns.forEach((btn) => {
      if (btn.id === event.target.id) {
        btn.classList.add("active");
        carousel[btn.id].classList.add("hover");
      } else {
        btn.classList.remove("active");
        carousel[btn.id].classList.remove("hover");
      }
    });
  });
});

btns.forEach((btn) => {
  btn.addEventListener("mouseover", function (event) {
    btns.forEach((btn) => {
      if (btn.id === event.target.id) {
        carousel[event.target.id].classList.add("hover");
      }
    });
  });
});

btns.forEach((btn) => {
  btn.addEventListener("mouseout", function (event) {
    btns.forEach((btn) => {
      if (btn.id === event.target.id) {
        carousel[event.target.id].classList.remove("hover");
      }
    });
  });
});
