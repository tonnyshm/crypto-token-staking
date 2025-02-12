import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const STAKING_CONTRACT_ADDRESS = "0xYourContractAddress";
const STAKING_ABI = [ /* Add your ABI here */ ];

const StakingApp = ({ provider, account }) => {
    const [stakingContract, setStakingContract] = useState(null);
    const [stakeAmount, setStakeAmount] = useState("");
    const [reward, setReward] = useState("0");

    useEffect(() => {
        if (provider) {
            const signer = provider.getSigner();
            const contract = new ethers.Contract(STAKING_CONTRACT_ADDRESS, STAKING_ABI, signer);
            setStakingContract(contract);
        }
    }, [provider]);

    const stakeTokens = async () => {
        if (!stakingContract) return;
        try {
            const tx = await stakingContract.stake(ethers.utils.parseEther(stakeAmount));
            await tx.wait();
            toast.success("Tokens Staked Successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Transaction Failed!");
        }
    };

    const unstakeTokens = async () => {
        if (!stakingContract) return;
        try {
            const tx = await stakingContract.unstake();
            await tx.wait();
            toast.success("Tokens Unstaked Successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Transaction Failed!");
        }
    };

    return (
        <div className="staking-container">
            <h2>Web3 Staking DApp</h2>
            <input 
                type="text" 
                placeholder="Amount to Stake" 
                value={stakeAmount} 
                onChange={(e) => setStakeAmount(e.target.value)}
            />
            <button onClick={stakeTokens}>Stake</button>
            <button onClick={unstakeTokens}>Unstake</button>
        </div>
    );
};

export default StakingApp;
