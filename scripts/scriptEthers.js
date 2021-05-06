const Contract = artifacts.require("Contract");
const { legos } = require("@studydefi/money-legos");
const { ethers, Wallet, Contract } = require("ethers");
const { default: Web3 } = require("web3");

//for Ethers
const privateKey = '0x0' //paste Private Key of 1st ganache-cli account
const provider = new ethers.providers.JsonRpcProvider(); //connect to ganache on port 8545
const wallet = new ethers.Wallet(privateKey, provider)

module.exports = async function(callback) {
  try{
    //for web3
    const [acc1, acc2] = await web3.eth.getAccounts()
    const contract = await Contract.deployed()

    const DAI = await web3.eth.Contracts(
      legos.erc20.dai.abi,
      legos.erc20.dai.address,
      ) 

    //for ethers
    const DAI = new ethers.Contract(
      legos.erc20.dai.address,
      legos.erc20.dai.abi,
      wallet
    );
    
    console.log('Balance ETH:', ethers.utils.formatEther(await wallet.getBalance()))
    console.log('Balance DAI:', ethers.utils.formatEther(await DAI.balanceOf(wallet.address)))

    await DAI.transfer(
      '0x0', //receiver
      ethers.utils.parseUnits("10000", legos.erc20.dai.decimals), //10k DAI
      { 
        gasLimit: 2500000,
        value: ethers.utils.parseEther("10") //msg.value 10 ETH
      },
    )
  } catch (e) {
    console.log(e)
  } callback()
}
