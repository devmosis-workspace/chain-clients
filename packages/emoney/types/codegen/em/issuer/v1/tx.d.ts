import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface MsgIncreaseMintable {
    issuer: string;
    liquidityProvider: string;
    amount: Coin[];
}
export interface MsgIncreaseMintableProtoMsg {
    typeUrl: "/em.issuer.v1.MsgIncreaseMintable";
    value: Uint8Array;
}
export interface MsgIncreaseMintableAmino {
    issuer: string;
    liquidity_provider: string;
    amount: CoinAmino[];
}
export interface MsgIncreaseMintableAminoMsg {
    type: "/em.issuer.v1.MsgIncreaseMintable";
    value: MsgIncreaseMintableAmino;
}
export interface MsgIncreaseMintableSDKType {
    issuer: string;
    liquidity_provider: string;
    amount: CoinSDKType[];
}
export interface MsgIncreaseMintableResponse {
}
export interface MsgIncreaseMintableResponseProtoMsg {
    typeUrl: "/em.issuer.v1.MsgIncreaseMintableResponse";
    value: Uint8Array;
}
export interface MsgIncreaseMintableResponseAmino {
}
export interface MsgIncreaseMintableResponseAminoMsg {
    type: "/em.issuer.v1.MsgIncreaseMintableResponse";
    value: MsgIncreaseMintableResponseAmino;
}
export interface MsgIncreaseMintableResponseSDKType {
}
export interface MsgDecreaseMintable {
    issuer: string;
    liquidityProvider: string;
    amount: Coin[];
}
export interface MsgDecreaseMintableProtoMsg {
    typeUrl: "/em.issuer.v1.MsgDecreaseMintable";
    value: Uint8Array;
}
export interface MsgDecreaseMintableAmino {
    issuer: string;
    liquidity_provider: string;
    amount: CoinAmino[];
}
export interface MsgDecreaseMintableAminoMsg {
    type: "/em.issuer.v1.MsgDecreaseMintable";
    value: MsgDecreaseMintableAmino;
}
export interface MsgDecreaseMintableSDKType {
    issuer: string;
    liquidity_provider: string;
    amount: CoinSDKType[];
}
export interface MsgDecreaseMintableResponse {
}
export interface MsgDecreaseMintableResponseProtoMsg {
    typeUrl: "/em.issuer.v1.MsgDecreaseMintableResponse";
    value: Uint8Array;
}
export interface MsgDecreaseMintableResponseAmino {
}
export interface MsgDecreaseMintableResponseAminoMsg {
    type: "/em.issuer.v1.MsgDecreaseMintableResponse";
    value: MsgDecreaseMintableResponseAmino;
}
export interface MsgDecreaseMintableResponseSDKType {
}
export interface MsgRevokeLiquidityProvider {
    issuer: string;
    liquidityProvider: string;
}
export interface MsgRevokeLiquidityProviderProtoMsg {
    typeUrl: "/em.issuer.v1.MsgRevokeLiquidityProvider";
    value: Uint8Array;
}
export interface MsgRevokeLiquidityProviderAmino {
    issuer: string;
    liquidity_provider: string;
}
export interface MsgRevokeLiquidityProviderAminoMsg {
    type: "/em.issuer.v1.MsgRevokeLiquidityProvider";
    value: MsgRevokeLiquidityProviderAmino;
}
export interface MsgRevokeLiquidityProviderSDKType {
    issuer: string;
    liquidity_provider: string;
}
export interface MsgRevokeLiquidityProviderResponse {
}
export interface MsgRevokeLiquidityProviderResponseProtoMsg {
    typeUrl: "/em.issuer.v1.MsgRevokeLiquidityProviderResponse";
    value: Uint8Array;
}
export interface MsgRevokeLiquidityProviderResponseAmino {
}
export interface MsgRevokeLiquidityProviderResponseAminoMsg {
    type: "/em.issuer.v1.MsgRevokeLiquidityProviderResponse";
    value: MsgRevokeLiquidityProviderResponseAmino;
}
export interface MsgRevokeLiquidityProviderResponseSDKType {
}
export interface MsgSetInflation {
    issuer: string;
    denom: string;
    inflationRate: string;
}
export interface MsgSetInflationProtoMsg {
    typeUrl: "/em.issuer.v1.MsgSetInflation";
    value: Uint8Array;
}
export interface MsgSetInflationAmino {
    issuer: string;
    denom: string;
    inflation_rate: string;
}
export interface MsgSetInflationAminoMsg {
    type: "/em.issuer.v1.MsgSetInflation";
    value: MsgSetInflationAmino;
}
export interface MsgSetInflationSDKType {
    issuer: string;
    denom: string;
    inflation_rate: string;
}
export interface MsgSetInflationResponse {
}
export interface MsgSetInflationResponseProtoMsg {
    typeUrl: "/em.issuer.v1.MsgSetInflationResponse";
    value: Uint8Array;
}
export interface MsgSetInflationResponseAmino {
}
export interface MsgSetInflationResponseAminoMsg {
    type: "/em.issuer.v1.MsgSetInflationResponse";
    value: MsgSetInflationResponseAmino;
}
export interface MsgSetInflationResponseSDKType {
}
export declare const MsgIncreaseMintable: {
    typeUrl: string;
    encode(message: MsgIncreaseMintable, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgIncreaseMintable;
    fromPartial(object: Partial<MsgIncreaseMintable>): MsgIncreaseMintable;
    fromAmino(object: MsgIncreaseMintableAmino): MsgIncreaseMintable;
    toAmino(message: MsgIncreaseMintable): MsgIncreaseMintableAmino;
    fromAminoMsg(object: MsgIncreaseMintableAminoMsg): MsgIncreaseMintable;
    fromProtoMsg(message: MsgIncreaseMintableProtoMsg): MsgIncreaseMintable;
    toProto(message: MsgIncreaseMintable): Uint8Array;
    toProtoMsg(message: MsgIncreaseMintable): MsgIncreaseMintableProtoMsg;
};
export declare const MsgIncreaseMintableResponse: {
    typeUrl: string;
    encode(_: MsgIncreaseMintableResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgIncreaseMintableResponse;
    fromPartial(_: Partial<MsgIncreaseMintableResponse>): MsgIncreaseMintableResponse;
    fromAmino(_: MsgIncreaseMintableResponseAmino): MsgIncreaseMintableResponse;
    toAmino(_: MsgIncreaseMintableResponse): MsgIncreaseMintableResponseAmino;
    fromAminoMsg(object: MsgIncreaseMintableResponseAminoMsg): MsgIncreaseMintableResponse;
    fromProtoMsg(message: MsgIncreaseMintableResponseProtoMsg): MsgIncreaseMintableResponse;
    toProto(message: MsgIncreaseMintableResponse): Uint8Array;
    toProtoMsg(message: MsgIncreaseMintableResponse): MsgIncreaseMintableResponseProtoMsg;
};
export declare const MsgDecreaseMintable: {
    typeUrl: string;
    encode(message: MsgDecreaseMintable, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDecreaseMintable;
    fromPartial(object: Partial<MsgDecreaseMintable>): MsgDecreaseMintable;
    fromAmino(object: MsgDecreaseMintableAmino): MsgDecreaseMintable;
    toAmino(message: MsgDecreaseMintable): MsgDecreaseMintableAmino;
    fromAminoMsg(object: MsgDecreaseMintableAminoMsg): MsgDecreaseMintable;
    fromProtoMsg(message: MsgDecreaseMintableProtoMsg): MsgDecreaseMintable;
    toProto(message: MsgDecreaseMintable): Uint8Array;
    toProtoMsg(message: MsgDecreaseMintable): MsgDecreaseMintableProtoMsg;
};
export declare const MsgDecreaseMintableResponse: {
    typeUrl: string;
    encode(_: MsgDecreaseMintableResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDecreaseMintableResponse;
    fromPartial(_: Partial<MsgDecreaseMintableResponse>): MsgDecreaseMintableResponse;
    fromAmino(_: MsgDecreaseMintableResponseAmino): MsgDecreaseMintableResponse;
    toAmino(_: MsgDecreaseMintableResponse): MsgDecreaseMintableResponseAmino;
    fromAminoMsg(object: MsgDecreaseMintableResponseAminoMsg): MsgDecreaseMintableResponse;
    fromProtoMsg(message: MsgDecreaseMintableResponseProtoMsg): MsgDecreaseMintableResponse;
    toProto(message: MsgDecreaseMintableResponse): Uint8Array;
    toProtoMsg(message: MsgDecreaseMintableResponse): MsgDecreaseMintableResponseProtoMsg;
};
export declare const MsgRevokeLiquidityProvider: {
    typeUrl: string;
    encode(message: MsgRevokeLiquidityProvider, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRevokeLiquidityProvider;
    fromPartial(object: Partial<MsgRevokeLiquidityProvider>): MsgRevokeLiquidityProvider;
    fromAmino(object: MsgRevokeLiquidityProviderAmino): MsgRevokeLiquidityProvider;
    toAmino(message: MsgRevokeLiquidityProvider): MsgRevokeLiquidityProviderAmino;
    fromAminoMsg(object: MsgRevokeLiquidityProviderAminoMsg): MsgRevokeLiquidityProvider;
    fromProtoMsg(message: MsgRevokeLiquidityProviderProtoMsg): MsgRevokeLiquidityProvider;
    toProto(message: MsgRevokeLiquidityProvider): Uint8Array;
    toProtoMsg(message: MsgRevokeLiquidityProvider): MsgRevokeLiquidityProviderProtoMsg;
};
export declare const MsgRevokeLiquidityProviderResponse: {
    typeUrl: string;
    encode(_: MsgRevokeLiquidityProviderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRevokeLiquidityProviderResponse;
    fromPartial(_: Partial<MsgRevokeLiquidityProviderResponse>): MsgRevokeLiquidityProviderResponse;
    fromAmino(_: MsgRevokeLiquidityProviderResponseAmino): MsgRevokeLiquidityProviderResponse;
    toAmino(_: MsgRevokeLiquidityProviderResponse): MsgRevokeLiquidityProviderResponseAmino;
    fromAminoMsg(object: MsgRevokeLiquidityProviderResponseAminoMsg): MsgRevokeLiquidityProviderResponse;
    fromProtoMsg(message: MsgRevokeLiquidityProviderResponseProtoMsg): MsgRevokeLiquidityProviderResponse;
    toProto(message: MsgRevokeLiquidityProviderResponse): Uint8Array;
    toProtoMsg(message: MsgRevokeLiquidityProviderResponse): MsgRevokeLiquidityProviderResponseProtoMsg;
};
export declare const MsgSetInflation: {
    typeUrl: string;
    encode(message: MsgSetInflation, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetInflation;
    fromPartial(object: Partial<MsgSetInflation>): MsgSetInflation;
    fromAmino(object: MsgSetInflationAmino): MsgSetInflation;
    toAmino(message: MsgSetInflation): MsgSetInflationAmino;
    fromAminoMsg(object: MsgSetInflationAminoMsg): MsgSetInflation;
    fromProtoMsg(message: MsgSetInflationProtoMsg): MsgSetInflation;
    toProto(message: MsgSetInflation): Uint8Array;
    toProtoMsg(message: MsgSetInflation): MsgSetInflationProtoMsg;
};
export declare const MsgSetInflationResponse: {
    typeUrl: string;
    encode(_: MsgSetInflationResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSetInflationResponse;
    fromPartial(_: Partial<MsgSetInflationResponse>): MsgSetInflationResponse;
    fromAmino(_: MsgSetInflationResponseAmino): MsgSetInflationResponse;
    toAmino(_: MsgSetInflationResponse): MsgSetInflationResponseAmino;
    fromAminoMsg(object: MsgSetInflationResponseAminoMsg): MsgSetInflationResponse;
    fromProtoMsg(message: MsgSetInflationResponseProtoMsg): MsgSetInflationResponse;
    toProto(message: MsgSetInflationResponse): Uint8Array;
    toProtoMsg(message: MsgSetInflationResponse): MsgSetInflationResponseProtoMsg;
};
