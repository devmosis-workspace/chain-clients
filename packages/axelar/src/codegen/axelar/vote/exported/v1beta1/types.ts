import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Threshold, ThresholdAmino, ThresholdSDKType } from "../../../utils/v1beta1/threshold";
import { Snapshot, SnapshotAmino, SnapshotSDKType } from "../../../snapshot/exported/v1beta1/types";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
export enum PollState {
  POLL_STATE_UNSPECIFIED = 0,
  POLL_STATE_PENDING = 1,
  POLL_STATE_COMPLETED = 2,
  POLL_STATE_FAILED = 3,
  UNRECOGNIZED = -1,
}
export const PollStateSDKType = PollState;
export const PollStateAmino = PollState;
export function pollStateFromJSON(object: any): PollState {
  switch (object) {
    case 0:
    case "POLL_STATE_UNSPECIFIED":
      return PollState.POLL_STATE_UNSPECIFIED;
    case 1:
    case "POLL_STATE_PENDING":
      return PollState.POLL_STATE_PENDING;
    case 2:
    case "POLL_STATE_COMPLETED":
      return PollState.POLL_STATE_COMPLETED;
    case 3:
    case "POLL_STATE_FAILED":
      return PollState.POLL_STATE_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PollState.UNRECOGNIZED;
  }
}
export function pollStateToJSON(object: PollState): string {
  switch (object) {
    case PollState.POLL_STATE_UNSPECIFIED:
      return "POLL_STATE_UNSPECIFIED";
    case PollState.POLL_STATE_PENDING:
      return "POLL_STATE_PENDING";
    case PollState.POLL_STATE_COMPLETED:
      return "POLL_STATE_COMPLETED";
    case PollState.POLL_STATE_FAILED:
      return "POLL_STATE_FAILED";
    case PollState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * PollMetadata represents a poll with write-in voting, i.e. the result of the
 * vote can have any data type
 */
export interface PollMetadata {
  expiresAt: bigint;
  result?: (Any) | undefined;
  votingThreshold: Threshold;
  state: PollState;
  minVoterCount: bigint;
  rewardPoolName: string;
  gracePeriod: bigint;
  completedAt: bigint;
  id: bigint;
  snapshot: Snapshot;
  module: string;
  moduleMetadata?: (Any) | undefined;
}
export interface PollMetadataProtoMsg {
  typeUrl: "/axelar.vote.exported.v1beta1.PollMetadata";
  value: Uint8Array;
}
export type PollMetadataEncoded = Omit<PollMetadata, "result" | "moduleMetadata"> & {
  result?: AnyProtoMsg | undefined;
  moduleMetadata?: AnyProtoMsg | undefined;
};
/**
 * PollMetadata represents a poll with write-in voting, i.e. the result of the
 * vote can have any data type
 */
export interface PollMetadataAmino {
  expires_at?: string;
  result?: AnyAmino;
  voting_threshold?: ThresholdAmino;
  state?: PollState;
  min_voter_count?: string;
  reward_pool_name?: string;
  grace_period?: string;
  completed_at?: string;
  id?: string;
  snapshot?: SnapshotAmino;
  module?: string;
  module_metadata?: AnyAmino;
}
export interface PollMetadataAminoMsg {
  type: "/axelar.vote.exported.v1beta1.PollMetadata";
  value: PollMetadataAmino;
}
/**
 * PollMetadata represents a poll with write-in voting, i.e. the result of the
 * vote can have any data type
 */
export interface PollMetadataSDKType {
  expires_at: bigint;
  result?: AnySDKType | undefined;
  voting_threshold: ThresholdSDKType;
  state: PollState;
  min_voter_count: bigint;
  reward_pool_name: string;
  grace_period: bigint;
  completed_at: bigint;
  id: bigint;
  snapshot: SnapshotSDKType;
  module: string;
  module_metadata?: AnySDKType | undefined;
}
/** PollKey represents the key data for a poll */
/** @deprecated */
export interface PollKey {
  module: string;
  id: string;
}
export interface PollKeyProtoMsg {
  typeUrl: "/axelar.vote.exported.v1beta1.PollKey";
  value: Uint8Array;
}
/** PollKey represents the key data for a poll */
/** @deprecated */
export interface PollKeyAmino {
  module?: string;
  id?: string;
}
export interface PollKeyAminoMsg {
  type: "/axelar.vote.exported.v1beta1.PollKey";
  value: PollKeyAmino;
}
/** PollKey represents the key data for a poll */
/** @deprecated */
export interface PollKeySDKType {
  module: string;
  id: string;
}
/** PollParticipants should be embedded in poll events in other modules */
export interface PollParticipants {
  pollId: bigint;
  participants: Uint8Array[];
}
export interface PollParticipantsProtoMsg {
  typeUrl: "/axelar.vote.exported.v1beta1.PollParticipants";
  value: Uint8Array;
}
/** PollParticipants should be embedded in poll events in other modules */
export interface PollParticipantsAmino {
  poll_id?: string;
  participants?: string[];
}
export interface PollParticipantsAminoMsg {
  type: "/axelar.vote.exported.v1beta1.PollParticipants";
  value: PollParticipantsAmino;
}
/** PollParticipants should be embedded in poll events in other modules */
export interface PollParticipantsSDKType {
  poll_id: bigint;
  participants: Uint8Array[];
}
function createBasePollMetadata(): PollMetadata {
  return {
    expiresAt: BigInt(0),
    result: undefined,
    votingThreshold: Threshold.fromPartial({}),
    state: 0,
    minVoterCount: BigInt(0),
    rewardPoolName: "",
    gracePeriod: BigInt(0),
    completedAt: BigInt(0),
    id: BigInt(0),
    snapshot: Snapshot.fromPartial({}),
    module: "",
    moduleMetadata: undefined
  };
}
export const PollMetadata = {
  typeUrl: "/axelar.vote.exported.v1beta1.PollMetadata",
  encode(message: PollMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(24).int64(message.expiresAt);
    }
    if (message.result !== undefined) {
      Any.encode((message.result as Any), writer.uint32(34).fork()).ldelim();
    }
    if (message.votingThreshold !== undefined) {
      Threshold.encode(message.votingThreshold, writer.uint32(42).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(48).int32(message.state);
    }
    if (message.minVoterCount !== BigInt(0)) {
      writer.uint32(56).int64(message.minVoterCount);
    }
    if (message.rewardPoolName !== "") {
      writer.uint32(82).string(message.rewardPoolName);
    }
    if (message.gracePeriod !== BigInt(0)) {
      writer.uint32(88).int64(message.gracePeriod);
    }
    if (message.completedAt !== BigInt(0)) {
      writer.uint32(96).int64(message.completedAt);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(104).uint64(message.id);
    }
    if (message.snapshot !== undefined) {
      Snapshot.encode(message.snapshot, writer.uint32(122).fork()).ldelim();
    }
    if (message.module !== "") {
      writer.uint32(130).string(message.module);
    }
    if (message.moduleMetadata !== undefined) {
      Any.encode((message.moduleMetadata as Any), writer.uint32(138).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PollMetadata {
    return {
      expiresAt: isSet(object.expiresAt) ? BigInt(object.expiresAt.toString()) : BigInt(0),
      result: isSet(object.result) ? Any.fromJSON(object.result) : undefined,
      votingThreshold: isSet(object.votingThreshold) ? Threshold.fromJSON(object.votingThreshold) : undefined,
      state: isSet(object.state) ? pollStateFromJSON(object.state) : -1,
      minVoterCount: isSet(object.minVoterCount) ? BigInt(object.minVoterCount.toString()) : BigInt(0),
      rewardPoolName: isSet(object.rewardPoolName) ? String(object.rewardPoolName) : "",
      gracePeriod: isSet(object.gracePeriod) ? BigInt(object.gracePeriod.toString()) : BigInt(0),
      completedAt: isSet(object.completedAt) ? BigInt(object.completedAt.toString()) : BigInt(0),
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      snapshot: isSet(object.snapshot) ? Snapshot.fromJSON(object.snapshot) : undefined,
      module: isSet(object.module) ? String(object.module) : "",
      moduleMetadata: isSet(object.moduleMetadata) ? Any.fromJSON(object.moduleMetadata) : undefined
    };
  },
  fromPartial(object: Partial<PollMetadata>): PollMetadata {
    const message = createBasePollMetadata();
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    message.result = object.result !== undefined && object.result !== null ? Any.fromPartial(object.result) : undefined;
    message.votingThreshold = object.votingThreshold !== undefined && object.votingThreshold !== null ? Threshold.fromPartial(object.votingThreshold) : undefined;
    message.state = object.state ?? 0;
    message.minVoterCount = object.minVoterCount !== undefined && object.minVoterCount !== null ? BigInt(object.minVoterCount.toString()) : BigInt(0);
    message.rewardPoolName = object.rewardPoolName ?? "";
    message.gracePeriod = object.gracePeriod !== undefined && object.gracePeriod !== null ? BigInt(object.gracePeriod.toString()) : BigInt(0);
    message.completedAt = object.completedAt !== undefined && object.completedAt !== null ? BigInt(object.completedAt.toString()) : BigInt(0);
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? Snapshot.fromPartial(object.snapshot) : undefined;
    message.module = object.module ?? "";
    message.moduleMetadata = object.moduleMetadata !== undefined && object.moduleMetadata !== null ? Any.fromPartial(object.moduleMetadata) : undefined;
    return message;
  },
  fromAmino(object: PollMetadataAmino): PollMetadata {
    const message = createBasePollMetadata();
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = Github_com_cosmos_codec_ProtoMarshaler_FromAmino(object.result);
    }
    if (object.voting_threshold !== undefined && object.voting_threshold !== null) {
      message.votingThreshold = Threshold.fromAmino(object.voting_threshold);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = pollStateFromJSON(object.state);
    }
    if (object.min_voter_count !== undefined && object.min_voter_count !== null) {
      message.minVoterCount = BigInt(object.min_voter_count);
    }
    if (object.reward_pool_name !== undefined && object.reward_pool_name !== null) {
      message.rewardPoolName = object.reward_pool_name;
    }
    if (object.grace_period !== undefined && object.grace_period !== null) {
      message.gracePeriod = BigInt(object.grace_period);
    }
    if (object.completed_at !== undefined && object.completed_at !== null) {
      message.completedAt = BigInt(object.completed_at);
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.snapshot !== undefined && object.snapshot !== null) {
      message.snapshot = Snapshot.fromAmino(object.snapshot);
    }
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.module_metadata !== undefined && object.module_metadata !== null) {
      message.moduleMetadata = Github_com_cosmos_codec_ProtoMarshaler_FromAmino(object.module_metadata);
    }
    return message;
  },
  toAmino(message: PollMetadata): PollMetadataAmino {
    const obj: any = {};
    obj.expires_at = message.expiresAt ? message.expiresAt.toString() : undefined;
    obj.result = message.result ? Github_com_cosmos_codec_ProtoMarshaler_ToAmino((message.result as Any)) : undefined;
    obj.voting_threshold = message.votingThreshold ? Threshold.toAmino(message.votingThreshold) : undefined;
    obj.state = message.state;
    obj.min_voter_count = message.minVoterCount ? message.minVoterCount.toString() : undefined;
    obj.reward_pool_name = message.rewardPoolName;
    obj.grace_period = message.gracePeriod ? message.gracePeriod.toString() : undefined;
    obj.completed_at = message.completedAt ? message.completedAt.toString() : undefined;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.snapshot = message.snapshot ? Snapshot.toAmino(message.snapshot) : undefined;
    obj.module = message.module;
    obj.module_metadata = message.moduleMetadata ? Github_com_cosmos_codec_ProtoMarshaler_ToAmino((message.moduleMetadata as Any)) : undefined;
    return obj;
  },
  fromAminoMsg(object: PollMetadataAminoMsg): PollMetadata {
    return PollMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: PollMetadataProtoMsg): PollMetadata {
    return PollMetadata.decode(message.value);
  },
  toProto(message: PollMetadata): Uint8Array {
    return PollMetadata.encode(message).finish();
  },
  toProtoMsg(message: PollMetadata): PollMetadataProtoMsg {
    return {
      typeUrl: "/axelar.vote.exported.v1beta1.PollMetadata",
      value: PollMetadata.encode(message).finish()
    };
  }
};
function createBasePollKey(): PollKey {
  return {
    module: "",
    id: ""
  };
}
export const PollKey = {
  typeUrl: "/axelar.vote.exported.v1beta1.PollKey",
  encode(message: PollKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): PollKey {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<PollKey>): PollKey {
    const message = createBasePollKey();
    message.module = object.module ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: PollKeyAmino): PollKey {
    const message = createBasePollKey();
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: PollKey): PollKeyAmino {
    const obj: any = {};
    obj.module = message.module;
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: PollKeyAminoMsg): PollKey {
    return PollKey.fromAmino(object.value);
  },
  fromProtoMsg(message: PollKeyProtoMsg): PollKey {
    return PollKey.decode(message.value);
  },
  toProto(message: PollKey): Uint8Array {
    return PollKey.encode(message).finish();
  },
  toProtoMsg(message: PollKey): PollKeyProtoMsg {
    return {
      typeUrl: "/axelar.vote.exported.v1beta1.PollKey",
      value: PollKey.encode(message).finish()
    };
  }
};
function createBasePollParticipants(): PollParticipants {
  return {
    pollId: BigInt(0),
    participants: []
  };
}
export const PollParticipants = {
  typeUrl: "/axelar.vote.exported.v1beta1.PollParticipants",
  encode(message: PollParticipants, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pollId !== BigInt(0)) {
      writer.uint32(8).uint64(message.pollId);
    }
    for (const v of message.participants) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },
  fromJSON(object: any): PollParticipants {
    return {
      pollId: isSet(object.pollId) ? BigInt(object.pollId.toString()) : BigInt(0),
      participants: Array.isArray(object?.participants) ? object.participants.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object: Partial<PollParticipants>): PollParticipants {
    const message = createBasePollParticipants();
    message.pollId = object.pollId !== undefined && object.pollId !== null ? BigInt(object.pollId.toString()) : BigInt(0);
    message.participants = object.participants?.map(e => e) || [];
    return message;
  },
  fromAmino(object: PollParticipantsAmino): PollParticipants {
    const message = createBasePollParticipants();
    if (object.poll_id !== undefined && object.poll_id !== null) {
      message.pollId = BigInt(object.poll_id);
    }
    message.participants = object.participants?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: PollParticipants): PollParticipantsAmino {
    const obj: any = {};
    obj.poll_id = message.pollId ? message.pollId.toString() : undefined;
    if (message.participants) {
      obj.participants = message.participants.map(e => base64FromBytes(e));
    } else {
      obj.participants = [];
    }
    return obj;
  },
  fromAminoMsg(object: PollParticipantsAminoMsg): PollParticipants {
    return PollParticipants.fromAmino(object.value);
  },
  fromProtoMsg(message: PollParticipantsProtoMsg): PollParticipants {
    return PollParticipants.decode(message.value);
  },
  toProto(message: PollParticipants): Uint8Array {
    return PollParticipants.encode(message).finish();
  },
  toProtoMsg(message: PollParticipants): PollParticipantsProtoMsg {
    return {
      typeUrl: "/axelar.vote.exported.v1beta1.PollParticipants",
      value: PollParticipants.encode(message).finish()
    };
  }
};
export const Github_com_cosmos_codec_ProtoMarshaler_InterfaceDecoder = (input: BinaryReader | Uint8Array): Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const Github_com_cosmos_codec_ProtoMarshaler_FromAmino = (content: AnyAmino) => {
  return Any.fromAmino(content);
};
export const Github_com_cosmos_codec_ProtoMarshaler_ToAmino = (content: Any) => {
  return Any.toAmino(content);
};