import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface MsgMintTokens {
    liquidityProvider: string;
    amount: Coin[];
}
export interface MsgMintTokensProtoMsg {
    typeUrl: "/em.liquidityprovider.v1.MsgMintTokens";
    value: Uint8Array;
}
export interface MsgMintTokensAmino {
    liquidity_provider: string;
    amount: CoinAmino[];
}
export interface MsgMintTokensAminoMsg {
    type: "/em.liquidityprovider.v1.MsgMintTokens";
    value: MsgMintTokensAmino;
}
export interface MsgMintTokensSDKType {
    liquidity_provider: string;
    amount: CoinSDKType[];
}
export interface MsgMintTokensResponse {
}
export interface MsgMintTokensResponseProtoMsg {
    typeUrl: "/em.liquidityprovider.v1.MsgMintTokensResponse";
    value: Uint8Array;
}
export interface MsgMintTokensResponseAmino {
}
export interface MsgMintTokensResponseAminoMsg {
    type: "/em.liquidityprovider.v1.MsgMintTokensResponse";
    value: MsgMintTokensResponseAmino;
}
export interface MsgMintTokensResponseSDKType {
}
export interface MsgBurnTokens {
    liquidityProvider: string;
    amount: Coin[];
}
export interface MsgBurnTokensProtoMsg {
    typeUrl: "/em.liquidityprovider.v1.MsgBurnTokens";
    value: Uint8Array;
}
export interface MsgBurnTokensAmino {
    liquidity_provider: string;
    amount: CoinAmino[];
}
export interface MsgBurnTokensAminoMsg {
    type: "/em.liquidityprovider.v1.MsgBurnTokens";
    value: MsgBurnTokensAmino;
}
export interface MsgBurnTokensSDKType {
    liquidity_provider: string;
    amount: CoinSDKType[];
}
export interface MsgBurnTokensResponse {
}
export interface MsgBurnTokensResponseProtoMsg {
    typeUrl: "/em.liquidityprovider.v1.MsgBurnTokensResponse";
    value: Uint8Array;
}
export interface MsgBurnTokensResponseAmino {
}
export interface MsgBurnTokensResponseAminoMsg {
    type: "/em.liquidityprovider.v1.MsgBurnTokensResponse";
    value: MsgBurnTokensResponseAmino;
}
export interface MsgBurnTokensResponseSDKType {
}
export declare const MsgMintTokens: {
    typeUrl: string;
    encode(message: MsgMintTokens, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgMintTokens;
    fromPartial(object: Partial<MsgMintTokens>): MsgMintTokens;
    fromAmino(object: MsgMintTokensAmino): MsgMintTokens;
    toAmino(message: MsgMintTokens): MsgMintTokensAmino;
    fromAminoMsg(object: MsgMintTokensAminoMsg): MsgMintTokens;
    fromProtoMsg(message: MsgMintTokensProtoMsg): MsgMintTokens;
    toProto(message: MsgMintTokens): Uint8Array;
    toProtoMsg(message: MsgMintTokens): MsgMintTokensProtoMsg;
};
export declare const MsgMintTokensResponse: {
    typeUrl: string;
    encode(_: MsgMintTokensResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgMintTokensResponse;
    fromPartial(_: Partial<MsgMintTokensResponse>): MsgMintTokensResponse;
    fromAmino(_: MsgMintTokensResponseAmino): MsgMintTokensResponse;
    toAmino(_: MsgMintTokensResponse): MsgMintTokensResponseAmino;
    fromAminoMsg(object: MsgMintTokensResponseAminoMsg): MsgMintTokensResponse;
    fromProtoMsg(message: MsgMintTokensResponseProtoMsg): MsgMintTokensResponse;
    toProto(message: MsgMintTokensResponse): Uint8Array;
    toProtoMsg(message: MsgMintTokensResponse): MsgMintTokensResponseProtoMsg;
};
export declare const MsgBurnTokens: {
    typeUrl: string;
    encode(message: MsgBurnTokens, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBurnTokens;
    fromPartial(object: Partial<MsgBurnTokens>): MsgBurnTokens;
    fromAmino(object: MsgBurnTokensAmino): MsgBurnTokens;
    toAmino(message: MsgBurnTokens): MsgBurnTokensAmino;
    fromAminoMsg(object: MsgBurnTokensAminoMsg): MsgBurnTokens;
    fromProtoMsg(message: MsgBurnTokensProtoMsg): MsgBurnTokens;
    toProto(message: MsgBurnTokens): Uint8Array;
    toProtoMsg(message: MsgBurnTokens): MsgBurnTokensProtoMsg;
};
export declare const MsgBurnTokensResponse: {
    typeUrl: string;
    encode(_: MsgBurnTokensResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgBurnTokensResponse;
    fromPartial(_: Partial<MsgBurnTokensResponse>): MsgBurnTokensResponse;
    fromAmino(_: MsgBurnTokensResponseAmino): MsgBurnTokensResponse;
    toAmino(_: MsgBurnTokensResponse): MsgBurnTokensResponseAmino;
    fromAminoMsg(object: MsgBurnTokensResponseAminoMsg): MsgBurnTokensResponse;
    fromProtoMsg(message: MsgBurnTokensResponseProtoMsg): MsgBurnTokensResponse;
    toProto(message: MsgBurnTokensResponse): Uint8Array;
    toProtoMsg(message: MsgBurnTokensResponse): MsgBurnTokensResponseProtoMsg;
};
