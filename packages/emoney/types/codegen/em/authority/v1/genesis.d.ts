import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface GenesisState {
    key: string;
    minGasPrices: DecCoin[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/em.authority.v1.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    key: string;
    min_gas_prices: DecCoinAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/em.authority.v1.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    key: string;
    min_gas_prices: DecCoinSDKType[];
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
