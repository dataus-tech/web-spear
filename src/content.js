const currentUrl = window.location.href;

if (currentUrl.includes("search")) {
  var results = document.querySelectorAll("h3");

  results.forEach(function (result) {
    var button = document.createElement("button");
    button.textContent = "요약";
    button.style.background =
      "linear-gradient(210deg, rgb(5, 220, 215) 2.01%, rgb(20 5 245) 50%, rgb(191 20 210) 97.03%";
    button.style.width = "66px";
    button.style.height = "34px";
    button.style.borderRadius = "20px 20px 2px";
    button.style.marginLeft = "4px";
    button.style.border = "0";
    button.style.position = "relative";
    button.style.bottom = "4px";
    button.style.cursor = "pointer";

    var popup = document.createElement("div");
    popup.textContent = "요약중";

    popup.style.display = "none";
    popup.style.zIndex = 1000;
    popup.style.backgroundColor = "#fff";
    popup.style.padding = "10px";
    popup.style.boxShadow = "2px 2px 4px rgba(0, 0, 0, 0.2)";
    popup.style.height = "100px";
    popup.style.color = "black";
    popup.style.fontSize = "14px";
    popup.style.borderRadius = "10px";
    popup.style.position = "absolute";
    popup.style.left = "4px";
    popup.style.top = "40px";
    popup.style.width = "200px";
    popup.style.textAlign = "left";

    button.addEventListener("mouseover", function () {
      setTimeout(function () {
        popup.textContent = "요약 정보";
      }, 2000);
      popup.style.display = "block";
    });

    button.addEventListener("mouseout", function () {
      popup.style.display = "none";
    });

    result.appendChild(button);
    button.appendChild(popup);
  });
}
