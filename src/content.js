const currentUrl = window.location.href;

const renderButton = (results, searchEngine) => {
  results.forEach(function (result) {
    var button = document.createElement("button");
    button.textContent = "요약";
    button.style.background =
      "linear-gradient(210deg, rgb(5, 220, 215) 2.01%, rgb(20 5 245) 50%, rgb(191 20 210) 97.03%";
    button.style.width = "66px";
    button.style.height = "34px";
    button.style.borderRadius = "20px 20px 2px";
    button.style.margin = "4px";
    button.style.border = "0";
    button.style.position = "relative";
    button.style.cursor = "pointer";
    button.style.color = "white";
    if (searchEngine === "google" || "bing") button.style.bottom = "4px";

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
};

if (currentUrl.includes("google.com/search")) {
  // 구글
  const results = document.querySelectorAll("h3");
  renderButton(results, "google");
} else if (currentUrl.includes("search.naver.com/search")) {
  // 네이버
  // 지식스니펫, 관련문서
  const knowledgeSnippetElements = document.querySelectorAll("a.link_tit");
  // 블로그
  const blogElements = document.querySelectorAll(".content_area a.title");
  // 관련문서
  const documentElements = document.querySelectorAll(
    ".source_cluster_list a.source_title"
  );
  // 지식백과
  const knowledgeEncyclopediaElements =
    document.querySelectorAll(".nkindic_basic h3");
  // 도서
  const bookElements = document.querySelectorAll(".info_wrap a.item_title");

  const results = Array.from(knowledgeSnippetElements).concat(
    Array.from(blogElements),
    Array.from(documentElements),
    Array.from(knowledgeEncyclopediaElements),
    Array.from(bookElements)
  );

  renderButton(results);
} else if (currentUrl.includes("bing.com/search")) {
  // Bing
  const allH2Elements = document.querySelectorAll("li h2");
  const elementToExclude = document.querySelectorAll(".b_ad h2"); // 광고 제거
  const elementsArray = Array.from(allH2Elements);

  const results = elementsArray.filter(function (element) {
    return !Array.from(elementToExclude).includes(element);
  });

  renderButton(results, "bing");
} else if (currentUrl.includes("search.zum.com/search")) {
  // 사전
  const dictionaryElements = document.querySelectorAll(
    ".dic_category .dic_title"
  );
  // 블로그, 뉴스
  const blogAndNewsElements = document.querySelectorAll(
    ".blog_sc dd a.link_report, .news_sc dd a.link_report"
  );
  // 사이트
  const siteElements = document.querySelectorAll(".site_sc .blit");
  // 게시판, 오픈인터넷
  const boardAndOpenInternetElements = document.querySelectorAll(
    ".board_sc li a.link_report, .open_internet_sc li a.link_report"
  );
  // 쇼핑
  const shoppingElements = document.querySelectorAll("li a.title");
  // 웹문서, 책
  const webDocumentAndBookElements = document.querySelectorAll(
    ".document_sc li dl dd a.link_report, .book_sc li dl dt a"
  );

  const results = Array.from(dictionaryElements).concat(
    Array.from(blogAndNewsElements),
    Array.from(siteElements),
    Array.from(boardAndOpenInternetElements),
    Array.from(shoppingElements),
    Array.from(webDocumentAndBookElements)
  );

  renderButton(results);
}
