const Contract = artifacts.require("Contract");
const { legos } = require("@studydefi/money-legos");

module.exports = async function(callback) {
  try{
    //for web3
    const [acc1, acc2] = await web3.eth.getAccounts()
    const contract = await Contract.deployed()

    const DAI = await web3.eth.Contracts(
      legos.erc20.dai.abi,
      legos.erc20.dai.address
    ) 

    await DAI.methods.transfer(
      '0x0', //receiver
      web3.utils.toWei('1') //1 DAI
    ).send({
      from: acc1,
      gasLimit: 2500000,
      value: web3.utils.toWei('1') //1 ETH
    })
    
    console.log('Balance ETH:', web3.utils.fromWei(await web3.eth.getBalance(acc1).toString()))
    console.log('Balance DAI:', web3.utils.fromWei(await DAI.methods.balanceOf(acc1).toString()))

  } catch (e) {
    console.log(e)
  } callback()
}
