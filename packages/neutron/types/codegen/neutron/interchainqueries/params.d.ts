import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
    /**
     * Defines amount of blocks required before query becomes available for
     * removal by anybody
     */
    querySubmitTimeout: bigint;
    /** Amount of coins deposited for the query. */
    queryDeposit: Coin[];
    /**
     * Amount of tx hashes to be removed during a single EndBlock. Can vary to
     * balance between network cleaning speed and EndBlock duration. A zero value
     * means no limit.
     */
    txQueryRemovalLimit: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/neutron.interchainqueries.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
    /**
     * Defines amount of blocks required before query becomes available for
     * removal by anybody
     */
    query_submit_timeout?: string;
    /** Amount of coins deposited for the query. */
    query_deposit?: CoinAmino[];
    /**
     * Amount of tx hashes to be removed during a single EndBlock. Can vary to
     * balance between network cleaning speed and EndBlock duration. A zero value
     * means no limit.
     */
    tx_query_removal_limit?: string;
}
export interface ParamsAminoMsg {
    type: "/neutron.interchainqueries.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    query_submit_timeout: bigint;
    query_deposit: CoinSDKType[];
    tx_query_removal_limit: bigint;
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
