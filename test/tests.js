const { expect } = require('chai')
const { ethers } = require('hardhat')

let contract, owner, addr1

describe('Indie', function () {
  beforeEach(async () => {
    const Contract = await ethers.getContractFactory('Indie')
    contract = await Contract.deploy()
    await contract.deployed()
    const [o, a1, a2] = await ethers.getSigners()
    owner = o
    addr1 = a1
    addr2 = a2
  })

  describe('token', function () {
    it('should have name and symbol', async function () {
      const name = await contract.name()
      const symbol = await contract.symbol()
      expect(name).to.equal('Indie')
      expect(symbol).to.equal('INDIE')
    })
  })

  describe('minting', function () {
    it('should allow owner to mint tokens to an address', async function () {
      const addr1Balance = await contract.balanceOf(addr1.address)
      expect(addr1Balance).to.equal(0)
      await contract.mint(addr1.address, 1337)
      const addr1NewBalance = await contract.balanceOf(addr1.address)
      expect(addr1NewBalance).to.equal(1337)
    })
    it('should not allow non-owner to mint tokens to an address', async function () {
      await expect(
        contract.connect(addr1).mint(addr2.address, 401),
      ).to.be.revertedWith('Ownable: caller is not the owner')
    })
    it('should enforce a max supply cap of 10M', async function () {
      // Mint total supply:
      await contract.mint(addr1.address, '10000000' + '0'.repeat(18))
      await expect(contract.mint(addr1.address, 1)).to.be.revertedWith(
        'ERC20Capped: cap exceeded',
      )
    })
    it('should return cap getter', async function () {
      const cap = await contract.cap()
      expect(cap).to.equal(10000000 + '0'.repeat(18))
    })
  })

  describe('pausing', function () {
    it('allows pausing and unpausing transferability', async function () {
      // Mint some tokens:
      await contract.mint(addr1.address, 1337)
      // Transfer some to another account:
      await contract.connect(addr1).transfer(addr2.address, 1)
      // Pause transfers:
      await contract.pause()
      // Attempt transfering after pause:
      await expect(
        contract.connect(addr1).transfer(addr2.address, 1),
      ).to.be.revertedWith('ERC20Pausable: token transfer while paused')
      // Unpause transfers:
      await contract.unpause()
      // Transfer some to another account:
      await contract.connect(addr1).transfer(addr2.address, 1)
      // Check that tokens were transfered:
      const addr2Balance = await contract.balanceOf(addr2.address)
      expect(addr2Balance).to.equal(2)
    })
    it('only allows owner to pause', async function () {
      await expect(contract.connect(addr1).pause()).to.be.revertedWith(
        'Ownable: caller is not the owner',
      )
    })
    it('only allows owner to unpause', async function () {
      await expect(contract.connect(addr1).unpause()).to.be.revertedWith(
        'Ownable: caller is not the owner',
      )
    })
  })
})
