import { Cork, CorkAmino, CorkSDKType } from "./cork";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** MsgSubmitCorkRequest - sdk.Msg for submitting calls to Ethereum through the gravity bridge contract */
export interface MsgSubmitCorkRequest {
  /** the cork to send across the bridge */
  cork: Cork;
  /** signer account address */
  signer: string;
}
export interface MsgSubmitCorkRequestProtoMsg {
  typeUrl: "/cork.v1.MsgSubmitCorkRequest";
  value: Uint8Array;
}
/** MsgSubmitCorkRequest - sdk.Msg for submitting calls to Ethereum through the gravity bridge contract */
export interface MsgSubmitCorkRequestAmino {
  /** the cork to send across the bridge */
  cork?: CorkAmino;
  /** signer account address */
  signer: string;
}
export interface MsgSubmitCorkRequestAminoMsg {
  type: "/cork.v1.MsgSubmitCorkRequest";
  value: MsgSubmitCorkRequestAmino;
}
/** MsgSubmitCorkRequest - sdk.Msg for submitting calls to Ethereum through the gravity bridge contract */
export interface MsgSubmitCorkRequestSDKType {
  cork: CorkSDKType;
  signer: string;
}
export interface MsgSubmitCorkResponse {}
export interface MsgSubmitCorkResponseProtoMsg {
  typeUrl: "/cork.v1.MsgSubmitCorkResponse";
  value: Uint8Array;
}
export interface MsgSubmitCorkResponseAmino {}
export interface MsgSubmitCorkResponseAminoMsg {
  type: "/cork.v1.MsgSubmitCorkResponse";
  value: MsgSubmitCorkResponseAmino;
}
export interface MsgSubmitCorkResponseSDKType {}
/** MsgScheduleCorkRequest - sdk.Msg for scheduling a cork request for on or after a specific block height */
export interface MsgScheduleCorkRequest {
  /** the scheduled cork */
  cork: Cork;
  /** the block height that must be reached */
  blockHeight: bigint;
  /** signer account address */
  signer: string;
}
export interface MsgScheduleCorkRequestProtoMsg {
  typeUrl: "/cork.v1.MsgScheduleCorkRequest";
  value: Uint8Array;
}
/** MsgScheduleCorkRequest - sdk.Msg for scheduling a cork request for on or after a specific block height */
export interface MsgScheduleCorkRequestAmino {
  /** the scheduled cork */
  cork?: CorkAmino;
  /** the block height that must be reached */
  block_height: string;
  /** signer account address */
  signer: string;
}
export interface MsgScheduleCorkRequestAminoMsg {
  type: "/cork.v1.MsgScheduleCorkRequest";
  value: MsgScheduleCorkRequestAmino;
}
/** MsgScheduleCorkRequest - sdk.Msg for scheduling a cork request for on or after a specific block height */
export interface MsgScheduleCorkRequestSDKType {
  cork: CorkSDKType;
  block_height: bigint;
  signer: string;
}
export interface MsgScheduleCorkResponse {}
export interface MsgScheduleCorkResponseProtoMsg {
  typeUrl: "/cork.v1.MsgScheduleCorkResponse";
  value: Uint8Array;
}
export interface MsgScheduleCorkResponseAmino {}
export interface MsgScheduleCorkResponseAminoMsg {
  type: "/cork.v1.MsgScheduleCorkResponse";
  value: MsgScheduleCorkResponseAmino;
}
export interface MsgScheduleCorkResponseSDKType {}
function createBaseMsgSubmitCorkRequest(): MsgSubmitCorkRequest {
  return {
    cork: Cork.fromPartial({}),
    signer: ""
  };
}
export const MsgSubmitCorkRequest = {
  typeUrl: "/cork.v1.MsgSubmitCorkRequest",
  encode(message: MsgSubmitCorkRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cork !== undefined) {
      Cork.encode(message.cork, writer.uint32(10).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }
    return writer;
  },
  fromJSON(object: any): MsgSubmitCorkRequest {
    return {
      cork: isSet(object.cork) ? Cork.fromJSON(object.cork) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  fromPartial(object: Partial<MsgSubmitCorkRequest>): MsgSubmitCorkRequest {
    const message = createBaseMsgSubmitCorkRequest();
    message.cork = object.cork !== undefined && object.cork !== null ? Cork.fromPartial(object.cork) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitCorkRequestAmino): MsgSubmitCorkRequest {
    return {
      cork: object?.cork ? Cork.fromAmino(object.cork) : undefined,
      signer: object.signer
    };
  },
  toAmino(message: MsgSubmitCorkRequest): MsgSubmitCorkRequestAmino {
    const obj: any = {};
    obj.cork = message.cork ? Cork.toAmino(message.cork) : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitCorkRequestAminoMsg): MsgSubmitCorkRequest {
    return MsgSubmitCorkRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitCorkRequestProtoMsg): MsgSubmitCorkRequest {
    return MsgSubmitCorkRequest.decode(message.value);
  },
  toProto(message: MsgSubmitCorkRequest): Uint8Array {
    return MsgSubmitCorkRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitCorkRequest): MsgSubmitCorkRequestProtoMsg {
    return {
      typeUrl: "/cork.v1.MsgSubmitCorkRequest",
      value: MsgSubmitCorkRequest.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitCorkResponse(): MsgSubmitCorkResponse {
  return {};
}
export const MsgSubmitCorkResponse = {
  typeUrl: "/cork.v1.MsgSubmitCorkResponse",
  encode(_: MsgSubmitCorkResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSubmitCorkResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSubmitCorkResponse>): MsgSubmitCorkResponse {
    const message = createBaseMsgSubmitCorkResponse();
    return message;
  },
  fromAmino(_: MsgSubmitCorkResponseAmino): MsgSubmitCorkResponse {
    return {};
  },
  toAmino(_: MsgSubmitCorkResponse): MsgSubmitCorkResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitCorkResponseAminoMsg): MsgSubmitCorkResponse {
    return MsgSubmitCorkResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitCorkResponseProtoMsg): MsgSubmitCorkResponse {
    return MsgSubmitCorkResponse.decode(message.value);
  },
  toProto(message: MsgSubmitCorkResponse): Uint8Array {
    return MsgSubmitCorkResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitCorkResponse): MsgSubmitCorkResponseProtoMsg {
    return {
      typeUrl: "/cork.v1.MsgSubmitCorkResponse",
      value: MsgSubmitCorkResponse.encode(message).finish()
    };
  }
};
function createBaseMsgScheduleCorkRequest(): MsgScheduleCorkRequest {
  return {
    cork: Cork.fromPartial({}),
    blockHeight: BigInt(0),
    signer: ""
  };
}
export const MsgScheduleCorkRequest = {
  typeUrl: "/cork.v1.MsgScheduleCorkRequest",
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
    return {
      cork: object?.cork ? Cork.fromAmino(object.cork) : undefined,
      blockHeight: BigInt(object.block_height),
      signer: object.signer
    };
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
      typeUrl: "/cork.v1.MsgScheduleCorkRequest",
      value: MsgScheduleCorkRequest.encode(message).finish()
    };
  }
};
function createBaseMsgScheduleCorkResponse(): MsgScheduleCorkResponse {
  return {};
}
export const MsgScheduleCorkResponse = {
  typeUrl: "/cork.v1.MsgScheduleCorkResponse",
  encode(_: MsgScheduleCorkResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgScheduleCorkResponse {
    return {};
  },
  fromPartial(_: Partial<MsgScheduleCorkResponse>): MsgScheduleCorkResponse {
    const message = createBaseMsgScheduleCorkResponse();
    return message;
  },
  fromAmino(_: MsgScheduleCorkResponseAmino): MsgScheduleCorkResponse {
    return {};
  },
  toAmino(_: MsgScheduleCorkResponse): MsgScheduleCorkResponseAmino {
    const obj: any = {};
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
      typeUrl: "/cork.v1.MsgScheduleCorkResponse",
      value: MsgScheduleCorkResponse.encode(message).finish()
    };
  }
};