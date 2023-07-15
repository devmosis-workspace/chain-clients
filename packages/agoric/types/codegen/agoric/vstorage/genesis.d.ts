import * as _m0 from "protobufjs/minimal";
/** The initial or exported state. */
export interface GenesisState {
    data: DataEntry[];
}
/** The initial or exported state. */
export interface GenesisStateSDKType {
    data: DataEntrySDKType[];
}
/**
 * A vstorage entry.  The only necessary entries are those with data, as the
 * ancestor nodes are reconstructed on import.
 */
export interface DataEntry {
    /**
     * A "."-separated path with individual path elements matching
     * `[-_A-Za-z0-9]+`
     */
    path: string;
    value: string;
}
/**
 * A vstorage entry.  The only necessary entries are those with data, as the
 * ancestor nodes are reconstructed on import.
 */
export interface DataEntrySDKType {
    path: string;
    value: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const DataEntry: {
    encode(message: DataEntry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DataEntry;
    fromPartial(object: Partial<DataEntry>): DataEntry;
};
