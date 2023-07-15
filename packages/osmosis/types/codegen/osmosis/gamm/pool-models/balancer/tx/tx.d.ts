import { PoolParams, PoolParamsSDKType, PoolAsset, PoolAssetSDKType } from "../balancerPool";
import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** ===================== MsgCreatePool */
export interface MsgCreateBalancerPool {
    sender: string;
    poolParams?: PoolParams;
    poolAssets: PoolAsset[];
    futurePoolGovernor: string;
}
/** ===================== MsgCreatePool */
export interface MsgCreateBalancerPoolSDKType {
    sender: string;
    pool_params?: PoolParamsSDKType;
    pool_assets: PoolAssetSDKType[];
    future_pool_governor: string;
}
/** Returns the poolID */
export interface MsgCreateBalancerPoolResponse {
    poolId: Long;
}
/** Returns the poolID */
export interface MsgCreateBalancerPoolResponseSDKType {
    pool_id: Long;
}
export declare const MsgCreateBalancerPool: {
    encode(message: MsgCreateBalancerPool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateBalancerPool;
    fromPartial(object: Partial<MsgCreateBalancerPool>): MsgCreateBalancerPool;
};
export declare const MsgCreateBalancerPoolResponse: {
    encode(message: MsgCreateBalancerPoolResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateBalancerPoolResponse;
    fromPartial(object: Partial<MsgCreateBalancerPoolResponse>): MsgCreateBalancerPoolResponse;
};
