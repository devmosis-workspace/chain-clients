import { Params, ParamsSDKType } from "./params";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParams {
    /** old_params is the module's old parameters. */
    oldParams?: Params;
    /** new_params is the module's new parameters. */
    newParams?: Params;
    /** payload is the parameter updates that were performed. */
    payload: string;
}
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParamsSDKType {
    old_params?: ParamsSDKType;
    new_params?: ParamsSDKType;
    payload: string;
}
/**
 * EventCreatePool ...
 * emitted_by: EndBlock(gov)
 */
export interface EventCreatePool {
    /** id is the unique ID of the pool. */
    id: Long;
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
    uploadInterval: Long;
    /**
     * operating_cost is the fixed cost which gets paid out
     * to every successful uploader
     */
    operatingCost: Long;
    /**
     * min_delegation is the minimum amount of $KYVE the pool has
     * to have in order to produce bundles
     */
    minDelegation: Long;
    /**
     * max_bundle_size is the max size a data bundle can have
     * (amount of data items)
     */
    maxBundleSize: Long;
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
/**
 * EventCreatePool ...
 * emitted_by: EndBlock(gov)
 */
export interface EventCreatePoolSDKType {
    id: Long;
    name: string;
    runtime: string;
    logo: string;
    config: string;
    start_key: string;
    upload_interval: Long;
    operating_cost: Long;
    min_delegation: Long;
    max_bundle_size: Long;
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
    id: Long;
}
/**
 * EventPoolEnabled ...
 * emitted_by: EndBlock(gov)
 */
export interface EventPoolEnabledSDKType {
    id: Long;
}
/**
 * EventPoolDisabled ...
 * emitted_by: EndBlock(gov)
 */
export interface EventPoolDisabled {
    /** id is the unique ID of the affected pool. */
    id: Long;
}
/**
 * EventPoolDisabled ...
 * emitted_by: EndBlock(gov)
 */
export interface EventPoolDisabledSDKType {
    id: Long;
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
    scheduledAt: Long;
    /**
     * duration is the amount of seconds the pool will be paused after the
     * scheduled time is reached. This will give node operators time to upgrade
     * their node.
     */
    duration: Long;
    /** binaries contain download links for prebuilt binaries (in JSON format). */
    binaries: string;
    /** affected_pools contains all IDs of pools that will be affected by this runtime upgrade. */
    affectedPools: Long[];
}
/**
 * EventRuntimeUpgradeScheduled ...
 * emitted_by: EndBlock(gov)
 */
export interface EventRuntimeUpgradeScheduledSDKType {
    runtime: string;
    version: string;
    scheduled_at: Long;
    duration: Long;
    binaries: string;
    affected_pools: Long[];
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
    affectedPools: Long[];
}
/**
 * EventRuntimeUpgradeCancelled ...
 * emitted_by: EndBlock(gov)
 */
export interface EventRuntimeUpgradeCancelledSDKType {
    runtime: string;
    affected_pools: Long[];
}
/**
 * EventPoolUpdated ...
 * emitted_by: EndBlock(gov)
 */
export interface EventPoolUpdated {
    /** id is the unique ID of the pool. */
    id: Long;
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
    uploadInterval: Long;
    /**
     * operating_cost is the fixed cost which gets paid out
     * to every successful uploader
     */
    operatingCost: Long;
    /**
     * min_delegation is the minimum amount of $KYVE the pool has
     * to have in order to produce bundles
     */
    minDelegation: Long;
    /**
     * max_bundle_size is the max size a data bundle can have
     * (amount of data items)
     */
    maxBundleSize: Long;
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
/**
 * EventPoolUpdated ...
 * emitted_by: EndBlock(gov)
 */
export interface EventPoolUpdatedSDKType {
    id: Long;
    raw_update_string: string;
    name: string;
    runtime: string;
    logo: string;
    config: string;
    upload_interval: Long;
    operating_cost: Long;
    min_delegation: Long;
    max_bundle_size: Long;
    storage_provider_id: number;
    compression_id: number;
}
/**
 * EventFundPool is an event emitted when a pool is funded.
 * emitted_by: MsgFundPool
 */
export interface EventFundPool {
    /** pool_id is the unique ID of the pool. */
    poolId: Long;
    /** address is the account address of the pool funder. */
    address: string;
    /** amount is the amount in ukyve the funder has funded */
    amount: Long;
}
/**
 * EventFundPool is an event emitted when a pool is funded.
 * emitted_by: MsgFundPool
 */
export interface EventFundPoolSDKType {
    pool_id: Long;
    address: string;
    amount: Long;
}
/**
 * EventDefundPool is an event emitted when a pool is defunded.
 * emitted_by: MsgDefundPool
 */
export interface EventDefundPool {
    /** pool_id is the unique ID of the pool. */
    poolId: Long;
    /** address is the account address of the pool funder. */
    address: string;
    /** amount is the amount in ukyve the funder has defunded */
    amount: Long;
}
/**
 * EventDefundPool is an event emitted when a pool is defunded.
 * emitted_by: MsgDefundPool
 */
export interface EventDefundPoolSDKType {
    pool_id: Long;
    address: string;
    amount: Long;
}
/**
 * EventDefundPool is an event emitted when a pool is defunded.
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventPoolFundsSlashed {
    /** pool_id is the unique ID of the pool. */
    poolId: Long;
    /** address is the account address of the pool funder. */
    address: string;
    /** amount is the amount in ukyve the validator has lost due to the slash */
    amount: Long;
}
/**
 * EventDefundPool is an event emitted when a pool is defunded.
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventPoolFundsSlashedSDKType {
    pool_id: Long;
    address: string;
    amount: Long;
}
/**
 * EventPoolOutOfFunds is an event emitted when a pool has run out of funds
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventPoolOutOfFunds {
    /** pool_id is the unique ID of the pool. */
    poolId: Long;
}
/**
 * EventPoolOutOfFunds is an event emitted when a pool has run out of funds
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventPoolOutOfFundsSDKType {
    pool_id: Long;
}
export declare const EventUpdateParams: {
    encode(message: EventUpdateParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventUpdateParams;
    fromPartial(object: Partial<EventUpdateParams>): EventUpdateParams;
};
export declare const EventCreatePool: {
    encode(message: EventCreatePool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventCreatePool;
    fromPartial(object: Partial<EventCreatePool>): EventCreatePool;
};
export declare const EventPoolEnabled: {
    encode(message: EventPoolEnabled, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventPoolEnabled;
    fromPartial(object: Partial<EventPoolEnabled>): EventPoolEnabled;
};
export declare const EventPoolDisabled: {
    encode(message: EventPoolDisabled, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventPoolDisabled;
    fromPartial(object: Partial<EventPoolDisabled>): EventPoolDisabled;
};
export declare const EventRuntimeUpgradeScheduled: {
    encode(message: EventRuntimeUpgradeScheduled, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventRuntimeUpgradeScheduled;
    fromPartial(object: Partial<EventRuntimeUpgradeScheduled>): EventRuntimeUpgradeScheduled;
};
export declare const EventRuntimeUpgradeCancelled: {
    encode(message: EventRuntimeUpgradeCancelled, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventRuntimeUpgradeCancelled;
    fromPartial(object: Partial<EventRuntimeUpgradeCancelled>): EventRuntimeUpgradeCancelled;
};
export declare const EventPoolUpdated: {
    encode(message: EventPoolUpdated, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventPoolUpdated;
    fromPartial(object: Partial<EventPoolUpdated>): EventPoolUpdated;
};
export declare const EventFundPool: {
    encode(message: EventFundPool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventFundPool;
    fromPartial(object: Partial<EventFundPool>): EventFundPool;
};
export declare const EventDefundPool: {
    encode(message: EventDefundPool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventDefundPool;
    fromPartial(object: Partial<EventDefundPool>): EventDefundPool;
};
export declare const EventPoolFundsSlashed: {
    encode(message: EventPoolFundsSlashed, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventPoolFundsSlashed;
    fromPartial(object: Partial<EventPoolFundsSlashed>): EventPoolFundsSlashed;
};
export declare const EventPoolOutOfFunds: {
    encode(message: EventPoolOutOfFunds, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventPoolOutOfFunds;
    fromPartial(object: Partial<EventPoolOutOfFunds>): EventPoolOutOfFunds;
};
