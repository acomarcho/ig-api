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
    if (error.message === "User with exact username not found.") {
      res.status(404).json({
        message: error.message,
      });
    } else {
      res.status(500).json({
        message: error.message,
      });
    }
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
    if (error.message === "User with exact username not found.") {
      res.status(404).json({
        message: error.message,
      });
    } else {
      res.status(500).json({
        message: error.message,
      });
    }
  }
};

const getUserAndFeeds = async (req, res) => {
  try {
    const { username } = req.params;
    let data = await igService.getUserAndFeeds(username);
    res.status(200).json({
      message: `Successfully fetched ${username}'s feeds`,
      data,
    });
  } catch (error) {
    if (error.message === "User with exact username not found.") {
      res.status(404).json({
        message: error.message,
      });
    } else {
      res.status(500).json({
        message: error.message,
      });
    }
  }
};

module.exports = {
  getUserData,
  getUserFeeds,
  getUserAndFeeds,
};
