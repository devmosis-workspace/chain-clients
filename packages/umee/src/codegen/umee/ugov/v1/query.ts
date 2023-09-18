import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryMinGasPrice is a request type. */
export interface QueryMinGasPrice {}
export interface QueryMinGasPriceProtoMsg {
  typeUrl: "/umee.ugov.v1.QueryMinGasPrice";
  value: Uint8Array;
}
/** QueryMinGasPrice is a request type. */
export interface QueryMinGasPriceAmino {}
export interface QueryMinGasPriceAminoMsg {
  type: "/umee.ugov.v1.QueryMinGasPrice";
  value: QueryMinGasPriceAmino;
}
/** QueryMinGasPrice is a request type. */
export interface QueryMinGasPriceSDKType {}
/** QueryMinGasPriceResponse response type. */
export interface QueryMinGasPriceResponse {
  minGasPrice: DecCoin;
}
export interface QueryMinGasPriceResponseProtoMsg {
  typeUrl: "/umee.ugov.v1.QueryMinGasPriceResponse";
  value: Uint8Array;
}
/** QueryMinGasPriceResponse response type. */
export interface QueryMinGasPriceResponseAmino {
  min_gas_price?: DecCoinAmino;
}
export interface QueryMinGasPriceResponseAminoMsg {
  type: "/umee.ugov.v1.QueryMinGasPriceResponse";
  value: QueryMinGasPriceResponseAmino;
}
/** QueryMinGasPriceResponse response type. */
export interface QueryMinGasPriceResponseSDKType {
  min_gas_price: DecCoinSDKType;
}
function createBaseQueryMinGasPrice(): QueryMinGasPrice {
  return {};
}
export const QueryMinGasPrice = {
  typeUrl: "/umee.ugov.v1.QueryMinGasPrice",
  encode(_: QueryMinGasPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryMinGasPrice {
    return {};
  },
  fromPartial(_: Partial<QueryMinGasPrice>): QueryMinGasPrice {
    const message = createBaseQueryMinGasPrice();
    return message;
  },
  fromAmino(_: QueryMinGasPriceAmino): QueryMinGasPrice {
    return {};
  },
  toAmino(_: QueryMinGasPrice): QueryMinGasPriceAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryMinGasPriceAminoMsg): QueryMinGasPrice {
    return QueryMinGasPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMinGasPriceProtoMsg): QueryMinGasPrice {
    return QueryMinGasPrice.decode(message.value);
  },
  toProto(message: QueryMinGasPrice): Uint8Array {
    return QueryMinGasPrice.encode(message).finish();
  },
  toProtoMsg(message: QueryMinGasPrice): QueryMinGasPriceProtoMsg {
    return {
      typeUrl: "/umee.ugov.v1.QueryMinGasPrice",
      value: QueryMinGasPrice.encode(message).finish()
    };
  }
};
function createBaseQueryMinGasPriceResponse(): QueryMinGasPriceResponse {
  return {
    minGasPrice: DecCoin.fromPartial({})
  };
}
export const QueryMinGasPriceResponse = {
  typeUrl: "/umee.ugov.v1.QueryMinGasPriceResponse",
  encode(message: QueryMinGasPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minGasPrice !== undefined) {
      DecCoin.encode(message.minGasPrice, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryMinGasPriceResponse {
    return {
      minGasPrice: isSet(object.minGasPrice) ? DecCoin.fromJSON(object.minGasPrice) : undefined
    };
  },
  fromPartial(object: Partial<QueryMinGasPriceResponse>): QueryMinGasPriceResponse {
    const message = createBaseQueryMinGasPriceResponse();
    message.minGasPrice = object.minGasPrice !== undefined && object.minGasPrice !== null ? DecCoin.fromPartial(object.minGasPrice) : undefined;
    return message;
  },
  fromAmino(object: QueryMinGasPriceResponseAmino): QueryMinGasPriceResponse {
    return {
      minGasPrice: object?.min_gas_price ? DecCoin.fromAmino(object.min_gas_price) : undefined
    };
  },
  toAmino(message: QueryMinGasPriceResponse): QueryMinGasPriceResponseAmino {
    const obj: any = {};
    obj.min_gas_price = message.minGasPrice ? DecCoin.toAmino(message.minGasPrice) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMinGasPriceResponseAminoMsg): QueryMinGasPriceResponse {
    return QueryMinGasPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMinGasPriceResponseProtoMsg): QueryMinGasPriceResponse {
    return QueryMinGasPriceResponse.decode(message.value);
  },
  toProto(message: QueryMinGasPriceResponse): Uint8Array {
    return QueryMinGasPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMinGasPriceResponse): QueryMinGasPriceResponseProtoMsg {
    return {
      typeUrl: "/umee.ugov.v1.QueryMinGasPriceResponse",
      value: QueryMinGasPriceResponse.encode(message).finish()
    };
  }
};