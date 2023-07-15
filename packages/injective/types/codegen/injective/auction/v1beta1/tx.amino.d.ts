import { AminoMsg } from "@cosmjs/amino";
import { MsgBid, MsgUpdateParams } from "./tx";
export interface MsgBidAminoType extends AminoMsg {
    type: "/injective.auction.v1beta1.MsgBid";
    value: {
        sender: string;
        bid_amount: {
            denom: string;
            amount: string;
        };
        round: string;
    };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "/injective.auction.v1beta1.MsgUpdateParams";
    value: {
        authority: string;
        params: {
            auction_period: string;
            min_next_bid_increment_rate: string;
        };
    };
}
export declare const AminoConverter: {
    "/injective.auction.v1beta1.MsgBid": {
        aminoType: string;
        toAmino: ({ sender, bidAmount, round }: MsgBid) => MsgBidAminoType["value"];
        fromAmino: ({ sender, bid_amount, round }: MsgBidAminoType["value"]) => MsgBid;
    };
    "/injective.auction.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
