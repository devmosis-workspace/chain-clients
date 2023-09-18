import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { VoteType, voteTypeFromJSON } from "./tx";
import { BundleStatus, bundleStatusFromJSON } from "./bundles";
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
  typeUrl: "/kyve.bundles.v1beta1.EventUpdateParams";
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
  type: "/kyve.bundles.v1beta1.EventUpdateParams";
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
 * EventBundleVote is an event emitted when a protocol node votes on a bundle.
 * emitted_by: MsgVoteBundleProposal
 */
export interface EventBundleVote {
  /** pool_id is the unique ID of the pool. */
  poolId: bigint;
  /** staker is the account staker of the protocol node. */
  staker: string;
  /** storage_id is the unique ID of the bundle. */
  storageId: string;
  /** vote is for what the validator voted with */
  vote: VoteType;
}
export interface EventBundleVoteProtoMsg {
  typeUrl: "/kyve.bundles.v1beta1.EventBundleVote";
  value: Uint8Array;
}
/**
 * EventBundleVote is an event emitted when a protocol node votes on a bundle.
 * emitted_by: MsgVoteBundleProposal
 */
export interface EventBundleVoteAmino {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** staker is the account staker of the protocol node. */
  staker: string;
  /** storage_id is the unique ID of the bundle. */
  storage_id: string;
  /** vote is for what the validator voted with */
  vote: VoteType;
}
export interface EventBundleVoteAminoMsg {
  type: "/kyve.bundles.v1beta1.EventBundleVote";
  value: EventBundleVoteAmino;
}
/**
 * EventBundleVote is an event emitted when a protocol node votes on a bundle.
 * emitted_by: MsgVoteBundleProposal
 */
export interface EventBundleVoteSDKType {
  pool_id: bigint;
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
  poolId: bigint;
  /** internal id for the KYVE-bundle */
  id: bigint;
  /**
   * storage_id is the ID to retrieve to data item from the configured storage provider
   * e.g. the ARWEAVE-id
   */
  storageId: string;
  /** Address of the uploader/proposer of the bundle */
  uploader: string;
  /** data_size size in bytes of the data */
  dataSize: bigint;
  /** from_index starting index of the bundle (inclusive) */
  fromIndex: bigint;
  /** bundle_size amount of data items in the bundle */
  bundleSize: bigint;
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
  proposedAt: bigint;
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
export interface EventBundleProposedProtoMsg {
  typeUrl: "/kyve.bundles.v1beta1.EventBundleProposed";
  value: Uint8Array;
}
/**
 * EventBundleProposed is submitted by the MsgSubmitBundleProposal message
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventBundleProposedAmino {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** internal id for the KYVE-bundle */
  id: string;
  /**
   * storage_id is the ID to retrieve to data item from the configured storage provider
   * e.g. the ARWEAVE-id
   */
  storage_id: string;
  /** Address of the uploader/proposer of the bundle */
  uploader: string;
  /** data_size size in bytes of the data */
  data_size: string;
  /** from_index starting index of the bundle (inclusive) */
  from_index: string;
  /** bundle_size amount of data items in the bundle */
  bundle_size: string;
  /** from_key the key of the first data item in the bundle */
  from_key: string;
  /** to_key the key of the last data item in the bundle */
  to_key: string;
  /**
   * bundle_summary is a short string holding some useful information of
   * the bundle which will get stored on-chain
   */
  bundle_summary: string;
  /** data_hash is a sha256 hash of the raw compressed data */
  data_hash: string;
  /** proposed_at the unix time when the bundle was proposed */
  proposed_at: string;
  /**
   * storage_provider_id the unique id of the storage provider where
   * the data of the bundle is tored
   */
  storage_provider_id: number;
  /**
   * compression_id  the unique id of the compression type the data
   * of the bundle was compressed with
   */
  compression_id: number;
}
export interface EventBundleProposedAminoMsg {
  type: "/kyve.bundles.v1beta1.EventBundleProposed";
  value: EventBundleProposedAmino;
}
/**
 * EventBundleProposed is submitted by the MsgSubmitBundleProposal message
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventBundleProposedSDKType {
  pool_id: bigint;
  id: bigint;
  storage_id: string;
  uploader: string;
  data_size: bigint;
  from_index: bigint;
  bundle_size: bigint;
  from_key: string;
  to_key: string;
  bundle_summary: string;
  data_hash: string;
  proposed_at: bigint;
  storage_provider_id: number;
  compression_id: number;
}
/**
 * EventBundleFinalized is an event emitted when a bundle is finalised.
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventBundleFinalized {
  /** pool_id is the unique ID of the pool. */
  poolId: bigint;
  /** internal id for the KYVE-bundle */
  id: bigint;
  /** total voting power which voted for valid */
  valid: bigint;
  /** total voting power which voted for invalid */
  invalid: bigint;
  /** total voting power which voted for abstain */
  abstain: bigint;
  /** total voting power of the pool */
  total: bigint;
  /** status of the finalized bundle */
  status: BundleStatus;
  /** amount which funders provided to the total bundle reward (in ukyve) */
  fundersPayout: bigint;
  /** amount which the inflation pool provided to the total reward (in ukyve) */
  inflationPayout: bigint;
  /** rewards transferred to treasury (in ukyve) */
  rewardTreasury: bigint;
  /** rewardUploader rewards directly transferred to uploader (in ukyve) */
  rewardUploader: bigint;
  /** rewardDelegation rewards distributed among all delegators (in ukyve) */
  rewardDelegation: bigint;
  /** rewardTotal the total bundle reward */
  rewardTotal: bigint;
  /** finalized_at the block height where the bundle got finalized */
  finalizedAt: bigint;
  /** uploader the address of the uploader of this bundle */
  uploader: string;
  /** next_uploader the address of the next uploader after this bundle */
  nextUploader: string;
}
export interface EventBundleFinalizedProtoMsg {
  typeUrl: "/kyve.bundles.v1beta1.EventBundleFinalized";
  value: Uint8Array;
}
/**
 * EventBundleFinalized is an event emitted when a bundle is finalised.
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventBundleFinalizedAmino {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** internal id for the KYVE-bundle */
  id: string;
  /** total voting power which voted for valid */
  valid: string;
  /** total voting power which voted for invalid */
  invalid: string;
  /** total voting power which voted for abstain */
  abstain: string;
  /** total voting power of the pool */
  total: string;
  /** status of the finalized bundle */
  status: BundleStatus;
  /** amount which funders provided to the total bundle reward (in ukyve) */
  funders_payout: string;
  /** amount which the inflation pool provided to the total reward (in ukyve) */
  inflation_payout: string;
  /** rewards transferred to treasury (in ukyve) */
  reward_treasury: string;
  /** rewardUploader rewards directly transferred to uploader (in ukyve) */
  reward_uploader: string;
  /** rewardDelegation rewards distributed among all delegators (in ukyve) */
  reward_delegation: string;
  /** rewardTotal the total bundle reward */
  reward_total: string;
  /** finalized_at the block height where the bundle got finalized */
  finalized_at: string;
  /** uploader the address of the uploader of this bundle */
  uploader: string;
  /** next_uploader the address of the next uploader after this bundle */
  next_uploader: string;
}
export interface EventBundleFinalizedAminoMsg {
  type: "/kyve.bundles.v1beta1.EventBundleFinalized";
  value: EventBundleFinalizedAmino;
}
/**
 * EventBundleFinalized is an event emitted when a bundle is finalised.
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventBundleFinalizedSDKType {
  pool_id: bigint;
  id: bigint;
  valid: bigint;
  invalid: bigint;
  abstain: bigint;
  total: bigint;
  status: BundleStatus;
  funders_payout: bigint;
  inflation_payout: bigint;
  reward_treasury: bigint;
  reward_uploader: bigint;
  reward_delegation: bigint;
  reward_total: bigint;
  finalized_at: bigint;
  uploader: string;
  next_uploader: string;
}
/**
 * EventClaimedUploaderRole is an event emitted when an uploader claims the uploader role
 * emitted_by: MsgClaimUploaderRole
 */
export interface EventClaimedUploaderRole {
  /** pool_id is the unique ID of the pool. */
  poolId: bigint;
  /** id internal id for the KYVE-bundle */
  id: bigint;
  /**
   * new_uploader the address of the participant who claimed
   * the free uploader role
   */
  newUploader: string;
}
export interface EventClaimedUploaderRoleProtoMsg {
  typeUrl: "/kyve.bundles.v1beta1.EventClaimedUploaderRole";
  value: Uint8Array;
}
/**
 * EventClaimedUploaderRole is an event emitted when an uploader claims the uploader role
 * emitted_by: MsgClaimUploaderRole
 */
export interface EventClaimedUploaderRoleAmino {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** id internal id for the KYVE-bundle */
  id: string;
  /**
   * new_uploader the address of the participant who claimed
   * the free uploader role
   */
  new_uploader: string;
}
export interface EventClaimedUploaderRoleAminoMsg {
  type: "/kyve.bundles.v1beta1.EventClaimedUploaderRole";
  value: EventClaimedUploaderRoleAmino;
}
/**
 * EventClaimedUploaderRole is an event emitted when an uploader claims the uploader role
 * emitted_by: MsgClaimUploaderRole
 */
export interface EventClaimedUploaderRoleSDKType {
  pool_id: bigint;
  id: bigint;
  new_uploader: string;
}
/**
 * EventSkippedUploaderRole is an event emitted when an uploader skips the upload
 * emitted_by: MsgSkipUploaderRole
 */
export interface EventSkippedUploaderRole {
  /** pool_id is the unique ID of the pool. */
  poolId: bigint;
  /** id internal id for the KYVE-bundle */
  id: bigint;
  /** previous_uploader is the address of the staker who skipped his uploader role */
  previousUploader: string;
  /** new_uploader is the address of the new uploader who got automatically selected */
  newUploader: string;
}
export interface EventSkippedUploaderRoleProtoMsg {
  typeUrl: "/kyve.bundles.v1beta1.EventSkippedUploaderRole";
  value: Uint8Array;
}
/**
 * EventSkippedUploaderRole is an event emitted when an uploader skips the upload
 * emitted_by: MsgSkipUploaderRole
 */
export interface EventSkippedUploaderRoleAmino {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** id internal id for the KYVE-bundle */
  id: string;
  /** previous_uploader is the address of the staker who skipped his uploader role */
  previous_uploader: string;
  /** new_uploader is the address of the new uploader who got automatically selected */
  new_uploader: string;
}
export interface EventSkippedUploaderRoleAminoMsg {
  type: "/kyve.bundles.v1beta1.EventSkippedUploaderRole";
  value: EventSkippedUploaderRoleAmino;
}
/**
 * EventSkippedUploaderRole is an event emitted when an uploader skips the upload
 * emitted_by: MsgSkipUploaderRole
 */
export interface EventSkippedUploaderRoleSDKType {
  pool_id: bigint;
  id: bigint;
  previous_uploader: string;
  new_uploader: string;
}
/**
 * EventPointIncreased is an event emitted when a staker receives a point
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventPointIncreased {
  /** pool_id is the unique ID of the pool. */
  poolId: bigint;
  /** staker is the address of the staker who received the point */
  staker: string;
  /** current_points is the amount of points the staker has now */
  currentPoints: bigint;
}
export interface EventPointIncreasedProtoMsg {
  typeUrl: "/kyve.bundles.v1beta1.EventPointIncreased";
  value: Uint8Array;
}
/**
 * EventPointIncreased is an event emitted when a staker receives a point
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventPointIncreasedAmino {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** staker is the address of the staker who received the point */
  staker: string;
  /** current_points is the amount of points the staker has now */
  current_points: string;
}
export interface EventPointIncreasedAminoMsg {
  type: "/kyve.bundles.v1beta1.EventPointIncreased";
  value: EventPointIncreasedAmino;
}
/**
 * EventPointIncreased is an event emitted when a staker receives a point
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventPointIncreasedSDKType {
  pool_id: bigint;
  staker: string;
  current_points: bigint;
}
/**
 * EventPointIncreased is an event emitted when a staker receives a point
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventPointsReset {
  /** pool_id is the unique ID of the pool. */
  poolId: bigint;
  /** staker is the address of the staker who has zero points now */
  staker: string;
}
export interface EventPointsResetProtoMsg {
  typeUrl: "/kyve.bundles.v1beta1.EventPointsReset";
  value: Uint8Array;
}
/**
 * EventPointIncreased is an event emitted when a staker receives a point
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventPointsResetAmino {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** staker is the address of the staker who has zero points now */
  staker: string;
}
export interface EventPointsResetAminoMsg {
  type: "/kyve.bundles.v1beta1.EventPointsReset";
  value: EventPointsResetAmino;
}
/**
 * EventPointIncreased is an event emitted when a staker receives a point
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventPointsResetSDKType {
  pool_id: bigint;
  staker: string;
}
function createBaseEventUpdateParams(): EventUpdateParams {
  return {
    oldParams: Params.fromPartial({}),
    newParams: Params.fromPartial({}),
    payload: ""
  };
}
export const EventUpdateParams = {
  typeUrl: "/kyve.bundles.v1beta1.EventUpdateParams",
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
      typeUrl: "/kyve.bundles.v1beta1.EventUpdateParams",
      value: EventUpdateParams.encode(message).finish()
    };
  }
};
function createBaseEventBundleVote(): EventBundleVote {
  return {
    poolId: BigInt(0),
    staker: "",
    storageId: "",
    vote: 0
  };
}
export const EventBundleVote = {
  typeUrl: "/kyve.bundles.v1beta1.EventBundleVote",
  encode(message: EventBundleVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      staker: isSet(object.staker) ? String(object.staker) : "",
      storageId: isSet(object.storageId) ? String(object.storageId) : "",
      vote: isSet(object.vote) ? voteTypeFromJSON(object.vote) : -1
    };
  },
  fromPartial(object: Partial<EventBundleVote>): EventBundleVote {
    const message = createBaseEventBundleVote();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.staker = object.staker ?? "";
    message.storageId = object.storageId ?? "";
    message.vote = object.vote ?? 0;
    return message;
  },
  fromAmino(object: EventBundleVoteAmino): EventBundleVote {
    return {
      poolId: BigInt(object.pool_id),
      staker: object.staker,
      storageId: object.storage_id,
      vote: isSet(object.vote) ? voteTypeFromJSON(object.vote) : -1
    };
  },
  toAmino(message: EventBundleVote): EventBundleVoteAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.staker = message.staker;
    obj.storage_id = message.storageId;
    obj.vote = message.vote;
    return obj;
  },
  fromAminoMsg(object: EventBundleVoteAminoMsg): EventBundleVote {
    return EventBundleVote.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBundleVoteProtoMsg): EventBundleVote {
    return EventBundleVote.decode(message.value);
  },
  toProto(message: EventBundleVote): Uint8Array {
    return EventBundleVote.encode(message).finish();
  },
  toProtoMsg(message: EventBundleVote): EventBundleVoteProtoMsg {
    return {
      typeUrl: "/kyve.bundles.v1beta1.EventBundleVote",
      value: EventBundleVote.encode(message).finish()
    };
  }
};
function createBaseEventBundleProposed(): EventBundleProposed {
  return {
    poolId: BigInt(0),
    id: BigInt(0),
    storageId: "",
    uploader: "",
    dataSize: BigInt(0),
    fromIndex: BigInt(0),
    bundleSize: BigInt(0),
    fromKey: "",
    toKey: "",
    bundleSummary: "",
    dataHash: "",
    proposedAt: BigInt(0),
    storageProviderId: 0,
    compressionId: 0
  };
}
export const EventBundleProposed = {
  typeUrl: "/kyve.bundles.v1beta1.EventBundleProposed",
  encode(message: EventBundleProposed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.dataSize !== BigInt(0)) {
      writer.uint32(40).uint64(message.dataSize);
    }
    if (message.fromIndex !== BigInt(0)) {
      writer.uint32(48).uint64(message.fromIndex);
    }
    if (message.bundleSize !== BigInt(0)) {
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
    if (message.proposedAt !== BigInt(0)) {
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      storageId: isSet(object.storageId) ? String(object.storageId) : "",
      uploader: isSet(object.uploader) ? String(object.uploader) : "",
      dataSize: isSet(object.dataSize) ? BigInt(object.dataSize.toString()) : BigInt(0),
      fromIndex: isSet(object.fromIndex) ? BigInt(object.fromIndex.toString()) : BigInt(0),
      bundleSize: isSet(object.bundleSize) ? BigInt(object.bundleSize.toString()) : BigInt(0),
      fromKey: isSet(object.fromKey) ? String(object.fromKey) : "",
      toKey: isSet(object.toKey) ? String(object.toKey) : "",
      bundleSummary: isSet(object.bundleSummary) ? String(object.bundleSummary) : "",
      dataHash: isSet(object.dataHash) ? String(object.dataHash) : "",
      proposedAt: isSet(object.proposedAt) ? BigInt(object.proposedAt.toString()) : BigInt(0),
      storageProviderId: isSet(object.storageProviderId) ? Number(object.storageProviderId) : 0,
      compressionId: isSet(object.compressionId) ? Number(object.compressionId) : 0
    };
  },
  fromPartial(object: Partial<EventBundleProposed>): EventBundleProposed {
    const message = createBaseEventBundleProposed();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.storageId = object.storageId ?? "";
    message.uploader = object.uploader ?? "";
    message.dataSize = object.dataSize !== undefined && object.dataSize !== null ? BigInt(object.dataSize.toString()) : BigInt(0);
    message.fromIndex = object.fromIndex !== undefined && object.fromIndex !== null ? BigInt(object.fromIndex.toString()) : BigInt(0);
    message.bundleSize = object.bundleSize !== undefined && object.bundleSize !== null ? BigInt(object.bundleSize.toString()) : BigInt(0);
    message.fromKey = object.fromKey ?? "";
    message.toKey = object.toKey ?? "";
    message.bundleSummary = object.bundleSummary ?? "";
    message.dataHash = object.dataHash ?? "";
    message.proposedAt = object.proposedAt !== undefined && object.proposedAt !== null ? BigInt(object.proposedAt.toString()) : BigInt(0);
    message.storageProviderId = object.storageProviderId ?? 0;
    message.compressionId = object.compressionId ?? 0;
    return message;
  },
  fromAmino(object: EventBundleProposedAmino): EventBundleProposed {
    return {
      poolId: BigInt(object.pool_id),
      id: BigInt(object.id),
      storageId: object.storage_id,
      uploader: object.uploader,
      dataSize: BigInt(object.data_size),
      fromIndex: BigInt(object.from_index),
      bundleSize: BigInt(object.bundle_size),
      fromKey: object.from_key,
      toKey: object.to_key,
      bundleSummary: object.bundle_summary,
      dataHash: object.data_hash,
      proposedAt: BigInt(object.proposed_at),
      storageProviderId: object.storage_provider_id,
      compressionId: object.compression_id
    };
  },
  toAmino(message: EventBundleProposed): EventBundleProposedAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.storage_id = message.storageId;
    obj.uploader = message.uploader;
    obj.data_size = message.dataSize ? message.dataSize.toString() : undefined;
    obj.from_index = message.fromIndex ? message.fromIndex.toString() : undefined;
    obj.bundle_size = message.bundleSize ? message.bundleSize.toString() : undefined;
    obj.from_key = message.fromKey;
    obj.to_key = message.toKey;
    obj.bundle_summary = message.bundleSummary;
    obj.data_hash = message.dataHash;
    obj.proposed_at = message.proposedAt ? message.proposedAt.toString() : undefined;
    obj.storage_provider_id = message.storageProviderId;
    obj.compression_id = message.compressionId;
    return obj;
  },
  fromAminoMsg(object: EventBundleProposedAminoMsg): EventBundleProposed {
    return EventBundleProposed.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBundleProposedProtoMsg): EventBundleProposed {
    return EventBundleProposed.decode(message.value);
  },
  toProto(message: EventBundleProposed): Uint8Array {
    return EventBundleProposed.encode(message).finish();
  },
  toProtoMsg(message: EventBundleProposed): EventBundleProposedProtoMsg {
    return {
      typeUrl: "/kyve.bundles.v1beta1.EventBundleProposed",
      value: EventBundleProposed.encode(message).finish()
    };
  }
};
function createBaseEventBundleFinalized(): EventBundleFinalized {
  return {
    poolId: BigInt(0),
    id: BigInt(0),
    valid: BigInt(0),
    invalid: BigInt(0),
    abstain: BigInt(0),
    total: BigInt(0),
    status: 0,
    fundersPayout: BigInt(0),
    inflationPayout: BigInt(0),
    rewardTreasury: BigInt(0),
    rewardUploader: BigInt(0),
    rewardDelegation: BigInt(0),
    rewardTotal: BigInt(0),
    finalizedAt: BigInt(0),
    uploader: "",
    nextUploader: ""
  };
}
export const EventBundleFinalized = {
  typeUrl: "/kyve.bundles.v1beta1.EventBundleFinalized",
  encode(message: EventBundleFinalized, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.valid !== BigInt(0)) {
      writer.uint32(24).uint64(message.valid);
    }
    if (message.invalid !== BigInt(0)) {
      writer.uint32(32).uint64(message.invalid);
    }
    if (message.abstain !== BigInt(0)) {
      writer.uint32(40).uint64(message.abstain);
    }
    if (message.total !== BigInt(0)) {
      writer.uint32(48).uint64(message.total);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.fundersPayout !== BigInt(0)) {
      writer.uint32(64).uint64(message.fundersPayout);
    }
    if (message.inflationPayout !== BigInt(0)) {
      writer.uint32(72).uint64(message.inflationPayout);
    }
    if (message.rewardTreasury !== BigInt(0)) {
      writer.uint32(80).uint64(message.rewardTreasury);
    }
    if (message.rewardUploader !== BigInt(0)) {
      writer.uint32(88).uint64(message.rewardUploader);
    }
    if (message.rewardDelegation !== BigInt(0)) {
      writer.uint32(96).uint64(message.rewardDelegation);
    }
    if (message.rewardTotal !== BigInt(0)) {
      writer.uint32(104).uint64(message.rewardTotal);
    }
    if (message.finalizedAt !== BigInt(0)) {
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      valid: isSet(object.valid) ? BigInt(object.valid.toString()) : BigInt(0),
      invalid: isSet(object.invalid) ? BigInt(object.invalid.toString()) : BigInt(0),
      abstain: isSet(object.abstain) ? BigInt(object.abstain.toString()) : BigInt(0),
      total: isSet(object.total) ? BigInt(object.total.toString()) : BigInt(0),
      status: isSet(object.status) ? bundleStatusFromJSON(object.status) : -1,
      fundersPayout: isSet(object.fundersPayout) ? BigInt(object.fundersPayout.toString()) : BigInt(0),
      inflationPayout: isSet(object.inflationPayout) ? BigInt(object.inflationPayout.toString()) : BigInt(0),
      rewardTreasury: isSet(object.rewardTreasury) ? BigInt(object.rewardTreasury.toString()) : BigInt(0),
      rewardUploader: isSet(object.rewardUploader) ? BigInt(object.rewardUploader.toString()) : BigInt(0),
      rewardDelegation: isSet(object.rewardDelegation) ? BigInt(object.rewardDelegation.toString()) : BigInt(0),
      rewardTotal: isSet(object.rewardTotal) ? BigInt(object.rewardTotal.toString()) : BigInt(0),
      finalizedAt: isSet(object.finalizedAt) ? BigInt(object.finalizedAt.toString()) : BigInt(0),
      uploader: isSet(object.uploader) ? String(object.uploader) : "",
      nextUploader: isSet(object.nextUploader) ? String(object.nextUploader) : ""
    };
  },
  fromPartial(object: Partial<EventBundleFinalized>): EventBundleFinalized {
    const message = createBaseEventBundleFinalized();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.valid = object.valid !== undefined && object.valid !== null ? BigInt(object.valid.toString()) : BigInt(0);
    message.invalid = object.invalid !== undefined && object.invalid !== null ? BigInt(object.invalid.toString()) : BigInt(0);
    message.abstain = object.abstain !== undefined && object.abstain !== null ? BigInt(object.abstain.toString()) : BigInt(0);
    message.total = object.total !== undefined && object.total !== null ? BigInt(object.total.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.fundersPayout = object.fundersPayout !== undefined && object.fundersPayout !== null ? BigInt(object.fundersPayout.toString()) : BigInt(0);
    message.inflationPayout = object.inflationPayout !== undefined && object.inflationPayout !== null ? BigInt(object.inflationPayout.toString()) : BigInt(0);
    message.rewardTreasury = object.rewardTreasury !== undefined && object.rewardTreasury !== null ? BigInt(object.rewardTreasury.toString()) : BigInt(0);
    message.rewardUploader = object.rewardUploader !== undefined && object.rewardUploader !== null ? BigInt(object.rewardUploader.toString()) : BigInt(0);
    message.rewardDelegation = object.rewardDelegation !== undefined && object.rewardDelegation !== null ? BigInt(object.rewardDelegation.toString()) : BigInt(0);
    message.rewardTotal = object.rewardTotal !== undefined && object.rewardTotal !== null ? BigInt(object.rewardTotal.toString()) : BigInt(0);
    message.finalizedAt = object.finalizedAt !== undefined && object.finalizedAt !== null ? BigInt(object.finalizedAt.toString()) : BigInt(0);
    message.uploader = object.uploader ?? "";
    message.nextUploader = object.nextUploader ?? "";
    return message;
  },
  fromAmino(object: EventBundleFinalizedAmino): EventBundleFinalized {
    return {
      poolId: BigInt(object.pool_id),
      id: BigInt(object.id),
      valid: BigInt(object.valid),
      invalid: BigInt(object.invalid),
      abstain: BigInt(object.abstain),
      total: BigInt(object.total),
      status: isSet(object.status) ? bundleStatusFromJSON(object.status) : -1,
      fundersPayout: BigInt(object.funders_payout),
      inflationPayout: BigInt(object.inflation_payout),
      rewardTreasury: BigInt(object.reward_treasury),
      rewardUploader: BigInt(object.reward_uploader),
      rewardDelegation: BigInt(object.reward_delegation),
      rewardTotal: BigInt(object.reward_total),
      finalizedAt: BigInt(object.finalized_at),
      uploader: object.uploader,
      nextUploader: object.next_uploader
    };
  },
  toAmino(message: EventBundleFinalized): EventBundleFinalizedAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.valid = message.valid ? message.valid.toString() : undefined;
    obj.invalid = message.invalid ? message.invalid.toString() : undefined;
    obj.abstain = message.abstain ? message.abstain.toString() : undefined;
    obj.total = message.total ? message.total.toString() : undefined;
    obj.status = message.status;
    obj.funders_payout = message.fundersPayout ? message.fundersPayout.toString() : undefined;
    obj.inflation_payout = message.inflationPayout ? message.inflationPayout.toString() : undefined;
    obj.reward_treasury = message.rewardTreasury ? message.rewardTreasury.toString() : undefined;
    obj.reward_uploader = message.rewardUploader ? message.rewardUploader.toString() : undefined;
    obj.reward_delegation = message.rewardDelegation ? message.rewardDelegation.toString() : undefined;
    obj.reward_total = message.rewardTotal ? message.rewardTotal.toString() : undefined;
    obj.finalized_at = message.finalizedAt ? message.finalizedAt.toString() : undefined;
    obj.uploader = message.uploader;
    obj.next_uploader = message.nextUploader;
    return obj;
  },
  fromAminoMsg(object: EventBundleFinalizedAminoMsg): EventBundleFinalized {
    return EventBundleFinalized.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBundleFinalizedProtoMsg): EventBundleFinalized {
    return EventBundleFinalized.decode(message.value);
  },
  toProto(message: EventBundleFinalized): Uint8Array {
    return EventBundleFinalized.encode(message).finish();
  },
  toProtoMsg(message: EventBundleFinalized): EventBundleFinalizedProtoMsg {
    return {
      typeUrl: "/kyve.bundles.v1beta1.EventBundleFinalized",
      value: EventBundleFinalized.encode(message).finish()
    };
  }
};
function createBaseEventClaimedUploaderRole(): EventClaimedUploaderRole {
  return {
    poolId: BigInt(0),
    id: BigInt(0),
    newUploader: ""
  };
}
export const EventClaimedUploaderRole = {
  typeUrl: "/kyve.bundles.v1beta1.EventClaimedUploaderRole",
  encode(message: EventClaimedUploaderRole, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.newUploader !== "") {
      writer.uint32(26).string(message.newUploader);
    }
    return writer;
  },
  fromJSON(object: any): EventClaimedUploaderRole {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      newUploader: isSet(object.newUploader) ? String(object.newUploader) : ""
    };
  },
  fromPartial(object: Partial<EventClaimedUploaderRole>): EventClaimedUploaderRole {
    const message = createBaseEventClaimedUploaderRole();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.newUploader = object.newUploader ?? "";
    return message;
  },
  fromAmino(object: EventClaimedUploaderRoleAmino): EventClaimedUploaderRole {
    return {
      poolId: BigInt(object.pool_id),
      id: BigInt(object.id),
      newUploader: object.new_uploader
    };
  },
  toAmino(message: EventClaimedUploaderRole): EventClaimedUploaderRoleAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.new_uploader = message.newUploader;
    return obj;
  },
  fromAminoMsg(object: EventClaimedUploaderRoleAminoMsg): EventClaimedUploaderRole {
    return EventClaimedUploaderRole.fromAmino(object.value);
  },
  fromProtoMsg(message: EventClaimedUploaderRoleProtoMsg): EventClaimedUploaderRole {
    return EventClaimedUploaderRole.decode(message.value);
  },
  toProto(message: EventClaimedUploaderRole): Uint8Array {
    return EventClaimedUploaderRole.encode(message).finish();
  },
  toProtoMsg(message: EventClaimedUploaderRole): EventClaimedUploaderRoleProtoMsg {
    return {
      typeUrl: "/kyve.bundles.v1beta1.EventClaimedUploaderRole",
      value: EventClaimedUploaderRole.encode(message).finish()
    };
  }
};
function createBaseEventSkippedUploaderRole(): EventSkippedUploaderRole {
  return {
    poolId: BigInt(0),
    id: BigInt(0),
    previousUploader: "",
    newUploader: ""
  };
}
export const EventSkippedUploaderRole = {
  typeUrl: "/kyve.bundles.v1beta1.EventSkippedUploaderRole",
  encode(message: EventSkippedUploaderRole, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.id !== BigInt(0)) {
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      previousUploader: isSet(object.previousUploader) ? String(object.previousUploader) : "",
      newUploader: isSet(object.newUploader) ? String(object.newUploader) : ""
    };
  },
  fromPartial(object: Partial<EventSkippedUploaderRole>): EventSkippedUploaderRole {
    const message = createBaseEventSkippedUploaderRole();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.previousUploader = object.previousUploader ?? "";
    message.newUploader = object.newUploader ?? "";
    return message;
  },
  fromAmino(object: EventSkippedUploaderRoleAmino): EventSkippedUploaderRole {
    return {
      poolId: BigInt(object.pool_id),
      id: BigInt(object.id),
      previousUploader: object.previous_uploader,
      newUploader: object.new_uploader
    };
  },
  toAmino(message: EventSkippedUploaderRole): EventSkippedUploaderRoleAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.previous_uploader = message.previousUploader;
    obj.new_uploader = message.newUploader;
    return obj;
  },
  fromAminoMsg(object: EventSkippedUploaderRoleAminoMsg): EventSkippedUploaderRole {
    return EventSkippedUploaderRole.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSkippedUploaderRoleProtoMsg): EventSkippedUploaderRole {
    return EventSkippedUploaderRole.decode(message.value);
  },
  toProto(message: EventSkippedUploaderRole): Uint8Array {
    return EventSkippedUploaderRole.encode(message).finish();
  },
  toProtoMsg(message: EventSkippedUploaderRole): EventSkippedUploaderRoleProtoMsg {
    return {
      typeUrl: "/kyve.bundles.v1beta1.EventSkippedUploaderRole",
      value: EventSkippedUploaderRole.encode(message).finish()
    };
  }
};
function createBaseEventPointIncreased(): EventPointIncreased {
  return {
    poolId: BigInt(0),
    staker: "",
    currentPoints: BigInt(0)
  };
}
export const EventPointIncreased = {
  typeUrl: "/kyve.bundles.v1beta1.EventPointIncreased",
  encode(message: EventPointIncreased, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.currentPoints !== BigInt(0)) {
      writer.uint32(24).uint64(message.currentPoints);
    }
    return writer;
  },
  fromJSON(object: any): EventPointIncreased {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      staker: isSet(object.staker) ? String(object.staker) : "",
      currentPoints: isSet(object.currentPoints) ? BigInt(object.currentPoints.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventPointIncreased>): EventPointIncreased {
    const message = createBaseEventPointIncreased();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.staker = object.staker ?? "";
    message.currentPoints = object.currentPoints !== undefined && object.currentPoints !== null ? BigInt(object.currentPoints.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventPointIncreasedAmino): EventPointIncreased {
    return {
      poolId: BigInt(object.pool_id),
      staker: object.staker,
      currentPoints: BigInt(object.current_points)
    };
  },
  toAmino(message: EventPointIncreased): EventPointIncreasedAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.staker = message.staker;
    obj.current_points = message.currentPoints ? message.currentPoints.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventPointIncreasedAminoMsg): EventPointIncreased {
    return EventPointIncreased.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPointIncreasedProtoMsg): EventPointIncreased {
    return EventPointIncreased.decode(message.value);
  },
  toProto(message: EventPointIncreased): Uint8Array {
    return EventPointIncreased.encode(message).finish();
  },
  toProtoMsg(message: EventPointIncreased): EventPointIncreasedProtoMsg {
    return {
      typeUrl: "/kyve.bundles.v1beta1.EventPointIncreased",
      value: EventPointIncreased.encode(message).finish()
    };
  }
};
function createBaseEventPointsReset(): EventPointsReset {
  return {
    poolId: BigInt(0),
    staker: ""
  };
}
export const EventPointsReset = {
  typeUrl: "/kyve.bundles.v1beta1.EventPointsReset",
  encode(message: EventPointsReset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    return writer;
  },
  fromJSON(object: any): EventPointsReset {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      staker: isSet(object.staker) ? String(object.staker) : ""
    };
  },
  fromPartial(object: Partial<EventPointsReset>): EventPointsReset {
    const message = createBaseEventPointsReset();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.staker = object.staker ?? "";
    return message;
  },
  fromAmino(object: EventPointsResetAmino): EventPointsReset {
    return {
      poolId: BigInt(object.pool_id),
      staker: object.staker
    };
  },
  toAmino(message: EventPointsReset): EventPointsResetAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.staker = message.staker;
    return obj;
  },
  fromAminoMsg(object: EventPointsResetAminoMsg): EventPointsReset {
    return EventPointsReset.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPointsResetProtoMsg): EventPointsReset {
    return EventPointsReset.decode(message.value);
  },
  toProto(message: EventPointsReset): Uint8Array {
    return EventPointsReset.encode(message).finish();
  },
  toProtoMsg(message: EventPointsReset): EventPointsResetProtoMsg {
    return {
      typeUrl: "/kyve.bundles.v1beta1.EventPointsReset",
      value: EventPointsReset.encode(message).finish()
    };
  }
};