import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** FinalizedBundle represents the latest version of a valid bundle of a pool */
export interface FinalizedBundle {
  /** pool_id in which the bundle was created */
  poolId: bigint;
  /** id is is integrated with each valid bundle produced. */
  id: bigint;
  /** storage_id is the id with which the data can be retrieved from the configured data provider */
  storageId: string;
  /** uploader is the address of the staker who submitted this bundle */
  uploader: string;
  /** from_index is the index from where the bundle starts (inclusive) */
  fromIndex: bigint;
  /** to_index is the index to which the bundle goes (exclusive) */
  toIndex: bigint;
  /** from_key is the key of the first data item in the bundle proposal */
  fromKey: string;
  /** to_key the key of the last data item in the bundle */
  toKey: string;
  /** bundle_summary is a summary of the bundle. */
  bundleSummary: string;
  /** data_hash is a sha256 hash of the uploaded data. */
  dataHash: string;
  /** finalized_at contains details of the block that finalized this bundle. */
  finalizedAt?: FinalizedAt;
  /** storage_provider_id the id of the storage provider where the bundle is stored */
  storageProviderId: bigint;
  /** compression_id the id of the compression type with which the data was compressed */
  compressionId: bigint;
  /**
   * stake_security defines the amount of stake which was present in the pool during the finalization of the bundle.
   * This field was added in schema version 2. Bundles finalized before that return `null`.
   */
  stakeSecurity?: StakeSecurity;
}
export interface FinalizedBundleProtoMsg {
  typeUrl: "/kyve.query.v1beta1.FinalizedBundle";
  value: Uint8Array;
}
/** FinalizedBundle represents the latest version of a valid bundle of a pool */
export interface FinalizedBundleAmino {
  /** pool_id in which the bundle was created */
  pool_id?: string;
  /** id is is integrated with each valid bundle produced. */
  id?: string;
  /** storage_id is the id with which the data can be retrieved from the configured data provider */
  storage_id?: string;
  /** uploader is the address of the staker who submitted this bundle */
  uploader?: string;
  /** from_index is the index from where the bundle starts (inclusive) */
  from_index?: string;
  /** to_index is the index to which the bundle goes (exclusive) */
  to_index?: string;
  /** from_key is the key of the first data item in the bundle proposal */
  from_key?: string;
  /** to_key the key of the last data item in the bundle */
  to_key?: string;
  /** bundle_summary is a summary of the bundle. */
  bundle_summary?: string;
  /** data_hash is a sha256 hash of the uploaded data. */
  data_hash?: string;
  /** finalized_at contains details of the block that finalized this bundle. */
  finalized_at?: FinalizedAtAmino;
  /** storage_provider_id the id of the storage provider where the bundle is stored */
  storage_provider_id?: string;
  /** compression_id the id of the compression type with which the data was compressed */
  compression_id?: string;
  /**
   * stake_security defines the amount of stake which was present in the pool during the finalization of the bundle.
   * This field was added in schema version 2. Bundles finalized before that return `null`.
   */
  stake_security?: StakeSecurityAmino;
}
export interface FinalizedBundleAminoMsg {
  type: "/kyve.query.v1beta1.FinalizedBundle";
  value: FinalizedBundleAmino;
}
/** FinalizedBundle represents the latest version of a valid bundle of a pool */
export interface FinalizedBundleSDKType {
  pool_id: bigint;
  id: bigint;
  storage_id: string;
  uploader: string;
  from_index: bigint;
  to_index: bigint;
  from_key: string;
  to_key: string;
  bundle_summary: string;
  data_hash: string;
  finalized_at?: FinalizedAtSDKType;
  storage_provider_id: bigint;
  compression_id: bigint;
  stake_security?: StakeSecuritySDKType;
}
/** FinalizedAt stores information about finalization block and time. */
export interface FinalizedAt {
  /** height is the block height in which the bundle got finalized. */
  height: string;
  /** timestamp is the UNIX timestamp of the block in which the bundle got finalized. */
  timestamp: string;
}
export interface FinalizedAtProtoMsg {
  typeUrl: "/kyve.query.v1beta1.FinalizedAt";
  value: Uint8Array;
}
/** FinalizedAt stores information about finalization block and time. */
export interface FinalizedAtAmino {
  /** height is the block height in which the bundle got finalized. */
  height?: string;
  /** timestamp is the UNIX timestamp of the block in which the bundle got finalized. */
  timestamp?: string;
}
export interface FinalizedAtAminoMsg {
  type: "/kyve.query.v1beta1.FinalizedAt";
  value: FinalizedAtAmino;
}
/** FinalizedAt stores information about finalization block and time. */
export interface FinalizedAtSDKType {
  height: string;
  timestamp: string;
}
/** StakeSecurity represents the relative security of a finalized bundle */
export interface StakeSecurity {
  /** valid_vote_power gives the amount of $KYVE stake that voted `valid`. */
  validVotePower: string;
  /**
   * total_vote_power gives the amount of total $KYVE stake that was present in the pool
   * during finalization.
   */
  totalVotePower: string;
}
export interface StakeSecurityProtoMsg {
  typeUrl: "/kyve.query.v1beta1.StakeSecurity";
  value: Uint8Array;
}
/** StakeSecurity represents the relative security of a finalized bundle */
export interface StakeSecurityAmino {
  /** valid_vote_power gives the amount of $KYVE stake that voted `valid`. */
  valid_vote_power?: string;
  /**
   * total_vote_power gives the amount of total $KYVE stake that was present in the pool
   * during finalization.
   */
  total_vote_power?: string;
}
export interface StakeSecurityAminoMsg {
  type: "/kyve.query.v1beta1.StakeSecurity";
  value: StakeSecurityAmino;
}
/** StakeSecurity represents the relative security of a finalized bundle */
export interface StakeSecuritySDKType {
  valid_vote_power: string;
  total_vote_power: string;
}
/** QueryFinalizedBundlesRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  /** pool_id ... */
  poolId: bigint;
  /**
   * index is an optional parameter which tells the server to only show
   * the bundle with the given index. This can not be combined with pagination.
   */
  index: string;
}
export interface QueryFinalizedBundlesRequestProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryFinalizedBundlesRequest";
  value: Uint8Array;
}
/** QueryFinalizedBundlesRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
  /** pool_id ... */
  pool_id?: string;
  /**
   * index is an optional parameter which tells the server to only show
   * the bundle with the given index. This can not be combined with pagination.
   */
  index?: string;
}
export interface QueryFinalizedBundlesRequestAminoMsg {
  type: "/kyve.query.v1beta1.QueryFinalizedBundlesRequest";
  value: QueryFinalizedBundlesRequestAmino;
}
/** QueryFinalizedBundlesRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesRequestSDKType {
  pagination?: PageRequestSDKType;
  pool_id: bigint;
  index: string;
}
/** QueryStakersByPoolResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesResponse {
  /** finalized_bundles ... */
  finalizedBundles: FinalizedBundle[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryFinalizedBundlesResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryFinalizedBundlesResponse";
  value: Uint8Array;
}
/** QueryStakersByPoolResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesResponseAmino {
  /** finalized_bundles ... */
  finalized_bundles?: FinalizedBundleAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryFinalizedBundlesResponseAminoMsg {
  type: "/kyve.query.v1beta1.QueryFinalizedBundlesResponse";
  value: QueryFinalizedBundlesResponseAmino;
}
/** QueryStakersByPoolResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesResponseSDKType {
  finalized_bundles: FinalizedBundleSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryFinalizedBundleRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleRequest {
  /** pool_id ... */
  poolId: bigint;
  /** id ... */
  id: bigint;
}
export interface QueryFinalizedBundleRequestProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryFinalizedBundleRequest";
  value: Uint8Array;
}
/** QueryFinalizedBundleRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleRequestAmino {
  /** pool_id ... */
  pool_id?: string;
  /** id ... */
  id?: string;
}
export interface QueryFinalizedBundleRequestAminoMsg {
  type: "/kyve.query.v1beta1.QueryFinalizedBundleRequest";
  value: QueryFinalizedBundleRequestAmino;
}
/** QueryFinalizedBundleRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleRequestSDKType {
  pool_id: bigint;
  id: bigint;
}
/** QueryFinalizedBundleResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleResponse {
  /** finalized_bundles ... */
  finalizedBundles: FinalizedBundle;
}
export interface QueryFinalizedBundleResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryFinalizedBundleResponse";
  value: Uint8Array;
}
/** QueryFinalizedBundleResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleResponseAmino {
  /** finalized_bundles ... */
  finalized_bundles?: FinalizedBundleAmino;
}
export interface QueryFinalizedBundleResponseAminoMsg {
  type: "/kyve.query.v1beta1.QueryFinalizedBundleResponse";
  value: QueryFinalizedBundleResponseAmino;
}
/** QueryFinalizedBundleResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleResponseSDKType {
  finalized_bundles: FinalizedBundleSDKType;
}
/** QueryCurrentVoteStatusRequest is the request type for the Query/Staker RPC method. */
export interface QueryCurrentVoteStatusRequest {
  /** pool_id ... */
  poolId: bigint;
}
export interface QueryCurrentVoteStatusRequestProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryCurrentVoteStatusRequest";
  value: Uint8Array;
}
/** QueryCurrentVoteStatusRequest is the request type for the Query/Staker RPC method. */
export interface QueryCurrentVoteStatusRequestAmino {
  /** pool_id ... */
  pool_id?: string;
}
export interface QueryCurrentVoteStatusRequestAminoMsg {
  type: "/kyve.query.v1beta1.QueryCurrentVoteStatusRequest";
  value: QueryCurrentVoteStatusRequestAmino;
}
/** QueryCurrentVoteStatusRequest is the request type for the Query/Staker RPC method. */
export interface QueryCurrentVoteStatusRequestSDKType {
  pool_id: bigint;
}
/** QueryCurrentVoteStatusResponse is the response type for the Query/Staker RPC method. */
export interface QueryCurrentVoteStatusResponse {
  /** valid ... */
  valid: bigint;
  /** invalid ... */
  invalid: bigint;
  /** abstain ... */
  abstain: bigint;
  /** total ... */
  total: bigint;
}
export interface QueryCurrentVoteStatusResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryCurrentVoteStatusResponse";
  value: Uint8Array;
}
/** QueryCurrentVoteStatusResponse is the response type for the Query/Staker RPC method. */
export interface QueryCurrentVoteStatusResponseAmino {
  /** valid ... */
  valid?: string;
  /** invalid ... */
  invalid?: string;
  /** abstain ... */
  abstain?: string;
  /** total ... */
  total?: string;
}
export interface QueryCurrentVoteStatusResponseAminoMsg {
  type: "/kyve.query.v1beta1.QueryCurrentVoteStatusResponse";
  value: QueryCurrentVoteStatusResponseAmino;
}
/** QueryCurrentVoteStatusResponse is the response type for the Query/Staker RPC method. */
export interface QueryCurrentVoteStatusResponseSDKType {
  valid: bigint;
  invalid: bigint;
  abstain: bigint;
  total: bigint;
}
/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanValidateRequest {
  /** pool_id defines the unique ID of the pool. */
  poolId: bigint;
  /** valaddress ... */
  valaddress: string;
}
export interface QueryCanValidateRequestProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryCanValidateRequest";
  value: Uint8Array;
}
/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanValidateRequestAmino {
  /** pool_id defines the unique ID of the pool. */
  pool_id?: string;
  /** valaddress ... */
  valaddress?: string;
}
export interface QueryCanValidateRequestAminoMsg {
  type: "/kyve.query.v1beta1.QueryCanValidateRequest";
  value: QueryCanValidateRequestAmino;
}
/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanValidateRequestSDKType {
  pool_id: bigint;
  valaddress: string;
}
/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanValidateResponse {
  /** possible ... */
  possible: boolean;
  /** reason ... */
  reason: string;
}
export interface QueryCanValidateResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryCanValidateResponse";
  value: Uint8Array;
}
/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanValidateResponseAmino {
  /** possible ... */
  possible?: boolean;
  /** reason ... */
  reason?: string;
}
export interface QueryCanValidateResponseAminoMsg {
  type: "/kyve.query.v1beta1.QueryCanValidateResponse";
  value: QueryCanValidateResponseAmino;
}
/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanValidateResponseSDKType {
  possible: boolean;
  reason: string;
}
/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanProposeRequest {
  /** pool_id defines the unique ID of the pool. */
  poolId: bigint;
  /** staker ... */
  staker: string;
  /** proposer ... */
  proposer: string;
  /** from_index ... */
  fromIndex: bigint;
}
export interface QueryCanProposeRequestProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryCanProposeRequest";
  value: Uint8Array;
}
/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanProposeRequestAmino {
  /** pool_id defines the unique ID of the pool. */
  pool_id?: string;
  /** staker ... */
  staker?: string;
  /** proposer ... */
  proposer?: string;
  /** from_index ... */
  from_index?: string;
}
export interface QueryCanProposeRequestAminoMsg {
  type: "/kyve.query.v1beta1.QueryCanProposeRequest";
  value: QueryCanProposeRequestAmino;
}
/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanProposeRequestSDKType {
  pool_id: bigint;
  staker: string;
  proposer: string;
  from_index: bigint;
}
/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanProposeResponse {
  /** possible ... */
  possible: boolean;
  /** reason ... */
  reason: string;
}
export interface QueryCanProposeResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryCanProposeResponse";
  value: Uint8Array;
}
/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanProposeResponseAmino {
  /** possible ... */
  possible?: boolean;
  /** reason ... */
  reason?: string;
}
export interface QueryCanProposeResponseAminoMsg {
  type: "/kyve.query.v1beta1.QueryCanProposeResponse";
  value: QueryCanProposeResponseAmino;
}
/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanProposeResponseSDKType {
  possible: boolean;
  reason: string;
}
/** QueryCanVoteRequest is the request type for the Query/CanVote RPC method. */
export interface QueryCanVoteRequest {
  /** pool_id defines the unique ID of the pool. */
  poolId: bigint;
  /** staker ... */
  staker: string;
  /** voter ... */
  voter: string;
  /** storage_id ... */
  storageId: string;
}
export interface QueryCanVoteRequestProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryCanVoteRequest";
  value: Uint8Array;
}
/** QueryCanVoteRequest is the request type for the Query/CanVote RPC method. */
export interface QueryCanVoteRequestAmino {
  /** pool_id defines the unique ID of the pool. */
  pool_id?: string;
  /** staker ... */
  staker?: string;
  /** voter ... */
  voter?: string;
  /** storage_id ... */
  storage_id?: string;
}
export interface QueryCanVoteRequestAminoMsg {
  type: "/kyve.query.v1beta1.QueryCanVoteRequest";
  value: QueryCanVoteRequestAmino;
}
/** QueryCanVoteRequest is the request type for the Query/CanVote RPC method. */
export interface QueryCanVoteRequestSDKType {
  pool_id: bigint;
  staker: string;
  voter: string;
  storage_id: string;
}
/** QueryCanVoteResponse is the response type for the Query/CanVote RPC method. */
export interface QueryCanVoteResponse {
  /** possible ... */
  possible: boolean;
  /** reason ... */
  reason: string;
}
export interface QueryCanVoteResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryCanVoteResponse";
  value: Uint8Array;
}
/** QueryCanVoteResponse is the response type for the Query/CanVote RPC method. */
export interface QueryCanVoteResponseAmino {
  /** possible ... */
  possible?: boolean;
  /** reason ... */
  reason?: string;
}
export interface QueryCanVoteResponseAminoMsg {
  type: "/kyve.query.v1beta1.QueryCanVoteResponse";
  value: QueryCanVoteResponseAmino;
}
/** QueryCanVoteResponse is the response type for the Query/CanVote RPC method. */
export interface QueryCanVoteResponseSDKType {
  possible: boolean;
  reason: string;
}
function createBaseFinalizedBundle(): FinalizedBundle {
  return {
    poolId: BigInt(0),
    id: BigInt(0),
    storageId: "",
    uploader: "",
    fromIndex: BigInt(0),
    toIndex: BigInt(0),
    fromKey: "",
    toKey: "",
    bundleSummary: "",
    dataHash: "",
    finalizedAt: undefined,
    storageProviderId: BigInt(0),
    compressionId: BigInt(0),
    stakeSecurity: undefined
  };
}
export const FinalizedBundle = {
  typeUrl: "/kyve.query.v1beta1.FinalizedBundle",
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
    if (message.fromKey !== "") {
      writer.uint32(90).string(message.fromKey);
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
    if (message.storageProviderId !== BigInt(0)) {
      writer.uint32(96).uint64(message.storageProviderId);
    }
    if (message.compressionId !== BigInt(0)) {
      writer.uint32(104).uint64(message.compressionId);
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
      fromKey: isSet(object.fromKey) ? String(object.fromKey) : "",
      toKey: isSet(object.toKey) ? String(object.toKey) : "",
      bundleSummary: isSet(object.bundleSummary) ? String(object.bundleSummary) : "",
      dataHash: isSet(object.dataHash) ? String(object.dataHash) : "",
      finalizedAt: isSet(object.finalizedAt) ? FinalizedAt.fromJSON(object.finalizedAt) : undefined,
      storageProviderId: isSet(object.storageProviderId) ? BigInt(object.storageProviderId.toString()) : BigInt(0),
      compressionId: isSet(object.compressionId) ? BigInt(object.compressionId.toString()) : BigInt(0),
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
    message.fromKey = object.fromKey ?? "";
    message.toKey = object.toKey ?? "";
    message.bundleSummary = object.bundleSummary ?? "";
    message.dataHash = object.dataHash ?? "";
    message.finalizedAt = object.finalizedAt !== undefined && object.finalizedAt !== null ? FinalizedAt.fromPartial(object.finalizedAt) : undefined;
    message.storageProviderId = object.storageProviderId !== undefined && object.storageProviderId !== null ? BigInt(object.storageProviderId.toString()) : BigInt(0);
    message.compressionId = object.compressionId !== undefined && object.compressionId !== null ? BigInt(object.compressionId.toString()) : BigInt(0);
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
    if (object.from_key !== undefined && object.from_key !== null) {
      message.fromKey = object.from_key;
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
    if (object.storage_provider_id !== undefined && object.storage_provider_id !== null) {
      message.storageProviderId = BigInt(object.storage_provider_id);
    }
    if (object.compression_id !== undefined && object.compression_id !== null) {
      message.compressionId = BigInt(object.compression_id);
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
    obj.from_key = message.fromKey;
    obj.to_key = message.toKey;
    obj.bundle_summary = message.bundleSummary;
    obj.data_hash = message.dataHash;
    obj.finalized_at = message.finalizedAt ? FinalizedAt.toAmino(message.finalizedAt) : undefined;
    obj.storage_provider_id = message.storageProviderId ? message.storageProviderId.toString() : undefined;
    obj.compression_id = message.compressionId ? message.compressionId.toString() : undefined;
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
      typeUrl: "/kyve.query.v1beta1.FinalizedBundle",
      value: FinalizedBundle.encode(message).finish()
    };
  }
};
function createBaseFinalizedAt(): FinalizedAt {
  return {
    height: "",
    timestamp: ""
  };
}
export const FinalizedAt = {
  typeUrl: "/kyve.query.v1beta1.FinalizedAt",
  encode(message: FinalizedAt, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== "") {
      writer.uint32(10).string(message.height);
    }
    if (message.timestamp !== "") {
      writer.uint32(18).string(message.timestamp);
    }
    return writer;
  },
  fromJSON(object: any): FinalizedAt {
    return {
      height: isSet(object.height) ? String(object.height) : "",
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : ""
    };
  },
  fromPartial(object: Partial<FinalizedAt>): FinalizedAt {
    const message = createBaseFinalizedAt();
    message.height = object.height ?? "";
    message.timestamp = object.timestamp ?? "";
    return message;
  },
  fromAmino(object: FinalizedAtAmino): FinalizedAt {
    const message = createBaseFinalizedAt();
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    }
    return message;
  },
  toAmino(message: FinalizedAt): FinalizedAtAmino {
    const obj: any = {};
    obj.height = message.height;
    obj.timestamp = message.timestamp;
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
      typeUrl: "/kyve.query.v1beta1.FinalizedAt",
      value: FinalizedAt.encode(message).finish()
    };
  }
};
function createBaseStakeSecurity(): StakeSecurity {
  return {
    validVotePower: "",
    totalVotePower: ""
  };
}
export const StakeSecurity = {
  typeUrl: "/kyve.query.v1beta1.StakeSecurity",
  encode(message: StakeSecurity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validVotePower !== "") {
      writer.uint32(10).string(message.validVotePower);
    }
    if (message.totalVotePower !== "") {
      writer.uint32(18).string(message.totalVotePower);
    }
    return writer;
  },
  fromJSON(object: any): StakeSecurity {
    return {
      validVotePower: isSet(object.validVotePower) ? String(object.validVotePower) : "",
      totalVotePower: isSet(object.totalVotePower) ? String(object.totalVotePower) : ""
    };
  },
  fromPartial(object: Partial<StakeSecurity>): StakeSecurity {
    const message = createBaseStakeSecurity();
    message.validVotePower = object.validVotePower ?? "";
    message.totalVotePower = object.totalVotePower ?? "";
    return message;
  },
  fromAmino(object: StakeSecurityAmino): StakeSecurity {
    const message = createBaseStakeSecurity();
    if (object.valid_vote_power !== undefined && object.valid_vote_power !== null) {
      message.validVotePower = object.valid_vote_power;
    }
    if (object.total_vote_power !== undefined && object.total_vote_power !== null) {
      message.totalVotePower = object.total_vote_power;
    }
    return message;
  },
  toAmino(message: StakeSecurity): StakeSecurityAmino {
    const obj: any = {};
    obj.valid_vote_power = message.validVotePower;
    obj.total_vote_power = message.totalVotePower;
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
      typeUrl: "/kyve.query.v1beta1.StakeSecurity",
      value: StakeSecurity.encode(message).finish()
    };
  }
};
function createBaseQueryFinalizedBundlesRequest(): QueryFinalizedBundlesRequest {
  return {
    pagination: undefined,
    poolId: BigInt(0),
    index: ""
  };
}
export const QueryFinalizedBundlesRequest = {
  typeUrl: "/kyve.query.v1beta1.QueryFinalizedBundlesRequest",
  encode(message: QueryFinalizedBundlesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.index !== "") {
      writer.uint32(26).string(message.index);
    }
    return writer;
  },
  fromJSON(object: any): QueryFinalizedBundlesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      index: isSet(object.index) ? String(object.index) : ""
    };
  },
  fromPartial(object: Partial<QueryFinalizedBundlesRequest>): QueryFinalizedBundlesRequest {
    const message = createBaseQueryFinalizedBundlesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.index = object.index ?? "";
    return message;
  },
  fromAmino(object: QueryFinalizedBundlesRequestAmino): QueryFinalizedBundlesRequest {
    const message = createBaseQueryFinalizedBundlesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    return message;
  },
  toAmino(message: QueryFinalizedBundlesRequest): QueryFinalizedBundlesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.index = message.index;
    return obj;
  },
  fromAminoMsg(object: QueryFinalizedBundlesRequestAminoMsg): QueryFinalizedBundlesRequest {
    return QueryFinalizedBundlesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFinalizedBundlesRequestProtoMsg): QueryFinalizedBundlesRequest {
    return QueryFinalizedBundlesRequest.decode(message.value);
  },
  toProto(message: QueryFinalizedBundlesRequest): Uint8Array {
    return QueryFinalizedBundlesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFinalizedBundlesRequest): QueryFinalizedBundlesRequestProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryFinalizedBundlesRequest",
      value: QueryFinalizedBundlesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFinalizedBundlesResponse(): QueryFinalizedBundlesResponse {
  return {
    finalizedBundles: [],
    pagination: undefined
  };
}
export const QueryFinalizedBundlesResponse = {
  typeUrl: "/kyve.query.v1beta1.QueryFinalizedBundlesResponse",
  encode(message: QueryFinalizedBundlesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.finalizedBundles) {
      FinalizedBundle.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryFinalizedBundlesResponse {
    return {
      finalizedBundles: Array.isArray(object?.finalizedBundles) ? object.finalizedBundles.map((e: any) => FinalizedBundle.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryFinalizedBundlesResponse>): QueryFinalizedBundlesResponse {
    const message = createBaseQueryFinalizedBundlesResponse();
    message.finalizedBundles = object.finalizedBundles?.map(e => FinalizedBundle.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFinalizedBundlesResponseAmino): QueryFinalizedBundlesResponse {
    const message = createBaseQueryFinalizedBundlesResponse();
    message.finalizedBundles = object.finalized_bundles?.map(e => FinalizedBundle.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFinalizedBundlesResponse): QueryFinalizedBundlesResponseAmino {
    const obj: any = {};
    if (message.finalizedBundles) {
      obj.finalized_bundles = message.finalizedBundles.map(e => e ? FinalizedBundle.toAmino(e) : undefined);
    } else {
      obj.finalized_bundles = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFinalizedBundlesResponseAminoMsg): QueryFinalizedBundlesResponse {
    return QueryFinalizedBundlesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFinalizedBundlesResponseProtoMsg): QueryFinalizedBundlesResponse {
    return QueryFinalizedBundlesResponse.decode(message.value);
  },
  toProto(message: QueryFinalizedBundlesResponse): Uint8Array {
    return QueryFinalizedBundlesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFinalizedBundlesResponse): QueryFinalizedBundlesResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryFinalizedBundlesResponse",
      value: QueryFinalizedBundlesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFinalizedBundleRequest(): QueryFinalizedBundleRequest {
  return {
    poolId: BigInt(0),
    id: BigInt(0)
  };
}
export const QueryFinalizedBundleRequest = {
  typeUrl: "/kyve.query.v1beta1.QueryFinalizedBundleRequest",
  encode(message: QueryFinalizedBundleRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryFinalizedBundleRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryFinalizedBundleRequest>): QueryFinalizedBundleRequest {
    const message = createBaseQueryFinalizedBundleRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryFinalizedBundleRequestAmino): QueryFinalizedBundleRequest {
    const message = createBaseQueryFinalizedBundleRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryFinalizedBundleRequest): QueryFinalizedBundleRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFinalizedBundleRequestAminoMsg): QueryFinalizedBundleRequest {
    return QueryFinalizedBundleRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFinalizedBundleRequestProtoMsg): QueryFinalizedBundleRequest {
    return QueryFinalizedBundleRequest.decode(message.value);
  },
  toProto(message: QueryFinalizedBundleRequest): Uint8Array {
    return QueryFinalizedBundleRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFinalizedBundleRequest): QueryFinalizedBundleRequestProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryFinalizedBundleRequest",
      value: QueryFinalizedBundleRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFinalizedBundleResponse(): QueryFinalizedBundleResponse {
  return {
    finalizedBundles: FinalizedBundle.fromPartial({})
  };
}
export const QueryFinalizedBundleResponse = {
  typeUrl: "/kyve.query.v1beta1.QueryFinalizedBundleResponse",
  encode(message: QueryFinalizedBundleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.finalizedBundles !== undefined) {
      FinalizedBundle.encode(message.finalizedBundles, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryFinalizedBundleResponse {
    return {
      finalizedBundles: isSet(object.finalizedBundles) ? FinalizedBundle.fromJSON(object.finalizedBundles) : undefined
    };
  },
  fromPartial(object: Partial<QueryFinalizedBundleResponse>): QueryFinalizedBundleResponse {
    const message = createBaseQueryFinalizedBundleResponse();
    message.finalizedBundles = object.finalizedBundles !== undefined && object.finalizedBundles !== null ? FinalizedBundle.fromPartial(object.finalizedBundles) : undefined;
    return message;
  },
  fromAmino(object: QueryFinalizedBundleResponseAmino): QueryFinalizedBundleResponse {
    const message = createBaseQueryFinalizedBundleResponse();
    if (object.finalized_bundles !== undefined && object.finalized_bundles !== null) {
      message.finalizedBundles = FinalizedBundle.fromAmino(object.finalized_bundles);
    }
    return message;
  },
  toAmino(message: QueryFinalizedBundleResponse): QueryFinalizedBundleResponseAmino {
    const obj: any = {};
    obj.finalized_bundles = message.finalizedBundles ? FinalizedBundle.toAmino(message.finalizedBundles) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFinalizedBundleResponseAminoMsg): QueryFinalizedBundleResponse {
    return QueryFinalizedBundleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFinalizedBundleResponseProtoMsg): QueryFinalizedBundleResponse {
    return QueryFinalizedBundleResponse.decode(message.value);
  },
  toProto(message: QueryFinalizedBundleResponse): Uint8Array {
    return QueryFinalizedBundleResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFinalizedBundleResponse): QueryFinalizedBundleResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryFinalizedBundleResponse",
      value: QueryFinalizedBundleResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentVoteStatusRequest(): QueryCurrentVoteStatusRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryCurrentVoteStatusRequest = {
  typeUrl: "/kyve.query.v1beta1.QueryCurrentVoteStatusRequest",
  encode(message: QueryCurrentVoteStatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  fromJSON(object: any): QueryCurrentVoteStatusRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryCurrentVoteStatusRequest>): QueryCurrentVoteStatusRequest {
    const message = createBaseQueryCurrentVoteStatusRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCurrentVoteStatusRequestAmino): QueryCurrentVoteStatusRequest {
    const message = createBaseQueryCurrentVoteStatusRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryCurrentVoteStatusRequest): QueryCurrentVoteStatusRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentVoteStatusRequestAminoMsg): QueryCurrentVoteStatusRequest {
    return QueryCurrentVoteStatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentVoteStatusRequestProtoMsg): QueryCurrentVoteStatusRequest {
    return QueryCurrentVoteStatusRequest.decode(message.value);
  },
  toProto(message: QueryCurrentVoteStatusRequest): Uint8Array {
    return QueryCurrentVoteStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentVoteStatusRequest): QueryCurrentVoteStatusRequestProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryCurrentVoteStatusRequest",
      value: QueryCurrentVoteStatusRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentVoteStatusResponse(): QueryCurrentVoteStatusResponse {
  return {
    valid: BigInt(0),
    invalid: BigInt(0),
    abstain: BigInt(0),
    total: BigInt(0)
  };
}
export const QueryCurrentVoteStatusResponse = {
  typeUrl: "/kyve.query.v1beta1.QueryCurrentVoteStatusResponse",
  encode(message: QueryCurrentVoteStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valid !== BigInt(0)) {
      writer.uint32(8).uint64(message.valid);
    }
    if (message.invalid !== BigInt(0)) {
      writer.uint32(16).uint64(message.invalid);
    }
    if (message.abstain !== BigInt(0)) {
      writer.uint32(24).uint64(message.abstain);
    }
    if (message.total !== BigInt(0)) {
      writer.uint32(32).uint64(message.total);
    }
    return writer;
  },
  fromJSON(object: any): QueryCurrentVoteStatusResponse {
    return {
      valid: isSet(object.valid) ? BigInt(object.valid.toString()) : BigInt(0),
      invalid: isSet(object.invalid) ? BigInt(object.invalid.toString()) : BigInt(0),
      abstain: isSet(object.abstain) ? BigInt(object.abstain.toString()) : BigInt(0),
      total: isSet(object.total) ? BigInt(object.total.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryCurrentVoteStatusResponse>): QueryCurrentVoteStatusResponse {
    const message = createBaseQueryCurrentVoteStatusResponse();
    message.valid = object.valid !== undefined && object.valid !== null ? BigInt(object.valid.toString()) : BigInt(0);
    message.invalid = object.invalid !== undefined && object.invalid !== null ? BigInt(object.invalid.toString()) : BigInt(0);
    message.abstain = object.abstain !== undefined && object.abstain !== null ? BigInt(object.abstain.toString()) : BigInt(0);
    message.total = object.total !== undefined && object.total !== null ? BigInt(object.total.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCurrentVoteStatusResponseAmino): QueryCurrentVoteStatusResponse {
    const message = createBaseQueryCurrentVoteStatusResponse();
    if (object.valid !== undefined && object.valid !== null) {
      message.valid = BigInt(object.valid);
    }
    if (object.invalid !== undefined && object.invalid !== null) {
      message.invalid = BigInt(object.invalid);
    }
    if (object.abstain !== undefined && object.abstain !== null) {
      message.abstain = BigInt(object.abstain);
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = BigInt(object.total);
    }
    return message;
  },
  toAmino(message: QueryCurrentVoteStatusResponse): QueryCurrentVoteStatusResponseAmino {
    const obj: any = {};
    obj.valid = message.valid ? message.valid.toString() : undefined;
    obj.invalid = message.invalid ? message.invalid.toString() : undefined;
    obj.abstain = message.abstain ? message.abstain.toString() : undefined;
    obj.total = message.total ? message.total.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentVoteStatusResponseAminoMsg): QueryCurrentVoteStatusResponse {
    return QueryCurrentVoteStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentVoteStatusResponseProtoMsg): QueryCurrentVoteStatusResponse {
    return QueryCurrentVoteStatusResponse.decode(message.value);
  },
  toProto(message: QueryCurrentVoteStatusResponse): Uint8Array {
    return QueryCurrentVoteStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentVoteStatusResponse): QueryCurrentVoteStatusResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryCurrentVoteStatusResponse",
      value: QueryCurrentVoteStatusResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCanValidateRequest(): QueryCanValidateRequest {
  return {
    poolId: BigInt(0),
    valaddress: ""
  };
}
export const QueryCanValidateRequest = {
  typeUrl: "/kyve.query.v1beta1.QueryCanValidateRequest",
  encode(message: QueryCanValidateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.valaddress !== "") {
      writer.uint32(18).string(message.valaddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryCanValidateRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      valaddress: isSet(object.valaddress) ? String(object.valaddress) : ""
    };
  },
  fromPartial(object: Partial<QueryCanValidateRequest>): QueryCanValidateRequest {
    const message = createBaseQueryCanValidateRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.valaddress = object.valaddress ?? "";
    return message;
  },
  fromAmino(object: QueryCanValidateRequestAmino): QueryCanValidateRequest {
    const message = createBaseQueryCanValidateRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.valaddress !== undefined && object.valaddress !== null) {
      message.valaddress = object.valaddress;
    }
    return message;
  },
  toAmino(message: QueryCanValidateRequest): QueryCanValidateRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.valaddress = message.valaddress;
    return obj;
  },
  fromAminoMsg(object: QueryCanValidateRequestAminoMsg): QueryCanValidateRequest {
    return QueryCanValidateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCanValidateRequestProtoMsg): QueryCanValidateRequest {
    return QueryCanValidateRequest.decode(message.value);
  },
  toProto(message: QueryCanValidateRequest): Uint8Array {
    return QueryCanValidateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCanValidateRequest): QueryCanValidateRequestProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryCanValidateRequest",
      value: QueryCanValidateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCanValidateResponse(): QueryCanValidateResponse {
  return {
    possible: false,
    reason: ""
  };
}
export const QueryCanValidateResponse = {
  typeUrl: "/kyve.query.v1beta1.QueryCanValidateResponse",
  encode(message: QueryCanValidateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.possible === true) {
      writer.uint32(8).bool(message.possible);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },
  fromJSON(object: any): QueryCanValidateResponse {
    return {
      possible: isSet(object.possible) ? Boolean(object.possible) : false,
      reason: isSet(object.reason) ? String(object.reason) : ""
    };
  },
  fromPartial(object: Partial<QueryCanValidateResponse>): QueryCanValidateResponse {
    const message = createBaseQueryCanValidateResponse();
    message.possible = object.possible ?? false;
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: QueryCanValidateResponseAmino): QueryCanValidateResponse {
    const message = createBaseQueryCanValidateResponse();
    if (object.possible !== undefined && object.possible !== null) {
      message.possible = object.possible;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: QueryCanValidateResponse): QueryCanValidateResponseAmino {
    const obj: any = {};
    obj.possible = message.possible;
    obj.reason = message.reason;
    return obj;
  },
  fromAminoMsg(object: QueryCanValidateResponseAminoMsg): QueryCanValidateResponse {
    return QueryCanValidateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCanValidateResponseProtoMsg): QueryCanValidateResponse {
    return QueryCanValidateResponse.decode(message.value);
  },
  toProto(message: QueryCanValidateResponse): Uint8Array {
    return QueryCanValidateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCanValidateResponse): QueryCanValidateResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryCanValidateResponse",
      value: QueryCanValidateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCanProposeRequest(): QueryCanProposeRequest {
  return {
    poolId: BigInt(0),
    staker: "",
    proposer: "",
    fromIndex: BigInt(0)
  };
}
export const QueryCanProposeRequest = {
  typeUrl: "/kyve.query.v1beta1.QueryCanProposeRequest",
  encode(message: QueryCanProposeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }
    if (message.fromIndex !== BigInt(0)) {
      writer.uint32(32).uint64(message.fromIndex);
    }
    return writer;
  },
  fromJSON(object: any): QueryCanProposeRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      staker: isSet(object.staker) ? String(object.staker) : "",
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
      fromIndex: isSet(object.fromIndex) ? BigInt(object.fromIndex.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryCanProposeRequest>): QueryCanProposeRequest {
    const message = createBaseQueryCanProposeRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.staker = object.staker ?? "";
    message.proposer = object.proposer ?? "";
    message.fromIndex = object.fromIndex !== undefined && object.fromIndex !== null ? BigInt(object.fromIndex.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCanProposeRequestAmino): QueryCanProposeRequest {
    const message = createBaseQueryCanProposeRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    if (object.from_index !== undefined && object.from_index !== null) {
      message.fromIndex = BigInt(object.from_index);
    }
    return message;
  },
  toAmino(message: QueryCanProposeRequest): QueryCanProposeRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.staker = message.staker;
    obj.proposer = message.proposer;
    obj.from_index = message.fromIndex ? message.fromIndex.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCanProposeRequestAminoMsg): QueryCanProposeRequest {
    return QueryCanProposeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCanProposeRequestProtoMsg): QueryCanProposeRequest {
    return QueryCanProposeRequest.decode(message.value);
  },
  toProto(message: QueryCanProposeRequest): Uint8Array {
    return QueryCanProposeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCanProposeRequest): QueryCanProposeRequestProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryCanProposeRequest",
      value: QueryCanProposeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCanProposeResponse(): QueryCanProposeResponse {
  return {
    possible: false,
    reason: ""
  };
}
export const QueryCanProposeResponse = {
  typeUrl: "/kyve.query.v1beta1.QueryCanProposeResponse",
  encode(message: QueryCanProposeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.possible === true) {
      writer.uint32(8).bool(message.possible);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },
  fromJSON(object: any): QueryCanProposeResponse {
    return {
      possible: isSet(object.possible) ? Boolean(object.possible) : false,
      reason: isSet(object.reason) ? String(object.reason) : ""
    };
  },
  fromPartial(object: Partial<QueryCanProposeResponse>): QueryCanProposeResponse {
    const message = createBaseQueryCanProposeResponse();
    message.possible = object.possible ?? false;
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: QueryCanProposeResponseAmino): QueryCanProposeResponse {
    const message = createBaseQueryCanProposeResponse();
    if (object.possible !== undefined && object.possible !== null) {
      message.possible = object.possible;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: QueryCanProposeResponse): QueryCanProposeResponseAmino {
    const obj: any = {};
    obj.possible = message.possible;
    obj.reason = message.reason;
    return obj;
  },
  fromAminoMsg(object: QueryCanProposeResponseAminoMsg): QueryCanProposeResponse {
    return QueryCanProposeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCanProposeResponseProtoMsg): QueryCanProposeResponse {
    return QueryCanProposeResponse.decode(message.value);
  },
  toProto(message: QueryCanProposeResponse): Uint8Array {
    return QueryCanProposeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCanProposeResponse): QueryCanProposeResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryCanProposeResponse",
      value: QueryCanProposeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCanVoteRequest(): QueryCanVoteRequest {
  return {
    poolId: BigInt(0),
    staker: "",
    voter: "",
    storageId: ""
  };
}
export const QueryCanVoteRequest = {
  typeUrl: "/kyve.query.v1beta1.QueryCanVoteRequest",
  encode(message: QueryCanVoteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.voter !== "") {
      writer.uint32(26).string(message.voter);
    }
    if (message.storageId !== "") {
      writer.uint32(34).string(message.storageId);
    }
    return writer;
  },
  fromJSON(object: any): QueryCanVoteRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      staker: isSet(object.staker) ? String(object.staker) : "",
      voter: isSet(object.voter) ? String(object.voter) : "",
      storageId: isSet(object.storageId) ? String(object.storageId) : ""
    };
  },
  fromPartial(object: Partial<QueryCanVoteRequest>): QueryCanVoteRequest {
    const message = createBaseQueryCanVoteRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.staker = object.staker ?? "";
    message.voter = object.voter ?? "";
    message.storageId = object.storageId ?? "";
    return message;
  },
  fromAmino(object: QueryCanVoteRequestAmino): QueryCanVoteRequest {
    const message = createBaseQueryCanVoteRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.storage_id !== undefined && object.storage_id !== null) {
      message.storageId = object.storage_id;
    }
    return message;
  },
  toAmino(message: QueryCanVoteRequest): QueryCanVoteRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.staker = message.staker;
    obj.voter = message.voter;
    obj.storage_id = message.storageId;
    return obj;
  },
  fromAminoMsg(object: QueryCanVoteRequestAminoMsg): QueryCanVoteRequest {
    return QueryCanVoteRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCanVoteRequestProtoMsg): QueryCanVoteRequest {
    return QueryCanVoteRequest.decode(message.value);
  },
  toProto(message: QueryCanVoteRequest): Uint8Array {
    return QueryCanVoteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCanVoteRequest): QueryCanVoteRequestProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryCanVoteRequest",
      value: QueryCanVoteRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCanVoteResponse(): QueryCanVoteResponse {
  return {
    possible: false,
    reason: ""
  };
}
export const QueryCanVoteResponse = {
  typeUrl: "/kyve.query.v1beta1.QueryCanVoteResponse",
  encode(message: QueryCanVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.possible === true) {
      writer.uint32(8).bool(message.possible);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },
  fromJSON(object: any): QueryCanVoteResponse {
    return {
      possible: isSet(object.possible) ? Boolean(object.possible) : false,
      reason: isSet(object.reason) ? String(object.reason) : ""
    };
  },
  fromPartial(object: Partial<QueryCanVoteResponse>): QueryCanVoteResponse {
    const message = createBaseQueryCanVoteResponse();
    message.possible = object.possible ?? false;
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: QueryCanVoteResponseAmino): QueryCanVoteResponse {
    const message = createBaseQueryCanVoteResponse();
    if (object.possible !== undefined && object.possible !== null) {
      message.possible = object.possible;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: QueryCanVoteResponse): QueryCanVoteResponseAmino {
    const obj: any = {};
    obj.possible = message.possible;
    obj.reason = message.reason;
    return obj;
  },
  fromAminoMsg(object: QueryCanVoteResponseAminoMsg): QueryCanVoteResponse {
    return QueryCanVoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCanVoteResponseProtoMsg): QueryCanVoteResponse {
    return QueryCanVoteResponse.decode(message.value);
  },
  toProto(message: QueryCanVoteResponse): Uint8Array {
    return QueryCanVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCanVoteResponse): QueryCanVoteResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryCanVoteResponse",
      value: QueryCanVoteResponse.encode(message).finish()
    };
  }
};