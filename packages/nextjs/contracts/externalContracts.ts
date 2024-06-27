import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
  8453: {
    "$Test/$WETH": {
      address: "0x53f64cde28dd3caef17e701593b4ad7a95f0f61c",
      abi: [
        {
          inputs: [
            { internalType: "uint96", name: "initialTokenSupply", type: "uint96" },
            { internalType: "address", name: "initialSupplyOwner", type: "address" },
            { internalType: "uint96", name: "tokensPerNft", type: "uint96" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        { inputs: [], name: "AlreadyInitialized", type: "error" },
        { inputs: [], name: "ApprovalCallerNotOwnerNorApproved", type: "error" },
        { inputs: [], name: "DNAlreadyInitialized", type: "error" },
        { inputs: [], name: "InsufficientAllowance", type: "error" },
        { inputs: [], name: "InsufficientBalance", type: "error" },
        { inputs: [], name: "LinkMirrorContractFailed", type: "error" },
        { inputs: [], name: "MirrorAddressIsZero", type: "error" },
        { inputs: [], name: "NewOwnerIsZeroAddress", type: "error" },
        { inputs: [], name: "NoHandoverRequest", type: "error" },
        { inputs: [], name: "SenderNotMirror", type: "error" },
        { inputs: [], name: "TokenDoesNotExist", type: "error" },
        { inputs: [], name: "TotalSupplyOverflow", type: "error" },
        { inputs: [], name: "TransferCallerNotOwnerNorApproved", type: "error" },
        { inputs: [], name: "TransferFromIncorrectOwner", type: "error" },
        { inputs: [], name: "TransferToZeroAddress", type: "error" },
        { inputs: [], name: "Unauthorized", type: "error" },
        { inputs: [], name: "ZeroTokensPerNft", type: "error" },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "owner", type: "address" },
            { indexed: true, internalType: "address", name: "spender", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: true, internalType: "address", name: "pendingOwner", type: "address" }],
          name: "OwnershipHandoverCanceled",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: true, internalType: "address", name: "pendingOwner", type: "address" }],
          name: "OwnershipHandoverRequested",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "oldOwner", type: "address" },
            { indexed: true, internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "target", type: "address" },
            { indexed: false, internalType: "bool", name: "status", type: "bool" },
          ],
          name: "SkipNFTSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "from", type: "address" },
            { indexed: true, internalType: "address", name: "to", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "Transfer",
          type: "event",
        },
        { stateMutability: "payable", type: "fallback" },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        { inputs: [], name: "cancelOwnershipHandover", outputs: [], stateMutability: "payable", type: "function" },
        {
          inputs: [{ internalType: "address", name: "pendingOwner", type: "address" }],
          name: "completeOwnershipHandover",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "a", type: "address" }],
          name: "getSkipNFT",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "mirror",
          outputs: [{ internalType: "contract DN404Mirror", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "mirrorERC721",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "result", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "pendingOwner", type: "address" }],
          name: "ownershipHandoverExpiresAt",
          outputs: [{ internalType: "uint256", name: "result", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "payable", type: "function" },
        { inputs: [], name: "requestOwnershipHandover", outputs: [], stateMutability: "payable", type: "function" },
        {
          inputs: [{ internalType: "string", name: "baseURI_", type: "string" }],
          name: "setBaseURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "bool", name: "skipNFT", type: "bool" }],
          name: "setSkipNFT",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
          name: "tokenURI",
          outputs: [{ internalType: "string", name: "result", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        { stateMutability: "payable", type: "receive" },
      ],
    },
    "$Test/$DEGEN": {
      address: "0x0b1174Bdf13057B7b31D7a3cb5EEe186F33b4107",
      abi: [
        {
          inputs: [
            { internalType: "uint96", name: "initialTokenSupply", type: "uint96" },
            { internalType: "address", name: "initialSupplyOwner", type: "address" },
            { internalType: "uint96", name: "tokensPerNft", type: "uint96" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        { inputs: [], name: "AlreadyInitialized", type: "error" },
        { inputs: [], name: "ApprovalCallerNotOwnerNorApproved", type: "error" },
        { inputs: [], name: "DNAlreadyInitialized", type: "error" },
        { inputs: [], name: "InsufficientAllowance", type: "error" },
        { inputs: [], name: "InsufficientBalance", type: "error" },
        { inputs: [], name: "LinkMirrorContractFailed", type: "error" },
        { inputs: [], name: "MirrorAddressIsZero", type: "error" },
        { inputs: [], name: "NewOwnerIsZeroAddress", type: "error" },
        { inputs: [], name: "NoHandoverRequest", type: "error" },
        { inputs: [], name: "SenderNotMirror", type: "error" },
        { inputs: [], name: "TokenDoesNotExist", type: "error" },
        { inputs: [], name: "TotalSupplyOverflow", type: "error" },
        { inputs: [], name: "TransferCallerNotOwnerNorApproved", type: "error" },
        { inputs: [], name: "TransferFromIncorrectOwner", type: "error" },
        { inputs: [], name: "TransferToZeroAddress", type: "error" },
        { inputs: [], name: "Unauthorized", type: "error" },
        { inputs: [], name: "ZeroTokensPerNft", type: "error" },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "owner", type: "address" },
            { indexed: true, internalType: "address", name: "spender", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: true, internalType: "address", name: "pendingOwner", type: "address" }],
          name: "OwnershipHandoverCanceled",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: true, internalType: "address", name: "pendingOwner", type: "address" }],
          name: "OwnershipHandoverRequested",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "oldOwner", type: "address" },
            { indexed: true, internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "target", type: "address" },
            { indexed: false, internalType: "bool", name: "status", type: "bool" },
          ],
          name: "SkipNFTSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "from", type: "address" },
            { indexed: true, internalType: "address", name: "to", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "Transfer",
          type: "event",
        },
        { stateMutability: "payable", type: "fallback" },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        { inputs: [], name: "cancelOwnershipHandover", outputs: [], stateMutability: "payable", type: "function" },
        {
          inputs: [{ internalType: "address", name: "pendingOwner", type: "address" }],
          name: "completeOwnershipHandover",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "a", type: "address" }],
          name: "getSkipNFT",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "mirror",
          outputs: [{ internalType: "contract DN404Mirror", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "mirrorERC721",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "result", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "pendingOwner", type: "address" }],
          name: "ownershipHandoverExpiresAt",
          outputs: [{ internalType: "uint256", name: "result", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "payable", type: "function" },
        { inputs: [], name: "requestOwnershipHandover", outputs: [], stateMutability: "payable", type: "function" },
        {
          inputs: [{ internalType: "string", name: "baseURI_", type: "string" }],
          name: "setBaseURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "bool", name: "skipNFT", type: "bool" }],
          name: "setSkipNFT",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
          name: "tokenURI",
          outputs: [{ internalType: "string", name: "result", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        { stateMutability: "payable", type: "receive" },
      ],
    },
    LiquidStaking: {
      address: "0x6901d3A45dc3e4E79f5eDd60ABE57C35feBB8005",
      abi: [
        {
          type: "function",
          name: "DURATION",
          inputs: [],
          outputs: [{ name: "", type: "uint64", internalType: "uint64" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "allowance",
          inputs: [
            { name: "", type: "address", internalType: "address" },
            { name: "", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "approve",
          inputs: [
            { name: "spender", type: "address", internalType: "address" },
            { name: "amount", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "currentUnlockEndTimestamp",
          inputs: [],
          outputs: [{ name: "", type: "uint64", internalType: "uint64" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "decimals",
          inputs: [],
          outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "distributeReward",
          inputs: [{ name: "rewardAmount", type: "uint128", internalType: "uint128" }],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getPricePerFullShare",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [{ name: "initialOwner", type: "address", internalType: "address" }],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "isRewardDistributor",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "lastRewardAmount",
          inputs: [],
          outputs: [{ name: "", type: "uint128", internalType: "uint128" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "lastRewardTimestamp",
          inputs: [],
          outputs: [{ name: "", type: "uint64", internalType: "uint64" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "multicall",
          inputs: [{ name: "data", type: "bytes[]", internalType: "bytes[]" }],
          outputs: [{ name: "results", type: "bytes[]", internalType: "bytes[]" }],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "name",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "selfPermit",
          inputs: [
            { name: "token", type: "address", internalType: "contract ERC20" },
            { name: "value", type: "uint256", internalType: "uint256" },
            { name: "deadline", type: "uint256", internalType: "uint256" },
            { name: "v", type: "uint8", internalType: "uint8" },
            { name: "r", type: "bytes32", internalType: "bytes32" },
            { name: "s", type: "bytes32", internalType: "bytes32" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "selfPermitIfNecessary",
          inputs: [
            { name: "token", type: "address", internalType: "contract ERC20" },
            { name: "value", type: "uint256", internalType: "uint256" },
            { name: "deadline", type: "uint256", internalType: "uint256" },
            { name: "v", type: "uint8", internalType: "uint8" },
            { name: "r", type: "bytes32", internalType: "bytes32" },
            { name: "s", type: "bytes32", internalType: "bytes32" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "setRewardDistributor",
          inputs: [
            { name: "rewardDistributor", type: "address", internalType: "address" },
            { name: "isRewardDistributor_", type: "bool", internalType: "bool" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "stake",
          inputs: [{ name: "stakeTokenAmount", type: "uint256", internalType: "uint256" }],
          outputs: [{ name: "xERC20Amount", type: "uint256", internalType: "uint256" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "stakeToken",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "contract ERC20" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "symbol",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "totalSupply",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transfer",
          inputs: [
            { name: "to", type: "address", internalType: "address" },
            { name: "amount", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferFrom",
          inputs: [
            { name: "from", type: "address", internalType: "address" },
            { name: "to", type: "address", internalType: "address" },
            { name: "amount", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "withdraw",
          inputs: [{ name: "xERC20Amount", type: "uint256", internalType: "uint256" }],
          outputs: [{ name: "stakeTokenAmount", type: "uint256", internalType: "uint256" }],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Approval",
          inputs: [
            { name: "owner", type: "address", indexed: true, internalType: "address" },
            { name: "spender", type: "address", indexed: true, internalType: "address" },
            { name: "amount", type: "uint256", indexed: false, internalType: "uint256" },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            { name: "previousOwner", type: "address", indexed: true, internalType: "address" },
            { name: "newOwner", type: "address", indexed: true, internalType: "address" },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RewardAdded",
          inputs: [{ name: "reward", type: "uint128", indexed: false, internalType: "uint128" }],
          anonymous: false,
        },
        {
          type: "event",
          name: "Staked",
          inputs: [
            { name: "user", type: "address", indexed: true, internalType: "address" },
            { name: "stakeTokenAmount", type: "uint256", indexed: false, internalType: "uint256" },
            { name: "xERC20Amount", type: "uint256", indexed: false, internalType: "uint256" },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Transfer",
          inputs: [
            { name: "from", type: "address", indexed: true, internalType: "address" },
            { name: "to", type: "address", indexed: true, internalType: "address" },
            { name: "amount", type: "uint256", indexed: false, internalType: "uint256" },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Withdrawn",
          inputs: [
            { name: "user", type: "address", indexed: true, internalType: "address" },
            { name: "stakeTokenAmount", type: "uint256", indexed: false, internalType: "uint256" },
            { name: "xERC20Amount", type: "uint256", indexed: false, internalType: "uint256" },
          ],
          anonymous: false,
        },
        { type: "error", name: "Error_AlreadyInitialized", inputs: [] },
        { type: "error", name: "Error_NotRewardDistributor", inputs: [] },
        { type: "error", name: "Error_ZeroOwner", inputs: [] },
        { type: "error", name: "Error_ZeroSupply", inputs: [] },
        { type: "error", name: "Ownable_NewOwnerZeroAddress", inputs: [] },
        { type: "error", name: "Ownable_NotOwner", inputs: [] },
      ],
    },
    wethStakingPool: {
      address: "0x3FdC7fEf77208Aaac44E81bA982a9855642411D2",
      abi: [
        {
          type: "function",
          name: "DURATION",
          inputs: [],
          outputs: [
            {
              name: "DURATION_",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "earned",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "exit",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getReward",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "initialOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "isRewardDistributor",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "lastTimeRewardApplicable",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "lastUpdateTime",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "multicall",
          inputs: [
            {
              name: "data",
              type: "bytes[]",
              internalType: "bytes[]",
            },
          ],
          outputs: [
            {
              name: "results",
              type: "bytes[]",
              internalType: "bytes[]",
            },
          ],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "notifyRewardAmount",
          inputs: [
            {
              name: "reward",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "periodFinish",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardPerToken",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardPerTokenStored",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardRate",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardToken",
          inputs: [],
          outputs: [
            {
              name: "rewardToken_",
              type: "address",
              internalType: "contract ERC20",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "rewards",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "selfPermit",
          inputs: [
            {
              name: "token",
              type: "address",
              internalType: "contract ERC20",
            },
            {
              name: "value",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "deadline",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "v",
              type: "uint8",
              internalType: "uint8",
            },
            {
              name: "r",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "s",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "selfPermitIfNecessary",
          inputs: [
            {
              name: "token",
              type: "address",
              internalType: "contract ERC20",
            },
            {
              name: "value",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "deadline",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "v",
              type: "uint8",
              internalType: "uint8",
            },
            {
              name: "r",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "s",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "setRewardDistributor",
          inputs: [
            {
              name: "rewardDistributor",
              type: "address",
              internalType: "address",
            },
            {
              name: "isRewardDistributor_",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "stake",
          inputs: [
            {
              name: "amount",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "stakeToken",
          inputs: [],
          outputs: [
            {
              name: "stakeToken_",
              type: "address",
              internalType: "contract ERC20",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "totalSupply",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "userRewardPerTokenPaid",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "withdraw",
          inputs: [
            {
              name: "amount",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RewardAdded",
          inputs: [
            {
              name: "reward",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RewardPaid",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "reward",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Staked",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "amount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Withdrawn",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "amount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "Error_AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "Error_AmountTooLarge",
          inputs: [],
        },
        {
          type: "error",
          name: "Error_NotRewardDistributor",
          inputs: [],
        },
        {
          type: "error",
          name: "Error_ZeroOwner",
          inputs: [],
        },
        {
          type: "error",
          name: "Ownable_NewOwnerZeroAddress",
          inputs: [],
        },
        {
          type: "error",
          name: "Ownable_NotOwner",
          inputs: [],
        },
      ],
    },
    degenStakingPool: {
      address: "0xcF9ccEF568228831CBed0C5b5fB961Ba70e833F1",
      abi: [
        {
          type: "function",
          name: "DURATION",
          inputs: [],
          outputs: [
            {
              name: "DURATION_",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "earned",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "exit",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getReward",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "initialOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "isRewardDistributor",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "lastTimeRewardApplicable",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "lastUpdateTime",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "multicall",
          inputs: [
            {
              name: "data",
              type: "bytes[]",
              internalType: "bytes[]",
            },
          ],
          outputs: [
            {
              name: "results",
              type: "bytes[]",
              internalType: "bytes[]",
            },
          ],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "notifyRewardAmount",
          inputs: [
            {
              name: "reward",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "periodFinish",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardPerToken",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardPerTokenStored",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardRate",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardToken",
          inputs: [],
          outputs: [
            {
              name: "rewardToken_",
              type: "address",
              internalType: "contract ERC20",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "rewards",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "selfPermit",
          inputs: [
            {
              name: "token",
              type: "address",
              internalType: "contract ERC20",
            },
            {
              name: "value",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "deadline",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "v",
              type: "uint8",
              internalType: "uint8",
            },
            {
              name: "r",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "s",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "selfPermitIfNecessary",
          inputs: [
            {
              name: "token",
              type: "address",
              internalType: "contract ERC20",
            },
            {
              name: "value",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "deadline",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "v",
              type: "uint8",
              internalType: "uint8",
            },
            {
              name: "r",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "s",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "setRewardDistributor",
          inputs: [
            {
              name: "rewardDistributor",
              type: "address",
              internalType: "address",
            },
            {
              name: "isRewardDistributor_",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "stake",
          inputs: [
            {
              name: "amount",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "stakeToken",
          inputs: [],
          outputs: [
            {
              name: "stakeToken_",
              type: "address",
              internalType: "contract ERC20",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "totalSupply",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "userRewardPerTokenPaid",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "withdraw",
          inputs: [
            {
              name: "amount",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RewardAdded",
          inputs: [
            {
              name: "reward",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RewardPaid",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "reward",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Staked",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "amount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Withdrawn",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "amount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "Error_AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "Error_AmountTooLarge",
          inputs: [],
        },
        {
          type: "error",
          name: "Error_NotRewardDistributor",
          inputs: [],
        },
        {
          type: "error",
          name: "Error_ZeroOwner",
          inputs: [],
        },
        {
          type: "error",
          name: "Ownable_NewOwnerZeroAddress",
          inputs: [],
        },
        {
          type: "error",
          name: "Ownable_NotOwner",
          inputs: [],
        },
      ],
    },
    erc721StakingPool: {
      address: "0x15d26A820A541f0555e4A8E21273460eD982B828",
      abi: [
        {
          type: "function",
          name: "DURATION",
          inputs: [],
          outputs: [
            {
              name: "DURATION_",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "earned",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "exit",
          inputs: [
            {
              name: "idList",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getReward",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "initialOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "isRewardDistributor",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "lastTimeRewardApplicable",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "lastUpdateTime",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "notifyRewardAmount",
          inputs: [
            {
              name: "reward",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "onERC721Received",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "ownerOf",
          inputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "periodFinish",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardPerToken",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardPerTokenStored",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardRate",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardToken",
          inputs: [],
          outputs: [
            {
              name: "rewardToken_",
              type: "address",
              internalType: "contract ERC20",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "rewards",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "setRewardDistributor",
          inputs: [
            {
              name: "rewardDistributor",
              type: "address",
              internalType: "address",
            },
            {
              name: "isRewardDistributor_",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "stake",
          inputs: [
            {
              name: "idList",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "stakeToken",
          inputs: [],
          outputs: [
            {
              name: "stakeToken_",
              type: "address",
              internalType: "contract ERC721",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "totalSupply",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "userRewardPerTokenPaid",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "withdraw",
          inputs: [
            {
              name: "idList",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RewardAdded",
          inputs: [
            {
              name: "reward",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RewardPaid",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "reward",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Staked",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "idList",
              type: "uint256[]",
              indexed: false,
              internalType: "uint256[]",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Withdrawn",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "idList",
              type: "uint256[]",
              indexed: false,
              internalType: "uint256[]",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "Error_AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "Error_AmountTooLarge",
          inputs: [],
        },
        {
          type: "error",
          name: "Error_NotRewardDistributor",
          inputs: [],
        },
        {
          type: "error",
          name: "Error_NotStakeToken",
          inputs: [],
        },
        {
          type: "error",
          name: "Error_NotTokenOwner",
          inputs: [],
        },
        {
          type: "error",
          name: "Error_ZeroOwner",
          inputs: [],
        },
        {
          type: "error",
          name: "Ownable_NewOwnerZeroAddress",
          inputs: [],
        },
        {
          type: "error",
          name: "Ownable_NotOwner",
          inputs: [],
        },
      ],
    },
    stakingContractFactory: {
      address: "0x07FA8B1E3E39a0ECF313E748bf240C003261b1ED",
      abi: [
        {
          type: "constructor",
          inputs: [
            { name: "xERC20Implementation_", type: "address", internalType: "contract xERC20" },
            { name: "erc20StakingPoolImplementation_", type: "address", internalType: "contract ERC20StakingPool" },
            { name: "erc721StakingPoolImplementation_", type: "address", internalType: "contract ERC721StakingPool" },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createERC20StakingPool",
          inputs: [
            { name: "rewardToken", type: "address", internalType: "contract ERC20" },
            { name: "stakeToken", type: "address", internalType: "contract ERC20" },
            { name: "DURATION", type: "uint64", internalType: "uint64" },
          ],
          outputs: [{ name: "stakingPool", type: "address", internalType: "contract ERC20StakingPool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createERC721StakingPool",
          inputs: [
            { name: "rewardToken", type: "address", internalType: "contract ERC20" },
            { name: "stakeToken", type: "address", internalType: "contract ERC721" },
            { name: "DURATION", type: "uint64", internalType: "uint64" },
          ],
          outputs: [{ name: "stakingPool", type: "address", internalType: "contract ERC721StakingPool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createXERC20",
          inputs: [
            { name: "name", type: "bytes32", internalType: "bytes32" },
            { name: "symbol", type: "bytes32", internalType: "bytes32" },
            { name: "decimals", type: "uint8", internalType: "uint8" },
            { name: "stakeToken", type: "address", internalType: "contract ERC20" },
            { name: "DURATION", type: "uint64", internalType: "uint64" },
          ],
          outputs: [{ name: "stakingPool", type: "address", internalType: "contract xERC20" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "erc20StakingPoolImplementation",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "contract ERC20StakingPool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "erc721StakingPoolImplementation",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "contract ERC721StakingPool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "xERC20Implementation",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "contract xERC20" }],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "CreateERC20StakingPool",
          inputs: [{ name: "stakingPool", type: "address", indexed: false, internalType: "contract ERC20StakingPool" }],
          anonymous: false,
        },
        {
          type: "event",
          name: "CreateERC721StakingPool",
          inputs: [
            { name: "stakingPool", type: "address", indexed: false, internalType: "contract ERC721StakingPool" },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "CreateXERC20",
          inputs: [{ name: "stakingPool", type: "address", indexed: false, internalType: "contract xERC20" }],
          anonymous: false,
        },
        { type: "error", name: "CreateFail", inputs: [] },
      ],
    },
    Facotry01Token: {
      address: "0xcA2c1Aa0C755f83d58AB831D22139DE0D1f534Da",
      abi: [
        {
          inputs: [
            {
              internalType: "string",
              name: "name_",
              type: "string",
            },
            {
              internalType: "string",
              name: "symbol_",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "totalSupply_",
              type: "uint256",
            },
            {
              internalType: "address[4]",
              name: "addrs",
              type: "address[4]",
            },
            {
              internalType: "uint256[3]",
              name: "feeSettings",
              type: "uint256[3]",
            },
            {
              internalType: "uint256",
              name: "minimumTokenBalanceForDividends_",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "serviceFeeReceiver_",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "serviceFee_",
              type: "uint256",
            },
          ],
          stateMutability: "payable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "ExcludeFromFees",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address[]",
              name: "accounts",
              type: "address[]",
            },
          ],
          name: "ExcludeMultipleAccountsFromFees",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "newValue",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "oldValue",
              type: "uint256",
            },
          ],
          name: "GasForProcessingUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "iterations",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "claims",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "lastProcessedIndex",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "bool",
              name: "automatic",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "gas",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "processor",
              type: "address",
            },
          ],
          name: "ProcessedDividendTracker",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "tokensSwapped",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "SendDividends",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "tokensSwapped",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "SendDividendsReverted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "pair",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bool",
              name: "value",
              type: "bool",
            },
          ],
          name: "SetAutomatedMarketMakerPair",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "tokensSwapped",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "ethReceived",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "tokensIntoLiqudity",
              type: "uint256",
            },
          ],
          name: "SwapAndLiquify",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              indexed: false,
              internalType: "enum TokenType",
              name: "tokenType",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "version",
              type: "uint256",
            },
          ],
          name: "TokenCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [],
          name: "VERSION",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "_marketingWalletAddress",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "automatedMarketMakerPairs",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "claim",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "dividendTokenBalanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "dividendTracker",
          outputs: [
            {
              internalType: "contract FACTORY01TOKENDividendTracker",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "excludeFromDividends",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "excludeFromFees",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address[]",
              name: "accounts",
              type: "address[]",
            },
          ],
          name: "excludeMultipleAccountsFromFees",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "gasForProcessing",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "getAccountDividendsInfo",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "int256",
              name: "",
              type: "int256",
            },
            {
              internalType: "int256",
              name: "",
              type: "int256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "index",
              type: "uint256",
            },
          ],
          name: "getAccountDividendsInfoAtIndex",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "int256",
              name: "",
              type: "int256",
            },
            {
              internalType: "int256",
              name: "",
              type: "int256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getClaimWait",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getLastProcessedIndex",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getMinimumTokenBalanceForDividends",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getNumberOfDividendTokenHolders",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getTotalDividendsDistributed",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256",
            },
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "isExcludedFromDividends",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "isExcludedFromFees",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "liquidityFee",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "marketingFee",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "gas",
              type: "uint256",
            },
          ],
          name: "processDividendTracker",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "rewardToken",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "setLiquiditFee",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "setMarketingFee",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address payable",
              name: "wallet",
              type: "address",
            },
          ],
          name: "setMarketingWallet",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "setSwapTokensAtAmount",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "setTokenRewardsFee",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "swapTokensAtAmount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "tokenRewardsFee",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalFees",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "recipient",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              internalType: "address",
              name: "recipient",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "uniswapV2Pair",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "uniswapV2Router",
          outputs: [
            {
              internalType: "contract IUniswapV2Router02",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "claimWait",
              type: "uint256",
            },
          ],
          name: "updateClaimWait",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "newValue",
              type: "uint256",
            },
          ],
          name: "updateGasForProcessing",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "updateMinimumTokenBalanceForDividends",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "withdrawableDividendOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
    },
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
