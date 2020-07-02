const getRecentThumbnailUrl = async (
  name = 'jpjascoth',
  top = 9,
  quality = 3
) => {
  try {
    const response = await fetch(`https://www.instagram.com/${name}/?__a=1`);
    const JSONresponse = await response.json();
    return JSONresponse.graphql.user.edge_owner_to_timeline_media.edges
      .slice(0, top)
      .map((item) => item.node.thumbnail_resources[quality].src);
  } catch (error) {
    const fallbackThumbnail = [];
    for (let i = 0; i < top; i++) {
      fallbackThumbnail.push(
        'https://instagram.fbkk6-2.fna.fbcdn.net/v/t51.2885-15/e15/c0.135.1080.1080a/s480x480/101790090_107129674273531_5905540923029497311_n.jpg?_nc_ht=instagram.fbkk6-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=MK93vvRzXUwAX_Z8bKq&oh=3fd2ee65e8e4ef3d26bab52425cb7025&oe=5F01CE21'
      );
    }
    return fallbackThumbnail;
  }
};

// RENDER INSTAGRAM IMAGE
let instagramArr;
(async () => {
  instagramArr = await getRecentThumbnailUrl();
  for (let i = 0; i < 9; i++) {
    document.getElementById(`instagram-media-${i}`).src = instagramArr[i];
  }
})();
