import { ResourceUnits, ResourceUnitsSDKType } from "../../base/v1beta2/resourceunits";
import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** Resource stores unit, total count and price of resource */
export interface Resource {
  resources?: ResourceUnits;
  count: number;
  price?: DecCoin;
}
/** Resource stores unit, total count and price of resource */
export interface ResourceSDKType {
  resources?: ResourceUnitsSDKType;
  count: number;
  price?: DecCoinSDKType;
}
function createBaseResource(): Resource {
  return {
    resources: undefined,
    count: 0,
    price: undefined
  };
}
export const Resource = {
  encode(message: Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resources !== undefined) {
      ResourceUnits.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Resource {
    return {
      resources: isSet(object.resources) ? ResourceUnits.fromJSON(object.resources) : undefined,
      count: isSet(object.count) ? Number(object.count) : 0,
      price: isSet(object.price) ? DecCoin.fromJSON(object.price) : undefined
    };
  },
  fromPartial(object: Partial<Resource>): Resource {
    const message = createBaseResource();
    message.resources = object.resources !== undefined && object.resources !== null ? ResourceUnits.fromPartial(object.resources) : undefined;
    message.count = object.count ?? 0;
    message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
    return message;
  }
};