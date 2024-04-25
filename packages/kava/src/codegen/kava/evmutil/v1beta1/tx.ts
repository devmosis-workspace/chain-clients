import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgConvertCoinToERC20 defines a conversion from sdk.Coin to Kava ERC20 for EVM-native assets. */
export interface MsgConvertCoinToERC20 {
  /** Kava bech32 address initiating the conversion. */
  initiator: string;
  /** EVM 0x hex address that will receive the converted Kava ERC20 tokens. */
  receiver: string;
  /** Amount is the sdk.Coin amount to convert. */
  amount?: Coin;
}
export interface MsgConvertCoinToERC20ProtoMsg {
  typeUrl: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20";
  value: Uint8Array;
}
/** MsgConvertCoinToERC20 defines a conversion from sdk.Coin to Kava ERC20 for EVM-native assets. */
export interface MsgConvertCoinToERC20Amino {
  /** Kava bech32 address initiating the conversion. */
  initiator?: string;
  /** EVM 0x hex address that will receive the converted Kava ERC20 tokens. */
  receiver?: string;
  /** Amount is the sdk.Coin amount to convert. */
  amount?: CoinAmino;
}
export interface MsgConvertCoinToERC20AminoMsg {
  type: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20";
  value: MsgConvertCoinToERC20Amino;
}
/** MsgConvertCoinToERC20 defines a conversion from sdk.Coin to Kava ERC20 for EVM-native assets. */
export interface MsgConvertCoinToERC20SDKType {
  initiator: string;
  receiver: string;
  amount?: CoinSDKType;
}
/** MsgConvertCoinToERC20Response defines the response value from Msg/ConvertCoinToERC20. */
export interface MsgConvertCoinToERC20Response {}
export interface MsgConvertCoinToERC20ResponseProtoMsg {
  typeUrl: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20Response";
  value: Uint8Array;
}
/** MsgConvertCoinToERC20Response defines the response value from Msg/ConvertCoinToERC20. */
export interface MsgConvertCoinToERC20ResponseAmino {}
export interface MsgConvertCoinToERC20ResponseAminoMsg {
  type: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20Response";
  value: MsgConvertCoinToERC20ResponseAmino;
}
/** MsgConvertCoinToERC20Response defines the response value from Msg/ConvertCoinToERC20. */
export interface MsgConvertCoinToERC20ResponseSDKType {}
/** MsgConvertERC20ToCoin defines a conversion from Kava ERC20 to sdk.Coin for EVM-native assets. */
export interface MsgConvertERC20ToCoin {
  /** EVM 0x hex address initiating the conversion. */
  initiator: string;
  /** Kava bech32 address that will receive the converted sdk.Coin. */
  receiver: string;
  /** EVM 0x hex address of the ERC20 contract. */
  kavaErc20Address: string;
  /** ERC20 token amount to convert. */
  amount: string;
}
export interface MsgConvertERC20ToCoinProtoMsg {
  typeUrl: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin";
  value: Uint8Array;
}
/** MsgConvertERC20ToCoin defines a conversion from Kava ERC20 to sdk.Coin for EVM-native assets. */
export interface MsgConvertERC20ToCoinAmino {
  /** EVM 0x hex address initiating the conversion. */
  initiator?: string;
  /** Kava bech32 address that will receive the converted sdk.Coin. */
  receiver?: string;
  /** EVM 0x hex address of the ERC20 contract. */
  kava_erc20_address?: string;
  /** ERC20 token amount to convert. */
  amount?: string;
}
export interface MsgConvertERC20ToCoinAminoMsg {
  type: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin";
  value: MsgConvertERC20ToCoinAmino;
}
/** MsgConvertERC20ToCoin defines a conversion from Kava ERC20 to sdk.Coin for EVM-native assets. */
export interface MsgConvertERC20ToCoinSDKType {
  initiator: string;
  receiver: string;
  kava_erc20_address: string;
  amount: string;
}
/**
 * MsgConvertERC20ToCoinResponse defines the response value from
 * Msg/MsgConvertERC20ToCoin.
 */
export interface MsgConvertERC20ToCoinResponse {}
export interface MsgConvertERC20ToCoinResponseProtoMsg {
  typeUrl: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoinResponse";
  value: Uint8Array;
}
/**
 * MsgConvertERC20ToCoinResponse defines the response value from
 * Msg/MsgConvertERC20ToCoin.
 */
export interface MsgConvertERC20ToCoinResponseAmino {}
export interface MsgConvertERC20ToCoinResponseAminoMsg {
  type: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoinResponse";
  value: MsgConvertERC20ToCoinResponseAmino;
}
/**
 * MsgConvertERC20ToCoinResponse defines the response value from
 * Msg/MsgConvertERC20ToCoin.
 */
export interface MsgConvertERC20ToCoinResponseSDKType {}
/** MsgConvertCosmosCoinToERC20 defines a conversion from cosmos sdk.Coin to ERC20 for cosmos-native assets. */
export interface MsgConvertCosmosCoinToERC20 {
  /** Kava bech32 address initiating the conversion. */
  initiator: string;
  /** EVM hex address that will receive the ERC20 tokens. */
  receiver: string;
  /** Amount is the sdk.Coin amount to convert. */
  amount?: Coin;
}
export interface MsgConvertCosmosCoinToERC20ProtoMsg {
  typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20";
  value: Uint8Array;
}
/** MsgConvertCosmosCoinToERC20 defines a conversion from cosmos sdk.Coin to ERC20 for cosmos-native assets. */
export interface MsgConvertCosmosCoinToERC20Amino {
  /** Kava bech32 address initiating the conversion. */
  initiator?: string;
  /** EVM hex address that will receive the ERC20 tokens. */
  receiver?: string;
  /** Amount is the sdk.Coin amount to convert. */
  amount?: CoinAmino;
}
export interface MsgConvertCosmosCoinToERC20AminoMsg {
  type: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20";
  value: MsgConvertCosmosCoinToERC20Amino;
}
/** MsgConvertCosmosCoinToERC20 defines a conversion from cosmos sdk.Coin to ERC20 for cosmos-native assets. */
export interface MsgConvertCosmosCoinToERC20SDKType {
  initiator: string;
  receiver: string;
  amount?: CoinSDKType;
}
/** MsgConvertCosmosCoinToERC20Response defines the response value from Msg/MsgConvertCosmosCoinToERC20. */
export interface MsgConvertCosmosCoinToERC20Response {}
export interface MsgConvertCosmosCoinToERC20ResponseProtoMsg {
  typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20Response";
  value: Uint8Array;
}
/** MsgConvertCosmosCoinToERC20Response defines the response value from Msg/MsgConvertCosmosCoinToERC20. */
export interface MsgConvertCosmosCoinToERC20ResponseAmino {}
export interface MsgConvertCosmosCoinToERC20ResponseAminoMsg {
  type: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20Response";
  value: MsgConvertCosmosCoinToERC20ResponseAmino;
}
/** MsgConvertCosmosCoinToERC20Response defines the response value from Msg/MsgConvertCosmosCoinToERC20. */
export interface MsgConvertCosmosCoinToERC20ResponseSDKType {}
/** MsgConvertCosmosCoinFromERC20 defines a conversion from ERC20 to cosmos coins for cosmos-native assets. */
export interface MsgConvertCosmosCoinFromERC20 {
  /** EVM hex address initiating the conversion. */
  initiator: string;
  /** Kava bech32 address that will receive the cosmos coins. */
  receiver: string;
  /** Amount is the amount to convert, expressed as a Cosmos coin. */
  amount?: Coin;
}
export interface MsgConvertCosmosCoinFromERC20ProtoMsg {
  typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20";
  value: Uint8Array;
}
/** MsgConvertCosmosCoinFromERC20 defines a conversion from ERC20 to cosmos coins for cosmos-native assets. */
export interface MsgConvertCosmosCoinFromERC20Amino {
  /** EVM hex address initiating the conversion. */
  initiator?: string;
  /** Kava bech32 address that will receive the cosmos coins. */
  receiver?: string;
  /** Amount is the amount to convert, expressed as a Cosmos coin. */
  amount?: CoinAmino;
}
export interface MsgConvertCosmosCoinFromERC20AminoMsg {
  type: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20";
  value: MsgConvertCosmosCoinFromERC20Amino;
}
/** MsgConvertCosmosCoinFromERC20 defines a conversion from ERC20 to cosmos coins for cosmos-native assets. */
export interface MsgConvertCosmosCoinFromERC20SDKType {
  initiator: string;
  receiver: string;
  amount?: CoinSDKType;
}
/** MsgConvertCosmosCoinFromERC20Response defines the response value from Msg/MsgConvertCosmosCoinFromERC20. */
export interface MsgConvertCosmosCoinFromERC20Response {}
export interface MsgConvertCosmosCoinFromERC20ResponseProtoMsg {
  typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20Response";
  value: Uint8Array;
}
/** MsgConvertCosmosCoinFromERC20Response defines the response value from Msg/MsgConvertCosmosCoinFromERC20. */
export interface MsgConvertCosmosCoinFromERC20ResponseAmino {}
export interface MsgConvertCosmosCoinFromERC20ResponseAminoMsg {
  type: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20Response";
  value: MsgConvertCosmosCoinFromERC20ResponseAmino;
}
/** MsgConvertCosmosCoinFromERC20Response defines the response value from Msg/MsgConvertCosmosCoinFromERC20. */
export interface MsgConvertCosmosCoinFromERC20ResponseSDKType {}
function createBaseMsgConvertCoinToERC20(): MsgConvertCoinToERC20 {
  return {
    initiator: "",
    receiver: "",
    amount: undefined
  };
}
export const MsgConvertCoinToERC20 = {
  typeUrl: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20",
  encode(message: MsgConvertCoinToERC20, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.initiator !== "") {
      writer.uint32(10).string(message.initiator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgConvertCoinToERC20 {
    return {
      initiator: isSet(object.initiator) ? String(object.initiator) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<MsgConvertCoinToERC20>): MsgConvertCoinToERC20 {
    const message = createBaseMsgConvertCoinToERC20();
    message.initiator = object.initiator ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgConvertCoinToERC20Amino): MsgConvertCoinToERC20 {
    const message = createBaseMsgConvertCoinToERC20();
    if (object.initiator !== undefined && object.initiator !== null) {
      message.initiator = object.initiator;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgConvertCoinToERC20): MsgConvertCoinToERC20Amino {
    const obj: any = {};
    obj.initiator = message.initiator;
    obj.receiver = message.receiver;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgConvertCoinToERC20AminoMsg): MsgConvertCoinToERC20 {
    return MsgConvertCoinToERC20.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConvertCoinToERC20ProtoMsg): MsgConvertCoinToERC20 {
    return MsgConvertCoinToERC20.decode(message.value);
  },
  toProto(message: MsgConvertCoinToERC20): Uint8Array {
    return MsgConvertCoinToERC20.encode(message).finish();
  },
  toProtoMsg(message: MsgConvertCoinToERC20): MsgConvertCoinToERC20ProtoMsg {
    return {
      typeUrl: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20",
      value: MsgConvertCoinToERC20.encode(message).finish()
    };
  }
};
function createBaseMsgConvertCoinToERC20Response(): MsgConvertCoinToERC20Response {
  return {};
}
export const MsgConvertCoinToERC20Response = {
  typeUrl: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20Response",
  encode(_: MsgConvertCoinToERC20Response, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgConvertCoinToERC20Response {
    return {};
  },
  fromPartial(_: Partial<MsgConvertCoinToERC20Response>): MsgConvertCoinToERC20Response {
    const message = createBaseMsgConvertCoinToERC20Response();
    return message;
  },
  fromAmino(_: MsgConvertCoinToERC20ResponseAmino): MsgConvertCoinToERC20Response {
    const message = createBaseMsgConvertCoinToERC20Response();
    return message;
  },
  toAmino(_: MsgConvertCoinToERC20Response): MsgConvertCoinToERC20ResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConvertCoinToERC20ResponseAminoMsg): MsgConvertCoinToERC20Response {
    return MsgConvertCoinToERC20Response.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConvertCoinToERC20ResponseProtoMsg): MsgConvertCoinToERC20Response {
    return MsgConvertCoinToERC20Response.decode(message.value);
  },
  toProto(message: MsgConvertCoinToERC20Response): Uint8Array {
    return MsgConvertCoinToERC20Response.encode(message).finish();
  },
  toProtoMsg(message: MsgConvertCoinToERC20Response): MsgConvertCoinToERC20ResponseProtoMsg {
    return {
      typeUrl: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20Response",
      value: MsgConvertCoinToERC20Response.encode(message).finish()
    };
  }
};
function createBaseMsgConvertERC20ToCoin(): MsgConvertERC20ToCoin {
  return {
    initiator: "",
    receiver: "",
    kavaErc20Address: "",
    amount: ""
  };
}
export const MsgConvertERC20ToCoin = {
  typeUrl: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin",
  encode(message: MsgConvertERC20ToCoin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.initiator !== "") {
      writer.uint32(10).string(message.initiator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.kavaErc20Address !== "") {
      writer.uint32(26).string(message.kavaErc20Address);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): MsgConvertERC20ToCoin {
    return {
      initiator: isSet(object.initiator) ? String(object.initiator) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      kavaErc20Address: isSet(object.kavaErc20Address) ? String(object.kavaErc20Address) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  fromPartial(object: Partial<MsgConvertERC20ToCoin>): MsgConvertERC20ToCoin {
    const message = createBaseMsgConvertERC20ToCoin();
    message.initiator = object.initiator ?? "";
    message.receiver = object.receiver ?? "";
    message.kavaErc20Address = object.kavaErc20Address ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgConvertERC20ToCoinAmino): MsgConvertERC20ToCoin {
    const message = createBaseMsgConvertERC20ToCoin();
    if (object.initiator !== undefined && object.initiator !== null) {
      message.initiator = object.initiator;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.kava_erc20_address !== undefined && object.kava_erc20_address !== null) {
      message.kavaErc20Address = object.kava_erc20_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgConvertERC20ToCoin): MsgConvertERC20ToCoinAmino {
    const obj: any = {};
    obj.initiator = message.initiator;
    obj.receiver = message.receiver;
    obj.kava_erc20_address = message.kavaErc20Address;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgConvertERC20ToCoinAminoMsg): MsgConvertERC20ToCoin {
    return MsgConvertERC20ToCoin.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConvertERC20ToCoinProtoMsg): MsgConvertERC20ToCoin {
    return MsgConvertERC20ToCoin.decode(message.value);
  },
  toProto(message: MsgConvertERC20ToCoin): Uint8Array {
    return MsgConvertERC20ToCoin.encode(message).finish();
  },
  toProtoMsg(message: MsgConvertERC20ToCoin): MsgConvertERC20ToCoinProtoMsg {
    return {
      typeUrl: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin",
      value: MsgConvertERC20ToCoin.encode(message).finish()
    };
  }
};
function createBaseMsgConvertERC20ToCoinResponse(): MsgConvertERC20ToCoinResponse {
  return {};
}
export const MsgConvertERC20ToCoinResponse = {
  typeUrl: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoinResponse",
  encode(_: MsgConvertERC20ToCoinResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgConvertERC20ToCoinResponse {
    return {};
  },
  fromPartial(_: Partial<MsgConvertERC20ToCoinResponse>): MsgConvertERC20ToCoinResponse {
    const message = createBaseMsgConvertERC20ToCoinResponse();
    return message;
  },
  fromAmino(_: MsgConvertERC20ToCoinResponseAmino): MsgConvertERC20ToCoinResponse {
    const message = createBaseMsgConvertERC20ToCoinResponse();
    return message;
  },
  toAmino(_: MsgConvertERC20ToCoinResponse): MsgConvertERC20ToCoinResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConvertERC20ToCoinResponseAminoMsg): MsgConvertERC20ToCoinResponse {
    return MsgConvertERC20ToCoinResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConvertERC20ToCoinResponseProtoMsg): MsgConvertERC20ToCoinResponse {
    return MsgConvertERC20ToCoinResponse.decode(message.value);
  },
  toProto(message: MsgConvertERC20ToCoinResponse): Uint8Array {
    return MsgConvertERC20ToCoinResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConvertERC20ToCoinResponse): MsgConvertERC20ToCoinResponseProtoMsg {
    return {
      typeUrl: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoinResponse",
      value: MsgConvertERC20ToCoinResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConvertCosmosCoinToERC20(): MsgConvertCosmosCoinToERC20 {
  return {
    initiator: "",
    receiver: "",
    amount: undefined
  };
}
export const MsgConvertCosmosCoinToERC20 = {
  typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20",
  encode(message: MsgConvertCosmosCoinToERC20, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.initiator !== "") {
      writer.uint32(10).string(message.initiator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgConvertCosmosCoinToERC20 {
    return {
      initiator: isSet(object.initiator) ? String(object.initiator) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<MsgConvertCosmosCoinToERC20>): MsgConvertCosmosCoinToERC20 {
    const message = createBaseMsgConvertCosmosCoinToERC20();
    message.initiator = object.initiator ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgConvertCosmosCoinToERC20Amino): MsgConvertCosmosCoinToERC20 {
    const message = createBaseMsgConvertCosmosCoinToERC20();
    if (object.initiator !== undefined && object.initiator !== null) {
      message.initiator = object.initiator;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgConvertCosmosCoinToERC20): MsgConvertCosmosCoinToERC20Amino {
    const obj: any = {};
    obj.initiator = message.initiator;
    obj.receiver = message.receiver;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgConvertCosmosCoinToERC20AminoMsg): MsgConvertCosmosCoinToERC20 {
    return MsgConvertCosmosCoinToERC20.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConvertCosmosCoinToERC20ProtoMsg): MsgConvertCosmosCoinToERC20 {
    return MsgConvertCosmosCoinToERC20.decode(message.value);
  },
  toProto(message: MsgConvertCosmosCoinToERC20): Uint8Array {
    return MsgConvertCosmosCoinToERC20.encode(message).finish();
  },
  toProtoMsg(message: MsgConvertCosmosCoinToERC20): MsgConvertCosmosCoinToERC20ProtoMsg {
    return {
      typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20",
      value: MsgConvertCosmosCoinToERC20.encode(message).finish()
    };
  }
};
function createBaseMsgConvertCosmosCoinToERC20Response(): MsgConvertCosmosCoinToERC20Response {
  return {};
}
export const MsgConvertCosmosCoinToERC20Response = {
  typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20Response",
  encode(_: MsgConvertCosmosCoinToERC20Response, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgConvertCosmosCoinToERC20Response {
    return {};
  },
  fromPartial(_: Partial<MsgConvertCosmosCoinToERC20Response>): MsgConvertCosmosCoinToERC20Response {
    const message = createBaseMsgConvertCosmosCoinToERC20Response();
    return message;
  },
  fromAmino(_: MsgConvertCosmosCoinToERC20ResponseAmino): MsgConvertCosmosCoinToERC20Response {
    const message = createBaseMsgConvertCosmosCoinToERC20Response();
    return message;
  },
  toAmino(_: MsgConvertCosmosCoinToERC20Response): MsgConvertCosmosCoinToERC20ResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConvertCosmosCoinToERC20ResponseAminoMsg): MsgConvertCosmosCoinToERC20Response {
    return MsgConvertCosmosCoinToERC20Response.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConvertCosmosCoinToERC20ResponseProtoMsg): MsgConvertCosmosCoinToERC20Response {
    return MsgConvertCosmosCoinToERC20Response.decode(message.value);
  },
  toProto(message: MsgConvertCosmosCoinToERC20Response): Uint8Array {
    return MsgConvertCosmosCoinToERC20Response.encode(message).finish();
  },
  toProtoMsg(message: MsgConvertCosmosCoinToERC20Response): MsgConvertCosmosCoinToERC20ResponseProtoMsg {
    return {
      typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20Response",
      value: MsgConvertCosmosCoinToERC20Response.encode(message).finish()
    };
  }
};
function createBaseMsgConvertCosmosCoinFromERC20(): MsgConvertCosmosCoinFromERC20 {
  return {
    initiator: "",
    receiver: "",
    amount: undefined
  };
}
export const MsgConvertCosmosCoinFromERC20 = {
  typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20",
  encode(message: MsgConvertCosmosCoinFromERC20, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.initiator !== "") {
      writer.uint32(10).string(message.initiator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgConvertCosmosCoinFromERC20 {
    return {
      initiator: isSet(object.initiator) ? String(object.initiator) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<MsgConvertCosmosCoinFromERC20>): MsgConvertCosmosCoinFromERC20 {
    const message = createBaseMsgConvertCosmosCoinFromERC20();
    message.initiator = object.initiator ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgConvertCosmosCoinFromERC20Amino): MsgConvertCosmosCoinFromERC20 {
    const message = createBaseMsgConvertCosmosCoinFromERC20();
    if (object.initiator !== undefined && object.initiator !== null) {
      message.initiator = object.initiator;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgConvertCosmosCoinFromERC20): MsgConvertCosmosCoinFromERC20Amino {
    const obj: any = {};
    obj.initiator = message.initiator;
    obj.receiver = message.receiver;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgConvertCosmosCoinFromERC20AminoMsg): MsgConvertCosmosCoinFromERC20 {
    return MsgConvertCosmosCoinFromERC20.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConvertCosmosCoinFromERC20ProtoMsg): MsgConvertCosmosCoinFromERC20 {
    return MsgConvertCosmosCoinFromERC20.decode(message.value);
  },
  toProto(message: MsgConvertCosmosCoinFromERC20): Uint8Array {
    return MsgConvertCosmosCoinFromERC20.encode(message).finish();
  },
  toProtoMsg(message: MsgConvertCosmosCoinFromERC20): MsgConvertCosmosCoinFromERC20ProtoMsg {
    return {
      typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20",
      value: MsgConvertCosmosCoinFromERC20.encode(message).finish()
    };
  }
};
function createBaseMsgConvertCosmosCoinFromERC20Response(): MsgConvertCosmosCoinFromERC20Response {
  return {};
}
export const MsgConvertCosmosCoinFromERC20Response = {
  typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20Response",
  encode(_: MsgConvertCosmosCoinFromERC20Response, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgConvertCosmosCoinFromERC20Response {
    return {};
  },
  fromPartial(_: Partial<MsgConvertCosmosCoinFromERC20Response>): MsgConvertCosmosCoinFromERC20Response {
    const message = createBaseMsgConvertCosmosCoinFromERC20Response();
    return message;
  },
  fromAmino(_: MsgConvertCosmosCoinFromERC20ResponseAmino): MsgConvertCosmosCoinFromERC20Response {
    const message = createBaseMsgConvertCosmosCoinFromERC20Response();
    return message;
  },
  toAmino(_: MsgConvertCosmosCoinFromERC20Response): MsgConvertCosmosCoinFromERC20ResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConvertCosmosCoinFromERC20ResponseAminoMsg): MsgConvertCosmosCoinFromERC20Response {
    return MsgConvertCosmosCoinFromERC20Response.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConvertCosmosCoinFromERC20ResponseProtoMsg): MsgConvertCosmosCoinFromERC20Response {
    return MsgConvertCosmosCoinFromERC20Response.decode(message.value);
  },
  toProto(message: MsgConvertCosmosCoinFromERC20Response): Uint8Array {
    return MsgConvertCosmosCoinFromERC20Response.encode(message).finish();
  },
  toProtoMsg(message: MsgConvertCosmosCoinFromERC20Response): MsgConvertCosmosCoinFromERC20ResponseProtoMsg {
    return {
      typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20Response",
      value: MsgConvertCosmosCoinFromERC20Response.encode(message).finish()
    };
  }
};