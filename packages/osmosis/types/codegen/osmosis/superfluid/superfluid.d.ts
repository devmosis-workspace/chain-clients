import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock, SyntheticLockAmino, SyntheticLockSDKType } from "../lockup/lock";
import { BinaryWriter } from "../../binary";
/**
 * SuperfluidAssetType indicates whether the superfluid asset is
 * a native token, lp share of a pool, or concentrated share of a pool
 */
export declare enum SuperfluidAssetType {
    SuperfluidAssetTypeNative = 0,
    SuperfluidAssetTypeLPShare = 1,
    SuperfluidAssetTypeConcentratedShare = 2,
    UNRECOGNIZED = -1
}
export declare const SuperfluidAssetTypeSDKType: typeof SuperfluidAssetType;
export declare const SuperfluidAssetTypeAmino: typeof SuperfluidAssetType;
export declare function superfluidAssetTypeFromJSON(object: any): SuperfluidAssetType;
export declare function superfluidAssetTypeToJSON(object: SuperfluidAssetType): string;
/** SuperfluidAsset stores the pair of superfluid asset type and denom pair */
export interface SuperfluidAsset {
    denom: string;
    /**
     * AssetType indicates whether the superfluid asset is a native token or an lp
     * share
     */
    assetType: SuperfluidAssetType;
}
export interface SuperfluidAssetProtoMsg {
    typeUrl: "/osmosis.superfluid.SuperfluidAsset";
    value: Uint8Array;
}
/** SuperfluidAsset stores the pair of superfluid asset type and denom pair */
export interface SuperfluidAssetAmino {
    denom: string;
    /**
     * AssetType indicates whether the superfluid asset is a native token or an lp
     * share
     */
    asset_type: SuperfluidAssetType;
}
export interface SuperfluidAssetAminoMsg {
    type: "osmosis/superfluid-asset";
    value: SuperfluidAssetAmino;
}
/** SuperfluidAsset stores the pair of superfluid asset type and denom pair */
export interface SuperfluidAssetSDKType {
    denom: string;
    asset_type: SuperfluidAssetType;
}
/**
 * SuperfluidIntermediaryAccount takes the role of intermediary between LP token
 * and OSMO tokens for superfluid staking. The intermediary account is the
 * actual account responsible for delegation, not the validator account itself.
 */
export interface SuperfluidIntermediaryAccount {
    /** Denom indicates the denom of the superfluid asset. */
    denom: string;
    valAddr: string;
    /** perpetual gauge for rewards distribution */
    gaugeId: bigint;
}
export interface SuperfluidIntermediaryAccountProtoMsg {
    typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccount";
    value: Uint8Array;
}
/**
 * SuperfluidIntermediaryAccount takes the role of intermediary between LP token
 * and OSMO tokens for superfluid staking. The intermediary account is the
 * actual account responsible for delegation, not the validator account itself.
 */
export interface SuperfluidIntermediaryAccountAmino {
    /** Denom indicates the denom of the superfluid asset. */
    denom: string;
    val_addr: string;
    /** perpetual gauge for rewards distribution */
    gauge_id: string;
}
export interface SuperfluidIntermediaryAccountAminoMsg {
    type: "osmosis/superfluid-intermediary-account";
    value: SuperfluidIntermediaryAccountAmino;
}
/**
 * SuperfluidIntermediaryAccount takes the role of intermediary between LP token
 * and OSMO tokens for superfluid staking. The intermediary account is the
 * actual account responsible for delegation, not the validator account itself.
 */
export interface SuperfluidIntermediaryAccountSDKType {
    denom: string;
    val_addr: string;
    gauge_id: bigint;
}
/**
 * The Osmo-Equivalent-Multiplier Record for epoch N refers to the osmo worth we
 * treat an LP share as having, for all of epoch N. Eventually this is intended
 * to be set as the Time-weighted-average-osmo-backing for the entire duration
 * of epoch N-1. (Thereby locking whats in use for epoch N as based on the prior
 * epochs rewards) However for now, this is not the TWAP but instead the spot
 * price at the boundary. For different types of assets in the future, it could
 * change.
 */
export interface OsmoEquivalentMultiplierRecord {
    epochNumber: bigint;
    /** superfluid asset denom, can be LP token or native token */
    denom: string;
    multiplier: string;
}
export interface OsmoEquivalentMultiplierRecordProtoMsg {
    typeUrl: "/osmosis.superfluid.OsmoEquivalentMultiplierRecord";
    value: Uint8Array;
}
/**
 * The Osmo-Equivalent-Multiplier Record for epoch N refers to the osmo worth we
 * treat an LP share as having, for all of epoch N. Eventually this is intended
 * to be set as the Time-weighted-average-osmo-backing for the entire duration
 * of epoch N-1. (Thereby locking whats in use for epoch N as based on the prior
 * epochs rewards) However for now, this is not the TWAP but instead the spot
 * price at the boundary. For different types of assets in the future, it could
 * change.
 */
export interface OsmoEquivalentMultiplierRecordAmino {
    epoch_number: string;
    /** superfluid asset denom, can be LP token or native token */
    denom: string;
    multiplier: string;
}
export interface OsmoEquivalentMultiplierRecordAminoMsg {
    type: "osmosis/osmo-equivalent-multiplier-record";
    value: OsmoEquivalentMultiplierRecordAmino;
}
/**
 * The Osmo-Equivalent-Multiplier Record for epoch N refers to the osmo worth we
 * treat an LP share as having, for all of epoch N. Eventually this is intended
 * to be set as the Time-weighted-average-osmo-backing for the entire duration
 * of epoch N-1. (Thereby locking whats in use for epoch N as based on the prior
 * epochs rewards) However for now, this is not the TWAP but instead the spot
 * price at the boundary. For different types of assets in the future, it could
 * change.
 */
export interface OsmoEquivalentMultiplierRecordSDKType {
    epoch_number: bigint;
    denom: string;
    multiplier: string;
}
/**
 * SuperfluidDelegationRecord is a struct used to indicate superfluid
 * delegations of an account in the state machine in a user friendly form.
 */
export interface SuperfluidDelegationRecord {
    delegatorAddress: string;
    validatorAddress: string;
    delegationAmount: Coin;
    equivalentStakedAmount: Coin;
}
export interface SuperfluidDelegationRecordProtoMsg {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationRecord";
    value: Uint8Array;
}
/**
 * SuperfluidDelegationRecord is a struct used to indicate superfluid
 * delegations of an account in the state machine in a user friendly form.
 */
export interface SuperfluidDelegationRecordAmino {
    delegator_address: string;
    validator_address: string;
    delegation_amount?: CoinAmino;
    equivalent_staked_amount?: CoinAmino;
}
export interface SuperfluidDelegationRecordAminoMsg {
    type: "osmosis/superfluid-delegation-record";
    value: SuperfluidDelegationRecordAmino;
}
/**
 * SuperfluidDelegationRecord is a struct used to indicate superfluid
 * delegations of an account in the state machine in a user friendly form.
 */
export interface SuperfluidDelegationRecordSDKType {
    delegator_address: string;
    validator_address: string;
    delegation_amount: CoinSDKType;
    equivalent_staked_amount: CoinSDKType;
}
/**
 * LockIdIntermediaryAccountConnection is a struct used to indicate the
 * relationship between the underlying lock id and superfluid delegation done
 * via lp shares.
 */
export interface LockIdIntermediaryAccountConnection {
    lockId: bigint;
    intermediaryAccount: string;
}
export interface LockIdIntermediaryAccountConnectionProtoMsg {
    typeUrl: "/osmosis.superfluid.LockIdIntermediaryAccountConnection";
    value: Uint8Array;
}
/**
 * LockIdIntermediaryAccountConnection is a struct used to indicate the
 * relationship between the underlying lock id and superfluid delegation done
 * via lp shares.
 */
export interface LockIdIntermediaryAccountConnectionAmino {
    lock_id: string;
    intermediary_account: string;
}
export interface LockIdIntermediaryAccountConnectionAminoMsg {
    type: "osmosis/lock-id-intermediary-account-connection";
    value: LockIdIntermediaryAccountConnectionAmino;
}
/**
 * LockIdIntermediaryAccountConnection is a struct used to indicate the
 * relationship between the underlying lock id and superfluid delegation done
 * via lp shares.
 */
export interface LockIdIntermediaryAccountConnectionSDKType {
    lock_id: bigint;
    intermediary_account: string;
}
export interface UnpoolWhitelistedPools {
    ids: bigint[];
}
export interface UnpoolWhitelistedPoolsProtoMsg {
    typeUrl: "/osmosis.superfluid.UnpoolWhitelistedPools";
    value: Uint8Array;
}
export interface UnpoolWhitelistedPoolsAmino {
    ids: string[];
}
export interface UnpoolWhitelistedPoolsAminoMsg {
    type: "osmosis/unpool-whitelisted-pools";
    value: UnpoolWhitelistedPoolsAmino;
}
export interface UnpoolWhitelistedPoolsSDKType {
    ids: bigint[];
}
export interface ConcentratedPoolUserPositionRecord {
    validatorAddress: string;
    positionId: bigint;
    lockId: bigint;
    syntheticLock: SyntheticLock;
    delegationAmount: Coin;
    equivalentStakedAmount: Coin;
}
export interface ConcentratedPoolUserPositionRecordProtoMsg {
    typeUrl: "/osmosis.superfluid.ConcentratedPoolUserPositionRecord";
    value: Uint8Array;
}
export interface ConcentratedPoolUserPositionRecordAmino {
    validator_address: string;
    position_id: string;
    lock_id: string;
    synthetic_lock?: SyntheticLockAmino;
    delegation_amount?: CoinAmino;
    equivalent_staked_amount?: CoinAmino;
}
export interface ConcentratedPoolUserPositionRecordAminoMsg {
    type: "osmosis/concentrated-pool-user-position-record";
    value: ConcentratedPoolUserPositionRecordAmino;
}
export interface ConcentratedPoolUserPositionRecordSDKType {
    validator_address: string;
    position_id: bigint;
    lock_id: bigint;
    synthetic_lock: SyntheticLockSDKType;
    delegation_amount: CoinSDKType;
    equivalent_staked_amount: CoinSDKType;
}
export declare const SuperfluidAsset: {
    typeUrl: string;
    encode(message: SuperfluidAsset, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SuperfluidAsset;
    fromPartial(object: Partial<SuperfluidAsset>): SuperfluidAsset;
    fromAmino(object: SuperfluidAssetAmino): SuperfluidAsset;
    toAmino(message: SuperfluidAsset): SuperfluidAssetAmino;
    fromAminoMsg(object: SuperfluidAssetAminoMsg): SuperfluidAsset;
    toAminoMsg(message: SuperfluidAsset): SuperfluidAssetAminoMsg;
    fromProtoMsg(message: SuperfluidAssetProtoMsg): SuperfluidAsset;
    toProto(message: SuperfluidAsset): Uint8Array;
    toProtoMsg(message: SuperfluidAsset): SuperfluidAssetProtoMsg;
};
export declare const SuperfluidIntermediaryAccount: {
    typeUrl: string;
    encode(message: SuperfluidIntermediaryAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SuperfluidIntermediaryAccount;
    fromPartial(object: Partial<SuperfluidIntermediaryAccount>): SuperfluidIntermediaryAccount;
    fromAmino(object: SuperfluidIntermediaryAccountAmino): SuperfluidIntermediaryAccount;
    toAmino(message: SuperfluidIntermediaryAccount): SuperfluidIntermediaryAccountAmino;
    fromAminoMsg(object: SuperfluidIntermediaryAccountAminoMsg): SuperfluidIntermediaryAccount;
    toAminoMsg(message: SuperfluidIntermediaryAccount): SuperfluidIntermediaryAccountAminoMsg;
    fromProtoMsg(message: SuperfluidIntermediaryAccountProtoMsg): SuperfluidIntermediaryAccount;
    toProto(message: SuperfluidIntermediaryAccount): Uint8Array;
    toProtoMsg(message: SuperfluidIntermediaryAccount): SuperfluidIntermediaryAccountProtoMsg;
};
export declare const OsmoEquivalentMultiplierRecord: {
    typeUrl: string;
    encode(message: OsmoEquivalentMultiplierRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): OsmoEquivalentMultiplierRecord;
    fromPartial(object: Partial<OsmoEquivalentMultiplierRecord>): OsmoEquivalentMultiplierRecord;
    fromAmino(object: OsmoEquivalentMultiplierRecordAmino): OsmoEquivalentMultiplierRecord;
    toAmino(message: OsmoEquivalentMultiplierRecord): OsmoEquivalentMultiplierRecordAmino;
    fromAminoMsg(object: OsmoEquivalentMultiplierRecordAminoMsg): OsmoEquivalentMultiplierRecord;
    toAminoMsg(message: OsmoEquivalentMultiplierRecord): OsmoEquivalentMultiplierRecordAminoMsg;
    fromProtoMsg(message: OsmoEquivalentMultiplierRecordProtoMsg): OsmoEquivalentMultiplierRecord;
    toProto(message: OsmoEquivalentMultiplierRecord): Uint8Array;
    toProtoMsg(message: OsmoEquivalentMultiplierRecord): OsmoEquivalentMultiplierRecordProtoMsg;
};
export declare const SuperfluidDelegationRecord: {
    typeUrl: string;
    encode(message: SuperfluidDelegationRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SuperfluidDelegationRecord;
    fromPartial(object: Partial<SuperfluidDelegationRecord>): SuperfluidDelegationRecord;
    fromAmino(object: SuperfluidDelegationRecordAmino): SuperfluidDelegationRecord;
    toAmino(message: SuperfluidDelegationRecord): SuperfluidDelegationRecordAmino;
    fromAminoMsg(object: SuperfluidDelegationRecordAminoMsg): SuperfluidDelegationRecord;
    toAminoMsg(message: SuperfluidDelegationRecord): SuperfluidDelegationRecordAminoMsg;
    fromProtoMsg(message: SuperfluidDelegationRecordProtoMsg): SuperfluidDelegationRecord;
    toProto(message: SuperfluidDelegationRecord): Uint8Array;
    toProtoMsg(message: SuperfluidDelegationRecord): SuperfluidDelegationRecordProtoMsg;
};
export declare const LockIdIntermediaryAccountConnection: {
    typeUrl: string;
    encode(message: LockIdIntermediaryAccountConnection, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LockIdIntermediaryAccountConnection;
    fromPartial(object: Partial<LockIdIntermediaryAccountConnection>): LockIdIntermediaryAccountConnection;
    fromAmino(object: LockIdIntermediaryAccountConnectionAmino): LockIdIntermediaryAccountConnection;
    toAmino(message: LockIdIntermediaryAccountConnection): LockIdIntermediaryAccountConnectionAmino;
    fromAminoMsg(object: LockIdIntermediaryAccountConnectionAminoMsg): LockIdIntermediaryAccountConnection;
    toAminoMsg(message: LockIdIntermediaryAccountConnection): LockIdIntermediaryAccountConnectionAminoMsg;
    fromProtoMsg(message: LockIdIntermediaryAccountConnectionProtoMsg): LockIdIntermediaryAccountConnection;
    toProto(message: LockIdIntermediaryAccountConnection): Uint8Array;
    toProtoMsg(message: LockIdIntermediaryAccountConnection): LockIdIntermediaryAccountConnectionProtoMsg;
};
export declare const UnpoolWhitelistedPools: {
    typeUrl: string;
    encode(message: UnpoolWhitelistedPools, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UnpoolWhitelistedPools;
    fromPartial(object: Partial<UnpoolWhitelistedPools>): UnpoolWhitelistedPools;
    fromAmino(object: UnpoolWhitelistedPoolsAmino): UnpoolWhitelistedPools;
    toAmino(message: UnpoolWhitelistedPools): UnpoolWhitelistedPoolsAmino;
    fromAminoMsg(object: UnpoolWhitelistedPoolsAminoMsg): UnpoolWhitelistedPools;
    toAminoMsg(message: UnpoolWhitelistedPools): UnpoolWhitelistedPoolsAminoMsg;
    fromProtoMsg(message: UnpoolWhitelistedPoolsProtoMsg): UnpoolWhitelistedPools;
    toProto(message: UnpoolWhitelistedPools): Uint8Array;
    toProtoMsg(message: UnpoolWhitelistedPools): UnpoolWhitelistedPoolsProtoMsg;
};
export declare const ConcentratedPoolUserPositionRecord: {
    typeUrl: string;
    encode(message: ConcentratedPoolUserPositionRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ConcentratedPoolUserPositionRecord;
    fromPartial(object: Partial<ConcentratedPoolUserPositionRecord>): ConcentratedPoolUserPositionRecord;
    fromAmino(object: ConcentratedPoolUserPositionRecordAmino): ConcentratedPoolUserPositionRecord;
    toAmino(message: ConcentratedPoolUserPositionRecord): ConcentratedPoolUserPositionRecordAmino;
    fromAminoMsg(object: ConcentratedPoolUserPositionRecordAminoMsg): ConcentratedPoolUserPositionRecord;
    toAminoMsg(message: ConcentratedPoolUserPositionRecord): ConcentratedPoolUserPositionRecordAminoMsg;
    fromProtoMsg(message: ConcentratedPoolUserPositionRecordProtoMsg): ConcentratedPoolUserPositionRecord;
    toProto(message: ConcentratedPoolUserPositionRecord): Uint8Array;
    toProtoMsg(message: ConcentratedPoolUserPositionRecord): ConcentratedPoolUserPositionRecordProtoMsg;
};
