const airdropContractAddress = "0xf69CB2b95CF82C97eDEC267ae32f6049BF33CcaE";
const gasStationContractAddress = "0x0aAD098C26907e19510AE23Af642B4b847FEF095";
const airdropContractABI = [
	{
		"inputs": [],
		"name": "claimAirdrop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "depositToAirdrop",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "AIRDROP_AMOUNT_PER_PERSON",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "gasStation",
		"outputs": [
			{
				"internalType": "contract IGasStation",
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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "hasClaimed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
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
		"inputs": [],
		"name": "totalDeposited",
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
]; // Replace with the ABI of your airdrop contract
const gasStationContractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "depositForGas",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "gasBalances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
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
				"internalType": "address payable",
				"name": "contractAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "payGas",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawExcess",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]; // Replace with the ABI of your gas station contract

window.addEventListener('load', function() {
    if (typeof window.ethereum !== 'undefined') {
        window.web3 = new Web3(window.ethereum);
        console.log('Web3 Detected! ' + web3.currentProvider.constructor.name);
        window.ethereum.enable();
    } else {
        document.getElementById('status').innerText = "Please install MetaMask to use this feature.";
    }
});

document.getElementById('claimButton').addEventListener('click', function() {
    const userAddress = document.getElementById('addressInput').value;
    if (!web3.utils.isAddress(userAddress)) {
        document.getElementById('status').innerText = "Invalid address.";
        return;
    }
    
    const airdropContract = new web3.eth.Contract(airdropContractABI, airdropContractAddress);
    airdropContract.methods.claimAirdrop().send({from: userAddress})
    .then(function(receipt) {
        document.getElementById('status').innerText = "Airdrop claimed successfully!";
    })
    .catch(function(error) {
        document.getElementById('status').innerText = "Error: " + error.message;
    });
});
