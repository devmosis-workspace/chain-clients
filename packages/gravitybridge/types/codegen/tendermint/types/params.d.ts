import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParams {
    block?: BlockParams;
    evidence?: EvidenceParams;
    validator?: ValidatorParams;
    version?: VersionParams;
}
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParamsSDKType {
    block?: BlockParamsSDKType;
    evidence?: EvidenceParamsSDKType;
    validator?: ValidatorParamsSDKType;
    version?: VersionParamsSDKType;
}
/** BlockParams contains limits on the block size. */
export interface BlockParams {
    /**
     * Max block size, in bytes.
     * Note: must be greater than 0
     */
    maxBytes: Long;
    /**
     * Max gas per block.
     * Note: must be greater or equal to -1
     */
    maxGas: Long;
    /**
     * Minimum time increment between consecutive blocks (in milliseconds) If the
     * block header timestamp is ahead of the system clock, decrease this value.
     *
     * Not exposed to the application.
     */
    timeIotaMs: Long;
}
/** BlockParams contains limits on the block size. */
export interface BlockParamsSDKType {
    max_bytes: Long;
    max_gas: Long;
    time_iota_ms: Long;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParams {
    /**
     * Max age of evidence, in blocks.
     *
     * The basic formula for calculating this is: MaxAgeDuration / {average block
     * time}.
     */
    maxAgeNumBlocks: Long;
    /**
     * Max age of evidence, in time.
     *
     * It should correspond with an app's "unbonding period" or other similar
     * mechanism for handling [Nothing-At-Stake
     * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
     */
    maxAgeDuration?: Duration;
    /**
     * This sets the maximum number of evidence that can be committed in a single block.
     * and should fall comfortably under the max block bytes when we consider the size of
     * each evidence (See MaxEvidenceBytes). The maximum number is MaxEvidencePerBlock.
     * Default is 50
     */
    maxNum: number;
    /**
     * Proof trial period dictates the time given for nodes accused of amnesia evidence, incorrectly
     * voting twice in two different rounds to respond with their respective proofs.
     * Default is half the max age in blocks: 50,000
     */
    proofTrialPeriod: Long;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParamsSDKType {
    max_age_num_blocks: Long;
    max_age_duration?: DurationSDKType;
    max_num: number;
    proof_trial_period: Long;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParams {
    pubKeyTypes: string[];
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParamsSDKType {
    pub_key_types: string[];
}
/** VersionParams contains the ABCI application version. */
export interface VersionParams {
    appVersion: Long;
}
/** VersionParams contains the ABCI application version. */
export interface VersionParamsSDKType {
    app_version: Long;
}
/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParams {
    blockMaxBytes: Long;
    blockMaxGas: Long;
}
/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParamsSDKType {
    block_max_bytes: Long;
    block_max_gas: Long;
}
export declare const ConsensusParams: {
    encode(message: ConsensusParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ConsensusParams;
    fromPartial(object: Partial<ConsensusParams>): ConsensusParams;
};
export declare const BlockParams: {
    encode(message: BlockParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BlockParams;
    fromPartial(object: Partial<BlockParams>): BlockParams;
};
export declare const EvidenceParams: {
    encode(message: EvidenceParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EvidenceParams;
    fromPartial(object: Partial<EvidenceParams>): EvidenceParams;
};
export declare const ValidatorParams: {
    encode(message: ValidatorParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ValidatorParams;
    fromPartial(object: Partial<ValidatorParams>): ValidatorParams;
};
export declare const VersionParams: {
    encode(message: VersionParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): VersionParams;
    fromPartial(object: Partial<VersionParams>): VersionParams;
};
export declare const HashedParams: {
    encode(message: HashedParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): HashedParams;
    fromPartial(object: Partial<HashedParams>): HashedParams;
};
