import { Params, ParamsAmino, ParamsSDKType, Deposit, DepositAmino, DepositSDKType } from "./store";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the savings module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params;
    deposits: Deposit[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/kava.savings.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the savings module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the parameters of the module. */
    params?: ParamsAmino;
    deposits?: DepositAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/kava.savings.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the savings module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    deposits: DepositSDKType[];
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
