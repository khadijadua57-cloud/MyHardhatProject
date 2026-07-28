// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;
 
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
 
contract MyNFT is ERC721 {
    uint256 public nextTokenId;
    mapping(uint256 => string) private _tokenURIs;
 
    constructor() ERC721("MyClassNFT", "MCNFT") {}
 
    function mintNFT(string memory uri) public returns (uint256) {
        uint256 tokenId = nextTokenId;
        _safeMint(msg.sender, tokenId);
        _tokenURIs[tokenId] = uri;
        nextTokenId++;
        return tokenId;
    }
 
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        return _tokenURIs[tokenId];
    }
}
