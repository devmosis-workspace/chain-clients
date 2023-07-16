import { Params, ParamsSDKType } from "./params";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface GenesisState {
    params?: Params;
    contentIdRecords: GenesisState_ContentIdRecord[];
    iscnRecords: Uint8Array[];
}
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    content_id_records: GenesisState_ContentIdRecordSDKType[];
    iscn_records: Uint8Array[];
}
export interface GenesisState_ContentIdRecord {
    iscnId: string;
    owner: string;
    latestVersion: Long;
}
export interface GenesisState_ContentIdRecordSDKType {
    iscn_id: string;
    owner: string;
    latest_version: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const GenesisState_ContentIdRecord: {
    encode(message: GenesisState_ContentIdRecord, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState_ContentIdRecord;
    fromPartial(object: Partial<GenesisState_ContentIdRecord>): GenesisState_ContentIdRecord;
};
