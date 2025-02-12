# Web3 Staking dApp

## Introduction

This project is a **Web3 Staking dApp** that allows users to stake their ERC-20 tokens and earn rewards over time. The dApp is built using **Solidity** for the smart contract and **React + Web3.js** for the frontend.

## Features

- **Stake ERC-20 Tokens**: Users can deposit tokens into the smart contract.
- **Unstake Tokens**: Users can withdraw their staked tokens along with rewards.
- **Real-time Rewards Calculation**: The smart contract automatically calculates the rewards based on the staking duration.
- **Secure and Efficient**: Uses OpenZeppelin’s ERC-20 and Ownable contracts for security.

## Tech Stack

- **Smart Contract**: Solidity, OpenZeppelin
- **Frontend**: React.js, Web3.js, ethers.js
- **Blockchain**: Ethereum (or compatible chains like Polygon, BSC)

## Installation

### Prerequisites

- Node.js (v16 or later)
- MetaMask
- Hardhat (for local testing)
- Ethereum Testnet (Goerli, Sepolia, etc.)

### Clone the Repository

```sh
git clone git@github.com:tonnyshm/crypto-token-staking.git
cd crypto-token-staking
```

### Install Dependencies

```sh
npm install
```

## Smart Contract Deployment

1. **Compile the contract**

```sh
npx hardhat compile
```

2. **Deploy to Local Network**

```sh
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```

3. **Deploy to a Testnet**
   Update `hardhat.config.js` with your Infura or Alchemy API key and deploy:

```sh
npx hardhat run scripts/deploy.js --network goerli
```

## Running the Frontend

1. Configure the frontend to connect to the deployed contract._
2. Start the React application:

```sh
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Connect Wallet**: Click the "Connect Wallet" button to link MetaMask.
2. **Stake Tokens**: Enter the amount and stake your ERC-20 tokens.
3. **View Rewards**: Check your accumulated staking rewards.
4. **Unstake Tokens**: Withdraw your tokens along with the earned rewards.

## Project Structure

```
staking-dapp/
│── contracts/        # Solidity Smart Contracts
│── frontend/         # React Frontend
│── scripts/          # Deployment Scripts
│── test/             # Unit Tests
│── hardhat.config.js # Hardhat Configuration
```

## Testing

Run unit tests using Hardhat:

```sh
npx hardhat test
```

## Future Enhancements

- UI improvements with Tailwind CSS
- Multi-chain support (Ethereum, Polygon, BSC)
- Auto-compounding staking rewards

## License

This project is licensed under the **MIT License**.

## Author

**Your Name** - [GitHub](https://github.com/tonnyshm)

---

Feel free to contribute to this project by submitting a pull request!

