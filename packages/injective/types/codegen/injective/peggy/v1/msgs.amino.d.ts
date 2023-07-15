import { AminoMsg } from "@cosmjs/amino";
import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgDepositClaim, MsgWithdrawClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgSetOrchestratorAddresses, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence, MsgUpdateParams } from "./msgs";
export interface MsgValsetConfirmAminoType extends AminoMsg {
    type: "/injective.peggy.v1.MsgValsetConfirm";
    value: {
        nonce: string;
        orchestrator: string;
        eth_address: string;
        signature: string;
    };
}
export interface MsgSendToEthAminoType extends AminoMsg {
    type: "/injective.peggy.v1.MsgSendToEth";
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
    };
}
export interface MsgRequestBatchAminoType extends AminoMsg {
    type: "/injective.peggy.v1.MsgRequestBatch";
    value: {
        orchestrator: string;
        denom: string;
    };
}
export interface MsgConfirmBatchAminoType extends AminoMsg {
    type: "/injective.peggy.v1.MsgConfirmBatch";
    value: {
        nonce: string;
        token_contract: string;
        eth_signer: string;
        orchestrator: string;
        signature: string;
    };
}
export interface MsgDepositClaimAminoType extends AminoMsg {
    type: "/injective.peggy.v1.MsgDepositClaim";
    value: {
        event_nonce: string;
        block_height: string;
        token_contract: string;
        amount: string;
        ethereum_sender: string;
        cosmos_receiver: string;
        orchestrator: string;
        data: string;
    };
}
export interface MsgWithdrawClaimAminoType extends AminoMsg {
    type: "/injective.peggy.v1.MsgWithdrawClaim";
    value: {
        event_nonce: string;
        block_height: string;
        batch_nonce: string;
        token_contract: string;
        orchestrator: string;
    };
}
export interface MsgValsetUpdatedClaimAminoType extends AminoMsg {
    type: "/injective.peggy.v1.MsgValsetUpdatedClaim";
    value: {
        event_nonce: string;
        valset_nonce: string;
        block_height: string;
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
    type: "/injective.peggy.v1.MsgERC20DeployedClaim";
    value: {
        event_nonce: string;
        block_height: string;
        cosmos_denom: string;
        token_contract: string;
        name: string;
        symbol: string;
        decimals: string;
        orchestrator: string;
    };
}
export interface MsgSetOrchestratorAddressesAminoType extends AminoMsg {
    type: "/injective.peggy.v1.MsgSetOrchestratorAddresses";
    value: {
        sender: string;
        orchestrator: string;
        eth_address: string;
    };
}
export interface MsgCancelSendToEthAminoType extends AminoMsg {
    type: "/injective.peggy.v1.MsgCancelSendToEth";
    value: {
        transaction_id: string;
        sender: string;
    };
}
export interface MsgSubmitBadSignatureEvidenceAminoType extends AminoMsg {
    type: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence";
    value: {
        subject: {
            type_url: string;
            value: Uint8Array;
        };
        signature: string;
        sender: string;
    };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "/injective.peggy.v1.MsgUpdateParams";
    value: {
        authority: string;
        params: {
            peggy_id: string;
            contract_source_hash: string;
            bridge_ethereum_address: string;
            bridge_chain_id: string;
            signed_valsets_window: string;
            signed_batches_window: string;
            signed_claims_window: string;
            target_batch_timeout: string;
            average_block_time: string;
            average_ethereum_block_time: string;
            slash_fraction_valset: Uint8Array;
            slash_fraction_batch: Uint8Array;
            slash_fraction_claim: Uint8Array;
            slash_fraction_conflicting_claim: Uint8Array;
            unbond_slashing_valsets_window: string;
            slash_fraction_bad_eth_signature: Uint8Array;
            cosmos_coin_denom: string;
            cosmos_coin_erc20_contract: string;
            claim_slashing_enabled: boolean;
            bridge_contract_start_height: string;
            valset_reward: {
                denom: string;
                amount: string;
            };
        };
    };
}
export declare const AminoConverter: {
    "/injective.peggy.v1.MsgValsetConfirm": {
        aminoType: string;
        toAmino: ({ nonce, orchestrator, ethAddress, signature }: MsgValsetConfirm) => MsgValsetConfirmAminoType["value"];
        fromAmino: ({ nonce, orchestrator, eth_address, signature }: MsgValsetConfirmAminoType["value"]) => MsgValsetConfirm;
    };
    "/injective.peggy.v1.MsgSendToEth": {
        aminoType: string;
        toAmino: ({ sender, ethDest, amount, bridgeFee }: MsgSendToEth) => MsgSendToEthAminoType["value"];
        fromAmino: ({ sender, eth_dest, amount, bridge_fee }: MsgSendToEthAminoType["value"]) => MsgSendToEth;
    };
    "/injective.peggy.v1.MsgRequestBatch": {
        aminoType: string;
        toAmino: ({ orchestrator, denom }: MsgRequestBatch) => MsgRequestBatchAminoType["value"];
        fromAmino: ({ orchestrator, denom }: MsgRequestBatchAminoType["value"]) => MsgRequestBatch;
    };
    "/injective.peggy.v1.MsgConfirmBatch": {
        aminoType: string;
        toAmino: ({ nonce, tokenContract, ethSigner, orchestrator, signature }: MsgConfirmBatch) => MsgConfirmBatchAminoType["value"];
        fromAmino: ({ nonce, token_contract, eth_signer, orchestrator, signature }: MsgConfirmBatchAminoType["value"]) => MsgConfirmBatch;
    };
    "/injective.peggy.v1.MsgDepositClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, blockHeight, tokenContract, amount, ethereumSender, cosmosReceiver, orchestrator, data }: MsgDepositClaim) => MsgDepositClaimAminoType["value"];
        fromAmino: ({ event_nonce, block_height, token_contract, amount, ethereum_sender, cosmos_receiver, orchestrator, data }: MsgDepositClaimAminoType["value"]) => MsgDepositClaim;
    };
    "/injective.peggy.v1.MsgWithdrawClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, blockHeight, batchNonce, tokenContract, orchestrator }: MsgWithdrawClaim) => MsgWithdrawClaimAminoType["value"];
        fromAmino: ({ event_nonce, block_height, batch_nonce, token_contract, orchestrator }: MsgWithdrawClaimAminoType["value"]) => MsgWithdrawClaim;
    };
    "/injective.peggy.v1.MsgValsetUpdatedClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, valsetNonce, blockHeight, members, rewardAmount, rewardToken, orchestrator }: MsgValsetUpdatedClaim) => MsgValsetUpdatedClaimAminoType["value"];
        fromAmino: ({ event_nonce, valset_nonce, block_height, members, reward_amount, reward_token, orchestrator }: MsgValsetUpdatedClaimAminoType["value"]) => MsgValsetUpdatedClaim;
    };
    "/injective.peggy.v1.MsgERC20DeployedClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, blockHeight, cosmosDenom, tokenContract, name, symbol, decimals, orchestrator }: MsgERC20DeployedClaim) => MsgERC20DeployedClaimAminoType["value"];
        fromAmino: ({ event_nonce, block_height, cosmos_denom, token_contract, name, symbol, decimals, orchestrator }: MsgERC20DeployedClaimAminoType["value"]) => MsgERC20DeployedClaim;
    };
    "/injective.peggy.v1.MsgSetOrchestratorAddresses": {
        aminoType: string;
        toAmino: ({ sender, orchestrator, ethAddress }: MsgSetOrchestratorAddresses) => MsgSetOrchestratorAddressesAminoType["value"];
        fromAmino: ({ sender, orchestrator, eth_address }: MsgSetOrchestratorAddressesAminoType["value"]) => MsgSetOrchestratorAddresses;
    };
    "/injective.peggy.v1.MsgCancelSendToEth": {
        aminoType: string;
        toAmino: ({ transactionId, sender }: MsgCancelSendToEth) => MsgCancelSendToEthAminoType["value"];
        fromAmino: ({ transaction_id, sender }: MsgCancelSendToEthAminoType["value"]) => MsgCancelSendToEth;
    };
    "/injective.peggy.v1.MsgSubmitBadSignatureEvidence": {
        aminoType: string;
        toAmino: ({ subject, signature, sender }: MsgSubmitBadSignatureEvidence) => MsgSubmitBadSignatureEvidenceAminoType["value"];
        fromAmino: ({ subject, signature, sender }: MsgSubmitBadSignatureEvidenceAminoType["value"]) => MsgSubmitBadSignatureEvidence;
    };
    "/injective.peggy.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
