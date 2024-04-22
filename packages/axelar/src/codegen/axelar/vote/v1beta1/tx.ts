import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface VoteRequest {
  sender: Uint8Array;
  pollId: bigint;
  vote?: (Any) | undefined;
}
export interface VoteRequestProtoMsg {
  typeUrl: "/axelar.vote.v1beta1.VoteRequest";
  value: Uint8Array;
}
export type VoteRequestEncoded = Omit<VoteRequest, "vote"> & {
  vote?: AnyProtoMsg | undefined;
};
export interface VoteRequestAmino {
  sender?: string;
  poll_id?: string;
  vote?: AnyAmino;
}
export interface VoteRequestAminoMsg {
  type: "/axelar.vote.v1beta1.VoteRequest";
  value: VoteRequestAmino;
}
export interface VoteRequestSDKType {
  sender: Uint8Array;
  poll_id: bigint;
  vote?: AnySDKType | undefined;
}
export interface VoteResponse {
  log: string;
}
export interface VoteResponseProtoMsg {
  typeUrl: "/axelar.vote.v1beta1.VoteResponse";
  value: Uint8Array;
}
export interface VoteResponseAmino {
  log?: string;
}
export interface VoteResponseAminoMsg {
  type: "/axelar.vote.v1beta1.VoteResponse";
  value: VoteResponseAmino;
}
export interface VoteResponseSDKType {
  log: string;
}
function createBaseVoteRequest(): VoteRequest {
  return {
    sender: new Uint8Array(),
    pollId: BigInt(0),
    vote: undefined
  };
}
export const VoteRequest = {
  typeUrl: "/axelar.vote.v1beta1.VoteRequest",
  encode(message: VoteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.pollId !== BigInt(0)) {
      writer.uint32(32).uint64(message.pollId);
    }
    if (message.vote !== undefined) {
      Any.encode((message.vote as Any), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): VoteRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      pollId: isSet(object.pollId) ? BigInt(object.pollId.toString()) : BigInt(0),
      vote: isSet(object.vote) ? Any.fromJSON(object.vote) : undefined
    };
  },
  fromPartial(object: Partial<VoteRequest>): VoteRequest {
    const message = createBaseVoteRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.pollId = object.pollId !== undefined && object.pollId !== null ? BigInt(object.pollId.toString()) : BigInt(0);
    message.vote = object.vote !== undefined && object.vote !== null ? Any.fromPartial(object.vote) : undefined;
    return message;
  },
  fromAmino(object: VoteRequestAmino): VoteRequest {
    const message = createBaseVoteRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    if (object.poll_id !== undefined && object.poll_id !== null) {
      message.pollId = BigInt(object.poll_id);
    }
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Github_com_cosmos_codec_ProtoMarshaler_FromAmino(object.vote);
    }
    return message;
  },
  toAmino(message: VoteRequest): VoteRequestAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    obj.poll_id = message.pollId ? message.pollId.toString() : undefined;
    obj.vote = message.vote ? Github_com_cosmos_codec_ProtoMarshaler_ToAmino((message.vote as Any)) : undefined;
    return obj;
  },
  fromAminoMsg(object: VoteRequestAminoMsg): VoteRequest {
    return VoteRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: VoteRequestProtoMsg): VoteRequest {
    return VoteRequest.decode(message.value);
  },
  toProto(message: VoteRequest): Uint8Array {
    return VoteRequest.encode(message).finish();
  },
  toProtoMsg(message: VoteRequest): VoteRequestProtoMsg {
    return {
      typeUrl: "/axelar.vote.v1beta1.VoteRequest",
      value: VoteRequest.encode(message).finish()
    };
  }
};
function createBaseVoteResponse(): VoteResponse {
  return {
    log: ""
  };
}
export const VoteResponse = {
  typeUrl: "/axelar.vote.v1beta1.VoteResponse",
  encode(message: VoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.log !== "") {
      writer.uint32(10).string(message.log);
    }
    return writer;
  },
  fromJSON(object: any): VoteResponse {
    return {
      log: isSet(object.log) ? String(object.log) : ""
    };
  },
  fromPartial(object: Partial<VoteResponse>): VoteResponse {
    const message = createBaseVoteResponse();
    message.log = object.log ?? "";
    return message;
  },
  fromAmino(object: VoteResponseAmino): VoteResponse {
    const message = createBaseVoteResponse();
    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    }
    return message;
  },
  toAmino(message: VoteResponse): VoteResponseAmino {
    const obj: any = {};
    obj.log = message.log;
    return obj;
  },
  fromAminoMsg(object: VoteResponseAminoMsg): VoteResponse {
    return VoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: VoteResponseProtoMsg): VoteResponse {
    return VoteResponse.decode(message.value);
  },
  toProto(message: VoteResponse): Uint8Array {
    return VoteResponse.encode(message).finish();
  },
  toProtoMsg(message: VoteResponse): VoteResponseProtoMsg {
    return {
      typeUrl: "/axelar.vote.v1beta1.VoteResponse",
      value: VoteResponse.encode(message).finish()
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