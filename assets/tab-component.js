const PRODUCT_BUTTONS = document.querySelectorAll(".tab-component>button");

// var position = {{collection.url}};

let currentCollectionURL = collectionURL;
let allPath = allPathURL;

let currentTextButton;
const COLLECTION_TXT = "https://jasco-kos.myshopify.com/collections/";

PRODUCT_BUTTONS.forEach((button) => {
  button.addEventListener("click", function (e) {
    clickedButtonId = button.id;
    PRODUCT_BUTTONS.forEach((button) => {
      if (button.id !== clickedButtonId) {
        button.classList.remove("current");
      } else {
        if ($(".btn-in-tab-component").hasClass("current")) {
          button.classList.remove("current");
          collectionURL = COLLECTION_TXT.concat("all");
          window.location.href = collectionURL;
        } else {
          button.classList.add("current");
          currentTextButton = $(button)[0].textContent;
          currentTextButton = currentTextButton.replace(/(\r\n|\n|\r)/gm, "");
          var replaced = currentTextButton.split(" ").join("-");
          replaced = COLLECTION_TXT.concat(replaced);
          collectionURL = replaced;
          window.location.href = replaced;
        }
      }
    });
  });
});
