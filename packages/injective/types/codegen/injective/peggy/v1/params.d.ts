import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface Params {
    peggyId: string;
    contractSourceHash: string;
    bridgeEthereumAddress: string;
    bridgeChainId: bigint;
    signedValsetsWindow: bigint;
    signedBatchesWindow: bigint;
    signedClaimsWindow: bigint;
    targetBatchTimeout: bigint;
    averageBlockTime: bigint;
    averageEthereumBlockTime: bigint;
    slashFractionValset: Uint8Array;
    slashFractionBatch: Uint8Array;
    slashFractionClaim: Uint8Array;
    slashFractionConflictingClaim: Uint8Array;
    unbondSlashingValsetsWindow: bigint;
    slashFractionBadEthSignature: Uint8Array;
    cosmosCoinDenom: string;
    cosmosCoinErc20Contract: string;
    claimSlashingEnabled: boolean;
    bridgeContractStartHeight: bigint;
    valsetReward: Coin;
}
export interface ParamsProtoMsg {
    typeUrl: "/injective.peggy.v1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
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
    valset_reward?: CoinAmino;
}
export interface ParamsAminoMsg {
    type: "/injective.peggy.v1.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    peggy_id: string;
    contract_source_hash: string;
    bridge_ethereum_address: string;
    bridge_chain_id: bigint;
    signed_valsets_window: bigint;
    signed_batches_window: bigint;
    signed_claims_window: bigint;
    target_batch_timeout: bigint;
    average_block_time: bigint;
    average_ethereum_block_time: bigint;
    slash_fraction_valset: Uint8Array;
    slash_fraction_batch: Uint8Array;
    slash_fraction_claim: Uint8Array;
    slash_fraction_conflicting_claim: Uint8Array;
    unbond_slashing_valsets_window: bigint;
    slash_fraction_bad_eth_signature: Uint8Array;
    cosmos_coin_denom: string;
    cosmos_coin_erc20_contract: string;
    claim_slashing_enabled: boolean;
    bridge_contract_start_height: bigint;
    valset_reward: CoinSDKType;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
