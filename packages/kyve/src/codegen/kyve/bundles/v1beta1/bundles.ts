import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * BundleStatus represents the status of an evaluated bundle
 * proposal.
 */
export enum BundleStatus {
  /** BUNDLE_STATUS_UNSPECIFIED - BUNDLE_STATUS_UNSPECIFIED ... */
  BUNDLE_STATUS_UNSPECIFIED = 0,
  /** BUNDLE_STATUS_VALID - BUNDLE_STATUS_VALID ... */
  BUNDLE_STATUS_VALID = 1,
  /** BUNDLE_STATUS_INVALID - BUNDLE_STATUS_INVALID ... */
  BUNDLE_STATUS_INVALID = 2,
  /** BUNDLE_STATUS_NO_FUNDS - BUNDLE_STATUS_NO_FUNDS ... */
  BUNDLE_STATUS_NO_FUNDS = 3,
  /** BUNDLE_STATUS_NO_QUORUM - BUNDLE_STATUS_NO_QUORUM ... */
  BUNDLE_STATUS_NO_QUORUM = 4,
  /** BUNDLE_STATUS_DISABLED - BUNDLE_STATUS_DISABLED  ... */
  BUNDLE_STATUS_DISABLED = 5,
  UNRECOGNIZED = -1,
}
export const BundleStatusSDKType = BundleStatus;
export function bundleStatusFromJSON(object: any): BundleStatus {
  switch (object) {
    case 0:
    case "BUNDLE_STATUS_UNSPECIFIED":
      return BundleStatus.BUNDLE_STATUS_UNSPECIFIED;
    case 1:
    case "BUNDLE_STATUS_VALID":
      return BundleStatus.BUNDLE_STATUS_VALID;
    case 2:
    case "BUNDLE_STATUS_INVALID":
      return BundleStatus.BUNDLE_STATUS_INVALID;
    case 3:
    case "BUNDLE_STATUS_NO_FUNDS":
      return BundleStatus.BUNDLE_STATUS_NO_FUNDS;
    case 4:
    case "BUNDLE_STATUS_NO_QUORUM":
      return BundleStatus.BUNDLE_STATUS_NO_QUORUM;
    case 5:
    case "BUNDLE_STATUS_DISABLED":
      return BundleStatus.BUNDLE_STATUS_DISABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BundleStatus.UNRECOGNIZED;
  }
}
export function bundleStatusToJSON(object: BundleStatus): string {
  switch (object) {
    case BundleStatus.BUNDLE_STATUS_UNSPECIFIED:
      return "BUNDLE_STATUS_UNSPECIFIED";
    case BundleStatus.BUNDLE_STATUS_VALID:
      return "BUNDLE_STATUS_VALID";
    case BundleStatus.BUNDLE_STATUS_INVALID:
      return "BUNDLE_STATUS_INVALID";
    case BundleStatus.BUNDLE_STATUS_NO_FUNDS:
      return "BUNDLE_STATUS_NO_FUNDS";
    case BundleStatus.BUNDLE_STATUS_NO_QUORUM:
      return "BUNDLE_STATUS_NO_QUORUM";
    case BundleStatus.BUNDLE_STATUS_DISABLED:
      return "BUNDLE_STATUS_DISABLED";
    case BundleStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * BundleProposal represents the current bundle proposal
 * of a storage pool
 */
export interface BundleProposal {
  /** pool_id is the id of the pool for which this proposal is for */
  poolId: Long;
  /** storage_id is the id with which the data can be retrieved from */
  storageId: string;
  /** uploader is the address of the staker who submitted the current proposal */
  uploader: string;
  /** next_uploader is the address of the staker who should upload the next proposal */
  nextUploader: string;
  /** data_size the size of the data in bytes */
  dataSize: Long;
  /** bundle_size the size of the bundle (amount of data items) */
  bundleSize: Long;
  /** to_key the key of the last data item in the bundle proposal */
  toKey: string;
  /** bundle_summary a string summary of the current proposal */
  bundleSummary: string;
  /** data_hash a sha256 hash of the raw compressed data */
  dataHash: string;
  /** updated_at the last time this proposal was edited */
  updatedAt: Long;
  /** voters_valid list of all stakers who voted in favor for current proposal */
  votersValid: string[];
  /** voters_invalid list of all stakers who voted against for current proposal */
  votersInvalid: string[];
  /** voters_abstain list of all stakers who voted abstain for current proposal */
  votersAbstain: string[];
  /** from_key the key of the first data item in the bundle proposal */
  fromKey: string;
  /** storage_provider_id the id of the storage provider where the bundle is stored */
  storageProviderId: number;
  /** compression_id the id of the compression type with which the data was compressed */
  compressionId: number;
}
/**
 * BundleProposal represents the current bundle proposal
 * of a storage pool
 */
export interface BundleProposalSDKType {
  pool_id: Long;
  storage_id: string;
  uploader: string;
  next_uploader: string;
  data_size: Long;
  bundle_size: Long;
  to_key: string;
  bundle_summary: string;
  data_hash: string;
  updated_at: Long;
  voters_valid: string[];
  voters_invalid: string[];
  voters_abstain: string[];
  from_key: string;
  storage_provider_id: number;
  compression_id: number;
}
/**
 * FinalizedBundle represents a bundle proposal where the majority
 * agreed on its validity
 */
export interface FinalizedBundle {
  /** pool_id is the id of the pool for which this proposal is for */
  poolId: Long;
  /** id is a unique identifier for each finalized bundle in a pool */
  id: Long;
  /** storage_id is the id with which the data can be retrieved from */
  storageId: string;
  /** uploader is the address of the staker who submitted this bundle */
  uploader: string;
  /** from_index is the index from where the bundle starts (inclusive) */
  fromIndex: Long;
  /** to_index is the index to which the bundle goes (exclusive) */
  toIndex: Long;
  /** to_key the key of the last data item in the bundle proposal */
  toKey: string;
  /** bundle_summary a string summary of the current proposal */
  bundleSummary: string;
  /** data_hash a sha256 hash of the raw compressed data */
  dataHash: string;
  /** finalized_at contains details of the block that finalized this bundle. */
  finalizedAt?: FinalizedAt;
  /** from_key the key of the first data item in the bundle proposal */
  fromKey: string;
  /** storage_provider_id the id of the storage provider where the bundle is stored */
  storageProviderId: number;
  /** compression_id the id of the compression type with which the data was compressed */
  compressionId: number;
  /** stake_security */
  stakeSecurity?: StakeSecurity;
}
/**
 * FinalizedBundle represents a bundle proposal where the majority
 * agreed on its validity
 */
export interface FinalizedBundleSDKType {
  pool_id: Long;
  id: Long;
  storage_id: string;
  uploader: string;
  from_index: Long;
  to_index: Long;
  to_key: string;
  bundle_summary: string;
  data_hash: string;
  finalized_at?: FinalizedAtSDKType;
  from_key: string;
  storage_provider_id: number;
  compression_id: number;
  stake_security?: StakeSecuritySDKType;
}
/** FinalizedAt ... */
export interface FinalizedAt {
  /** height ... */
  height: Long;
  /** timestamp ... */
  timestamp: Long;
}
/** FinalizedAt ... */
export interface FinalizedAtSDKType {
  height: Long;
  timestamp: Long;
}
/** StakeSecurity stores information about total stake and valid votes with which the bundle got finalized. */
export interface StakeSecurity {
  /** valid_vote_power is the total amount of stake of all pool stakers which voted valid for the given bundle. */
  validVotePower: Long;
  /** total_vote_power is the total amount of stake that was present during the finalization of the bundle */
  totalVotePower: Long;
}
/** StakeSecurity stores information about total stake and valid votes with which the bundle got finalized. */
export interface StakeSecuritySDKType {
  valid_vote_power: Long;
  total_vote_power: Long;
}
/** BundleVersionEntry ... */
export interface BundleVersionEntry {
  /** height ... */
  height: Long;
  /** version ... */
  version: number;
}
/** BundleVersionEntry ... */
export interface BundleVersionEntrySDKType {
  height: Long;
  version: number;
}
/** BundleVersionMap ... */
export interface BundleVersionMap {
  /** versions ... */
  versions: BundleVersionEntry[];
}
/** BundleVersionMap ... */
export interface BundleVersionMapSDKType {
  versions: BundleVersionEntrySDKType[];
}
/** RoundRobinSingleValidatorProgress ... */
export interface RoundRobinSingleValidatorProgress {
  /** address ... */
  address: string;
  /** progress ... */
  progress: Long;
}
/** RoundRobinSingleValidatorProgress ... */
export interface RoundRobinSingleValidatorProgressSDKType {
  address: string;
  progress: Long;
}
/** RoundRobinProgress ... */
export interface RoundRobinProgress {
  /** pool_id ... */
  poolId: Long;
  /** progress_list ... */
  progressList: RoundRobinSingleValidatorProgress[];
}
/** RoundRobinProgress ... */
export interface RoundRobinProgressSDKType {
  pool_id: Long;
  progress_list: RoundRobinSingleValidatorProgressSDKType[];
}
function createBaseBundleProposal(): BundleProposal {
  return {
    poolId: Long.UZERO,
    storageId: "",
    uploader: "",
    nextUploader: "",
    dataSize: Long.UZERO,
    bundleSize: Long.UZERO,
    toKey: "",
    bundleSummary: "",
    dataHash: "",
    updatedAt: Long.UZERO,
    votersValid: [],
    votersInvalid: [],
    votersAbstain: [],
    fromKey: "",
    storageProviderId: 0,
    compressionId: 0
  };
}
export const BundleProposal = {
  encode(message: BundleProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.storageId !== "") {
      writer.uint32(18).string(message.storageId);
    }
    if (message.uploader !== "") {
      writer.uint32(26).string(message.uploader);
    }
    if (message.nextUploader !== "") {
      writer.uint32(34).string(message.nextUploader);
    }
    if (!message.dataSize.isZero()) {
      writer.uint32(40).uint64(message.dataSize);
    }
    if (!message.bundleSize.isZero()) {
      writer.uint32(48).uint64(message.bundleSize);
    }
    if (message.toKey !== "") {
      writer.uint32(58).string(message.toKey);
    }
    if (message.bundleSummary !== "") {
      writer.uint32(66).string(message.bundleSummary);
    }
    if (message.dataHash !== "") {
      writer.uint32(74).string(message.dataHash);
    }
    if (!message.updatedAt.isZero()) {
      writer.uint32(80).uint64(message.updatedAt);
    }
    for (const v of message.votersValid) {
      writer.uint32(90).string(v!);
    }
    for (const v of message.votersInvalid) {
      writer.uint32(98).string(v!);
    }
    for (const v of message.votersAbstain) {
      writer.uint32(106).string(v!);
    }
    if (message.fromKey !== "") {
      writer.uint32(114).string(message.fromKey);
    }
    if (message.storageProviderId !== 0) {
      writer.uint32(120).uint32(message.storageProviderId);
    }
    if (message.compressionId !== 0) {
      writer.uint32(128).uint32(message.compressionId);
    }
    return writer;
  },
  fromJSON(object: any): BundleProposal {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      storageId: isSet(object.storageId) ? String(object.storageId) : "",
      uploader: isSet(object.uploader) ? String(object.uploader) : "",
      nextUploader: isSet(object.nextUploader) ? String(object.nextUploader) : "",
      dataSize: isSet(object.dataSize) ? Long.fromValue(object.dataSize) : Long.UZERO,
      bundleSize: isSet(object.bundleSize) ? Long.fromValue(object.bundleSize) : Long.UZERO,
      toKey: isSet(object.toKey) ? String(object.toKey) : "",
      bundleSummary: isSet(object.bundleSummary) ? String(object.bundleSummary) : "",
      dataHash: isSet(object.dataHash) ? String(object.dataHash) : "",
      updatedAt: isSet(object.updatedAt) ? Long.fromValue(object.updatedAt) : Long.UZERO,
      votersValid: Array.isArray(object?.votersValid) ? object.votersValid.map((e: any) => String(e)) : [],
      votersInvalid: Array.isArray(object?.votersInvalid) ? object.votersInvalid.map((e: any) => String(e)) : [],
      votersAbstain: Array.isArray(object?.votersAbstain) ? object.votersAbstain.map((e: any) => String(e)) : [],
      fromKey: isSet(object.fromKey) ? String(object.fromKey) : "",
      storageProviderId: isSet(object.storageProviderId) ? Number(object.storageProviderId) : 0,
      compressionId: isSet(object.compressionId) ? Number(object.compressionId) : 0
    };
  },
  fromPartial(object: Partial<BundleProposal>): BundleProposal {
    const message = createBaseBundleProposal();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.storageId = object.storageId ?? "";
    message.uploader = object.uploader ?? "";
    message.nextUploader = object.nextUploader ?? "";
    message.dataSize = object.dataSize !== undefined && object.dataSize !== null ? Long.fromValue(object.dataSize) : Long.UZERO;
    message.bundleSize = object.bundleSize !== undefined && object.bundleSize !== null ? Long.fromValue(object.bundleSize) : Long.UZERO;
    message.toKey = object.toKey ?? "";
    message.bundleSummary = object.bundleSummary ?? "";
    message.dataHash = object.dataHash ?? "";
    message.updatedAt = object.updatedAt !== undefined && object.updatedAt !== null ? Long.fromValue(object.updatedAt) : Long.UZERO;
    message.votersValid = object.votersValid?.map(e => e) || [];
    message.votersInvalid = object.votersInvalid?.map(e => e) || [];
    message.votersAbstain = object.votersAbstain?.map(e => e) || [];
    message.fromKey = object.fromKey ?? "";
    message.storageProviderId = object.storageProviderId ?? 0;
    message.compressionId = object.compressionId ?? 0;
    return message;
  }
};
function createBaseFinalizedBundle(): FinalizedBundle {
  return {
    poolId: Long.UZERO,
    id: Long.UZERO,
    storageId: "",
    uploader: "",
    fromIndex: Long.UZERO,
    toIndex: Long.UZERO,
    toKey: "",
    bundleSummary: "",
    dataHash: "",
    finalizedAt: undefined,
    fromKey: "",
    storageProviderId: 0,
    compressionId: 0,
    stakeSecurity: undefined
  };
}
export const FinalizedBundle = {
  encode(message: FinalizedBundle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.storageId !== "") {
      writer.uint32(26).string(message.storageId);
    }
    if (message.uploader !== "") {
      writer.uint32(34).string(message.uploader);
    }
    if (!message.fromIndex.isZero()) {
      writer.uint32(40).uint64(message.fromIndex);
    }
    if (!message.toIndex.isZero()) {
      writer.uint32(48).uint64(message.toIndex);
    }
    if (message.toKey !== "") {
      writer.uint32(58).string(message.toKey);
    }
    if (message.bundleSummary !== "") {
      writer.uint32(66).string(message.bundleSummary);
    }
    if (message.dataHash !== "") {
      writer.uint32(74).string(message.dataHash);
    }
    if (message.finalizedAt !== undefined) {
      FinalizedAt.encode(message.finalizedAt, writer.uint32(82).fork()).ldelim();
    }
    if (message.fromKey !== "") {
      writer.uint32(90).string(message.fromKey);
    }
    if (message.storageProviderId !== 0) {
      writer.uint32(96).uint32(message.storageProviderId);
    }
    if (message.compressionId !== 0) {
      writer.uint32(104).uint32(message.compressionId);
    }
    if (message.stakeSecurity !== undefined) {
      StakeSecurity.encode(message.stakeSecurity, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): FinalizedBundle {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      storageId: isSet(object.storageId) ? String(object.storageId) : "",
      uploader: isSet(object.uploader) ? String(object.uploader) : "",
      fromIndex: isSet(object.fromIndex) ? Long.fromValue(object.fromIndex) : Long.UZERO,
      toIndex: isSet(object.toIndex) ? Long.fromValue(object.toIndex) : Long.UZERO,
      toKey: isSet(object.toKey) ? String(object.toKey) : "",
      bundleSummary: isSet(object.bundleSummary) ? String(object.bundleSummary) : "",
      dataHash: isSet(object.dataHash) ? String(object.dataHash) : "",
      finalizedAt: isSet(object.finalizedAt) ? FinalizedAt.fromJSON(object.finalizedAt) : undefined,
      fromKey: isSet(object.fromKey) ? String(object.fromKey) : "",
      storageProviderId: isSet(object.storageProviderId) ? Number(object.storageProviderId) : 0,
      compressionId: isSet(object.compressionId) ? Number(object.compressionId) : 0,
      stakeSecurity: isSet(object.stakeSecurity) ? StakeSecurity.fromJSON(object.stakeSecurity) : undefined
    };
  },
  fromPartial(object: Partial<FinalizedBundle>): FinalizedBundle {
    const message = createBaseFinalizedBundle();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.storageId = object.storageId ?? "";
    message.uploader = object.uploader ?? "";
    message.fromIndex = object.fromIndex !== undefined && object.fromIndex !== null ? Long.fromValue(object.fromIndex) : Long.UZERO;
    message.toIndex = object.toIndex !== undefined && object.toIndex !== null ? Long.fromValue(object.toIndex) : Long.UZERO;
    message.toKey = object.toKey ?? "";
    message.bundleSummary = object.bundleSummary ?? "";
    message.dataHash = object.dataHash ?? "";
    message.finalizedAt = object.finalizedAt !== undefined && object.finalizedAt !== null ? FinalizedAt.fromPartial(object.finalizedAt) : undefined;
    message.fromKey = object.fromKey ?? "";
    message.storageProviderId = object.storageProviderId ?? 0;
    message.compressionId = object.compressionId ?? 0;
    message.stakeSecurity = object.stakeSecurity !== undefined && object.stakeSecurity !== null ? StakeSecurity.fromPartial(object.stakeSecurity) : undefined;
    return message;
  }
};
function createBaseFinalizedAt(): FinalizedAt {
  return {
    height: Long.UZERO,
    timestamp: Long.UZERO
  };
}
export const FinalizedAt = {
  encode(message: FinalizedAt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(16).uint64(message.timestamp);
    }
    return writer;
  },
  fromJSON(object: any): FinalizedAt {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.UZERO
    };
  },
  fromPartial(object: Partial<FinalizedAt>): FinalizedAt {
    const message = createBaseFinalizedAt();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    return message;
  }
};
function createBaseStakeSecurity(): StakeSecurity {
  return {
    validVotePower: Long.UZERO,
    totalVotePower: Long.UZERO
  };
}
export const StakeSecurity = {
  encode(message: StakeSecurity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.validVotePower.isZero()) {
      writer.uint32(8).uint64(message.validVotePower);
    }
    if (!message.totalVotePower.isZero()) {
      writer.uint32(16).uint64(message.totalVotePower);
    }
    return writer;
  },
  fromJSON(object: any): StakeSecurity {
    return {
      validVotePower: isSet(object.validVotePower) ? Long.fromValue(object.validVotePower) : Long.UZERO,
      totalVotePower: isSet(object.totalVotePower) ? Long.fromValue(object.totalVotePower) : Long.UZERO
    };
  },
  fromPartial(object: Partial<StakeSecurity>): StakeSecurity {
    const message = createBaseStakeSecurity();
    message.validVotePower = object.validVotePower !== undefined && object.validVotePower !== null ? Long.fromValue(object.validVotePower) : Long.UZERO;
    message.totalVotePower = object.totalVotePower !== undefined && object.totalVotePower !== null ? Long.fromValue(object.totalVotePower) : Long.UZERO;
    return message;
  }
};
function createBaseBundleVersionEntry(): BundleVersionEntry {
  return {
    height: Long.UZERO,
    version: 0
  };
}
export const BundleVersionEntry = {
  encode(message: BundleVersionEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.version !== 0) {
      writer.uint32(16).int32(message.version);
    }
    return writer;
  },
  fromJSON(object: any): BundleVersionEntry {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      version: isSet(object.version) ? Number(object.version) : 0
    };
  },
  fromPartial(object: Partial<BundleVersionEntry>): BundleVersionEntry {
    const message = createBaseBundleVersionEntry();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.version = object.version ?? 0;
    return message;
  }
};
function createBaseBundleVersionMap(): BundleVersionMap {
  return {
    versions: []
  };
}
export const BundleVersionMap = {
  encode(message: BundleVersionMap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.versions) {
      BundleVersionEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): BundleVersionMap {
    return {
      versions: Array.isArray(object?.versions) ? object.versions.map((e: any) => BundleVersionEntry.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<BundleVersionMap>): BundleVersionMap {
    const message = createBaseBundleVersionMap();
    message.versions = object.versions?.map(e => BundleVersionEntry.fromPartial(e)) || [];
    return message;
  }
};
function createBaseRoundRobinSingleValidatorProgress(): RoundRobinSingleValidatorProgress {
  return {
    address: "",
    progress: Long.ZERO
  };
}
export const RoundRobinSingleValidatorProgress = {
  encode(message: RoundRobinSingleValidatorProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.progress.isZero()) {
      writer.uint32(16).int64(message.progress);
    }
    return writer;
  },
  fromJSON(object: any): RoundRobinSingleValidatorProgress {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      progress: isSet(object.progress) ? Long.fromValue(object.progress) : Long.ZERO
    };
  },
  fromPartial(object: Partial<RoundRobinSingleValidatorProgress>): RoundRobinSingleValidatorProgress {
    const message = createBaseRoundRobinSingleValidatorProgress();
    message.address = object.address ?? "";
    message.progress = object.progress !== undefined && object.progress !== null ? Long.fromValue(object.progress) : Long.ZERO;
    return message;
  }
};
function createBaseRoundRobinProgress(): RoundRobinProgress {
  return {
    poolId: Long.UZERO,
    progressList: []
  };
}
export const RoundRobinProgress = {
  encode(message: RoundRobinProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.progressList) {
      RoundRobinSingleValidatorProgress.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RoundRobinProgress {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      progressList: Array.isArray(object?.progressList) ? object.progressList.map((e: any) => RoundRobinSingleValidatorProgress.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<RoundRobinProgress>): RoundRobinProgress {
    const message = createBaseRoundRobinProgress();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.progressList = object.progressList?.map(e => RoundRobinSingleValidatorProgress.fromPartial(e)) || [];
    return message;
  }
};