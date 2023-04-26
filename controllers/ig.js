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
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  getUserData,
};
