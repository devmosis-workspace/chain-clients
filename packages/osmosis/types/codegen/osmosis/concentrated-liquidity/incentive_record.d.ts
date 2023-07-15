import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { DecCoin, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * IncentiveRecord is the high-level struct we use to deal with an independent
 * incentive being distributed on a pool. Note that PoolId, Denom, and MinUptime
 * are included in the key so we avoid storing them in state, hence the
 * distinction between IncentiveRecord and IncentiveRecordBody.
 */
export interface IncentiveRecord {
    /** incentive_id is the id uniquely identifying this incentive record. */
    incentiveId: Long;
    poolId: Long;
    /** incentive record body holds necessary */
    incentiveRecordBody?: IncentiveRecordBody;
    /**
     * min_uptime is the minimum uptime required for liquidity to qualify for this
     * incentive. It should be always be one of the supported uptimes in
     * types.SupportedUptimes
     */
    minUptime?: Duration;
}
/**
 * IncentiveRecord is the high-level struct we use to deal with an independent
 * incentive being distributed on a pool. Note that PoolId, Denom, and MinUptime
 * are included in the key so we avoid storing them in state, hence the
 * distinction between IncentiveRecord and IncentiveRecordBody.
 */
export interface IncentiveRecordSDKType {
    incentive_id: Long;
    pool_id: Long;
    incentive_record_body?: IncentiveRecordBodySDKType;
    min_uptime?: DurationSDKType;
}
/**
 * IncentiveRecordBody represents the body stored in state for each individual
 * record.
 */
export interface IncentiveRecordBody {
    /** remaining_coin is the total amount of incentives to be distributed */
    remainingCoin?: DecCoin;
    /** emission_rate is the incentive emission rate per second */
    emissionRate: string;
    /** start_time is the time when the incentive starts distributing */
    startTime?: Timestamp;
}
/**
 * IncentiveRecordBody represents the body stored in state for each individual
 * record.
 */
export interface IncentiveRecordBodySDKType {
    remaining_coin?: DecCoinSDKType;
    emission_rate: string;
    start_time?: TimestampSDKType;
}
export declare const IncentiveRecord: {
    encode(message: IncentiveRecord, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): IncentiveRecord;
    fromPartial(object: Partial<IncentiveRecord>): IncentiveRecord;
};
export declare const IncentiveRecordBody: {
    encode(message: IncentiveRecordBody, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): IncentiveRecordBody;
    fromPartial(object: Partial<IncentiveRecordBody>): IncentiveRecordBody;
};
