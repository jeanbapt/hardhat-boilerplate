require("@nomicfoundation/hardhat-toolbox");


// Go to https://www.exaion.com/exanode, sign up, create
// a new project in its dashboard, and replace "KEY" with its key
const EXANODE_API_KEY = "c81e3258-dd64-4137-897d-8b19a3ba6a85";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY = "51d3adaa431da439253ba1c352e59b8c07d951167bc379d342388148162b8cf6";






// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://api.exanode.com/v1/${EXANODE_API_KEY}/rpc`,
      accounts: [GOERLI_PRIVATE_KEY]
    },
    hardhat: {
      chainId: 1337 // We set 1337 to make interacting with MetaMask simpler
    }
  }
};
