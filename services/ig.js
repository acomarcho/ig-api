const superagent = require("superagent");
require("dotenv").config();

const getUserData = async (username) => {
  try {
    const response = await superagent
      .get(
        `https://www.instagram.com/api/v1/users/web_profile_info/?username=${username}`
      )
      .set("x-ig-app-id", process.env.X_IG_APP_ID);

    return response.body.data;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
};

module.exports = {
  getUserData,
};
