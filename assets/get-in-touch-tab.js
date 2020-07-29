// CONSTANT ###########################
const LOCATION_TAB = {
  primary: {
    id: "#tab-primary",
  },
  secondary: {
    id: "#tab-secondary",
  },
};

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

const switchTab = (clickedTabId) => {
  Object.keys(LOCATION_TAB).forEach((tab) => {
    // HANDLE CURRENT TAB CHANGE
    if (LOCATION_TAB[tab].id !== clickedTabId) {
      $(LOCATION_TAB[tab].id).removeClass("current");
    } else {
      $(LOCATION_TAB[tab].id).addClass("current");
      // HANDLE CONTENT CHANGE
      switchContent(LOCATION_DATA_LIQUID_VARIABLE[tab]);
    }
  });
};

const switchContent = ({
  address,
  tel,
  email,
  fax,
  line,
  link,
  noteHeader,
  noteBody,
}) => {
  $(CONTENT_WRAPPER_ID.address).html(address);
  $(CONTENT_WRAPPER_ID.tel).text(tel);
  $(CONTENT_WRAPPER_ID.email).text(email);
  $(CONTENT_WRAPPER_ID.fax).text(fax);
  $(CONTENT_WRAPPER_ID.line).text(line);
  $(CONTENT_WRAPPER_ID.link).attr("href", link);
  $(CONTENT_WRAPPER_ID.noteHeader).text(noteHeader);
  $(CONTENT_WRAPPER_ID.noteBody).html(noteBody);
};

Object.keys(LOCATION_TAB).forEach((tab) => {
  $(LOCATION_TAB[tab].id).click(() => {
    switchTab(LOCATION_TAB[tab].id);
  });
});
