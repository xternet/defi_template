const Contract = artifacts.require('./Contract')

require('chai')
  .use(require('chai-as-promised'))
  .should()

//for Ethers
// const privateKey = '0x0' //paste Private Key of 1st ganache-cli account
// const provider = new ethers.providers.JsonRpcProvider(); //connect to ganache on port 8545
// const wallet = new ethers.Wallet(privateKey, provider)

contract('Contract', ([acc1, acc2]) => {
  let contract

  beforeEach(async () => {
    contract = await Contract.new()
  })

  describe('1st block of tests', () => {
    it('checks contract name', async () => {
      const result = await contract.name()
      result.should.equal("ContractName")
    })

    it('1st test1', async () => {        
    })
  })

  describe('2nd block of tests', () => {
    it('2nd test1', async () => {
    })

    it('2nd test1', async () => {
    })
  })
})