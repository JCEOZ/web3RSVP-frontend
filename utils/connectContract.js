import abiJSON from "./Web3RSVP.json";
import { ethers } from "ethers";

function connectContract() {
    const contractAddress = "0xefD7117F20EaFD687cA285b09a6ED9F001dE82E3";
    const contractABI = abiJSON.abi;
    let rsvpContract;
    try {
        const { ethereum } = window;

        if (ethereum) {
            // checking for eth object in the window
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            // instantiating new connection to the contract
            rsvpContract = new ethers.Contract(contractAddress, contractABI, signer);
        } else {
            console.log("Ethereum object doesn't exist!");
        }
    } catch (error) {
        console.log("ERROR:", error);
    }
    return rsvpContract;
}

export default connectContract;