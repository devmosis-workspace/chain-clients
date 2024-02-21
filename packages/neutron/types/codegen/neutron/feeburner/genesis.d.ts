import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { TotalBurnedNeutronsAmount, TotalBurnedNeutronsAmountAmino, TotalBurnedNeutronsAmountSDKType } from "./total_burned_neutrons_amount";
import { BinaryWriter } from "../../binary";
/** GenesisState defines the feeburner module's genesis state. */
export interface GenesisState {
    params: Params;
    totalBurnedNeutronsAmount: TotalBurnedNeutronsAmount;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/neutron.feeburner.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the feeburner module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    total_burned_neutrons_amount?: TotalBurnedNeutronsAmountAmino;
}
export interface GenesisStateAminoMsg {
    type: "/neutron.feeburner.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the feeburner module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    total_burned_neutrons_amount: TotalBurnedNeutronsAmountSDKType;
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
