import { BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
    /** The number of fee accruals after which an auction should be started */
    feeAccrualAuctionThreshold: bigint;
    /**
     * Emission rate factor. Specifically, the number of blocks over which to distribute
     * some amount of staking rewards.
     */
    rewardEmissionPeriod: bigint;
    /** The initial rate at which auctions should decrease their denom's price in SOMM */
    initialPriceDecreaseRate: string;
    /** Number of blocks between auction price decreases */
    priceDecreaseBlockInterval: bigint;
    /** The interval between starting auctions */
    auctionInterval: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/cellarfees.v1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
    /** The number of fee accruals after which an auction should be started */
    fee_accrual_auction_threshold?: string;
    /**
     * Emission rate factor. Specifically, the number of blocks over which to distribute
     * some amount of staking rewards.
     */
    reward_emission_period?: string;
    /** The initial rate at which auctions should decrease their denom's price in SOMM */
    initial_price_decrease_rate?: string;
    /** Number of blocks between auction price decreases */
    price_decrease_block_interval?: string;
    /** The interval between starting auctions */
    auction_interval?: string;
}
export interface ParamsAminoMsg {
    type: "/cellarfees.v1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    fee_accrual_auction_threshold: bigint;
    reward_emission_period: bigint;
    initial_price_decrease_rate: string;
    price_decrease_block_interval: bigint;
    auction_interval: bigint;
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
