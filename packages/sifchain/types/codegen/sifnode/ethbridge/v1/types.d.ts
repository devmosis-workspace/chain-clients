import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export declare function claimTypeFromJSON(object: any): ClaimType;
export declare function claimTypeToJSON(object: ClaimType): string;
/**
 * EthBridgeClaim is a structure that contains all the data for a particular
 * bridge claim
 */
export interface EthBridgeClaim {
    ethereumChainId: Long;
    /** bridge_contract_address is an EthereumAddress */
    bridgeContractAddress: string;
    nonce: Long;
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
/**
 * EthBridgeClaim is a structure that contains all the data for a particular
 * bridge claim
 */
export interface EthBridgeClaimSDKType {
    ethereum_chain_id: Long;
    bridge_contract_address: string;
    nonce: Long;
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
export interface PeggyTokensSDKType {
    tokens: string[];
}
/** GenesisState for ethbridge */
export interface GenesisState {
    cethReceiveAccount: string;
    peggyTokens: string[];
}
/** GenesisState for ethbridge */
export interface GenesisStateSDKType {
    ceth_receive_account: string;
    peggy_tokens: string[];
}
export interface Pause {
    isPaused: boolean;
}
export interface PauseSDKType {
    is_paused: boolean;
}
export declare const EthBridgeClaim: {
    encode(message: EthBridgeClaim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EthBridgeClaim;
    fromPartial(object: Partial<EthBridgeClaim>): EthBridgeClaim;
};
export declare const PeggyTokens: {
    encode(message: PeggyTokens, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PeggyTokens;
    fromPartial(object: Partial<PeggyTokens>): PeggyTokens;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const Pause: {
    encode(message: Pause, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Pause;
    fromPartial(object: Partial<Pause>): Pause;
};
