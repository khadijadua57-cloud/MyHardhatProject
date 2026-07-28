// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;
 
contract DAOVoting {
    struct Proposal {
        string description;
        uint256 yesVotes;
        uint256 noVotes;
        string documentCID;
    }
 
    Proposal[] public proposals;
    mapping(uint256 => mapping(address => bool)) public hasVoted;
 
    function createProposal(string memory description) public {
        proposals.push(Proposal({
            description: description,
            yesVotes: 0,
            noVotes: 0,
            documentCID: ""
        }));
    }
 
    function attachDocument(uint256 proposalId, string memory cid) public {
        require(proposalId < proposals.length, "Proposal does not exist");
        proposals[proposalId].documentCID = cid;
    }
 
    function vote(uint256 proposalId, bool support) public {
        require(proposalId < proposals.length, "Proposal does not exist");
        require(!hasVoted[proposalId][msg.sender], "You already voted");
        hasVoted[proposalId][msg.sender] = true;
        if (support) {
            proposals[proposalId].yesVotes += 1;
        } else {
            proposals[proposalId].noVotes += 1;
        }
    }
 
    function getProposal(uint256 proposalId) public view returns (
        string memory description,
        uint256 yesVotes,
        uint256 noVotes,
        string memory documentCID
    ) {
        Proposal memory p = proposals[proposalId];
        return (p.description, p.yesVotes, p.noVotes, p.documentCID);
    }
 
    function proposalCount() public view returns (uint256) {
        return proposals.length;
    }
}
