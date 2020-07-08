// CONSTANT ###########################
const LOCATION_TAB = {
  bangkok: {
    id: "#tab-bangkok",
  },
  chiangmai: {
    id: "#tab-chiangmai",
  },
};
const ADDRESS_WRAPPER_ID = "#location-address-ontab";
// ####################################

const switchTab = (clickedTabId) => {
  Object.keys(LOCATION_TAB).forEach((tab) => {
    // HANDLE CURRENT TAB CHANGE
    if (LOCATION_TAB[tab].id !== clickedTabId) {
      $(LOCATION_TAB[tab].id).removeClass("current");
      $(`${ADDRESS_WRAPPER_ID}-${tab}`).css("display", "none");
    } else {
      $(LOCATION_TAB[tab].id).addClass("current");
      // HANDLE CONTENT CHANGE
      $(`${ADDRESS_WRAPPER_ID}-${tab}`).css("display", "block");
    }
  });
};

$(`${ADDRESS_WRAPPER_ID}-chiangmai`).css("display", "none");

Object.keys(LOCATION_TAB).forEach((tab) => {
  $(LOCATION_TAB[tab].id).click(() => {
    switchTab(LOCATION_TAB[tab].id);
  });
});
