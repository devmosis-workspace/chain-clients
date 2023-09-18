import { BinaryWriter } from "../../../binary";
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
export declare const PoolStatusAmino: typeof PoolStatus;
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
    lastUpgrade: bigint;
}
export interface ProtocolProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.Protocol";
    value: Uint8Array;
}
/**
 * Protocol holds all info about the current pool version and the
 * available binaries for participating as a validator in a pool
 */
export interface ProtocolAmino {
    /** version holds the current software version tag of the pool binaries */
    version: string;
    /**
     * binaries is a stringified json object which holds binaries in the
     * current version for multiple platforms and architectures
     */
    binaries: string;
    /** last_upgrade is the unix time the pool was upgraded the last time */
    last_upgrade: string;
}
export interface ProtocolAminoMsg {
    type: "/kyve.pool.v1beta1.Protocol";
    value: ProtocolAmino;
}
/**
 * Protocol holds all info about the current pool version and the
 * available binaries for participating as a validator in a pool
 */
export interface ProtocolSDKType {
    version: string;
    binaries: string;
    last_upgrade: bigint;
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
    scheduledAt: bigint;
    /**
     * duration is the time in seconds how long the pool should halt
     * during the upgrade to give all validators a chance of switching
     * to the new binaries
     */
    duration: bigint;
}
export interface UpgradePlanProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.UpgradePlan";
    value: Uint8Array;
}
/** Upgrade holds all info when a pool has a scheduled upgrade */
export interface UpgradePlanAmino {
    /** version is the new software version tag of the upgrade */
    version: string;
    /**
     * binaries is the new stringified json object which holds binaries in the
     * upgrade version for multiple platforms and architectures
     */
    binaries: string;
    /** scheduled_at is the unix time the upgrade is supposed to be done */
    scheduled_at: string;
    /**
     * duration is the time in seconds how long the pool should halt
     * during the upgrade to give all validators a chance of switching
     * to the new binaries
     */
    duration: string;
}
export interface UpgradePlanAminoMsg {
    type: "/kyve.pool.v1beta1.UpgradePlan";
    value: UpgradePlanAmino;
}
/** Upgrade holds all info when a pool has a scheduled upgrade */
export interface UpgradePlanSDKType {
    version: string;
    binaries: string;
    scheduled_at: bigint;
    duration: bigint;
}
/** Funder is the object which holds info about a single pool funder */
export interface Funder {
    /** address is the address of the funder */
    address: string;
    /**
     * amount is the current amount of funds in ukyve the funder has
     * still funded the pool with
     */
    amount: bigint;
}
export interface FunderProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.Funder";
    value: Uint8Array;
}
/** Funder is the object which holds info about a single pool funder */
export interface FunderAmino {
    /** address is the address of the funder */
    address: string;
    /**
     * amount is the current amount of funds in ukyve the funder has
     * still funded the pool with
     */
    amount: string;
}
export interface FunderAminoMsg {
    type: "/kyve.pool.v1beta1.Funder";
    value: FunderAmino;
}
/** Funder is the object which holds info about a single pool funder */
export interface FunderSDKType {
    address: string;
    amount: bigint;
}
/** Pool ... */
export interface Pool {
    /** id - unique identifier of the pool, can not be changed */
    id: bigint;
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
    currentIndex: bigint;
    /** total_bundles is the number of total finalized bundles */
    totalBundles: bigint;
    /** upload_interval ... */
    uploadInterval: bigint;
    /** operating_cost ... */
    operatingCost: bigint;
    /** min_delegation ... */
    minDelegation: bigint;
    /** max_bundle_size ... */
    maxBundleSize: bigint;
    /**
     * disabled is true when the pool is disabled.
     * Can only be done via governance.
     */
    disabled: boolean;
    /** funders ... */
    funders: Funder[];
    /** total_funds ... */
    totalFunds: bigint;
    /** protocol ... */
    protocol: Protocol;
    /** upgrade_plan ... */
    upgradePlan: UpgradePlan;
    /** storage_provider_id ... */
    currentStorageProviderId: number;
    /** compression_id ... */
    currentCompressionId: number;
}
export interface PoolProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.Pool";
    value: Uint8Array;
}
/** Pool ... */
export interface PoolAmino {
    /** id - unique identifier of the pool, can not be changed */
    id: string;
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
    start_key: string;
    /** current_key ... */
    current_key: string;
    /** current_summary ... */
    current_summary: string;
    /** current_index ... */
    current_index: string;
    /** total_bundles is the number of total finalized bundles */
    total_bundles: string;
    /** upload_interval ... */
    upload_interval: string;
    /** operating_cost ... */
    operating_cost: string;
    /** min_delegation ... */
    min_delegation: string;
    /** max_bundle_size ... */
    max_bundle_size: string;
    /**
     * disabled is true when the pool is disabled.
     * Can only be done via governance.
     */
    disabled: boolean;
    /** funders ... */
    funders: FunderAmino[];
    /** total_funds ... */
    total_funds: string;
    /** protocol ... */
    protocol?: ProtocolAmino;
    /** upgrade_plan ... */
    upgrade_plan?: UpgradePlanAmino;
    /** storage_provider_id ... */
    current_storage_provider_id: number;
    /** compression_id ... */
    current_compression_id: number;
}
export interface PoolAminoMsg {
    type: "/kyve.pool.v1beta1.Pool";
    value: PoolAmino;
}
/** Pool ... */
export interface PoolSDKType {
    id: bigint;
    name: string;
    runtime: string;
    logo: string;
    config: string;
    start_key: string;
    current_key: string;
    current_summary: string;
    current_index: bigint;
    total_bundles: bigint;
    upload_interval: bigint;
    operating_cost: bigint;
    min_delegation: bigint;
    max_bundle_size: bigint;
    disabled: boolean;
    funders: FunderSDKType[];
    total_funds: bigint;
    protocol: ProtocolSDKType;
    upgrade_plan: UpgradePlanSDKType;
    current_storage_provider_id: number;
    current_compression_id: number;
}
export declare const Protocol: {
    typeUrl: string;
    encode(message: Protocol, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Protocol;
    fromPartial(object: Partial<Protocol>): Protocol;
    fromAmino(object: ProtocolAmino): Protocol;
    toAmino(message: Protocol): ProtocolAmino;
    fromAminoMsg(object: ProtocolAminoMsg): Protocol;
    fromProtoMsg(message: ProtocolProtoMsg): Protocol;
    toProto(message: Protocol): Uint8Array;
    toProtoMsg(message: Protocol): ProtocolProtoMsg;
};
export declare const UpgradePlan: {
    typeUrl: string;
    encode(message: UpgradePlan, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UpgradePlan;
    fromPartial(object: Partial<UpgradePlan>): UpgradePlan;
    fromAmino(object: UpgradePlanAmino): UpgradePlan;
    toAmino(message: UpgradePlan): UpgradePlanAmino;
    fromAminoMsg(object: UpgradePlanAminoMsg): UpgradePlan;
    fromProtoMsg(message: UpgradePlanProtoMsg): UpgradePlan;
    toProto(message: UpgradePlan): Uint8Array;
    toProtoMsg(message: UpgradePlan): UpgradePlanProtoMsg;
};
export declare const Funder: {
    typeUrl: string;
    encode(message: Funder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Funder;
    fromPartial(object: Partial<Funder>): Funder;
    fromAmino(object: FunderAmino): Funder;
    toAmino(message: Funder): FunderAmino;
    fromAminoMsg(object: FunderAminoMsg): Funder;
    fromProtoMsg(message: FunderProtoMsg): Funder;
    toProto(message: Funder): Uint8Array;
    toProtoMsg(message: Funder): FunderProtoMsg;
};
export declare const Pool: {
    typeUrl: string;
    encode(message: Pool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Pool;
    fromPartial(object: Partial<Pool>): Pool;
    fromAmino(object: PoolAmino): Pool;
    toAmino(message: Pool): PoolAmino;
    fromAminoMsg(object: PoolAminoMsg): Pool;
    fromProtoMsg(message: PoolProtoMsg): Pool;
    toProto(message: Pool): Uint8Array;
    toProtoMsg(message: Pool): PoolProtoMsg;
};
