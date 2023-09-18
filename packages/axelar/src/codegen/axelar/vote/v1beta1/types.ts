import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, isObject } from "../../../helpers";
export interface TalliedVote_IsVoterLateEntry {
  key: string;
  value: boolean;
}
export interface TalliedVote_IsVoterLateEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface TalliedVote_IsVoterLateEntryAmino {
  key: string;
  value: boolean;
}
export interface TalliedVote_IsVoterLateEntryAminoMsg {
  type: string;
  value: TalliedVote_IsVoterLateEntryAmino;
}
export interface TalliedVote_IsVoterLateEntrySDKType {
  key: string;
  value: boolean;
}
/**
 * TalliedVote represents a vote for a poll with the accumulated stake of all
 * validators voting for the same data
 */
export interface TalliedVote {
  tally: Uint8Array;
  data: (Any) | undefined;
  pollId: bigint;
  isVoterLate: {
    [key: string]: boolean;
  };
}
export interface TalliedVoteProtoMsg {
  typeUrl: "/axelar.vote.v1beta1.TalliedVote";
  value: Uint8Array;
}
export type TalliedVoteEncoded = Omit<TalliedVote, "data"> & {
  data?: AnyProtoMsg | undefined;
};
/**
 * TalliedVote represents a vote for a poll with the accumulated stake of all
 * validators voting for the same data
 */
export interface TalliedVoteAmino {
  tally: Uint8Array;
  data?: AnyAmino;
  poll_id: string;
  is_voter_late: {
    [key: string]: boolean;
  };
}
export interface TalliedVoteAminoMsg {
  type: "/axelar.vote.v1beta1.TalliedVote";
  value: TalliedVoteAmino;
}
/**
 * TalliedVote represents a vote for a poll with the accumulated stake of all
 * validators voting for the same data
 */
export interface TalliedVoteSDKType {
  tally: Uint8Array;
  data: AnySDKType | undefined;
  poll_id: bigint;
  is_voter_late: {
    [key: string]: boolean;
  };
}
function createBaseTalliedVote_IsVoterLateEntry(): TalliedVote_IsVoterLateEntry {
  return {
    key: "",
    value: false
  };
}
export const TalliedVote_IsVoterLateEntry = {
  encode(message: TalliedVote_IsVoterLateEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },
  fromJSON(object: any): TalliedVote_IsVoterLateEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Boolean(object.value) : false
    };
  },
  fromPartial(object: Partial<TalliedVote_IsVoterLateEntry>): TalliedVote_IsVoterLateEntry {
    const message = createBaseTalliedVote_IsVoterLateEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? false;
    return message;
  },
  fromAmino(object: TalliedVote_IsVoterLateEntryAmino): TalliedVote_IsVoterLateEntry {
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: TalliedVote_IsVoterLateEntry): TalliedVote_IsVoterLateEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: TalliedVote_IsVoterLateEntryAminoMsg): TalliedVote_IsVoterLateEntry {
    return TalliedVote_IsVoterLateEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: TalliedVote_IsVoterLateEntryProtoMsg): TalliedVote_IsVoterLateEntry {
    return TalliedVote_IsVoterLateEntry.decode(message.value);
  },
  toProto(message: TalliedVote_IsVoterLateEntry): Uint8Array {
    return TalliedVote_IsVoterLateEntry.encode(message).finish();
  }
};
function createBaseTalliedVote(): TalliedVote {
  return {
    tally: new Uint8Array(),
    data: Any.fromPartial({}),
    pollId: BigInt(0),
    isVoterLate: {}
  };
}
export const TalliedVote = {
  typeUrl: "/axelar.vote.v1beta1.TalliedVote",
  encode(message: TalliedVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tally.length !== 0) {
      writer.uint32(10).bytes(message.tally);
    }
    if (message.data !== undefined) {
      Any.encode((message.data as Any), writer.uint32(26).fork()).ldelim();
    }
    if (message.pollId !== BigInt(0)) {
      writer.uint32(32).uint64(message.pollId);
    }
    Object.entries(message.isVoterLate).forEach(([key, value]) => {
      TalliedVote_IsVoterLateEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(40).fork()).ldelim();
    });
    return writer;
  },
  fromJSON(object: any): TalliedVote {
    return {
      tally: isSet(object.tally) ? bytesFromBase64(object.tally) : new Uint8Array(),
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
      pollId: isSet(object.pollId) ? BigInt(object.pollId.toString()) : BigInt(0),
      isVoterLate: isObject(object.isVoterLate) ? Object.entries(object.isVoterLate).reduce<{
        [key: string]: bool;
      }>((acc, [key, value]) => {
        acc[key] = bool.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },
  fromPartial(object: Partial<TalliedVote>): TalliedVote {
    const message = createBaseTalliedVote();
    message.tally = object.tally ?? new Uint8Array();
    message.data = object.data !== undefined && object.data !== null ? Any.fromPartial(object.data) : undefined;
    message.pollId = object.pollId !== undefined && object.pollId !== null ? BigInt(object.pollId.toString()) : BigInt(0);
    message.isVoterLate = Object.entries(object.isVoterLate ?? {}).reduce<{
      [key: string]: bool;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bool.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: TalliedVoteAmino): TalliedVote {
    return {
      tally: object.tally,
      data: object?.data ? Github_com_cosmos_codec_ProtoMarshaler_FromAmino(object.data) : undefined,
      pollId: BigInt(object.poll_id),
      isVoterLate: isObject(object.is_voter_late) ? Object.entries(object.is_voter_late).reduce<{
        [key: string]: bool;
      }>((acc, [key, value]) => {
        acc[key] = bool.fromAmino(value);
        return acc;
      }, {}) : {}
    };
  },
  toAmino(message: TalliedVote): TalliedVoteAmino {
    const obj: any = {};
    obj.tally = message.tally;
    obj.data = message.data ? Github_com_cosmos_codec_ProtoMarshaler_ToAmino((message.data as Any)) : undefined;
    obj.poll_id = message.pollId ? message.pollId.toString() : undefined;
    obj.is_voter_late = {};
    if (message.isVoterLate) {
      Object.entries(message.isVoterLate).forEach(([k, v]) => {
        obj.is_voter_late[k] = bool.toAmino(v);
      });
    }
    return obj;
  },
  fromAminoMsg(object: TalliedVoteAminoMsg): TalliedVote {
    return TalliedVote.fromAmino(object.value);
  },
  fromProtoMsg(message: TalliedVoteProtoMsg): TalliedVote {
    return TalliedVote.decode(message.value);
  },
  toProto(message: TalliedVote): Uint8Array {
    return TalliedVote.encode(message).finish();
  },
  toProtoMsg(message: TalliedVote): TalliedVoteProtoMsg {
    return {
      typeUrl: "/axelar.vote.v1beta1.TalliedVote",
      value: TalliedVote.encode(message).finish()
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