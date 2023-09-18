import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** MsgGovUpdateMinGasPrice is a request type for the Msg/GovUpdateMinGasPrice. */
export interface MsgGovUpdateMinGasPrice {
    /** authority must be the address of the governance account. */
    authority: string;
    minGasPrice: DecCoin;
}
export interface MsgGovUpdateMinGasPriceProtoMsg {
    typeUrl: "/umee.ugov.v1.MsgGovUpdateMinGasPrice";
    value: Uint8Array;
}
/** MsgGovUpdateMinGasPrice is a request type for the Msg/GovUpdateMinGasPrice. */
export interface MsgGovUpdateMinGasPriceAmino {
    /** authority must be the address of the governance account. */
    authority: string;
    min_gas_price?: DecCoinAmino;
}
export interface MsgGovUpdateMinGasPriceAminoMsg {
    type: "/umee.ugov.v1.MsgGovUpdateMinGasPrice";
    value: MsgGovUpdateMinGasPriceAmino;
}
/** MsgGovUpdateMinGasPrice is a request type for the Msg/GovUpdateMinGasPrice. */
export interface MsgGovUpdateMinGasPriceSDKType {
    authority: string;
    min_gas_price: DecCoinSDKType;
}
/** MsgGovUpdateMinGasPriceResponse is a response type for the Msg/GovUpdateMinGasPrice. */
export interface MsgGovUpdateMinGasPriceResponse {
}
export interface MsgGovUpdateMinGasPriceResponseProtoMsg {
    typeUrl: "/umee.ugov.v1.MsgGovUpdateMinGasPriceResponse";
    value: Uint8Array;
}
/** MsgGovUpdateMinGasPriceResponse is a response type for the Msg/GovUpdateMinGasPrice. */
export interface MsgGovUpdateMinGasPriceResponseAmino {
}
export interface MsgGovUpdateMinGasPriceResponseAminoMsg {
    type: "/umee.ugov.v1.MsgGovUpdateMinGasPriceResponse";
    value: MsgGovUpdateMinGasPriceResponseAmino;
}
/** MsgGovUpdateMinGasPriceResponse is a response type for the Msg/GovUpdateMinGasPrice. */
export interface MsgGovUpdateMinGasPriceResponseSDKType {
}
export declare const MsgGovUpdateMinGasPrice: {
    typeUrl: string;
    encode(message: MsgGovUpdateMinGasPrice, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgGovUpdateMinGasPrice;
    fromPartial(object: Partial<MsgGovUpdateMinGasPrice>): MsgGovUpdateMinGasPrice;
    fromAmino(object: MsgGovUpdateMinGasPriceAmino): MsgGovUpdateMinGasPrice;
    toAmino(message: MsgGovUpdateMinGasPrice): MsgGovUpdateMinGasPriceAmino;
    fromAminoMsg(object: MsgGovUpdateMinGasPriceAminoMsg): MsgGovUpdateMinGasPrice;
    fromProtoMsg(message: MsgGovUpdateMinGasPriceProtoMsg): MsgGovUpdateMinGasPrice;
    toProto(message: MsgGovUpdateMinGasPrice): Uint8Array;
    toProtoMsg(message: MsgGovUpdateMinGasPrice): MsgGovUpdateMinGasPriceProtoMsg;
};
export declare const MsgGovUpdateMinGasPriceResponse: {
    typeUrl: string;
    encode(_: MsgGovUpdateMinGasPriceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgGovUpdateMinGasPriceResponse;
    fromPartial(_: Partial<MsgGovUpdateMinGasPriceResponse>): MsgGovUpdateMinGasPriceResponse;
    fromAmino(_: MsgGovUpdateMinGasPriceResponseAmino): MsgGovUpdateMinGasPriceResponse;
    toAmino(_: MsgGovUpdateMinGasPriceResponse): MsgGovUpdateMinGasPriceResponseAmino;
    fromAminoMsg(object: MsgGovUpdateMinGasPriceResponseAminoMsg): MsgGovUpdateMinGasPriceResponse;
    fromProtoMsg(message: MsgGovUpdateMinGasPriceResponseProtoMsg): MsgGovUpdateMinGasPriceResponse;
    toProto(message: MsgGovUpdateMinGasPriceResponse): Uint8Array;
    toProtoMsg(message: MsgGovUpdateMinGasPriceResponse): MsgGovUpdateMinGasPriceResponseProtoMsg;
};
