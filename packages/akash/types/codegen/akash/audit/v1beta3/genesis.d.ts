import { AuditedAttributes, AuditedAttributesAmino, AuditedAttributesSDKType } from "./audit";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the basic genesis state used by audit module */
export interface GenesisState {
    attributes: AuditedAttributes[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/akash.audit.v1beta3.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the basic genesis state used by audit module */
export interface GenesisStateAmino {
    attributes?: AuditedAttributesAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/akash.audit.v1beta3.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the basic genesis state used by audit module */
export interface GenesisStateSDKType {
    attributes: AuditedAttributesSDKType[];
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
