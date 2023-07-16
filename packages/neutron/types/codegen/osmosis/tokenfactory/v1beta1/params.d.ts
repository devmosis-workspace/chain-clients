import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** Params holds parameters for the tokenfactory module */
export interface Params {
    /** DenomCreationFee is the fee required to create a new denom using the tokenfactory module */
    denomCreationFee: Coin[];
    /** FeeCollectorAddress is the address where fees collected from denom creation are sent to */
    feeCollectorAddress: string;
}
/** Params holds parameters for the tokenfactory module */
export interface ParamsSDKType {
    denom_creation_fee: CoinSDKType[];
    fee_collector_address: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
