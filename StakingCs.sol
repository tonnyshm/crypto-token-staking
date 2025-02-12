// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract StakingContract is Ownable {
    IERC20 public stakingToken;
    IERC20 public rewardToken;

    struct Stake {
        uint256 amount;
        uint256 timestamp;
    }

    mapping(address => Stake) public stakes;
    uint256 public rewardRate = 100; // 100 tokens per second

    event Staked(address indexed user, uint256 amount);
    event Unstaked(address indexed user, uint256 amount, uint256 reward);

    constructor(IERC20 _stakingToken, IERC20 _rewardToken) {
        stakingToken = _stakingToken;
        rewardToken = _rewardToken;
    }

    function stake(uint256 _amount) external {
        require(_amount > 0, "Cannot stake zero tokens");
        stakingToken.transferFrom(msg.sender, address(this), _amount);

        if (stakes[msg.sender].amount > 0) {
            uint256 rewards = calculateReward(msg.sender);
            rewardToken.transfer(msg.sender, rewards);
        }

        stakes[msg.sender].amount += _amount;
        stakes[msg.sender].timestamp = block.timestamp;

        emit Staked(msg.sender, _amount);
    }

    function unstake() external {
        require(stakes[msg.sender].amount > 0, "No tokens staked");

        uint256 stakedAmount = stakes[msg.sender].amount;
        uint256 rewards = calculateReward(msg.sender);

        stakes[msg.sender].amount = 0;
        stakingToken.transfer(msg.sender, stakedAmount);
        rewardToken.transfer(msg.sender, rewards);

        emit Unstaked(msg.sender, stakedAmount, rewards);
    }

    function calculateReward(address _staker) public view returns (uint256) {
        Stake memory stakeInfo = stakes[_staker];
        uint256 stakedDuration = block.timestamp - stakeInfo.timestamp;
        return (stakeInfo.amount * rewardRate * stakedDuration) / 1e18;
    }
}
