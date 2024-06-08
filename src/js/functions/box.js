export const box = () => {
  var attempt = 1;
  var tryElements = document.querySelectorAll(".try");
  tryElements.forEach(function (tryElement) {
    tryElement.addEventListener("click", function handleClick() {
      if (attempt < 2) {
        this.src = "img/box_open.png";
        attempt++;
        setTimeout(function () {
          document.getElementById("success02").classList.add("animate");
          document
            .getElementById("successtip02")
            .classList.add("animateSuccessTip");
          document.getElementById("modal02").classList.add("visible");
          document.querySelector(".sweet-overlay").style.display = "block";
        }, 320);
      } else if (attempt == 2) {
        attempt++;
        this.src = "img/box_open.png";
        document.querySelector(".spin-result-wrapper").style.display = "block";
        setTimeout(function () {
          document.getElementById("boxesContainer").style.display = "none";
          document.querySelector(".order_block").style.display = "block";
          start_timer();
        }, 2500);
      }
      tryElement.removeEventListener("click", handleClick);
    });
  });

  var isVibrateSupport = "vibrate" in navigator;

  function lastclick() {
    if (isVibrateSupport) {
      navigator.vibrate(46);
    }
    document.getElementById("modal02").classList.remove("visible");
    document.querySelector(".sweet-overlay").style.display = "none";
  }

  var closeButton = document.querySelector(".close-popup");
  var closeButton1 = document.querySelector(".pop-up-button");
  var closeUpdate = document.querySelector(".update");
  var overlay = document.querySelector(".sweet-overlay");
  var sweet = document.querySelector(".sweet-alert");
  var spinResultWrapper = document.querySelector(".spin-result-wrapper");

  closeButton.addEventListener("click", function () {
    spinResultWrapper.style.display = "none";
  });

  closeButton1.addEventListener("click", function () {
    spinResultWrapper.style.display = "none";
  });

  closeUpdate.addEventListener("click", function () {
    overlay.style.display = "none";
    sweet.classList.remove("visible");
  });
};
