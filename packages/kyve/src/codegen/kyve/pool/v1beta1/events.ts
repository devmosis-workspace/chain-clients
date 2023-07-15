import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
function createBaseEventCreatePool(): EventCreatePool {
  return {
    id: Long.UZERO,
    name: "",
    runtime: "",
    logo: "",
    config: "",
    startKey: "",
    uploadInterval: Long.UZERO,
    operatingCost: Long.UZERO,
    minDelegation: Long.UZERO,
    maxBundleSize: Long.UZERO,
    version: "",
    binaries: "",
    storageProviderId: 0,
    compressionId: 0
  };
}
export const EventCreatePool = {
  encode(message: EventCreatePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
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
    if (!message.uploadInterval.isZero()) {
      writer.uint32(56).uint64(message.uploadInterval);
    }
    if (!message.operatingCost.isZero()) {
      writer.uint32(64).uint64(message.operatingCost);
    }
    if (!message.minDelegation.isZero()) {
      writer.uint32(72).uint64(message.minDelegation);
    }
    if (!message.maxBundleSize.isZero()) {
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
      config: isSet(object.config) ? String(object.config) : "",
      startKey: isSet(object.startKey) ? String(object.startKey) : "",
      uploadInterval: isSet(object.uploadInterval) ? Long.fromValue(object.uploadInterval) : Long.UZERO,
      operatingCost: isSet(object.operatingCost) ? Long.fromValue(object.operatingCost) : Long.UZERO,
      minDelegation: isSet(object.minDelegation) ? Long.fromValue(object.minDelegation) : Long.UZERO,
      maxBundleSize: isSet(object.maxBundleSize) ? Long.fromValue(object.maxBundleSize) : Long.UZERO,
      version: isSet(object.version) ? String(object.version) : "",
      binaries: isSet(object.binaries) ? String(object.binaries) : "",
      storageProviderId: isSet(object.storageProviderId) ? Number(object.storageProviderId) : 0,
      compressionId: isSet(object.compressionId) ? Number(object.compressionId) : 0
    };
  },
  fromPartial(object: Partial<EventCreatePool>): EventCreatePool {
    const message = createBaseEventCreatePool();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.name = object.name ?? "";
    message.runtime = object.runtime ?? "";
    message.logo = object.logo ?? "";
    message.config = object.config ?? "";
    message.startKey = object.startKey ?? "";
    message.uploadInterval = object.uploadInterval !== undefined && object.uploadInterval !== null ? Long.fromValue(object.uploadInterval) : Long.UZERO;
    message.operatingCost = object.operatingCost !== undefined && object.operatingCost !== null ? Long.fromValue(object.operatingCost) : Long.UZERO;
    message.minDelegation = object.minDelegation !== undefined && object.minDelegation !== null ? Long.fromValue(object.minDelegation) : Long.UZERO;
    message.maxBundleSize = object.maxBundleSize !== undefined && object.maxBundleSize !== null ? Long.fromValue(object.maxBundleSize) : Long.UZERO;
    message.version = object.version ?? "";
    message.binaries = object.binaries ?? "";
    message.storageProviderId = object.storageProviderId ?? 0;
    message.compressionId = object.compressionId ?? 0;
    return message;
  }
};
function createBaseEventPoolEnabled(): EventPoolEnabled {
  return {
    id: Long.UZERO
  };
}
export const EventPoolEnabled = {
  encode(message: EventPoolEnabled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): EventPoolEnabled {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  fromPartial(object: Partial<EventPoolEnabled>): EventPoolEnabled {
    const message = createBaseEventPoolEnabled();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseEventPoolDisabled(): EventPoolDisabled {
  return {
    id: Long.UZERO
  };
}
export const EventPoolDisabled = {
  encode(message: EventPoolDisabled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): EventPoolDisabled {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  fromPartial(object: Partial<EventPoolDisabled>): EventPoolDisabled {
    const message = createBaseEventPoolDisabled();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseEventRuntimeUpgradeScheduled(): EventRuntimeUpgradeScheduled {
  return {
    runtime: "",
    version: "",
    scheduledAt: Long.UZERO,
    duration: Long.UZERO,
    binaries: "",
    affectedPools: []
  };
}
export const EventRuntimeUpgradeScheduled = {
  encode(message: EventRuntimeUpgradeScheduled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.runtime !== "") {
      writer.uint32(10).string(message.runtime);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (!message.scheduledAt.isZero()) {
      writer.uint32(24).uint64(message.scheduledAt);
    }
    if (!message.duration.isZero()) {
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
      scheduledAt: isSet(object.scheduledAt) ? Long.fromValue(object.scheduledAt) : Long.UZERO,
      duration: isSet(object.duration) ? Long.fromValue(object.duration) : Long.UZERO,
      binaries: isSet(object.binaries) ? String(object.binaries) : "",
      affectedPools: Array.isArray(object?.affectedPools) ? object.affectedPools.map((e: any) => Long.fromValue(e)) : []
    };
  },
  fromPartial(object: Partial<EventRuntimeUpgradeScheduled>): EventRuntimeUpgradeScheduled {
    const message = createBaseEventRuntimeUpgradeScheduled();
    message.runtime = object.runtime ?? "";
    message.version = object.version ?? "";
    message.scheduledAt = object.scheduledAt !== undefined && object.scheduledAt !== null ? Long.fromValue(object.scheduledAt) : Long.UZERO;
    message.duration = object.duration !== undefined && object.duration !== null ? Long.fromValue(object.duration) : Long.UZERO;
    message.binaries = object.binaries ?? "";
    message.affectedPools = object.affectedPools?.map(e => Long.fromValue(e)) || [];
    return message;
  }
};
function createBaseEventRuntimeUpgradeCancelled(): EventRuntimeUpgradeCancelled {
  return {
    runtime: "",
    affectedPools: []
  };
}
export const EventRuntimeUpgradeCancelled = {
  encode(message: EventRuntimeUpgradeCancelled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      affectedPools: Array.isArray(object?.affectedPools) ? object.affectedPools.map((e: any) => Long.fromValue(e)) : []
    };
  },
  fromPartial(object: Partial<EventRuntimeUpgradeCancelled>): EventRuntimeUpgradeCancelled {
    const message = createBaseEventRuntimeUpgradeCancelled();
    message.runtime = object.runtime ?? "";
    message.affectedPools = object.affectedPools?.map(e => Long.fromValue(e)) || [];
    return message;
  }
};
function createBaseEventPoolUpdated(): EventPoolUpdated {
  return {
    id: Long.UZERO,
    rawUpdateString: "",
    name: "",
    runtime: "",
    logo: "",
    config: "",
    uploadInterval: Long.UZERO,
    operatingCost: Long.UZERO,
    minDelegation: Long.UZERO,
    maxBundleSize: Long.UZERO,
    storageProviderId: 0,
    compressionId: 0
  };
}
export const EventPoolUpdated = {
  encode(message: EventPoolUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
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
    if (!message.uploadInterval.isZero()) {
      writer.uint32(56).uint64(message.uploadInterval);
    }
    if (!message.operatingCost.isZero()) {
      writer.uint32(64).uint64(message.operatingCost);
    }
    if (!message.minDelegation.isZero()) {
      writer.uint32(72).uint64(message.minDelegation);
    }
    if (!message.maxBundleSize.isZero()) {
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      rawUpdateString: isSet(object.rawUpdateString) ? String(object.rawUpdateString) : "",
      name: isSet(object.name) ? String(object.name) : "",
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
      config: isSet(object.config) ? String(object.config) : "",
      uploadInterval: isSet(object.uploadInterval) ? Long.fromValue(object.uploadInterval) : Long.UZERO,
      operatingCost: isSet(object.operatingCost) ? Long.fromValue(object.operatingCost) : Long.UZERO,
      minDelegation: isSet(object.minDelegation) ? Long.fromValue(object.minDelegation) : Long.UZERO,
      maxBundleSize: isSet(object.maxBundleSize) ? Long.fromValue(object.maxBundleSize) : Long.UZERO,
      storageProviderId: isSet(object.storageProviderId) ? Number(object.storageProviderId) : 0,
      compressionId: isSet(object.compressionId) ? Number(object.compressionId) : 0
    };
  },
  fromPartial(object: Partial<EventPoolUpdated>): EventPoolUpdated {
    const message = createBaseEventPoolUpdated();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.rawUpdateString = object.rawUpdateString ?? "";
    message.name = object.name ?? "";
    message.runtime = object.runtime ?? "";
    message.logo = object.logo ?? "";
    message.config = object.config ?? "";
    message.uploadInterval = object.uploadInterval !== undefined && object.uploadInterval !== null ? Long.fromValue(object.uploadInterval) : Long.UZERO;
    message.operatingCost = object.operatingCost !== undefined && object.operatingCost !== null ? Long.fromValue(object.operatingCost) : Long.UZERO;
    message.minDelegation = object.minDelegation !== undefined && object.minDelegation !== null ? Long.fromValue(object.minDelegation) : Long.UZERO;
    message.maxBundleSize = object.maxBundleSize !== undefined && object.maxBundleSize !== null ? Long.fromValue(object.maxBundleSize) : Long.UZERO;
    message.storageProviderId = object.storageProviderId ?? 0;
    message.compressionId = object.compressionId ?? 0;
    return message;
  }
};
function createBaseEventFundPool(): EventFundPool {
  return {
    poolId: Long.UZERO,
    address: "",
    amount: Long.UZERO
  };
}
export const EventFundPool = {
  encode(message: EventFundPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (!message.amount.isZero()) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventFundPool {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<EventFundPool>): EventFundPool {
    const message = createBaseEventFundPool();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }
};
function createBaseEventDefundPool(): EventDefundPool {
  return {
    poolId: Long.UZERO,
    address: "",
    amount: Long.UZERO
  };
}
export const EventDefundPool = {
  encode(message: EventDefundPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (!message.amount.isZero()) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventDefundPool {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<EventDefundPool>): EventDefundPool {
    const message = createBaseEventDefundPool();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }
};
function createBaseEventPoolFundsSlashed(): EventPoolFundsSlashed {
  return {
    poolId: Long.UZERO,
    address: "",
    amount: Long.UZERO
  };
}
export const EventPoolFundsSlashed = {
  encode(message: EventPoolFundsSlashed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (!message.amount.isZero()) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventPoolFundsSlashed {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<EventPoolFundsSlashed>): EventPoolFundsSlashed {
    const message = createBaseEventPoolFundsSlashed();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }
};
function createBaseEventPoolOutOfFunds(): EventPoolOutOfFunds {
  return {
    poolId: Long.UZERO
  };
}
export const EventPoolOutOfFunds = {
  encode(message: EventPoolOutOfFunds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  fromJSON(object: any): EventPoolOutOfFunds {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<EventPoolOutOfFunds>): EventPoolOutOfFunds {
    const message = createBaseEventPoolOutOfFunds();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }
};