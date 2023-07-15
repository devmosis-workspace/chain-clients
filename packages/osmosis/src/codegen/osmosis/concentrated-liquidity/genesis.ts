import { TickInfo, TickInfoSDKType } from "./tickInfo";
import { Any, AnySDKType } from "../../google/protobuf/any";
import { IncentiveRecord, IncentiveRecordSDKType } from "./incentive_record";
import { Position, PositionSDKType } from "./position";
import { Record, RecordSDKType, AccumulatorContent, AccumulatorContentSDKType } from "../accum/v1beta1/accum";
import { Params, ParamsSDKType } from "./params";
import { Long, isSet } from "../../helpers";
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
function createBaseFullTick(): FullTick {
  return {
    poolId: Long.UZERO,
    tickIndex: Long.ZERO,
    info: undefined
  };
}
export const FullTick = {
  encode(message: FullTick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.tickIndex.isZero()) {
      writer.uint32(16).int64(message.tickIndex);
    }
    if (message.info !== undefined) {
      TickInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): FullTick {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tickIndex: isSet(object.tickIndex) ? Long.fromValue(object.tickIndex) : Long.ZERO,
      info: isSet(object.info) ? TickInfo.fromJSON(object.info) : undefined
    };
  },
  fromPartial(object: Partial<FullTick>): FullTick {
    const message = createBaseFullTick();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tickIndex = object.tickIndex !== undefined && object.tickIndex !== null ? Long.fromValue(object.tickIndex) : Long.ZERO;
    message.info = object.info !== undefined && object.info !== null ? TickInfo.fromPartial(object.info) : undefined;
    return message;
  }
};
function createBasePoolData(): PoolData {
  return {
    pool: undefined,
    ticks: [],
    spreadRewardAccumulator: undefined,
    incentivesAccumulators: [],
    incentiveRecords: []
  };
}
export const PoolData = {
  encode(message: PoolData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Any.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.ticks) {
      FullTick.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.spreadRewardAccumulator !== undefined) {
      AccumObject.encode(message.spreadRewardAccumulator, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.incentivesAccumulators) {
      AccumObject.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.incentiveRecords) {
      IncentiveRecord.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PoolData {
    return {
      pool: isSet(object.pool) ? Any.fromJSON(object.pool) : undefined,
      ticks: Array.isArray(object?.ticks) ? object.ticks.map((e: any) => FullTick.fromJSON(e)) : [],
      spreadRewardAccumulator: isSet(object.spreadRewardAccumulator) ? AccumObject.fromJSON(object.spreadRewardAccumulator) : undefined,
      incentivesAccumulators: Array.isArray(object?.incentivesAccumulators) ? object.incentivesAccumulators.map((e: any) => AccumObject.fromJSON(e)) : [],
      incentiveRecords: Array.isArray(object?.incentiveRecords) ? object.incentiveRecords.map((e: any) => IncentiveRecord.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<PoolData>): PoolData {
    const message = createBasePoolData();
    message.pool = object.pool !== undefined && object.pool !== null ? Any.fromPartial(object.pool) : undefined;
    message.ticks = object.ticks?.map(e => FullTick.fromPartial(e)) || [];
    message.spreadRewardAccumulator = object.spreadRewardAccumulator !== undefined && object.spreadRewardAccumulator !== null ? AccumObject.fromPartial(object.spreadRewardAccumulator) : undefined;
    message.incentivesAccumulators = object.incentivesAccumulators?.map(e => AccumObject.fromPartial(e)) || [];
    message.incentiveRecords = object.incentiveRecords?.map(e => IncentiveRecord.fromPartial(e)) || [];
    return message;
  }
};
function createBasePositionData(): PositionData {
  return {
    position: undefined,
    lockId: Long.UZERO,
    spreadRewardAccumRecord: undefined,
    uptimeAccumRecords: []
  };
}
export const PositionData = {
  encode(message: PositionData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (!message.lockId.isZero()) {
      writer.uint32(16).uint64(message.lockId);
    }
    if (message.spreadRewardAccumRecord !== undefined) {
      Record.encode(message.spreadRewardAccumRecord, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.uptimeAccumRecords) {
      Record.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PositionData {
    return {
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined,
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO,
      spreadRewardAccumRecord: isSet(object.spreadRewardAccumRecord) ? Record.fromJSON(object.spreadRewardAccumRecord) : undefined,
      uptimeAccumRecords: Array.isArray(object?.uptimeAccumRecords) ? object.uptimeAccumRecords.map((e: any) => Record.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<PositionData>): PositionData {
    const message = createBasePositionData();
    message.position = object.position !== undefined && object.position !== null ? Position.fromPartial(object.position) : undefined;
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    message.spreadRewardAccumRecord = object.spreadRewardAccumRecord !== undefined && object.spreadRewardAccumRecord !== null ? Record.fromPartial(object.spreadRewardAccumRecord) : undefined;
    message.uptimeAccumRecords = object.uptimeAccumRecords?.map(e => Record.fromPartial(e)) || [];
    return message;
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    poolData: [],
    positionData: [],
    nextPositionId: Long.UZERO,
    nextIncentiveRecordId: Long.UZERO
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.poolData) {
      PoolData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.positionData) {
      PositionData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (!message.nextPositionId.isZero()) {
      writer.uint32(32).uint64(message.nextPositionId);
    }
    if (!message.nextIncentiveRecordId.isZero()) {
      writer.uint32(40).uint64(message.nextIncentiveRecordId);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      poolData: Array.isArray(object?.poolData) ? object.poolData.map((e: any) => PoolData.fromJSON(e)) : [],
      positionData: Array.isArray(object?.positionData) ? object.positionData.map((e: any) => PositionData.fromJSON(e)) : [],
      nextPositionId: isSet(object.nextPositionId) ? Long.fromValue(object.nextPositionId) : Long.UZERO,
      nextIncentiveRecordId: isSet(object.nextIncentiveRecordId) ? Long.fromValue(object.nextIncentiveRecordId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.poolData = object.poolData?.map(e => PoolData.fromPartial(e)) || [];
    message.positionData = object.positionData?.map(e => PositionData.fromPartial(e)) || [];
    message.nextPositionId = object.nextPositionId !== undefined && object.nextPositionId !== null ? Long.fromValue(object.nextPositionId) : Long.UZERO;
    message.nextIncentiveRecordId = object.nextIncentiveRecordId !== undefined && object.nextIncentiveRecordId !== null ? Long.fromValue(object.nextIncentiveRecordId) : Long.UZERO;
    return message;
  }
};
function createBaseAccumObject(): AccumObject {
  return {
    name: "",
    accumContent: undefined
  };
}
export const AccumObject = {
  encode(message: AccumObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.accumContent !== undefined) {
      AccumulatorContent.encode(message.accumContent, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AccumObject {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      accumContent: isSet(object.accumContent) ? AccumulatorContent.fromJSON(object.accumContent) : undefined
    };
  },
  fromPartial(object: Partial<AccumObject>): AccumObject {
    const message = createBaseAccumObject();
    message.name = object.name ?? "";
    message.accumContent = object.accumContent !== undefined && object.accumContent !== null ? AccumulatorContent.fromPartial(object.accumContent) : undefined;
    return message;
  }
};