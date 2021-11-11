require('@nomiclabs/hardhat-waffle');

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      mining: {
        auto: false,
        interval: 60000 * 1,
      },
    },
  },
  solidity: '0.8.4',
};
