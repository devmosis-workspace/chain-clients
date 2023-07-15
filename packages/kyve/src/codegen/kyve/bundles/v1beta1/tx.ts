import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** VoteType ... */
export enum VoteType {
  /** VOTE_TYPE_UNSPECIFIED - VOTE_TYPE_UNSPECIFIED ... */
  VOTE_TYPE_UNSPECIFIED = 0,
  /** VOTE_TYPE_VALID - VOTE_TYPE_VALID ... */
  VOTE_TYPE_VALID = 1,
  /** VOTE_TYPE_INVALID - VOTE_TYPE_INVALID ... */
  VOTE_TYPE_INVALID = 2,
  /** VOTE_TYPE_ABSTAIN - VOTE_TYPE_ABSTAIN ... */
  VOTE_TYPE_ABSTAIN = 3,
  UNRECOGNIZED = -1,
}
export const VoteTypeSDKType = VoteType;
export function voteTypeFromJSON(object: any): VoteType {
  switch (object) {
    case 0:
    case "VOTE_TYPE_UNSPECIFIED":
      return VoteType.VOTE_TYPE_UNSPECIFIED;
    case 1:
    case "VOTE_TYPE_VALID":
      return VoteType.VOTE_TYPE_VALID;
    case 2:
    case "VOTE_TYPE_INVALID":
      return VoteType.VOTE_TYPE_INVALID;
    case 3:
    case "VOTE_TYPE_ABSTAIN":
      return VoteType.VOTE_TYPE_ABSTAIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteType.UNRECOGNIZED;
  }
}
export function voteTypeToJSON(object: VoteType): string {
  switch (object) {
    case VoteType.VOTE_TYPE_UNSPECIFIED:
      return "VOTE_TYPE_UNSPECIFIED";
    case VoteType.VOTE_TYPE_VALID:
      return "VOTE_TYPE_VALID";
    case VoteType.VOTE_TYPE_INVALID:
      return "VOTE_TYPE_INVALID";
    case VoteType.VOTE_TYPE_ABSTAIN:
      return "VOTE_TYPE_ABSTAIN";
    case VoteType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** MsgSubmitBundleProposal defines a SDK message for submitting a bundle proposal. */
export interface MsgSubmitBundleProposal {
  /** creator ... */
  creator: string;
  /** staker ... */
  staker: string;
  /** pool_id ... */
  poolId: Long;
  /** storage_id ... */
  storageId: string;
  /** data_size ... */
  dataSize: Long;
  /** data_hash ... */
  dataHash: string;
  /** from_index ... */
  fromIndex: Long;
  /** bundle_size ... */
  bundleSize: Long;
  /** from_key */
  fromKey: string;
  /** to_key ... */
  toKey: string;
  /** bundle_summary ... */
  bundleSummary: string;
}
/** MsgSubmitBundleProposal defines a SDK message for submitting a bundle proposal. */
export interface MsgSubmitBundleProposalSDKType {
  creator: string;
  staker: string;
  pool_id: Long;
  storage_id: string;
  data_size: Long;
  data_hash: string;
  from_index: Long;
  bundle_size: Long;
  from_key: string;
  to_key: string;
  bundle_summary: string;
}
/** MsgSubmitBundleProposalResponse defines the Msg/SubmitBundleProposal response type. */
export interface MsgSubmitBundleProposalResponse {}
/** MsgSubmitBundleProposalResponse defines the Msg/SubmitBundleProposal response type. */
export interface MsgSubmitBundleProposalResponseSDKType {}
/** MsgVoteBundleProposal defines a SDK message for voting on a bundle proposal. */
export interface MsgVoteBundleProposal {
  /** creator ... */
  creator: string;
  /** staker ... */
  staker: string;
  /** id ... */
  poolId: Long;
  /** storage_id ... */
  storageId: string;
  /** vote ... */
  vote: VoteType;
}
/** MsgVoteBundleProposal defines a SDK message for voting on a bundle proposal. */
export interface MsgVoteBundleProposalSDKType {
  creator: string;
  staker: string;
  pool_id: Long;
  storage_id: string;
  vote: VoteType;
}
/** MsgVoteBundleProposalResponse defines the Msg/VoteBundleProposal response type. */
export interface MsgVoteBundleProposalResponse {}
/** MsgVoteBundleProposalResponse defines the Msg/VoteBundleProposal response type. */
export interface MsgVoteBundleProposalResponseSDKType {}
/** MsgClaimUploaderRole defines a SDK message for claiming the uploader role. */
export interface MsgClaimUploaderRole {
  /** creator ... */
  creator: string;
  /** staker ... */
  staker: string;
  /** id ... */
  poolId: Long;
}
/** MsgClaimUploaderRole defines a SDK message for claiming the uploader role. */
export interface MsgClaimUploaderRoleSDKType {
  creator: string;
  staker: string;
  pool_id: Long;
}
/** MsgClaimUploaderRoleResponse defines the Msg/ClaimUploaderRole response type. */
export interface MsgClaimUploaderRoleResponse {}
/** MsgClaimUploaderRoleResponse defines the Msg/ClaimUploaderRole response type. */
export interface MsgClaimUploaderRoleResponseSDKType {}
/** MsgSubmitBundleProposal defines a SDK message for submitting a bundle proposal. */
export interface MsgSkipUploaderRole {
  /** creator ... */
  creator: string;
  /** staker ... */
  staker: string;
  /** pool_id ... */
  poolId: Long;
  /** from_index ... */
  fromIndex: Long;
}
/** MsgSubmitBundleProposal defines a SDK message for submitting a bundle proposal. */
export interface MsgSkipUploaderRoleSDKType {
  creator: string;
  staker: string;
  pool_id: Long;
  from_index: Long;
}
/** MsgSubmitBundleProposalResponse defines the Msg/SubmitBundleProposal response type. */
export interface MsgSkipUploaderRoleResponse {}
/** MsgSubmitBundleProposalResponse defines the Msg/SubmitBundleProposal response type. */
export interface MsgSkipUploaderRoleResponseSDKType {}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** payload defines the x/bundles parameters to update. */
  payload: string;
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  payload: string;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgSubmitBundleProposal(): MsgSubmitBundleProposal {
  return {
    creator: "",
    staker: "",
    poolId: Long.UZERO,
    storageId: "",
    dataSize: Long.UZERO,
    dataHash: "",
    fromIndex: Long.UZERO,
    bundleSize: Long.UZERO,
    fromKey: "",
    toKey: "",
    bundleSummary: ""
  };
}
export const MsgSubmitBundleProposal = {
  encode(message: MsgSubmitBundleProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.storageId !== "") {
      writer.uint32(34).string(message.storageId);
    }
    if (!message.dataSize.isZero()) {
      writer.uint32(40).uint64(message.dataSize);
    }
    if (message.dataHash !== "") {
      writer.uint32(50).string(message.dataHash);
    }
    if (!message.fromIndex.isZero()) {
      writer.uint32(56).uint64(message.fromIndex);
    }
    if (!message.bundleSize.isZero()) {
      writer.uint32(64).uint64(message.bundleSize);
    }
    if (message.fromKey !== "") {
      writer.uint32(74).string(message.fromKey);
    }
    if (message.toKey !== "") {
      writer.uint32(82).string(message.toKey);
    }
    if (message.bundleSummary !== "") {
      writer.uint32(90).string(message.bundleSummary);
    }
    return writer;
  },
  fromJSON(object: any): MsgSubmitBundleProposal {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      storageId: isSet(object.storageId) ? String(object.storageId) : "",
      dataSize: isSet(object.dataSize) ? Long.fromValue(object.dataSize) : Long.UZERO,
      dataHash: isSet(object.dataHash) ? String(object.dataHash) : "",
      fromIndex: isSet(object.fromIndex) ? Long.fromValue(object.fromIndex) : Long.UZERO,
      bundleSize: isSet(object.bundleSize) ? Long.fromValue(object.bundleSize) : Long.UZERO,
      fromKey: isSet(object.fromKey) ? String(object.fromKey) : "",
      toKey: isSet(object.toKey) ? String(object.toKey) : "",
      bundleSummary: isSet(object.bundleSummary) ? String(object.bundleSummary) : ""
    };
  },
  fromPartial(object: Partial<MsgSubmitBundleProposal>): MsgSubmitBundleProposal {
    const message = createBaseMsgSubmitBundleProposal();
    message.creator = object.creator ?? "";
    message.staker = object.staker ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.storageId = object.storageId ?? "";
    message.dataSize = object.dataSize !== undefined && object.dataSize !== null ? Long.fromValue(object.dataSize) : Long.UZERO;
    message.dataHash = object.dataHash ?? "";
    message.fromIndex = object.fromIndex !== undefined && object.fromIndex !== null ? Long.fromValue(object.fromIndex) : Long.UZERO;
    message.bundleSize = object.bundleSize !== undefined && object.bundleSize !== null ? Long.fromValue(object.bundleSize) : Long.UZERO;
    message.fromKey = object.fromKey ?? "";
    message.toKey = object.toKey ?? "";
    message.bundleSummary = object.bundleSummary ?? "";
    return message;
  }
};
function createBaseMsgSubmitBundleProposalResponse(): MsgSubmitBundleProposalResponse {
  return {};
}
export const MsgSubmitBundleProposalResponse = {
  encode(_: MsgSubmitBundleProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSubmitBundleProposalResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSubmitBundleProposalResponse>): MsgSubmitBundleProposalResponse {
    const message = createBaseMsgSubmitBundleProposalResponse();
    return message;
  }
};
function createBaseMsgVoteBundleProposal(): MsgVoteBundleProposal {
  return {
    creator: "",
    staker: "",
    poolId: Long.UZERO,
    storageId: "",
    vote: 0
  };
}
export const MsgVoteBundleProposal = {
  encode(message: MsgVoteBundleProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.storageId !== "") {
      writer.uint32(34).string(message.storageId);
    }
    if (message.vote !== 0) {
      writer.uint32(40).int32(message.vote);
    }
    return writer;
  },
  fromJSON(object: any): MsgVoteBundleProposal {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      storageId: isSet(object.storageId) ? String(object.storageId) : "",
      vote: isSet(object.vote) ? voteTypeFromJSON(object.vote) : 0
    };
  },
  fromPartial(object: Partial<MsgVoteBundleProposal>): MsgVoteBundleProposal {
    const message = createBaseMsgVoteBundleProposal();
    message.creator = object.creator ?? "";
    message.staker = object.staker ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.storageId = object.storageId ?? "";
    message.vote = object.vote ?? 0;
    return message;
  }
};
function createBaseMsgVoteBundleProposalResponse(): MsgVoteBundleProposalResponse {
  return {};
}
export const MsgVoteBundleProposalResponse = {
  encode(_: MsgVoteBundleProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgVoteBundleProposalResponse {
    return {};
  },
  fromPartial(_: Partial<MsgVoteBundleProposalResponse>): MsgVoteBundleProposalResponse {
    const message = createBaseMsgVoteBundleProposalResponse();
    return message;
  }
};
function createBaseMsgClaimUploaderRole(): MsgClaimUploaderRole {
  return {
    creator: "",
    staker: "",
    poolId: Long.UZERO
  };
}
export const MsgClaimUploaderRole = {
  encode(message: MsgClaimUploaderRole, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(24).uint64(message.poolId);
    }
    return writer;
  },
  fromJSON(object: any): MsgClaimUploaderRole {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgClaimUploaderRole>): MsgClaimUploaderRole {
    const message = createBaseMsgClaimUploaderRole();
    message.creator = object.creator ?? "";
    message.staker = object.staker ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }
};
function createBaseMsgClaimUploaderRoleResponse(): MsgClaimUploaderRoleResponse {
  return {};
}
export const MsgClaimUploaderRoleResponse = {
  encode(_: MsgClaimUploaderRoleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgClaimUploaderRoleResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClaimUploaderRoleResponse>): MsgClaimUploaderRoleResponse {
    const message = createBaseMsgClaimUploaderRoleResponse();
    return message;
  }
};
function createBaseMsgSkipUploaderRole(): MsgSkipUploaderRole {
  return {
    creator: "",
    staker: "",
    poolId: Long.UZERO,
    fromIndex: Long.UZERO
  };
}
export const MsgSkipUploaderRole = {
  encode(message: MsgSkipUploaderRole, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (!message.fromIndex.isZero()) {
      writer.uint32(32).uint64(message.fromIndex);
    }
    return writer;
  },
  fromJSON(object: any): MsgSkipUploaderRole {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      fromIndex: isSet(object.fromIndex) ? Long.fromValue(object.fromIndex) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgSkipUploaderRole>): MsgSkipUploaderRole {
    const message = createBaseMsgSkipUploaderRole();
    message.creator = object.creator ?? "";
    message.staker = object.staker ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.fromIndex = object.fromIndex !== undefined && object.fromIndex !== null ? Long.fromValue(object.fromIndex) : Long.UZERO;
    return message;
  }
};
function createBaseMsgSkipUploaderRoleResponse(): MsgSkipUploaderRoleResponse {
  return {};
}
export const MsgSkipUploaderRoleResponse = {
  encode(_: MsgSkipUploaderRoleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSkipUploaderRoleResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSkipUploaderRoleResponse>): MsgSkipUploaderRoleResponse {
    const message = createBaseMsgSkipUploaderRoleResponse();
    return message;
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    payload: ""
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      payload: isSet(object.payload) ? String(object.payload) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.payload = object.payload ?? "";
    return message;
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};