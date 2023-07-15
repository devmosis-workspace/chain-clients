import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const gravityAminoConverters: {
    "/gravity.v1.MsgValsetConfirm": {
        aminoType: string;
        toAmino: ({ nonce, orchestrator, ethAddress, signature }: import("./v1/msgs").MsgValsetConfirm) => {
            nonce: string;
            orchestrator: string;
            eth_address: string;
            signature: string;
        };
        fromAmino: ({ nonce, orchestrator, eth_address, signature }: {
            nonce: string;
            orchestrator: string;
            eth_address: string;
            signature: string;
        }) => import("./v1/msgs").MsgValsetConfirm;
    };
    "/gravity.v1.MsgSendToEth": {
        aminoType: string;
        toAmino: ({ sender, ethDest, amount, bridgeFee, chainFee }: import("./v1/msgs").MsgSendToEth) => {
            sender: string;
            eth_dest: string;
            amount: {
                denom: string;
                amount: string;
            };
            bridge_fee: {
                denom: string;
                amount: string;
            };
            chain_fee: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ sender, eth_dest, amount, bridge_fee, chain_fee }: {
            sender: string;
            eth_dest: string;
            amount: {
                denom: string;
                amount: string;
            };
            bridge_fee: {
                denom: string;
                amount: string;
            };
            chain_fee: {
                denom: string;
                amount: string;
            };
        }) => import("./v1/msgs").MsgSendToEth;
    };
    "/gravity.v1.MsgRequestBatch": {
        aminoType: string;
        toAmino: ({ sender, denom }: import("./v1/msgs").MsgRequestBatch) => {
            sender: string;
            denom: string;
        };
        fromAmino: ({ sender, denom }: {
            sender: string;
            denom: string;
        }) => import("./v1/msgs").MsgRequestBatch;
    };
    "/gravity.v1.MsgConfirmBatch": {
        aminoType: string;
        toAmino: ({ nonce, tokenContract, ethSigner, orchestrator, signature }: import("./v1/msgs").MsgConfirmBatch) => {
            nonce: string;
            token_contract: string;
            eth_signer: string;
            orchestrator: string;
            signature: string;
        };
        fromAmino: ({ nonce, token_contract, eth_signer, orchestrator, signature }: {
            nonce: string;
            token_contract: string;
            eth_signer: string;
            orchestrator: string;
            signature: string;
        }) => import("./v1/msgs").MsgConfirmBatch;
    };
    "/gravity.v1.MsgConfirmLogicCall": {
        aminoType: string;
        toAmino: ({ invalidationId, invalidationNonce, ethSigner, orchestrator, signature }: import("./v1/msgs").MsgConfirmLogicCall) => {
            invalidation_id: string;
            invalidation_nonce: string;
            eth_signer: string;
            orchestrator: string;
            signature: string;
        };
        fromAmino: ({ invalidation_id, invalidation_nonce, eth_signer, orchestrator, signature }: {
            invalidation_id: string;
            invalidation_nonce: string;
            eth_signer: string;
            orchestrator: string;
            signature: string;
        }) => import("./v1/msgs").MsgConfirmLogicCall;
    };
    "/gravity.v1.MsgSendToCosmosClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, ethBlockHeight, tokenContract, amount, ethereumSender, cosmosReceiver, orchestrator }: import("./v1/msgs").MsgSendToCosmosClaim) => {
            event_nonce: string;
            eth_block_height: string;
            token_contract: string;
            amount: string;
            ethereum_sender: string;
            cosmos_receiver: string;
            orchestrator: string;
        };
        fromAmino: ({ event_nonce, eth_block_height, token_contract, amount, ethereum_sender, cosmos_receiver, orchestrator }: {
            event_nonce: string;
            eth_block_height: string;
            token_contract: string;
            amount: string;
            ethereum_sender: string;
            cosmos_receiver: string;
            orchestrator: string;
        }) => import("./v1/msgs").MsgSendToCosmosClaim;
    };
    "/gravity.v1.MsgExecuteIbcAutoForwards": {
        aminoType: string;
        toAmino: ({ forwardsToClear, executor }: import("./v1/msgs").MsgExecuteIbcAutoForwards) => {
            forwards_to_clear: string;
            executor: string;
        };
        fromAmino: ({ forwards_to_clear, executor }: {
            forwards_to_clear: string;
            executor: string;
        }) => import("./v1/msgs").MsgExecuteIbcAutoForwards;
    };
    "/gravity.v1.MsgBatchSendToEthClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, ethBlockHeight, batchNonce, tokenContract, orchestrator }: import("./v1/msgs").MsgBatchSendToEthClaim) => {
            event_nonce: string;
            eth_block_height: string;
            batch_nonce: string;
            token_contract: string;
            orchestrator: string;
        };
        fromAmino: ({ event_nonce, eth_block_height, batch_nonce, token_contract, orchestrator }: {
            event_nonce: string;
            eth_block_height: string;
            batch_nonce: string;
            token_contract: string;
            orchestrator: string;
        }) => import("./v1/msgs").MsgBatchSendToEthClaim;
    };
    "/gravity.v1.MsgValsetUpdatedClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, valsetNonce, ethBlockHeight, members, rewardAmount, rewardToken, orchestrator }: import("./v1/msgs").MsgValsetUpdatedClaim) => {
            event_nonce: string;
            valset_nonce: string;
            eth_block_height: string;
            members: {
                power: string;
                ethereum_address: string;
            }[];
            reward_amount: string;
            reward_token: string;
            orchestrator: string;
        };
        fromAmino: ({ event_nonce, valset_nonce, eth_block_height, members, reward_amount, reward_token, orchestrator }: {
            event_nonce: string;
            valset_nonce: string;
            eth_block_height: string;
            members: {
                power: string;
                ethereum_address: string;
            }[];
            reward_amount: string;
            reward_token: string;
            orchestrator: string;
        }) => import("./v1/msgs").MsgValsetUpdatedClaim;
    };
    "/gravity.v1.MsgERC20DeployedClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, ethBlockHeight, cosmosDenom, tokenContract, name, symbol, decimals, orchestrator }: import("./v1/msgs").MsgERC20DeployedClaim) => {
            event_nonce: string;
            eth_block_height: string;
            cosmos_denom: string;
            token_contract: string;
            name: string;
            symbol: string;
            decimals: string;
            orchestrator: string;
        };
        fromAmino: ({ event_nonce, eth_block_height, cosmos_denom, token_contract, name, symbol, decimals, orchestrator }: {
            event_nonce: string;
            eth_block_height: string;
            cosmos_denom: string;
            token_contract: string;
            name: string;
            symbol: string;
            decimals: string;
            orchestrator: string;
        }) => import("./v1/msgs").MsgERC20DeployedClaim;
    };
    "/gravity.v1.MsgLogicCallExecutedClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, ethBlockHeight, invalidationId, invalidationNonce, orchestrator }: import("./v1/msgs").MsgLogicCallExecutedClaim) => {
            event_nonce: string;
            eth_block_height: string;
            invalidation_id: Uint8Array;
            invalidation_nonce: string;
            orchestrator: string;
        };
        fromAmino: ({ event_nonce, eth_block_height, invalidation_id, invalidation_nonce, orchestrator }: {
            event_nonce: string;
            eth_block_height: string;
            invalidation_id: Uint8Array;
            invalidation_nonce: string;
            orchestrator: string;
        }) => import("./v1/msgs").MsgLogicCallExecutedClaim;
    };
    "/gravity.v1.MsgSetOrchestratorAddress": {
        aminoType: string;
        toAmino: ({ validator, orchestrator, ethAddress }: import("./v1/msgs").MsgSetOrchestratorAddress) => {
            validator: string;
            orchestrator: string;
            eth_address: string;
        };
        fromAmino: ({ validator, orchestrator, eth_address }: {
            validator: string;
            orchestrator: string;
            eth_address: string;
        }) => import("./v1/msgs").MsgSetOrchestratorAddress;
    };
    "/gravity.v1.MsgCancelSendToEth": {
        aminoType: string;
        toAmino: ({ transactionId, sender }: import("./v1/msgs").MsgCancelSendToEth) => {
            transaction_id: string;
            sender: string;
        };
        fromAmino: ({ transaction_id, sender }: {
            transaction_id: string;
            sender: string;
        }) => import("./v1/msgs").MsgCancelSendToEth;
    };
    "/gravity.v1.MsgSubmitBadSignatureEvidence": {
        aminoType: string;
        toAmino: ({ subject, signature, sender }: import("./v1/msgs").MsgSubmitBadSignatureEvidence) => {
            subject: {
                type_url: string;
                value: Uint8Array;
            };
            signature: string;
            sender: string;
        };
        fromAmino: ({ subject, signature, sender }: {
            subject: {
                type_url: string;
                value: Uint8Array;
            };
            signature: string;
            sender: string;
        }) => import("./v1/msgs").MsgSubmitBadSignatureEvidence;
    };
};
export declare const gravityProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningGravityClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningGravityClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
