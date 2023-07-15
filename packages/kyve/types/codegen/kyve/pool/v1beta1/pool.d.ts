import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** PoolStatus ... */
export declare enum PoolStatus {
    /** POOL_STATUS_UNSPECIFIED - POOL_STATUS_UNSPECIFIED ... */
    POOL_STATUS_UNSPECIFIED = 0,
    /** POOL_STATUS_ACTIVE - POOL_STATUS_ACTIVE ... */
    POOL_STATUS_ACTIVE = 1,
    /** POOL_STATUS_DISABLED - POOL_STATUS_DISABLED ... */
    POOL_STATUS_DISABLED = 2,
    /** POOL_STATUS_NO_FUNDS - POOL_STATUS_NO_FUNDS ... */
    POOL_STATUS_NO_FUNDS = 3,
    /** POOL_STATUS_NOT_ENOUGH_DELEGATION - POOL_STATUS_NOT_ENOUGH_DELEGATION ... */
    POOL_STATUS_NOT_ENOUGH_DELEGATION = 4,
    /** POOL_STATUS_UPGRADING - POOL_STATUS_UPGRADING ... */
    POOL_STATUS_UPGRADING = 5,
    UNRECOGNIZED = -1
}
export declare const PoolStatusSDKType: typeof PoolStatus;
export declare function poolStatusFromJSON(object: any): PoolStatus;
export declare function poolStatusToJSON(object: PoolStatus): string;
/**
 * Protocol holds all info about the current pool version and the
 * available binaries for participating as a validator in a pool
 */
export interface Protocol {
    /** version holds the current software version tag of the pool binaries */
    version: string;
    /**
     * binaries is a stringified json object which holds binaries in the
     * current version for multiple platforms and architectures
     */
    binaries: string;
    /** last_upgrade is the unix time the pool was upgraded the last time */
    lastUpgrade: Long;
}
/**
 * Protocol holds all info about the current pool version and the
 * available binaries for participating as a validator in a pool
 */
export interface ProtocolSDKType {
    version: string;
    binaries: string;
    last_upgrade: Long;
}
/** Upgrade holds all info when a pool has a scheduled upgrade */
export interface UpgradePlan {
    /** version is the new software version tag of the upgrade */
    version: string;
    /**
     * binaries is the new stringified json object which holds binaries in the
     * upgrade version for multiple platforms and architectures
     */
    binaries: string;
    /** scheduled_at is the unix time the upgrade is supposed to be done */
    scheduledAt: Long;
    /**
     * duration is the time in seconds how long the pool should halt
     * during the upgrade to give all validators a chance of switching
     * to the new binaries
     */
    duration: Long;
}
/** Upgrade holds all info when a pool has a scheduled upgrade */
export interface UpgradePlanSDKType {
    version: string;
    binaries: string;
    scheduled_at: Long;
    duration: Long;
}
/** Funder is the object which holds info about a single pool funder */
export interface Funder {
    /** address is the address of the funder */
    address: string;
    /**
     * amount is the current amount of funds in ukyve the funder has
     * still funded the pool with
     */
    amount: Long;
}
/** Funder is the object which holds info about a single pool funder */
export interface FunderSDKType {
    address: string;
    amount: Long;
}
/** Pool ... */
export interface Pool {
    /** id - unique identifier of the pool, can not be changed */
    id: Long;
    /** name is a human readable name for the pool */
    name: string;
    /** runtime specified which protocol and which version needs is required */
    runtime: string;
    /** logo is a link to an image file */
    logo: string;
    /**
     * config is either a JSON encoded string or a link to an external storage provider.
     * This is up to the implementation of the protocol node.
     */
    config: string;
    /** start_key ... */
    startKey: string;
    /** current_key ... */
    currentKey: string;
    /** current_summary ... */
    currentSummary: string;
    /** current_index ... */
    currentIndex: Long;
    /** total_bundles is the number of total finalized bundles */
    totalBundles: Long;
    /** upload_interval ... */
    uploadInterval: Long;
    /** operating_cost ... */
    operatingCost: Long;
    /** min_delegation ... */
    minDelegation: Long;
    /** max_bundle_size ... */
    maxBundleSize: Long;
    /**
     * disabled is true when the pool is disabled.
     * Can only be done via governance.
     */
    disabled: boolean;
    /** funders ... */
    funders: Funder[];
    /** total_funds ... */
    totalFunds: Long;
    /** protocol ... */
    protocol?: Protocol;
    /** upgrade_plan ... */
    upgradePlan?: UpgradePlan;
    /** storage_provider_id ... */
    currentStorageProviderId: number;
    /** compression_id ... */
    currentCompressionId: number;
}
/** Pool ... */
export interface PoolSDKType {
    id: Long;
    name: string;
    runtime: string;
    logo: string;
    config: string;
    start_key: string;
    current_key: string;
    current_summary: string;
    current_index: Long;
    total_bundles: Long;
    upload_interval: Long;
    operating_cost: Long;
    min_delegation: Long;
    max_bundle_size: Long;
    disabled: boolean;
    funders: FunderSDKType[];
    total_funds: Long;
    protocol?: ProtocolSDKType;
    upgrade_plan?: UpgradePlanSDKType;
    current_storage_provider_id: number;
    current_compression_id: number;
}
export declare const Protocol: {
    encode(message: Protocol, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Protocol;
    fromPartial(object: Partial<Protocol>): Protocol;
};
export declare const UpgradePlan: {
    encode(message: UpgradePlan, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UpgradePlan;
    fromPartial(object: Partial<UpgradePlan>): UpgradePlan;
};
export declare const Funder: {
    encode(message: Funder, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Funder;
    fromPartial(object: Partial<Funder>): Funder;
};
export declare const Pool: {
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Pool;
    fromPartial(object: Partial<Pool>): Pool;
};
