const getRecentThumbnailUrl = async (
  name = INSTAGRAM_NAME_LIQUID_VARIABLE,
  top = 9,
  quality = 3
) => {
  const response = await fetch(`https://www.instagram.com/${name}/?__a=1`);
  const JSONresponse = await response.json();
  return JSONresponse.graphql.user.edge_owner_to_timeline_media.edges
    .slice(0, top)
    .map((item) => item.node.thumbnail_resources[quality].src);
};

// RENDER INSTAGRAM IMAGE
let instagramArr;
(async () => {
  instagramArr = await getRecentThumbnailUrl();
  for (let i = 0; i < 9; i++) {
    document.getElementById(`instagram-media-${i}`).src = instagramArr[i];
  }
})();
