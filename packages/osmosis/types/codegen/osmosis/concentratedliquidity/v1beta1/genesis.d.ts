import { TickInfo, TickInfoAmino, TickInfoSDKType } from "./tickInfo";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { IncentiveRecord, IncentiveRecordAmino, IncentiveRecordSDKType } from "./incentive_record";
import { Position, PositionAmino, PositionSDKType } from "./position";
import { Record, RecordAmino, RecordSDKType, AccumulatorContent, AccumulatorContentAmino, AccumulatorContentSDKType } from "../../accum/v1beta1/accum";
import { Params, ParamsAmino, ParamsSDKType } from "../params";
import { Pool as Pool1 } from "./pool";
import { PoolProtoMsg as Pool1ProtoMsg } from "./pool";
import { PoolSDKType as Pool1SDKType } from "./pool";
import { CosmWasmPool, CosmWasmPoolProtoMsg, CosmWasmPoolSDKType } from "../../cosmwasmpool/v1beta1/model/pool";
import { Pool as Pool2 } from "../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import { PoolProtoMsg as Pool2ProtoMsg } from "../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import { PoolSDKType as Pool2SDKType } from "../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import { Pool as Pool3 } from "../../gamm/v1beta1/balancerPool";
import { PoolProtoMsg as Pool3ProtoMsg } from "../../gamm/v1beta1/balancerPool";
import { PoolSDKType as Pool3SDKType } from "../../gamm/v1beta1/balancerPool";
import { BinaryReader, BinaryWriter } from "../../../binary";
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
    pool_id?: string;
    /** tick's index. */
    tick_index?: string;
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
    pool?: (Pool1 & CosmWasmPool & Pool2 & Pool3 & Any) | undefined;
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
    /** pool struct */ pool?: Pool1ProtoMsg | CosmWasmPoolProtoMsg | Pool2ProtoMsg | Pool3ProtoMsg | AnyProtoMsg | undefined;
};
/**
 * PoolData represents a serialized pool along with its ticks
 * for genesis state.
 */
export interface PoolDataAmino {
    /** pool struct */
    pool?: AnyAmino;
    /** pool's ticks */
    ticks?: FullTickAmino[];
    spread_reward_accumulator?: AccumObjectAmino;
    incentives_accumulators?: AccumObjectAmino[];
    /** incentive records to be set */
    incentive_records?: IncentiveRecordAmino[];
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
    pool?: Pool1SDKType | CosmWasmPoolSDKType | Pool2SDKType | Pool3SDKType | AnySDKType | undefined;
    ticks: FullTickSDKType[];
    spread_reward_accumulator: AccumObjectSDKType;
    incentives_accumulators: AccumObjectSDKType[];
    incentive_records: IncentiveRecordSDKType[];
}
export interface PositionData {
    position?: Position;
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
    lock_id?: string;
    spread_reward_accum_record?: RecordAmino;
    uptime_accum_records?: RecordAmino[];
}
export interface PositionDataAminoMsg {
    type: "osmosis/concentratedliquidity/position-data";
    value: PositionDataAmino;
}
export interface PositionDataSDKType {
    position?: PositionSDKType;
    lock_id: bigint;
    spread_reward_accum_record: RecordSDKType;
    uptime_accum_records: RecordSDKType[];
}
/** GenesisState defines the concentrated liquidity module's genesis state. */
export interface GenesisState {
    /** params are all the parameters of the module */
    params: Params;
    /** pool data containing serialized pool struct and ticks. */
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
    /** pool data containing serialized pool struct and ticks. */
    pool_data?: PoolDataAmino[];
    position_data?: PositionDataAmino[];
    next_position_id?: string;
    next_incentive_record_id?: string;
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
    accumContent?: AccumulatorContent;
}
export interface AccumObjectProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.AccumObject";
    value: Uint8Array;
}
export interface AccumObjectAmino {
    /** Accumulator's name (pulled from AccumulatorContent) */
    name?: string;
    accum_content?: AccumulatorContentAmino;
}
export interface AccumObjectAminoMsg {
    type: "osmosis/concentratedliquidity/accum-object";
    value: AccumObjectAmino;
}
export interface AccumObjectSDKType {
    name: string;
    accum_content?: AccumulatorContentSDKType;
}
export declare const FullTick: {
    typeUrl: string;
    encode(message: FullTick, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FullTick;
    fromPartial(object: Partial<FullTick>): FullTick;
    fromAmino(object: FullTickAmino): FullTick;
    toAmino(message: FullTick): FullTickAmino;
    fromAminoMsg(object: FullTickAminoMsg): FullTick;
    toAminoMsg(message: FullTick): FullTickAminoMsg;
    fromProtoMsg(message: FullTickProtoMsg): FullTick;
    toProto(message: FullTick): Uint8Array;
    toProtoMsg(message: FullTick): FullTickProtoMsg;
};
export declare const PoolData: {
    typeUrl: string;
    encode(message: PoolData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PoolData;
    fromPartial(object: Partial<PoolData>): PoolData;
    fromAmino(object: PoolDataAmino): PoolData;
    toAmino(message: PoolData): PoolDataAmino;
    fromAminoMsg(object: PoolDataAminoMsg): PoolData;
    toAminoMsg(message: PoolData): PoolDataAminoMsg;
    fromProtoMsg(message: PoolDataProtoMsg): PoolData;
    toProto(message: PoolData): Uint8Array;
    toProtoMsg(message: PoolData): PoolDataProtoMsg;
};
export declare const PositionData: {
    typeUrl: string;
    encode(message: PositionData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PositionData;
    fromPartial(object: Partial<PositionData>): PositionData;
    fromAmino(object: PositionDataAmino): PositionData;
    toAmino(message: PositionData): PositionDataAmino;
    fromAminoMsg(object: PositionDataAminoMsg): PositionData;
    toAminoMsg(message: PositionData): PositionDataAminoMsg;
    fromProtoMsg(message: PositionDataProtoMsg): PositionData;
    toProto(message: PositionData): Uint8Array;
    toProtoMsg(message: PositionData): PositionDataProtoMsg;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const AccumObject: {
    typeUrl: string;
    encode(message: AccumObject, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccumObject;
    fromPartial(object: Partial<AccumObject>): AccumObject;
    fromAmino(object: AccumObjectAmino): AccumObject;
    toAmino(message: AccumObject): AccumObjectAmino;
    fromAminoMsg(object: AccumObjectAminoMsg): AccumObject;
    toAminoMsg(message: AccumObject): AccumObjectAminoMsg;
    fromProtoMsg(message: AccumObjectProtoMsg): AccumObject;
    toProto(message: AccumObject): Uint8Array;
    toProtoMsg(message: AccumObject): AccumObjectProtoMsg;
};
export declare const PoolI_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Pool1 | CosmWasmPool | Pool2 | Pool3 | Any;
export declare const PoolI_FromAmino: (content: AnyAmino) => Any;
export declare const PoolI_ToAmino: (content: Any) => AnyAmino;
