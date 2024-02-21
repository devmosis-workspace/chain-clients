import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { PacketID, PacketIDAmino, PacketIDSDKType, Fee, FeeAmino, FeeSDKType } from "./fee";
import { BinaryWriter } from "../../binary";
/** GenesisState defines the fee module's genesis state. */
export interface GenesisState {
    params: Params;
    feeInfos: FeeInfo[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/neutron.feerefunder.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the fee module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    fee_infos?: FeeInfoAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/neutron.feerefunder.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the fee module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    fee_infos: FeeInfoSDKType[];
}
export interface FeeInfo {
    payer: string;
    packetId: PacketID;
    fee: Fee;
}
export interface FeeInfoProtoMsg {
    typeUrl: "/neutron.feerefunder.FeeInfo";
    value: Uint8Array;
}
export interface FeeInfoAmino {
    payer?: string;
    packet_id?: PacketIDAmino;
    fee?: FeeAmino;
}
export interface FeeInfoAminoMsg {
    type: "/neutron.feerefunder.FeeInfo";
    value: FeeInfoAmino;
}
export interface FeeInfoSDKType {
    payer: string;
    packet_id: PacketIDSDKType;
    fee: FeeSDKType;
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
export declare const FeeInfo: {
    typeUrl: string;
    encode(message: FeeInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeeInfo;
    fromPartial(object: Partial<FeeInfo>): FeeInfo;
    fromAmino(object: FeeInfoAmino): FeeInfo;
    toAmino(message: FeeInfo): FeeInfoAmino;
    fromAminoMsg(object: FeeInfoAminoMsg): FeeInfo;
    fromProtoMsg(message: FeeInfoProtoMsg): FeeInfo;
    toProto(message: FeeInfo): Uint8Array;
    toProtoMsg(message: FeeInfo): FeeInfoProtoMsg;
};
