import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { MultiRewardIndex, MultiRewardIndexAmino, MultiRewardIndexSDKType, USDXMintingClaim, USDXMintingClaimAmino, USDXMintingClaimSDKType, HardLiquidityProviderClaim, HardLiquidityProviderClaimAmino, HardLiquidityProviderClaimSDKType, DelegatorClaim, DelegatorClaimAmino, DelegatorClaimSDKType, SwapClaim, SwapClaimAmino, SwapClaimSDKType, SavingsClaim, SavingsClaimAmino, SavingsClaimSDKType, EarnClaim, EarnClaimAmino, EarnClaimSDKType } from "./claims";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/** AccumulationTime stores the previous reward distribution time and its corresponding collateral type */
export interface AccumulationTime {
  collateralType: string;
  previousAccumulationTime: Timestamp;
}
export interface AccumulationTimeProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.AccumulationTime";
  value: Uint8Array;
}
/** AccumulationTime stores the previous reward distribution time and its corresponding collateral type */
export interface AccumulationTimeAmino {
  collateral_type: string;
  previous_accumulation_time?: TimestampAmino;
}
export interface AccumulationTimeAminoMsg {
  type: "/kava.incentive.v1beta1.AccumulationTime";
  value: AccumulationTimeAmino;
}
/** AccumulationTime stores the previous reward distribution time and its corresponding collateral type */
export interface AccumulationTimeSDKType {
  collateral_type: string;
  previous_accumulation_time: TimestampSDKType;
}
/** GenesisRewardState groups together the global state for a particular reward so it can be exported in genesis. */
export interface GenesisRewardState {
  accumulationTimes: AccumulationTime[];
  multiRewardIndexes: MultiRewardIndex[];
}
export interface GenesisRewardStateProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.GenesisRewardState";
  value: Uint8Array;
}
/** GenesisRewardState groups together the global state for a particular reward so it can be exported in genesis. */
export interface GenesisRewardStateAmino {
  accumulation_times: AccumulationTimeAmino[];
  multi_reward_indexes: MultiRewardIndexAmino[];
}
export interface GenesisRewardStateAminoMsg {
  type: "/kava.incentive.v1beta1.GenesisRewardState";
  value: GenesisRewardStateAmino;
}
/** GenesisRewardState groups together the global state for a particular reward so it can be exported in genesis. */
export interface GenesisRewardStateSDKType {
  accumulation_times: AccumulationTimeSDKType[];
  multi_reward_indexes: MultiRewardIndexSDKType[];
}
/** GenesisState is the state that must be provided at genesis. */
export interface GenesisState {
  params: Params;
  usdxRewardState: GenesisRewardState;
  hardSupplyRewardState: GenesisRewardState;
  hardBorrowRewardState: GenesisRewardState;
  delegatorRewardState: GenesisRewardState;
  swapRewardState: GenesisRewardState;
  usdxMintingClaims: USDXMintingClaim[];
  hardLiquidityProviderClaims: HardLiquidityProviderClaim[];
  delegatorClaims: DelegatorClaim[];
  swapClaims: SwapClaim[];
  savingsRewardState: GenesisRewardState;
  savingsClaims: SavingsClaim[];
  earnRewardState: GenesisRewardState;
  earnClaims: EarnClaim[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState is the state that must be provided at genesis. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  usdx_reward_state?: GenesisRewardStateAmino;
  hard_supply_reward_state?: GenesisRewardStateAmino;
  hard_borrow_reward_state?: GenesisRewardStateAmino;
  delegator_reward_state?: GenesisRewardStateAmino;
  swap_reward_state?: GenesisRewardStateAmino;
  usdx_minting_claims: USDXMintingClaimAmino[];
  hard_liquidity_provider_claims: HardLiquidityProviderClaimAmino[];
  delegator_claims: DelegatorClaimAmino[];
  swap_claims: SwapClaimAmino[];
  savings_reward_state?: GenesisRewardStateAmino;
  savings_claims: SavingsClaimAmino[];
  earn_reward_state?: GenesisRewardStateAmino;
  earn_claims: EarnClaimAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/kava.incentive.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState is the state that must be provided at genesis. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  usdx_reward_state: GenesisRewardStateSDKType;
  hard_supply_reward_state: GenesisRewardStateSDKType;
  hard_borrow_reward_state: GenesisRewardStateSDKType;
  delegator_reward_state: GenesisRewardStateSDKType;
  swap_reward_state: GenesisRewardStateSDKType;
  usdx_minting_claims: USDXMintingClaimSDKType[];
  hard_liquidity_provider_claims: HardLiquidityProviderClaimSDKType[];
  delegator_claims: DelegatorClaimSDKType[];
  swap_claims: SwapClaimSDKType[];
  savings_reward_state: GenesisRewardStateSDKType;
  savings_claims: SavingsClaimSDKType[];
  earn_reward_state: GenesisRewardStateSDKType;
  earn_claims: EarnClaimSDKType[];
}
function createBaseAccumulationTime(): AccumulationTime {
  return {
    collateralType: "",
    previousAccumulationTime: Timestamp.fromPartial({})
  };
}
export const AccumulationTime = {
  typeUrl: "/kava.incentive.v1beta1.AccumulationTime",
  encode(message: AccumulationTime, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collateralType !== "") {
      writer.uint32(10).string(message.collateralType);
    }
    if (message.previousAccumulationTime !== undefined) {
      Timestamp.encode(message.previousAccumulationTime, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AccumulationTime {
    return {
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : "",
      previousAccumulationTime: isSet(object.previousAccumulationTime) ? fromJsonTimestamp(object.previousAccumulationTime) : undefined
    };
  },
  fromPartial(object: Partial<AccumulationTime>): AccumulationTime {
    const message = createBaseAccumulationTime();
    message.collateralType = object.collateralType ?? "";
    message.previousAccumulationTime = object.previousAccumulationTime !== undefined && object.previousAccumulationTime !== null ? Timestamp.fromPartial(object.previousAccumulationTime) : undefined;
    return message;
  },
  fromAmino(object: AccumulationTimeAmino): AccumulationTime {
    return {
      collateralType: object.collateral_type,
      previousAccumulationTime: object.previous_accumulation_time
    };
  },
  toAmino(message: AccumulationTime): AccumulationTimeAmino {
    const obj: any = {};
    obj.collateral_type = message.collateralType;
    obj.previous_accumulation_time = message.previousAccumulationTime;
    return obj;
  },
  fromAminoMsg(object: AccumulationTimeAminoMsg): AccumulationTime {
    return AccumulationTime.fromAmino(object.value);
  },
  fromProtoMsg(message: AccumulationTimeProtoMsg): AccumulationTime {
    return AccumulationTime.decode(message.value);
  },
  toProto(message: AccumulationTime): Uint8Array {
    return AccumulationTime.encode(message).finish();
  },
  toProtoMsg(message: AccumulationTime): AccumulationTimeProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.AccumulationTime",
      value: AccumulationTime.encode(message).finish()
    };
  }
};
function createBaseGenesisRewardState(): GenesisRewardState {
  return {
    accumulationTimes: [],
    multiRewardIndexes: []
  };
}
export const GenesisRewardState = {
  typeUrl: "/kava.incentive.v1beta1.GenesisRewardState",
  encode(message: GenesisRewardState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accumulationTimes) {
      AccumulationTime.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.multiRewardIndexes) {
      MultiRewardIndex.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisRewardState {
    return {
      accumulationTimes: Array.isArray(object?.accumulationTimes) ? object.accumulationTimes.map((e: any) => AccumulationTime.fromJSON(e)) : [],
      multiRewardIndexes: Array.isArray(object?.multiRewardIndexes) ? object.multiRewardIndexes.map((e: any) => MultiRewardIndex.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisRewardState>): GenesisRewardState {
    const message = createBaseGenesisRewardState();
    message.accumulationTimes = object.accumulationTimes?.map(e => AccumulationTime.fromPartial(e)) || [];
    message.multiRewardIndexes = object.multiRewardIndexes?.map(e => MultiRewardIndex.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisRewardStateAmino): GenesisRewardState {
    return {
      accumulationTimes: Array.isArray(object?.accumulation_times) ? object.accumulation_times.map((e: any) => AccumulationTime.fromAmino(e)) : [],
      multiRewardIndexes: Array.isArray(object?.multi_reward_indexes) ? object.multi_reward_indexes.map((e: any) => MultiRewardIndex.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisRewardState): GenesisRewardStateAmino {
    const obj: any = {};
    if (message.accumulationTimes) {
      obj.accumulation_times = message.accumulationTimes.map(e => e ? AccumulationTime.toAmino(e) : undefined);
    } else {
      obj.accumulation_times = [];
    }
    if (message.multiRewardIndexes) {
      obj.multi_reward_indexes = message.multiRewardIndexes.map(e => e ? MultiRewardIndex.toAmino(e) : undefined);
    } else {
      obj.multi_reward_indexes = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisRewardStateAminoMsg): GenesisRewardState {
    return GenesisRewardState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisRewardStateProtoMsg): GenesisRewardState {
    return GenesisRewardState.decode(message.value);
  },
  toProto(message: GenesisRewardState): Uint8Array {
    return GenesisRewardState.encode(message).finish();
  },
  toProtoMsg(message: GenesisRewardState): GenesisRewardStateProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.GenesisRewardState",
      value: GenesisRewardState.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    usdxRewardState: GenesisRewardState.fromPartial({}),
    hardSupplyRewardState: GenesisRewardState.fromPartial({}),
    hardBorrowRewardState: GenesisRewardState.fromPartial({}),
    delegatorRewardState: GenesisRewardState.fromPartial({}),
    swapRewardState: GenesisRewardState.fromPartial({}),
    usdxMintingClaims: [],
    hardLiquidityProviderClaims: [],
    delegatorClaims: [],
    swapClaims: [],
    savingsRewardState: GenesisRewardState.fromPartial({}),
    savingsClaims: [],
    earnRewardState: GenesisRewardState.fromPartial({}),
    earnClaims: []
  };
}
export const GenesisState = {
  typeUrl: "/kava.incentive.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.usdxRewardState !== undefined) {
      GenesisRewardState.encode(message.usdxRewardState, writer.uint32(18).fork()).ldelim();
    }
    if (message.hardSupplyRewardState !== undefined) {
      GenesisRewardState.encode(message.hardSupplyRewardState, writer.uint32(26).fork()).ldelim();
    }
    if (message.hardBorrowRewardState !== undefined) {
      GenesisRewardState.encode(message.hardBorrowRewardState, writer.uint32(34).fork()).ldelim();
    }
    if (message.delegatorRewardState !== undefined) {
      GenesisRewardState.encode(message.delegatorRewardState, writer.uint32(42).fork()).ldelim();
    }
    if (message.swapRewardState !== undefined) {
      GenesisRewardState.encode(message.swapRewardState, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.usdxMintingClaims) {
      USDXMintingClaim.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.hardLiquidityProviderClaims) {
      HardLiquidityProviderClaim.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.delegatorClaims) {
      DelegatorClaim.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.swapClaims) {
      SwapClaim.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.savingsRewardState !== undefined) {
      GenesisRewardState.encode(message.savingsRewardState, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.savingsClaims) {
      SavingsClaim.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.earnRewardState !== undefined) {
      GenesisRewardState.encode(message.earnRewardState, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.earnClaims) {
      EarnClaim.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      usdxRewardState: isSet(object.usdxRewardState) ? GenesisRewardState.fromJSON(object.usdxRewardState) : undefined,
      hardSupplyRewardState: isSet(object.hardSupplyRewardState) ? GenesisRewardState.fromJSON(object.hardSupplyRewardState) : undefined,
      hardBorrowRewardState: isSet(object.hardBorrowRewardState) ? GenesisRewardState.fromJSON(object.hardBorrowRewardState) : undefined,
      delegatorRewardState: isSet(object.delegatorRewardState) ? GenesisRewardState.fromJSON(object.delegatorRewardState) : undefined,
      swapRewardState: isSet(object.swapRewardState) ? GenesisRewardState.fromJSON(object.swapRewardState) : undefined,
      usdxMintingClaims: Array.isArray(object?.usdxMintingClaims) ? object.usdxMintingClaims.map((e: any) => USDXMintingClaim.fromJSON(e)) : [],
      hardLiquidityProviderClaims: Array.isArray(object?.hardLiquidityProviderClaims) ? object.hardLiquidityProviderClaims.map((e: any) => HardLiquidityProviderClaim.fromJSON(e)) : [],
      delegatorClaims: Array.isArray(object?.delegatorClaims) ? object.delegatorClaims.map((e: any) => DelegatorClaim.fromJSON(e)) : [],
      swapClaims: Array.isArray(object?.swapClaims) ? object.swapClaims.map((e: any) => SwapClaim.fromJSON(e)) : [],
      savingsRewardState: isSet(object.savingsRewardState) ? GenesisRewardState.fromJSON(object.savingsRewardState) : undefined,
      savingsClaims: Array.isArray(object?.savingsClaims) ? object.savingsClaims.map((e: any) => SavingsClaim.fromJSON(e)) : [],
      earnRewardState: isSet(object.earnRewardState) ? GenesisRewardState.fromJSON(object.earnRewardState) : undefined,
      earnClaims: Array.isArray(object?.earnClaims) ? object.earnClaims.map((e: any) => EarnClaim.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.usdxRewardState = object.usdxRewardState !== undefined && object.usdxRewardState !== null ? GenesisRewardState.fromPartial(object.usdxRewardState) : undefined;
    message.hardSupplyRewardState = object.hardSupplyRewardState !== undefined && object.hardSupplyRewardState !== null ? GenesisRewardState.fromPartial(object.hardSupplyRewardState) : undefined;
    message.hardBorrowRewardState = object.hardBorrowRewardState !== undefined && object.hardBorrowRewardState !== null ? GenesisRewardState.fromPartial(object.hardBorrowRewardState) : undefined;
    message.delegatorRewardState = object.delegatorRewardState !== undefined && object.delegatorRewardState !== null ? GenesisRewardState.fromPartial(object.delegatorRewardState) : undefined;
    message.swapRewardState = object.swapRewardState !== undefined && object.swapRewardState !== null ? GenesisRewardState.fromPartial(object.swapRewardState) : undefined;
    message.usdxMintingClaims = object.usdxMintingClaims?.map(e => USDXMintingClaim.fromPartial(e)) || [];
    message.hardLiquidityProviderClaims = object.hardLiquidityProviderClaims?.map(e => HardLiquidityProviderClaim.fromPartial(e)) || [];
    message.delegatorClaims = object.delegatorClaims?.map(e => DelegatorClaim.fromPartial(e)) || [];
    message.swapClaims = object.swapClaims?.map(e => SwapClaim.fromPartial(e)) || [];
    message.savingsRewardState = object.savingsRewardState !== undefined && object.savingsRewardState !== null ? GenesisRewardState.fromPartial(object.savingsRewardState) : undefined;
    message.savingsClaims = object.savingsClaims?.map(e => SavingsClaim.fromPartial(e)) || [];
    message.earnRewardState = object.earnRewardState !== undefined && object.earnRewardState !== null ? GenesisRewardState.fromPartial(object.earnRewardState) : undefined;
    message.earnClaims = object.earnClaims?.map(e => EarnClaim.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      usdxRewardState: object?.usdx_reward_state ? GenesisRewardState.fromAmino(object.usdx_reward_state) : undefined,
      hardSupplyRewardState: object?.hard_supply_reward_state ? GenesisRewardState.fromAmino(object.hard_supply_reward_state) : undefined,
      hardBorrowRewardState: object?.hard_borrow_reward_state ? GenesisRewardState.fromAmino(object.hard_borrow_reward_state) : undefined,
      delegatorRewardState: object?.delegator_reward_state ? GenesisRewardState.fromAmino(object.delegator_reward_state) : undefined,
      swapRewardState: object?.swap_reward_state ? GenesisRewardState.fromAmino(object.swap_reward_state) : undefined,
      usdxMintingClaims: Array.isArray(object?.usdx_minting_claims) ? object.usdx_minting_claims.map((e: any) => USDXMintingClaim.fromAmino(e)) : [],
      hardLiquidityProviderClaims: Array.isArray(object?.hard_liquidity_provider_claims) ? object.hard_liquidity_provider_claims.map((e: any) => HardLiquidityProviderClaim.fromAmino(e)) : [],
      delegatorClaims: Array.isArray(object?.delegator_claims) ? object.delegator_claims.map((e: any) => DelegatorClaim.fromAmino(e)) : [],
      swapClaims: Array.isArray(object?.swap_claims) ? object.swap_claims.map((e: any) => SwapClaim.fromAmino(e)) : [],
      savingsRewardState: object?.savings_reward_state ? GenesisRewardState.fromAmino(object.savings_reward_state) : undefined,
      savingsClaims: Array.isArray(object?.savings_claims) ? object.savings_claims.map((e: any) => SavingsClaim.fromAmino(e)) : [],
      earnRewardState: object?.earn_reward_state ? GenesisRewardState.fromAmino(object.earn_reward_state) : undefined,
      earnClaims: Array.isArray(object?.earn_claims) ? object.earn_claims.map((e: any) => EarnClaim.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.usdx_reward_state = message.usdxRewardState ? GenesisRewardState.toAmino(message.usdxRewardState) : undefined;
    obj.hard_supply_reward_state = message.hardSupplyRewardState ? GenesisRewardState.toAmino(message.hardSupplyRewardState) : undefined;
    obj.hard_borrow_reward_state = message.hardBorrowRewardState ? GenesisRewardState.toAmino(message.hardBorrowRewardState) : undefined;
    obj.delegator_reward_state = message.delegatorRewardState ? GenesisRewardState.toAmino(message.delegatorRewardState) : undefined;
    obj.swap_reward_state = message.swapRewardState ? GenesisRewardState.toAmino(message.swapRewardState) : undefined;
    if (message.usdxMintingClaims) {
      obj.usdx_minting_claims = message.usdxMintingClaims.map(e => e ? USDXMintingClaim.toAmino(e) : undefined);
    } else {
      obj.usdx_minting_claims = [];
    }
    if (message.hardLiquidityProviderClaims) {
      obj.hard_liquidity_provider_claims = message.hardLiquidityProviderClaims.map(e => e ? HardLiquidityProviderClaim.toAmino(e) : undefined);
    } else {
      obj.hard_liquidity_provider_claims = [];
    }
    if (message.delegatorClaims) {
      obj.delegator_claims = message.delegatorClaims.map(e => e ? DelegatorClaim.toAmino(e) : undefined);
    } else {
      obj.delegator_claims = [];
    }
    if (message.swapClaims) {
      obj.swap_claims = message.swapClaims.map(e => e ? SwapClaim.toAmino(e) : undefined);
    } else {
      obj.swap_claims = [];
    }
    obj.savings_reward_state = message.savingsRewardState ? GenesisRewardState.toAmino(message.savingsRewardState) : undefined;
    if (message.savingsClaims) {
      obj.savings_claims = message.savingsClaims.map(e => e ? SavingsClaim.toAmino(e) : undefined);
    } else {
      obj.savings_claims = [];
    }
    obj.earn_reward_state = message.earnRewardState ? GenesisRewardState.toAmino(message.earnRewardState) : undefined;
    if (message.earnClaims) {
      obj.earn_claims = message.earnClaims.map(e => e ? EarnClaim.toAmino(e) : undefined);
    } else {
      obj.earn_claims = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};