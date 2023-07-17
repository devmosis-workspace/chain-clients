import { AminoMsg } from "@cosmjs/amino";
import { MsgLock, MsgBurn, MsgCreateEthBridgeClaim, MsgUpdateWhiteListValidator, MsgUpdateCethReceiverAccount, MsgRescueCeth, MsgSetBlacklist, MsgPause } from "./tx";
export interface MsgLockAminoType extends AminoMsg {
    type: "/sifnode.ethbridge.v1.MsgLock";
    value: {
        cosmos_sender: string;
        amount: string;
        symbol: string;
        ethereum_chain_id: string;
        ethereum_receiver: string;
        ceth_amount: string;
    };
}
export interface MsgBurnAminoType extends AminoMsg {
    type: "/sifnode.ethbridge.v1.MsgBurn";
    value: {
        cosmos_sender: string;
        amount: string;
        symbol: string;
        ethereum_chain_id: string;
        ethereum_receiver: string;
        ceth_amount: string;
    };
}
export interface MsgCreateEthBridgeClaimAminoType extends AminoMsg {
    type: "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaim";
    value: {
        eth_bridge_claim: {
            ethereum_chain_id: string;
            bridge_contract_address: string;
            nonce: string;
            symbol: string;
            token_contract_address: string;
            ethereum_sender: string;
            cosmos_receiver: string;
            validator_address: string;
            amount: string;
            claim_type: number;
        };
    };
}
export interface MsgUpdateWhiteListValidatorAminoType extends AminoMsg {
    type: "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidator";
    value: {
        cosmos_sender: string;
        validator: string;
        operation_type: string;
    };
}
export interface MsgUpdateCethReceiverAccountAminoType extends AminoMsg {
    type: "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccount";
    value: {
        cosmos_sender: string;
        ceth_receiver_account: string;
    };
}
export interface MsgRescueCethAminoType extends AminoMsg {
    type: "/sifnode.ethbridge.v1.MsgRescueCeth";
    value: {
        cosmos_sender: string;
        cosmos_receiver: string;
        ceth_amount: string;
    };
}
export interface MsgSetBlacklistAminoType extends AminoMsg {
    type: "/sifnode.ethbridge.v1.MsgSetBlacklist";
    value: {
        from: string;
        addresses: string[];
    };
}
export interface MsgPauseAminoType extends AminoMsg {
    type: "/sifnode.ethbridge.v1.MsgPause";
    value: {
        signer: string;
        is_paused: boolean;
    };
}
export declare const AminoConverter: {
    "/sifnode.ethbridge.v1.MsgLock": {
        aminoType: string;
        toAmino: ({ cosmosSender, amount, symbol, ethereumChainId, ethereumReceiver, cethAmount }: MsgLock) => MsgLockAminoType["value"];
        fromAmino: ({ cosmos_sender, amount, symbol, ethereum_chain_id, ethereum_receiver, ceth_amount }: MsgLockAminoType["value"]) => MsgLock;
    };
    "/sifnode.ethbridge.v1.MsgBurn": {
        aminoType: string;
        toAmino: ({ cosmosSender, amount, symbol, ethereumChainId, ethereumReceiver, cethAmount }: MsgBurn) => MsgBurnAminoType["value"];
        fromAmino: ({ cosmos_sender, amount, symbol, ethereum_chain_id, ethereum_receiver, ceth_amount }: MsgBurnAminoType["value"]) => MsgBurn;
    };
    "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaim": {
        aminoType: string;
        toAmino: ({ ethBridgeClaim }: MsgCreateEthBridgeClaim) => MsgCreateEthBridgeClaimAminoType["value"];
        fromAmino: ({ eth_bridge_claim }: MsgCreateEthBridgeClaimAminoType["value"]) => MsgCreateEthBridgeClaim;
    };
    "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidator": {
        aminoType: string;
        toAmino: ({ cosmosSender, validator, operationType }: MsgUpdateWhiteListValidator) => MsgUpdateWhiteListValidatorAminoType["value"];
        fromAmino: ({ cosmos_sender, validator, operation_type }: MsgUpdateWhiteListValidatorAminoType["value"]) => MsgUpdateWhiteListValidator;
    };
    "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccount": {
        aminoType: string;
        toAmino: ({ cosmosSender, cethReceiverAccount }: MsgUpdateCethReceiverAccount) => MsgUpdateCethReceiverAccountAminoType["value"];
        fromAmino: ({ cosmos_sender, ceth_receiver_account }: MsgUpdateCethReceiverAccountAminoType["value"]) => MsgUpdateCethReceiverAccount;
    };
    "/sifnode.ethbridge.v1.MsgRescueCeth": {
        aminoType: string;
        toAmino: ({ cosmosSender, cosmosReceiver, cethAmount }: MsgRescueCeth) => MsgRescueCethAminoType["value"];
        fromAmino: ({ cosmos_sender, cosmos_receiver, ceth_amount }: MsgRescueCethAminoType["value"]) => MsgRescueCeth;
    };
    "/sifnode.ethbridge.v1.MsgSetBlacklist": {
        aminoType: string;
        toAmino: ({ from, addresses }: MsgSetBlacklist) => MsgSetBlacklistAminoType["value"];
        fromAmino: ({ from, addresses }: MsgSetBlacklistAminoType["value"]) => MsgSetBlacklist;
    };
    "/sifnode.ethbridge.v1.MsgPause": {
        aminoType: string;
        toAmino: ({ signer, isPaused }: MsgPause) => MsgPauseAminoType["value"];
        fromAmino: ({ signer, is_paused }: MsgPauseAminoType["value"]) => MsgPause;
    };
};
