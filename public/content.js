var results = document.querySelectorAll("h3");

results.forEach(function (result) {
  var button = document.createElement("button");
  button.textContent = "요약";

  var popup = document.createElement("div");
  popup.textContent = "요약중";

  popup.style.display = "none";
  popup.style.zIndex = 1000;
  popup.style.backgroundColor = "#fff";
  popup.style.border = "1px solid #ccc";
  popup.style.padding = "10px";
  popup.style.boxShadow = "2px 2px 4px rgba(0, 0, 0, 0.2)";

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
  result.appendChild(popup);
});
