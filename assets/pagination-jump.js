const paginationTemplateLink = PAGINATION_TEMPLATE_LINK
  ? PAGINATION_TEMPLATE_LINK
  : "";

const getPaginationLink = (url = "", pageNumber = 1) => {
  const [path, query] = url.split("?");
  const queryDict = query.split("&").map((property) => property.split("="));
  const newQueryString = queryDict
    .map(
      (property) =>
        `${property[0]}=${property[0] === "page" ? pageNumber : property[1]}`
    )
    .join("&");

  return `${path}?${newQueryString}`;
};
