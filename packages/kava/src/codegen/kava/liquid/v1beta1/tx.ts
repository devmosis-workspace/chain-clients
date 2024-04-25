import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/** MsgMintDerivative defines the Msg/MintDerivative request type. */
export interface MsgMintDerivative {
  /** sender is the owner of the delegation to be converted */
  sender: string;
  /** validator is the validator of the delegation to be converted */
  validator: string;
  /** amount is the quantity of staked assets to be converted */
  amount: Coin;
}
export interface MsgMintDerivativeProtoMsg {
  typeUrl: "/kava.liquid.v1beta1.MsgMintDerivative";
  value: Uint8Array;
}
/** MsgMintDerivative defines the Msg/MintDerivative request type. */
export interface MsgMintDerivativeAmino {
  /** sender is the owner of the delegation to be converted */
  sender?: string;
  /** validator is the validator of the delegation to be converted */
  validator?: string;
  /** amount is the quantity of staked assets to be converted */
  amount?: CoinAmino;
}
export interface MsgMintDerivativeAminoMsg {
  type: "/kava.liquid.v1beta1.MsgMintDerivative";
  value: MsgMintDerivativeAmino;
}
/** MsgMintDerivative defines the Msg/MintDerivative request type. */
export interface MsgMintDerivativeSDKType {
  sender: string;
  validator: string;
  amount: CoinSDKType;
}
/** MsgMintDerivativeResponse defines the Msg/MintDerivative response type. */
export interface MsgMintDerivativeResponse {
  /** received is the amount of staking derivative minted and sent to the sender */
  received: Coin;
}
export interface MsgMintDerivativeResponseProtoMsg {
  typeUrl: "/kava.liquid.v1beta1.MsgMintDerivativeResponse";
  value: Uint8Array;
}
/** MsgMintDerivativeResponse defines the Msg/MintDerivative response type. */
export interface MsgMintDerivativeResponseAmino {
  /** received is the amount of staking derivative minted and sent to the sender */
  received?: CoinAmino;
}
export interface MsgMintDerivativeResponseAminoMsg {
  type: "/kava.liquid.v1beta1.MsgMintDerivativeResponse";
  value: MsgMintDerivativeResponseAmino;
}
/** MsgMintDerivativeResponse defines the Msg/MintDerivative response type. */
export interface MsgMintDerivativeResponseSDKType {
  received: CoinSDKType;
}
/** MsgBurnDerivative defines the Msg/BurnDerivative request type. */
export interface MsgBurnDerivative {
  /** sender is the owner of the derivatives to be converted */
  sender: string;
  /** validator is the validator of the derivatives to be converted */
  validator: string;
  /** amount is the quantity of derivatives to be converted */
  amount: Coin;
}
export interface MsgBurnDerivativeProtoMsg {
  typeUrl: "/kava.liquid.v1beta1.MsgBurnDerivative";
  value: Uint8Array;
}
/** MsgBurnDerivative defines the Msg/BurnDerivative request type. */
export interface MsgBurnDerivativeAmino {
  /** sender is the owner of the derivatives to be converted */
  sender?: string;
  /** validator is the validator of the derivatives to be converted */
  validator?: string;
  /** amount is the quantity of derivatives to be converted */
  amount?: CoinAmino;
}
export interface MsgBurnDerivativeAminoMsg {
  type: "/kava.liquid.v1beta1.MsgBurnDerivative";
  value: MsgBurnDerivativeAmino;
}
/** MsgBurnDerivative defines the Msg/BurnDerivative request type. */
export interface MsgBurnDerivativeSDKType {
  sender: string;
  validator: string;
  amount: CoinSDKType;
}
/** MsgBurnDerivativeResponse defines the Msg/BurnDerivative response type. */
export interface MsgBurnDerivativeResponse {
  /** received is the number of delegation shares sent to the sender */
  received: string;
}
export interface MsgBurnDerivativeResponseProtoMsg {
  typeUrl: "/kava.liquid.v1beta1.MsgBurnDerivativeResponse";
  value: Uint8Array;
}
/** MsgBurnDerivativeResponse defines the Msg/BurnDerivative response type. */
export interface MsgBurnDerivativeResponseAmino {
  /** received is the number of delegation shares sent to the sender */
  received?: string;
}
export interface MsgBurnDerivativeResponseAminoMsg {
  type: "/kava.liquid.v1beta1.MsgBurnDerivativeResponse";
  value: MsgBurnDerivativeResponseAmino;
}
/** MsgBurnDerivativeResponse defines the Msg/BurnDerivative response type. */
export interface MsgBurnDerivativeResponseSDKType {
  received: string;
}
function createBaseMsgMintDerivative(): MsgMintDerivative {
  return {
    sender: "",
    validator: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgMintDerivative = {
  typeUrl: "/kava.liquid.v1beta1.MsgMintDerivative",
  encode(message: MsgMintDerivative, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgMintDerivative {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<MsgMintDerivative>): MsgMintDerivative {
    const message = createBaseMsgMintDerivative();
    message.sender = object.sender ?? "";
    message.validator = object.validator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgMintDerivativeAmino): MsgMintDerivative {
    const message = createBaseMsgMintDerivative();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgMintDerivative): MsgMintDerivativeAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.validator = message.validator;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMintDerivativeAminoMsg): MsgMintDerivative {
    return MsgMintDerivative.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintDerivativeProtoMsg): MsgMintDerivative {
    return MsgMintDerivative.decode(message.value);
  },
  toProto(message: MsgMintDerivative): Uint8Array {
    return MsgMintDerivative.encode(message).finish();
  },
  toProtoMsg(message: MsgMintDerivative): MsgMintDerivativeProtoMsg {
    return {
      typeUrl: "/kava.liquid.v1beta1.MsgMintDerivative",
      value: MsgMintDerivative.encode(message).finish()
    };
  }
};
function createBaseMsgMintDerivativeResponse(): MsgMintDerivativeResponse {
  return {
    received: Coin.fromPartial({})
  };
}
export const MsgMintDerivativeResponse = {
  typeUrl: "/kava.liquid.v1beta1.MsgMintDerivativeResponse",
  encode(message: MsgMintDerivativeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.received !== undefined) {
      Coin.encode(message.received, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgMintDerivativeResponse {
    return {
      received: isSet(object.received) ? Coin.fromJSON(object.received) : undefined
    };
  },
  fromPartial(object: Partial<MsgMintDerivativeResponse>): MsgMintDerivativeResponse {
    const message = createBaseMsgMintDerivativeResponse();
    message.received = object.received !== undefined && object.received !== null ? Coin.fromPartial(object.received) : undefined;
    return message;
  },
  fromAmino(object: MsgMintDerivativeResponseAmino): MsgMintDerivativeResponse {
    const message = createBaseMsgMintDerivativeResponse();
    if (object.received !== undefined && object.received !== null) {
      message.received = Coin.fromAmino(object.received);
    }
    return message;
  },
  toAmino(message: MsgMintDerivativeResponse): MsgMintDerivativeResponseAmino {
    const obj: any = {};
    obj.received = message.received ? Coin.toAmino(message.received) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMintDerivativeResponseAminoMsg): MsgMintDerivativeResponse {
    return MsgMintDerivativeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintDerivativeResponseProtoMsg): MsgMintDerivativeResponse {
    return MsgMintDerivativeResponse.decode(message.value);
  },
  toProto(message: MsgMintDerivativeResponse): Uint8Array {
    return MsgMintDerivativeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintDerivativeResponse): MsgMintDerivativeResponseProtoMsg {
    return {
      typeUrl: "/kava.liquid.v1beta1.MsgMintDerivativeResponse",
      value: MsgMintDerivativeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBurnDerivative(): MsgBurnDerivative {
  return {
    sender: "",
    validator: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgBurnDerivative = {
  typeUrl: "/kava.liquid.v1beta1.MsgBurnDerivative",
  encode(message: MsgBurnDerivative, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgBurnDerivative {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<MsgBurnDerivative>): MsgBurnDerivative {
    const message = createBaseMsgBurnDerivative();
    message.sender = object.sender ?? "";
    message.validator = object.validator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgBurnDerivativeAmino): MsgBurnDerivative {
    const message = createBaseMsgBurnDerivative();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgBurnDerivative): MsgBurnDerivativeAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.validator = message.validator;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBurnDerivativeAminoMsg): MsgBurnDerivative {
    return MsgBurnDerivative.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnDerivativeProtoMsg): MsgBurnDerivative {
    return MsgBurnDerivative.decode(message.value);
  },
  toProto(message: MsgBurnDerivative): Uint8Array {
    return MsgBurnDerivative.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnDerivative): MsgBurnDerivativeProtoMsg {
    return {
      typeUrl: "/kava.liquid.v1beta1.MsgBurnDerivative",
      value: MsgBurnDerivative.encode(message).finish()
    };
  }
};
function createBaseMsgBurnDerivativeResponse(): MsgBurnDerivativeResponse {
  return {
    received: ""
  };
}
export const MsgBurnDerivativeResponse = {
  typeUrl: "/kava.liquid.v1beta1.MsgBurnDerivativeResponse",
  encode(message: MsgBurnDerivativeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.received !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.received, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): MsgBurnDerivativeResponse {
    return {
      received: isSet(object.received) ? String(object.received) : ""
    };
  },
  fromPartial(object: Partial<MsgBurnDerivativeResponse>): MsgBurnDerivativeResponse {
    const message = createBaseMsgBurnDerivativeResponse();
    message.received = object.received ?? "";
    return message;
  },
  fromAmino(object: MsgBurnDerivativeResponseAmino): MsgBurnDerivativeResponse {
    const message = createBaseMsgBurnDerivativeResponse();
    if (object.received !== undefined && object.received !== null) {
      message.received = object.received;
    }
    return message;
  },
  toAmino(message: MsgBurnDerivativeResponse): MsgBurnDerivativeResponseAmino {
    const obj: any = {};
    obj.received = message.received;
    return obj;
  },
  fromAminoMsg(object: MsgBurnDerivativeResponseAminoMsg): MsgBurnDerivativeResponse {
    return MsgBurnDerivativeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnDerivativeResponseProtoMsg): MsgBurnDerivativeResponse {
    return MsgBurnDerivativeResponse.decode(message.value);
  },
  toProto(message: MsgBurnDerivativeResponse): Uint8Array {
    return MsgBurnDerivativeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnDerivativeResponse): MsgBurnDerivativeResponseProtoMsg {
    return {
      typeUrl: "/kava.liquid.v1beta1.MsgBurnDerivativeResponse",
      value: MsgBurnDerivativeResponse.encode(message).finish()
    };
  }
};