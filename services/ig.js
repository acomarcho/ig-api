const { getClient } = require("./igClient");
const { shortcodeToID } = require("../utils/encoding");

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

    const feed = ig.feed.user(searchResults.pk);
    let posts = await feed.items();

    // Process feeds data
    posts = posts.map((post) => {
      const code = post.code;
      const comment_count = post.comment_count;
      const like_count = post.like_count;
      const caption = post.caption ? post.caption.text : "";

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
      const caption = post.caption ? post.caption.text : "";

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

const getPostData = async (shortcode) => {
  try {
    const ig = await getClient();

    const post = await ig.media.info(shortcodeToID(shortcode));

    // Process media data
    const item = post.items[0];
    const username = item.caption.user.username;
    const comment_count = item.comment_count;
    const like_count = item.like_count;
    const caption = item.caption.text;
    let thumbnail_url = "";
    if (item.image_versions2) {
      // Image/video
      thumbnail_url = item.image_versions2.candidates[0].url;
    } else {
      // Carousel
      thumbnail_url = item.carousel_media[0].image_versions2.candidates[0].url;
    }

    return {
      username,
      code: shortcode,
      comment_count,
      like_count,
      caption,
      thumbnail_url,
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
  getPostData,
};
