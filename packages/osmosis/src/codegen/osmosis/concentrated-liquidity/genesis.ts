import { TickInfo, TickInfoAmino, TickInfoSDKType } from "./tickInfo";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { IncentiveRecord, IncentiveRecordAmino, IncentiveRecordSDKType } from "./incentive_record";
import { Position, PositionAmino, PositionSDKType } from "./position";
import { Record, RecordAmino, RecordSDKType, AccumulatorContent, AccumulatorContentAmino, AccumulatorContentSDKType } from "../accum/v1beta1/accum";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool as Pool1 } from "./pool";
import { PoolProtoMsg as Pool1ProtoMsg } from "./pool";
import { PoolSDKType as Pool1SDKType } from "./pool";
import { CosmWasmPool, CosmWasmPoolProtoMsg, CosmWasmPoolSDKType } from "../cosmwasmpool/v1beta1/model/pool";
import { Pool as Pool2 } from "../gamm/pool-models/balancer/balancerPool";
import { PoolProtoMsg as Pool2ProtoMsg } from "../gamm/pool-models/balancer/balancerPool";
import { PoolSDKType as Pool2SDKType } from "../gamm/pool-models/balancer/balancerPool";
import { Pool as Pool3 } from "../gamm/pool-models/stableswap/stableswap_pool";
import { PoolProtoMsg as Pool3ProtoMsg } from "../gamm/pool-models/stableswap/stableswap_pool";
import { PoolSDKType as Pool3SDKType } from "../gamm/pool-models/stableswap/stableswap_pool";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/**
 * FullTick contains tick index and pool id along with other tick model
 * information.
 */
export interface FullTick {
  /** pool id associated with the tick. */
  poolId: bigint;
  /** tick's index. */
  tickIndex: bigint;
  /** tick's info. */
  info: TickInfo;
}
export interface FullTickProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.FullTick";
  value: Uint8Array;
}
/**
 * FullTick contains tick index and pool id along with other tick model
 * information.
 */
export interface FullTickAmino {
  /** pool id associated with the tick. */
  pool_id: string;
  /** tick's index. */
  tick_index: string;
  /** tick's info. */
  info?: TickInfoAmino;
}
export interface FullTickAminoMsg {
  type: "osmosis/concentratedliquidity/full-tick";
  value: FullTickAmino;
}
/**
 * FullTick contains tick index and pool id along with other tick model
 * information.
 */
export interface FullTickSDKType {
  pool_id: bigint;
  tick_index: bigint;
  info: TickInfoSDKType;
}
/**
 * PoolData represents a serialized pool along with its ticks
 * for genesis state.
 */
export interface PoolData {
  /** pool struct */
  pool: (Pool1 & CosmWasmPool & Pool2 & Pool3 & Any) | undefined;
  /** pool's ticks */
  ticks: FullTick[];
  spreadRewardAccumulator: AccumObject;
  incentivesAccumulators: AccumObject[];
  /** incentive records to be set */
  incentiveRecords: IncentiveRecord[];
}
export interface PoolDataProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolData";
  value: Uint8Array;
}
export type PoolDataEncoded = Omit<PoolData, "pool"> & {
  /** pool struct */pool?: Pool1ProtoMsg | CosmWasmPoolProtoMsg | Pool2ProtoMsg | Pool3ProtoMsg | AnyProtoMsg | undefined;
};
/**
 * PoolData represents a serialized pool along with its ticks
 * for genesis state.
 */
export interface PoolDataAmino {
  /** pool struct */
  pool?: AnyAmino;
  /** pool's ticks */
  ticks: FullTickAmino[];
  spread_reward_accumulator?: AccumObjectAmino;
  incentives_accumulators: AccumObjectAmino[];
  /** incentive records to be set */
  incentive_records: IncentiveRecordAmino[];
}
export interface PoolDataAminoMsg {
  type: "osmosis/concentratedliquidity/pool-data";
  value: PoolDataAmino;
}
/**
 * PoolData represents a serialized pool along with its ticks
 * for genesis state.
 */
export interface PoolDataSDKType {
  pool: Pool1SDKType | CosmWasmPoolSDKType | Pool2SDKType | Pool3SDKType | AnySDKType | undefined;
  ticks: FullTickSDKType[];
  spread_reward_accumulator: AccumObjectSDKType;
  incentives_accumulators: AccumObjectSDKType[];
  incentive_records: IncentiveRecordSDKType[];
}
export interface PositionData {
  position: Position;
  lockId: bigint;
  spreadRewardAccumRecord: Record;
  uptimeAccumRecords: Record[];
}
export interface PositionDataProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionData";
  value: Uint8Array;
}
export interface PositionDataAmino {
  position?: PositionAmino;
  lock_id: string;
  spread_reward_accum_record?: RecordAmino;
  uptime_accum_records: RecordAmino[];
}
export interface PositionDataAminoMsg {
  type: "osmosis/concentratedliquidity/position-data";
  value: PositionDataAmino;
}
export interface PositionDataSDKType {
  position: PositionSDKType;
  lock_id: bigint;
  spread_reward_accum_record: RecordSDKType;
  uptime_accum_records: RecordSDKType[];
}
/** GenesisState defines the concentrated liquidity module's genesis state. */
export interface GenesisState {
  /** params are all the parameters of the module */
  params: Params;
  /** pool data containining serialized pool struct and ticks. */
  poolData: PoolData[];
  positionData: PositionData[];
  nextPositionId: bigint;
  nextIncentiveRecordId: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the concentrated liquidity module's genesis state. */
export interface GenesisStateAmino {
  /** params are all the parameters of the module */
  params?: ParamsAmino;
  /** pool data containining serialized pool struct and ticks. */
  pool_data: PoolDataAmino[];
  position_data: PositionDataAmino[];
  next_position_id: string;
  next_incentive_record_id: string;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/concentratedliquidity/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the concentrated liquidity module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  pool_data: PoolDataSDKType[];
  position_data: PositionDataSDKType[];
  next_position_id: bigint;
  next_incentive_record_id: bigint;
}
export interface AccumObject {
  /** Accumulator's name (pulled from AccumulatorContent) */
  name: string;
  accumContent: AccumulatorContent;
}
export interface AccumObjectProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.AccumObject";
  value: Uint8Array;
}
export interface AccumObjectAmino {
  /** Accumulator's name (pulled from AccumulatorContent) */
  name: string;
  accum_content?: AccumulatorContentAmino;
}
export interface AccumObjectAminoMsg {
  type: "osmosis/concentratedliquidity/accum-object";
  value: AccumObjectAmino;
}
export interface AccumObjectSDKType {
  name: string;
  accum_content: AccumulatorContentSDKType;
}
function createBaseFullTick(): FullTick {
  return {
    poolId: BigInt(0),
    tickIndex: BigInt(0),
    info: TickInfo.fromPartial({})
  };
}
export const FullTick = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.FullTick",
  encode(message: FullTick, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tickIndex !== BigInt(0)) {
      writer.uint32(16).int64(message.tickIndex);
    }
    if (message.info !== undefined) {
      TickInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): FullTick {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tickIndex: isSet(object.tickIndex) ? BigInt(object.tickIndex.toString()) : BigInt(0),
      info: isSet(object.info) ? TickInfo.fromJSON(object.info) : undefined
    };
  },
  fromPartial(object: Partial<FullTick>): FullTick {
    const message = createBaseFullTick();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tickIndex = object.tickIndex !== undefined && object.tickIndex !== null ? BigInt(object.tickIndex.toString()) : BigInt(0);
    message.info = object.info !== undefined && object.info !== null ? TickInfo.fromPartial(object.info) : undefined;
    return message;
  },
  fromAmino(object: FullTickAmino): FullTick {
    return {
      poolId: BigInt(object.pool_id),
      tickIndex: BigInt(object.tick_index),
      info: object?.info ? TickInfo.fromAmino(object.info) : undefined
    };
  },
  toAmino(message: FullTick): FullTickAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.tick_index = message.tickIndex ? message.tickIndex.toString() : undefined;
    obj.info = message.info ? TickInfo.toAmino(message.info) : undefined;
    return obj;
  },
  fromAminoMsg(object: FullTickAminoMsg): FullTick {
    return FullTick.fromAmino(object.value);
  },
  toAminoMsg(message: FullTick): FullTickAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/full-tick",
      value: FullTick.toAmino(message)
    };
  },
  fromProtoMsg(message: FullTickProtoMsg): FullTick {
    return FullTick.decode(message.value);
  },
  toProto(message: FullTick): Uint8Array {
    return FullTick.encode(message).finish();
  },
  toProtoMsg(message: FullTick): FullTickProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.FullTick",
      value: FullTick.encode(message).finish()
    };
  }
};
function createBasePoolData(): PoolData {
  return {
    pool: Any.fromPartial({}),
    ticks: [],
    spreadRewardAccumulator: AccumObject.fromPartial({}),
    incentivesAccumulators: [],
    incentiveRecords: []
  };
}
export const PoolData = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolData",
  encode(message: PoolData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Any.encode((message.pool as Any), writer.uint32(10).fork()).ldelim();
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
  },
  fromAmino(object: PoolDataAmino): PoolData {
    return {
      pool: object?.pool ? PoolI_FromAmino(object.pool) : undefined,
      ticks: Array.isArray(object?.ticks) ? object.ticks.map((e: any) => FullTick.fromAmino(e)) : [],
      spreadRewardAccumulator: object?.spread_reward_accumulator ? AccumObject.fromAmino(object.spread_reward_accumulator) : undefined,
      incentivesAccumulators: Array.isArray(object?.incentives_accumulators) ? object.incentives_accumulators.map((e: any) => AccumObject.fromAmino(e)) : [],
      incentiveRecords: Array.isArray(object?.incentive_records) ? object.incentive_records.map((e: any) => IncentiveRecord.fromAmino(e)) : []
    };
  },
  toAmino(message: PoolData): PoolDataAmino {
    const obj: any = {};
    obj.pool = message.pool ? PoolI_ToAmino((message.pool as Any)) : undefined;
    if (message.ticks) {
      obj.ticks = message.ticks.map(e => e ? FullTick.toAmino(e) : undefined);
    } else {
      obj.ticks = [];
    }
    obj.spread_reward_accumulator = message.spreadRewardAccumulator ? AccumObject.toAmino(message.spreadRewardAccumulator) : undefined;
    if (message.incentivesAccumulators) {
      obj.incentives_accumulators = message.incentivesAccumulators.map(e => e ? AccumObject.toAmino(e) : undefined);
    } else {
      obj.incentives_accumulators = [];
    }
    if (message.incentiveRecords) {
      obj.incentive_records = message.incentiveRecords.map(e => e ? IncentiveRecord.toAmino(e) : undefined);
    } else {
      obj.incentive_records = [];
    }
    return obj;
  },
  fromAminoMsg(object: PoolDataAminoMsg): PoolData {
    return PoolData.fromAmino(object.value);
  },
  toAminoMsg(message: PoolData): PoolDataAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/pool-data",
      value: PoolData.toAmino(message)
    };
  },
  fromProtoMsg(message: PoolDataProtoMsg): PoolData {
    return PoolData.decode(message.value);
  },
  toProto(message: PoolData): Uint8Array {
    return PoolData.encode(message).finish();
  },
  toProtoMsg(message: PoolData): PoolDataProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolData",
      value: PoolData.encode(message).finish()
    };
  }
};
function createBasePositionData(): PositionData {
  return {
    position: Position.fromPartial({}),
    lockId: BigInt(0),
    spreadRewardAccumRecord: Record.fromPartial({}),
    uptimeAccumRecords: []
  };
}
export const PositionData = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionData",
  encode(message: PositionData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.lockId !== BigInt(0)) {
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
      lockId: isSet(object.lockId) ? BigInt(object.lockId.toString()) : BigInt(0),
      spreadRewardAccumRecord: isSet(object.spreadRewardAccumRecord) ? Record.fromJSON(object.spreadRewardAccumRecord) : undefined,
      uptimeAccumRecords: Array.isArray(object?.uptimeAccumRecords) ? object.uptimeAccumRecords.map((e: any) => Record.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<PositionData>): PositionData {
    const message = createBasePositionData();
    message.position = object.position !== undefined && object.position !== null ? Position.fromPartial(object.position) : undefined;
    message.lockId = object.lockId !== undefined && object.lockId !== null ? BigInt(object.lockId.toString()) : BigInt(0);
    message.spreadRewardAccumRecord = object.spreadRewardAccumRecord !== undefined && object.spreadRewardAccumRecord !== null ? Record.fromPartial(object.spreadRewardAccumRecord) : undefined;
    message.uptimeAccumRecords = object.uptimeAccumRecords?.map(e => Record.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PositionDataAmino): PositionData {
    return {
      position: object?.position ? Position.fromAmino(object.position) : undefined,
      lockId: BigInt(object.lock_id),
      spreadRewardAccumRecord: object?.spread_reward_accum_record ? Record.fromAmino(object.spread_reward_accum_record) : undefined,
      uptimeAccumRecords: Array.isArray(object?.uptime_accum_records) ? object.uptime_accum_records.map((e: any) => Record.fromAmino(e)) : []
    };
  },
  toAmino(message: PositionData): PositionDataAmino {
    const obj: any = {};
    obj.position = message.position ? Position.toAmino(message.position) : undefined;
    obj.lock_id = message.lockId ? message.lockId.toString() : undefined;
    obj.spread_reward_accum_record = message.spreadRewardAccumRecord ? Record.toAmino(message.spreadRewardAccumRecord) : undefined;
    if (message.uptimeAccumRecords) {
      obj.uptime_accum_records = message.uptimeAccumRecords.map(e => e ? Record.toAmino(e) : undefined);
    } else {
      obj.uptime_accum_records = [];
    }
    return obj;
  },
  fromAminoMsg(object: PositionDataAminoMsg): PositionData {
    return PositionData.fromAmino(object.value);
  },
  toAminoMsg(message: PositionData): PositionDataAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/position-data",
      value: PositionData.toAmino(message)
    };
  },
  fromProtoMsg(message: PositionDataProtoMsg): PositionData {
    return PositionData.decode(message.value);
  },
  toProto(message: PositionData): Uint8Array {
    return PositionData.encode(message).finish();
  },
  toProtoMsg(message: PositionData): PositionDataProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionData",
      value: PositionData.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    poolData: [],
    positionData: [],
    nextPositionId: BigInt(0),
    nextIncentiveRecordId: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.poolData) {
      PoolData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.positionData) {
      PositionData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.nextPositionId !== BigInt(0)) {
      writer.uint32(32).uint64(message.nextPositionId);
    }
    if (message.nextIncentiveRecordId !== BigInt(0)) {
      writer.uint32(40).uint64(message.nextIncentiveRecordId);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      poolData: Array.isArray(object?.poolData) ? object.poolData.map((e: any) => PoolData.fromJSON(e)) : [],
      positionData: Array.isArray(object?.positionData) ? object.positionData.map((e: any) => PositionData.fromJSON(e)) : [],
      nextPositionId: isSet(object.nextPositionId) ? BigInt(object.nextPositionId.toString()) : BigInt(0),
      nextIncentiveRecordId: isSet(object.nextIncentiveRecordId) ? BigInt(object.nextIncentiveRecordId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.poolData = object.poolData?.map(e => PoolData.fromPartial(e)) || [];
    message.positionData = object.positionData?.map(e => PositionData.fromPartial(e)) || [];
    message.nextPositionId = object.nextPositionId !== undefined && object.nextPositionId !== null ? BigInt(object.nextPositionId.toString()) : BigInt(0);
    message.nextIncentiveRecordId = object.nextIncentiveRecordId !== undefined && object.nextIncentiveRecordId !== null ? BigInt(object.nextIncentiveRecordId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      poolData: Array.isArray(object?.pool_data) ? object.pool_data.map((e: any) => PoolData.fromAmino(e)) : [],
      positionData: Array.isArray(object?.position_data) ? object.position_data.map((e: any) => PositionData.fromAmino(e)) : [],
      nextPositionId: BigInt(object.next_position_id),
      nextIncentiveRecordId: BigInt(object.next_incentive_record_id)
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.poolData) {
      obj.pool_data = message.poolData.map(e => e ? PoolData.toAmino(e) : undefined);
    } else {
      obj.pool_data = [];
    }
    if (message.positionData) {
      obj.position_data = message.positionData.map(e => e ? PositionData.toAmino(e) : undefined);
    } else {
      obj.position_data = [];
    }
    obj.next_position_id = message.nextPositionId ? message.nextPositionId.toString() : undefined;
    obj.next_incentive_record_id = message.nextIncentiveRecordId ? message.nextIncentiveRecordId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/genesis-state",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseAccumObject(): AccumObject {
  return {
    name: "",
    accumContent: AccumulatorContent.fromPartial({})
  };
}
export const AccumObject = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.AccumObject",
  encode(message: AccumObject, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: AccumObjectAmino): AccumObject {
    return {
      name: object.name,
      accumContent: object?.accum_content ? AccumulatorContent.fromAmino(object.accum_content) : undefined
    };
  },
  toAmino(message: AccumObject): AccumObjectAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.accum_content = message.accumContent ? AccumulatorContent.toAmino(message.accumContent) : undefined;
    return obj;
  },
  fromAminoMsg(object: AccumObjectAminoMsg): AccumObject {
    return AccumObject.fromAmino(object.value);
  },
  toAminoMsg(message: AccumObject): AccumObjectAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/accum-object",
      value: AccumObject.toAmino(message)
    };
  },
  fromProtoMsg(message: AccumObjectProtoMsg): AccumObject {
    return AccumObject.decode(message.value);
  },
  toProto(message: AccumObject): Uint8Array {
    return AccumObject.encode(message).finish();
  },
  toProtoMsg(message: AccumObject): AccumObjectProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.AccumObject",
      value: AccumObject.encode(message).finish()
    };
  }
};
export const PoolI_InterfaceDecoder = (input: BinaryReader | Uint8Array): Pool1 | CosmWasmPool | Pool2 | Pool3 | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/osmosis.concentratedliquidity.v1beta1.Pool":
      return Pool1.decode(data.value);
    case "/osmosis.cosmwasmpool.v1beta1.CosmWasmPool":
      return CosmWasmPool.decode(data.value);
    case "/osmosis.gamm.v1beta1.Pool":
      return Pool2.decode(data.value);
    case "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool":
      return Pool3.decode(data.value);
    default:
      return data;
  }
};
export const PoolI_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "osmosis/concentratedliquidity/pool":
      return Any.fromPartial({
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.Pool",
        value: Pool1.encode(Pool1.fromPartial(Pool1.fromAmino(content.value))).finish()
      });
    case "osmosis/cosmwasmpool/cosm-wasm-pool":
      return Any.fromPartial({
        typeUrl: "/osmosis.cosmwasmpool.v1beta1.CosmWasmPool",
        value: CosmWasmPool.encode(CosmWasmPool.fromPartial(CosmWasmPool.fromAmino(content.value))).finish()
      });
    case "osmosis/gamm/BalancerPool":
      return Any.fromPartial({
        typeUrl: "/osmosis.gamm.v1beta1.Pool",
        value: Pool2.encode(Pool2.fromPartial(Pool2.fromAmino(content.value))).finish()
      });
    case "osmosis/gamm/StableswapPool":
      return Any.fromPartial({
        typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
        value: Pool3.encode(Pool3.fromPartial(Pool3.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const PoolI_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/osmosis.concentratedliquidity.v1beta1.Pool":
      return {
        type: "osmosis/concentratedliquidity/pool",
        value: Pool1.toAmino(Pool1.decode(content.value))
      };
    case "/osmosis.cosmwasmpool.v1beta1.CosmWasmPool":
      return {
        type: "osmosis/cosmwasmpool/cosm-wasm-pool",
        value: CosmWasmPool.toAmino(CosmWasmPool.decode(content.value))
      };
    case "/osmosis.gamm.v1beta1.Pool":
      return {
        type: "osmosis/gamm/BalancerPool",
        value: Pool2.toAmino(Pool2.decode(content.value))
      };
    case "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool":
      return {
        type: "osmosis/gamm/StableswapPool",
        value: Pool3.toAmino(Pool3.decode(content.value))
      };
    default:
      return Any.toAmino(content);
  }
};