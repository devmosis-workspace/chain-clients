import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** GenesisState of the ugov module. */
export interface GenesisState {
    minGasPrice: DecCoin;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/umee.ugov.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState of the ugov module. */
export interface GenesisStateAmino {
    min_gas_price?: DecCoinAmino;
}
export interface GenesisStateAminoMsg {
    type: "/umee.ugov.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState of the ugov module. */
export interface GenesisStateSDKType {
    min_gas_price: DecCoinSDKType;
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
