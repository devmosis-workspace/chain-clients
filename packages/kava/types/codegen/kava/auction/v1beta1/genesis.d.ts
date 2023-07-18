import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the auction module's genesis state. */
export interface GenesisState {
    nextAuctionId: Long;
    params?: Params;
    /** Genesis auctions */
    auctions: Any[];
}
/** GenesisState defines the auction module's genesis state. */
export interface GenesisStateSDKType {
    next_auction_id: Long;
    params?: ParamsSDKType;
    auctions: AnySDKType[];
}
/** Params defines the parameters for the issuance module. */
export interface Params {
    maxAuctionDuration?: Duration;
    forwardBidDuration?: Duration;
    reverseBidDuration?: Duration;
    incrementSurplus: Uint8Array;
    incrementDebt: Uint8Array;
    incrementCollateral: Uint8Array;
}
/** Params defines the parameters for the issuance module. */
export interface ParamsSDKType {
    max_auction_duration?: DurationSDKType;
    forward_bid_duration?: DurationSDKType;
    reverse_bid_duration?: DurationSDKType;
    increment_surplus: Uint8Array;
    increment_debt: Uint8Array;
    increment_collateral: Uint8Array;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
