import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * A TWAP record should be indexed in state by pool_id, (asset pair), timestamp
 * The asset pair assets should be lexicographically sorted.
 * Technically (pool_id, asset_0_denom, asset_1_denom, height) do not need to
 * appear in the struct however we view this as the wrong performance tradeoff
 * given SDK today. Would rather we optimize for readability and correctness,
 * than an optimal state storage format. The system bottleneck is elsewhere for
 * now.
 */
export interface TwapRecord {
    poolId: Long;
    /** Lexicographically smaller denom of the pair */
    asset0Denom: string;
    /** Lexicographically larger denom of the pair */
    asset1Denom: string;
    /** height this record corresponds to, for debugging purposes */
    height: Long;
    /**
     * This field should only exist until we have a global registry in the state
     * machine, mapping prior block heights within {TIME RANGE} to times.
     */
    time?: Timestamp;
    /**
     * We store the last spot prices in the struct, so that we can interpolate
     * accumulator values for times between when accumulator records are stored.
     */
    p0LastSpotPrice: string;
    p1LastSpotPrice: string;
    p0ArithmeticTwapAccumulator: string;
    p1ArithmeticTwapAccumulator: string;
    geometricTwapAccumulator: string;
    /**
     * This field contains the time in which the last spot price error occured.
     * It is used to alert the caller if they are getting a potentially erroneous
     * TWAP, due to an unforeseen underlying error.
     */
    lastErrorTime?: Timestamp;
}
/**
 * A TWAP record should be indexed in state by pool_id, (asset pair), timestamp
 * The asset pair assets should be lexicographically sorted.
 * Technically (pool_id, asset_0_denom, asset_1_denom, height) do not need to
 * appear in the struct however we view this as the wrong performance tradeoff
 * given SDK today. Would rather we optimize for readability and correctness,
 * than an optimal state storage format. The system bottleneck is elsewhere for
 * now.
 */
export interface TwapRecordSDKType {
    pool_id: Long;
    asset0_denom: string;
    asset1_denom: string;
    height: Long;
    time?: TimestampSDKType;
    p0_last_spot_price: string;
    p1_last_spot_price: string;
    p0_arithmetic_twap_accumulator: string;
    p1_arithmetic_twap_accumulator: string;
    geometric_twap_accumulator: string;
    last_error_time?: TimestampSDKType;
}
export declare const TwapRecord: {
    encode(message: TwapRecord, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TwapRecord;
    fromPartial(object: Partial<TwapRecord>): TwapRecord;
};
