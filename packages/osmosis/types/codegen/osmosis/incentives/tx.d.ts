import { QueryCondition, QueryConditionSDKType } from "../lockup/lock";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgCreateGauge creates a gague to distribute rewards to users */
export interface MsgCreateGauge {
    /**
     * is_perpetual shows if it's a perpetual or non-perpetual gauge
     * Non-perpetual gauges distribute their tokens equally per epoch while the
     * gauge is in the active period. Perpetual gauges distribute all their tokens
     * at a single time and only distribute their tokens again once the gauge is
     * refilled
     */
    isPerpetual: boolean;
    /** owner is the address of gauge creator */
    owner: string;
    /**
     * distribute_to show which lock the gauge should distribute to by time
     * duration or by timestamp
     */
    distributeTo?: QueryCondition;
    /** coins are coin(s) to be distributed by the gauge */
    coins: Coin[];
    /** start_time is the distribution start time */
    startTime?: Timestamp;
    /**
     * num_epochs_paid_over is the number of epochs distribution will be completed
     * over
     */
    numEpochsPaidOver: Long;
    /**
     * pool_id is the ID of the pool that the gauge is meant to be associated
     * with. if pool_id is set, then the "QueryCondition.LockQueryType" must be
     * "NoLock" with all other fields of the "QueryCondition.LockQueryType" struct
     * unset, including "QueryCondition.Denom". However, note that, internally,
     * the empty string in "QueryCondition.Denom" ends up being overwritten with
     * incentivestypes.NoLockExternalGaugeDenom(<pool-id>) so that the gauges
     * associated with a pool can be queried by this prefix if needed.
     */
    poolId: Long;
}
/** MsgCreateGauge creates a gague to distribute rewards to users */
export interface MsgCreateGaugeSDKType {
    is_perpetual: boolean;
    owner: string;
    distribute_to?: QueryConditionSDKType;
    coins: CoinSDKType[];
    start_time?: TimestampSDKType;
    num_epochs_paid_over: Long;
    pool_id: Long;
}
export interface MsgCreateGaugeResponse {
}
export interface MsgCreateGaugeResponseSDKType {
}
/** MsgAddToGauge adds coins to a previously created gauge */
export interface MsgAddToGauge {
    /** owner is the gauge owner's address */
    owner: string;
    /** gauge_id is the ID of gauge that rewards are getting added to */
    gaugeId: Long;
    /** rewards are the coin(s) to add to gauge */
    rewards: Coin[];
}
/** MsgAddToGauge adds coins to a previously created gauge */
export interface MsgAddToGaugeSDKType {
    owner: string;
    gauge_id: Long;
    rewards: CoinSDKType[];
}
export interface MsgAddToGaugeResponse {
}
export interface MsgAddToGaugeResponseSDKType {
}
export declare const MsgCreateGauge: {
    encode(message: MsgCreateGauge, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateGauge;
    fromPartial(object: Partial<MsgCreateGauge>): MsgCreateGauge;
};
export declare const MsgCreateGaugeResponse: {
    encode(_: MsgCreateGaugeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCreateGaugeResponse;
    fromPartial(_: Partial<MsgCreateGaugeResponse>): MsgCreateGaugeResponse;
};
export declare const MsgAddToGauge: {
    encode(message: MsgAddToGauge, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgAddToGauge;
    fromPartial(object: Partial<MsgAddToGauge>): MsgAddToGauge;
};
export declare const MsgAddToGaugeResponse: {
    encode(_: MsgAddToGaugeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgAddToGaugeResponse;
    fromPartial(_: Partial<MsgAddToGaugeResponse>): MsgAddToGaugeResponse;
};
