import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** MsgGovUpdateMinGasPrice is a request type for the Msg/GovUpdateMinGasPrice. */
export interface MsgGovUpdateMinGasPrice {
  /** authority must be the address of the governance account. */
  authority: string;
  minGasPrice?: DecCoin;
}
/** MsgGovUpdateMinGasPrice is a request type for the Msg/GovUpdateMinGasPrice. */
export interface MsgGovUpdateMinGasPriceSDKType {
  authority: string;
  min_gas_price?: DecCoinSDKType;
}
/** MsgGovUpdateMinGasPriceResponse is a response type for the Msg/GovUpdateMinGasPrice. */
export interface MsgGovUpdateMinGasPriceResponse {}
/** MsgGovUpdateMinGasPriceResponse is a response type for the Msg/GovUpdateMinGasPrice. */
export interface MsgGovUpdateMinGasPriceResponseSDKType {}
function createBaseMsgGovUpdateMinGasPrice(): MsgGovUpdateMinGasPrice {
  return {
    authority: "",
    minGasPrice: undefined
  };
}
export const MsgGovUpdateMinGasPrice = {
  encode(message: MsgGovUpdateMinGasPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgGovUpdateMinGasPriceResponse(): MsgGovUpdateMinGasPriceResponse {
  return {};
}
export const MsgGovUpdateMinGasPriceResponse = {
  encode(_: MsgGovUpdateMinGasPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgGovUpdateMinGasPriceResponse {
    return {};
  },
  fromPartial(_: Partial<MsgGovUpdateMinGasPriceResponse>): MsgGovUpdateMinGasPriceResponse {
    const message = createBaseMsgGovUpdateMinGasPriceResponse();
    return message;
  }
};