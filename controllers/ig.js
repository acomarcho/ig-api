const igService = require("../services/ig");

const getUserData = async (req, res) => {
  try {
    const { username } = req.params;
    let data = await igService.getUserData(username);
    res.status(200).json({
      message: `Successfully fetched ${username}'s data`,
      data,
    });
  } catch (error) {
    res.status(error.status).json({
      message: error.message,
    });
  }
};

const getUserFeeds = async (req, res) => {
  try {
    const { username } = req.params;
    let data = await igService.getUserFeeds(username);
    res.status(200).json({
      message: `Successfully fetched ${username}'s feeds`,
      data,
    });
  } catch (error) {
    res.status(error.status).json({
      message: error.message,
    });
  }
};

module.exports = {
  getUserData,
  getUserFeeds,
};
