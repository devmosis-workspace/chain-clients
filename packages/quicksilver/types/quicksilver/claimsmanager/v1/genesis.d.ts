import { Params, ParamsAmino, ParamsSDKType, Claim, ClaimAmino, ClaimSDKType } from "./claimsmanager";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the claimsmanager module's genesis state. */
export interface GenesisState {
    params: Params;
    claims: Claim[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/quicksilver.claimsmanager.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the claimsmanager module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    claims?: ClaimAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/quicksilver.claimsmanager.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the claimsmanager module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    claims: ClaimSDKType[];
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
