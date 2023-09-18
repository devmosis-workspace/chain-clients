import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
  payload: string;
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
   * operating_cost is the fixed cost which gets paid out
   * to every successful uploader
   */
  operatingCost: bigint;
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
  id: string;
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
  start_key: string;
  /**
   * upload_interval is the interval the pool should validate
   * bundles with
   */
  upload_interval: string;
  /**
   * operating_cost is the fixed cost which gets paid out
   * to every successful uploader
   */
  operating_cost: string;
  /**
   * min_delegation is the minimum amount of $KYVE the pool has
   * to have in order to produce bundles
   */
  min_delegation: string;
  /**
   * max_bundle_size is the max size a data bundle can have
   * (amount of data items)
   */
  max_bundle_size: string;
  /** version is the current version of the protocol nodes */
  version: string;
  /** binaries points to the current binaries of the protocol node */
  binaries: string;
  /**
   * storage_provider_id is the unique id of the storage provider
   * the pool is archiving the data on
   */
  storage_provider_id: number;
  /**
   * compression_id is the unique id of the compression type the bundles
   * get compressed with
   */
  compression_id: number;
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
  operating_cost: bigint;
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
  id: string;
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
  id: string;
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
  runtime: string;
  /** version is the new version that the runtime will be upgraded to. */
  version: string;
  /** scheduled_at is the time in UNIX seconds when the upgrade will occur. */
  scheduled_at: string;
  /**
   * duration is the amount of seconds the pool will be paused after the
   * scheduled time is reached. This will give node operators time to upgrade
   * their node.
   */
  duration: string;
  /** binaries contain download links for prebuilt binaries (in JSON format). */
  binaries: string;
  /** affected_pools contains all IDs of pools that will be affected by this runtime upgrade. */
  affected_pools: string[];
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
  runtime: string;
  /**
   * affected_pools contains all IDs of pools that are affected by the
   * cancellation of this runtime upgrade.
   */
  affected_pools: string[];
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
   * operating_cost is the fixed cost which gets paid out
   * to every successful uploader
   */
  operatingCost: bigint;
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
  id: string;
  /** raw update string */
  raw_update_string: string;
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
  upload_interval: string;
  /**
   * operating_cost is the fixed cost which gets paid out
   * to every successful uploader
   */
  operating_cost: string;
  /**
   * min_delegation is the minimum amount of $KYVE the pool has
   * to have in order to produce bundles
   */
  min_delegation: string;
  /**
   * max_bundle_size is the max size a data bundle can have
   * (amount of data items)
   */
  max_bundle_size: string;
  /**
   * storage_provider_id is the unique id of the storage provider
   * the pool is archiving the data on
   */
  storage_provider_id: number;
  /**
   * compression_id is the unique id of the compression type the bundles
   * get compressed with
   */
  compression_id: number;
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
  operating_cost: bigint;
  min_delegation: bigint;
  max_bundle_size: bigint;
  storage_provider_id: number;
  compression_id: number;
}
/**
 * EventFundPool is an event emitted when a pool is funded.
 * emitted_by: MsgFundPool
 */
export interface EventFundPool {
  /** pool_id is the unique ID of the pool. */
  poolId: bigint;
  /** address is the account address of the pool funder. */
  address: string;
  /** amount is the amount in ukyve the funder has funded */
  amount: bigint;
}
export interface EventFundPoolProtoMsg {
  typeUrl: "/kyve.pool.v1beta1.EventFundPool";
  value: Uint8Array;
}
/**
 * EventFundPool is an event emitted when a pool is funded.
 * emitted_by: MsgFundPool
 */
export interface EventFundPoolAmino {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** address is the account address of the pool funder. */
  address: string;
  /** amount is the amount in ukyve the funder has funded */
  amount: string;
}
export interface EventFundPoolAminoMsg {
  type: "/kyve.pool.v1beta1.EventFundPool";
  value: EventFundPoolAmino;
}
/**
 * EventFundPool is an event emitted when a pool is funded.
 * emitted_by: MsgFundPool
 */
export interface EventFundPoolSDKType {
  pool_id: bigint;
  address: string;
  amount: bigint;
}
/**
 * EventDefundPool is an event emitted when a pool is defunded.
 * emitted_by: MsgDefundPool
 */
export interface EventDefundPool {
  /** pool_id is the unique ID of the pool. */
  poolId: bigint;
  /** address is the account address of the pool funder. */
  address: string;
  /** amount is the amount in ukyve the funder has defunded */
  amount: bigint;
}
export interface EventDefundPoolProtoMsg {
  typeUrl: "/kyve.pool.v1beta1.EventDefundPool";
  value: Uint8Array;
}
/**
 * EventDefundPool is an event emitted when a pool is defunded.
 * emitted_by: MsgDefundPool
 */
export interface EventDefundPoolAmino {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** address is the account address of the pool funder. */
  address: string;
  /** amount is the amount in ukyve the funder has defunded */
  amount: string;
}
export interface EventDefundPoolAminoMsg {
  type: "/kyve.pool.v1beta1.EventDefundPool";
  value: EventDefundPoolAmino;
}
/**
 * EventDefundPool is an event emitted when a pool is defunded.
 * emitted_by: MsgDefundPool
 */
export interface EventDefundPoolSDKType {
  pool_id: bigint;
  address: string;
  amount: bigint;
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
  pool_id: string;
  /** address is the account address of the pool funder. */
  address: string;
  /** amount is the amount in ukyve the validator has lost due to the slash */
  amount: string;
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
/**
 * EventPoolOutOfFunds is an event emitted when a pool has run out of funds
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventPoolOutOfFunds {
  /** pool_id is the unique ID of the pool. */
  poolId: bigint;
}
export interface EventPoolOutOfFundsProtoMsg {
  typeUrl: "/kyve.pool.v1beta1.EventPoolOutOfFunds";
  value: Uint8Array;
}
/**
 * EventPoolOutOfFunds is an event emitted when a pool has run out of funds
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventPoolOutOfFundsAmino {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
}
export interface EventPoolOutOfFundsAminoMsg {
  type: "/kyve.pool.v1beta1.EventPoolOutOfFunds";
  value: EventPoolOutOfFundsAmino;
}
/**
 * EventPoolOutOfFunds is an event emitted when a pool has run out of funds
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventPoolOutOfFundsSDKType {
  pool_id: bigint;
}
function createBaseEventUpdateParams(): EventUpdateParams {
  return {
    oldParams: Params.fromPartial({}),
    newParams: Params.fromPartial({}),
    payload: ""
  };
}
export const EventUpdateParams = {
  typeUrl: "/kyve.pool.v1beta1.EventUpdateParams",
  encode(message: EventUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oldParams !== undefined) {
      Params.encode(message.oldParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.newParams !== undefined) {
      Params.encode(message.newParams, writer.uint32(18).fork()).ldelim();
    }
    if (message.payload !== "") {
      writer.uint32(26).string(message.payload);
    }
    return writer;
  },
  fromJSON(object: any): EventUpdateParams {
    return {
      oldParams: isSet(object.oldParams) ? Params.fromJSON(object.oldParams) : undefined,
      newParams: isSet(object.newParams) ? Params.fromJSON(object.newParams) : undefined,
      payload: isSet(object.payload) ? String(object.payload) : ""
    };
  },
  fromPartial(object: Partial<EventUpdateParams>): EventUpdateParams {
    const message = createBaseEventUpdateParams();
    message.oldParams = object.oldParams !== undefined && object.oldParams !== null ? Params.fromPartial(object.oldParams) : undefined;
    message.newParams = object.newParams !== undefined && object.newParams !== null ? Params.fromPartial(object.newParams) : undefined;
    message.payload = object.payload ?? "";
    return message;
  },
  fromAmino(object: EventUpdateParamsAmino): EventUpdateParams {
    return {
      oldParams: object?.old_params ? Params.fromAmino(object.old_params) : undefined,
      newParams: object?.new_params ? Params.fromAmino(object.new_params) : undefined,
      payload: object.payload
    };
  },
  toAmino(message: EventUpdateParams): EventUpdateParamsAmino {
    const obj: any = {};
    obj.old_params = message.oldParams ? Params.toAmino(message.oldParams) : undefined;
    obj.new_params = message.newParams ? Params.toAmino(message.newParams) : undefined;
    obj.payload = message.payload;
    return obj;
  },
  fromAminoMsg(object: EventUpdateParamsAminoMsg): EventUpdateParams {
    return EventUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateParamsProtoMsg): EventUpdateParams {
    return EventUpdateParams.decode(message.value);
  },
  toProto(message: EventUpdateParams): Uint8Array {
    return EventUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateParams): EventUpdateParamsProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.EventUpdateParams",
      value: EventUpdateParams.encode(message).finish()
    };
  }
};
function createBaseEventCreatePool(): EventCreatePool {
  return {
    id: BigInt(0),
    name: "",
    runtime: "",
    logo: "",
    config: "",
    startKey: "",
    uploadInterval: BigInt(0),
    operatingCost: BigInt(0),
    minDelegation: BigInt(0),
    maxBundleSize: BigInt(0),
    version: "",
    binaries: "",
    storageProviderId: 0,
    compressionId: 0
  };
}
export const EventCreatePool = {
  typeUrl: "/kyve.pool.v1beta1.EventCreatePool",
  encode(message: EventCreatePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.runtime !== "") {
      writer.uint32(26).string(message.runtime);
    }
    if (message.logo !== "") {
      writer.uint32(34).string(message.logo);
    }
    if (message.config !== "") {
      writer.uint32(42).string(message.config);
    }
    if (message.startKey !== "") {
      writer.uint32(50).string(message.startKey);
    }
    if (message.uploadInterval !== BigInt(0)) {
      writer.uint32(56).uint64(message.uploadInterval);
    }
    if (message.operatingCost !== BigInt(0)) {
      writer.uint32(64).uint64(message.operatingCost);
    }
    if (message.minDelegation !== BigInt(0)) {
      writer.uint32(72).uint64(message.minDelegation);
    }
    if (message.maxBundleSize !== BigInt(0)) {
      writer.uint32(80).uint64(message.maxBundleSize);
    }
    if (message.version !== "") {
      writer.uint32(90).string(message.version);
    }
    if (message.binaries !== "") {
      writer.uint32(98).string(message.binaries);
    }
    if (message.storageProviderId !== 0) {
      writer.uint32(104).uint32(message.storageProviderId);
    }
    if (message.compressionId !== 0) {
      writer.uint32(112).uint32(message.compressionId);
    }
    return writer;
  },
  fromJSON(object: any): EventCreatePool {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      name: isSet(object.name) ? String(object.name) : "",
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
      config: isSet(object.config) ? String(object.config) : "",
      startKey: isSet(object.startKey) ? String(object.startKey) : "",
      uploadInterval: isSet(object.uploadInterval) ? BigInt(object.uploadInterval.toString()) : BigInt(0),
      operatingCost: isSet(object.operatingCost) ? BigInt(object.operatingCost.toString()) : BigInt(0),
      minDelegation: isSet(object.minDelegation) ? BigInt(object.minDelegation.toString()) : BigInt(0),
      maxBundleSize: isSet(object.maxBundleSize) ? BigInt(object.maxBundleSize.toString()) : BigInt(0),
      version: isSet(object.version) ? String(object.version) : "",
      binaries: isSet(object.binaries) ? String(object.binaries) : "",
      storageProviderId: isSet(object.storageProviderId) ? Number(object.storageProviderId) : 0,
      compressionId: isSet(object.compressionId) ? Number(object.compressionId) : 0
    };
  },
  fromPartial(object: Partial<EventCreatePool>): EventCreatePool {
    const message = createBaseEventCreatePool();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.runtime = object.runtime ?? "";
    message.logo = object.logo ?? "";
    message.config = object.config ?? "";
    message.startKey = object.startKey ?? "";
    message.uploadInterval = object.uploadInterval !== undefined && object.uploadInterval !== null ? BigInt(object.uploadInterval.toString()) : BigInt(0);
    message.operatingCost = object.operatingCost !== undefined && object.operatingCost !== null ? BigInt(object.operatingCost.toString()) : BigInt(0);
    message.minDelegation = object.minDelegation !== undefined && object.minDelegation !== null ? BigInt(object.minDelegation.toString()) : BigInt(0);
    message.maxBundleSize = object.maxBundleSize !== undefined && object.maxBundleSize !== null ? BigInt(object.maxBundleSize.toString()) : BigInt(0);
    message.version = object.version ?? "";
    message.binaries = object.binaries ?? "";
    message.storageProviderId = object.storageProviderId ?? 0;
    message.compressionId = object.compressionId ?? 0;
    return message;
  },
  fromAmino(object: EventCreatePoolAmino): EventCreatePool {
    return {
      id: BigInt(object.id),
      name: object.name,
      runtime: object.runtime,
      logo: object.logo,
      config: object.config,
      startKey: object.start_key,
      uploadInterval: BigInt(object.upload_interval),
      operatingCost: BigInt(object.operating_cost),
      minDelegation: BigInt(object.min_delegation),
      maxBundleSize: BigInt(object.max_bundle_size),
      version: object.version,
      binaries: object.binaries,
      storageProviderId: object.storage_provider_id,
      compressionId: object.compression_id
    };
  },
  toAmino(message: EventCreatePool): EventCreatePoolAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.name = message.name;
    obj.runtime = message.runtime;
    obj.logo = message.logo;
    obj.config = message.config;
    obj.start_key = message.startKey;
    obj.upload_interval = message.uploadInterval ? message.uploadInterval.toString() : undefined;
    obj.operating_cost = message.operatingCost ? message.operatingCost.toString() : undefined;
    obj.min_delegation = message.minDelegation ? message.minDelegation.toString() : undefined;
    obj.max_bundle_size = message.maxBundleSize ? message.maxBundleSize.toString() : undefined;
    obj.version = message.version;
    obj.binaries = message.binaries;
    obj.storage_provider_id = message.storageProviderId;
    obj.compression_id = message.compressionId;
    return obj;
  },
  fromAminoMsg(object: EventCreatePoolAminoMsg): EventCreatePool {
    return EventCreatePool.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreatePoolProtoMsg): EventCreatePool {
    return EventCreatePool.decode(message.value);
  },
  toProto(message: EventCreatePool): Uint8Array {
    return EventCreatePool.encode(message).finish();
  },
  toProtoMsg(message: EventCreatePool): EventCreatePoolProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.EventCreatePool",
      value: EventCreatePool.encode(message).finish()
    };
  }
};
function createBaseEventPoolEnabled(): EventPoolEnabled {
  return {
    id: BigInt(0)
  };
}
export const EventPoolEnabled = {
  typeUrl: "/kyve.pool.v1beta1.EventPoolEnabled",
  encode(message: EventPoolEnabled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): EventPoolEnabled {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventPoolEnabled>): EventPoolEnabled {
    const message = createBaseEventPoolEnabled();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventPoolEnabledAmino): EventPoolEnabled {
    return {
      id: BigInt(object.id)
    };
  },
  toAmino(message: EventPoolEnabled): EventPoolEnabledAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventPoolEnabledAminoMsg): EventPoolEnabled {
    return EventPoolEnabled.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPoolEnabledProtoMsg): EventPoolEnabled {
    return EventPoolEnabled.decode(message.value);
  },
  toProto(message: EventPoolEnabled): Uint8Array {
    return EventPoolEnabled.encode(message).finish();
  },
  toProtoMsg(message: EventPoolEnabled): EventPoolEnabledProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.EventPoolEnabled",
      value: EventPoolEnabled.encode(message).finish()
    };
  }
};
function createBaseEventPoolDisabled(): EventPoolDisabled {
  return {
    id: BigInt(0)
  };
}
export const EventPoolDisabled = {
  typeUrl: "/kyve.pool.v1beta1.EventPoolDisabled",
  encode(message: EventPoolDisabled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): EventPoolDisabled {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventPoolDisabled>): EventPoolDisabled {
    const message = createBaseEventPoolDisabled();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventPoolDisabledAmino): EventPoolDisabled {
    return {
      id: BigInt(object.id)
    };
  },
  toAmino(message: EventPoolDisabled): EventPoolDisabledAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventPoolDisabledAminoMsg): EventPoolDisabled {
    return EventPoolDisabled.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPoolDisabledProtoMsg): EventPoolDisabled {
    return EventPoolDisabled.decode(message.value);
  },
  toProto(message: EventPoolDisabled): Uint8Array {
    return EventPoolDisabled.encode(message).finish();
  },
  toProtoMsg(message: EventPoolDisabled): EventPoolDisabledProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.EventPoolDisabled",
      value: EventPoolDisabled.encode(message).finish()
    };
  }
};
function createBaseEventRuntimeUpgradeScheduled(): EventRuntimeUpgradeScheduled {
  return {
    runtime: "",
    version: "",
    scheduledAt: BigInt(0),
    duration: BigInt(0),
    binaries: "",
    affectedPools: []
  };
}
export const EventRuntimeUpgradeScheduled = {
  typeUrl: "/kyve.pool.v1beta1.EventRuntimeUpgradeScheduled",
  encode(message: EventRuntimeUpgradeScheduled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.runtime !== "") {
      writer.uint32(10).string(message.runtime);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.scheduledAt !== BigInt(0)) {
      writer.uint32(24).uint64(message.scheduledAt);
    }
    if (message.duration !== BigInt(0)) {
      writer.uint32(32).uint64(message.duration);
    }
    if (message.binaries !== "") {
      writer.uint32(42).string(message.binaries);
    }
    writer.uint32(50).fork();
    for (const v of message.affectedPools) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): EventRuntimeUpgradeScheduled {
    return {
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      version: isSet(object.version) ? String(object.version) : "",
      scheduledAt: isSet(object.scheduledAt) ? BigInt(object.scheduledAt.toString()) : BigInt(0),
      duration: isSet(object.duration) ? BigInt(object.duration.toString()) : BigInt(0),
      binaries: isSet(object.binaries) ? String(object.binaries) : "",
      affectedPools: Array.isArray(object?.affectedPools) ? object.affectedPools.map((e: any) => BigInt(e.toString())) : []
    };
  },
  fromPartial(object: Partial<EventRuntimeUpgradeScheduled>): EventRuntimeUpgradeScheduled {
    const message = createBaseEventRuntimeUpgradeScheduled();
    message.runtime = object.runtime ?? "";
    message.version = object.version ?? "";
    message.scheduledAt = object.scheduledAt !== undefined && object.scheduledAt !== null ? BigInt(object.scheduledAt.toString()) : BigInt(0);
    message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
    message.binaries = object.binaries ?? "";
    message.affectedPools = object.affectedPools?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: EventRuntimeUpgradeScheduledAmino): EventRuntimeUpgradeScheduled {
    return {
      runtime: object.runtime,
      version: object.version,
      scheduledAt: BigInt(object.scheduled_at),
      duration: BigInt(object.duration),
      binaries: object.binaries,
      affectedPools: Array.isArray(object?.affected_pools) ? object.affected_pools.map((e: any) => BigInt(e)) : []
    };
  },
  toAmino(message: EventRuntimeUpgradeScheduled): EventRuntimeUpgradeScheduledAmino {
    const obj: any = {};
    obj.runtime = message.runtime;
    obj.version = message.version;
    obj.scheduled_at = message.scheduledAt ? message.scheduledAt.toString() : undefined;
    obj.duration = message.duration ? message.duration.toString() : undefined;
    obj.binaries = message.binaries;
    if (message.affectedPools) {
      obj.affected_pools = message.affectedPools.map(e => e.toString());
    } else {
      obj.affected_pools = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventRuntimeUpgradeScheduledAminoMsg): EventRuntimeUpgradeScheduled {
    return EventRuntimeUpgradeScheduled.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRuntimeUpgradeScheduledProtoMsg): EventRuntimeUpgradeScheduled {
    return EventRuntimeUpgradeScheduled.decode(message.value);
  },
  toProto(message: EventRuntimeUpgradeScheduled): Uint8Array {
    return EventRuntimeUpgradeScheduled.encode(message).finish();
  },
  toProtoMsg(message: EventRuntimeUpgradeScheduled): EventRuntimeUpgradeScheduledProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.EventRuntimeUpgradeScheduled",
      value: EventRuntimeUpgradeScheduled.encode(message).finish()
    };
  }
};
function createBaseEventRuntimeUpgradeCancelled(): EventRuntimeUpgradeCancelled {
  return {
    runtime: "",
    affectedPools: []
  };
}
export const EventRuntimeUpgradeCancelled = {
  typeUrl: "/kyve.pool.v1beta1.EventRuntimeUpgradeCancelled",
  encode(message: EventRuntimeUpgradeCancelled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.runtime !== "") {
      writer.uint32(10).string(message.runtime);
    }
    writer.uint32(18).fork();
    for (const v of message.affectedPools) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): EventRuntimeUpgradeCancelled {
    return {
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      affectedPools: Array.isArray(object?.affectedPools) ? object.affectedPools.map((e: any) => BigInt(e.toString())) : []
    };
  },
  fromPartial(object: Partial<EventRuntimeUpgradeCancelled>): EventRuntimeUpgradeCancelled {
    const message = createBaseEventRuntimeUpgradeCancelled();
    message.runtime = object.runtime ?? "";
    message.affectedPools = object.affectedPools?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: EventRuntimeUpgradeCancelledAmino): EventRuntimeUpgradeCancelled {
    return {
      runtime: object.runtime,
      affectedPools: Array.isArray(object?.affected_pools) ? object.affected_pools.map((e: any) => BigInt(e)) : []
    };
  },
  toAmino(message: EventRuntimeUpgradeCancelled): EventRuntimeUpgradeCancelledAmino {
    const obj: any = {};
    obj.runtime = message.runtime;
    if (message.affectedPools) {
      obj.affected_pools = message.affectedPools.map(e => e.toString());
    } else {
      obj.affected_pools = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventRuntimeUpgradeCancelledAminoMsg): EventRuntimeUpgradeCancelled {
    return EventRuntimeUpgradeCancelled.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRuntimeUpgradeCancelledProtoMsg): EventRuntimeUpgradeCancelled {
    return EventRuntimeUpgradeCancelled.decode(message.value);
  },
  toProto(message: EventRuntimeUpgradeCancelled): Uint8Array {
    return EventRuntimeUpgradeCancelled.encode(message).finish();
  },
  toProtoMsg(message: EventRuntimeUpgradeCancelled): EventRuntimeUpgradeCancelledProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.EventRuntimeUpgradeCancelled",
      value: EventRuntimeUpgradeCancelled.encode(message).finish()
    };
  }
};
function createBaseEventPoolUpdated(): EventPoolUpdated {
  return {
    id: BigInt(0),
    rawUpdateString: "",
    name: "",
    runtime: "",
    logo: "",
    config: "",
    uploadInterval: BigInt(0),
    operatingCost: BigInt(0),
    minDelegation: BigInt(0),
    maxBundleSize: BigInt(0),
    storageProviderId: 0,
    compressionId: 0
  };
}
export const EventPoolUpdated = {
  typeUrl: "/kyve.pool.v1beta1.EventPoolUpdated",
  encode(message: EventPoolUpdated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.rawUpdateString !== "") {
      writer.uint32(18).string(message.rawUpdateString);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.runtime !== "") {
      writer.uint32(34).string(message.runtime);
    }
    if (message.logo !== "") {
      writer.uint32(42).string(message.logo);
    }
    if (message.config !== "") {
      writer.uint32(50).string(message.config);
    }
    if (message.uploadInterval !== BigInt(0)) {
      writer.uint32(56).uint64(message.uploadInterval);
    }
    if (message.operatingCost !== BigInt(0)) {
      writer.uint32(64).uint64(message.operatingCost);
    }
    if (message.minDelegation !== BigInt(0)) {
      writer.uint32(72).uint64(message.minDelegation);
    }
    if (message.maxBundleSize !== BigInt(0)) {
      writer.uint32(80).uint64(message.maxBundleSize);
    }
    if (message.storageProviderId !== 0) {
      writer.uint32(88).uint32(message.storageProviderId);
    }
    if (message.compressionId !== 0) {
      writer.uint32(96).uint32(message.compressionId);
    }
    return writer;
  },
  fromJSON(object: any): EventPoolUpdated {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      rawUpdateString: isSet(object.rawUpdateString) ? String(object.rawUpdateString) : "",
      name: isSet(object.name) ? String(object.name) : "",
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
      config: isSet(object.config) ? String(object.config) : "",
      uploadInterval: isSet(object.uploadInterval) ? BigInt(object.uploadInterval.toString()) : BigInt(0),
      operatingCost: isSet(object.operatingCost) ? BigInt(object.operatingCost.toString()) : BigInt(0),
      minDelegation: isSet(object.minDelegation) ? BigInt(object.minDelegation.toString()) : BigInt(0),
      maxBundleSize: isSet(object.maxBundleSize) ? BigInt(object.maxBundleSize.toString()) : BigInt(0),
      storageProviderId: isSet(object.storageProviderId) ? Number(object.storageProviderId) : 0,
      compressionId: isSet(object.compressionId) ? Number(object.compressionId) : 0
    };
  },
  fromPartial(object: Partial<EventPoolUpdated>): EventPoolUpdated {
    const message = createBaseEventPoolUpdated();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.rawUpdateString = object.rawUpdateString ?? "";
    message.name = object.name ?? "";
    message.runtime = object.runtime ?? "";
    message.logo = object.logo ?? "";
    message.config = object.config ?? "";
    message.uploadInterval = object.uploadInterval !== undefined && object.uploadInterval !== null ? BigInt(object.uploadInterval.toString()) : BigInt(0);
    message.operatingCost = object.operatingCost !== undefined && object.operatingCost !== null ? BigInt(object.operatingCost.toString()) : BigInt(0);
    message.minDelegation = object.minDelegation !== undefined && object.minDelegation !== null ? BigInt(object.minDelegation.toString()) : BigInt(0);
    message.maxBundleSize = object.maxBundleSize !== undefined && object.maxBundleSize !== null ? BigInt(object.maxBundleSize.toString()) : BigInt(0);
    message.storageProviderId = object.storageProviderId ?? 0;
    message.compressionId = object.compressionId ?? 0;
    return message;
  },
  fromAmino(object: EventPoolUpdatedAmino): EventPoolUpdated {
    return {
      id: BigInt(object.id),
      rawUpdateString: object.raw_update_string,
      name: object.name,
      runtime: object.runtime,
      logo: object.logo,
      config: object.config,
      uploadInterval: BigInt(object.upload_interval),
      operatingCost: BigInt(object.operating_cost),
      minDelegation: BigInt(object.min_delegation),
      maxBundleSize: BigInt(object.max_bundle_size),
      storageProviderId: object.storage_provider_id,
      compressionId: object.compression_id
    };
  },
  toAmino(message: EventPoolUpdated): EventPoolUpdatedAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.raw_update_string = message.rawUpdateString;
    obj.name = message.name;
    obj.runtime = message.runtime;
    obj.logo = message.logo;
    obj.config = message.config;
    obj.upload_interval = message.uploadInterval ? message.uploadInterval.toString() : undefined;
    obj.operating_cost = message.operatingCost ? message.operatingCost.toString() : undefined;
    obj.min_delegation = message.minDelegation ? message.minDelegation.toString() : undefined;
    obj.max_bundle_size = message.maxBundleSize ? message.maxBundleSize.toString() : undefined;
    obj.storage_provider_id = message.storageProviderId;
    obj.compression_id = message.compressionId;
    return obj;
  },
  fromAminoMsg(object: EventPoolUpdatedAminoMsg): EventPoolUpdated {
    return EventPoolUpdated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPoolUpdatedProtoMsg): EventPoolUpdated {
    return EventPoolUpdated.decode(message.value);
  },
  toProto(message: EventPoolUpdated): Uint8Array {
    return EventPoolUpdated.encode(message).finish();
  },
  toProtoMsg(message: EventPoolUpdated): EventPoolUpdatedProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.EventPoolUpdated",
      value: EventPoolUpdated.encode(message).finish()
    };
  }
};
function createBaseEventFundPool(): EventFundPool {
  return {
    poolId: BigInt(0),
    address: "",
    amount: BigInt(0)
  };
}
export const EventFundPool = {
  typeUrl: "/kyve.pool.v1beta1.EventFundPool",
  encode(message: EventFundPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventFundPool {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventFundPool>): EventFundPool {
    const message = createBaseEventFundPool();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventFundPoolAmino): EventFundPool {
    return {
      poolId: BigInt(object.pool_id),
      address: object.address,
      amount: BigInt(object.amount)
    };
  },
  toAmino(message: EventFundPool): EventFundPoolAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.address = message.address;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventFundPoolAminoMsg): EventFundPool {
    return EventFundPool.fromAmino(object.value);
  },
  fromProtoMsg(message: EventFundPoolProtoMsg): EventFundPool {
    return EventFundPool.decode(message.value);
  },
  toProto(message: EventFundPool): Uint8Array {
    return EventFundPool.encode(message).finish();
  },
  toProtoMsg(message: EventFundPool): EventFundPoolProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.EventFundPool",
      value: EventFundPool.encode(message).finish()
    };
  }
};
function createBaseEventDefundPool(): EventDefundPool {
  return {
    poolId: BigInt(0),
    address: "",
    amount: BigInt(0)
  };
}
export const EventDefundPool = {
  typeUrl: "/kyve.pool.v1beta1.EventDefundPool",
  encode(message: EventDefundPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventDefundPool {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventDefundPool>): EventDefundPool {
    const message = createBaseEventDefundPool();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventDefundPoolAmino): EventDefundPool {
    return {
      poolId: BigInt(object.pool_id),
      address: object.address,
      amount: BigInt(object.amount)
    };
  },
  toAmino(message: EventDefundPool): EventDefundPoolAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.address = message.address;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventDefundPoolAminoMsg): EventDefundPool {
    return EventDefundPool.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDefundPoolProtoMsg): EventDefundPool {
    return EventDefundPool.decode(message.value);
  },
  toProto(message: EventDefundPool): Uint8Array {
    return EventDefundPool.encode(message).finish();
  },
  toProtoMsg(message: EventDefundPool): EventDefundPoolProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.EventDefundPool",
      value: EventDefundPool.encode(message).finish()
    };
  }
};
function createBaseEventPoolFundsSlashed(): EventPoolFundsSlashed {
  return {
    poolId: BigInt(0),
    address: "",
    amount: BigInt(0)
  };
}
export const EventPoolFundsSlashed = {
  typeUrl: "/kyve.pool.v1beta1.EventPoolFundsSlashed",
  encode(message: EventPoolFundsSlashed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventPoolFundsSlashed {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventPoolFundsSlashed>): EventPoolFundsSlashed {
    const message = createBaseEventPoolFundsSlashed();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventPoolFundsSlashedAmino): EventPoolFundsSlashed {
    return {
      poolId: BigInt(object.pool_id),
      address: object.address,
      amount: BigInt(object.amount)
    };
  },
  toAmino(message: EventPoolFundsSlashed): EventPoolFundsSlashedAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.address = message.address;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventPoolFundsSlashedAminoMsg): EventPoolFundsSlashed {
    return EventPoolFundsSlashed.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPoolFundsSlashedProtoMsg): EventPoolFundsSlashed {
    return EventPoolFundsSlashed.decode(message.value);
  },
  toProto(message: EventPoolFundsSlashed): Uint8Array {
    return EventPoolFundsSlashed.encode(message).finish();
  },
  toProtoMsg(message: EventPoolFundsSlashed): EventPoolFundsSlashedProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.EventPoolFundsSlashed",
      value: EventPoolFundsSlashed.encode(message).finish()
    };
  }
};
function createBaseEventPoolOutOfFunds(): EventPoolOutOfFunds {
  return {
    poolId: BigInt(0)
  };
}
export const EventPoolOutOfFunds = {
  typeUrl: "/kyve.pool.v1beta1.EventPoolOutOfFunds",
  encode(message: EventPoolOutOfFunds, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  fromJSON(object: any): EventPoolOutOfFunds {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventPoolOutOfFunds>): EventPoolOutOfFunds {
    const message = createBaseEventPoolOutOfFunds();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventPoolOutOfFundsAmino): EventPoolOutOfFunds {
    return {
      poolId: BigInt(object.pool_id)
    };
  },
  toAmino(message: EventPoolOutOfFunds): EventPoolOutOfFundsAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventPoolOutOfFundsAminoMsg): EventPoolOutOfFunds {
    return EventPoolOutOfFunds.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPoolOutOfFundsProtoMsg): EventPoolOutOfFunds {
    return EventPoolOutOfFunds.decode(message.value);
  },
  toProto(message: EventPoolOutOfFunds): Uint8Array {
    return EventPoolOutOfFunds.encode(message).finish();
  },
  toProtoMsg(message: EventPoolOutOfFunds): EventPoolOutOfFundsProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.EventPoolOutOfFunds",
      value: EventPoolOutOfFunds.encode(message).finish()
    };
  }
};