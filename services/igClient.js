const { IgApiClient } = require("instagram-private-api");
require("dotenv").config();

let igClient = null;

const getClient = async () => {
  if (!igClient) {
    igClient = new IgApiClient();
    igClient.state.generateDevice(process.env.IG_USERNAME);
    await igClient.account.login(
      process.env.IG_USERNAME,
      process.env.IG_PASSWORD
    );
    return igClient;
  }
  return igClient;
};

const refreshClient = async () => {
  igClient = new IgApiClient();
  igClient.state.generateDevice(process.env.IG_USERNAME);
  await igClient.account.login(
    process.env.IG_USERNAME,
    process.env.IG_PASSWORD
  );
};

module.exports = {
  getClient,
  refreshClient,
};
