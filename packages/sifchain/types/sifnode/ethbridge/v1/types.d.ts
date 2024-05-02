import { BinaryWriter } from "../../../binary";
/** Claim type enum */
export declare enum ClaimType {
    /** CLAIM_TYPE_UNSPECIFIED - Unspecified claim type */
    CLAIM_TYPE_UNSPECIFIED = 0,
    /** CLAIM_TYPE_BURN - Burn claim type */
    CLAIM_TYPE_BURN = 1,
    /** CLAIM_TYPE_LOCK - Lock claim type */
    CLAIM_TYPE_LOCK = 2,
    UNRECOGNIZED = -1
}
export declare const ClaimTypeSDKType: typeof ClaimType;
export declare const ClaimTypeAmino: typeof ClaimType;
export declare function claimTypeFromJSON(object: any): ClaimType;
export declare function claimTypeToJSON(object: ClaimType): string;
/**
 * EthBridgeClaim is a structure that contains all the data for a particular
 * bridge claim
 */
export interface EthBridgeClaim {
    ethereumChainId: bigint;
    /** bridge_contract_address is an EthereumAddress */
    bridgeContractAddress: string;
    nonce: bigint;
    symbol: string;
    /** token_contract_address is an EthereumAddress */
    tokenContractAddress: string;
    /** ethereum_sender is an EthereumAddress */
    ethereumSender: string;
    /** cosmos_receiver is an sdk.AccAddress */
    cosmosReceiver: string;
    /** validator_address is an sdk.ValAddress */
    validatorAddress: string;
    amount: string;
    claimType: ClaimType;
}
export interface EthBridgeClaimProtoMsg {
    typeUrl: "/sifnode.ethbridge.v1.EthBridgeClaim";
    value: Uint8Array;
}
/**
 * EthBridgeClaim is a structure that contains all the data for a particular
 * bridge claim
 */
export interface EthBridgeClaimAmino {
    ethereum_chain_id?: string;
    /** bridge_contract_address is an EthereumAddress */
    bridge_contract_address?: string;
    nonce?: string;
    symbol?: string;
    /** token_contract_address is an EthereumAddress */
    token_contract_address?: string;
    /** ethereum_sender is an EthereumAddress */
    ethereum_sender?: string;
    /** cosmos_receiver is an sdk.AccAddress */
    cosmos_receiver?: string;
    /** validator_address is an sdk.ValAddress */
    validator_address?: string;
    amount?: string;
    claim_type?: ClaimType;
}
export interface EthBridgeClaimAminoMsg {
    type: "/sifnode.ethbridge.v1.EthBridgeClaim";
    value: EthBridgeClaimAmino;
}
/**
 * EthBridgeClaim is a structure that contains all the data for a particular
 * bridge claim
 */
export interface EthBridgeClaimSDKType {
    ethereum_chain_id: bigint;
    bridge_contract_address: string;
    nonce: bigint;
    symbol: string;
    token_contract_address: string;
    ethereum_sender: string;
    cosmos_receiver: string;
    validator_address: string;
    amount: string;
    claim_type: ClaimType;
}
export interface PeggyTokens {
    tokens: string[];
}
export interface PeggyTokensProtoMsg {
    typeUrl: "/sifnode.ethbridge.v1.PeggyTokens";
    value: Uint8Array;
}
export interface PeggyTokensAmino {
    tokens?: string[];
}
export interface PeggyTokensAminoMsg {
    type: "/sifnode.ethbridge.v1.PeggyTokens";
    value: PeggyTokensAmino;
}
export interface PeggyTokensSDKType {
    tokens: string[];
}
export interface Pause {
    isPaused: boolean;
}
export interface PauseProtoMsg {
    typeUrl: "/sifnode.ethbridge.v1.Pause";
    value: Uint8Array;
}
export interface PauseAmino {
    is_paused?: boolean;
}
export interface PauseAminoMsg {
    type: "/sifnode.ethbridge.v1.Pause";
    value: PauseAmino;
}
export interface PauseSDKType {
    is_paused: boolean;
}
export declare const EthBridgeClaim: {
    typeUrl: string;
    encode(message: EthBridgeClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EthBridgeClaim;
    fromPartial(object: Partial<EthBridgeClaim>): EthBridgeClaim;
    fromAmino(object: EthBridgeClaimAmino): EthBridgeClaim;
    toAmino(message: EthBridgeClaim): EthBridgeClaimAmino;
    fromAminoMsg(object: EthBridgeClaimAminoMsg): EthBridgeClaim;
    fromProtoMsg(message: EthBridgeClaimProtoMsg): EthBridgeClaim;
    toProto(message: EthBridgeClaim): Uint8Array;
    toProtoMsg(message: EthBridgeClaim): EthBridgeClaimProtoMsg;
};
export declare const PeggyTokens: {
    typeUrl: string;
    encode(message: PeggyTokens, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PeggyTokens;
    fromPartial(object: Partial<PeggyTokens>): PeggyTokens;
    fromAmino(object: PeggyTokensAmino): PeggyTokens;
    toAmino(message: PeggyTokens): PeggyTokensAmino;
    fromAminoMsg(object: PeggyTokensAminoMsg): PeggyTokens;
    fromProtoMsg(message: PeggyTokensProtoMsg): PeggyTokens;
    toProto(message: PeggyTokens): Uint8Array;
    toProtoMsg(message: PeggyTokens): PeggyTokensProtoMsg;
};
export declare const Pause: {
    typeUrl: string;
    encode(message: Pause, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Pause;
    fromPartial(object: Partial<Pause>): Pause;
    fromAmino(object: PauseAmino): Pause;
    toAmino(message: Pause): PauseAmino;
    fromAminoMsg(object: PauseAminoMsg): Pause;
    fromProtoMsg(message: PauseProtoMsg): Pause;
    toProto(message: Pause): Uint8Array;
    toProtoMsg(message: Pause): PauseProtoMsg;
};
