import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export interface MsgMintTokens {
    liquidityProvider: string;
    amount: Coin[];
}
export interface MsgMintTokensSDKType {
    liquidity_provider: string;
    amount: CoinSDKType[];
}
export interface MsgMintTokensResponse {
}
export interface MsgMintTokensResponseSDKType {
}
export interface MsgBurnTokens {
    liquidityProvider: string;
    amount: Coin[];
}
export interface MsgBurnTokensSDKType {
    liquidity_provider: string;
    amount: CoinSDKType[];
}
export interface MsgBurnTokensResponse {
}
export interface MsgBurnTokensResponseSDKType {
}
export declare const MsgMintTokens: {
    encode(message: MsgMintTokens, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgMintTokens;
    fromPartial(object: Partial<MsgMintTokens>): MsgMintTokens;
};
export declare const MsgMintTokensResponse: {
    encode(_: MsgMintTokensResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgMintTokensResponse;
    fromPartial(_: Partial<MsgMintTokensResponse>): MsgMintTokensResponse;
};
export declare const MsgBurnTokens: {
    encode(message: MsgBurnTokens, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBurnTokens;
    fromPartial(object: Partial<MsgBurnTokens>): MsgBurnTokens;
};
export declare const MsgBurnTokensResponse: {
    encode(_: MsgBurnTokensResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgBurnTokensResponse;
    fromPartial(_: Partial<MsgBurnTokensResponse>): MsgBurnTokensResponse;
};
