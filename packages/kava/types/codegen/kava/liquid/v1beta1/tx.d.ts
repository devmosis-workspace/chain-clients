import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** MsgMintDerivative defines the Msg/MintDerivative request type. */
export interface MsgMintDerivative {
    /** sender is the owner of the delegation to be converted */
    sender: string;
    /** validator is the validator of the delegation to be converted */
    validator: string;
    /** amount is the quantity of staked assets to be converted */
    amount: Coin;
}
export interface MsgMintDerivativeProtoMsg {
    typeUrl: "/kava.liquid.v1beta1.MsgMintDerivative";
    value: Uint8Array;
}
/** MsgMintDerivative defines the Msg/MintDerivative request type. */
export interface MsgMintDerivativeAmino {
    /** sender is the owner of the delegation to be converted */
    sender: string;
    /** validator is the validator of the delegation to be converted */
    validator: string;
    /** amount is the quantity of staked assets to be converted */
    amount?: CoinAmino;
}
export interface MsgMintDerivativeAminoMsg {
    type: "/kava.liquid.v1beta1.MsgMintDerivative";
    value: MsgMintDerivativeAmino;
}
/** MsgMintDerivative defines the Msg/MintDerivative request type. */
export interface MsgMintDerivativeSDKType {
    sender: string;
    validator: string;
    amount: CoinSDKType;
}
/** MsgMintDerivativeResponse defines the Msg/MintDerivative response type. */
export interface MsgMintDerivativeResponse {
    /** received is the amount of staking derivative minted and sent to the sender */
    received: Coin;
}
export interface MsgMintDerivativeResponseProtoMsg {
    typeUrl: "/kava.liquid.v1beta1.MsgMintDerivativeResponse";
    value: Uint8Array;
}
/** MsgMintDerivativeResponse defines the Msg/MintDerivative response type. */
export interface MsgMintDerivativeResponseAmino {
    /** received is the amount of staking derivative minted and sent to the sender */
    received?: CoinAmino;
}
export interface MsgMintDerivativeResponseAminoMsg {
    type: "/kava.liquid.v1beta1.MsgMintDerivativeResponse";
    value: MsgMintDerivativeResponseAmino;
}
/** MsgMintDerivativeResponse defines the Msg/MintDerivative response type. */
export interface MsgMintDerivativeResponseSDKType {
    received: CoinSDKType;
}
/** MsgBurnDerivative defines the Msg/BurnDerivative request type. */
export interface MsgBurnDerivative {
    /** sender is the owner of the derivatives to be converted */
    sender: string;
    /** validator is the validator of the derivatives to be converted */
    validator: string;
    /** amount is the quantity of derivatives to be converted */
    amount: Coin;
}
export interface MsgBurnDerivativeProtoMsg {
    typeUrl: "/kava.liquid.v1beta1.MsgBurnDerivative";
    value: Uint8Array;
}
/** MsgBurnDerivative defines the Msg/BurnDerivative request type. */
export interface MsgBurnDerivativeAmino {
    /** sender is the owner of the derivatives to be converted */
    sender: string;
    /** validator is the validator of the derivatives to be converted */
    validator: string;
    /** amount is the quantity of derivatives to be converted */
    amount?: CoinAmino;
}
export interface MsgBurnDerivativeAminoMsg {
    type: "/kava.liquid.v1beta1.MsgBurnDerivative";
    value: MsgBurnDerivativeAmino;
}
/** MsgBurnDerivative defines the Msg/BurnDerivative request type. */
export interface MsgBurnDerivativeSDKType {
    sender: string;
    validator: string;
    amount: CoinSDKType;
}
/** MsgBurnDerivativeResponse defines the Msg/BurnDerivative response type. */
export interface MsgBurnDerivativeResponse {
    /** received is the number of delegation shares sent to the sender */
    received: string;
}
export interface MsgBurnDerivativeResponseProtoMsg {
    typeUrl: "/kava.liquid.v1beta1.MsgBurnDerivativeResponse";
    value: Uint8Array;
}
/** MsgBurnDerivativeResponse defines the Msg/BurnDerivative response type. */
export interface MsgBurnDerivativeResponseAmino {
    /** received is the number of delegation shares sent to the sender */
    received: string;
}
export interface MsgBurnDerivativeResponseAminoMsg {
    type: "/kava.liquid.v1beta1.MsgBurnDerivativeResponse";
    value: MsgBurnDerivativeResponseAmino;
}
/** MsgBurnDerivativeResponse defines the Msg/BurnDerivative response type. */
export interface MsgBurnDerivativeResponseSDKType {
    received: string;
}
export declare const MsgMintDerivative: {
    typeUrl: string;
    encode(message: MsgMintDerivative, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgMintDerivative;
    fromPartial(object: Partial<MsgMintDerivative>): MsgMintDerivative;
    fromAmino(object: MsgMintDerivativeAmino): MsgMintDerivative;
    toAmino(message: MsgMintDerivative): MsgMintDerivativeAmino;
    fromAminoMsg(object: MsgMintDerivativeAminoMsg): MsgMintDerivative;
    fromProtoMsg(message: MsgMintDerivativeProtoMsg): MsgMintDerivative;
    toProto(message: MsgMintDerivative): Uint8Array;
    toProtoMsg(message: MsgMintDerivative): MsgMintDerivativeProtoMsg;
};
export declare const MsgMintDerivativeResponse: {
    typeUrl: string;
    encode(message: MsgMintDerivativeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgMintDerivativeResponse;
    fromPartial(object: Partial<MsgMintDerivativeResponse>): MsgMintDerivativeResponse;
    fromAmino(object: MsgMintDerivativeResponseAmino): MsgMintDerivativeResponse;
    toAmino(message: MsgMintDerivativeResponse): MsgMintDerivativeResponseAmino;
    fromAminoMsg(object: MsgMintDerivativeResponseAminoMsg): MsgMintDerivativeResponse;
    fromProtoMsg(message: MsgMintDerivativeResponseProtoMsg): MsgMintDerivativeResponse;
    toProto(message: MsgMintDerivativeResponse): Uint8Array;
    toProtoMsg(message: MsgMintDerivativeResponse): MsgMintDerivativeResponseProtoMsg;
};
export declare const MsgBurnDerivative: {
    typeUrl: string;
    encode(message: MsgBurnDerivative, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBurnDerivative;
    fromPartial(object: Partial<MsgBurnDerivative>): MsgBurnDerivative;
    fromAmino(object: MsgBurnDerivativeAmino): MsgBurnDerivative;
    toAmino(message: MsgBurnDerivative): MsgBurnDerivativeAmino;
    fromAminoMsg(object: MsgBurnDerivativeAminoMsg): MsgBurnDerivative;
    fromProtoMsg(message: MsgBurnDerivativeProtoMsg): MsgBurnDerivative;
    toProto(message: MsgBurnDerivative): Uint8Array;
    toProtoMsg(message: MsgBurnDerivative): MsgBurnDerivativeProtoMsg;
};
export declare const MsgBurnDerivativeResponse: {
    typeUrl: string;
    encode(message: MsgBurnDerivativeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBurnDerivativeResponse;
    fromPartial(object: Partial<MsgBurnDerivativeResponse>): MsgBurnDerivativeResponse;
    fromAmino(object: MsgBurnDerivativeResponseAmino): MsgBurnDerivativeResponse;
    toAmino(message: MsgBurnDerivativeResponse): MsgBurnDerivativeResponseAmino;
    fromAminoMsg(object: MsgBurnDerivativeResponseAminoMsg): MsgBurnDerivativeResponse;
    fromProtoMsg(message: MsgBurnDerivativeResponseProtoMsg): MsgBurnDerivativeResponse;
    toProto(message: MsgBurnDerivativeResponse): Uint8Array;
    toProtoMsg(message: MsgBurnDerivativeResponse): MsgBurnDerivativeResponseProtoMsg;
};
