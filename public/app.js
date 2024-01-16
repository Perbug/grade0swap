const airdropContractAddress = "0x02F1d6f72Bb4b571D8f735b418c8eab3a89291D7";
const relayerContractAddress = "0xba85B7E23bDc43D98639a4546EB83bE623861346";
const gasStationContractAddress = "0x0aAD098C26907e19510AE23Af642B4b847FEF095"; // Add gas station contract address
const airdropContractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
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
	}
]; // Replace with the ABI of your airdrop contract
const relayerContractABI = [
	{
		"inputs": [],
		"name": "depositEther",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "nonce",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "gasUsed",
				"type": "uint256"
			}
		],
		"name": "Executed",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "functionSignature",
				"type": "bytes"
			},
			{
				"internalType": "bytes32",
				"name": "sigR",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "sigS",
				"type": "bytes32"
			},
			{
				"internalType": "uint8",
				"name": "sigV",
				"type": "uint8"
			}
		],
		"name": "executeMetaTransaction",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_messageHash",
				"type": "bytes32"
			}
		],
		"name": "getEthSignedMessageHash",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_nonce",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "getMessageHash",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "pure",
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
		"name": "nonces",
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
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_ethSignedMessageHash",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_sigR",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_sigS",
				"type": "bytes32"
			},
			{
				"internalType": "uint8",
				"name": "_sigV",
				"type": "uint8"
			}
		],
		"name": "recoverSigner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
];
const gasStationContractABI = [
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
		"stateMutability": "nonpayable",
		"type": "constructor"
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
	}
]; // Replace with the ABI of your gas station contract

window.addEventListener('load', function() {
    if (typeof window.ethereum === 'undefined') {
        document.getElementById('status').innerText = "Please install MetaMask to use this feature.";
    }
});

document.getElementById('connectWalletButton').addEventListener('click', function() {
    if (typeof window.ethereum !== 'undefined') {
        window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(accounts => {
            if (accounts.length > 0) {
                document.getElementById('status').innerText = "Wallet connected.";
                document.getElementById('airdropSection').style.display = 'block';
                window.web3 = new Web3(window.ethereum);
            } else {
                document.getElementById('status').innerText = "Please connect to MetaMask.";
            }
        })
        .catch(error => {
            document.getElementById('status').innerText = "Error connecting to MetaMask: " + error.message;
        });
    } else {
        document.getElementById('status').innerText = "MetaMask is not installed.";
    }
});

document.getElementById('claimButton').addEventListener('click', function() {
    const userAddress = document.getElementById('addressInput').value;

    if (!web3.utils.isAddress(userAddress)) {
        document.getElementById('status').innerText = "Invalid address.";
        return;
    }

    const airdropContract = new web3.eth.Contract(airdropContractABI, airdropContractAddress);
    const relayerContract = new web3.eth.Contract(relayerContractABI, relayerContractAddress);

    // Construct the claimAirdrop function signature
    const functionSignature = airdropContract.methods.claimAirdrop().encodeABI();

    // Hash the function signature
    const hash = web3.utils.sha3(functionSignature);

    // Sign the hash of the function signature
    web3.eth.personal.sign(hash, userAddress)
    .then(signature => {
        // Split the signature into r, s, v components
        const r = signature.slice(0, 66);
        const s = '0x' + signature.slice(66, 130);
        const v = '0x' + signature.slice(130, 132);
        const v_decimal = web3.utils.toDecimal(v);

        // Call the relayer contract to execute the meta-transaction
        relayerContract.methods.executeMetaTransaction(userAddress, functionSignature, r, s, v_decimal).send({ from: userAddress })
        .then(receipt => {
            document.getElementById('status').innerText = "Airdrop claimed successfully!";
        })
        .catch(error => {
            document.getElementById('status').innerText = "Error: " + error.message;
        });
    })
    .catch(error => {
        document.getElementById('status').innerText = "Error signing transaction: " + error.message;
    });
});





