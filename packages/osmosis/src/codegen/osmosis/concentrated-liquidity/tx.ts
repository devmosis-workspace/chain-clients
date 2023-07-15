import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** ===================== MsgCreatePosition */
export interface MsgCreatePosition {
  poolId: Long;
  sender: string;
  lowerTick: Long;
  upperTick: Long;
  /**
   * tokens_provided is the amount of tokens provided for the position.
   * It must at a minimum be of length 1 (for a single sided position)
   * and at a maximum be of length 2 (for a position that straddles the current
   * tick).
   */
  tokensProvided: Coin[];
  tokenMinAmount0: string;
  tokenMinAmount1: string;
}
/** ===================== MsgCreatePosition */
export interface MsgCreatePositionSDKType {
  pool_id: Long;
  sender: string;
  lower_tick: Long;
  upper_tick: Long;
  tokens_provided: CoinSDKType[];
  token_min_amount0: string;
  token_min_amount1: string;
}
export interface MsgCreatePositionResponse {
  positionId: Long;
  amount0: string;
  amount1: string;
  liquidityCreated: string;
  /**
   * the lower and upper tick are in the response because there are
   * instances in which multiple ticks represent the same price, so
   * we may move their provided tick to the canonical tick that represents
   * the same price.
   */
  lowerTick: Long;
  upperTick: Long;
}
export interface MsgCreatePositionResponseSDKType {
  position_id: Long;
  amount0: string;
  amount1: string;
  liquidity_created: string;
  lower_tick: Long;
  upper_tick: Long;
}
/** ===================== MsgAddToPosition */
export interface MsgAddToPosition {
  positionId: Long;
  sender: string;
  /** amount0 represents the amount of token0 willing to put in. */
  amount0: string;
  /** amount1 represents the amount of token1 willing to put in. */
  amount1: string;
  /**
   * token_min_amount0 represents the minimum amount of token0 desired from the
   * new position being created. Note that this field indicates the min amount0
   * corresponding to the liquidity that is being added, not the total
   * liquidity of the position.
   */
  tokenMinAmount0: string;
  /**
   * token_min_amount1 represents the minimum amount of token1 desired from the
   * new position being created. Note that this field indicates the min amount1
   * corresponding to the liquidity that is being added, not the total
   * liquidity of the position.
   */
  tokenMinAmount1: string;
}
/** ===================== MsgAddToPosition */
export interface MsgAddToPositionSDKType {
  position_id: Long;
  sender: string;
  amount0: string;
  amount1: string;
  token_min_amount0: string;
  token_min_amount1: string;
}
export interface MsgAddToPositionResponse {
  positionId: Long;
  amount0: string;
  amount1: string;
}
export interface MsgAddToPositionResponseSDKType {
  position_id: Long;
  amount0: string;
  amount1: string;
}
/** ===================== MsgWithdrawPosition */
export interface MsgWithdrawPosition {
  positionId: Long;
  sender: string;
  liquidityAmount: string;
}
/** ===================== MsgWithdrawPosition */
export interface MsgWithdrawPositionSDKType {
  position_id: Long;
  sender: string;
  liquidity_amount: string;
}
export interface MsgWithdrawPositionResponse {
  amount0: string;
  amount1: string;
}
export interface MsgWithdrawPositionResponseSDKType {
  amount0: string;
  amount1: string;
}
/** ===================== MsgCollectSpreadRewards */
export interface MsgCollectSpreadRewards {
  positionIds: Long[];
  sender: string;
}
/** ===================== MsgCollectSpreadRewards */
export interface MsgCollectSpreadRewardsSDKType {
  position_ids: Long[];
  sender: string;
}
export interface MsgCollectSpreadRewardsResponse {
  collectedSpreadRewards: Coin[];
}
export interface MsgCollectSpreadRewardsResponseSDKType {
  collected_spread_rewards: CoinSDKType[];
}
/** ===================== MsgCollectIncentives */
export interface MsgCollectIncentives {
  positionIds: Long[];
  sender: string;
}
/** ===================== MsgCollectIncentives */
export interface MsgCollectIncentivesSDKType {
  position_ids: Long[];
  sender: string;
}
export interface MsgCollectIncentivesResponse {
  collectedIncentives: Coin[];
  forfeitedIncentives: Coin[];
}
export interface MsgCollectIncentivesResponseSDKType {
  collected_incentives: CoinSDKType[];
  forfeited_incentives: CoinSDKType[];
}
/** ===================== MsgFungifyChargedPositions */
export interface MsgFungifyChargedPositions {
  positionIds: Long[];
  sender: string;
}
/** ===================== MsgFungifyChargedPositions */
export interface MsgFungifyChargedPositionsSDKType {
  position_ids: Long[];
  sender: string;
}
export interface MsgFungifyChargedPositionsResponse {
  newPositionId: Long;
}
export interface MsgFungifyChargedPositionsResponseSDKType {
  new_position_id: Long;
}
function createBaseMsgCreatePosition(): MsgCreatePosition {
  return {
    poolId: Long.UZERO,
    sender: "",
    lowerTick: Long.ZERO,
    upperTick: Long.ZERO,
    tokensProvided: [],
    tokenMinAmount0: "",
    tokenMinAmount1: ""
  };
}
export const MsgCreatePosition = {
  encode(message: MsgCreatePosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (!message.lowerTick.isZero()) {
      writer.uint32(24).int64(message.lowerTick);
    }
    if (!message.upperTick.isZero()) {
      writer.uint32(32).int64(message.upperTick);
    }
    for (const v of message.tokensProvided) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.tokenMinAmount0 !== "") {
      writer.uint32(50).string(message.tokenMinAmount0);
    }
    if (message.tokenMinAmount1 !== "") {
      writer.uint32(58).string(message.tokenMinAmount1);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreatePosition {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
      lowerTick: isSet(object.lowerTick) ? Long.fromValue(object.lowerTick) : Long.ZERO,
      upperTick: isSet(object.upperTick) ? Long.fromValue(object.upperTick) : Long.ZERO,
      tokensProvided: Array.isArray(object?.tokensProvided) ? object.tokensProvided.map((e: any) => Coin.fromJSON(e)) : [],
      tokenMinAmount0: isSet(object.tokenMinAmount0) ? String(object.tokenMinAmount0) : "",
      tokenMinAmount1: isSet(object.tokenMinAmount1) ? String(object.tokenMinAmount1) : ""
    };
  },
  fromPartial(object: Partial<MsgCreatePosition>): MsgCreatePosition {
    const message = createBaseMsgCreatePosition();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.sender = object.sender ?? "";
    message.lowerTick = object.lowerTick !== undefined && object.lowerTick !== null ? Long.fromValue(object.lowerTick) : Long.ZERO;
    message.upperTick = object.upperTick !== undefined && object.upperTick !== null ? Long.fromValue(object.upperTick) : Long.ZERO;
    message.tokensProvided = object.tokensProvided?.map(e => Coin.fromPartial(e)) || [];
    message.tokenMinAmount0 = object.tokenMinAmount0 ?? "";
    message.tokenMinAmount1 = object.tokenMinAmount1 ?? "";
    return message;
  }
};
function createBaseMsgCreatePositionResponse(): MsgCreatePositionResponse {
  return {
    positionId: Long.UZERO,
    amount0: "",
    amount1: "",
    liquidityCreated: "",
    lowerTick: Long.ZERO,
    upperTick: Long.ZERO
  };
}
export const MsgCreatePositionResponse = {
  encode(message: MsgCreatePositionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.positionId.isZero()) {
      writer.uint32(8).uint64(message.positionId);
    }
    if (message.amount0 !== "") {
      writer.uint32(18).string(message.amount0);
    }
    if (message.amount1 !== "") {
      writer.uint32(26).string(message.amount1);
    }
    if (message.liquidityCreated !== "") {
      writer.uint32(42).string(message.liquidityCreated);
    }
    if (!message.lowerTick.isZero()) {
      writer.uint32(48).int64(message.lowerTick);
    }
    if (!message.upperTick.isZero()) {
      writer.uint32(56).int64(message.upperTick);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreatePositionResponse {
    return {
      positionId: isSet(object.positionId) ? Long.fromValue(object.positionId) : Long.UZERO,
      amount0: isSet(object.amount0) ? String(object.amount0) : "",
      amount1: isSet(object.amount1) ? String(object.amount1) : "",
      liquidityCreated: isSet(object.liquidityCreated) ? String(object.liquidityCreated) : "",
      lowerTick: isSet(object.lowerTick) ? Long.fromValue(object.lowerTick) : Long.ZERO,
      upperTick: isSet(object.upperTick) ? Long.fromValue(object.upperTick) : Long.ZERO
    };
  },
  fromPartial(object: Partial<MsgCreatePositionResponse>): MsgCreatePositionResponse {
    const message = createBaseMsgCreatePositionResponse();
    message.positionId = object.positionId !== undefined && object.positionId !== null ? Long.fromValue(object.positionId) : Long.UZERO;
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    message.liquidityCreated = object.liquidityCreated ?? "";
    message.lowerTick = object.lowerTick !== undefined && object.lowerTick !== null ? Long.fromValue(object.lowerTick) : Long.ZERO;
    message.upperTick = object.upperTick !== undefined && object.upperTick !== null ? Long.fromValue(object.upperTick) : Long.ZERO;
    return message;
  }
};
function createBaseMsgAddToPosition(): MsgAddToPosition {
  return {
    positionId: Long.UZERO,
    sender: "",
    amount0: "",
    amount1: "",
    tokenMinAmount0: "",
    tokenMinAmount1: ""
  };
}
export const MsgAddToPosition = {
  encode(message: MsgAddToPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.positionId.isZero()) {
      writer.uint32(8).uint64(message.positionId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.amount0 !== "") {
      writer.uint32(26).string(message.amount0);
    }
    if (message.amount1 !== "") {
      writer.uint32(34).string(message.amount1);
    }
    if (message.tokenMinAmount0 !== "") {
      writer.uint32(42).string(message.tokenMinAmount0);
    }
    if (message.tokenMinAmount1 !== "") {
      writer.uint32(50).string(message.tokenMinAmount1);
    }
    return writer;
  },
  fromJSON(object: any): MsgAddToPosition {
    return {
      positionId: isSet(object.positionId) ? Long.fromValue(object.positionId) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
      amount0: isSet(object.amount0) ? String(object.amount0) : "",
      amount1: isSet(object.amount1) ? String(object.amount1) : "",
      tokenMinAmount0: isSet(object.tokenMinAmount0) ? String(object.tokenMinAmount0) : "",
      tokenMinAmount1: isSet(object.tokenMinAmount1) ? String(object.tokenMinAmount1) : ""
    };
  },
  fromPartial(object: Partial<MsgAddToPosition>): MsgAddToPosition {
    const message = createBaseMsgAddToPosition();
    message.positionId = object.positionId !== undefined && object.positionId !== null ? Long.fromValue(object.positionId) : Long.UZERO;
    message.sender = object.sender ?? "";
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    message.tokenMinAmount0 = object.tokenMinAmount0 ?? "";
    message.tokenMinAmount1 = object.tokenMinAmount1 ?? "";
    return message;
  }
};
function createBaseMsgAddToPositionResponse(): MsgAddToPositionResponse {
  return {
    positionId: Long.UZERO,
    amount0: "",
    amount1: ""
  };
}
export const MsgAddToPositionResponse = {
  encode(message: MsgAddToPositionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.positionId.isZero()) {
      writer.uint32(8).uint64(message.positionId);
    }
    if (message.amount0 !== "") {
      writer.uint32(18).string(message.amount0);
    }
    if (message.amount1 !== "") {
      writer.uint32(26).string(message.amount1);
    }
    return writer;
  },
  fromJSON(object: any): MsgAddToPositionResponse {
    return {
      positionId: isSet(object.positionId) ? Long.fromValue(object.positionId) : Long.UZERO,
      amount0: isSet(object.amount0) ? String(object.amount0) : "",
      amount1: isSet(object.amount1) ? String(object.amount1) : ""
    };
  },
  fromPartial(object: Partial<MsgAddToPositionResponse>): MsgAddToPositionResponse {
    const message = createBaseMsgAddToPositionResponse();
    message.positionId = object.positionId !== undefined && object.positionId !== null ? Long.fromValue(object.positionId) : Long.UZERO;
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    return message;
  }
};
function createBaseMsgWithdrawPosition(): MsgWithdrawPosition {
  return {
    positionId: Long.UZERO,
    sender: "",
    liquidityAmount: ""
  };
}
export const MsgWithdrawPosition = {
  encode(message: MsgWithdrawPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.positionId.isZero()) {
      writer.uint32(8).uint64(message.positionId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.liquidityAmount !== "") {
      writer.uint32(26).string(message.liquidityAmount);
    }
    return writer;
  },
  fromJSON(object: any): MsgWithdrawPosition {
    return {
      positionId: isSet(object.positionId) ? Long.fromValue(object.positionId) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
      liquidityAmount: isSet(object.liquidityAmount) ? String(object.liquidityAmount) : ""
    };
  },
  fromPartial(object: Partial<MsgWithdrawPosition>): MsgWithdrawPosition {
    const message = createBaseMsgWithdrawPosition();
    message.positionId = object.positionId !== undefined && object.positionId !== null ? Long.fromValue(object.positionId) : Long.UZERO;
    message.sender = object.sender ?? "";
    message.liquidityAmount = object.liquidityAmount ?? "";
    return message;
  }
};
function createBaseMsgWithdrawPositionResponse(): MsgWithdrawPositionResponse {
  return {
    amount0: "",
    amount1: ""
  };
}
export const MsgWithdrawPositionResponse = {
  encode(message: MsgWithdrawPositionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount0 !== "") {
      writer.uint32(10).string(message.amount0);
    }
    if (message.amount1 !== "") {
      writer.uint32(18).string(message.amount1);
    }
    return writer;
  },
  fromJSON(object: any): MsgWithdrawPositionResponse {
    return {
      amount0: isSet(object.amount0) ? String(object.amount0) : "",
      amount1: isSet(object.amount1) ? String(object.amount1) : ""
    };
  },
  fromPartial(object: Partial<MsgWithdrawPositionResponse>): MsgWithdrawPositionResponse {
    const message = createBaseMsgWithdrawPositionResponse();
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    return message;
  }
};
function createBaseMsgCollectSpreadRewards(): MsgCollectSpreadRewards {
  return {
    positionIds: [],
    sender: ""
  };
}
export const MsgCollectSpreadRewards = {
  encode(message: MsgCollectSpreadRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.positionIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  fromJSON(object: any): MsgCollectSpreadRewards {
    return {
      positionIds: Array.isArray(object?.positionIds) ? object.positionIds.map((e: any) => Long.fromValue(e)) : [],
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  fromPartial(object: Partial<MsgCollectSpreadRewards>): MsgCollectSpreadRewards {
    const message = createBaseMsgCollectSpreadRewards();
    message.positionIds = object.positionIds?.map(e => Long.fromValue(e)) || [];
    message.sender = object.sender ?? "";
    return message;
  }
};
function createBaseMsgCollectSpreadRewardsResponse(): MsgCollectSpreadRewardsResponse {
  return {
    collectedSpreadRewards: []
  };
}
export const MsgCollectSpreadRewardsResponse = {
  encode(message: MsgCollectSpreadRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.collectedSpreadRewards) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCollectSpreadRewardsResponse {
    return {
      collectedSpreadRewards: Array.isArray(object?.collectedSpreadRewards) ? object.collectedSpreadRewards.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgCollectSpreadRewardsResponse>): MsgCollectSpreadRewardsResponse {
    const message = createBaseMsgCollectSpreadRewardsResponse();
    message.collectedSpreadRewards = object.collectedSpreadRewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgCollectIncentives(): MsgCollectIncentives {
  return {
    positionIds: [],
    sender: ""
  };
}
export const MsgCollectIncentives = {
  encode(message: MsgCollectIncentives, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.positionIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  fromJSON(object: any): MsgCollectIncentives {
    return {
      positionIds: Array.isArray(object?.positionIds) ? object.positionIds.map((e: any) => Long.fromValue(e)) : [],
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  fromPartial(object: Partial<MsgCollectIncentives>): MsgCollectIncentives {
    const message = createBaseMsgCollectIncentives();
    message.positionIds = object.positionIds?.map(e => Long.fromValue(e)) || [];
    message.sender = object.sender ?? "";
    return message;
  }
};
function createBaseMsgCollectIncentivesResponse(): MsgCollectIncentivesResponse {
  return {
    collectedIncentives: [],
    forfeitedIncentives: []
  };
}
export const MsgCollectIncentivesResponse = {
  encode(message: MsgCollectIncentivesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.collectedIncentives) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.forfeitedIncentives) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCollectIncentivesResponse {
    return {
      collectedIncentives: Array.isArray(object?.collectedIncentives) ? object.collectedIncentives.map((e: any) => Coin.fromJSON(e)) : [],
      forfeitedIncentives: Array.isArray(object?.forfeitedIncentives) ? object.forfeitedIncentives.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgCollectIncentivesResponse>): MsgCollectIncentivesResponse {
    const message = createBaseMsgCollectIncentivesResponse();
    message.collectedIncentives = object.collectedIncentives?.map(e => Coin.fromPartial(e)) || [];
    message.forfeitedIncentives = object.forfeitedIncentives?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgFungifyChargedPositions(): MsgFungifyChargedPositions {
  return {
    positionIds: [],
    sender: ""
  };
}
export const MsgFungifyChargedPositions = {
  encode(message: MsgFungifyChargedPositions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.positionIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  fromJSON(object: any): MsgFungifyChargedPositions {
    return {
      positionIds: Array.isArray(object?.positionIds) ? object.positionIds.map((e: any) => Long.fromValue(e)) : [],
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  fromPartial(object: Partial<MsgFungifyChargedPositions>): MsgFungifyChargedPositions {
    const message = createBaseMsgFungifyChargedPositions();
    message.positionIds = object.positionIds?.map(e => Long.fromValue(e)) || [];
    message.sender = object.sender ?? "";
    return message;
  }
};
function createBaseMsgFungifyChargedPositionsResponse(): MsgFungifyChargedPositionsResponse {
  return {
    newPositionId: Long.UZERO
  };
}
export const MsgFungifyChargedPositionsResponse = {
  encode(message: MsgFungifyChargedPositionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.newPositionId.isZero()) {
      writer.uint32(8).uint64(message.newPositionId);
    }
    return writer;
  },
  fromJSON(object: any): MsgFungifyChargedPositionsResponse {
    return {
      newPositionId: isSet(object.newPositionId) ? Long.fromValue(object.newPositionId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgFungifyChargedPositionsResponse>): MsgFungifyChargedPositionsResponse {
    const message = createBaseMsgFungifyChargedPositionsResponse();
    message.newPositionId = object.newPositionId !== undefined && object.newPositionId !== null ? Long.fromValue(object.newPositionId) : Long.UZERO;
    return message;
  }
};