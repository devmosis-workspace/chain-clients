import { ResourceUnits, ResourceUnitsSDKType } from "../../base/v1beta2/resourceunits";
import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
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
export declare const Resource: {
    encode(message: Resource, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Resource;
    fromPartial(object: Partial<Resource>): Resource;
};
