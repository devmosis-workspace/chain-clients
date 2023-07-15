import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
export interface InflationAsset {
    denom: string;
    inflation: string;
    accum: string;
}
export interface InflationAssetSDKType {
    denom: string;
    inflation: string;
    accum: string;
}
export interface InflationState {
    lastApplied?: Timestamp;
    lastAppliedHeight: string;
    assets: InflationAsset[];
}
export interface InflationStateSDKType {
    last_applied?: TimestampSDKType;
    last_applied_height: string;
    assets: InflationAssetSDKType[];
}
export declare const InflationAsset: {
    encode(message: InflationAsset, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): InflationAsset;
    fromPartial(object: Partial<InflationAsset>): InflationAsset;
};
export declare const InflationState: {
    encode(message: InflationState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): InflationState;
    fromPartial(object: Partial<InflationState>): InflationState;
};
