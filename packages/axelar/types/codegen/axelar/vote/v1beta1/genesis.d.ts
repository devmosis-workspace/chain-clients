import { Params, ParamsSDKType } from "./params";
import { PollMetadata, PollMetadataSDKType } from "../exported/v1beta1/types";
import * as _m0 from "protobufjs/minimal";
export interface GenesisState {
    params?: Params;
    pollMetadatas: PollMetadata[];
}
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    poll_metadatas: PollMetadataSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
