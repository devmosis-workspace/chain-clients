import { ClassTrace, ClassTraceSDKType } from "./trace";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the ibc-nft-transfer genesis state */
export interface GenesisState {
    portId: string;
    traces: ClassTrace[];
}
/** GenesisState defines the ibc-nft-transfer genesis state */
export interface GenesisStateSDKType {
    port_id: string;
    traces: ClassTraceSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
