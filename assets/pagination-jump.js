const reloadWithQueryStringVars = (queryStringVars) => {
  let existingQueryVars = location.search
    ? location.search.substring(1).split("&")
    : [];
  let currentUrl = location.search
    ? location.href.replace(location.search, "")
    : location.href;
  let newQueryVars = {};
  let newUrl = currentUrl + "?";
  if (existingQueryVars.length > 0) {
    for (let i = 0; i < existingQueryVars.length; i++) {
      let pair = existingQueryVars[i].split("=");
      newQueryVars[pair[0]] = pair[1];
    }
  }
  if (queryStringVars) {
    for (let queryStringVar in queryStringVars) {
      newQueryVars[queryStringVar] = queryStringVars[queryStringVar];
    }
  }
  if (newQueryVars) {
    for (let newQueryVar in newQueryVars) {
      newUrl += newQueryVar + "=" + newQueryVars[newQueryVar] + "&";
    }
    newUrl = newUrl.substring(0, newUrl.length - 1);
    window.location.href = newUrl;
  } else {
    window.location.href = location.href;
  }
};

$(".pagination-number").click((e) => {
  const pageNumber = e.target.id.split("-").slice(-1)[0];
  reloadWithQueryStringVars({ page: pageNumber });
});
