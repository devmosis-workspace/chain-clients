import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/**
 * SupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface SupplyRequest {}
/**
 * SupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface SupplyRequestSDKType {}
/**
 * SupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface SupplyResponse {
  /** supply is the supply of the coins */
  supply: Coin[];
}
/**
 * SupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface SupplyResponseSDKType {
  supply: CoinSDKType[];
}
function createBaseSupplyRequest(): SupplyRequest {
  return {};
}
export const SupplyRequest = {
  encode(_: SupplyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): SupplyRequest {
    return {};
  },
  fromPartial(_: Partial<SupplyRequest>): SupplyRequest {
    const message = createBaseSupplyRequest();
    return message;
  }
};
function createBaseSupplyResponse(): SupplyResponse {
  return {
    supply: []
  };
}
export const SupplyResponse = {
  encode(message: SupplyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.supply) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SupplyResponse {
    return {
      supply: Array.isArray(object?.supply) ? object.supply.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<SupplyResponse>): SupplyResponse {
    const message = createBaseSupplyResponse();
    message.supply = object.supply?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};