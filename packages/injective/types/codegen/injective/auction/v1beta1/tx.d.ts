import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./auction";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Bid defines a SDK message for placing a bid for an auction */
export interface MsgBid {
    sender: string;
    /** amount of the bid in INJ tokens */
    bidAmount?: Coin;
    /** the current auction round being bid on */
    round: Long;
}
/** Bid defines a SDK message for placing a bid for an auction */
export interface MsgBidSDKType {
    sender: string;
    bid_amount?: CoinSDKType;
    round: Long;
}
export interface MsgBidResponse {
}
export interface MsgBidResponseSDKType {
}
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the ocr parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: Params;
}
export interface MsgUpdateParamsSDKType {
    authority: string;
    params?: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgBid: {
    encode(message: MsgBid, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBid;
    fromPartial(object: Partial<MsgBid>): MsgBid;
};
export declare const MsgBidResponse: {
    encode(_: MsgBidResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgBidResponse;
    fromPartial(_: Partial<MsgBidResponse>): MsgBidResponse;
};
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
};
