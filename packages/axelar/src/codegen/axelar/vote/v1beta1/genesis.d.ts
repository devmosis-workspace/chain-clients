import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { PollMetadata, PollMetadataAmino, PollMetadataSDKType } from "../exported/v1beta1/types";
import { BinaryWriter } from "../../../binary";
export interface GenesisState {
    params: Params;
    pollMetadatas: PollMetadata[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/axelar.vote.v1beta1.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    params?: ParamsAmino;
    poll_metadatas?: PollMetadataAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/axelar.vote.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    poll_metadatas: PollMetadataSDKType[];
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
