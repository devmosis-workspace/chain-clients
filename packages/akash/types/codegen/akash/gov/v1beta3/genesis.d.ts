import { DepositParams, DepositParamsAmino, DepositParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
/** GenesisState stores slice of genesis deployment instance */
export interface GenesisState {
    depositParams: DepositParams;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/akash.gov.v1beta3.GenesisState";
    value: Uint8Array;
}
/** GenesisState stores slice of genesis deployment instance */
export interface GenesisStateAmino {
    deposit_params?: DepositParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/akash.gov.v1beta3.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState stores slice of genesis deployment instance */
export interface GenesisStateSDKType {
    deposit_params: DepositParamsSDKType;
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
