import { Params, ParamsSDKType, Bid, BidSDKType } from "./auction";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the auction module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of related to auction. */
    params?: Params;
    /** current auction round */
    auctionRound: Long;
    /** current highest bid */
    highestBid?: Bid;
    /** auction ending timestamp */
    auctionEndingTimestamp: Long;
}
/** GenesisState defines the auction module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    auction_round: Long;
    highest_bid?: BidSDKType;
    auction_ending_timestamp: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
