import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** ---------------------- Delegation Callbacks ---------------------- // */
export interface SplitDelegation {
  validator: string;
  amount: string;
}
/** ---------------------- Delegation Callbacks ---------------------- // */
export interface SplitDelegationSDKType {
  validator: string;
  amount: string;
}
export interface DelegateCallback {
  hostZoneId: string;
  depositRecordId: Long;
  splitDelegations: SplitDelegation[];
}
export interface DelegateCallbackSDKType {
  host_zone_id: string;
  deposit_record_id: Long;
  split_delegations: SplitDelegationSDKType[];
}
export interface ClaimCallback {
  userRedemptionRecordId: string;
  chainId: string;
  epochNumber: Long;
}
export interface ClaimCallbackSDKType {
  user_redemption_record_id: string;
  chain_id: string;
  epoch_number: Long;
}
/** ---------------------- Reinvest Callback ---------------------- // */
export interface ReinvestCallback {
  reinvestAmount?: Coin;
  hostZoneId: string;
}
/** ---------------------- Reinvest Callback ---------------------- // */
export interface ReinvestCallbackSDKType {
  reinvest_amount?: CoinSDKType;
  host_zone_id: string;
}
/** ---------------------- Undelegation Callbacks ---------------------- // */
export interface UndelegateCallback {
  hostZoneId: string;
  splitDelegations: SplitDelegation[];
  epochUnbondingRecordIds: Long[];
}
/** ---------------------- Undelegation Callbacks ---------------------- // */
export interface UndelegateCallbackSDKType {
  host_zone_id: string;
  split_delegations: SplitDelegationSDKType[];
  epoch_unbonding_record_ids: Long[];
}
/** ---------------------- Redemption Callbacks ---------------------- // */
export interface RedemptionCallback {
  hostZoneId: string;
  epochUnbondingRecordIds: Long[];
}
/** ---------------------- Redemption Callbacks ---------------------- // */
export interface RedemptionCallbackSDKType {
  host_zone_id: string;
  epoch_unbonding_record_ids: Long[];
}
export interface Rebalancing {
  srcValidator: string;
  dstValidator: string;
  amt: string;
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
  encode(message: SplitDelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseDelegateCallback(): DelegateCallback {
  return {
    hostZoneId: "",
    depositRecordId: Long.UZERO,
    splitDelegations: []
  };
}
export const DelegateCallback = {
  encode(message: DelegateCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostZoneId !== "") {
      writer.uint32(10).string(message.hostZoneId);
    }
    if (!message.depositRecordId.isZero()) {
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
      depositRecordId: isSet(object.depositRecordId) ? Long.fromValue(object.depositRecordId) : Long.UZERO,
      splitDelegations: Array.isArray(object?.splitDelegations) ? object.splitDelegations.map((e: any) => SplitDelegation.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<DelegateCallback>): DelegateCallback {
    const message = createBaseDelegateCallback();
    message.hostZoneId = object.hostZoneId ?? "";
    message.depositRecordId = object.depositRecordId !== undefined && object.depositRecordId !== null ? Long.fromValue(object.depositRecordId) : Long.UZERO;
    message.splitDelegations = object.splitDelegations?.map(e => SplitDelegation.fromPartial(e)) || [];
    return message;
  }
};
function createBaseClaimCallback(): ClaimCallback {
  return {
    userRedemptionRecordId: "",
    chainId: "",
    epochNumber: Long.UZERO
  };
}
export const ClaimCallback = {
  encode(message: ClaimCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userRedemptionRecordId !== "") {
      writer.uint32(10).string(message.userRedemptionRecordId);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (!message.epochNumber.isZero()) {
      writer.uint32(24).uint64(message.epochNumber);
    }
    return writer;
  },
  fromJSON(object: any): ClaimCallback {
    return {
      userRedemptionRecordId: isSet(object.userRedemptionRecordId) ? String(object.userRedemptionRecordId) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      epochNumber: isSet(object.epochNumber) ? Long.fromValue(object.epochNumber) : Long.UZERO
    };
  },
  fromPartial(object: Partial<ClaimCallback>): ClaimCallback {
    const message = createBaseClaimCallback();
    message.userRedemptionRecordId = object.userRedemptionRecordId ?? "";
    message.chainId = object.chainId ?? "";
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.UZERO;
    return message;
  }
};
function createBaseReinvestCallback(): ReinvestCallback {
  return {
    reinvestAmount: undefined,
    hostZoneId: ""
  };
}
export const ReinvestCallback = {
  encode(message: ReinvestCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: UndelegateCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      epochUnbondingRecordIds: Array.isArray(object?.epochUnbondingRecordIds) ? object.epochUnbondingRecordIds.map((e: any) => Long.fromValue(e)) : []
    };
  },
  fromPartial(object: Partial<UndelegateCallback>): UndelegateCallback {
    const message = createBaseUndelegateCallback();
    message.hostZoneId = object.hostZoneId ?? "";
    message.splitDelegations = object.splitDelegations?.map(e => SplitDelegation.fromPartial(e)) || [];
    message.epochUnbondingRecordIds = object.epochUnbondingRecordIds?.map(e => Long.fromValue(e)) || [];
    return message;
  }
};
function createBaseRedemptionCallback(): RedemptionCallback {
  return {
    hostZoneId: "",
    epochUnbondingRecordIds: []
  };
}
export const RedemptionCallback = {
  encode(message: RedemptionCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      epochUnbondingRecordIds: Array.isArray(object?.epochUnbondingRecordIds) ? object.epochUnbondingRecordIds.map((e: any) => Long.fromValue(e)) : []
    };
  },
  fromPartial(object: Partial<RedemptionCallback>): RedemptionCallback {
    const message = createBaseRedemptionCallback();
    message.hostZoneId = object.hostZoneId ?? "";
    message.epochUnbondingRecordIds = object.epochUnbondingRecordIds?.map(e => Long.fromValue(e)) || [];
    return message;
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
  encode(message: Rebalancing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseRebalanceCallback(): RebalanceCallback {
  return {
    hostZoneId: "",
    rebalancings: []
  };
}
export const RebalanceCallback = {
  encode(message: RebalanceCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};