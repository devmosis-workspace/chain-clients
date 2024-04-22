import { Params, ParamsAmino, ParamsSDKType, State, StateAmino, StateSDKType } from "./swingset";
import { BinaryWriter } from "../../binary";
/** The initial or exported state. */
export interface GenesisState {
    params: Params;
    state: State;
    swingStoreExportData: SwingStoreExportDataEntry[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/agoric.swingset.GenesisState";
    value: Uint8Array;
}
/** The initial or exported state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    state?: StateAmino;
    swing_store_export_data?: SwingStoreExportDataEntryAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/agoric.swingset.GenesisState";
    value: GenesisStateAmino;
}
/** The initial or exported state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    state: StateSDKType;
    swing_store_export_data: SwingStoreExportDataEntrySDKType[];
}
/** A SwingStore "export data" entry. */
export interface SwingStoreExportDataEntry {
    key: string;
    value: string;
}
export interface SwingStoreExportDataEntryProtoMsg {
    typeUrl: "/agoric.swingset.SwingStoreExportDataEntry";
    value: Uint8Array;
}
/** A SwingStore "export data" entry. */
export interface SwingStoreExportDataEntryAmino {
    key?: string;
    value?: string;
}
export interface SwingStoreExportDataEntryAminoMsg {
    type: "/agoric.swingset.SwingStoreExportDataEntry";
    value: SwingStoreExportDataEntryAmino;
}
/** A SwingStore "export data" entry. */
export interface SwingStoreExportDataEntrySDKType {
    key: string;
    value: string;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const SwingStoreExportDataEntry: {
    typeUrl: string;
    encode(message: SwingStoreExportDataEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SwingStoreExportDataEntry;
    fromPartial(object: Partial<SwingStoreExportDataEntry>): SwingStoreExportDataEntry;
    fromAmino(object: SwingStoreExportDataEntryAmino): SwingStoreExportDataEntry;
    toAmino(message: SwingStoreExportDataEntry): SwingStoreExportDataEntryAmino;
    fromAminoMsg(object: SwingStoreExportDataEntryAminoMsg): SwingStoreExportDataEntry;
    fromProtoMsg(message: SwingStoreExportDataEntryProtoMsg): SwingStoreExportDataEntry;
    toProto(message: SwingStoreExportDataEntry): Uint8Array;
    toProtoMsg(message: SwingStoreExportDataEntry): SwingStoreExportDataEntryProtoMsg;
};
