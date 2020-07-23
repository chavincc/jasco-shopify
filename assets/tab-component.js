const PRODUCT_BUTTONS = $(".btn-in-tab-component");
const SEARCH_WORD = "collections/";
let currentTextButton, replacePath, selectPage, j, k;
let allPath = url_current_path; //url_current_path is the current url that get from liquid file.
let indexOfWord = allPath.indexOf(SEARCH_WORD);

String.prototype.replaceAt = function (index, replacement) {
  if (index >= this.length) {
    return this.valueOf();
  }
  return this.substring(0, index) + replacement;
};

removeUnselectedTab = (selectedTabId) => {
  for (k = 0; k < PRODUCT_BUTTONS.length; k++) {
    if (selectedTabId !== PRODUCT_BUTTONS[k].id) {
      PRODUCT_BUTTONS[k].classList.remove("current");
    }
  }
};

gotoAllCollectionPage = () => {
  replacePath = SEARCH_WORD.concat("all");
  allPath = allPath.replaceAt(indexOfWord, replacePath);
  window.location.href = allPath;
};
gotoSelectCollectionPage = (currentTextButton) => {
  selectPage = currentTextButton.replace(/\s/g, "-");
  replacePath = SEARCH_WORD.concat(selectPage);
  allPath = allPath.replaceAt(indexOfWord, replacePath);
  window.location.href = allPath;
};

for (j = 0; j < PRODUCT_BUTTONS.length; j++) {
  PRODUCT_BUTTONS[j].addEventListener("click", function (e) {
    removeUnselectedTab(this.id);
    if ($(this).hasClass("current")) {
      $(this).removeClass("current");
      gotoAllCollectionPage();
    } else {
      $(this).addClass("current");
      gotoSelectCollectionPage($(this).text());
    }
  });
}
