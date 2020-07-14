const SHOW_DATA = ["#show-data-1", "#show-data-0"];
function plus_btn(id) {
  SHOW_DATA.forEach((displayId) => {
    let displayId_id = displayId + "-" + id;
    data = $(displayId_id);
    console.log(displayId_id);
    new_text = parseInt(data.text()) + 1;
    data.text(new_text);
  });
}
function minus_btn(id) {
  SHOW_DATA.forEach((displayId) => {
    let displayId_id = displayId + "-" + id;
    data = $(displayId_id);
    new_text = parseInt(data.text()) - 1;
    if (new_text <= -1) {
      data.text("0");
    } else {
      data.text(new_text);
    }
  });
}
