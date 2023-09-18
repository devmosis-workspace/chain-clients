import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** ---------------------- Delegation Callbacks ---------------------- // */
export interface SplitDelegation {
  validator: string;
  amount: string;
}
export interface SplitDelegationProtoMsg {
  typeUrl: "/stride.stakeibc.SplitDelegation";
  value: Uint8Array;
}
/** ---------------------- Delegation Callbacks ---------------------- // */
export interface SplitDelegationAmino {
  validator: string;
  amount: string;
}
export interface SplitDelegationAminoMsg {
  type: "/stride.stakeibc.SplitDelegation";
  value: SplitDelegationAmino;
}
/** ---------------------- Delegation Callbacks ---------------------- // */
export interface SplitDelegationSDKType {
  validator: string;
  amount: string;
}
export interface DelegateCallback {
  hostZoneId: string;
  depositRecordId: bigint;
  splitDelegations: SplitDelegation[];
}
export interface DelegateCallbackProtoMsg {
  typeUrl: "/stride.stakeibc.DelegateCallback";
  value: Uint8Array;
}
export interface DelegateCallbackAmino {
  host_zone_id: string;
  deposit_record_id: string;
  split_delegations: SplitDelegationAmino[];
}
export interface DelegateCallbackAminoMsg {
  type: "/stride.stakeibc.DelegateCallback";
  value: DelegateCallbackAmino;
}
export interface DelegateCallbackSDKType {
  host_zone_id: string;
  deposit_record_id: bigint;
  split_delegations: SplitDelegationSDKType[];
}
export interface ClaimCallback {
  userRedemptionRecordId: string;
  chainId: string;
  epochNumber: bigint;
}
export interface ClaimCallbackProtoMsg {
  typeUrl: "/stride.stakeibc.ClaimCallback";
  value: Uint8Array;
}
export interface ClaimCallbackAmino {
  user_redemption_record_id: string;
  chain_id: string;
  epoch_number: string;
}
export interface ClaimCallbackAminoMsg {
  type: "/stride.stakeibc.ClaimCallback";
  value: ClaimCallbackAmino;
}
export interface ClaimCallbackSDKType {
  user_redemption_record_id: string;
  chain_id: string;
  epoch_number: bigint;
}
/** ---------------------- Reinvest Callback ---------------------- // */
export interface ReinvestCallback {
  reinvestAmount: Coin;
  hostZoneId: string;
}
export interface ReinvestCallbackProtoMsg {
  typeUrl: "/stride.stakeibc.ReinvestCallback";
  value: Uint8Array;
}
/** ---------------------- Reinvest Callback ---------------------- // */
export interface ReinvestCallbackAmino {
  reinvest_amount?: CoinAmino;
  host_zone_id: string;
}
export interface ReinvestCallbackAminoMsg {
  type: "/stride.stakeibc.ReinvestCallback";
  value: ReinvestCallbackAmino;
}
/** ---------------------- Reinvest Callback ---------------------- // */
export interface ReinvestCallbackSDKType {
  reinvest_amount: CoinSDKType;
  host_zone_id: string;
}
/** ---------------------- Undelegation Callbacks ---------------------- // */
export interface UndelegateCallback {
  hostZoneId: string;
  splitDelegations: SplitDelegation[];
  epochUnbondingRecordIds: bigint[];
}
export interface UndelegateCallbackProtoMsg {
  typeUrl: "/stride.stakeibc.UndelegateCallback";
  value: Uint8Array;
}
/** ---------------------- Undelegation Callbacks ---------------------- // */
export interface UndelegateCallbackAmino {
  host_zone_id: string;
  split_delegations: SplitDelegationAmino[];
  epoch_unbonding_record_ids: string[];
}
export interface UndelegateCallbackAminoMsg {
  type: "/stride.stakeibc.UndelegateCallback";
  value: UndelegateCallbackAmino;
}
/** ---------------------- Undelegation Callbacks ---------------------- // */
export interface UndelegateCallbackSDKType {
  host_zone_id: string;
  split_delegations: SplitDelegationSDKType[];
  epoch_unbonding_record_ids: bigint[];
}
/** ---------------------- Redemption Callbacks ---------------------- // */
export interface RedemptionCallback {
  hostZoneId: string;
  epochUnbondingRecordIds: bigint[];
}
export interface RedemptionCallbackProtoMsg {
  typeUrl: "/stride.stakeibc.RedemptionCallback";
  value: Uint8Array;
}
/** ---------------------- Redemption Callbacks ---------------------- // */
export interface RedemptionCallbackAmino {
  host_zone_id: string;
  epoch_unbonding_record_ids: string[];
}
export interface RedemptionCallbackAminoMsg {
  type: "/stride.stakeibc.RedemptionCallback";
  value: RedemptionCallbackAmino;
}
/** ---------------------- Redemption Callbacks ---------------------- // */
export interface RedemptionCallbackSDKType {
  host_zone_id: string;
  epoch_unbonding_record_ids: bigint[];
}
export interface Rebalancing {
  srcValidator: string;
  dstValidator: string;
  amt: string;
}
export interface RebalancingProtoMsg {
  typeUrl: "/stride.stakeibc.Rebalancing";
  value: Uint8Array;
}
export interface RebalancingAmino {
  src_validator: string;
  dst_validator: string;
  amt: string;
}
export interface RebalancingAminoMsg {
  type: "/stride.stakeibc.Rebalancing";
  value: RebalancingAmino;
}
export interface RebalancingSDKType {
  src_validator: string;
  dst_validator: string;
  amt: string;
}
export interface RebalanceCallback {
  hostZoneId: string;
  rebalancings: Rebalancing[];
}
export interface RebalanceCallbackProtoMsg {
  typeUrl: "/stride.stakeibc.RebalanceCallback";
  value: Uint8Array;
}
export interface RebalanceCallbackAmino {
  host_zone_id: string;
  rebalancings: RebalancingAmino[];
}
export interface RebalanceCallbackAminoMsg {
  type: "/stride.stakeibc.RebalanceCallback";
  value: RebalanceCallbackAmino;
}
export interface RebalanceCallbackSDKType {
  host_zone_id: string;
  rebalancings: RebalancingSDKType[];
}
function createBaseSplitDelegation(): SplitDelegation {
  return {
    validator: "",
    amount: ""
  };
}
export const SplitDelegation = {
  typeUrl: "/stride.stakeibc.SplitDelegation",
  encode(message: SplitDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): SplitDelegation {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  fromPartial(object: Partial<SplitDelegation>): SplitDelegation {
    const message = createBaseSplitDelegation();
    message.validator = object.validator ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: SplitDelegationAmino): SplitDelegation {
    return {
      validator: object.validator,
      amount: object.amount
    };
  },
  toAmino(message: SplitDelegation): SplitDelegationAmino {
    const obj: any = {};
    obj.validator = message.validator;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: SplitDelegationAminoMsg): SplitDelegation {
    return SplitDelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: SplitDelegationProtoMsg): SplitDelegation {
    return SplitDelegation.decode(message.value);
  },
  toProto(message: SplitDelegation): Uint8Array {
    return SplitDelegation.encode(message).finish();
  },
  toProtoMsg(message: SplitDelegation): SplitDelegationProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.SplitDelegation",
      value: SplitDelegation.encode(message).finish()
    };
  }
};
function createBaseDelegateCallback(): DelegateCallback {
  return {
    hostZoneId: "",
    depositRecordId: BigInt(0),
    splitDelegations: []
  };
}
export const DelegateCallback = {
  typeUrl: "/stride.stakeibc.DelegateCallback",
  encode(message: DelegateCallback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostZoneId !== "") {
      writer.uint32(10).string(message.hostZoneId);
    }
    if (message.depositRecordId !== BigInt(0)) {
      writer.uint32(16).uint64(message.depositRecordId);
    }
    for (const v of message.splitDelegations) {
      SplitDelegation.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DelegateCallback {
    return {
      hostZoneId: isSet(object.hostZoneId) ? String(object.hostZoneId) : "",
      depositRecordId: isSet(object.depositRecordId) ? BigInt(object.depositRecordId.toString()) : BigInt(0),
      splitDelegations: Array.isArray(object?.splitDelegations) ? object.splitDelegations.map((e: any) => SplitDelegation.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<DelegateCallback>): DelegateCallback {
    const message = createBaseDelegateCallback();
    message.hostZoneId = object.hostZoneId ?? "";
    message.depositRecordId = object.depositRecordId !== undefined && object.depositRecordId !== null ? BigInt(object.depositRecordId.toString()) : BigInt(0);
    message.splitDelegations = object.splitDelegations?.map(e => SplitDelegation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DelegateCallbackAmino): DelegateCallback {
    return {
      hostZoneId: object.host_zone_id,
      depositRecordId: BigInt(object.deposit_record_id),
      splitDelegations: Array.isArray(object?.split_delegations) ? object.split_delegations.map((e: any) => SplitDelegation.fromAmino(e)) : []
    };
  },
  toAmino(message: DelegateCallback): DelegateCallbackAmino {
    const obj: any = {};
    obj.host_zone_id = message.hostZoneId;
    obj.deposit_record_id = message.depositRecordId ? message.depositRecordId.toString() : undefined;
    if (message.splitDelegations) {
      obj.split_delegations = message.splitDelegations.map(e => e ? SplitDelegation.toAmino(e) : undefined);
    } else {
      obj.split_delegations = [];
    }
    return obj;
  },
  fromAminoMsg(object: DelegateCallbackAminoMsg): DelegateCallback {
    return DelegateCallback.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegateCallbackProtoMsg): DelegateCallback {
    return DelegateCallback.decode(message.value);
  },
  toProto(message: DelegateCallback): Uint8Array {
    return DelegateCallback.encode(message).finish();
  },
  toProtoMsg(message: DelegateCallback): DelegateCallbackProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.DelegateCallback",
      value: DelegateCallback.encode(message).finish()
    };
  }
};
function createBaseClaimCallback(): ClaimCallback {
  return {
    userRedemptionRecordId: "",
    chainId: "",
    epochNumber: BigInt(0)
  };
}
export const ClaimCallback = {
  typeUrl: "/stride.stakeibc.ClaimCallback",
  encode(message: ClaimCallback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userRedemptionRecordId !== "") {
      writer.uint32(10).string(message.userRedemptionRecordId);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(24).uint64(message.epochNumber);
    }
    return writer;
  },
  fromJSON(object: any): ClaimCallback {
    return {
      userRedemptionRecordId: isSet(object.userRedemptionRecordId) ? String(object.userRedemptionRecordId) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      epochNumber: isSet(object.epochNumber) ? BigInt(object.epochNumber.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<ClaimCallback>): ClaimCallback {
    const message = createBaseClaimCallback();
    message.userRedemptionRecordId = object.userRedemptionRecordId ?? "";
    message.chainId = object.chainId ?? "";
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ClaimCallbackAmino): ClaimCallback {
    return {
      userRedemptionRecordId: object.user_redemption_record_id,
      chainId: object.chain_id,
      epochNumber: BigInt(object.epoch_number)
    };
  },
  toAmino(message: ClaimCallback): ClaimCallbackAmino {
    const obj: any = {};
    obj.user_redemption_record_id = message.userRedemptionRecordId;
    obj.chain_id = message.chainId;
    obj.epoch_number = message.epochNumber ? message.epochNumber.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ClaimCallbackAminoMsg): ClaimCallback {
    return ClaimCallback.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimCallbackProtoMsg): ClaimCallback {
    return ClaimCallback.decode(message.value);
  },
  toProto(message: ClaimCallback): Uint8Array {
    return ClaimCallback.encode(message).finish();
  },
  toProtoMsg(message: ClaimCallback): ClaimCallbackProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.ClaimCallback",
      value: ClaimCallback.encode(message).finish()
    };
  }
};
function createBaseReinvestCallback(): ReinvestCallback {
  return {
    reinvestAmount: Coin.fromPartial({}),
    hostZoneId: ""
  };
}
export const ReinvestCallback = {
  typeUrl: "/stride.stakeibc.ReinvestCallback",
  encode(message: ReinvestCallback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reinvestAmount !== undefined) {
      Coin.encode(message.reinvestAmount, writer.uint32(10).fork()).ldelim();
    }
    if (message.hostZoneId !== "") {
      writer.uint32(26).string(message.hostZoneId);
    }
    return writer;
  },
  fromJSON(object: any): ReinvestCallback {
    return {
      reinvestAmount: isSet(object.reinvestAmount) ? Coin.fromJSON(object.reinvestAmount) : undefined,
      hostZoneId: isSet(object.hostZoneId) ? String(object.hostZoneId) : ""
    };
  },
  fromPartial(object: Partial<ReinvestCallback>): ReinvestCallback {
    const message = createBaseReinvestCallback();
    message.reinvestAmount = object.reinvestAmount !== undefined && object.reinvestAmount !== null ? Coin.fromPartial(object.reinvestAmount) : undefined;
    message.hostZoneId = object.hostZoneId ?? "";
    return message;
  },
  fromAmino(object: ReinvestCallbackAmino): ReinvestCallback {
    return {
      reinvestAmount: object?.reinvest_amount ? Coin.fromAmino(object.reinvest_amount) : undefined,
      hostZoneId: object.host_zone_id
    };
  },
  toAmino(message: ReinvestCallback): ReinvestCallbackAmino {
    const obj: any = {};
    obj.reinvest_amount = message.reinvestAmount ? Coin.toAmino(message.reinvestAmount) : undefined;
    obj.host_zone_id = message.hostZoneId;
    return obj;
  },
  fromAminoMsg(object: ReinvestCallbackAminoMsg): ReinvestCallback {
    return ReinvestCallback.fromAmino(object.value);
  },
  fromProtoMsg(message: ReinvestCallbackProtoMsg): ReinvestCallback {
    return ReinvestCallback.decode(message.value);
  },
  toProto(message: ReinvestCallback): Uint8Array {
    return ReinvestCallback.encode(message).finish();
  },
  toProtoMsg(message: ReinvestCallback): ReinvestCallbackProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.ReinvestCallback",
      value: ReinvestCallback.encode(message).finish()
    };
  }
};
function createBaseUndelegateCallback(): UndelegateCallback {
  return {
    hostZoneId: "",
    splitDelegations: [],
    epochUnbondingRecordIds: []
  };
}
export const UndelegateCallback = {
  typeUrl: "/stride.stakeibc.UndelegateCallback",
  encode(message: UndelegateCallback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostZoneId !== "") {
      writer.uint32(10).string(message.hostZoneId);
    }
    for (const v of message.splitDelegations) {
      SplitDelegation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.epochUnbondingRecordIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): UndelegateCallback {
    return {
      hostZoneId: isSet(object.hostZoneId) ? String(object.hostZoneId) : "",
      splitDelegations: Array.isArray(object?.splitDelegations) ? object.splitDelegations.map((e: any) => SplitDelegation.fromJSON(e)) : [],
      epochUnbondingRecordIds: Array.isArray(object?.epochUnbondingRecordIds) ? object.epochUnbondingRecordIds.map((e: any) => BigInt(e.toString())) : []
    };
  },
  fromPartial(object: Partial<UndelegateCallback>): UndelegateCallback {
    const message = createBaseUndelegateCallback();
    message.hostZoneId = object.hostZoneId ?? "";
    message.splitDelegations = object.splitDelegations?.map(e => SplitDelegation.fromPartial(e)) || [];
    message.epochUnbondingRecordIds = object.epochUnbondingRecordIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: UndelegateCallbackAmino): UndelegateCallback {
    return {
      hostZoneId: object.host_zone_id,
      splitDelegations: Array.isArray(object?.split_delegations) ? object.split_delegations.map((e: any) => SplitDelegation.fromAmino(e)) : [],
      epochUnbondingRecordIds: Array.isArray(object?.epoch_unbonding_record_ids) ? object.epoch_unbonding_record_ids.map((e: any) => BigInt(e)) : []
    };
  },
  toAmino(message: UndelegateCallback): UndelegateCallbackAmino {
    const obj: any = {};
    obj.host_zone_id = message.hostZoneId;
    if (message.splitDelegations) {
      obj.split_delegations = message.splitDelegations.map(e => e ? SplitDelegation.toAmino(e) : undefined);
    } else {
      obj.split_delegations = [];
    }
    if (message.epochUnbondingRecordIds) {
      obj.epoch_unbonding_record_ids = message.epochUnbondingRecordIds.map(e => e.toString());
    } else {
      obj.epoch_unbonding_record_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: UndelegateCallbackAminoMsg): UndelegateCallback {
    return UndelegateCallback.fromAmino(object.value);
  },
  fromProtoMsg(message: UndelegateCallbackProtoMsg): UndelegateCallback {
    return UndelegateCallback.decode(message.value);
  },
  toProto(message: UndelegateCallback): Uint8Array {
    return UndelegateCallback.encode(message).finish();
  },
  toProtoMsg(message: UndelegateCallback): UndelegateCallbackProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.UndelegateCallback",
      value: UndelegateCallback.encode(message).finish()
    };
  }
};
function createBaseRedemptionCallback(): RedemptionCallback {
  return {
    hostZoneId: "",
    epochUnbondingRecordIds: []
  };
}
export const RedemptionCallback = {
  typeUrl: "/stride.stakeibc.RedemptionCallback",
  encode(message: RedemptionCallback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostZoneId !== "") {
      writer.uint32(10).string(message.hostZoneId);
    }
    writer.uint32(18).fork();
    for (const v of message.epochUnbondingRecordIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): RedemptionCallback {
    return {
      hostZoneId: isSet(object.hostZoneId) ? String(object.hostZoneId) : "",
      epochUnbondingRecordIds: Array.isArray(object?.epochUnbondingRecordIds) ? object.epochUnbondingRecordIds.map((e: any) => BigInt(e.toString())) : []
    };
  },
  fromPartial(object: Partial<RedemptionCallback>): RedemptionCallback {
    const message = createBaseRedemptionCallback();
    message.hostZoneId = object.hostZoneId ?? "";
    message.epochUnbondingRecordIds = object.epochUnbondingRecordIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: RedemptionCallbackAmino): RedemptionCallback {
    return {
      hostZoneId: object.host_zone_id,
      epochUnbondingRecordIds: Array.isArray(object?.epoch_unbonding_record_ids) ? object.epoch_unbonding_record_ids.map((e: any) => BigInt(e)) : []
    };
  },
  toAmino(message: RedemptionCallback): RedemptionCallbackAmino {
    const obj: any = {};
    obj.host_zone_id = message.hostZoneId;
    if (message.epochUnbondingRecordIds) {
      obj.epoch_unbonding_record_ids = message.epochUnbondingRecordIds.map(e => e.toString());
    } else {
      obj.epoch_unbonding_record_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: RedemptionCallbackAminoMsg): RedemptionCallback {
    return RedemptionCallback.fromAmino(object.value);
  },
  fromProtoMsg(message: RedemptionCallbackProtoMsg): RedemptionCallback {
    return RedemptionCallback.decode(message.value);
  },
  toProto(message: RedemptionCallback): Uint8Array {
    return RedemptionCallback.encode(message).finish();
  },
  toProtoMsg(message: RedemptionCallback): RedemptionCallbackProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.RedemptionCallback",
      value: RedemptionCallback.encode(message).finish()
    };
  }
};
function createBaseRebalancing(): Rebalancing {
  return {
    srcValidator: "",
    dstValidator: "",
    amt: ""
  };
}
export const Rebalancing = {
  typeUrl: "/stride.stakeibc.Rebalancing",
  encode(message: Rebalancing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.srcValidator !== "") {
      writer.uint32(10).string(message.srcValidator);
    }
    if (message.dstValidator !== "") {
      writer.uint32(18).string(message.dstValidator);
    }
    if (message.amt !== "") {
      writer.uint32(26).string(message.amt);
    }
    return writer;
  },
  fromJSON(object: any): Rebalancing {
    return {
      srcValidator: isSet(object.srcValidator) ? String(object.srcValidator) : "",
      dstValidator: isSet(object.dstValidator) ? String(object.dstValidator) : "",
      amt: isSet(object.amt) ? String(object.amt) : ""
    };
  },
  fromPartial(object: Partial<Rebalancing>): Rebalancing {
    const message = createBaseRebalancing();
    message.srcValidator = object.srcValidator ?? "";
    message.dstValidator = object.dstValidator ?? "";
    message.amt = object.amt ?? "";
    return message;
  },
  fromAmino(object: RebalancingAmino): Rebalancing {
    return {
      srcValidator: object.src_validator,
      dstValidator: object.dst_validator,
      amt: object.amt
    };
  },
  toAmino(message: Rebalancing): RebalancingAmino {
    const obj: any = {};
    obj.src_validator = message.srcValidator;
    obj.dst_validator = message.dstValidator;
    obj.amt = message.amt;
    return obj;
  },
  fromAminoMsg(object: RebalancingAminoMsg): Rebalancing {
    return Rebalancing.fromAmino(object.value);
  },
  fromProtoMsg(message: RebalancingProtoMsg): Rebalancing {
    return Rebalancing.decode(message.value);
  },
  toProto(message: Rebalancing): Uint8Array {
    return Rebalancing.encode(message).finish();
  },
  toProtoMsg(message: Rebalancing): RebalancingProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.Rebalancing",
      value: Rebalancing.encode(message).finish()
    };
  }
};
function createBaseRebalanceCallback(): RebalanceCallback {
  return {
    hostZoneId: "",
    rebalancings: []
  };
}
export const RebalanceCallback = {
  typeUrl: "/stride.stakeibc.RebalanceCallback",
  encode(message: RebalanceCallback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostZoneId !== "") {
      writer.uint32(10).string(message.hostZoneId);
    }
    for (const v of message.rebalancings) {
      Rebalancing.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RebalanceCallback {
    return {
      hostZoneId: isSet(object.hostZoneId) ? String(object.hostZoneId) : "",
      rebalancings: Array.isArray(object?.rebalancings) ? object.rebalancings.map((e: any) => Rebalancing.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<RebalanceCallback>): RebalanceCallback {
    const message = createBaseRebalanceCallback();
    message.hostZoneId = object.hostZoneId ?? "";
    message.rebalancings = object.rebalancings?.map(e => Rebalancing.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RebalanceCallbackAmino): RebalanceCallback {
    return {
      hostZoneId: object.host_zone_id,
      rebalancings: Array.isArray(object?.rebalancings) ? object.rebalancings.map((e: any) => Rebalancing.fromAmino(e)) : []
    };
  },
  toAmino(message: RebalanceCallback): RebalanceCallbackAmino {
    const obj: any = {};
    obj.host_zone_id = message.hostZoneId;
    if (message.rebalancings) {
      obj.rebalancings = message.rebalancings.map(e => e ? Rebalancing.toAmino(e) : undefined);
    } else {
      obj.rebalancings = [];
    }
    return obj;
  },
  fromAminoMsg(object: RebalanceCallbackAminoMsg): RebalanceCallback {
    return RebalanceCallback.fromAmino(object.value);
  },
  fromProtoMsg(message: RebalanceCallbackProtoMsg): RebalanceCallback {
    return RebalanceCallback.decode(message.value);
  },
  toProto(message: RebalanceCallback): Uint8Array {
    return RebalanceCallback.encode(message).finish();
  },
  toProtoMsg(message: RebalanceCallback): RebalanceCallbackProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.RebalanceCallback",
      value: RebalanceCallback.encode(message).finish()
    };
  }
};