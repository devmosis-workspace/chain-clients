import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the genesis state of the x/builder module. */
export interface GenesisState {
    /** GenesisState defines the genesis state of the x/builder module. */
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/pob.builder.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the genesis state of the x/builder module. */
export interface GenesisStateAmino {
    /** GenesisState defines the genesis state of the x/builder module. */
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/pob.builder.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the genesis state of the x/builder module. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
}
/** Params defines the parameters of the x/builder module. */
export interface Params {
    /**
     * max_bundle_size is the maximum number of transactions that can be bundled
     * in a single bundle.
     */
    maxBundleSize: number;
    /**
     * escrow_account_address is the address of the account that will receive a
     * portion of the bid proceeds.
     */
    escrowAccountAddress: Uint8Array;
    /** reserve_fee specifies the bid floor for the auction. */
    reserveFee: Coin;
    /**
     * min_bid_increment specifies the minimum amount that the next bid must be
     * greater than the previous bid.
     */
    minBidIncrement: Coin;
    /**
     * front_running_protection specifies whether front running and sandwich
     * attack protection is enabled.
     */
    frontRunningProtection: boolean;
    /**
     * proposer_fee defines the portion of the winning bid that goes to the block
     * proposer that proposed the block.
     */
    proposerFee: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/pob.builder.v1.Params";
    value: Uint8Array;
}
/** Params defines the parameters of the x/builder module. */
export interface ParamsAmino {
    /**
     * max_bundle_size is the maximum number of transactions that can be bundled
     * in a single bundle.
     */
    max_bundle_size?: number;
    /**
     * escrow_account_address is the address of the account that will receive a
     * portion of the bid proceeds.
     */
    escrow_account_address?: string;
    /** reserve_fee specifies the bid floor for the auction. */
    reserve_fee: CoinAmino;
    /**
     * min_bid_increment specifies the minimum amount that the next bid must be
     * greater than the previous bid.
     */
    min_bid_increment: CoinAmino;
    /**
     * front_running_protection specifies whether front running and sandwich
     * attack protection is enabled.
     */
    front_running_protection?: boolean;
    /**
     * proposer_fee defines the portion of the winning bid that goes to the block
     * proposer that proposed the block.
     */
    proposer_fee?: string;
}
export interface ParamsAminoMsg {
    type: "cosmos-sdk/x/builder/Params";
    value: ParamsAmino;
}
/** Params defines the parameters of the x/builder module. */
export interface ParamsSDKType {
    max_bundle_size: number;
    escrow_account_address: Uint8Array;
    reserve_fee: CoinSDKType;
    min_bid_increment: CoinSDKType;
    front_running_protection: boolean;
    proposer_fee: string;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
