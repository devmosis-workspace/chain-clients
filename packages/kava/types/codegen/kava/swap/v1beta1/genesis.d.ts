import { Params, ParamsSDKType, PoolRecord, PoolRecordSDKType, ShareRecord, ShareRecordSDKType } from "./swap";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the swap module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters related to swap */
    params?: Params;
    /** pool_records defines the available pools */
    poolRecords: PoolRecord[];
    /** share_records defines the owned shares of each pool */
    shareRecords: ShareRecord[];
}
/** GenesisState defines the swap module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    pool_records: PoolRecordSDKType[];
    share_records: ShareRecordSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
