import * as chains from './chains';

// If you add coins for a new network, make sure Weth address (for the router you are using) is the first entry



const GRADE0Coins = [
  { 
    name: "Wrapped Grade0",
    abbr: "WGR0",
    address: "0xd2e89db8d82cFBa24963E92EFc6c7B1f6acAc1BB"
  },
  { 
    name: "Grade0",
    abbr: "GR0",
    address: ""
  },
  { 
    name: "Wrapped Grade02",
    abbr: "WGR02",
    address: "0xE158fa2cE59bBab291c27c554495425352b6D4D9"
  }

]

const COINS = new Map();
COINS.set(chains.ChainId.GRADE0, GRADE0Coins);
export default COINS
