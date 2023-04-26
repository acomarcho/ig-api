const { getClient } = require("./igClient");
require("dotenv").config();

const getUserData = async (username) => {
  try {
    const ig = await getClient();

    const searchResults = await ig.user.searchExact(username);

    if (!searchResults) {
      throw {
        status: 404,
        message: `Username ${username} not found`,
      };
    }

    const user = await ig.user.info(searchResults.pk);

    return user;
  } catch (error) {
    console.log("Error", error);
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
