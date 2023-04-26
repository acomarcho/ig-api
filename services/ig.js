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
    let posts = await feed.items();

    // Process feeds data
    posts = posts.map((post) => {
      const code = post.code;
      const comment_count = post.comment_count;
      const like_count = post.like_count;
      const caption = post.caption.text;

      let thumbnail_url = "";
      if (post.image_versions2) {
        // Image/video
        thumbnail_url = post.image_versions2.candidates[0].url;
      } else {
        // Carousel
        thumbnail_url =
          post.carousel_media[0].image_versions2.candidates[0].url;
      }

      return {
        code,
        comment_count,
        like_count,
        caption,
        thumbnail_url,
      };
    });

    return posts;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
};

const getUserAndFeeds = async (username) => {
  try {
    const ig = await getClient();

    const searchResults = await ig.user.searchExact(username);

    if (!searchResults) {
      throw {
        status: 404,
        message: `Username ${username} not found`,
      };
    }

    // Get user
    const user = await ig.user.info(searchResults.pk);

    // Return user data
    const full_name = user.full_name;
    const follower_count = user.follower_count;
    const following_count = user.following_count;
    const profile_pic_url = user.hd_profile_pic_url_info.url;

    const userData = {
      username,
      full_name,
      follower_count,
      following_count,
      profile_pic_url,
    };

    // Get feed
    const feed = ig.feed.user(searchResults.pk);
    let posts = await feed.items();

    // Process feeds data
    posts = posts.map((post) => {
      const code = post.code;
      const comment_count = post.comment_count;
      const like_count = post.like_count;
      const caption = post.caption.text;

      let thumbnail_url = "";
      if (post.image_versions2) {
        // Image/video
        thumbnail_url = post.image_versions2.candidates[0].url;
      } else {
        // Carousel
        thumbnail_url =
          post.carousel_media[0].image_versions2.candidates[0].url;
      }

      return {
        code,
        comment_count,
        like_count,
        caption,
        thumbnail_url,
      };
    });

    return {
      user: userData,
      posts,
    };
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
};

module.exports = {
  getUserData,
  getUserFeeds,
  getUserAndFeeds,
};
