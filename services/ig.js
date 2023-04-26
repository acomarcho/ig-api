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
    const followers_count = user.edge_followed_by.count;
    const following_count = user.edge_follow.count;
    const full_name = user.full_name;
    const profile_pic_url = user.profile_pic_url;
    const profile_pic_url_hd = user.profile_pic_url_hd;

    return {
      username,
      followers_count,
      following_count,
      full_name,
      profile_pic_url,
      profile_pic_url_hd,
    };
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
};

module.exports = {
  getUserData,
};
