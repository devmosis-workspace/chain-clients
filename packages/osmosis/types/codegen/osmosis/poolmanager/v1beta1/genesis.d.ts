import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ModuleRoute, ModuleRouteSDKType } from "./module_route";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params holds parameters for the poolmanager module */
export interface Params {
    poolCreationFee: Coin[];
}
/** Params holds parameters for the poolmanager module */
export interface ParamsSDKType {
    pool_creation_fee: CoinSDKType[];
}
/** GenesisState defines the poolmanager module's genesis state. */
export interface GenesisState {
    /** the next_pool_id */
    nextPoolId: Long;
    /** params is the container of poolmanager parameters. */
    params?: Params;
    /** pool_routes is the container of the mappings from pool id to pool type. */
    poolRoutes: ModuleRoute[];
}
/** GenesisState defines the poolmanager module's genesis state. */
export interface GenesisStateSDKType {
    next_pool_id: Long;
    params?: ParamsSDKType;
    pool_routes: ModuleRouteSDKType[];
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
