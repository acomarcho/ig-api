const superagent = require("superagent");
require("dotenv").config();

const getUserData = async (username) => {
  try {
    const response = await superagent
      .get(
        `https://www.instagram.com/api/v1/users/web_profile_info/?username=${username}`
      )
      .set("x-ig-app-id", process.env.X_IG_APP_ID);

    const { user } = response.body.data;

    // General data
    const follower_count = user.edge_followed_by.count;
    const following_count = user.edge_follow.count;
    const full_name = user.full_name;
    const profile_pic_url = user.profile_pic_url;
    const profile_pic_url_hd = user.profile_pic_url_hd;

    // Timeline media
    let timeline_medias = user.edge_owner_to_timeline_media.edges;
    // Process timeline_medias
    timeline_medias = timeline_medias.map(({ node }) => {
      return {
        display_url: node.display_url,
        caption: node.edge_media_to_caption.edges[0].node.text,
        comment_count: node.edge_media_to_comment.count,
        like_count: node.edge_liked_by.count,
      };
    });

    return {
      username,
      follower_count,
      following_count,
      full_name,
      profile_pic_url,
      profile_pic_url_hd,
      timeline_medias,
    };
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
};

module.exports = {
  getUserData,
};
