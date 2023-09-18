import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface GenesisState {
    accounts: GenesisAcc[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/em.liquidityprovider.v1.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    accounts: GenesisAccAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/em.liquidityprovider.v1.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    accounts: GenesisAccSDKType[];
}
export interface GenesisAcc {
    address: string;
    mintable: Coin[];
}
export interface GenesisAccProtoMsg {
    typeUrl: "/em.liquidityprovider.v1.GenesisAcc";
    value: Uint8Array;
}
export interface GenesisAccAmino {
    address: string;
    mintable: CoinAmino[];
}
export interface GenesisAccAminoMsg {
    type: "/em.liquidityprovider.v1.GenesisAcc";
    value: GenesisAccAmino;
}
export interface GenesisAccSDKType {
    address: string;
    mintable: CoinSDKType[];
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
export declare const GenesisAcc: {
    typeUrl: string;
    encode(message: GenesisAcc, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisAcc;
    fromPartial(object: Partial<GenesisAcc>): GenesisAcc;
    fromAmino(object: GenesisAccAmino): GenesisAcc;
    toAmino(message: GenesisAcc): GenesisAccAmino;
    fromAminoMsg(object: GenesisAccAminoMsg): GenesisAcc;
    fromProtoMsg(message: GenesisAccProtoMsg): GenesisAcc;
    toProto(message: GenesisAcc): Uint8Array;
    toProtoMsg(message: GenesisAcc): GenesisAccProtoMsg;
};
