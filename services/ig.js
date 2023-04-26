const { getClient } = require("./igClient");
require("dotenv").config();

const getUserData = async (username) => {
  try {
    const ig = await getClient();

    const searchResults = await ig.user.searchExact(username);

    const user = await ig.user.info(searchResults.pk);

    // Return user data
    const full_name = user.full_name;
    const follower_count = user.follower_count;
    const following_count = user.following_count;
    const profile_pic_url = user.hd_profile_pic_url_info.url;

    return {
      username,
      full_name,
      follower_count,
      following_count,
      profile_pic_url,
    };
  } catch (error) {
    throw error;
  }
};

const getUserFeeds = async (username) => {
  try {
    const ig = await getClient();

    const searchResults = await ig.user.searchExact(username);

    if (!searchResults) {
      throw {
        status: 404,
        message: `Username ${username} not found`,
      };
    }

    const feed = ig.feed.user(searchResults.pk);
    const posts = await feed.items();

    return posts;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
};

module.exports = {
  getUserData,
  getUserFeeds,
};
