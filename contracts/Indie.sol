// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol';

contract Indie is ERC20, Ownable, ERC20Pausable {
  uint256 private immutable _cap = 10_000_000e18; // 10 Million Max Supply

  constructor() ERC20('Indie', 'INDIE') {}

  function cap() public view virtual returns (uint256) {
    return _cap;
  }

  function mint(address to, uint256 amount) public virtual onlyOwner {
    require(ERC20.totalSupply() + amount <= _cap, 'ERC20Capped: cap exceeded');
    _mint(to, amount);
  }

  function pause() public virtual onlyOwner {
    _pause();
  }

  function unpause() public virtual onlyOwner {
    _unpause();
  }

  function _beforeTokenTransfer(
    address from,
    address to,
    uint256 amount
  ) internal virtual override(ERC20, ERC20Pausable) {
    super._beforeTokenTransfer(from, to, amount);
  }
}
