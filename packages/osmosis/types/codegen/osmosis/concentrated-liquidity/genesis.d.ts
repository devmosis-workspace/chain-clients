import { TickInfo, TickInfoSDKType } from "./tickInfo";
import { Any, AnySDKType } from "../../google/protobuf/any";
import { IncentiveRecord, IncentiveRecordSDKType } from "./incentive_record";
import { Position, PositionSDKType } from "./position";
import { Record, RecordSDKType, AccumulatorContent, AccumulatorContentSDKType } from "../accum/v1beta1/accum";
import { Params, ParamsSDKType } from "./params";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * FullTick contains tick index and pool id along with other tick model
 * information.
 */
export interface FullTick {
    /** pool id associated with the tick. */
    poolId: Long;
    /** tick's index. */
    tickIndex: Long;
    /** tick's info. */
    info?: TickInfo;
}
/**
 * FullTick contains tick index and pool id along with other tick model
 * information.
 */
export interface FullTickSDKType {
    pool_id: Long;
    tick_index: Long;
    info?: TickInfoSDKType;
}
/**
 * PoolData represents a serialized pool along with its ticks
 * for genesis state.
 */
export interface PoolData {
    /** pool struct */
    pool?: Any;
    /** pool's ticks */
    ticks: FullTick[];
    spreadRewardAccumulator?: AccumObject;
    incentivesAccumulators: AccumObject[];
    /** incentive records to be set */
    incentiveRecords: IncentiveRecord[];
}
/**
 * PoolData represents a serialized pool along with its ticks
 * for genesis state.
 */
export interface PoolDataSDKType {
    pool?: AnySDKType;
    ticks: FullTickSDKType[];
    spread_reward_accumulator?: AccumObjectSDKType;
    incentives_accumulators: AccumObjectSDKType[];
    incentive_records: IncentiveRecordSDKType[];
}
export interface PositionData {
    position?: Position;
    lockId: Long;
    spreadRewardAccumRecord?: Record;
    uptimeAccumRecords: Record[];
}
export interface PositionDataSDKType {
    position?: PositionSDKType;
    lock_id: Long;
    spread_reward_accum_record?: RecordSDKType;
    uptime_accum_records: RecordSDKType[];
}
/** GenesisState defines the concentrated liquidity module's genesis state. */
export interface GenesisState {
    /** params are all the parameters of the module */
    params?: Params;
    /** pool data containining serialized pool struct and ticks. */
    poolData: PoolData[];
    positionData: PositionData[];
    nextPositionId: Long;
    nextIncentiveRecordId: Long;
}
/** GenesisState defines the concentrated liquidity module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    pool_data: PoolDataSDKType[];
    position_data: PositionDataSDKType[];
    next_position_id: Long;
    next_incentive_record_id: Long;
}
export interface AccumObject {
    /** Accumulator's name (pulled from AccumulatorContent) */
    name: string;
    accumContent?: AccumulatorContent;
}
export interface AccumObjectSDKType {
    name: string;
    accum_content?: AccumulatorContentSDKType;
}
export declare const FullTick: {
    encode(message: FullTick, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): FullTick;
    fromPartial(object: Partial<FullTick>): FullTick;
};
export declare const PoolData: {
    encode(message: PoolData, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PoolData;
    fromPartial(object: Partial<PoolData>): PoolData;
};
export declare const PositionData: {
    encode(message: PositionData, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PositionData;
    fromPartial(object: Partial<PositionData>): PositionData;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const AccumObject: {
    encode(message: AccumObject, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccumObject;
    fromPartial(object: Partial<AccumObject>): AccumObject;
};
