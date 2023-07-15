import { Pool, PoolSDKType } from "./pool";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the pool module's genesis state. */
export interface GenesisState {
    /** pool_list ... */
    poolList: Pool[];
    /** pool_count ... */
    poolCount: Long;
}
/** GenesisState defines the pool module's genesis state. */
export interface GenesisStateSDKType {
    pool_list: PoolSDKType[];
    pool_count: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
