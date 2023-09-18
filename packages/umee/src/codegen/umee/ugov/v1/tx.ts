import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgGovUpdateMinGasPrice is a request type for the Msg/GovUpdateMinGasPrice. */
export interface MsgGovUpdateMinGasPrice {
  /** authority must be the address of the governance account. */
  authority: string;
  minGasPrice: DecCoin;
}
export interface MsgGovUpdateMinGasPriceProtoMsg {
  typeUrl: "/umee.ugov.v1.MsgGovUpdateMinGasPrice";
  value: Uint8Array;
}
/** MsgGovUpdateMinGasPrice is a request type for the Msg/GovUpdateMinGasPrice. */
export interface MsgGovUpdateMinGasPriceAmino {
  /** authority must be the address of the governance account. */
  authority: string;
  min_gas_price?: DecCoinAmino;
}
export interface MsgGovUpdateMinGasPriceAminoMsg {
  type: "/umee.ugov.v1.MsgGovUpdateMinGasPrice";
  value: MsgGovUpdateMinGasPriceAmino;
}
/** MsgGovUpdateMinGasPrice is a request type for the Msg/GovUpdateMinGasPrice. */
export interface MsgGovUpdateMinGasPriceSDKType {
  authority: string;
  min_gas_price: DecCoinSDKType;
}
/** MsgGovUpdateMinGasPriceResponse is a response type for the Msg/GovUpdateMinGasPrice. */
export interface MsgGovUpdateMinGasPriceResponse {}
export interface MsgGovUpdateMinGasPriceResponseProtoMsg {
  typeUrl: "/umee.ugov.v1.MsgGovUpdateMinGasPriceResponse";
  value: Uint8Array;
}
/** MsgGovUpdateMinGasPriceResponse is a response type for the Msg/GovUpdateMinGasPrice. */
export interface MsgGovUpdateMinGasPriceResponseAmino {}
export interface MsgGovUpdateMinGasPriceResponseAminoMsg {
  type: "/umee.ugov.v1.MsgGovUpdateMinGasPriceResponse";
  value: MsgGovUpdateMinGasPriceResponseAmino;
}
/** MsgGovUpdateMinGasPriceResponse is a response type for the Msg/GovUpdateMinGasPrice. */
export interface MsgGovUpdateMinGasPriceResponseSDKType {}
function createBaseMsgGovUpdateMinGasPrice(): MsgGovUpdateMinGasPrice {
  return {
    authority: "",
    minGasPrice: DecCoin.fromPartial({})
  };
}
export const MsgGovUpdateMinGasPrice = {
  typeUrl: "/umee.ugov.v1.MsgGovUpdateMinGasPrice",
  encode(message: MsgGovUpdateMinGasPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.minGasPrice !== undefined) {
      DecCoin.encode(message.minGasPrice, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgGovUpdateMinGasPrice {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      minGasPrice: isSet(object.minGasPrice) ? DecCoin.fromJSON(object.minGasPrice) : undefined
    };
  },
  fromPartial(object: Partial<MsgGovUpdateMinGasPrice>): MsgGovUpdateMinGasPrice {
    const message = createBaseMsgGovUpdateMinGasPrice();
    message.authority = object.authority ?? "";
    message.minGasPrice = object.minGasPrice !== undefined && object.minGasPrice !== null ? DecCoin.fromPartial(object.minGasPrice) : undefined;
    return message;
  },
  fromAmino(object: MsgGovUpdateMinGasPriceAmino): MsgGovUpdateMinGasPrice {
    return {
      authority: object.authority,
      minGasPrice: object?.min_gas_price ? DecCoin.fromAmino(object.min_gas_price) : undefined
    };
  },
  toAmino(message: MsgGovUpdateMinGasPrice): MsgGovUpdateMinGasPriceAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.min_gas_price = message.minGasPrice ? DecCoin.toAmino(message.minGasPrice) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgGovUpdateMinGasPriceAminoMsg): MsgGovUpdateMinGasPrice {
    return MsgGovUpdateMinGasPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovUpdateMinGasPriceProtoMsg): MsgGovUpdateMinGasPrice {
    return MsgGovUpdateMinGasPrice.decode(message.value);
  },
  toProto(message: MsgGovUpdateMinGasPrice): Uint8Array {
    return MsgGovUpdateMinGasPrice.encode(message).finish();
  },
  toProtoMsg(message: MsgGovUpdateMinGasPrice): MsgGovUpdateMinGasPriceProtoMsg {
    return {
      typeUrl: "/umee.ugov.v1.MsgGovUpdateMinGasPrice",
      value: MsgGovUpdateMinGasPrice.encode(message).finish()
    };
  }
};
function createBaseMsgGovUpdateMinGasPriceResponse(): MsgGovUpdateMinGasPriceResponse {
  return {};
}
export const MsgGovUpdateMinGasPriceResponse = {
  typeUrl: "/umee.ugov.v1.MsgGovUpdateMinGasPriceResponse",
  encode(_: MsgGovUpdateMinGasPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgGovUpdateMinGasPriceResponse {
    return {};
  },
  fromPartial(_: Partial<MsgGovUpdateMinGasPriceResponse>): MsgGovUpdateMinGasPriceResponse {
    const message = createBaseMsgGovUpdateMinGasPriceResponse();
    return message;
  },
  fromAmino(_: MsgGovUpdateMinGasPriceResponseAmino): MsgGovUpdateMinGasPriceResponse {
    return {};
  },
  toAmino(_: MsgGovUpdateMinGasPriceResponse): MsgGovUpdateMinGasPriceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGovUpdateMinGasPriceResponseAminoMsg): MsgGovUpdateMinGasPriceResponse {
    return MsgGovUpdateMinGasPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovUpdateMinGasPriceResponseProtoMsg): MsgGovUpdateMinGasPriceResponse {
    return MsgGovUpdateMinGasPriceResponse.decode(message.value);
  },
  toProto(message: MsgGovUpdateMinGasPriceResponse): Uint8Array {
    return MsgGovUpdateMinGasPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGovUpdateMinGasPriceResponse): MsgGovUpdateMinGasPriceResponseProtoMsg {
    return {
      typeUrl: "/umee.ugov.v1.MsgGovUpdateMinGasPriceResponse",
      value: MsgGovUpdateMinGasPriceResponse.encode(message).finish()
    };
  }
};