import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Params {
    peggyId: string;
    contractSourceHash: string;
    bridgeEthereumAddress: string;
    bridgeChainId: Long;
    signedValsetsWindow: Long;
    signedBatchesWindow: Long;
    signedClaimsWindow: Long;
    targetBatchTimeout: Long;
    averageBlockTime: Long;
    averageEthereumBlockTime: Long;
    slashFractionValset: Uint8Array;
    slashFractionBatch: Uint8Array;
    slashFractionClaim: Uint8Array;
    slashFractionConflictingClaim: Uint8Array;
    unbondSlashingValsetsWindow: Long;
    slashFractionBadEthSignature: Uint8Array;
    cosmosCoinDenom: string;
    cosmosCoinErc20Contract: string;
    claimSlashingEnabled: boolean;
    bridgeContractStartHeight: Long;
    valsetReward?: Coin;
}
export interface ParamsSDKType {
    peggy_id: string;
    contract_source_hash: string;
    bridge_ethereum_address: string;
    bridge_chain_id: Long;
    signed_valsets_window: Long;
    signed_batches_window: Long;
    signed_claims_window: Long;
    target_batch_timeout: Long;
    average_block_time: Long;
    average_ethereum_block_time: Long;
    slash_fraction_valset: Uint8Array;
    slash_fraction_batch: Uint8Array;
    slash_fraction_claim: Uint8Array;
    slash_fraction_conflicting_claim: Uint8Array;
    unbond_slashing_valsets_window: Long;
    slash_fraction_bad_eth_signature: Uint8Array;
    cosmos_coin_denom: string;
    cosmos_coin_erc20_contract: string;
    claim_slashing_enabled: boolean;
    bridge_contract_start_height: Long;
    valset_reward?: CoinSDKType;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
