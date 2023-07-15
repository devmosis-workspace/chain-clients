import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** PoolStatus ... */
export enum PoolStatus {
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
  UNRECOGNIZED = -1,
}
export const PoolStatusSDKType = PoolStatus;
export function poolStatusFromJSON(object: any): PoolStatus {
  switch (object) {
    case 0:
    case "POOL_STATUS_UNSPECIFIED":
      return PoolStatus.POOL_STATUS_UNSPECIFIED;
    case 1:
    case "POOL_STATUS_ACTIVE":
      return PoolStatus.POOL_STATUS_ACTIVE;
    case 2:
    case "POOL_STATUS_DISABLED":
      return PoolStatus.POOL_STATUS_DISABLED;
    case 3:
    case "POOL_STATUS_NO_FUNDS":
      return PoolStatus.POOL_STATUS_NO_FUNDS;
    case 4:
    case "POOL_STATUS_NOT_ENOUGH_DELEGATION":
      return PoolStatus.POOL_STATUS_NOT_ENOUGH_DELEGATION;
    case 5:
    case "POOL_STATUS_UPGRADING":
      return PoolStatus.POOL_STATUS_UPGRADING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PoolStatus.UNRECOGNIZED;
  }
}
export function poolStatusToJSON(object: PoolStatus): string {
  switch (object) {
    case PoolStatus.POOL_STATUS_UNSPECIFIED:
      return "POOL_STATUS_UNSPECIFIED";
    case PoolStatus.POOL_STATUS_ACTIVE:
      return "POOL_STATUS_ACTIVE";
    case PoolStatus.POOL_STATUS_DISABLED:
      return "POOL_STATUS_DISABLED";
    case PoolStatus.POOL_STATUS_NO_FUNDS:
      return "POOL_STATUS_NO_FUNDS";
    case PoolStatus.POOL_STATUS_NOT_ENOUGH_DELEGATION:
      return "POOL_STATUS_NOT_ENOUGH_DELEGATION";
    case PoolStatus.POOL_STATUS_UPGRADING:
      return "POOL_STATUS_UPGRADING";
    case PoolStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
function createBaseProtocol(): Protocol {
  return {
    version: "",
    binaries: "",
    lastUpgrade: Long.UZERO
  };
}
export const Protocol = {
  encode(message: Protocol, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.binaries !== "") {
      writer.uint32(18).string(message.binaries);
    }
    if (!message.lastUpgrade.isZero()) {
      writer.uint32(24).uint64(message.lastUpgrade);
    }
    return writer;
  },
  fromJSON(object: any): Protocol {
    return {
      version: isSet(object.version) ? String(object.version) : "",
      binaries: isSet(object.binaries) ? String(object.binaries) : "",
      lastUpgrade: isSet(object.lastUpgrade) ? Long.fromValue(object.lastUpgrade) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Protocol>): Protocol {
    const message = createBaseProtocol();
    message.version = object.version ?? "";
    message.binaries = object.binaries ?? "";
    message.lastUpgrade = object.lastUpgrade !== undefined && object.lastUpgrade !== null ? Long.fromValue(object.lastUpgrade) : Long.UZERO;
    return message;
  }
};
function createBaseUpgradePlan(): UpgradePlan {
  return {
    version: "",
    binaries: "",
    scheduledAt: Long.UZERO,
    duration: Long.UZERO
  };
}
export const UpgradePlan = {
  encode(message: UpgradePlan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.binaries !== "") {
      writer.uint32(18).string(message.binaries);
    }
    if (!message.scheduledAt.isZero()) {
      writer.uint32(24).uint64(message.scheduledAt);
    }
    if (!message.duration.isZero()) {
      writer.uint32(32).uint64(message.duration);
    }
    return writer;
  },
  fromJSON(object: any): UpgradePlan {
    return {
      version: isSet(object.version) ? String(object.version) : "",
      binaries: isSet(object.binaries) ? String(object.binaries) : "",
      scheduledAt: isSet(object.scheduledAt) ? Long.fromValue(object.scheduledAt) : Long.UZERO,
      duration: isSet(object.duration) ? Long.fromValue(object.duration) : Long.UZERO
    };
  },
  fromPartial(object: Partial<UpgradePlan>): UpgradePlan {
    const message = createBaseUpgradePlan();
    message.version = object.version ?? "";
    message.binaries = object.binaries ?? "";
    message.scheduledAt = object.scheduledAt !== undefined && object.scheduledAt !== null ? Long.fromValue(object.scheduledAt) : Long.UZERO;
    message.duration = object.duration !== undefined && object.duration !== null ? Long.fromValue(object.duration) : Long.UZERO;
    return message;
  }
};
function createBaseFunder(): Funder {
  return {
    address: "",
    amount: Long.UZERO
  };
}
export const Funder = {
  encode(message: Funder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.amount.isZero()) {
      writer.uint32(16).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): Funder {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Funder>): Funder {
    const message = createBaseFunder();
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }
};
function createBasePool(): Pool {
  return {
    id: Long.UZERO,
    name: "",
    runtime: "",
    logo: "",
    config: "",
    startKey: "",
    currentKey: "",
    currentSummary: "",
    currentIndex: Long.UZERO,
    totalBundles: Long.UZERO,
    uploadInterval: Long.UZERO,
    operatingCost: Long.UZERO,
    minDelegation: Long.UZERO,
    maxBundleSize: Long.UZERO,
    disabled: false,
    funders: [],
    totalFunds: Long.UZERO,
    protocol: undefined,
    upgradePlan: undefined,
    currentStorageProviderId: 0,
    currentCompressionId: 0
  };
}
export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.currentKey !== "") {
      writer.uint32(58).string(message.currentKey);
    }
    if (message.currentSummary !== "") {
      writer.uint32(66).string(message.currentSummary);
    }
    if (!message.currentIndex.isZero()) {
      writer.uint32(72).uint64(message.currentIndex);
    }
    if (!message.totalBundles.isZero()) {
      writer.uint32(80).uint64(message.totalBundles);
    }
    if (!message.uploadInterval.isZero()) {
      writer.uint32(88).uint64(message.uploadInterval);
    }
    if (!message.operatingCost.isZero()) {
      writer.uint32(96).uint64(message.operatingCost);
    }
    if (!message.minDelegation.isZero()) {
      writer.uint32(104).uint64(message.minDelegation);
    }
    if (!message.maxBundleSize.isZero()) {
      writer.uint32(112).uint64(message.maxBundleSize);
    }
    if (message.disabled === true) {
      writer.uint32(120).bool(message.disabled);
    }
    for (const v of message.funders) {
      Funder.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    if (!message.totalFunds.isZero()) {
      writer.uint32(136).uint64(message.totalFunds);
    }
    if (message.protocol !== undefined) {
      Protocol.encode(message.protocol, writer.uint32(146).fork()).ldelim();
    }
    if (message.upgradePlan !== undefined) {
      UpgradePlan.encode(message.upgradePlan, writer.uint32(154).fork()).ldelim();
    }
    if (message.currentStorageProviderId !== 0) {
      writer.uint32(160).uint32(message.currentStorageProviderId);
    }
    if (message.currentCompressionId !== 0) {
      writer.uint32(168).uint32(message.currentCompressionId);
    }
    return writer;
  },
  fromJSON(object: any): Pool {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
      config: isSet(object.config) ? String(object.config) : "",
      startKey: isSet(object.startKey) ? String(object.startKey) : "",
      currentKey: isSet(object.currentKey) ? String(object.currentKey) : "",
      currentSummary: isSet(object.currentSummary) ? String(object.currentSummary) : "",
      currentIndex: isSet(object.currentIndex) ? Long.fromValue(object.currentIndex) : Long.UZERO,
      totalBundles: isSet(object.totalBundles) ? Long.fromValue(object.totalBundles) : Long.UZERO,
      uploadInterval: isSet(object.uploadInterval) ? Long.fromValue(object.uploadInterval) : Long.UZERO,
      operatingCost: isSet(object.operatingCost) ? Long.fromValue(object.operatingCost) : Long.UZERO,
      minDelegation: isSet(object.minDelegation) ? Long.fromValue(object.minDelegation) : Long.UZERO,
      maxBundleSize: isSet(object.maxBundleSize) ? Long.fromValue(object.maxBundleSize) : Long.UZERO,
      disabled: isSet(object.disabled) ? Boolean(object.disabled) : false,
      funders: Array.isArray(object?.funders) ? object.funders.map((e: any) => Funder.fromJSON(e)) : [],
      totalFunds: isSet(object.totalFunds) ? Long.fromValue(object.totalFunds) : Long.UZERO,
      protocol: isSet(object.protocol) ? Protocol.fromJSON(object.protocol) : undefined,
      upgradePlan: isSet(object.upgradePlan) ? UpgradePlan.fromJSON(object.upgradePlan) : undefined,
      currentStorageProviderId: isSet(object.currentStorageProviderId) ? Number(object.currentStorageProviderId) : 0,
      currentCompressionId: isSet(object.currentCompressionId) ? Number(object.currentCompressionId) : 0
    };
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.name = object.name ?? "";
    message.runtime = object.runtime ?? "";
    message.logo = object.logo ?? "";
    message.config = object.config ?? "";
    message.startKey = object.startKey ?? "";
    message.currentKey = object.currentKey ?? "";
    message.currentSummary = object.currentSummary ?? "";
    message.currentIndex = object.currentIndex !== undefined && object.currentIndex !== null ? Long.fromValue(object.currentIndex) : Long.UZERO;
    message.totalBundles = object.totalBundles !== undefined && object.totalBundles !== null ? Long.fromValue(object.totalBundles) : Long.UZERO;
    message.uploadInterval = object.uploadInterval !== undefined && object.uploadInterval !== null ? Long.fromValue(object.uploadInterval) : Long.UZERO;
    message.operatingCost = object.operatingCost !== undefined && object.operatingCost !== null ? Long.fromValue(object.operatingCost) : Long.UZERO;
    message.minDelegation = object.minDelegation !== undefined && object.minDelegation !== null ? Long.fromValue(object.minDelegation) : Long.UZERO;
    message.maxBundleSize = object.maxBundleSize !== undefined && object.maxBundleSize !== null ? Long.fromValue(object.maxBundleSize) : Long.UZERO;
    message.disabled = object.disabled ?? false;
    message.funders = object.funders?.map(e => Funder.fromPartial(e)) || [];
    message.totalFunds = object.totalFunds !== undefined && object.totalFunds !== null ? Long.fromValue(object.totalFunds) : Long.UZERO;
    message.protocol = object.protocol !== undefined && object.protocol !== null ? Protocol.fromPartial(object.protocol) : undefined;
    message.upgradePlan = object.upgradePlan !== undefined && object.upgradePlan !== null ? UpgradePlan.fromPartial(object.upgradePlan) : undefined;
    message.currentStorageProviderId = object.currentStorageProviderId ?? 0;
    message.currentCompressionId = object.currentCompressionId ?? 0;
    return message;
  }
};