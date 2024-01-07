const airdropContractAddress = "0x1f8b6360568EE3b1d7697A79b7F8CbB6fF60123b";
const relayerContractAddress = "0xB224B805e9FDBaDE0d3B692137840eC1810C9593";
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
		"name": "claimAirdropForUser",
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
		"name": "relayer",
		"outputs": [
			{
				"internalType": "contract IRelayer",
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
		"stateMutability": "nonpayable",
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
]; // Replace with the ABI of your relayer contract

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
    web3.eth.getAccounts().then(accounts => {
        if (accounts.length === 0) {
            document.getElementById('status').innerText = "Please connect to MetaMask.";
            return;
        }

        const userAddress = accounts[0];
        const airdropContract = new web3.eth.Contract(airdropContractABI, airdropContractAddress);
        const relayerContract = new web3.eth.Contract(relayerContractABI, relayerContractAddress);

        // Construct the claimAirdrop function signature
        const functionSignature = airdropContract.methods.claimAirdrop().encodeABI();

        // Sign the transaction
        web3.eth.sign(functionSignature, userAddress)
        .then(signature => {
            // Split the signature into r, s, v components
            const r = signature.slice(0, 66);
            const s = '0x' + signature.slice(66, 130);
            const v = '0x' + signature.slice(130, 132);
            const v_decimal = web3.utils.toDecimal(v);

            // Call the relayer contract to execute the meta-transaction
            relayerContract.methods.claimAirdropForUser(use

