async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with account:", deployer.address);

    const StakingContract = await ethers.getContractFactory("StakingContract");
    const staking = await StakingContract.deploy("0xYourTokenAddress", "0xRewardTokenAddress");

    console.log("Staking Contract deployed at:", staking.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
