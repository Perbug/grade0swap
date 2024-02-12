import * as chains from './chains';

// If you add coins for a new network, make sure Weth address (for the router you are using) is the first entry



const GRADE0Coins = [
  { 
    name: "Wrapped Grade0",
    abbr: "WGR0",
    address: "0xd2e89db8d82cFBa24963E92EFc6c7B1f6acAc1BB"
  },
  { 
    name: "Light Slicer Token",
    abbr: "LST",
    address: "0x0bbe70174F84524eA872A44cb53938A0cdf78b16"
  },
  

]

const COINS = new Map();
COINS.set(chains.ChainId.GRADE0, GRADE0Coins);
export default COINS
