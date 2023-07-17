import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** QueryMinGasPrice is a request type. */
export interface QueryMinGasPrice {}
/** QueryMinGasPrice is a request type. */
export interface QueryMinGasPriceSDKType {}
/** QueryMinGasPriceResponse response type. */
export interface QueryMinGasPriceResponse {
  minGasPrice?: DecCoin;
}
/** QueryMinGasPriceResponse response type. */
export interface QueryMinGasPriceResponseSDKType {
  min_gas_price?: DecCoinSDKType;
}
function createBaseQueryMinGasPrice(): QueryMinGasPrice {
  return {};
}
export const QueryMinGasPrice = {
  encode(_: QueryMinGasPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryMinGasPrice {
    return {};
  },
  fromPartial(_: Partial<QueryMinGasPrice>): QueryMinGasPrice {
    const message = createBaseQueryMinGasPrice();
    return message;
  }
};
function createBaseQueryMinGasPriceResponse(): QueryMinGasPriceResponse {
  return {
    minGasPrice: undefined
  };
}
export const QueryMinGasPriceResponse = {
  encode(message: QueryMinGasPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};