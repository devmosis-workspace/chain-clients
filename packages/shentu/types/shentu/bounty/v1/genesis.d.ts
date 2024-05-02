import { Program, ProgramAmino, ProgramSDKType, Finding, FindingAmino, FindingSDKType } from "./bounty";
import { BinaryWriter } from "../../../binary";
export interface GenesisState {
    programs: Program[];
    findings: Finding[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/shentu.bounty.v1.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    programs?: ProgramAmino[];
    findings?: FindingAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/shentu.bounty.v1.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    programs: ProgramSDKType[];
    findings: FindingSDKType[];
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
