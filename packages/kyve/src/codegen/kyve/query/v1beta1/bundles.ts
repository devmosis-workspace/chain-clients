import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** FinalizedBundle represents the latest version of a valid bundle of a pool */
export interface FinalizedBundle {
  /** pool_id in which the bundle was created */
  poolId: Long;
  /** id is is integrated with each valid bundle produced. */
  id: Long;
  /** storage_id is the id with which the data can be retrieved from the configured data provider */
  storageId: string;
  /** uploader is the address of the staker who submitted this bundle */
  uploader: string;
  /** from_index is the index from where the bundle starts (inclusive) */
  fromIndex: Long;
  /** to_index is the index to which the bundle goes (exclusive) */
  toIndex: Long;
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
  storageProviderId: Long;
  /** compression_id the id of the compression type with which the data was compressed */
  compressionId: Long;
  /**
   * stake_security defines the amount of stake which was present in the pool during the finalization of the bundle.
   * This field was added in schema version 2. Bundles finalized before that return `null`.
   */
  stakeSecurity?: StakeSecurity;
}
/** FinalizedBundle represents the latest version of a valid bundle of a pool */
export interface FinalizedBundleSDKType {
  pool_id: Long;
  id: Long;
  storage_id: string;
  uploader: string;
  from_index: Long;
  to_index: Long;
  from_key: string;
  to_key: string;
  bundle_summary: string;
  data_hash: string;
  finalized_at?: FinalizedAtSDKType;
  storage_provider_id: Long;
  compression_id: Long;
  stake_security?: StakeSecuritySDKType;
}
/** FinalizedAt stores information about finalization block and time. */
export interface FinalizedAt {
  /** height is the block height in which the bundle got finalized. */
  height: string;
  /** timestamp is the UNIX timestamp of the block in which the bundle got finalized. */
  timestamp: string;
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
  poolId: Long;
  /**
   * index is an optional parameter which tells the server to only show
   * the bundle with the given index. This can not be combined with pagination.
   */
  index: string;
}
/** QueryFinalizedBundlesRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesRequestSDKType {
  pagination?: PageRequestSDKType;
  pool_id: Long;
  index: string;
}
/** QueryStakersByPoolResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesResponse {
  /** finalized_bundles ... */
  finalizedBundles: FinalizedBundle[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryStakersByPoolResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesResponseSDKType {
  finalized_bundles: FinalizedBundleSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryFinalizedBundleRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleRequest {
  /** pool_id ... */
  poolId: Long;
  /** id ... */
  id: Long;
}
/** QueryFinalizedBundleRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleRequestSDKType {
  pool_id: Long;
  id: Long;
}
/** QueryFinalizedBundleResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleResponse {
  /** finalized_bundles ... */
  finalizedBundles?: FinalizedBundle;
}
/** QueryFinalizedBundleResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleResponseSDKType {
  finalized_bundles?: FinalizedBundleSDKType;
}
/** QueryCurrentVoteStatusRequest is the request type for the Query/Staker RPC method. */
export interface QueryCurrentVoteStatusRequest {
  /** pool_id ... */
  poolId: Long;
}
/** QueryCurrentVoteStatusRequest is the request type for the Query/Staker RPC method. */
export interface QueryCurrentVoteStatusRequestSDKType {
  pool_id: Long;
}
/** QueryCurrentVoteStatusResponse is the response type for the Query/Staker RPC method. */
export interface QueryCurrentVoteStatusResponse {
  /** valid ... */
  valid: Long;
  /** invalid ... */
  invalid: Long;
  /** abstain ... */
  abstain: Long;
  /** total ... */
  total: Long;
}
/** QueryCurrentVoteStatusResponse is the response type for the Query/Staker RPC method. */
export interface QueryCurrentVoteStatusResponseSDKType {
  valid: Long;
  invalid: Long;
  abstain: Long;
  total: Long;
}
/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanValidateRequest {
  /** pool_id defines the unique ID of the pool. */
  poolId: Long;
  /** valaddress ... */
  valaddress: string;
}
/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanValidateRequestSDKType {
  pool_id: Long;
  valaddress: string;
}
/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanValidateResponse {
  /** possible ... */
  possible: boolean;
  /** reason ... */
  reason: string;
}
/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanValidateResponseSDKType {
  possible: boolean;
  reason: string;
}
/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanProposeRequest {
  /** pool_id defines the unique ID of the pool. */
  poolId: Long;
  /** staker ... */
  staker: string;
  /** proposer ... */
  proposer: string;
  /** from_index ... */
  fromIndex: Long;
}
/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanProposeRequestSDKType {
  pool_id: Long;
  staker: string;
  proposer: string;
  from_index: Long;
}
/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanProposeResponse {
  /** possible ... */
  possible: boolean;
  /** reason ... */
  reason: string;
}
/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanProposeResponseSDKType {
  possible: boolean;
  reason: string;
}
/** QueryCanVoteRequest is the request type for the Query/CanVote RPC method. */
export interface QueryCanVoteRequest {
  /** pool_id defines the unique ID of the pool. */
  poolId: Long;
  /** staker ... */
  staker: string;
  /** voter ... */
  voter: string;
  /** storage_id ... */
  storageId: string;
}
/** QueryCanVoteRequest is the request type for the Query/CanVote RPC method. */
export interface QueryCanVoteRequestSDKType {
  pool_id: Long;
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
/** QueryCanVoteResponse is the response type for the Query/CanVote RPC method. */
export interface QueryCanVoteResponseSDKType {
  possible: boolean;
  reason: string;
}
function createBaseFinalizedBundle(): FinalizedBundle {
  return {
    poolId: Long.UZERO,
    id: Long.UZERO,
    storageId: "",
    uploader: "",
    fromIndex: Long.UZERO,
    toIndex: Long.UZERO,
    fromKey: "",
    toKey: "",
    bundleSummary: "",
    dataHash: "",
    finalizedAt: undefined,
    storageProviderId: Long.UZERO,
    compressionId: Long.UZERO,
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
    if (!message.storageProviderId.isZero()) {
      writer.uint32(96).uint64(message.storageProviderId);
    }
    if (!message.compressionId.isZero()) {
      writer.uint32(104).uint64(message.compressionId);
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
      fromKey: isSet(object.fromKey) ? String(object.fromKey) : "",
      toKey: isSet(object.toKey) ? String(object.toKey) : "",
      bundleSummary: isSet(object.bundleSummary) ? String(object.bundleSummary) : "",
      dataHash: isSet(object.dataHash) ? String(object.dataHash) : "",
      finalizedAt: isSet(object.finalizedAt) ? FinalizedAt.fromJSON(object.finalizedAt) : undefined,
      storageProviderId: isSet(object.storageProviderId) ? Long.fromValue(object.storageProviderId) : Long.UZERO,
      compressionId: isSet(object.compressionId) ? Long.fromValue(object.compressionId) : Long.UZERO,
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
    message.fromKey = object.fromKey ?? "";
    message.toKey = object.toKey ?? "";
    message.bundleSummary = object.bundleSummary ?? "";
    message.dataHash = object.dataHash ?? "";
    message.finalizedAt = object.finalizedAt !== undefined && object.finalizedAt !== null ? FinalizedAt.fromPartial(object.finalizedAt) : undefined;
    message.storageProviderId = object.storageProviderId !== undefined && object.storageProviderId !== null ? Long.fromValue(object.storageProviderId) : Long.UZERO;
    message.compressionId = object.compressionId !== undefined && object.compressionId !== null ? Long.fromValue(object.compressionId) : Long.UZERO;
    message.stakeSecurity = object.stakeSecurity !== undefined && object.stakeSecurity !== null ? StakeSecurity.fromPartial(object.stakeSecurity) : undefined;
    return message;
  }
};
function createBaseFinalizedAt(): FinalizedAt {
  return {
    height: "",
    timestamp: ""
  };
}
export const FinalizedAt = {
  encode(message: FinalizedAt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseStakeSecurity(): StakeSecurity {
  return {
    validVotePower: "",
    totalVotePower: ""
  };
}
export const StakeSecurity = {
  encode(message: StakeSecurity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryFinalizedBundlesRequest(): QueryFinalizedBundlesRequest {
  return {
    pagination: undefined,
    poolId: Long.UZERO,
    index: ""
  };
}
export const QueryFinalizedBundlesRequest = {
  encode(message: QueryFinalizedBundlesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (!message.poolId.isZero()) {
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
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      index: isSet(object.index) ? String(object.index) : ""
    };
  },
  fromPartial(object: Partial<QueryFinalizedBundlesRequest>): QueryFinalizedBundlesRequest {
    const message = createBaseQueryFinalizedBundlesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.index = object.index ?? "";
    return message;
  }
};
function createBaseQueryFinalizedBundlesResponse(): QueryFinalizedBundlesResponse {
  return {
    finalizedBundles: [],
    pagination: undefined
  };
}
export const QueryFinalizedBundlesResponse = {
  encode(message: QueryFinalizedBundlesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryFinalizedBundleRequest(): QueryFinalizedBundleRequest {
  return {
    poolId: Long.UZERO,
    id: Long.UZERO
  };
}
export const QueryFinalizedBundleRequest = {
  encode(message: QueryFinalizedBundleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryFinalizedBundleRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryFinalizedBundleRequest>): QueryFinalizedBundleRequest {
    const message = createBaseQueryFinalizedBundleRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseQueryFinalizedBundleResponse(): QueryFinalizedBundleResponse {
  return {
    finalizedBundles: undefined
  };
}
export const QueryFinalizedBundleResponse = {
  encode(message: QueryFinalizedBundleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryCurrentVoteStatusRequest(): QueryCurrentVoteStatusRequest {
  return {
    poolId: Long.UZERO
  };
}
export const QueryCurrentVoteStatusRequest = {
  encode(message: QueryCurrentVoteStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  fromJSON(object: any): QueryCurrentVoteStatusRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryCurrentVoteStatusRequest>): QueryCurrentVoteStatusRequest {
    const message = createBaseQueryCurrentVoteStatusRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryCurrentVoteStatusResponse(): QueryCurrentVoteStatusResponse {
  return {
    valid: Long.UZERO,
    invalid: Long.UZERO,
    abstain: Long.UZERO,
    total: Long.UZERO
  };
}
export const QueryCurrentVoteStatusResponse = {
  encode(message: QueryCurrentVoteStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.valid.isZero()) {
      writer.uint32(8).uint64(message.valid);
    }
    if (!message.invalid.isZero()) {
      writer.uint32(16).uint64(message.invalid);
    }
    if (!message.abstain.isZero()) {
      writer.uint32(24).uint64(message.abstain);
    }
    if (!message.total.isZero()) {
      writer.uint32(32).uint64(message.total);
    }
    return writer;
  },
  fromJSON(object: any): QueryCurrentVoteStatusResponse {
    return {
      valid: isSet(object.valid) ? Long.fromValue(object.valid) : Long.UZERO,
      invalid: isSet(object.invalid) ? Long.fromValue(object.invalid) : Long.UZERO,
      abstain: isSet(object.abstain) ? Long.fromValue(object.abstain) : Long.UZERO,
      total: isSet(object.total) ? Long.fromValue(object.total) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryCurrentVoteStatusResponse>): QueryCurrentVoteStatusResponse {
    const message = createBaseQueryCurrentVoteStatusResponse();
    message.valid = object.valid !== undefined && object.valid !== null ? Long.fromValue(object.valid) : Long.UZERO;
    message.invalid = object.invalid !== undefined && object.invalid !== null ? Long.fromValue(object.invalid) : Long.UZERO;
    message.abstain = object.abstain !== undefined && object.abstain !== null ? Long.fromValue(object.abstain) : Long.UZERO;
    message.total = object.total !== undefined && object.total !== null ? Long.fromValue(object.total) : Long.UZERO;
    return message;
  }
};
function createBaseQueryCanValidateRequest(): QueryCanValidateRequest {
  return {
    poolId: Long.UZERO,
    valaddress: ""
  };
}
export const QueryCanValidateRequest = {
  encode(message: QueryCanValidateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.valaddress !== "") {
      writer.uint32(18).string(message.valaddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryCanValidateRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      valaddress: isSet(object.valaddress) ? String(object.valaddress) : ""
    };
  },
  fromPartial(object: Partial<QueryCanValidateRequest>): QueryCanValidateRequest {
    const message = createBaseQueryCanValidateRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.valaddress = object.valaddress ?? "";
    return message;
  }
};
function createBaseQueryCanValidateResponse(): QueryCanValidateResponse {
  return {
    possible: false,
    reason: ""
  };
}
export const QueryCanValidateResponse = {
  encode(message: QueryCanValidateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryCanProposeRequest(): QueryCanProposeRequest {
  return {
    poolId: Long.UZERO,
    staker: "",
    proposer: "",
    fromIndex: Long.UZERO
  };
}
export const QueryCanProposeRequest = {
  encode(message: QueryCanProposeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }
    if (!message.fromIndex.isZero()) {
      writer.uint32(32).uint64(message.fromIndex);
    }
    return writer;
  },
  fromJSON(object: any): QueryCanProposeRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      staker: isSet(object.staker) ? String(object.staker) : "",
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
      fromIndex: isSet(object.fromIndex) ? Long.fromValue(object.fromIndex) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryCanProposeRequest>): QueryCanProposeRequest {
    const message = createBaseQueryCanProposeRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.staker = object.staker ?? "";
    message.proposer = object.proposer ?? "";
    message.fromIndex = object.fromIndex !== undefined && object.fromIndex !== null ? Long.fromValue(object.fromIndex) : Long.UZERO;
    return message;
  }
};
function createBaseQueryCanProposeResponse(): QueryCanProposeResponse {
  return {
    possible: false,
    reason: ""
  };
}
export const QueryCanProposeResponse = {
  encode(message: QueryCanProposeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryCanVoteRequest(): QueryCanVoteRequest {
  return {
    poolId: Long.UZERO,
    staker: "",
    voter: "",
    storageId: ""
  };
}
export const QueryCanVoteRequest = {
  encode(message: QueryCanVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
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
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      staker: isSet(object.staker) ? String(object.staker) : "",
      voter: isSet(object.voter) ? String(object.voter) : "",
      storageId: isSet(object.storageId) ? String(object.storageId) : ""
    };
  },
  fromPartial(object: Partial<QueryCanVoteRequest>): QueryCanVoteRequest {
    const message = createBaseQueryCanVoteRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.staker = object.staker ?? "";
    message.voter = object.voter ?? "";
    message.storageId = object.storageId ?? "";
    return message;
  }
};
function createBaseQueryCanVoteResponse(): QueryCanVoteResponse {
  return {
    possible: false,
    reason: ""
  };
}
export const QueryCanVoteResponse = {
  encode(message: QueryCanVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};