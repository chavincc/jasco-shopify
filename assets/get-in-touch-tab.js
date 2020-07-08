// CONSTANT ###########################
const LOCATION_TAB = {
  bangkok: {
    id: "#tab-bangkok",
  },
  chiangmai: {
    id: "#tab-chiangmai",
  },
};
// const ADDRESS_WRAPPER_ID = "#location-address-ontab";
const CONTENT_WRAPPER_ID = {
  address: "#location-address-ontab",
  tel: "#location-phone-wrapper",
  email: "#location-email-wrapper",
  fax: "#location-fax-wrapper",
  line: "#location-line-wrapper",
  link: "#location-link-to-address-btn",
  noteHeader: "#location-note-header-wrapper",
  noteBody: "#location-note-body-wrapper",
};
// ####################################

console.log(LOCATION_DATA_LIQUID_VARIABLE);
const switchTab = (clickedTabId) => {
  Object.keys(LOCATION_TAB).forEach((tab) => {
    // HANDLE CURRENT TAB CHANGE
    if (LOCATION_TAB[tab].id !== clickedTabId) {
      $(LOCATION_TAB[tab].id).removeClass("current");
    } else {
      $(LOCATION_TAB[tab].id).addClass("current");
      // HANDLE CONTENT CHANGE
    }
  });
};

Object.keys(LOCATION_TAB).forEach((tab) => {
  $(LOCATION_TAB[tab].id).click(() => {
    switchTab(LOCATION_TAB[tab].id);
  });
});
