const BigMapContract = artifacts.require("bigMapContract");
const {MichelsonMap} = require("@taquito/taquito");

const initialStorage = new MichelsonMap()

module.exports = deployer => {
    deployer.deploy(BigMapContract, initialStorage)
};
