import { RegistrationNodeInfo, RegistrationNodeInfoAmino, RegistrationNodeInfoSDKType } from "./types";
import { MasterKey, MasterKeyAmino, MasterKeySDKType } from "./msg";
import { BinaryWriter } from "../../../binary";
export interface GenesisState {
    registration: RegistrationNodeInfo[];
    nodeExchMasterKey?: MasterKey;
    ioMasterKey?: MasterKey;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/secret.registration.v1beta1.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    registration: RegistrationNodeInfoAmino[];
    node_exch_master_key: MasterKeyAmino;
    io_master_key: MasterKeyAmino;
}
export interface GenesisStateAminoMsg {
    type: "/secret.registration.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    registration: RegistrationNodeInfoSDKType[];
    node_exch_master_key?: MasterKeySDKType;
    io_master_key?: MasterKeySDKType;
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
