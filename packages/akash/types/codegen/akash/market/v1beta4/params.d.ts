import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** Params is the params for the x/market module */
export interface Params {
    bidMinDeposit: Coin;
    orderMaxBids: number;
}
export interface ParamsProtoMsg {
    typeUrl: "/akash.market.v1beta4.Params";
    value: Uint8Array;
}
/** Params is the params for the x/market module */
export interface ParamsAmino {
    bid_min_deposit?: CoinAmino;
    order_max_bids?: number;
}
export interface ParamsAminoMsg {
    type: "/akash.market.v1beta4.Params";
    value: ParamsAmino;
}
/** Params is the params for the x/market module */
export interface ParamsSDKType {
    bid_min_deposit: CoinSDKType;
    order_max_bids: number;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
