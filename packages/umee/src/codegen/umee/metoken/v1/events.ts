import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** EventSwap is emitted on Msg/Swap */
export interface EventSwap {
  /** meToken recipient bech32 address. */
  recipient: string;
  /** Asset provided for the swap. */
  asset: Coin;
  /** meToken received by the recipient in exchange for the provided asset. */
  metoken: Coin;
  /** Fee provided for the swap. */
  fee: Coin;
}
export interface EventSwapProtoMsg {
  typeUrl: "/umee.metoken.v1.EventSwap";
  value: Uint8Array;
}
/** EventSwap is emitted on Msg/Swap */
export interface EventSwapAmino {
  /** meToken recipient bech32 address. */
  recipient?: string;
  /** Asset provided for the swap. */
  asset?: CoinAmino;
  /** meToken received by the recipient in exchange for the provided asset. */
  metoken?: CoinAmino;
  /** Fee provided for the swap. */
  fee?: CoinAmino;
}
export interface EventSwapAminoMsg {
  type: "/umee.metoken.v1.EventSwap";
  value: EventSwapAmino;
}
/** EventSwap is emitted on Msg/Swap */
export interface EventSwapSDKType {
  recipient: string;
  asset: CoinSDKType;
  metoken: CoinSDKType;
  fee: CoinSDKType;
}
/** EventRedeem is emitted on Msg/Redeem */
export interface EventRedeem {
  /** Asset recipient bech32 address. */
  recipient: string;
  /** meToken provided for the redemption. */
  metoken: Coin;
  /** Asset received by the recipient in exchange for the provided meToken. */
  asset: Coin;
  /** Fee provided for the redemption. */
  fee: Coin;
}
export interface EventRedeemProtoMsg {
  typeUrl: "/umee.metoken.v1.EventRedeem";
  value: Uint8Array;
}
/** EventRedeem is emitted on Msg/Redeem */
export interface EventRedeemAmino {
  /** Asset recipient bech32 address. */
  recipient?: string;
  /** meToken provided for the redemption. */
  metoken?: CoinAmino;
  /** Asset received by the recipient in exchange for the provided meToken. */
  asset?: CoinAmino;
  /** Fee provided for the redemption. */
  fee?: CoinAmino;
}
export interface EventRedeemAminoMsg {
  type: "/umee.metoken.v1.EventRedeem";
  value: EventRedeemAmino;
}
/** EventRedeem is emitted on Msg/Redeem */
export interface EventRedeemSDKType {
  recipient: string;
  metoken: CoinSDKType;
  asset: CoinSDKType;
  fee: CoinSDKType;
}
/** EventRebalancing is emitted when a reserve re-balancing occurs. */
export interface EventRebalancing {
  /** RebalancingResults of every asset in every Index. */
  results: RebalancingResult[];
}
export interface EventRebalancingProtoMsg {
  typeUrl: "/umee.metoken.v1.EventRebalancing";
  value: Uint8Array;
}
/** EventRebalancing is emitted when a reserve re-balancing occurs. */
export interface EventRebalancingAmino {
  /** RebalancingResults of every asset in every Index. */
  results?: RebalancingResultAmino[];
}
export interface EventRebalancingAminoMsg {
  type: "/umee.metoken.v1.EventRebalancing";
  value: EventRebalancingAmino;
}
/** EventRebalancing is emitted when a reserve re-balancing occurs. */
export interface EventRebalancingSDKType {
  results: RebalancingResultSDKType[];
}
/** RebalancingResult of a specific Index with initial and result balances of underlying assets. */
export interface RebalancingResult {
  metokenDenom: string;
  /** Initial balance of an asset in the Index before re-balancing. */
  initialBalance: Coin[];
  /** Result balance of an asset in the Index after re-balancing. */
  resultBalance: Coin[];
}
export interface RebalancingResultProtoMsg {
  typeUrl: "/umee.metoken.v1.RebalancingResult";
  value: Uint8Array;
}
/** RebalancingResult of a specific Index with initial and result balances of underlying assets. */
export interface RebalancingResultAmino {
  metoken_denom?: string;
  /** Initial balance of an asset in the Index before re-balancing. */
  initial_balance?: CoinAmino[];
  /** Result balance of an asset in the Index after re-balancing. */
  result_balance?: CoinAmino[];
}
export interface RebalancingResultAminoMsg {
  type: "/umee.metoken.v1.RebalancingResult";
  value: RebalancingResultAmino;
}
/** RebalancingResult of a specific Index with initial and result balances of underlying assets. */
export interface RebalancingResultSDKType {
  metoken_denom: string;
  initial_balance: CoinSDKType[];
  result_balance: CoinSDKType[];
}
/** EventInterestClaim is emitted when the accrued interest was claimed from x/leverage */
export interface EventInterestClaim {
  /** The denom and amount of successfully claimed interest */
  claimedAsset: Coin[];
}
export interface EventInterestClaimProtoMsg {
  typeUrl: "/umee.metoken.v1.EventInterestClaim";
  value: Uint8Array;
}
/** EventInterestClaim is emitted when the accrued interest was claimed from x/leverage */
export interface EventInterestClaimAmino {
  /** The denom and amount of successfully claimed interest */
  claimed_asset?: CoinAmino[];
}
export interface EventInterestClaimAminoMsg {
  type: "/umee.metoken.v1.EventInterestClaim";
  value: EventInterestClaimAmino;
}
/** EventInterestClaim is emitted when the accrued interest was claimed from x/leverage */
export interface EventInterestClaimSDKType {
  claimed_asset: CoinSDKType[];
}
function createBaseEventSwap(): EventSwap {
  return {
    recipient: "",
    asset: Coin.fromPartial({}),
    metoken: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const EventSwap = {
  typeUrl: "/umee.metoken.v1.EventSwap",
  encode(message: EventSwap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    if (message.metoken !== undefined) {
      Coin.encode(message.metoken, writer.uint32(26).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventSwap {
    return {
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
      metoken: isSet(object.metoken) ? Coin.fromJSON(object.metoken) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  fromPartial(object: Partial<EventSwap>): EventSwap {
    const message = createBaseEventSwap();
    message.recipient = object.recipient ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    message.metoken = object.metoken !== undefined && object.metoken !== null ? Coin.fromPartial(object.metoken) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: EventSwapAmino): EventSwap {
    const message = createBaseEventSwap();
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Coin.fromAmino(object.asset);
    }
    if (object.metoken !== undefined && object.metoken !== null) {
      message.metoken = Coin.fromAmino(object.metoken);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: EventSwap): EventSwapAmino {
    const obj: any = {};
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    obj.metoken = message.metoken ? Coin.toAmino(message.metoken) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSwapAminoMsg): EventSwap {
    return EventSwap.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSwapProtoMsg): EventSwap {
    return EventSwap.decode(message.value);
  },
  toProto(message: EventSwap): Uint8Array {
    return EventSwap.encode(message).finish();
  },
  toProtoMsg(message: EventSwap): EventSwapProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.EventSwap",
      value: EventSwap.encode(message).finish()
    };
  }
};
function createBaseEventRedeem(): EventRedeem {
  return {
    recipient: "",
    metoken: Coin.fromPartial({}),
    asset: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const EventRedeem = {
  typeUrl: "/umee.metoken.v1.EventRedeem",
  encode(message: EventRedeem, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    if (message.metoken !== undefined) {
      Coin.encode(message.metoken, writer.uint32(18).fork()).ldelim();
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(26).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventRedeem {
    return {
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      metoken: isSet(object.metoken) ? Coin.fromJSON(object.metoken) : undefined,
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  fromPartial(object: Partial<EventRedeem>): EventRedeem {
    const message = createBaseEventRedeem();
    message.recipient = object.recipient ?? "";
    message.metoken = object.metoken !== undefined && object.metoken !== null ? Coin.fromPartial(object.metoken) : undefined;
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: EventRedeemAmino): EventRedeem {
    const message = createBaseEventRedeem();
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.metoken !== undefined && object.metoken !== null) {
      message.metoken = Coin.fromAmino(object.metoken);
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Coin.fromAmino(object.asset);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: EventRedeem): EventRedeemAmino {
    const obj: any = {};
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.metoken = message.metoken ? Coin.toAmino(message.metoken) : undefined;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventRedeemAminoMsg): EventRedeem {
    return EventRedeem.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRedeemProtoMsg): EventRedeem {
    return EventRedeem.decode(message.value);
  },
  toProto(message: EventRedeem): Uint8Array {
    return EventRedeem.encode(message).finish();
  },
  toProtoMsg(message: EventRedeem): EventRedeemProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.EventRedeem",
      value: EventRedeem.encode(message).finish()
    };
  }
};
function createBaseEventRebalancing(): EventRebalancing {
  return {
    results: []
  };
}
export const EventRebalancing = {
  typeUrl: "/umee.metoken.v1.EventRebalancing",
  encode(message: EventRebalancing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.results) {
      RebalancingResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventRebalancing {
    return {
      results: Array.isArray(object?.results) ? object.results.map((e: any) => RebalancingResult.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EventRebalancing>): EventRebalancing {
    const message = createBaseEventRebalancing();
    message.results = object.results?.map(e => RebalancingResult.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventRebalancingAmino): EventRebalancing {
    const message = createBaseEventRebalancing();
    message.results = object.results?.map(e => RebalancingResult.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EventRebalancing): EventRebalancingAmino {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map(e => e ? RebalancingResult.toAmino(e) : undefined);
    } else {
      obj.results = message.results;
    }
    return obj;
  },
  fromAminoMsg(object: EventRebalancingAminoMsg): EventRebalancing {
    return EventRebalancing.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRebalancingProtoMsg): EventRebalancing {
    return EventRebalancing.decode(message.value);
  },
  toProto(message: EventRebalancing): Uint8Array {
    return EventRebalancing.encode(message).finish();
  },
  toProtoMsg(message: EventRebalancing): EventRebalancingProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.EventRebalancing",
      value: EventRebalancing.encode(message).finish()
    };
  }
};
function createBaseRebalancingResult(): RebalancingResult {
  return {
    metokenDenom: "",
    initialBalance: [],
    resultBalance: []
  };
}
export const RebalancingResult = {
  typeUrl: "/umee.metoken.v1.RebalancingResult",
  encode(message: RebalancingResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metokenDenom !== "") {
      writer.uint32(10).string(message.metokenDenom);
    }
    for (const v of message.initialBalance) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.resultBalance) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RebalancingResult {
    return {
      metokenDenom: isSet(object.metokenDenom) ? String(object.metokenDenom) : "",
      initialBalance: Array.isArray(object?.initialBalance) ? object.initialBalance.map((e: any) => Coin.fromJSON(e)) : [],
      resultBalance: Array.isArray(object?.resultBalance) ? object.resultBalance.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<RebalancingResult>): RebalancingResult {
    const message = createBaseRebalancingResult();
    message.metokenDenom = object.metokenDenom ?? "";
    message.initialBalance = object.initialBalance?.map(e => Coin.fromPartial(e)) || [];
    message.resultBalance = object.resultBalance?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RebalancingResultAmino): RebalancingResult {
    const message = createBaseRebalancingResult();
    if (object.metoken_denom !== undefined && object.metoken_denom !== null) {
      message.metokenDenom = object.metoken_denom;
    }
    message.initialBalance = object.initial_balance?.map(e => Coin.fromAmino(e)) || [];
    message.resultBalance = object.result_balance?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RebalancingResult): RebalancingResultAmino {
    const obj: any = {};
    obj.metoken_denom = message.metokenDenom === "" ? undefined : message.metokenDenom;
    if (message.initialBalance) {
      obj.initial_balance = message.initialBalance.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.initial_balance = message.initialBalance;
    }
    if (message.resultBalance) {
      obj.result_balance = message.resultBalance.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.result_balance = message.resultBalance;
    }
    return obj;
  },
  fromAminoMsg(object: RebalancingResultAminoMsg): RebalancingResult {
    return RebalancingResult.fromAmino(object.value);
  },
  fromProtoMsg(message: RebalancingResultProtoMsg): RebalancingResult {
    return RebalancingResult.decode(message.value);
  },
  toProto(message: RebalancingResult): Uint8Array {
    return RebalancingResult.encode(message).finish();
  },
  toProtoMsg(message: RebalancingResult): RebalancingResultProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.RebalancingResult",
      value: RebalancingResult.encode(message).finish()
    };
  }
};
function createBaseEventInterestClaim(): EventInterestClaim {
  return {
    claimedAsset: []
  };
}
export const EventInterestClaim = {
  typeUrl: "/umee.metoken.v1.EventInterestClaim",
  encode(message: EventInterestClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.claimedAsset) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventInterestClaim {
    return {
      claimedAsset: Array.isArray(object?.claimedAsset) ? object.claimedAsset.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EventInterestClaim>): EventInterestClaim {
    const message = createBaseEventInterestClaim();
    message.claimedAsset = object.claimedAsset?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventInterestClaimAmino): EventInterestClaim {
    const message = createBaseEventInterestClaim();
    message.claimedAsset = object.claimed_asset?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EventInterestClaim): EventInterestClaimAmino {
    const obj: any = {};
    if (message.claimedAsset) {
      obj.claimed_asset = message.claimedAsset.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.claimed_asset = message.claimedAsset;
    }
    return obj;
  },
  fromAminoMsg(object: EventInterestClaimAminoMsg): EventInterestClaim {
    return EventInterestClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: EventInterestClaimProtoMsg): EventInterestClaim {
    return EventInterestClaim.decode(message.value);
  },
  toProto(message: EventInterestClaim): Uint8Array {
    return EventInterestClaim.encode(message).finish();
  },
  toProtoMsg(message: EventInterestClaim): EventInterestClaimProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.EventInterestClaim",
      value: EventInterestClaim.encode(message).finish()
    };
  }
};