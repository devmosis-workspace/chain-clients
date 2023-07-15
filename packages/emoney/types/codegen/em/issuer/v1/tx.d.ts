import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export interface MsgIncreaseMintable {
    issuer: string;
    liquidityProvider: string;
    amount: Coin[];
}
export interface MsgIncreaseMintableSDKType {
    issuer: string;
    liquidity_provider: string;
    amount: CoinSDKType[];
}
export interface MsgIncreaseMintableResponse {
}
export interface MsgIncreaseMintableResponseSDKType {
}
export interface MsgDecreaseMintable {
    issuer: string;
    liquidityProvider: string;
    amount: Coin[];
}
export interface MsgDecreaseMintableSDKType {
    issuer: string;
    liquidity_provider: string;
    amount: CoinSDKType[];
}
export interface MsgDecreaseMintableResponse {
}
export interface MsgDecreaseMintableResponseSDKType {
}
export interface MsgRevokeLiquidityProvider {
    issuer: string;
    liquidityProvider: string;
}
export interface MsgRevokeLiquidityProviderSDKType {
    issuer: string;
    liquidity_provider: string;
}
export interface MsgRevokeLiquidityProviderResponse {
}
export interface MsgRevokeLiquidityProviderResponseSDKType {
}
export interface MsgSetInflation {
    issuer: string;
    denom: string;
    inflationRate: string;
}
export interface MsgSetInflationSDKType {
    issuer: string;
    denom: string;
    inflation_rate: string;
}
export interface MsgSetInflationResponse {
}
export interface MsgSetInflationResponseSDKType {
}
export declare const MsgIncreaseMintable: {
    encode(message: MsgIncreaseMintable, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgIncreaseMintable;
    fromPartial(object: Partial<MsgIncreaseMintable>): MsgIncreaseMintable;
};
export declare const MsgIncreaseMintableResponse: {
    encode(_: MsgIncreaseMintableResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgIncreaseMintableResponse;
    fromPartial(_: Partial<MsgIncreaseMintableResponse>): MsgIncreaseMintableResponse;
};
export declare const MsgDecreaseMintable: {
    encode(message: MsgDecreaseMintable, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDecreaseMintable;
    fromPartial(object: Partial<MsgDecreaseMintable>): MsgDecreaseMintable;
};
export declare const MsgDecreaseMintableResponse: {
    encode(_: MsgDecreaseMintableResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDecreaseMintableResponse;
    fromPartial(_: Partial<MsgDecreaseMintableResponse>): MsgDecreaseMintableResponse;
};
export declare const MsgRevokeLiquidityProvider: {
    encode(message: MsgRevokeLiquidityProvider, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRevokeLiquidityProvider;
    fromPartial(object: Partial<MsgRevokeLiquidityProvider>): MsgRevokeLiquidityProvider;
};
export declare const MsgRevokeLiquidityProviderResponse: {
    encode(_: MsgRevokeLiquidityProviderResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRevokeLiquidityProviderResponse;
    fromPartial(_: Partial<MsgRevokeLiquidityProviderResponse>): MsgRevokeLiquidityProviderResponse;
};
export declare const MsgSetInflation: {
    encode(message: MsgSetInflation, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSetInflation;
    fromPartial(object: Partial<MsgSetInflation>): MsgSetInflation;
};
export declare const MsgSetInflationResponse: {
    encode(_: MsgSetInflationResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSetInflationResponse;
    fromPartial(_: Partial<MsgSetInflationResponse>): MsgSetInflationResponse;
};
