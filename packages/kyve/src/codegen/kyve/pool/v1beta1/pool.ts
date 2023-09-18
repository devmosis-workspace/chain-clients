import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
export const PoolStatusAmino = PoolStatus;
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
function createBaseProtocol(): Protocol {
  return {
    version: "",
    binaries: "",
    lastUpgrade: BigInt(0)
  };
}
export const Protocol = {
  typeUrl: "/kyve.pool.v1beta1.Protocol",
  encode(message: Protocol, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.binaries !== "") {
      writer.uint32(18).string(message.binaries);
    }
    if (message.lastUpgrade !== BigInt(0)) {
      writer.uint32(24).uint64(message.lastUpgrade);
    }
    return writer;
  },
  fromJSON(object: any): Protocol {
    return {
      version: isSet(object.version) ? String(object.version) : "",
      binaries: isSet(object.binaries) ? String(object.binaries) : "",
      lastUpgrade: isSet(object.lastUpgrade) ? BigInt(object.lastUpgrade.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Protocol>): Protocol {
    const message = createBaseProtocol();
    message.version = object.version ?? "";
    message.binaries = object.binaries ?? "";
    message.lastUpgrade = object.lastUpgrade !== undefined && object.lastUpgrade !== null ? BigInt(object.lastUpgrade.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ProtocolAmino): Protocol {
    return {
      version: object.version,
      binaries: object.binaries,
      lastUpgrade: BigInt(object.last_upgrade)
    };
  },
  toAmino(message: Protocol): ProtocolAmino {
    const obj: any = {};
    obj.version = message.version;
    obj.binaries = message.binaries;
    obj.last_upgrade = message.lastUpgrade ? message.lastUpgrade.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ProtocolAminoMsg): Protocol {
    return Protocol.fromAmino(object.value);
  },
  fromProtoMsg(message: ProtocolProtoMsg): Protocol {
    return Protocol.decode(message.value);
  },
  toProto(message: Protocol): Uint8Array {
    return Protocol.encode(message).finish();
  },
  toProtoMsg(message: Protocol): ProtocolProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.Protocol",
      value: Protocol.encode(message).finish()
    };
  }
};
function createBaseUpgradePlan(): UpgradePlan {
  return {
    version: "",
    binaries: "",
    scheduledAt: BigInt(0),
    duration: BigInt(0)
  };
}
export const UpgradePlan = {
  typeUrl: "/kyve.pool.v1beta1.UpgradePlan",
  encode(message: UpgradePlan, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.binaries !== "") {
      writer.uint32(18).string(message.binaries);
    }
    if (message.scheduledAt !== BigInt(0)) {
      writer.uint32(24).uint64(message.scheduledAt);
    }
    if (message.duration !== BigInt(0)) {
      writer.uint32(32).uint64(message.duration);
    }
    return writer;
  },
  fromJSON(object: any): UpgradePlan {
    return {
      version: isSet(object.version) ? String(object.version) : "",
      binaries: isSet(object.binaries) ? String(object.binaries) : "",
      scheduledAt: isSet(object.scheduledAt) ? BigInt(object.scheduledAt.toString()) : BigInt(0),
      duration: isSet(object.duration) ? BigInt(object.duration.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<UpgradePlan>): UpgradePlan {
    const message = createBaseUpgradePlan();
    message.version = object.version ?? "";
    message.binaries = object.binaries ?? "";
    message.scheduledAt = object.scheduledAt !== undefined && object.scheduledAt !== null ? BigInt(object.scheduledAt.toString()) : BigInt(0);
    message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: UpgradePlanAmino): UpgradePlan {
    return {
      version: object.version,
      binaries: object.binaries,
      scheduledAt: BigInt(object.scheduled_at),
      duration: BigInt(object.duration)
    };
  },
  toAmino(message: UpgradePlan): UpgradePlanAmino {
    const obj: any = {};
    obj.version = message.version;
    obj.binaries = message.binaries;
    obj.scheduled_at = message.scheduledAt ? message.scheduledAt.toString() : undefined;
    obj.duration = message.duration ? message.duration.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: UpgradePlanAminoMsg): UpgradePlan {
    return UpgradePlan.fromAmino(object.value);
  },
  fromProtoMsg(message: UpgradePlanProtoMsg): UpgradePlan {
    return UpgradePlan.decode(message.value);
  },
  toProto(message: UpgradePlan): Uint8Array {
    return UpgradePlan.encode(message).finish();
  },
  toProtoMsg(message: UpgradePlan): UpgradePlanProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.UpgradePlan",
      value: UpgradePlan.encode(message).finish()
    };
  }
};
function createBaseFunder(): Funder {
  return {
    address: "",
    amount: BigInt(0)
  };
}
export const Funder = {
  typeUrl: "/kyve.pool.v1beta1.Funder",
  encode(message: Funder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(16).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): Funder {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Funder>): Funder {
    const message = createBaseFunder();
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: FunderAmino): Funder {
    return {
      address: object.address,
      amount: BigInt(object.amount)
    };
  },
  toAmino(message: Funder): FunderAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: FunderAminoMsg): Funder {
    return Funder.fromAmino(object.value);
  },
  fromProtoMsg(message: FunderProtoMsg): Funder {
    return Funder.decode(message.value);
  },
  toProto(message: Funder): Uint8Array {
    return Funder.encode(message).finish();
  },
  toProtoMsg(message: Funder): FunderProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.Funder",
      value: Funder.encode(message).finish()
    };
  }
};
function createBasePool(): Pool {
  return {
    id: BigInt(0),
    name: "",
    runtime: "",
    logo: "",
    config: "",
    startKey: "",
    currentKey: "",
    currentSummary: "",
    currentIndex: BigInt(0),
    totalBundles: BigInt(0),
    uploadInterval: BigInt(0),
    operatingCost: BigInt(0),
    minDelegation: BigInt(0),
    maxBundleSize: BigInt(0),
    disabled: false,
    funders: [],
    totalFunds: BigInt(0),
    protocol: Protocol.fromPartial({}),
    upgradePlan: UpgradePlan.fromPartial({}),
    currentStorageProviderId: 0,
    currentCompressionId: 0
  };
}
export const Pool = {
  typeUrl: "/kyve.pool.v1beta1.Pool",
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.currentKey !== "") {
      writer.uint32(58).string(message.currentKey);
    }
    if (message.currentSummary !== "") {
      writer.uint32(66).string(message.currentSummary);
    }
    if (message.currentIndex !== BigInt(0)) {
      writer.uint32(72).uint64(message.currentIndex);
    }
    if (message.totalBundles !== BigInt(0)) {
      writer.uint32(80).uint64(message.totalBundles);
    }
    if (message.uploadInterval !== BigInt(0)) {
      writer.uint32(88).uint64(message.uploadInterval);
    }
    if (message.operatingCost !== BigInt(0)) {
      writer.uint32(96).uint64(message.operatingCost);
    }
    if (message.minDelegation !== BigInt(0)) {
      writer.uint32(104).uint64(message.minDelegation);
    }
    if (message.maxBundleSize !== BigInt(0)) {
      writer.uint32(112).uint64(message.maxBundleSize);
    }
    if (message.disabled === true) {
      writer.uint32(120).bool(message.disabled);
    }
    for (const v of message.funders) {
      Funder.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    if (message.totalFunds !== BigInt(0)) {
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      name: isSet(object.name) ? String(object.name) : "",
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
      config: isSet(object.config) ? String(object.config) : "",
      startKey: isSet(object.startKey) ? String(object.startKey) : "",
      currentKey: isSet(object.currentKey) ? String(object.currentKey) : "",
      currentSummary: isSet(object.currentSummary) ? String(object.currentSummary) : "",
      currentIndex: isSet(object.currentIndex) ? BigInt(object.currentIndex.toString()) : BigInt(0),
      totalBundles: isSet(object.totalBundles) ? BigInt(object.totalBundles.toString()) : BigInt(0),
      uploadInterval: isSet(object.uploadInterval) ? BigInt(object.uploadInterval.toString()) : BigInt(0),
      operatingCost: isSet(object.operatingCost) ? BigInt(object.operatingCost.toString()) : BigInt(0),
      minDelegation: isSet(object.minDelegation) ? BigInt(object.minDelegation.toString()) : BigInt(0),
      maxBundleSize: isSet(object.maxBundleSize) ? BigInt(object.maxBundleSize.toString()) : BigInt(0),
      disabled: isSet(object.disabled) ? Boolean(object.disabled) : false,
      funders: Array.isArray(object?.funders) ? object.funders.map((e: any) => Funder.fromJSON(e)) : [],
      totalFunds: isSet(object.totalFunds) ? BigInt(object.totalFunds.toString()) : BigInt(0),
      protocol: isSet(object.protocol) ? Protocol.fromJSON(object.protocol) : undefined,
      upgradePlan: isSet(object.upgradePlan) ? UpgradePlan.fromJSON(object.upgradePlan) : undefined,
      currentStorageProviderId: isSet(object.currentStorageProviderId) ? Number(object.currentStorageProviderId) : 0,
      currentCompressionId: isSet(object.currentCompressionId) ? Number(object.currentCompressionId) : 0
    };
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.runtime = object.runtime ?? "";
    message.logo = object.logo ?? "";
    message.config = object.config ?? "";
    message.startKey = object.startKey ?? "";
    message.currentKey = object.currentKey ?? "";
    message.currentSummary = object.currentSummary ?? "";
    message.currentIndex = object.currentIndex !== undefined && object.currentIndex !== null ? BigInt(object.currentIndex.toString()) : BigInt(0);
    message.totalBundles = object.totalBundles !== undefined && object.totalBundles !== null ? BigInt(object.totalBundles.toString()) : BigInt(0);
    message.uploadInterval = object.uploadInterval !== undefined && object.uploadInterval !== null ? BigInt(object.uploadInterval.toString()) : BigInt(0);
    message.operatingCost = object.operatingCost !== undefined && object.operatingCost !== null ? BigInt(object.operatingCost.toString()) : BigInt(0);
    message.minDelegation = object.minDelegation !== undefined && object.minDelegation !== null ? BigInt(object.minDelegation.toString()) : BigInt(0);
    message.maxBundleSize = object.maxBundleSize !== undefined && object.maxBundleSize !== null ? BigInt(object.maxBundleSize.toString()) : BigInt(0);
    message.disabled = object.disabled ?? false;
    message.funders = object.funders?.map(e => Funder.fromPartial(e)) || [];
    message.totalFunds = object.totalFunds !== undefined && object.totalFunds !== null ? BigInt(object.totalFunds.toString()) : BigInt(0);
    message.protocol = object.protocol !== undefined && object.protocol !== null ? Protocol.fromPartial(object.protocol) : undefined;
    message.upgradePlan = object.upgradePlan !== undefined && object.upgradePlan !== null ? UpgradePlan.fromPartial(object.upgradePlan) : undefined;
    message.currentStorageProviderId = object.currentStorageProviderId ?? 0;
    message.currentCompressionId = object.currentCompressionId ?? 0;
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    return {
      id: BigInt(object.id),
      name: object.name,
      runtime: object.runtime,
      logo: object.logo,
      config: object.config,
      startKey: object.start_key,
      currentKey: object.current_key,
      currentSummary: object.current_summary,
      currentIndex: BigInt(object.current_index),
      totalBundles: BigInt(object.total_bundles),
      uploadInterval: BigInt(object.upload_interval),
      operatingCost: BigInt(object.operating_cost),
      minDelegation: BigInt(object.min_delegation),
      maxBundleSize: BigInt(object.max_bundle_size),
      disabled: object.disabled,
      funders: Array.isArray(object?.funders) ? object.funders.map((e: any) => Funder.fromAmino(e)) : [],
      totalFunds: BigInt(object.total_funds),
      protocol: object?.protocol ? Protocol.fromAmino(object.protocol) : undefined,
      upgradePlan: object?.upgrade_plan ? UpgradePlan.fromAmino(object.upgrade_plan) : undefined,
      currentStorageProviderId: object.current_storage_provider_id,
      currentCompressionId: object.current_compression_id
    };
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.name = message.name;
    obj.runtime = message.runtime;
    obj.logo = message.logo;
    obj.config = message.config;
    obj.start_key = message.startKey;
    obj.current_key = message.currentKey;
    obj.current_summary = message.currentSummary;
    obj.current_index = message.currentIndex ? message.currentIndex.toString() : undefined;
    obj.total_bundles = message.totalBundles ? message.totalBundles.toString() : undefined;
    obj.upload_interval = message.uploadInterval ? message.uploadInterval.toString() : undefined;
    obj.operating_cost = message.operatingCost ? message.operatingCost.toString() : undefined;
    obj.min_delegation = message.minDelegation ? message.minDelegation.toString() : undefined;
    obj.max_bundle_size = message.maxBundleSize ? message.maxBundleSize.toString() : undefined;
    obj.disabled = message.disabled;
    if (message.funders) {
      obj.funders = message.funders.map(e => e ? Funder.toAmino(e) : undefined);
    } else {
      obj.funders = [];
    }
    obj.total_funds = message.totalFunds ? message.totalFunds.toString() : undefined;
    obj.protocol = message.protocol ? Protocol.toAmino(message.protocol) : undefined;
    obj.upgrade_plan = message.upgradePlan ? UpgradePlan.toAmino(message.upgradePlan) : undefined;
    obj.current_storage_provider_id = message.currentStorageProviderId;
    obj.current_compression_id = message.currentCompressionId;
    return obj;
  },
  fromAminoMsg(object: PoolAminoMsg): Pool {
    return Pool.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolProtoMsg): Pool {
    return Pool.decode(message.value);
  },
  toProto(message: Pool): Uint8Array {
    return Pool.encode(message).finish();
  },
  toProtoMsg(message: Pool): PoolProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.Pool",
      value: Pool.encode(message).finish()
    };
  }
};