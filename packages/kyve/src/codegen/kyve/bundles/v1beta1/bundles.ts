import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
export const BundleStatusAmino = BundleStatus;
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
  poolId: bigint;
  /** storage_id is the id with which the data can be retrieved from */
  storageId: string;
  /** uploader is the address of the staker who submitted the current proposal */
  uploader: string;
  /** next_uploader is the address of the staker who should upload the next proposal */
  nextUploader: string;
  /** data_size the size of the data in bytes */
  dataSize: bigint;
  /** bundle_size the size of the bundle (amount of data items) */
  bundleSize: bigint;
  /** to_key the key of the last data item in the bundle proposal */
  toKey: string;
  /** bundle_summary a string summary of the current proposal */
  bundleSummary: string;
  /** data_hash a sha256 hash of the raw compressed data */
  dataHash: string;
  /** updated_at the last time this proposal was edited */
  updatedAt: bigint;
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
export interface BundleProposalProtoMsg {
  typeUrl: "/kyve.bundles.v1beta1.BundleProposal";
  value: Uint8Array;
}
/**
 * BundleProposal represents the current bundle proposal
 * of a storage pool
 */
export interface BundleProposalAmino {
  /** pool_id is the id of the pool for which this proposal is for */
  pool_id?: string;
  /** storage_id is the id with which the data can be retrieved from */
  storage_id?: string;
  /** uploader is the address of the staker who submitted the current proposal */
  uploader?: string;
  /** next_uploader is the address of the staker who should upload the next proposal */
  next_uploader?: string;
  /** data_size the size of the data in bytes */
  data_size?: string;
  /** bundle_size the size of the bundle (amount of data items) */
  bundle_size?: string;
  /** to_key the key of the last data item in the bundle proposal */
  to_key?: string;
  /** bundle_summary a string summary of the current proposal */
  bundle_summary?: string;
  /** data_hash a sha256 hash of the raw compressed data */
  data_hash?: string;
  /** updated_at the last time this proposal was edited */
  updated_at?: string;
  /** voters_valid list of all stakers who voted in favor for current proposal */
  voters_valid?: string[];
  /** voters_invalid list of all stakers who voted against for current proposal */
  voters_invalid?: string[];
  /** voters_abstain list of all stakers who voted abstain for current proposal */
  voters_abstain?: string[];
  /** from_key the key of the first data item in the bundle proposal */
  from_key?: string;
  /** storage_provider_id the id of the storage provider where the bundle is stored */
  storage_provider_id?: number;
  /** compression_id the id of the compression type with which the data was compressed */
  compression_id?: number;
}
export interface BundleProposalAminoMsg {
  type: "/kyve.bundles.v1beta1.BundleProposal";
  value: BundleProposalAmino;
}
/**
 * BundleProposal represents the current bundle proposal
 * of a storage pool
 */
export interface BundleProposalSDKType {
  pool_id: bigint;
  storage_id: string;
  uploader: string;
  next_uploader: string;
  data_size: bigint;
  bundle_size: bigint;
  to_key: string;
  bundle_summary: string;
  data_hash: string;
  updated_at: bigint;
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
  poolId: bigint;
  /** id is a unique identifier for each finalized bundle in a pool */
  id: bigint;
  /** storage_id is the id with which the data can be retrieved from */
  storageId: string;
  /** uploader is the address of the staker who submitted this bundle */
  uploader: string;
  /** from_index is the index from where the bundle starts (inclusive) */
  fromIndex: bigint;
  /** to_index is the index to which the bundle goes (exclusive) */
  toIndex: bigint;
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
export interface FinalizedBundleProtoMsg {
  typeUrl: "/kyve.bundles.v1beta1.FinalizedBundle";
  value: Uint8Array;
}
/**
 * FinalizedBundle represents a bundle proposal where the majority
 * agreed on its validity
 */
export interface FinalizedBundleAmino {
  /** pool_id is the id of the pool for which this proposal is for */
  pool_id?: string;
  /** id is a unique identifier for each finalized bundle in a pool */
  id?: string;
  /** storage_id is the id with which the data can be retrieved from */
  storage_id?: string;
  /** uploader is the address of the staker who submitted this bundle */
  uploader?: string;
  /** from_index is the index from where the bundle starts (inclusive) */
  from_index?: string;
  /** to_index is the index to which the bundle goes (exclusive) */
  to_index?: string;
  /** to_key the key of the last data item in the bundle proposal */
  to_key?: string;
  /** bundle_summary a string summary of the current proposal */
  bundle_summary?: string;
  /** data_hash a sha256 hash of the raw compressed data */
  data_hash?: string;
  /** finalized_at contains details of the block that finalized this bundle. */
  finalized_at?: FinalizedAtAmino;
  /** from_key the key of the first data item in the bundle proposal */
  from_key?: string;
  /** storage_provider_id the id of the storage provider where the bundle is stored */
  storage_provider_id?: number;
  /** compression_id the id of the compression type with which the data was compressed */
  compression_id?: number;
  /** stake_security */
  stake_security?: StakeSecurityAmino;
}
export interface FinalizedBundleAminoMsg {
  type: "/kyve.bundles.v1beta1.FinalizedBundle";
  value: FinalizedBundleAmino;
}
/**
 * FinalizedBundle represents a bundle proposal where the majority
 * agreed on its validity
 */
export interface FinalizedBundleSDKType {
  pool_id: bigint;
  id: bigint;
  storage_id: string;
  uploader: string;
  from_index: bigint;
  to_index: bigint;
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
  height: bigint;
  /** timestamp ... */
  timestamp: bigint;
}
export interface FinalizedAtProtoMsg {
  typeUrl: "/kyve.bundles.v1beta1.FinalizedAt";
  value: Uint8Array;
}
/** FinalizedAt ... */
export interface FinalizedAtAmino {
  /** height ... */
  height?: string;
  /** timestamp ... */
  timestamp?: string;
}
export interface FinalizedAtAminoMsg {
  type: "/kyve.bundles.v1beta1.FinalizedAt";
  value: FinalizedAtAmino;
}
/** FinalizedAt ... */
export interface FinalizedAtSDKType {
  height: bigint;
  timestamp: bigint;
}
/** StakeSecurity stores information about total stake and valid votes with which the bundle got finalized. */
export interface StakeSecurity {
  /** valid_vote_power is the total amount of stake of all pool stakers which voted valid for the given bundle. */
  validVotePower: bigint;
  /** total_vote_power is the total amount of stake that was present during the finalization of the bundle */
  totalVotePower: bigint;
}
export interface StakeSecurityProtoMsg {
  typeUrl: "/kyve.bundles.v1beta1.StakeSecurity";
  value: Uint8Array;
}
/** StakeSecurity stores information about total stake and valid votes with which the bundle got finalized. */
export interface StakeSecurityAmino {
  /** valid_vote_power is the total amount of stake of all pool stakers which voted valid for the given bundle. */
  valid_vote_power?: string;
  /** total_vote_power is the total amount of stake that was present during the finalization of the bundle */
  total_vote_power?: string;
}
export interface StakeSecurityAminoMsg {
  type: "/kyve.bundles.v1beta1.StakeSecurity";
  value: StakeSecurityAmino;
}
/** StakeSecurity stores information about total stake and valid votes with which the bundle got finalized. */
export interface StakeSecuritySDKType {
  valid_vote_power: bigint;
  total_vote_power: bigint;
}
/** BundleVersionEntry ... */
export interface BundleVersionEntry {
  /** height ... */
  height: bigint;
  /** version ... */
  version: number;
}
export interface BundleVersionEntryProtoMsg {
  typeUrl: "/kyve.bundles.v1beta1.BundleVersionEntry";
  value: Uint8Array;
}
/** BundleVersionEntry ... */
export interface BundleVersionEntryAmino {
  /** height ... */
  height?: string;
  /** version ... */
  version?: number;
}
export interface BundleVersionEntryAminoMsg {
  type: "/kyve.bundles.v1beta1.BundleVersionEntry";
  value: BundleVersionEntryAmino;
}
/** BundleVersionEntry ... */
export interface BundleVersionEntrySDKType {
  height: bigint;
  version: number;
}
/** BundleVersionMap ... */
export interface BundleVersionMap {
  /** versions ... */
  versions: BundleVersionEntry[];
}
export interface BundleVersionMapProtoMsg {
  typeUrl: "/kyve.bundles.v1beta1.BundleVersionMap";
  value: Uint8Array;
}
/** BundleVersionMap ... */
export interface BundleVersionMapAmino {
  /** versions ... */
  versions?: BundleVersionEntryAmino[];
}
export interface BundleVersionMapAminoMsg {
  type: "/kyve.bundles.v1beta1.BundleVersionMap";
  value: BundleVersionMapAmino;
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
  progress: bigint;
}
export interface RoundRobinSingleValidatorProgressProtoMsg {
  typeUrl: "/kyve.bundles.v1beta1.RoundRobinSingleValidatorProgress";
  value: Uint8Array;
}
/** RoundRobinSingleValidatorProgress ... */
export interface RoundRobinSingleValidatorProgressAmino {
  /** address ... */
  address?: string;
  /** progress ... */
  progress?: string;
}
export interface RoundRobinSingleValidatorProgressAminoMsg {
  type: "/kyve.bundles.v1beta1.RoundRobinSingleValidatorProgress";
  value: RoundRobinSingleValidatorProgressAmino;
}
/** RoundRobinSingleValidatorProgress ... */
export interface RoundRobinSingleValidatorProgressSDKType {
  address: string;
  progress: bigint;
}
/** RoundRobinProgress ... */
export interface RoundRobinProgress {
  /** pool_id ... */
  poolId: bigint;
  /** progress_list ... */
  progressList: RoundRobinSingleValidatorProgress[];
}
export interface RoundRobinProgressProtoMsg {
  typeUrl: "/kyve.bundles.v1beta1.RoundRobinProgress";
  value: Uint8Array;
}
/** RoundRobinProgress ... */
export interface RoundRobinProgressAmino {
  /** pool_id ... */
  pool_id?: string;
  /** progress_list ... */
  progress_list?: RoundRobinSingleValidatorProgressAmino[];
}
export interface RoundRobinProgressAminoMsg {
  type: "/kyve.bundles.v1beta1.RoundRobinProgress";
  value: RoundRobinProgressAmino;
}
/** RoundRobinProgress ... */
export interface RoundRobinProgressSDKType {
  pool_id: bigint;
  progress_list: RoundRobinSingleValidatorProgressSDKType[];
}
function createBaseBundleProposal(): BundleProposal {
  return {
    poolId: BigInt(0),
    storageId: "",
    uploader: "",
    nextUploader: "",
    dataSize: BigInt(0),
    bundleSize: BigInt(0),
    toKey: "",
    bundleSummary: "",
    dataHash: "",
    updatedAt: BigInt(0),
    votersValid: [],
    votersInvalid: [],
    votersAbstain: [],
    fromKey: "",
    storageProviderId: 0,
    compressionId: 0
  };
}
export const BundleProposal = {
  typeUrl: "/kyve.bundles.v1beta1.BundleProposal",
  encode(message: BundleProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
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
    if (message.dataSize !== BigInt(0)) {
      writer.uint32(40).uint64(message.dataSize);
    }
    if (message.bundleSize !== BigInt(0)) {
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
    if (message.updatedAt !== BigInt(0)) {
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      storageId: isSet(object.storageId) ? String(object.storageId) : "",
      uploader: isSet(object.uploader) ? String(object.uploader) : "",
      nextUploader: isSet(object.nextUploader) ? String(object.nextUploader) : "",
      dataSize: isSet(object.dataSize) ? BigInt(object.dataSize.toString()) : BigInt(0),
      bundleSize: isSet(object.bundleSize) ? BigInt(object.bundleSize.toString()) : BigInt(0),
      toKey: isSet(object.toKey) ? String(object.toKey) : "",
      bundleSummary: isSet(object.bundleSummary) ? String(object.bundleSummary) : "",
      dataHash: isSet(object.dataHash) ? String(object.dataHash) : "",
      updatedAt: isSet(object.updatedAt) ? BigInt(object.updatedAt.toString()) : BigInt(0),
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
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.storageId = object.storageId ?? "";
    message.uploader = object.uploader ?? "";
    message.nextUploader = object.nextUploader ?? "";
    message.dataSize = object.dataSize !== undefined && object.dataSize !== null ? BigInt(object.dataSize.toString()) : BigInt(0);
    message.bundleSize = object.bundleSize !== undefined && object.bundleSize !== null ? BigInt(object.bundleSize.toString()) : BigInt(0);
    message.toKey = object.toKey ?? "";
    message.bundleSummary = object.bundleSummary ?? "";
    message.dataHash = object.dataHash ?? "";
    message.updatedAt = object.updatedAt !== undefined && object.updatedAt !== null ? BigInt(object.updatedAt.toString()) : BigInt(0);
    message.votersValid = object.votersValid?.map(e => e) || [];
    message.votersInvalid = object.votersInvalid?.map(e => e) || [];
    message.votersAbstain = object.votersAbstain?.map(e => e) || [];
    message.fromKey = object.fromKey ?? "";
    message.storageProviderId = object.storageProviderId ?? 0;
    message.compressionId = object.compressionId ?? 0;
    return message;
  },
  fromAmino(object: BundleProposalAmino): BundleProposal {
    const message = createBaseBundleProposal();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.storage_id !== undefined && object.storage_id !== null) {
      message.storageId = object.storage_id;
    }
    if (object.uploader !== undefined && object.uploader !== null) {
      message.uploader = object.uploader;
    }
    if (object.next_uploader !== undefined && object.next_uploader !== null) {
      message.nextUploader = object.next_uploader;
    }
    if (object.data_size !== undefined && object.data_size !== null) {
      message.dataSize = BigInt(object.data_size);
    }
    if (object.bundle_size !== undefined && object.bundle_size !== null) {
      message.bundleSize = BigInt(object.bundle_size);
    }
    if (object.to_key !== undefined && object.to_key !== null) {
      message.toKey = object.to_key;
    }
    if (object.bundle_summary !== undefined && object.bundle_summary !== null) {
      message.bundleSummary = object.bundle_summary;
    }
    if (object.data_hash !== undefined && object.data_hash !== null) {
      message.dataHash = object.data_hash;
    }
    if (object.updated_at !== undefined && object.updated_at !== null) {
      message.updatedAt = BigInt(object.updated_at);
    }
    message.votersValid = object.voters_valid?.map(e => e) || [];
    message.votersInvalid = object.voters_invalid?.map(e => e) || [];
    message.votersAbstain = object.voters_abstain?.map(e => e) || [];
    if (object.from_key !== undefined && object.from_key !== null) {
      message.fromKey = object.from_key;
    }
    if (object.storage_provider_id !== undefined && object.storage_provider_id !== null) {
      message.storageProviderId = object.storage_provider_id;
    }
    if (object.compression_id !== undefined && object.compression_id !== null) {
      message.compressionId = object.compression_id;
    }
    return message;
  },
  toAmino(message: BundleProposal): BundleProposalAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.storage_id = message.storageId;
    obj.uploader = message.uploader;
    obj.next_uploader = message.nextUploader;
    obj.data_size = message.dataSize ? message.dataSize.toString() : undefined;
    obj.bundle_size = message.bundleSize ? message.bundleSize.toString() : undefined;
    obj.to_key = message.toKey;
    obj.bundle_summary = message.bundleSummary;
    obj.data_hash = message.dataHash;
    obj.updated_at = message.updatedAt ? message.updatedAt.toString() : undefined;
    if (message.votersValid) {
      obj.voters_valid = message.votersValid.map(e => e);
    } else {
      obj.voters_valid = [];
    }
    if (message.votersInvalid) {
      obj.voters_invalid = message.votersInvalid.map(e => e);
    } else {
      obj.voters_invalid = [];
    }
    if (message.votersAbstain) {
      obj.voters_abstain = message.votersAbstain.map(e => e);
    } else {
      obj.voters_abstain = [];
    }
    obj.from_key = message.fromKey;
    obj.storage_provider_id = message.storageProviderId;
    obj.compression_id = message.compressionId;
    return obj;
  },
  fromAminoMsg(object: BundleProposalAminoMsg): BundleProposal {
    return BundleProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: BundleProposalProtoMsg): BundleProposal {
    return BundleProposal.decode(message.value);
  },
  toProto(message: BundleProposal): Uint8Array {
    return BundleProposal.encode(message).finish();
  },
  toProtoMsg(message: BundleProposal): BundleProposalProtoMsg {
    return {
      typeUrl: "/kyve.bundles.v1beta1.BundleProposal",
      value: BundleProposal.encode(message).finish()
    };
  }
};
function createBaseFinalizedBundle(): FinalizedBundle {
  return {
    poolId: BigInt(0),
    id: BigInt(0),
    storageId: "",
    uploader: "",
    fromIndex: BigInt(0),
    toIndex: BigInt(0),
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
  typeUrl: "/kyve.bundles.v1beta1.FinalizedBundle",
  encode(message: FinalizedBundle, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.storageId !== "") {
      writer.uint32(26).string(message.storageId);
    }
    if (message.uploader !== "") {
      writer.uint32(34).string(message.uploader);
    }
    if (message.fromIndex !== BigInt(0)) {
      writer.uint32(40).uint64(message.fromIndex);
    }
    if (message.toIndex !== BigInt(0)) {
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      storageId: isSet(object.storageId) ? String(object.storageId) : "",
      uploader: isSet(object.uploader) ? String(object.uploader) : "",
      fromIndex: isSet(object.fromIndex) ? BigInt(object.fromIndex.toString()) : BigInt(0),
      toIndex: isSet(object.toIndex) ? BigInt(object.toIndex.toString()) : BigInt(0),
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
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.storageId = object.storageId ?? "";
    message.uploader = object.uploader ?? "";
    message.fromIndex = object.fromIndex !== undefined && object.fromIndex !== null ? BigInt(object.fromIndex.toString()) : BigInt(0);
    message.toIndex = object.toIndex !== undefined && object.toIndex !== null ? BigInt(object.toIndex.toString()) : BigInt(0);
    message.toKey = object.toKey ?? "";
    message.bundleSummary = object.bundleSummary ?? "";
    message.dataHash = object.dataHash ?? "";
    message.finalizedAt = object.finalizedAt !== undefined && object.finalizedAt !== null ? FinalizedAt.fromPartial(object.finalizedAt) : undefined;
    message.fromKey = object.fromKey ?? "";
    message.storageProviderId = object.storageProviderId ?? 0;
    message.compressionId = object.compressionId ?? 0;
    message.stakeSecurity = object.stakeSecurity !== undefined && object.stakeSecurity !== null ? StakeSecurity.fromPartial(object.stakeSecurity) : undefined;
    return message;
  },
  fromAmino(object: FinalizedBundleAmino): FinalizedBundle {
    const message = createBaseFinalizedBundle();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.storage_id !== undefined && object.storage_id !== null) {
      message.storageId = object.storage_id;
    }
    if (object.uploader !== undefined && object.uploader !== null) {
      message.uploader = object.uploader;
    }
    if (object.from_index !== undefined && object.from_index !== null) {
      message.fromIndex = BigInt(object.from_index);
    }
    if (object.to_index !== undefined && object.to_index !== null) {
      message.toIndex = BigInt(object.to_index);
    }
    if (object.to_key !== undefined && object.to_key !== null) {
      message.toKey = object.to_key;
    }
    if (object.bundle_summary !== undefined && object.bundle_summary !== null) {
      message.bundleSummary = object.bundle_summary;
    }
    if (object.data_hash !== undefined && object.data_hash !== null) {
      message.dataHash = object.data_hash;
    }
    if (object.finalized_at !== undefined && object.finalized_at !== null) {
      message.finalizedAt = FinalizedAt.fromAmino(object.finalized_at);
    }
    if (object.from_key !== undefined && object.from_key !== null) {
      message.fromKey = object.from_key;
    }
    if (object.storage_provider_id !== undefined && object.storage_provider_id !== null) {
      message.storageProviderId = object.storage_provider_id;
    }
    if (object.compression_id !== undefined && object.compression_id !== null) {
      message.compressionId = object.compression_id;
    }
    if (object.stake_security !== undefined && object.stake_security !== null) {
      message.stakeSecurity = StakeSecurity.fromAmino(object.stake_security);
    }
    return message;
  },
  toAmino(message: FinalizedBundle): FinalizedBundleAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.storage_id = message.storageId;
    obj.uploader = message.uploader;
    obj.from_index = message.fromIndex ? message.fromIndex.toString() : undefined;
    obj.to_index = message.toIndex ? message.toIndex.toString() : undefined;
    obj.to_key = message.toKey;
    obj.bundle_summary = message.bundleSummary;
    obj.data_hash = message.dataHash;
    obj.finalized_at = message.finalizedAt ? FinalizedAt.toAmino(message.finalizedAt) : undefined;
    obj.from_key = message.fromKey;
    obj.storage_provider_id = message.storageProviderId;
    obj.compression_id = message.compressionId;
    obj.stake_security = message.stakeSecurity ? StakeSecurity.toAmino(message.stakeSecurity) : undefined;
    return obj;
  },
  fromAminoMsg(object: FinalizedBundleAminoMsg): FinalizedBundle {
    return FinalizedBundle.fromAmino(object.value);
  },
  fromProtoMsg(message: FinalizedBundleProtoMsg): FinalizedBundle {
    return FinalizedBundle.decode(message.value);
  },
  toProto(message: FinalizedBundle): Uint8Array {
    return FinalizedBundle.encode(message).finish();
  },
  toProtoMsg(message: FinalizedBundle): FinalizedBundleProtoMsg {
    return {
      typeUrl: "/kyve.bundles.v1beta1.FinalizedBundle",
      value: FinalizedBundle.encode(message).finish()
    };
  }
};
function createBaseFinalizedAt(): FinalizedAt {
  return {
    height: BigInt(0),
    timestamp: BigInt(0)
  };
}
export const FinalizedAt = {
  typeUrl: "/kyve.bundles.v1beta1.FinalizedAt",
  encode(message: FinalizedAt, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestamp);
    }
    return writer;
  },
  fromJSON(object: any): FinalizedAt {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<FinalizedAt>): FinalizedAt {
    const message = createBaseFinalizedAt();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: FinalizedAtAmino): FinalizedAt {
    const message = createBaseFinalizedAt();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    return message;
  },
  toAmino(message: FinalizedAt): FinalizedAtAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: FinalizedAtAminoMsg): FinalizedAt {
    return FinalizedAt.fromAmino(object.value);
  },
  fromProtoMsg(message: FinalizedAtProtoMsg): FinalizedAt {
    return FinalizedAt.decode(message.value);
  },
  toProto(message: FinalizedAt): Uint8Array {
    return FinalizedAt.encode(message).finish();
  },
  toProtoMsg(message: FinalizedAt): FinalizedAtProtoMsg {
    return {
      typeUrl: "/kyve.bundles.v1beta1.FinalizedAt",
      value: FinalizedAt.encode(message).finish()
    };
  }
};
function createBaseStakeSecurity(): StakeSecurity {
  return {
    validVotePower: BigInt(0),
    totalVotePower: BigInt(0)
  };
}
export const StakeSecurity = {
  typeUrl: "/kyve.bundles.v1beta1.StakeSecurity",
  encode(message: StakeSecurity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validVotePower !== BigInt(0)) {
      writer.uint32(8).uint64(message.validVotePower);
    }
    if (message.totalVotePower !== BigInt(0)) {
      writer.uint32(16).uint64(message.totalVotePower);
    }
    return writer;
  },
  fromJSON(object: any): StakeSecurity {
    return {
      validVotePower: isSet(object.validVotePower) ? BigInt(object.validVotePower.toString()) : BigInt(0),
      totalVotePower: isSet(object.totalVotePower) ? BigInt(object.totalVotePower.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<StakeSecurity>): StakeSecurity {
    const message = createBaseStakeSecurity();
    message.validVotePower = object.validVotePower !== undefined && object.validVotePower !== null ? BigInt(object.validVotePower.toString()) : BigInt(0);
    message.totalVotePower = object.totalVotePower !== undefined && object.totalVotePower !== null ? BigInt(object.totalVotePower.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: StakeSecurityAmino): StakeSecurity {
    const message = createBaseStakeSecurity();
    if (object.valid_vote_power !== undefined && object.valid_vote_power !== null) {
      message.validVotePower = BigInt(object.valid_vote_power);
    }
    if (object.total_vote_power !== undefined && object.total_vote_power !== null) {
      message.totalVotePower = BigInt(object.total_vote_power);
    }
    return message;
  },
  toAmino(message: StakeSecurity): StakeSecurityAmino {
    const obj: any = {};
    obj.valid_vote_power = message.validVotePower ? message.validVotePower.toString() : undefined;
    obj.total_vote_power = message.totalVotePower ? message.totalVotePower.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: StakeSecurityAminoMsg): StakeSecurity {
    return StakeSecurity.fromAmino(object.value);
  },
  fromProtoMsg(message: StakeSecurityProtoMsg): StakeSecurity {
    return StakeSecurity.decode(message.value);
  },
  toProto(message: StakeSecurity): Uint8Array {
    return StakeSecurity.encode(message).finish();
  },
  toProtoMsg(message: StakeSecurity): StakeSecurityProtoMsg {
    return {
      typeUrl: "/kyve.bundles.v1beta1.StakeSecurity",
      value: StakeSecurity.encode(message).finish()
    };
  }
};
function createBaseBundleVersionEntry(): BundleVersionEntry {
  return {
    height: BigInt(0),
    version: 0
  };
}
export const BundleVersionEntry = {
  typeUrl: "/kyve.bundles.v1beta1.BundleVersionEntry",
  encode(message: BundleVersionEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.version !== 0) {
      writer.uint32(16).int32(message.version);
    }
    return writer;
  },
  fromJSON(object: any): BundleVersionEntry {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      version: isSet(object.version) ? Number(object.version) : 0
    };
  },
  fromPartial(object: Partial<BundleVersionEntry>): BundleVersionEntry {
    const message = createBaseBundleVersionEntry();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.version = object.version ?? 0;
    return message;
  },
  fromAmino(object: BundleVersionEntryAmino): BundleVersionEntry {
    const message = createBaseBundleVersionEntry();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message: BundleVersionEntry): BundleVersionEntryAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.version = message.version;
    return obj;
  },
  fromAminoMsg(object: BundleVersionEntryAminoMsg): BundleVersionEntry {
    return BundleVersionEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: BundleVersionEntryProtoMsg): BundleVersionEntry {
    return BundleVersionEntry.decode(message.value);
  },
  toProto(message: BundleVersionEntry): Uint8Array {
    return BundleVersionEntry.encode(message).finish();
  },
  toProtoMsg(message: BundleVersionEntry): BundleVersionEntryProtoMsg {
    return {
      typeUrl: "/kyve.bundles.v1beta1.BundleVersionEntry",
      value: BundleVersionEntry.encode(message).finish()
    };
  }
};
function createBaseBundleVersionMap(): BundleVersionMap {
  return {
    versions: []
  };
}
export const BundleVersionMap = {
  typeUrl: "/kyve.bundles.v1beta1.BundleVersionMap",
  encode(message: BundleVersionMap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: BundleVersionMapAmino): BundleVersionMap {
    const message = createBaseBundleVersionMap();
    message.versions = object.versions?.map(e => BundleVersionEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BundleVersionMap): BundleVersionMapAmino {
    const obj: any = {};
    if (message.versions) {
      obj.versions = message.versions.map(e => e ? BundleVersionEntry.toAmino(e) : undefined);
    } else {
      obj.versions = [];
    }
    return obj;
  },
  fromAminoMsg(object: BundleVersionMapAminoMsg): BundleVersionMap {
    return BundleVersionMap.fromAmino(object.value);
  },
  fromProtoMsg(message: BundleVersionMapProtoMsg): BundleVersionMap {
    return BundleVersionMap.decode(message.value);
  },
  toProto(message: BundleVersionMap): Uint8Array {
    return BundleVersionMap.encode(message).finish();
  },
  toProtoMsg(message: BundleVersionMap): BundleVersionMapProtoMsg {
    return {
      typeUrl: "/kyve.bundles.v1beta1.BundleVersionMap",
      value: BundleVersionMap.encode(message).finish()
    };
  }
};
function createBaseRoundRobinSingleValidatorProgress(): RoundRobinSingleValidatorProgress {
  return {
    address: "",
    progress: BigInt(0)
  };
}
export const RoundRobinSingleValidatorProgress = {
  typeUrl: "/kyve.bundles.v1beta1.RoundRobinSingleValidatorProgress",
  encode(message: RoundRobinSingleValidatorProgress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.progress !== BigInt(0)) {
      writer.uint32(16).int64(message.progress);
    }
    return writer;
  },
  fromJSON(object: any): RoundRobinSingleValidatorProgress {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      progress: isSet(object.progress) ? BigInt(object.progress.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<RoundRobinSingleValidatorProgress>): RoundRobinSingleValidatorProgress {
    const message = createBaseRoundRobinSingleValidatorProgress();
    message.address = object.address ?? "";
    message.progress = object.progress !== undefined && object.progress !== null ? BigInt(object.progress.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RoundRobinSingleValidatorProgressAmino): RoundRobinSingleValidatorProgress {
    const message = createBaseRoundRobinSingleValidatorProgress();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.progress !== undefined && object.progress !== null) {
      message.progress = BigInt(object.progress);
    }
    return message;
  },
  toAmino(message: RoundRobinSingleValidatorProgress): RoundRobinSingleValidatorProgressAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.progress = message.progress ? message.progress.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RoundRobinSingleValidatorProgressAminoMsg): RoundRobinSingleValidatorProgress {
    return RoundRobinSingleValidatorProgress.fromAmino(object.value);
  },
  fromProtoMsg(message: RoundRobinSingleValidatorProgressProtoMsg): RoundRobinSingleValidatorProgress {
    return RoundRobinSingleValidatorProgress.decode(message.value);
  },
  toProto(message: RoundRobinSingleValidatorProgress): Uint8Array {
    return RoundRobinSingleValidatorProgress.encode(message).finish();
  },
  toProtoMsg(message: RoundRobinSingleValidatorProgress): RoundRobinSingleValidatorProgressProtoMsg {
    return {
      typeUrl: "/kyve.bundles.v1beta1.RoundRobinSingleValidatorProgress",
      value: RoundRobinSingleValidatorProgress.encode(message).finish()
    };
  }
};
function createBaseRoundRobinProgress(): RoundRobinProgress {
  return {
    poolId: BigInt(0),
    progressList: []
  };
}
export const RoundRobinProgress = {
  typeUrl: "/kyve.bundles.v1beta1.RoundRobinProgress",
  encode(message: RoundRobinProgress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.progressList) {
      RoundRobinSingleValidatorProgress.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RoundRobinProgress {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      progressList: Array.isArray(object?.progressList) ? object.progressList.map((e: any) => RoundRobinSingleValidatorProgress.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<RoundRobinProgress>): RoundRobinProgress {
    const message = createBaseRoundRobinProgress();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.progressList = object.progressList?.map(e => RoundRobinSingleValidatorProgress.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RoundRobinProgressAmino): RoundRobinProgress {
    const message = createBaseRoundRobinProgress();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.progressList = object.progress_list?.map(e => RoundRobinSingleValidatorProgress.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RoundRobinProgress): RoundRobinProgressAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    if (message.progressList) {
      obj.progress_list = message.progressList.map(e => e ? RoundRobinSingleValidatorProgress.toAmino(e) : undefined);
    } else {
      obj.progress_list = [];
    }
    return obj;
  },
  fromAminoMsg(object: RoundRobinProgressAminoMsg): RoundRobinProgress {
    return RoundRobinProgress.fromAmino(object.value);
  },
  fromProtoMsg(message: RoundRobinProgressProtoMsg): RoundRobinProgress {
    return RoundRobinProgress.decode(message.value);
  },
  toProto(message: RoundRobinProgress): Uint8Array {
    return RoundRobinProgress.encode(message).finish();
  },
  toProtoMsg(message: RoundRobinProgress): RoundRobinProgressProtoMsg {
    return {
      typeUrl: "/kyve.bundles.v1beta1.RoundRobinProgress",
      value: RoundRobinProgress.encode(message).finish()
    };
  }
};