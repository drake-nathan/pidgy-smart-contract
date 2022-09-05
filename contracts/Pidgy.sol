// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Pidgy is ERC721, Ownable, ERC721Burnable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("Pidgy", "PIDGY") {}

    uint256 public maxSupply = 10;
    bool public isMintActive = false;

    function getMintStatus() public view returns (bool) {
        return isMintActive;
    }

    function toggleMint() external onlyOwner {
        isMintActive = true;
    }

    function safeMint(address to) public {
        uint256 tokenId = _tokenIdCounter.current();
        require(tokenId < maxSupply, "All NFTs have been minted");
        require(balanceOf(msg.sender) == 0, "1 mint per wallet allowed");
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }
}
