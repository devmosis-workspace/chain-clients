import { Params, ParamsSDKType } from "./params";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the kavadist module's genesis state. */
export interface GenesisState {
    params?: Params;
    previousBlockTime?: Timestamp;
}
/** GenesisState defines the kavadist module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    previous_block_time?: TimestampSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
