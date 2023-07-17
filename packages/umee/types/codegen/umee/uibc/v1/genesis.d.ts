import { Params, ParamsSDKType } from "./quota";
import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the uibc module's genesis state. */
export interface GenesisState {
    params?: Params;
    outflows: DecCoin[];
    /** total_outflow_sum defines the total outflow sum of ibc-transfer in USD. */
    totalOutflowSum: string;
    /** quota_expires defines quota expire time (as unix timestamp) for ibc-transfer denom. */
    quotaExpires?: Timestamp;
}
/** GenesisState defines the uibc module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    outflows: DecCoinSDKType[];
    total_outflow_sum: string;
    quota_expires?: TimestampSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
