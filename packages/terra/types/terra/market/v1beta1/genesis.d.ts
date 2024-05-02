import { Params, ParamsAmino, ParamsSDKType } from "./market";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the market module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params: Params;
    /** the gap between the TerraPool and the BasePool */
    terraPoolDelta: Uint8Array;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/terra.market.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the market module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the paramaters of the module. */
    params?: ParamsAmino;
    /** the gap between the TerraPool and the BasePool */
    terra_pool_delta?: string;
}
export interface GenesisStateAminoMsg {
    type: "/terra.market.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the market module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    terra_pool_delta: Uint8Array;
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
