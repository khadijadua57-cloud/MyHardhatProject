const contractAddress = "0x354E53ac2bd5977bB343AC5528a9D93De11797d0"; // REPLACE with your own deployed address 

const contractABI = [ {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "message",
      "outputs": [
        {
          "internalType": "string",
          "name": "", 
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }, 
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_message",
          "type": "string"
        }
      ],
      "name": "setMessage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalUpdates",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
 ]; 

  

let provider; 

let signer; 

let contract; 

  

document.getElementById("connectBtn").onclick = async () => { 

  provider = new ethers.BrowserProvider(window.ethereum); 

  await provider.send("eth_requestAccounts", []); 

  signer = await provider.getSigner(); 

  contract = new ethers.Contract(contractAddress, contractABI, signer); 

  

  const address = await signer.getAddress(); 

  document.getElementById("accountDisplay").innerText = "Connected: " + address; 

}; 

  

document.getElementById("loadBtn").onclick = async () => { 

  const owner = await contract.owner(); 

  const message = await contract.message(); 

  document.getElementById("ownerDisplay").innerText = owner; 

  document.getElementById("messageDisplay").innerText = message; 

}; 

  

document.getElementById("setMessageBtn").onclick = async () => { 

  const newMessage = document.getElementById("messageInput").value; 

  document.getElementById("statusDisplay").innerText = "Sending transaction..."; 

  const tx = await contract.setMessage(newMessage); 

  await tx.wait(); 

  document.getElementById("statusDisplay").innerText = "Message updated!"; 

};