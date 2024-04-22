import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { ProxiedValidator, ProxiedValidatorAmino, ProxiedValidatorSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
/** GenesisState represents the genesis state */
export interface GenesisState {
    params: Params;
    proxiedValidators: ProxiedValidator[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/axelar.snapshot.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState represents the genesis state */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    proxied_validators?: ProxiedValidatorAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/axelar.snapshot.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState represents the genesis state */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    proxied_validators: ProxiedValidatorSDKType[];
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
