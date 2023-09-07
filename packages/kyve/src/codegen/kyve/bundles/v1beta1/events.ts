import { Params, ParamsSDKType } from "./params";
import { VoteType, voteTypeFromJSON } from "./tx";
import { BundleStatus, bundleStatusFromJSON } from "./bundles";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParams {
  /** old_params is the module's old parameters. */
  oldParams?: Params;
  /** new_params is the module's new parameters. */
  newParams?: Params;
  /** payload is the parameter updates that were performed. */
  payload: string;
}
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParamsSDKType {
  old_params?: ParamsSDKType;
  new_params?: ParamsSDKType;
  payload: string;
}
/**
 * EventBundleVote is an event emitted when a protocol node votes on a bundle.
 * emitted_by: MsgVoteBundleProposal
 */
export interface EventBundleVote {
  /** pool_id is the unique ID of the pool. */
  poolId: Long;
  /** staker is the account staker of the protocol node. */
  staker: string;
  /** storage_id is the unique ID of the bundle. */
  storageId: string;
  /** vote is for what the validator voted with */
  vote: VoteType;
}
/**
 * EventBundleVote is an event emitted when a protocol node votes on a bundle.
 * emitted_by: MsgVoteBundleProposal
 */
export interface EventBundleVoteSDKType {
  pool_id: Long;
  staker: string;
  storage_id: string;
  vote: VoteType;
}
/**
 * EventBundleProposed is submitted by the MsgSubmitBundleProposal message
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventBundleProposed {
  /** pool_id is the unique ID of the pool. */
  poolId: Long;
  /** internal id for the KYVE-bundle */
  id: Long;
  /**
   * storage_id is the ID to retrieve to data item from the configured storage provider
   * e.g. the ARWEAVE-id
   */
  storageId: string;
  /** Address of the uploader/proposer of the bundle */
  uploader: string;
  /** data_size size in bytes of the data */
  dataSize: Long;
  /** from_index starting index of the bundle (inclusive) */
  fromIndex: Long;
  /** bundle_size amount of data items in the bundle */
  bundleSize: Long;
  /** from_key the key of the first data item in the bundle */
  fromKey: string;
  /** to_key the key of the last data item in the bundle */
  toKey: string;
  /**
   * bundle_summary is a short string holding some useful information of
   * the bundle which will get stored on-chain
   */
  bundleSummary: string;
  /** data_hash is a sha256 hash of the raw compressed data */
  dataHash: string;
  /** proposed_at the unix time when the bundle was proposed */
  proposedAt: Long;
  /**
   * storage_provider_id the unique id of the storage provider where
   * the data of the bundle is tored
   */
  storageProviderId: number;
  /**
   * compression_id  the unique id of the compression type the data
   * of the bundle was compressed with
   */
  compressionId: number;
}
/**
 * EventBundleProposed is submitted by the MsgSubmitBundleProposal message
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventBundleProposedSDKType {
  pool_id: Long;
  id: Long;
  storage_id: string;
  uploader: string;
  data_size: Long;
  from_index: Long;
  bundle_size: Long;
  from_key: string;
  to_key: string;
  bundle_summary: string;
  data_hash: string;
  proposed_at: Long;
  storage_provider_id: number;
  compression_id: number;
}
/**
 * EventBundleFinalized is an event emitted when a bundle is finalised.
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventBundleFinalized {
  /** pool_id is the unique ID of the pool. */
  poolId: Long;
  /** internal id for the KYVE-bundle */
  id: Long;
  /** total voting power which voted for valid */
  valid: Long;
  /** total voting power which voted for invalid */
  invalid: Long;
  /** total voting power which voted for abstain */
  abstain: Long;
  /** total voting power of the pool */
  total: Long;
  /** status of the finalized bundle */
  status: BundleStatus;
  /** amount which funders provided to the total bundle reward (in ukyve) */
  fundersPayout: Long;
  /** amount which the inflation pool provided to the total reward (in ukyve) */
  inflationPayout: Long;
  /** rewards transferred to treasury (in ukyve) */
  rewardTreasury: Long;
  /** rewardUploader rewards directly transferred to uploader (in ukyve) */
  rewardUploader: Long;
  /** rewardDelegation rewards distributed among all delegators (in ukyve) */
  rewardDelegation: Long;
  /** rewardTotal the total bundle reward */
  rewardTotal: Long;
  /** finalized_at the block height where the bundle got finalized */
  finalizedAt: Long;
  /** uploader the address of the uploader of this bundle */
  uploader: string;
  /** next_uploader the address of the next uploader after this bundle */
  nextUploader: string;
}
/**
 * EventBundleFinalized is an event emitted when a bundle is finalised.
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventBundleFinalizedSDKType {
  pool_id: Long;
  id: Long;
  valid: Long;
  invalid: Long;
  abstain: Long;
  total: Long;
  status: BundleStatus;
  funders_payout: Long;
  inflation_payout: Long;
  reward_treasury: Long;
  reward_uploader: Long;
  reward_delegation: Long;
  reward_total: Long;
  finalized_at: Long;
  uploader: string;
  next_uploader: string;
}
/**
 * EventClaimedUploaderRole is an event emitted when an uploader claims the uploader role
 * emitted_by: MsgClaimUploaderRole
 */
export interface EventClaimedUploaderRole {
  /** pool_id is the unique ID of the pool. */
  poolId: Long;
  /** id internal id for the KYVE-bundle */
  id: Long;
  /**
   * new_uploader the address of the participant who claimed
   * the free uploader role
   */
  newUploader: string;
}
/**
 * EventClaimedUploaderRole is an event emitted when an uploader claims the uploader role
 * emitted_by: MsgClaimUploaderRole
 */
export interface EventClaimedUploaderRoleSDKType {
  pool_id: Long;
  id: Long;
  new_uploader: string;
}
/**
 * EventSkippedUploaderRole is an event emitted when an uploader skips the upload
 * emitted_by: MsgSkipUploaderRole
 */
export interface EventSkippedUploaderRole {
  /** pool_id is the unique ID of the pool. */
  poolId: Long;
  /** id internal id for the KYVE-bundle */
  id: Long;
  /** previous_uploader is the address of the staker who skipped his uploader role */
  previousUploader: string;
  /** new_uploader is the address of the new uploader who got automatically selected */
  newUploader: string;
}
/**
 * EventSkippedUploaderRole is an event emitted when an uploader skips the upload
 * emitted_by: MsgSkipUploaderRole
 */
export interface EventSkippedUploaderRoleSDKType {
  pool_id: Long;
  id: Long;
  previous_uploader: string;
  new_uploader: string;
}
/**
 * EventPointIncreased is an event emitted when a staker receives a point
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventPointIncreased {
  /** pool_id is the unique ID of the pool. */
  poolId: Long;
  /** staker is the address of the staker who received the point */
  staker: string;
  /** current_points is the amount of points the staker has now */
  currentPoints: Long;
}
/**
 * EventPointIncreased is an event emitted when a staker receives a point
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventPointIncreasedSDKType {
  pool_id: Long;
  staker: string;
  current_points: Long;
}
/**
 * EventPointIncreased is an event emitted when a staker receives a point
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventPointsReset {
  /** pool_id is the unique ID of the pool. */
  poolId: Long;
  /** staker is the address of the staker who has zero points now */
  staker: string;
}
/**
 * EventPointIncreased is an event emitted when a staker receives a point
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventPointsResetSDKType {
  pool_id: Long;
  staker: string;
}
function createBaseEventUpdateParams(): EventUpdateParams {
  return {
    oldParams: undefined,
    newParams: undefined,
    payload: ""
  };
}
export const EventUpdateParams = {
  encode(message: EventUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseEventBundleVote(): EventBundleVote {
  return {
    poolId: Long.UZERO,
    staker: "",
    storageId: "",
    vote: 0
  };
}
export const EventBundleVote = {
  encode(message: EventBundleVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.storageId !== "") {
      writer.uint32(26).string(message.storageId);
    }
    if (message.vote !== 0) {
      writer.uint32(32).int32(message.vote);
    }
    return writer;
  },
  fromJSON(object: any): EventBundleVote {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      staker: isSet(object.staker) ? String(object.staker) : "",
      storageId: isSet(object.storageId) ? String(object.storageId) : "",
      vote: isSet(object.vote) ? voteTypeFromJSON(object.vote) : 0
    };
  },
  fromPartial(object: Partial<EventBundleVote>): EventBundleVote {
    const message = createBaseEventBundleVote();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.staker = object.staker ?? "";
    message.storageId = object.storageId ?? "";
    message.vote = object.vote ?? 0;
    return message;
  }
};
function createBaseEventBundleProposed(): EventBundleProposed {
  return {
    poolId: Long.UZERO,
    id: Long.UZERO,
    storageId: "",
    uploader: "",
    dataSize: Long.UZERO,
    fromIndex: Long.UZERO,
    bundleSize: Long.UZERO,
    fromKey: "",
    toKey: "",
    bundleSummary: "",
    dataHash: "",
    proposedAt: Long.UZERO,
    storageProviderId: 0,
    compressionId: 0
  };
}
export const EventBundleProposed = {
  encode(message: EventBundleProposed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (!message.dataSize.isZero()) {
      writer.uint32(40).uint64(message.dataSize);
    }
    if (!message.fromIndex.isZero()) {
      writer.uint32(48).uint64(message.fromIndex);
    }
    if (!message.bundleSize.isZero()) {
      writer.uint32(56).uint64(message.bundleSize);
    }
    if (message.fromKey !== "") {
      writer.uint32(66).string(message.fromKey);
    }
    if (message.toKey !== "") {
      writer.uint32(74).string(message.toKey);
    }
    if (message.bundleSummary !== "") {
      writer.uint32(82).string(message.bundleSummary);
    }
    if (message.dataHash !== "") {
      writer.uint32(90).string(message.dataHash);
    }
    if (!message.proposedAt.isZero()) {
      writer.uint32(96).uint64(message.proposedAt);
    }
    if (message.storageProviderId !== 0) {
      writer.uint32(104).uint32(message.storageProviderId);
    }
    if (message.compressionId !== 0) {
      writer.uint32(112).uint32(message.compressionId);
    }
    return writer;
  },
  fromJSON(object: any): EventBundleProposed {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      storageId: isSet(object.storageId) ? String(object.storageId) : "",
      uploader: isSet(object.uploader) ? String(object.uploader) : "",
      dataSize: isSet(object.dataSize) ? Long.fromValue(object.dataSize) : Long.UZERO,
      fromIndex: isSet(object.fromIndex) ? Long.fromValue(object.fromIndex) : Long.UZERO,
      bundleSize: isSet(object.bundleSize) ? Long.fromValue(object.bundleSize) : Long.UZERO,
      fromKey: isSet(object.fromKey) ? String(object.fromKey) : "",
      toKey: isSet(object.toKey) ? String(object.toKey) : "",
      bundleSummary: isSet(object.bundleSummary) ? String(object.bundleSummary) : "",
      dataHash: isSet(object.dataHash) ? String(object.dataHash) : "",
      proposedAt: isSet(object.proposedAt) ? Long.fromValue(object.proposedAt) : Long.UZERO,
      storageProviderId: isSet(object.storageProviderId) ? Number(object.storageProviderId) : 0,
      compressionId: isSet(object.compressionId) ? Number(object.compressionId) : 0
    };
  },
  fromPartial(object: Partial<EventBundleProposed>): EventBundleProposed {
    const message = createBaseEventBundleProposed();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.storageId = object.storageId ?? "";
    message.uploader = object.uploader ?? "";
    message.dataSize = object.dataSize !== undefined && object.dataSize !== null ? Long.fromValue(object.dataSize) : Long.UZERO;
    message.fromIndex = object.fromIndex !== undefined && object.fromIndex !== null ? Long.fromValue(object.fromIndex) : Long.UZERO;
    message.bundleSize = object.bundleSize !== undefined && object.bundleSize !== null ? Long.fromValue(object.bundleSize) : Long.UZERO;
    message.fromKey = object.fromKey ?? "";
    message.toKey = object.toKey ?? "";
    message.bundleSummary = object.bundleSummary ?? "";
    message.dataHash = object.dataHash ?? "";
    message.proposedAt = object.proposedAt !== undefined && object.proposedAt !== null ? Long.fromValue(object.proposedAt) : Long.UZERO;
    message.storageProviderId = object.storageProviderId ?? 0;
    message.compressionId = object.compressionId ?? 0;
    return message;
  }
};
function createBaseEventBundleFinalized(): EventBundleFinalized {
  return {
    poolId: Long.UZERO,
    id: Long.UZERO,
    valid: Long.UZERO,
    invalid: Long.UZERO,
    abstain: Long.UZERO,
    total: Long.UZERO,
    status: 0,
    fundersPayout: Long.UZERO,
    inflationPayout: Long.UZERO,
    rewardTreasury: Long.UZERO,
    rewardUploader: Long.UZERO,
    rewardDelegation: Long.UZERO,
    rewardTotal: Long.UZERO,
    finalizedAt: Long.UZERO,
    uploader: "",
    nextUploader: ""
  };
}
export const EventBundleFinalized = {
  encode(message: EventBundleFinalized, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (!message.valid.isZero()) {
      writer.uint32(24).uint64(message.valid);
    }
    if (!message.invalid.isZero()) {
      writer.uint32(32).uint64(message.invalid);
    }
    if (!message.abstain.isZero()) {
      writer.uint32(40).uint64(message.abstain);
    }
    if (!message.total.isZero()) {
      writer.uint32(48).uint64(message.total);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (!message.fundersPayout.isZero()) {
      writer.uint32(64).uint64(message.fundersPayout);
    }
    if (!message.inflationPayout.isZero()) {
      writer.uint32(72).uint64(message.inflationPayout);
    }
    if (!message.rewardTreasury.isZero()) {
      writer.uint32(80).uint64(message.rewardTreasury);
    }
    if (!message.rewardUploader.isZero()) {
      writer.uint32(88).uint64(message.rewardUploader);
    }
    if (!message.rewardDelegation.isZero()) {
      writer.uint32(96).uint64(message.rewardDelegation);
    }
    if (!message.rewardTotal.isZero()) {
      writer.uint32(104).uint64(message.rewardTotal);
    }
    if (!message.finalizedAt.isZero()) {
      writer.uint32(112).uint64(message.finalizedAt);
    }
    if (message.uploader !== "") {
      writer.uint32(122).string(message.uploader);
    }
    if (message.nextUploader !== "") {
      writer.uint32(130).string(message.nextUploader);
    }
    return writer;
  },
  fromJSON(object: any): EventBundleFinalized {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      valid: isSet(object.valid) ? Long.fromValue(object.valid) : Long.UZERO,
      invalid: isSet(object.invalid) ? Long.fromValue(object.invalid) : Long.UZERO,
      abstain: isSet(object.abstain) ? Long.fromValue(object.abstain) : Long.UZERO,
      total: isSet(object.total) ? Long.fromValue(object.total) : Long.UZERO,
      status: isSet(object.status) ? bundleStatusFromJSON(object.status) : 0,
      fundersPayout: isSet(object.fundersPayout) ? Long.fromValue(object.fundersPayout) : Long.UZERO,
      inflationPayout: isSet(object.inflationPayout) ? Long.fromValue(object.inflationPayout) : Long.UZERO,
      rewardTreasury: isSet(object.rewardTreasury) ? Long.fromValue(object.rewardTreasury) : Long.UZERO,
      rewardUploader: isSet(object.rewardUploader) ? Long.fromValue(object.rewardUploader) : Long.UZERO,
      rewardDelegation: isSet(object.rewardDelegation) ? Long.fromValue(object.rewardDelegation) : Long.UZERO,
      rewardTotal: isSet(object.rewardTotal) ? Long.fromValue(object.rewardTotal) : Long.UZERO,
      finalizedAt: isSet(object.finalizedAt) ? Long.fromValue(object.finalizedAt) : Long.UZERO,
      uploader: isSet(object.uploader) ? String(object.uploader) : "",
      nextUploader: isSet(object.nextUploader) ? String(object.nextUploader) : ""
    };
  },
  fromPartial(object: Partial<EventBundleFinalized>): EventBundleFinalized {
    const message = createBaseEventBundleFinalized();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.valid = object.valid !== undefined && object.valid !== null ? Long.fromValue(object.valid) : Long.UZERO;
    message.invalid = object.invalid !== undefined && object.invalid !== null ? Long.fromValue(object.invalid) : Long.UZERO;
    message.abstain = object.abstain !== undefined && object.abstain !== null ? Long.fromValue(object.abstain) : Long.UZERO;
    message.total = object.total !== undefined && object.total !== null ? Long.fromValue(object.total) : Long.UZERO;
    message.status = object.status ?? 0;
    message.fundersPayout = object.fundersPayout !== undefined && object.fundersPayout !== null ? Long.fromValue(object.fundersPayout) : Long.UZERO;
    message.inflationPayout = object.inflationPayout !== undefined && object.inflationPayout !== null ? Long.fromValue(object.inflationPayout) : Long.UZERO;
    message.rewardTreasury = object.rewardTreasury !== undefined && object.rewardTreasury !== null ? Long.fromValue(object.rewardTreasury) : Long.UZERO;
    message.rewardUploader = object.rewardUploader !== undefined && object.rewardUploader !== null ? Long.fromValue(object.rewardUploader) : Long.UZERO;
    message.rewardDelegation = object.rewardDelegation !== undefined && object.rewardDelegation !== null ? Long.fromValue(object.rewardDelegation) : Long.UZERO;
    message.rewardTotal = object.rewardTotal !== undefined && object.rewardTotal !== null ? Long.fromValue(object.rewardTotal) : Long.UZERO;
    message.finalizedAt = object.finalizedAt !== undefined && object.finalizedAt !== null ? Long.fromValue(object.finalizedAt) : Long.UZERO;
    message.uploader = object.uploader ?? "";
    message.nextUploader = object.nextUploader ?? "";
    return message;
  }
};
function createBaseEventClaimedUploaderRole(): EventClaimedUploaderRole {
  return {
    poolId: Long.UZERO,
    id: Long.UZERO,
    newUploader: ""
  };
}
export const EventClaimedUploaderRole = {
  encode(message: EventClaimedUploaderRole, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.newUploader !== "") {
      writer.uint32(26).string(message.newUploader);
    }
    return writer;
  },
  fromJSON(object: any): EventClaimedUploaderRole {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      newUploader: isSet(object.newUploader) ? String(object.newUploader) : ""
    };
  },
  fromPartial(object: Partial<EventClaimedUploaderRole>): EventClaimedUploaderRole {
    const message = createBaseEventClaimedUploaderRole();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.newUploader = object.newUploader ?? "";
    return message;
  }
};
function createBaseEventSkippedUploaderRole(): EventSkippedUploaderRole {
  return {
    poolId: Long.UZERO,
    id: Long.UZERO,
    previousUploader: "",
    newUploader: ""
  };
}
export const EventSkippedUploaderRole = {
  encode(message: EventSkippedUploaderRole, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.previousUploader !== "") {
      writer.uint32(26).string(message.previousUploader);
    }
    if (message.newUploader !== "") {
      writer.uint32(34).string(message.newUploader);
    }
    return writer;
  },
  fromJSON(object: any): EventSkippedUploaderRole {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      previousUploader: isSet(object.previousUploader) ? String(object.previousUploader) : "",
      newUploader: isSet(object.newUploader) ? String(object.newUploader) : ""
    };
  },
  fromPartial(object: Partial<EventSkippedUploaderRole>): EventSkippedUploaderRole {
    const message = createBaseEventSkippedUploaderRole();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.previousUploader = object.previousUploader ?? "";
    message.newUploader = object.newUploader ?? "";
    return message;
  }
};
function createBaseEventPointIncreased(): EventPointIncreased {
  return {
    poolId: Long.UZERO,
    staker: "",
    currentPoints: Long.UZERO
  };
}
export const EventPointIncreased = {
  encode(message: EventPointIncreased, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (!message.currentPoints.isZero()) {
      writer.uint32(24).uint64(message.currentPoints);
    }
    return writer;
  },
  fromJSON(object: any): EventPointIncreased {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      staker: isSet(object.staker) ? String(object.staker) : "",
      currentPoints: isSet(object.currentPoints) ? Long.fromValue(object.currentPoints) : Long.UZERO
    };
  },
  fromPartial(object: Partial<EventPointIncreased>): EventPointIncreased {
    const message = createBaseEventPointIncreased();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.staker = object.staker ?? "";
    message.currentPoints = object.currentPoints !== undefined && object.currentPoints !== null ? Long.fromValue(object.currentPoints) : Long.UZERO;
    return message;
  }
};
function createBaseEventPointsReset(): EventPointsReset {
  return {
    poolId: Long.UZERO,
    staker: ""
  };
}
export const EventPointsReset = {
  encode(message: EventPointsReset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    return writer;
  },
  fromJSON(object: any): EventPointsReset {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      staker: isSet(object.staker) ? String(object.staker) : ""
    };
  },
  fromPartial(object: Partial<EventPointsReset>): EventPointsReset {
    const message = createBaseEventPointsReset();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.staker = object.staker ?? "";
    return message;
  }
};