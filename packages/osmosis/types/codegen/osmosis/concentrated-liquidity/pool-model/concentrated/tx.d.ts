import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** ===================== MsgCreateConcentratedPool */
export interface MsgCreateConcentratedPool {
    sender: string;
    denom0: string;
    denom1: string;
    tickSpacing: Long;
    spreadFactor: string;
}
/** ===================== MsgCreateConcentratedPool */
export interface MsgCreateConcentratedPoolSDKType {
    sender: string;
    denom0: string;
    denom1: string;
    tick_spacing: Long;
    spread_factor: string;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateConcentratedPoolResponse {
    poolId: Long;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateConcentratedPoolResponseSDKType {
    pool_id: Long;
}
export declare const MsgCreateConcentratedPool: {
    encode(message: MsgCreateConcentratedPool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateConcentratedPool;
    fromPartial(object: Partial<MsgCreateConcentratedPool>): MsgCreateConcentratedPool;
};
export declare const MsgCreateConcentratedPoolResponse: {
    encode(message: MsgCreateConcentratedPoolResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateConcentratedPoolResponse;
    fromPartial(object: Partial<MsgCreateConcentratedPoolResponse>): MsgCreateConcentratedPoolResponse;
};
