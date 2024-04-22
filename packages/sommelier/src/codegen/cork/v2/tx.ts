import { Cork, CorkAmino, CorkSDKType } from "./cork";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** MsgScheduleCorkRequest - sdk.Msg for scheduling a cork request for on or after a specific block height */
export interface MsgScheduleCorkRequest {
  /** the scheduled cork */
  cork?: Cork;
  /** the block height that must be reached */
  blockHeight: bigint;
  /** signer account address */
  signer: string;
}
export interface MsgScheduleCorkRequestProtoMsg {
  typeUrl: "/cork.v2.MsgScheduleCorkRequest";
  value: Uint8Array;
}
/** MsgScheduleCorkRequest - sdk.Msg for scheduling a cork request for on or after a specific block height */
export interface MsgScheduleCorkRequestAmino {
  /** the scheduled cork */
  cork?: CorkAmino;
  /** the block height that must be reached */
  block_height?: string;
  /** signer account address */
  signer?: string;
}
export interface MsgScheduleCorkRequestAminoMsg {
  type: "/cork.v2.MsgScheduleCorkRequest";
  value: MsgScheduleCorkRequestAmino;
}
/** MsgScheduleCorkRequest - sdk.Msg for scheduling a cork request for on or after a specific block height */
export interface MsgScheduleCorkRequestSDKType {
  cork?: CorkSDKType;
  block_height: bigint;
  signer: string;
}
export interface MsgScheduleCorkResponse {
  /** cork ID */
  id: string;
}
export interface MsgScheduleCorkResponseProtoMsg {
  typeUrl: "/cork.v2.MsgScheduleCorkResponse";
  value: Uint8Array;
}
export interface MsgScheduleCorkResponseAmino {
  /** cork ID */
  id?: string;
}
export interface MsgScheduleCorkResponseAminoMsg {
  type: "/cork.v2.MsgScheduleCorkResponse";
  value: MsgScheduleCorkResponseAmino;
}
export interface MsgScheduleCorkResponseSDKType {
  id: string;
}
function createBaseMsgScheduleCorkRequest(): MsgScheduleCorkRequest {
  return {
    cork: undefined,
    blockHeight: BigInt(0),
    signer: ""
  };
}
export const MsgScheduleCorkRequest = {
  typeUrl: "/cork.v2.MsgScheduleCorkRequest",
  encode(message: MsgScheduleCorkRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cork !== undefined) {
      Cork.encode(message.cork, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  fromJSON(object: any): MsgScheduleCorkRequest {
    return {
      cork: isSet(object.cork) ? Cork.fromJSON(object.cork) : undefined,
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  fromPartial(object: Partial<MsgScheduleCorkRequest>): MsgScheduleCorkRequest {
    const message = createBaseMsgScheduleCorkRequest();
    message.cork = object.cork !== undefined && object.cork !== null ? Cork.fromPartial(object.cork) : undefined;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgScheduleCorkRequestAmino): MsgScheduleCorkRequest {
    const message = createBaseMsgScheduleCorkRequest();
    if (object.cork !== undefined && object.cork !== null) {
      message.cork = Cork.fromAmino(object.cork);
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgScheduleCorkRequest): MsgScheduleCorkRequestAmino {
    const obj: any = {};
    obj.cork = message.cork ? Cork.toAmino(message.cork) : undefined;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgScheduleCorkRequestAminoMsg): MsgScheduleCorkRequest {
    return MsgScheduleCorkRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgScheduleCorkRequestProtoMsg): MsgScheduleCorkRequest {
    return MsgScheduleCorkRequest.decode(message.value);
  },
  toProto(message: MsgScheduleCorkRequest): Uint8Array {
    return MsgScheduleCorkRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgScheduleCorkRequest): MsgScheduleCorkRequestProtoMsg {
    return {
      typeUrl: "/cork.v2.MsgScheduleCorkRequest",
      value: MsgScheduleCorkRequest.encode(message).finish()
    };
  }
};
function createBaseMsgScheduleCorkResponse(): MsgScheduleCorkResponse {
  return {
    id: ""
  };
}
export const MsgScheduleCorkResponse = {
  typeUrl: "/cork.v2.MsgScheduleCorkResponse",
  encode(message: MsgScheduleCorkResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgScheduleCorkResponse {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<MsgScheduleCorkResponse>): MsgScheduleCorkResponse {
    const message = createBaseMsgScheduleCorkResponse();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgScheduleCorkResponseAmino): MsgScheduleCorkResponse {
    const message = createBaseMsgScheduleCorkResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MsgScheduleCorkResponse): MsgScheduleCorkResponseAmino {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: MsgScheduleCorkResponseAminoMsg): MsgScheduleCorkResponse {
    return MsgScheduleCorkResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgScheduleCorkResponseProtoMsg): MsgScheduleCorkResponse {
    return MsgScheduleCorkResponse.decode(message.value);
  },
  toProto(message: MsgScheduleCorkResponse): Uint8Array {
    return MsgScheduleCorkResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgScheduleCorkResponse): MsgScheduleCorkResponseProtoMsg {
    return {
      typeUrl: "/cork.v2.MsgScheduleCorkResponse",
      value: MsgScheduleCorkResponse.encode(message).finish()
    };
  }
};