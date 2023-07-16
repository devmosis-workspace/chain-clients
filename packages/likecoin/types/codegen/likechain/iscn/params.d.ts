import { DecCoin, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export interface Params {
    registryName: string;
    feePerByte?: DecCoin;
}
export interface ParamsSDKType {
    registry_name: string;
    fee_per_byte?: DecCoinSDKType;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
