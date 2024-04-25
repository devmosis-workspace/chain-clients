import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParams {
    /** old_params is the module's old parameters. */
    oldParams: Params;
    /** new_params is the module's new parameters. */
    newParams: Params;
    /** payload is the parameter updates that were performed. */
    payload: string;
}
export interface EventUpdateParamsProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.EventUpdateParams";
    value: Uint8Array;
}
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParamsAmino {
    /** old_params is the module's old parameters. */
    old_params?: ParamsAmino;
    /** new_params is the module's new parameters. */
    new_params?: ParamsAmino;
    /** payload is the parameter updates that were performed. */
    payload?: string;
}
export interface EventUpdateParamsAminoMsg {
    type: "/kyve.pool.v1beta1.EventUpdateParams";
    value: EventUpdateParamsAmino;
}
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParamsSDKType {
    old_params: ParamsSDKType;
    new_params: ParamsSDKType;
    payload: string;
}
/**
 * EventCreatePool ...
 * emitted_by: EndBlock(gov)
 */
export interface EventCreatePool {
    /** id is the unique ID of the pool. */
    id: bigint;
    /** name is the human readable name of the pool */
    name: string;
    /** runtime is the runtime name of the pool */
    runtime: string;
    /** logo is the logo url of the pool */
    logo: string;
    /**
     * config is either a json stringified config or an
     * external link pointing to the config
     */
    config: string;
    /**
     * start_key is the first key the pool should start
     * indexing
     */
    startKey: string;
    /**
     * upload_interval is the interval the pool should validate
     * bundles with
     */
    uploadInterval: bigint;
    /**
     * inflation_share_weight is the fixed cost which gets paid out
     * to every successful uploader
     */
    inflationShareWeight: bigint;
    /**
     * min_delegation is the minimum amount of $KYVE the pool has
     * to have in order to produce bundles
     */
    minDelegation: bigint;
    /**
     * max_bundle_size is the max size a data bundle can have
     * (amount of data items)
     */
    maxBundleSize: bigint;
    /** version is the current version of the protocol nodes */
    version: string;
    /** binaries points to the current binaries of the protocol node */
    binaries: string;
    /**
     * storage_provider_id is the unique id of the storage provider
     * the pool is archiving the data on
     */
    storageProviderId: number;
    /**
     * compression_id is the unique id of the compression type the bundles
     * get compressed with
     */
    compressionId: number;
}
export interface EventCreatePoolProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.EventCreatePool";
    value: Uint8Array;
}
/**
 * EventCreatePool ...
 * emitted_by: EndBlock(gov)
 */
export interface EventCreatePoolAmino {
    /** id is the unique ID of the pool. */
    id?: string;
    /** name is the human readable name of the pool */
    name?: string;
    /** runtime is the runtime name of the pool */
    runtime?: string;
    /** logo is the logo url of the pool */
    logo?: string;
    /**
     * config is either a json stringified config or an
     * external link pointing to the config
     */
    config?: string;
    /**
     * start_key is the first key the pool should start
     * indexing
     */
    start_key?: string;
    /**
     * upload_interval is the interval the pool should validate
     * bundles with
     */
    upload_interval?: string;
    /**
     * inflation_share_weight is the fixed cost which gets paid out
     * to every successful uploader
     */
    inflation_share_weight?: string;
    /**
     * min_delegation is the minimum amount of $KYVE the pool has
     * to have in order to produce bundles
     */
    min_delegation?: string;
    /**
     * max_bundle_size is the max size a data bundle can have
     * (amount of data items)
     */
    max_bundle_size?: string;
    /** version is the current version of the protocol nodes */
    version?: string;
    /** binaries points to the current binaries of the protocol node */
    binaries?: string;
    /**
     * storage_provider_id is the unique id of the storage provider
     * the pool is archiving the data on
     */
    storage_provider_id?: number;
    /**
     * compression_id is the unique id of the compression type the bundles
     * get compressed with
     */
    compression_id?: number;
}
export interface EventCreatePoolAminoMsg {
    type: "/kyve.pool.v1beta1.EventCreatePool";
    value: EventCreatePoolAmino;
}
/**
 * EventCreatePool ...
 * emitted_by: EndBlock(gov)
 */
export interface EventCreatePoolSDKType {
    id: bigint;
    name: string;
    runtime: string;
    logo: string;
    config: string;
    start_key: string;
    upload_interval: bigint;
    inflation_share_weight: bigint;
    min_delegation: bigint;
    max_bundle_size: bigint;
    version: string;
    binaries: string;
    storage_provider_id: number;
    compression_id: number;
}
/**
 * EventPoolEnabled ...
 * emitted_by: EndBlock(gov)
 */
export interface EventPoolEnabled {
    /** id is the unique ID of the affected pool. */
    id: bigint;
}
export interface EventPoolEnabledProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.EventPoolEnabled";
    value: Uint8Array;
}
/**
 * EventPoolEnabled ...
 * emitted_by: EndBlock(gov)
 */
export interface EventPoolEnabledAmino {
    /** id is the unique ID of the affected pool. */
    id?: string;
}
export interface EventPoolEnabledAminoMsg {
    type: "/kyve.pool.v1beta1.EventPoolEnabled";
    value: EventPoolEnabledAmino;
}
/**
 * EventPoolEnabled ...
 * emitted_by: EndBlock(gov)
 */
export interface EventPoolEnabledSDKType {
    id: bigint;
}
/**
 * EventPoolDisabled ...
 * emitted_by: EndBlock(gov)
 */
export interface EventPoolDisabled {
    /** id is the unique ID of the affected pool. */
    id: bigint;
}
export interface EventPoolDisabledProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.EventPoolDisabled";
    value: Uint8Array;
}
/**
 * EventPoolDisabled ...
 * emitted_by: EndBlock(gov)
 */
export interface EventPoolDisabledAmino {
    /** id is the unique ID of the affected pool. */
    id?: string;
}
export interface EventPoolDisabledAminoMsg {
    type: "/kyve.pool.v1beta1.EventPoolDisabled";
    value: EventPoolDisabledAmino;
}
/**
 * EventPoolDisabled ...
 * emitted_by: EndBlock(gov)
 */
export interface EventPoolDisabledSDKType {
    id: bigint;
}
/**
 * EventRuntimeUpgradeScheduled ...
 * emitted_by: EndBlock(gov)
 */
export interface EventRuntimeUpgradeScheduled {
    /** runtime is the name of the runtime that will be upgraded. */
    runtime: string;
    /** version is the new version that the runtime will be upgraded to. */
    version: string;
    /** scheduled_at is the time in UNIX seconds when the upgrade will occur. */
    scheduledAt: bigint;
    /**
     * duration is the amount of seconds the pool will be paused after the
     * scheduled time is reached. This will give node operators time to upgrade
     * their node.
     */
    duration: bigint;
    /** binaries contain download links for prebuilt binaries (in JSON format). */
    binaries: string;
    /** affected_pools contains all IDs of pools that will be affected by this runtime upgrade. */
    affectedPools: bigint[];
}
export interface EventRuntimeUpgradeScheduledProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.EventRuntimeUpgradeScheduled";
    value: Uint8Array;
}
/**
 * EventRuntimeUpgradeScheduled ...
 * emitted_by: EndBlock(gov)
 */
export interface EventRuntimeUpgradeScheduledAmino {
    /** runtime is the name of the runtime that will be upgraded. */
    runtime?: string;
    /** version is the new version that the runtime will be upgraded to. */
    version?: string;
    /** scheduled_at is the time in UNIX seconds when the upgrade will occur. */
    scheduled_at?: string;
    /**
     * duration is the amount of seconds the pool will be paused after the
     * scheduled time is reached. This will give node operators time to upgrade
     * their node.
     */
    duration?: string;
    /** binaries contain download links for prebuilt binaries (in JSON format). */
    binaries?: string;
    /** affected_pools contains all IDs of pools that will be affected by this runtime upgrade. */
    affected_pools?: string[];
}
export interface EventRuntimeUpgradeScheduledAminoMsg {
    type: "/kyve.pool.v1beta1.EventRuntimeUpgradeScheduled";
    value: EventRuntimeUpgradeScheduledAmino;
}
/**
 * EventRuntimeUpgradeScheduled ...
 * emitted_by: EndBlock(gov)
 */
export interface EventRuntimeUpgradeScheduledSDKType {
    runtime: string;
    version: string;
    scheduled_at: bigint;
    duration: bigint;
    binaries: string;
    affected_pools: bigint[];
}
/**
 * EventRuntimeUpgradeCancelled ...
 * emitted_by: EndBlock(gov)
 */
export interface EventRuntimeUpgradeCancelled {
    /** runtime is the name of the runtime that will be upgraded. */
    runtime: string;
    /**
     * affected_pools contains all IDs of pools that are affected by the
     * cancellation of this runtime upgrade.
     */
    affectedPools: bigint[];
}
export interface EventRuntimeUpgradeCancelledProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.EventRuntimeUpgradeCancelled";
    value: Uint8Array;
}
/**
 * EventRuntimeUpgradeCancelled ...
 * emitted_by: EndBlock(gov)
 */
export interface EventRuntimeUpgradeCancelledAmino {
    /** runtime is the name of the runtime that will be upgraded. */
    runtime?: string;
    /**
     * affected_pools contains all IDs of pools that are affected by the
     * cancellation of this runtime upgrade.
     */
    affected_pools?: string[];
}
export interface EventRuntimeUpgradeCancelledAminoMsg {
    type: "/kyve.pool.v1beta1.EventRuntimeUpgradeCancelled";
    value: EventRuntimeUpgradeCancelledAmino;
}
/**
 * EventRuntimeUpgradeCancelled ...
 * emitted_by: EndBlock(gov)
 */
export interface EventRuntimeUpgradeCancelledSDKType {
    runtime: string;
    affected_pools: bigint[];
}
/**
 * EventPoolUpdated ...
 * emitted_by: EndBlock(gov)
 */
export interface EventPoolUpdated {
    /** id is the unique ID of the pool. */
    id: bigint;
    /** raw update string */
    rawUpdateString: string;
    /** name is the human readable name of the pool */
    name: string;
    /** runtime is the runtime name of the pool */
    runtime: string;
    /** logo is the logo url of the pool */
    logo: string;
    /**
     * config is either a json stringified config or an
     * external link pointing to the config
     */
    config: string;
    /**
     * upload_interval is the interval the pool should validate
     * bundles with
     */
    uploadInterval: bigint;
    /**
     * inflation_share_weight is the fixed cost which gets paid out
     * to every successful uploader
     */
    inflationShareWeight: bigint;
    /**
     * min_delegation is the minimum amount of $KYVE the pool has
     * to have in order to produce bundles
     */
    minDelegation: bigint;
    /**
     * max_bundle_size is the max size a data bundle can have
     * (amount of data items)
     */
    maxBundleSize: bigint;
    /**
     * storage_provider_id is the unique id of the storage provider
     * the pool is archiving the data on
     */
    storageProviderId: number;
    /**
     * compression_id is the unique id of the compression type the bundles
     * get compressed with
     */
    compressionId: number;
}
export interface EventPoolUpdatedProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.EventPoolUpdated";
    value: Uint8Array;
}
/**
 * EventPoolUpdated ...
 * emitted_by: EndBlock(gov)
 */
export interface EventPoolUpdatedAmino {
    /** id is the unique ID of the pool. */
    id?: string;
    /** raw update string */
    raw_update_string?: string;
    /** name is the human readable name of the pool */
    name?: string;
    /** runtime is the runtime name of the pool */
    runtime?: string;
    /** logo is the logo url of the pool */
    logo?: string;
    /**
     * config is either a json stringified config or an
     * external link pointing to the config
     */
    config?: string;
    /**
     * upload_interval is the interval the pool should validate
     * bundles with
     */
    upload_interval?: string;
    /**
     * inflation_share_weight is the fixed cost which gets paid out
     * to every successful uploader
     */
    inflation_share_weight?: string;
    /**
     * min_delegation is the minimum amount of $KYVE the pool has
     * to have in order to produce bundles
     */
    min_delegation?: string;
    /**
     * max_bundle_size is the max size a data bundle can have
     * (amount of data items)
     */
    max_bundle_size?: string;
    /**
     * storage_provider_id is the unique id of the storage provider
     * the pool is archiving the data on
     */
    storage_provider_id?: number;
    /**
     * compression_id is the unique id of the compression type the bundles
     * get compressed with
     */
    compression_id?: number;
}
export interface EventPoolUpdatedAminoMsg {
    type: "/kyve.pool.v1beta1.EventPoolUpdated";
    value: EventPoolUpdatedAmino;
}
/**
 * EventPoolUpdated ...
 * emitted_by: EndBlock(gov)
 */
export interface EventPoolUpdatedSDKType {
    id: bigint;
    raw_update_string: string;
    name: string;
    runtime: string;
    logo: string;
    config: string;
    upload_interval: bigint;
    inflation_share_weight: bigint;
    min_delegation: bigint;
    max_bundle_size: bigint;
    storage_provider_id: number;
    compression_id: number;
}
/**
 * EventDefundPool is an event emitted when a pool is defunded.
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventPoolFundsSlashed {
    /** pool_id is the unique ID of the pool. */
    poolId: bigint;
    /** address is the account address of the pool funder. */
    address: string;
    /** amount is the amount in ukyve the validator has lost due to the slash */
    amount: bigint;
}
export interface EventPoolFundsSlashedProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.EventPoolFundsSlashed";
    value: Uint8Array;
}
/**
 * EventDefundPool is an event emitted when a pool is defunded.
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventPoolFundsSlashedAmino {
    /** pool_id is the unique ID of the pool. */
    pool_id?: string;
    /** address is the account address of the pool funder. */
    address?: string;
    /** amount is the amount in ukyve the validator has lost due to the slash */
    amount?: string;
}
export interface EventPoolFundsSlashedAminoMsg {
    type: "/kyve.pool.v1beta1.EventPoolFundsSlashed";
    value: EventPoolFundsSlashedAmino;
}
/**
 * EventDefundPool is an event emitted when a pool is defunded.
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventPoolFundsSlashedSDKType {
    pool_id: bigint;
    address: string;
    amount: bigint;
}
export declare const EventUpdateParams: {
    typeUrl: string;
    encode(message: EventUpdateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventUpdateParams;
    fromPartial(object: Partial<EventUpdateParams>): EventUpdateParams;
    fromAmino(object: EventUpdateParamsAmino): EventUpdateParams;
    toAmino(message: EventUpdateParams): EventUpdateParamsAmino;
    fromAminoMsg(object: EventUpdateParamsAminoMsg): EventUpdateParams;
    fromProtoMsg(message: EventUpdateParamsProtoMsg): EventUpdateParams;
    toProto(message: EventUpdateParams): Uint8Array;
    toProtoMsg(message: EventUpdateParams): EventUpdateParamsProtoMsg;
};
export declare const EventCreatePool: {
    typeUrl: string;
    encode(message: EventCreatePool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventCreatePool;
    fromPartial(object: Partial<EventCreatePool>): EventCreatePool;
    fromAmino(object: EventCreatePoolAmino): EventCreatePool;
    toAmino(message: EventCreatePool): EventCreatePoolAmino;
    fromAminoMsg(object: EventCreatePoolAminoMsg): EventCreatePool;
    fromProtoMsg(message: EventCreatePoolProtoMsg): EventCreatePool;
    toProto(message: EventCreatePool): Uint8Array;
    toProtoMsg(message: EventCreatePool): EventCreatePoolProtoMsg;
};
export declare const EventPoolEnabled: {
    typeUrl: string;
    encode(message: EventPoolEnabled, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventPoolEnabled;
    fromPartial(object: Partial<EventPoolEnabled>): EventPoolEnabled;
    fromAmino(object: EventPoolEnabledAmino): EventPoolEnabled;
    toAmino(message: EventPoolEnabled): EventPoolEnabledAmino;
    fromAminoMsg(object: EventPoolEnabledAminoMsg): EventPoolEnabled;
    fromProtoMsg(message: EventPoolEnabledProtoMsg): EventPoolEnabled;
    toProto(message: EventPoolEnabled): Uint8Array;
    toProtoMsg(message: EventPoolEnabled): EventPoolEnabledProtoMsg;
};
export declare const EventPoolDisabled: {
    typeUrl: string;
    encode(message: EventPoolDisabled, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventPoolDisabled;
    fromPartial(object: Partial<EventPoolDisabled>): EventPoolDisabled;
    fromAmino(object: EventPoolDisabledAmino): EventPoolDisabled;
    toAmino(message: EventPoolDisabled): EventPoolDisabledAmino;
    fromAminoMsg(object: EventPoolDisabledAminoMsg): EventPoolDisabled;
    fromProtoMsg(message: EventPoolDisabledProtoMsg): EventPoolDisabled;
    toProto(message: EventPoolDisabled): Uint8Array;
    toProtoMsg(message: EventPoolDisabled): EventPoolDisabledProtoMsg;
};
export declare const EventRuntimeUpgradeScheduled: {
    typeUrl: string;
    encode(message: EventRuntimeUpgradeScheduled, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventRuntimeUpgradeScheduled;
    fromPartial(object: Partial<EventRuntimeUpgradeScheduled>): EventRuntimeUpgradeScheduled;
    fromAmino(object: EventRuntimeUpgradeScheduledAmino): EventRuntimeUpgradeScheduled;
    toAmino(message: EventRuntimeUpgradeScheduled): EventRuntimeUpgradeScheduledAmino;
    fromAminoMsg(object: EventRuntimeUpgradeScheduledAminoMsg): EventRuntimeUpgradeScheduled;
    fromProtoMsg(message: EventRuntimeUpgradeScheduledProtoMsg): EventRuntimeUpgradeScheduled;
    toProto(message: EventRuntimeUpgradeScheduled): Uint8Array;
    toProtoMsg(message: EventRuntimeUpgradeScheduled): EventRuntimeUpgradeScheduledProtoMsg;
};
export declare const EventRuntimeUpgradeCancelled: {
    typeUrl: string;
    encode(message: EventRuntimeUpgradeCancelled, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventRuntimeUpgradeCancelled;
    fromPartial(object: Partial<EventRuntimeUpgradeCancelled>): EventRuntimeUpgradeCancelled;
    fromAmino(object: EventRuntimeUpgradeCancelledAmino): EventRuntimeUpgradeCancelled;
    toAmino(message: EventRuntimeUpgradeCancelled): EventRuntimeUpgradeCancelledAmino;
    fromAminoMsg(object: EventRuntimeUpgradeCancelledAminoMsg): EventRuntimeUpgradeCancelled;
    fromProtoMsg(message: EventRuntimeUpgradeCancelledProtoMsg): EventRuntimeUpgradeCancelled;
    toProto(message: EventRuntimeUpgradeCancelled): Uint8Array;
    toProtoMsg(message: EventRuntimeUpgradeCancelled): EventRuntimeUpgradeCancelledProtoMsg;
};
export declare const EventPoolUpdated: {
    typeUrl: string;
    encode(message: EventPoolUpdated, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventPoolUpdated;
    fromPartial(object: Partial<EventPoolUpdated>): EventPoolUpdated;
    fromAmino(object: EventPoolUpdatedAmino): EventPoolUpdated;
    toAmino(message: EventPoolUpdated): EventPoolUpdatedAmino;
    fromAminoMsg(object: EventPoolUpdatedAminoMsg): EventPoolUpdated;
    fromProtoMsg(message: EventPoolUpdatedProtoMsg): EventPoolUpdated;
    toProto(message: EventPoolUpdated): Uint8Array;
    toProtoMsg(message: EventPoolUpdated): EventPoolUpdatedProtoMsg;
};
export declare const EventPoolFundsSlashed: {
    typeUrl: string;
    encode(message: EventPoolFundsSlashed, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventPoolFundsSlashed;
    fromPartial(object: Partial<EventPoolFundsSlashed>): EventPoolFundsSlashed;
    fromAmino(object: EventPoolFundsSlashedAmino): EventPoolFundsSlashed;
    toAmino(message: EventPoolFundsSlashed): EventPoolFundsSlashedAmino;
    fromAminoMsg(object: EventPoolFundsSlashedAminoMsg): EventPoolFundsSlashed;
    fromProtoMsg(message: EventPoolFundsSlashedProtoMsg): EventPoolFundsSlashed;
    toProto(message: EventPoolFundsSlashed): Uint8Array;
    toProtoMsg(message: EventPoolFundsSlashed): EventPoolFundsSlashedProtoMsg;
};
