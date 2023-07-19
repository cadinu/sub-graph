/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "bsc",
  wNativeAddress: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
  v3: {
    // WBNB-USDT 500
    // wNativeStablePoolAddress: "0x36696169c63e42cd08ce11f5deebbcebae652050",
    wNativeStablePoolAddress: "0x007a6d6504AF2a41b1Ccb5eb52b6c62b2e55572a",
    stableIsToken0: true,
    factoryAddress: "0x2cb62aEBa8eB609020129983A5141DB883abca85",
    startBlock: 29208435,
    stableCoins: [
      "0x55d398326f99059ff775485246999027b3197955", // USDT
      "0xe9e7cea3dedca5984780bafc599bd69add087d56", // BUSD
      "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", // USDC
    ],
    whitelistAddresses: [
      "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", // WBNB
      "0x55d398326f99059ff775485246999027b3197955", // USDT
      "0xe9e7cea3dedca5984780bafc599bd69add087d56", // BUSD
      "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", // USDC
      "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c", // BTCB
      "0x2170ed0880ac9a755fd29b2688956bd959f933f8", // WETH
      "0x6e64fCF15Be3eB71C3d42AcF44D85bB119b2D98b", // CBON
      "0x76e112203eF59D445452ef7556386dD2DF3Ed914", // CADINU
    ],
    nonfungiblePositionManagerAddress: "0x0C26558A7Bf8be790774fc84De8e5229A4dB5BA1",
    nonfungiblePositionManagerStartBlock: 29238662,
    minETHLocked: -1,
  },
  masterChefV3: {
    masterChefAddress: "0x8C1ec68fE9478F5B915390F0CA57f1F2A039EBae",
    startBlock: 29639542,
  },
};
