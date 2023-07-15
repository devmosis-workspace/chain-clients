import { Long, isSet } from "../../helpers";
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
function createBaseCreateConcentratedLiquidityPoolsProposal(): CreateConcentratedLiquidityPoolsProposal {
  return {
    title: "",
    description: "",
    poolRecords: []
  };
}
export const CreateConcentratedLiquidityPoolsProposal = {
  encode(message: CreateConcentratedLiquidityPoolsProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.poolRecords) {
      PoolRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CreateConcentratedLiquidityPoolsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      poolRecords: Array.isArray(object?.poolRecords) ? object.poolRecords.map((e: any) => PoolRecord.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<CreateConcentratedLiquidityPoolsProposal>): CreateConcentratedLiquidityPoolsProposal {
    const message = createBaseCreateConcentratedLiquidityPoolsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.poolRecords = object.poolRecords?.map(e => PoolRecord.fromPartial(e)) || [];
    return message;
  }
};
function createBaseTickSpacingDecreaseProposal(): TickSpacingDecreaseProposal {
  return {
    title: "",
    description: "",
    poolIdToTickSpacingRecords: []
  };
}
export const TickSpacingDecreaseProposal = {
  encode(message: TickSpacingDecreaseProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.poolIdToTickSpacingRecords) {
      PoolIdToTickSpacingRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TickSpacingDecreaseProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      poolIdToTickSpacingRecords: Array.isArray(object?.poolIdToTickSpacingRecords) ? object.poolIdToTickSpacingRecords.map((e: any) => PoolIdToTickSpacingRecord.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<TickSpacingDecreaseProposal>): TickSpacingDecreaseProposal {
    const message = createBaseTickSpacingDecreaseProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.poolIdToTickSpacingRecords = object.poolIdToTickSpacingRecords?.map(e => PoolIdToTickSpacingRecord.fromPartial(e)) || [];
    return message;
  }
};
function createBasePoolIdToTickSpacingRecord(): PoolIdToTickSpacingRecord {
  return {
    poolId: Long.UZERO,
    newTickSpacing: Long.UZERO
  };
}
export const PoolIdToTickSpacingRecord = {
  encode(message: PoolIdToTickSpacingRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.newTickSpacing.isZero()) {
      writer.uint32(16).uint64(message.newTickSpacing);
    }
    return writer;
  },
  fromJSON(object: any): PoolIdToTickSpacingRecord {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      newTickSpacing: isSet(object.newTickSpacing) ? Long.fromValue(object.newTickSpacing) : Long.UZERO
    };
  },
  fromPartial(object: Partial<PoolIdToTickSpacingRecord>): PoolIdToTickSpacingRecord {
    const message = createBasePoolIdToTickSpacingRecord();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.newTickSpacing = object.newTickSpacing !== undefined && object.newTickSpacing !== null ? Long.fromValue(object.newTickSpacing) : Long.UZERO;
    return message;
  }
};
function createBasePoolRecord(): PoolRecord {
  return {
    denom0: "",
    denom1: "",
    tickSpacing: Long.UZERO,
    exponentAtPriceOne: "",
    spreadFactor: ""
  };
}
export const PoolRecord = {
  encode(message: PoolRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom0 !== "") {
      writer.uint32(10).string(message.denom0);
    }
    if (message.denom1 !== "") {
      writer.uint32(18).string(message.denom1);
    }
    if (!message.tickSpacing.isZero()) {
      writer.uint32(24).uint64(message.tickSpacing);
    }
    if (message.exponentAtPriceOne !== "") {
      writer.uint32(34).string(message.exponentAtPriceOne);
    }
    if (message.spreadFactor !== "") {
      writer.uint32(42).string(message.spreadFactor);
    }
    return writer;
  },
  fromJSON(object: any): PoolRecord {
    return {
      denom0: isSet(object.denom0) ? String(object.denom0) : "",
      denom1: isSet(object.denom1) ? String(object.denom1) : "",
      tickSpacing: isSet(object.tickSpacing) ? Long.fromValue(object.tickSpacing) : Long.UZERO,
      exponentAtPriceOne: isSet(object.exponentAtPriceOne) ? String(object.exponentAtPriceOne) : "",
      spreadFactor: isSet(object.spreadFactor) ? String(object.spreadFactor) : ""
    };
  },
  fromPartial(object: Partial<PoolRecord>): PoolRecord {
    const message = createBasePoolRecord();
    message.denom0 = object.denom0 ?? "";
    message.denom1 = object.denom1 ?? "";
    message.tickSpacing = object.tickSpacing !== undefined && object.tickSpacing !== null ? Long.fromValue(object.tickSpacing) : Long.UZERO;
    message.exponentAtPriceOne = object.exponentAtPriceOne ?? "";
    message.spreadFactor = object.spreadFactor ?? "";
    return message;
  }
};