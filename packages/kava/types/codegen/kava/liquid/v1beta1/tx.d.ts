import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** MsgMintDerivative defines the Msg/MintDerivative request type. */
export interface MsgMintDerivative {
    /** sender is the owner of the delegation to be converted */
    sender: string;
    /** validator is the validator of the delegation to be converted */
    validator: string;
    /** amount is the quantity of staked assets to be converted */
    amount?: Coin;
}
/** MsgMintDerivative defines the Msg/MintDerivative request type. */
export interface MsgMintDerivativeSDKType {
    sender: string;
    validator: string;
    amount?: CoinSDKType;
}
/** MsgMintDerivativeResponse defines the Msg/MintDerivative response type. */
export interface MsgMintDerivativeResponse {
    /** received is the amount of staking derivative minted and sent to the sender */
    received?: Coin;
}
/** MsgMintDerivativeResponse defines the Msg/MintDerivative response type. */
export interface MsgMintDerivativeResponseSDKType {
    received?: CoinSDKType;
}
/** MsgBurnDerivative defines the Msg/BurnDerivative request type. */
export interface MsgBurnDerivative {
    /** sender is the owner of the derivatives to be converted */
    sender: string;
    /** validator is the validator of the derivatives to be converted */
    validator: string;
    /** amount is the quantity of derivatives to be converted */
    amount?: Coin;
}
/** MsgBurnDerivative defines the Msg/BurnDerivative request type. */
export interface MsgBurnDerivativeSDKType {
    sender: string;
    validator: string;
    amount?: CoinSDKType;
}
/** MsgBurnDerivativeResponse defines the Msg/BurnDerivative response type. */
export interface MsgBurnDerivativeResponse {
    /** received is the number of delegation shares sent to the sender */
    received: string;
}
/** MsgBurnDerivativeResponse defines the Msg/BurnDerivative response type. */
export interface MsgBurnDerivativeResponseSDKType {
    received: string;
}
export declare const MsgMintDerivative: {
    encode(message: MsgMintDerivative, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgMintDerivative;
    fromPartial(object: Partial<MsgMintDerivative>): MsgMintDerivative;
};
export declare const MsgMintDerivativeResponse: {
    encode(message: MsgMintDerivativeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgMintDerivativeResponse;
    fromPartial(object: Partial<MsgMintDerivativeResponse>): MsgMintDerivativeResponse;
};
export declare const MsgBurnDerivative: {
    encode(message: MsgBurnDerivative, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBurnDerivative;
    fromPartial(object: Partial<MsgBurnDerivative>): MsgBurnDerivative;
};
export declare const MsgBurnDerivativeResponse: {
    encode(message: MsgBurnDerivativeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBurnDerivativeResponse;
    fromPartial(object: Partial<MsgBurnDerivativeResponse>): MsgBurnDerivativeResponse;
};
