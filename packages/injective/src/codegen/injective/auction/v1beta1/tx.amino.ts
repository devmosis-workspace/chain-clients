import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/injective.auction.v1beta1.MsgBid": {
    aminoType: "/injective.auction.v1beta1.MsgBid",
    toAmino: ({
      sender,
      bidAmount,
      round
    }: MsgBid): MsgBidAminoType["value"] => {
      return {
        sender,
        bid_amount: {
          denom: bidAmount.denom,
          amount: Long.fromValue(bidAmount.amount).toString()
        },
        round: round.toString()
      };
    },
    fromAmino: ({
      sender,
      bid_amount,
      round
    }: MsgBidAminoType["value"]): MsgBid => {
      return {
        sender,
        bidAmount: {
          denom: bid_amount.denom,
          amount: bid_amount.amount
        },
        round: Long.fromString(round)
      };
    }
  },
  "/injective.auction.v1beta1.MsgUpdateParams": {
    aminoType: "/injective.auction.v1beta1.MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          auction_period: params.auctionPeriod.toString(),
          min_next_bid_increment_rate: params.minNextBidIncrementRate
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          auctionPeriod: Long.fromString(params.auction_period),
          minNextBidIncrementRate: params.min_next_bid_increment_rate
        }
      };
    }
  }
};