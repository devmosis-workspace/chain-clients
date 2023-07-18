import { AminoMsg } from "@cosmjs/amino";
import { MsgPlaceBid } from "./tx";
export interface MsgPlaceBidAminoType extends AminoMsg {
    type: "/kava.auction.v1beta1.MsgPlaceBid";
    value: {
        auction_id: string;
        bidder: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export declare const AminoConverter: {
    "/kava.auction.v1beta1.MsgPlaceBid": {
        aminoType: string;
        toAmino: ({ auctionId, bidder, amount }: MsgPlaceBid) => MsgPlaceBidAminoType["value"];
        fromAmino: ({ auction_id, bidder, amount }: MsgPlaceBidAminoType["value"]) => MsgPlaceBid;
    };
};
