import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * CreateConcentratedLiquidityPoolsProposal is a gov Content type for creating
 * concentrated liquidity pools. If a CreateConcentratedLiquidityPoolsProposal
 * passes, the pools are created via pool manager module account.
 */
export interface CreateConcentratedLiquidityPoolsProposal {
    title: string;
    description: string;
    poolRecords: PoolRecord[];
}
/**
 * CreateConcentratedLiquidityPoolsProposal is a gov Content type for creating
 * concentrated liquidity pools. If a CreateConcentratedLiquidityPoolsProposal
 * passes, the pools are created via pool manager module account.
 */
export interface CreateConcentratedLiquidityPoolsProposalSDKType {
    title: string;
    description: string;
    pool_records: PoolRecordSDKType[];
}
/**
 * TickSpacingDecreaseProposal is a gov Content type for proposing a tick
 * spacing decrease for a pool. The proposal will fail if one of the pools do
 * not exist, or if the new tick spacing is not less than the current tick
 * spacing.
 */
export interface TickSpacingDecreaseProposal {
    title: string;
    description: string;
    poolIdToTickSpacingRecords: PoolIdToTickSpacingRecord[];
}
/**
 * TickSpacingDecreaseProposal is a gov Content type for proposing a tick
 * spacing decrease for a pool. The proposal will fail if one of the pools do
 * not exist, or if the new tick spacing is not less than the current tick
 * spacing.
 */
export interface TickSpacingDecreaseProposalSDKType {
    title: string;
    description: string;
    pool_id_to_tick_spacing_records: PoolIdToTickSpacingRecordSDKType[];
}
/**
 * PoolIdToTickSpacingRecord is a struct that contains a pool id to new tick
 * spacing pair.
 */
export interface PoolIdToTickSpacingRecord {
    poolId: Long;
    newTickSpacing: Long;
}
/**
 * PoolIdToTickSpacingRecord is a struct that contains a pool id to new tick
 * spacing pair.
 */
export interface PoolIdToTickSpacingRecordSDKType {
    pool_id: Long;
    new_tick_spacing: Long;
}
export interface PoolRecord {
    denom0: string;
    denom1: string;
    tickSpacing: Long;
    exponentAtPriceOne: string;
    spreadFactor: string;
}
export interface PoolRecordSDKType {
    denom0: string;
    denom1: string;
    tick_spacing: Long;
    exponent_at_price_one: string;
    spread_factor: string;
}
export declare const CreateConcentratedLiquidityPoolsProposal: {
    encode(message: CreateConcentratedLiquidityPoolsProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CreateConcentratedLiquidityPoolsProposal;
    fromPartial(object: Partial<CreateConcentratedLiquidityPoolsProposal>): CreateConcentratedLiquidityPoolsProposal;
};
export declare const TickSpacingDecreaseProposal: {
    encode(message: TickSpacingDecreaseProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TickSpacingDecreaseProposal;
    fromPartial(object: Partial<TickSpacingDecreaseProposal>): TickSpacingDecreaseProposal;
};
export declare const PoolIdToTickSpacingRecord: {
    encode(message: PoolIdToTickSpacingRecord, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PoolIdToTickSpacingRecord;
    fromPartial(object: Partial<PoolIdToTickSpacingRecord>): PoolIdToTickSpacingRecord;
};
export declare const PoolRecord: {
    encode(message: PoolRecord, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PoolRecord;
    fromPartial(object: Partial<PoolRecord>): PoolRecord;
};
