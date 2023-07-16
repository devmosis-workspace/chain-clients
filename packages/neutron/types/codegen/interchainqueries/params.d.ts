import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */
export interface Params {
    /**
     * Defines amount of blocks required before query becomes available for
     * removal by anybody
     */
    querySubmitTimeout: Long;
    /** Amount of coins deposited for the query. */
    queryDeposit: Coin[];
    /**
     * Amount of tx hashes to be removed during a single EndBlock. Can vary to
     * balance between network cleaning speed and EndBlock duration. A zero value
     * means no limit.
     */
    txQueryRemovalLimit: Long;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    query_submit_timeout: Long;
    query_deposit: CoinSDKType[];
    tx_query_removal_limit: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
