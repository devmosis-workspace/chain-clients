import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
export const VoteTypeAmino = VoteType;
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
  poolId: bigint;
  /** storage_id ... */
  storageId: string;
  /** data_size ... */
  dataSize: bigint;
  /** data_hash ... */
  dataHash: string;
  /** from_index ... */
  fromIndex: bigint;
  /** bundle_size ... */
  bundleSize: bigint;
  /** from_key */
  fromKey: string;
  /** to_key ... */
  toKey: string;
  /** bundle_summary ... */
  bundleSummary: string;
}
export interface MsgSubmitBundleProposalProtoMsg {
  typeUrl: "/kyve.bundles.v1beta1.MsgSubmitBundleProposal";
  value: Uint8Array;
}
/** MsgSubmitBundleProposal defines a SDK message for submitting a bundle proposal. */
export interface MsgSubmitBundleProposalAmino {
  /** creator ... */
  creator?: string;
  /** staker ... */
  staker?: string;
  /** pool_id ... */
  pool_id?: string;
  /** storage_id ... */
  storage_id?: string;
  /** data_size ... */
  data_size?: string;
  /** data_hash ... */
  data_hash?: string;
  /** from_index ... */
  from_index?: string;
  /** bundle_size ... */
  bundle_size?: string;
  /** from_key */
  from_key?: string;
  /** to_key ... */
  to_key?: string;
  /** bundle_summary ... */
  bundle_summary?: string;
}
export interface MsgSubmitBundleProposalAminoMsg {
  type: "/kyve.bundles.v1beta1.MsgSubmitBundleProposal";
  value: MsgSubmitBundleProposalAmino;
}
/** MsgSubmitBundleProposal defines a SDK message for submitting a bundle proposal. */
export interface MsgSubmitBundleProposalSDKType {
  creator: string;
  staker: string;
  pool_id: bigint;
  storage_id: string;
  data_size: bigint;
  data_hash: string;
  from_index: bigint;
  bundle_size: bigint;
  from_key: string;
  to_key: string;
  bundle_summary: string;
}
/** MsgSubmitBundleProposalResponse defines the Msg/SubmitBundleProposal response type. */
export interface MsgSubmitBundleProposalResponse {}
export interface MsgSubmitBundleProposalResponseProtoMsg {
  typeUrl: "/kyve.bundles.v1beta1.MsgSubmitBundleProposalResponse";
  value: Uint8Array;
}
/** MsgSubmitBundleProposalResponse defines the Msg/SubmitBundleProposal response type. */
export interface MsgSubmitBundleProposalResponseAmino {}
export interface MsgSubmitBundleProposalResponseAminoMsg {
  type: "/kyve.bundles.v1beta1.MsgSubmitBundleProposalResponse";
  value: MsgSubmitBundleProposalResponseAmino;
}
/** MsgSubmitBundleProposalResponse defines the Msg/SubmitBundleProposal response type. */
export interface MsgSubmitBundleProposalResponseSDKType {}
/** MsgVoteBundleProposal defines a SDK message for voting on a bundle proposal. */
export interface MsgVoteBundleProposal {
  /** creator ... */
  creator: string;
  /** staker ... */
  staker: string;
  /** id ... */
  poolId: bigint;
  /** storage_id ... */
  storageId: string;
  /** vote ... */
  vote: VoteType;
}
export interface MsgVoteBundleProposalProtoMsg {
  typeUrl: "/kyve.bundles.v1beta1.MsgVoteBundleProposal";
  value: Uint8Array;
}
/** MsgVoteBundleProposal defines a SDK message for voting on a bundle proposal. */
export interface MsgVoteBundleProposalAmino {
  /** creator ... */
  creator?: string;
  /** staker ... */
  staker?: string;
  /** id ... */
  pool_id?: string;
  /** storage_id ... */
  storage_id?: string;
  /** vote ... */
  vote?: VoteType;
}
export interface MsgVoteBundleProposalAminoMsg {
  type: "/kyve.bundles.v1beta1.MsgVoteBundleProposal";
  value: MsgVoteBundleProposalAmino;
}
/** MsgVoteBundleProposal defines a SDK message for voting on a bundle proposal. */
export interface MsgVoteBundleProposalSDKType {
  creator: string;
  staker: string;
  pool_id: bigint;
  storage_id: string;
  vote: VoteType;
}
/** MsgVoteBundleProposalResponse defines the Msg/VoteBundleProposal response type. */
export interface MsgVoteBundleProposalResponse {}
export interface MsgVoteBundleProposalResponseProtoMsg {
  typeUrl: "/kyve.bundles.v1beta1.MsgVoteBundleProposalResponse";
  value: Uint8Array;
}
/** MsgVoteBundleProposalResponse defines the Msg/VoteBundleProposal response type. */
export interface MsgVoteBundleProposalResponseAmino {}
export interface MsgVoteBundleProposalResponseAminoMsg {
  type: "/kyve.bundles.v1beta1.MsgVoteBundleProposalResponse";
  value: MsgVoteBundleProposalResponseAmino;
}
/** MsgVoteBundleProposalResponse defines the Msg/VoteBundleProposal response type. */
export interface MsgVoteBundleProposalResponseSDKType {}
/** MsgClaimUploaderRole defines a SDK message for claiming the uploader role. */
export interface MsgClaimUploaderRole {
  /** creator ... */
  creator: string;
  /** staker ... */
  staker: string;
  /** id ... */
  poolId: bigint;
}
export interface MsgClaimUploaderRoleProtoMsg {
  typeUrl: "/kyve.bundles.v1beta1.MsgClaimUploaderRole";
  value: Uint8Array;
}
/** MsgClaimUploaderRole defines a SDK message for claiming the uploader role. */
export interface MsgClaimUploaderRoleAmino {
  /** creator ... */
  creator?: string;
  /** staker ... */
  staker?: string;
  /** id ... */
  pool_id?: string;
}
export interface MsgClaimUploaderRoleAminoMsg {
  type: "/kyve.bundles.v1beta1.MsgClaimUploaderRole";
  value: MsgClaimUploaderRoleAmino;
}
/** MsgClaimUploaderRole defines a SDK message for claiming the uploader role. */
export interface MsgClaimUploaderRoleSDKType {
  creator: string;
  staker: string;
  pool_id: bigint;
}
/** MsgClaimUploaderRoleResponse defines the Msg/ClaimUploaderRole response type. */
export interface MsgClaimUploaderRoleResponse {}
export interface MsgClaimUploaderRoleResponseProtoMsg {
  typeUrl: "/kyve.bundles.v1beta1.MsgClaimUploaderRoleResponse";
  value: Uint8Array;
}
/** MsgClaimUploaderRoleResponse defines the Msg/ClaimUploaderRole response type. */
export interface MsgClaimUploaderRoleResponseAmino {}
export interface MsgClaimUploaderRoleResponseAminoMsg {
  type: "/kyve.bundles.v1beta1.MsgClaimUploaderRoleResponse";
  value: MsgClaimUploaderRoleResponseAmino;
}
/** MsgClaimUploaderRoleResponse defines the Msg/ClaimUploaderRole response type. */
export interface MsgClaimUploaderRoleResponseSDKType {}
/** MsgSubmitBundleProposal defines a SDK message for submitting a bundle proposal. */
export interface MsgSkipUploaderRole {
  /** creator ... */
  creator: string;
  /** staker ... */
  staker: string;
  /** pool_id ... */
  poolId: bigint;
  /** from_index ... */
  fromIndex: bigint;
}
export interface MsgSkipUploaderRoleProtoMsg {
  typeUrl: "/kyve.bundles.v1beta1.MsgSkipUploaderRole";
  value: Uint8Array;
}
/** MsgSubmitBundleProposal defines a SDK message for submitting a bundle proposal. */
export interface MsgSkipUploaderRoleAmino {
  /** creator ... */
  creator?: string;
  /** staker ... */
  staker?: string;
  /** pool_id ... */
  pool_id?: string;
  /** from_index ... */
  from_index?: string;
}
export interface MsgSkipUploaderRoleAminoMsg {
  type: "/kyve.bundles.v1beta1.MsgSkipUploaderRole";
  value: MsgSkipUploaderRoleAmino;
}
/** MsgSubmitBundleProposal defines a SDK message for submitting a bundle proposal. */
export interface MsgSkipUploaderRoleSDKType {
  creator: string;
  staker: string;
  pool_id: bigint;
  from_index: bigint;
}
/** MsgSubmitBundleProposalResponse defines the Msg/SubmitBundleProposal response type. */
export interface MsgSkipUploaderRoleResponse {}
export interface MsgSkipUploaderRoleResponseProtoMsg {
  typeUrl: "/kyve.bundles.v1beta1.MsgSkipUploaderRoleResponse";
  value: Uint8Array;
}
/** MsgSubmitBundleProposalResponse defines the Msg/SubmitBundleProposal response type. */
export interface MsgSkipUploaderRoleResponseAmino {}
export interface MsgSkipUploaderRoleResponseAminoMsg {
  type: "/kyve.bundles.v1beta1.MsgSkipUploaderRoleResponse";
  value: MsgSkipUploaderRoleResponseAmino;
}
/** MsgSubmitBundleProposalResponse defines the Msg/SubmitBundleProposal response type. */
export interface MsgSkipUploaderRoleResponseSDKType {}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** payload defines the x/bundles parameters to update. */
  payload: string;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/kyve.bundles.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /** payload defines the x/bundles parameters to update. */
  payload?: string;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/kyve.bundles.v1beta1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  payload: string;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/kyve.bundles.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/kyve.bundles.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgSubmitBundleProposal(): MsgSubmitBundleProposal {
  return {
    creator: "",
    staker: "",
    poolId: BigInt(0),
    storageId: "",
    dataSize: BigInt(0),
    dataHash: "",
    fromIndex: BigInt(0),
    bundleSize: BigInt(0),
    fromKey: "",
    toKey: "",
    bundleSummary: ""
  };
}
export const MsgSubmitBundleProposal = {
  typeUrl: "/kyve.bundles.v1beta1.MsgSubmitBundleProposal",
  encode(message: MsgSubmitBundleProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.storageId !== "") {
      writer.uint32(34).string(message.storageId);
    }
    if (message.dataSize !== BigInt(0)) {
      writer.uint32(40).uint64(message.dataSize);
    }
    if (message.dataHash !== "") {
      writer.uint32(50).string(message.dataHash);
    }
    if (message.fromIndex !== BigInt(0)) {
      writer.uint32(56).uint64(message.fromIndex);
    }
    if (message.bundleSize !== BigInt(0)) {
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      storageId: isSet(object.storageId) ? String(object.storageId) : "",
      dataSize: isSet(object.dataSize) ? BigInt(object.dataSize.toString()) : BigInt(0),
      dataHash: isSet(object.dataHash) ? String(object.dataHash) : "",
      fromIndex: isSet(object.fromIndex) ? BigInt(object.fromIndex.toString()) : BigInt(0),
      bundleSize: isSet(object.bundleSize) ? BigInt(object.bundleSize.toString()) : BigInt(0),
      fromKey: isSet(object.fromKey) ? String(object.fromKey) : "",
      toKey: isSet(object.toKey) ? String(object.toKey) : "",
      bundleSummary: isSet(object.bundleSummary) ? String(object.bundleSummary) : ""
    };
  },
  fromPartial(object: Partial<MsgSubmitBundleProposal>): MsgSubmitBundleProposal {
    const message = createBaseMsgSubmitBundleProposal();
    message.creator = object.creator ?? "";
    message.staker = object.staker ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.storageId = object.storageId ?? "";
    message.dataSize = object.dataSize !== undefined && object.dataSize !== null ? BigInt(object.dataSize.toString()) : BigInt(0);
    message.dataHash = object.dataHash ?? "";
    message.fromIndex = object.fromIndex !== undefined && object.fromIndex !== null ? BigInt(object.fromIndex.toString()) : BigInt(0);
    message.bundleSize = object.bundleSize !== undefined && object.bundleSize !== null ? BigInt(object.bundleSize.toString()) : BigInt(0);
    message.fromKey = object.fromKey ?? "";
    message.toKey = object.toKey ?? "";
    message.bundleSummary = object.bundleSummary ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitBundleProposalAmino): MsgSubmitBundleProposal {
    const message = createBaseMsgSubmitBundleProposal();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.storage_id !== undefined && object.storage_id !== null) {
      message.storageId = object.storage_id;
    }
    if (object.data_size !== undefined && object.data_size !== null) {
      message.dataSize = BigInt(object.data_size);
    }
    if (object.data_hash !== undefined && object.data_hash !== null) {
      message.dataHash = object.data_hash;
    }
    if (object.from_index !== undefined && object.from_index !== null) {
      message.fromIndex = BigInt(object.from_index);
    }
    if (object.bundle_size !== undefined && object.bundle_size !== null) {
      message.bundleSize = BigInt(object.bundle_size);
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
    return message;
  },
  toAmino(message: MsgSubmitBundleProposal): MsgSubmitBundleProposalAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.staker = message.staker;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.storage_id = message.storageId;
    obj.data_size = message.dataSize ? message.dataSize.toString() : undefined;
    obj.data_hash = message.dataHash;
    obj.from_index = message.fromIndex ? message.fromIndex.toString() : undefined;
    obj.bundle_size = message.bundleSize ? message.bundleSize.toString() : undefined;
    obj.from_key = message.fromKey;
    obj.to_key = message.toKey;
    obj.bundle_summary = message.bundleSummary;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitBundleProposalAminoMsg): MsgSubmitBundleProposal {
    return MsgSubmitBundleProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitBundleProposalProtoMsg): MsgSubmitBundleProposal {
    return MsgSubmitBundleProposal.decode(message.value);
  },
  toProto(message: MsgSubmitBundleProposal): Uint8Array {
    return MsgSubmitBundleProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitBundleProposal): MsgSubmitBundleProposalProtoMsg {
    return {
      typeUrl: "/kyve.bundles.v1beta1.MsgSubmitBundleProposal",
      value: MsgSubmitBundleProposal.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitBundleProposalResponse(): MsgSubmitBundleProposalResponse {
  return {};
}
export const MsgSubmitBundleProposalResponse = {
  typeUrl: "/kyve.bundles.v1beta1.MsgSubmitBundleProposalResponse",
  encode(_: MsgSubmitBundleProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSubmitBundleProposalResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSubmitBundleProposalResponse>): MsgSubmitBundleProposalResponse {
    const message = createBaseMsgSubmitBundleProposalResponse();
    return message;
  },
  fromAmino(_: MsgSubmitBundleProposalResponseAmino): MsgSubmitBundleProposalResponse {
    const message = createBaseMsgSubmitBundleProposalResponse();
    return message;
  },
  toAmino(_: MsgSubmitBundleProposalResponse): MsgSubmitBundleProposalResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitBundleProposalResponseAminoMsg): MsgSubmitBundleProposalResponse {
    return MsgSubmitBundleProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitBundleProposalResponseProtoMsg): MsgSubmitBundleProposalResponse {
    return MsgSubmitBundleProposalResponse.decode(message.value);
  },
  toProto(message: MsgSubmitBundleProposalResponse): Uint8Array {
    return MsgSubmitBundleProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitBundleProposalResponse): MsgSubmitBundleProposalResponseProtoMsg {
    return {
      typeUrl: "/kyve.bundles.v1beta1.MsgSubmitBundleProposalResponse",
      value: MsgSubmitBundleProposalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVoteBundleProposal(): MsgVoteBundleProposal {
  return {
    creator: "",
    staker: "",
    poolId: BigInt(0),
    storageId: "",
    vote: 0
  };
}
export const MsgVoteBundleProposal = {
  typeUrl: "/kyve.bundles.v1beta1.MsgVoteBundleProposal",
  encode(message: MsgVoteBundleProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.poolId !== BigInt(0)) {
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      storageId: isSet(object.storageId) ? String(object.storageId) : "",
      vote: isSet(object.vote) ? voteTypeFromJSON(object.vote) : -1
    };
  },
  fromPartial(object: Partial<MsgVoteBundleProposal>): MsgVoteBundleProposal {
    const message = createBaseMsgVoteBundleProposal();
    message.creator = object.creator ?? "";
    message.staker = object.staker ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.storageId = object.storageId ?? "";
    message.vote = object.vote ?? 0;
    return message;
  },
  fromAmino(object: MsgVoteBundleProposalAmino): MsgVoteBundleProposal {
    const message = createBaseMsgVoteBundleProposal();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.storage_id !== undefined && object.storage_id !== null) {
      message.storageId = object.storage_id;
    }
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = voteTypeFromJSON(object.vote);
    }
    return message;
  },
  toAmino(message: MsgVoteBundleProposal): MsgVoteBundleProposalAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.staker = message.staker;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.storage_id = message.storageId;
    obj.vote = message.vote;
    return obj;
  },
  fromAminoMsg(object: MsgVoteBundleProposalAminoMsg): MsgVoteBundleProposal {
    return MsgVoteBundleProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVoteBundleProposalProtoMsg): MsgVoteBundleProposal {
    return MsgVoteBundleProposal.decode(message.value);
  },
  toProto(message: MsgVoteBundleProposal): Uint8Array {
    return MsgVoteBundleProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteBundleProposal): MsgVoteBundleProposalProtoMsg {
    return {
      typeUrl: "/kyve.bundles.v1beta1.MsgVoteBundleProposal",
      value: MsgVoteBundleProposal.encode(message).finish()
    };
  }
};
function createBaseMsgVoteBundleProposalResponse(): MsgVoteBundleProposalResponse {
  return {};
}
export const MsgVoteBundleProposalResponse = {
  typeUrl: "/kyve.bundles.v1beta1.MsgVoteBundleProposalResponse",
  encode(_: MsgVoteBundleProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgVoteBundleProposalResponse {
    return {};
  },
  fromPartial(_: Partial<MsgVoteBundleProposalResponse>): MsgVoteBundleProposalResponse {
    const message = createBaseMsgVoteBundleProposalResponse();
    return message;
  },
  fromAmino(_: MsgVoteBundleProposalResponseAmino): MsgVoteBundleProposalResponse {
    const message = createBaseMsgVoteBundleProposalResponse();
    return message;
  },
  toAmino(_: MsgVoteBundleProposalResponse): MsgVoteBundleProposalResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVoteBundleProposalResponseAminoMsg): MsgVoteBundleProposalResponse {
    return MsgVoteBundleProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVoteBundleProposalResponseProtoMsg): MsgVoteBundleProposalResponse {
    return MsgVoteBundleProposalResponse.decode(message.value);
  },
  toProto(message: MsgVoteBundleProposalResponse): Uint8Array {
    return MsgVoteBundleProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteBundleProposalResponse): MsgVoteBundleProposalResponseProtoMsg {
    return {
      typeUrl: "/kyve.bundles.v1beta1.MsgVoteBundleProposalResponse",
      value: MsgVoteBundleProposalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimUploaderRole(): MsgClaimUploaderRole {
  return {
    creator: "",
    staker: "",
    poolId: BigInt(0)
  };
}
export const MsgClaimUploaderRole = {
  typeUrl: "/kyve.bundles.v1beta1.MsgClaimUploaderRole",
  encode(message: MsgClaimUploaderRole, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    return writer;
  },
  fromJSON(object: any): MsgClaimUploaderRole {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgClaimUploaderRole>): MsgClaimUploaderRole {
    const message = createBaseMsgClaimUploaderRole();
    message.creator = object.creator ?? "";
    message.staker = object.staker ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgClaimUploaderRoleAmino): MsgClaimUploaderRole {
    const message = createBaseMsgClaimUploaderRole();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: MsgClaimUploaderRole): MsgClaimUploaderRoleAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.staker = message.staker;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgClaimUploaderRoleAminoMsg): MsgClaimUploaderRole {
    return MsgClaimUploaderRole.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimUploaderRoleProtoMsg): MsgClaimUploaderRole {
    return MsgClaimUploaderRole.decode(message.value);
  },
  toProto(message: MsgClaimUploaderRole): Uint8Array {
    return MsgClaimUploaderRole.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimUploaderRole): MsgClaimUploaderRoleProtoMsg {
    return {
      typeUrl: "/kyve.bundles.v1beta1.MsgClaimUploaderRole",
      value: MsgClaimUploaderRole.encode(message).finish()
    };
  }
};
function createBaseMsgClaimUploaderRoleResponse(): MsgClaimUploaderRoleResponse {
  return {};
}
export const MsgClaimUploaderRoleResponse = {
  typeUrl: "/kyve.bundles.v1beta1.MsgClaimUploaderRoleResponse",
  encode(_: MsgClaimUploaderRoleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgClaimUploaderRoleResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClaimUploaderRoleResponse>): MsgClaimUploaderRoleResponse {
    const message = createBaseMsgClaimUploaderRoleResponse();
    return message;
  },
  fromAmino(_: MsgClaimUploaderRoleResponseAmino): MsgClaimUploaderRoleResponse {
    const message = createBaseMsgClaimUploaderRoleResponse();
    return message;
  },
  toAmino(_: MsgClaimUploaderRoleResponse): MsgClaimUploaderRoleResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimUploaderRoleResponseAminoMsg): MsgClaimUploaderRoleResponse {
    return MsgClaimUploaderRoleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimUploaderRoleResponseProtoMsg): MsgClaimUploaderRoleResponse {
    return MsgClaimUploaderRoleResponse.decode(message.value);
  },
  toProto(message: MsgClaimUploaderRoleResponse): Uint8Array {
    return MsgClaimUploaderRoleResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimUploaderRoleResponse): MsgClaimUploaderRoleResponseProtoMsg {
    return {
      typeUrl: "/kyve.bundles.v1beta1.MsgClaimUploaderRoleResponse",
      value: MsgClaimUploaderRoleResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSkipUploaderRole(): MsgSkipUploaderRole {
  return {
    creator: "",
    staker: "",
    poolId: BigInt(0),
    fromIndex: BigInt(0)
  };
}
export const MsgSkipUploaderRole = {
  typeUrl: "/kyve.bundles.v1beta1.MsgSkipUploaderRole",
  encode(message: MsgSkipUploaderRole, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.fromIndex !== BigInt(0)) {
      writer.uint32(32).uint64(message.fromIndex);
    }
    return writer;
  },
  fromJSON(object: any): MsgSkipUploaderRole {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      fromIndex: isSet(object.fromIndex) ? BigInt(object.fromIndex.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgSkipUploaderRole>): MsgSkipUploaderRole {
    const message = createBaseMsgSkipUploaderRole();
    message.creator = object.creator ?? "";
    message.staker = object.staker ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.fromIndex = object.fromIndex !== undefined && object.fromIndex !== null ? BigInt(object.fromIndex.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSkipUploaderRoleAmino): MsgSkipUploaderRole {
    const message = createBaseMsgSkipUploaderRole();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.from_index !== undefined && object.from_index !== null) {
      message.fromIndex = BigInt(object.from_index);
    }
    return message;
  },
  toAmino(message: MsgSkipUploaderRole): MsgSkipUploaderRoleAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.staker = message.staker;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.from_index = message.fromIndex ? message.fromIndex.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSkipUploaderRoleAminoMsg): MsgSkipUploaderRole {
    return MsgSkipUploaderRole.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSkipUploaderRoleProtoMsg): MsgSkipUploaderRole {
    return MsgSkipUploaderRole.decode(message.value);
  },
  toProto(message: MsgSkipUploaderRole): Uint8Array {
    return MsgSkipUploaderRole.encode(message).finish();
  },
  toProtoMsg(message: MsgSkipUploaderRole): MsgSkipUploaderRoleProtoMsg {
    return {
      typeUrl: "/kyve.bundles.v1beta1.MsgSkipUploaderRole",
      value: MsgSkipUploaderRole.encode(message).finish()
    };
  }
};
function createBaseMsgSkipUploaderRoleResponse(): MsgSkipUploaderRoleResponse {
  return {};
}
export const MsgSkipUploaderRoleResponse = {
  typeUrl: "/kyve.bundles.v1beta1.MsgSkipUploaderRoleResponse",
  encode(_: MsgSkipUploaderRoleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSkipUploaderRoleResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSkipUploaderRoleResponse>): MsgSkipUploaderRoleResponse {
    const message = createBaseMsgSkipUploaderRoleResponse();
    return message;
  },
  fromAmino(_: MsgSkipUploaderRoleResponseAmino): MsgSkipUploaderRoleResponse {
    const message = createBaseMsgSkipUploaderRoleResponse();
    return message;
  },
  toAmino(_: MsgSkipUploaderRoleResponse): MsgSkipUploaderRoleResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSkipUploaderRoleResponseAminoMsg): MsgSkipUploaderRoleResponse {
    return MsgSkipUploaderRoleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSkipUploaderRoleResponseProtoMsg): MsgSkipUploaderRoleResponse {
    return MsgSkipUploaderRoleResponse.decode(message.value);
  },
  toProto(message: MsgSkipUploaderRoleResponse): Uint8Array {
    return MsgSkipUploaderRoleResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSkipUploaderRoleResponse): MsgSkipUploaderRoleResponseProtoMsg {
    return {
      typeUrl: "/kyve.bundles.v1beta1.MsgSkipUploaderRoleResponse",
      value: MsgSkipUploaderRoleResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    payload: ""
  };
}
export const MsgUpdateParams = {
  typeUrl: "/kyve.bundles.v1beta1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = object.payload;
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.payload = message.payload;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/kyve.bundles.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/kyve.bundles.v1beta1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/kyve.bundles.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};