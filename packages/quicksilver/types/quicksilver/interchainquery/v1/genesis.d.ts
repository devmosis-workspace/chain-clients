import { Query, QueryAmino, QuerySDKType } from "./interchainquery";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
    queries: Query[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/quicksilver.interchainquery.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateAmino {
    queries?: QueryAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/quicksilver.interchainquery.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateSDKType {
    queries: QuerySDKType[];
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
