import { AminoMsg } from "@cosmjs/amino";
import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgConfirmLogicCall, MsgSendToCosmosClaim, MsgExecuteIbcAutoForwards, MsgBatchSendToEthClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgLogicCallExecutedClaim, MsgSetOrchestratorAddress, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence } from "./msgs";
export interface MsgValsetConfirmAminoType extends AminoMsg {
    type: "/gravity.v1.MsgValsetConfirm";
    value: {
        nonce: string;
        orchestrator: string;
        eth_address: string;
        signature: string;
    };
}
export interface MsgSendToEthAminoType extends AminoMsg {
    type: "/gravity.v1.MsgSendToEth";
    value: {
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
}
export interface MsgRequestBatchAminoType extends AminoMsg {
    type: "/gravity.v1.MsgRequestBatch";
    value: {
        sender: string;
        denom: string;
    };
}
export interface MsgConfirmBatchAminoType extends AminoMsg {
    type: "/gravity.v1.MsgConfirmBatch";
    value: {
        nonce: string;
        token_contract: string;
        eth_signer: string;
        orchestrator: string;
        signature: string;
    };
}
export interface MsgConfirmLogicCallAminoType extends AminoMsg {
    type: "/gravity.v1.MsgConfirmLogicCall";
    value: {
        invalidation_id: string;
        invalidation_nonce: string;
        eth_signer: string;
        orchestrator: string;
        signature: string;
    };
}
export interface MsgSendToCosmosClaimAminoType extends AminoMsg {
    type: "/gravity.v1.MsgSendToCosmosClaim";
    value: {
        event_nonce: string;
        eth_block_height: string;
        token_contract: string;
        amount: string;
        ethereum_sender: string;
        cosmos_receiver: string;
        orchestrator: string;
    };
}
export interface MsgExecuteIbcAutoForwardsAminoType extends AminoMsg {
    type: "/gravity.v1.MsgExecuteIbcAutoForwards";
    value: {
        forwards_to_clear: string;
        executor: string;
    };
}
export interface MsgBatchSendToEthClaimAminoType extends AminoMsg {
    type: "/gravity.v1.MsgBatchSendToEthClaim";
    value: {
        event_nonce: string;
        eth_block_height: string;
        batch_nonce: string;
        token_contract: string;
        orchestrator: string;
    };
}
export interface MsgValsetUpdatedClaimAminoType extends AminoMsg {
    type: "/gravity.v1.MsgValsetUpdatedClaim";
    value: {
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
}
export interface MsgERC20DeployedClaimAminoType extends AminoMsg {
    type: "/gravity.v1.MsgERC20DeployedClaim";
    value: {
        event_nonce: string;
        eth_block_height: string;
        cosmos_denom: string;
        token_contract: string;
        name: string;
        symbol: string;
        decimals: string;
        orchestrator: string;
    };
}
export interface MsgLogicCallExecutedClaimAminoType extends AminoMsg {
    type: "/gravity.v1.MsgLogicCallExecutedClaim";
    value: {
        event_nonce: string;
        eth_block_height: string;
        invalidation_id: Uint8Array;
        invalidation_nonce: string;
        orchestrator: string;
    };
}
export interface MsgSetOrchestratorAddressAminoType extends AminoMsg {
    type: "/gravity.v1.MsgSetOrchestratorAddress";
    value: {
        validator: string;
        orchestrator: string;
        eth_address: string;
    };
}
export interface MsgCancelSendToEthAminoType extends AminoMsg {
    type: "/gravity.v1.MsgCancelSendToEth";
    value: {
        transaction_id: string;
        sender: string;
    };
}
export interface MsgSubmitBadSignatureEvidenceAminoType extends AminoMsg {
    type: "/gravity.v1.MsgSubmitBadSignatureEvidence";
    value: {
        subject: {
            type_url: string;
            value: Uint8Array;
        };
        signature: string;
        sender: string;
    };
}
export declare const AminoConverter: {
    "/gravity.v1.MsgValsetConfirm": {
        aminoType: string;
        toAmino: ({ nonce, orchestrator, ethAddress, signature }: MsgValsetConfirm) => MsgValsetConfirmAminoType["value"];
        fromAmino: ({ nonce, orchestrator, eth_address, signature }: MsgValsetConfirmAminoType["value"]) => MsgValsetConfirm;
    };
    "/gravity.v1.MsgSendToEth": {
        aminoType: string;
        toAmino: ({ sender, ethDest, amount, bridgeFee, chainFee }: MsgSendToEth) => MsgSendToEthAminoType["value"];
        fromAmino: ({ sender, eth_dest, amount, bridge_fee, chain_fee }: MsgSendToEthAminoType["value"]) => MsgSendToEth;
    };
    "/gravity.v1.MsgRequestBatch": {
        aminoType: string;
        toAmino: ({ sender, denom }: MsgRequestBatch) => MsgRequestBatchAminoType["value"];
        fromAmino: ({ sender, denom }: MsgRequestBatchAminoType["value"]) => MsgRequestBatch;
    };
    "/gravity.v1.MsgConfirmBatch": {
        aminoType: string;
        toAmino: ({ nonce, tokenContract, ethSigner, orchestrator, signature }: MsgConfirmBatch) => MsgConfirmBatchAminoType["value"];
        fromAmino: ({ nonce, token_contract, eth_signer, orchestrator, signature }: MsgConfirmBatchAminoType["value"]) => MsgConfirmBatch;
    };
    "/gravity.v1.MsgConfirmLogicCall": {
        aminoType: string;
        toAmino: ({ invalidationId, invalidationNonce, ethSigner, orchestrator, signature }: MsgConfirmLogicCall) => MsgConfirmLogicCallAminoType["value"];
        fromAmino: ({ invalidation_id, invalidation_nonce, eth_signer, orchestrator, signature }: MsgConfirmLogicCallAminoType["value"]) => MsgConfirmLogicCall;
    };
    "/gravity.v1.MsgSendToCosmosClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, ethBlockHeight, tokenContract, amount, ethereumSender, cosmosReceiver, orchestrator }: MsgSendToCosmosClaim) => MsgSendToCosmosClaimAminoType["value"];
        fromAmino: ({ event_nonce, eth_block_height, token_contract, amount, ethereum_sender, cosmos_receiver, orchestrator }: MsgSendToCosmosClaimAminoType["value"]) => MsgSendToCosmosClaim;
    };
    "/gravity.v1.MsgExecuteIbcAutoForwards": {
        aminoType: string;
        toAmino: ({ forwardsToClear, executor }: MsgExecuteIbcAutoForwards) => MsgExecuteIbcAutoForwardsAminoType["value"];
        fromAmino: ({ forwards_to_clear, executor }: MsgExecuteIbcAutoForwardsAminoType["value"]) => MsgExecuteIbcAutoForwards;
    };
    "/gravity.v1.MsgBatchSendToEthClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, ethBlockHeight, batchNonce, tokenContract, orchestrator }: MsgBatchSendToEthClaim) => MsgBatchSendToEthClaimAminoType["value"];
        fromAmino: ({ event_nonce, eth_block_height, batch_nonce, token_contract, orchestrator }: MsgBatchSendToEthClaimAminoType["value"]) => MsgBatchSendToEthClaim;
    };
    "/gravity.v1.MsgValsetUpdatedClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, valsetNonce, ethBlockHeight, members, rewardAmount, rewardToken, orchestrator }: MsgValsetUpdatedClaim) => MsgValsetUpdatedClaimAminoType["value"];
        fromAmino: ({ event_nonce, valset_nonce, eth_block_height, members, reward_amount, reward_token, orchestrator }: MsgValsetUpdatedClaimAminoType["value"]) => MsgValsetUpdatedClaim;
    };
    "/gravity.v1.MsgERC20DeployedClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, ethBlockHeight, cosmosDenom, tokenContract, name, symbol, decimals, orchestrator }: MsgERC20DeployedClaim) => MsgERC20DeployedClaimAminoType["value"];
        fromAmino: ({ event_nonce, eth_block_height, cosmos_denom, token_contract, name, symbol, decimals, orchestrator }: MsgERC20DeployedClaimAminoType["value"]) => MsgERC20DeployedClaim;
    };
    "/gravity.v1.MsgLogicCallExecutedClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, ethBlockHeight, invalidationId, invalidationNonce, orchestrator }: MsgLogicCallExecutedClaim) => MsgLogicCallExecutedClaimAminoType["value"];
        fromAmino: ({ event_nonce, eth_block_height, invalidation_id, invalidation_nonce, orchestrator }: MsgLogicCallExecutedClaimAminoType["value"]) => MsgLogicCallExecutedClaim;
    };
    "/gravity.v1.MsgSetOrchestratorAddress": {
        aminoType: string;
        toAmino: ({ validator, orchestrator, ethAddress }: MsgSetOrchestratorAddress) => MsgSetOrchestratorAddressAminoType["value"];
        fromAmino: ({ validator, orchestrator, eth_address }: MsgSetOrchestratorAddressAminoType["value"]) => MsgSetOrchestratorAddress;
    };
    "/gravity.v1.MsgCancelSendToEth": {
        aminoType: string;
        toAmino: ({ transactionId, sender }: MsgCancelSendToEth) => MsgCancelSendToEthAminoType["value"];
        fromAmino: ({ transaction_id, sender }: MsgCancelSendToEthAminoType["value"]) => MsgCancelSendToEth;
    };
    "/gravity.v1.MsgSubmitBadSignatureEvidence": {
        aminoType: string;
        toAmino: ({ subject, signature, sender }: MsgSubmitBadSignatureEvidence) => MsgSubmitBadSignatureEvidenceAminoType["value"];
        fromAmino: ({ subject, signature, sender }: MsgSubmitBadSignatureEvidenceAminoType["value"]) => MsgSubmitBadSignatureEvidence;
    };
};
