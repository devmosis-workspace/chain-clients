import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the x/deployment package */
export interface Params {
    deploymentMinDeposit?: Coin;
}
/** Params defines the parameters for the x/deployment package */
export interface ParamsSDKType {
    deployment_min_deposit?: CoinSDKType;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
