import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Series, seriesFromJSON } from "./pool";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export interface MsgCreateReward {
  creator: string;
  recipient: string;
  amount: Coin;
  series: Series;
}
export interface MsgCreateRewardProtoMsg {
  typeUrl: "/gitopia.gitopia.rewards.MsgCreateReward";
  value: Uint8Array;
}
export interface MsgCreateRewardAmino {
  creator?: string;
  recipient?: string;
  amount?: CoinAmino;
  series?: Series;
}
export interface MsgCreateRewardAminoMsg {
  type: "/gitopia.gitopia.rewards.MsgCreateReward";
  value: MsgCreateRewardAmino;
}
export interface MsgCreateRewardSDKType {
  creator: string;
  recipient: string;
  amount: CoinSDKType;
  series: Series;
}
export interface MsgCreateRewardResponse {
  /** actual granted amount */
  amount: Coin;
}
export interface MsgCreateRewardResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.rewards.MsgCreateRewardResponse";
  value: Uint8Array;
}
export interface MsgCreateRewardResponseAmino {
  /** actual granted amount */
  amount?: CoinAmino;
}
export interface MsgCreateRewardResponseAminoMsg {
  type: "/gitopia.gitopia.rewards.MsgCreateRewardResponse";
  value: MsgCreateRewardResponseAmino;
}
export interface MsgCreateRewardResponseSDKType {
  amount: CoinSDKType;
}
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgClaim {
  creator: string;
}
export interface MsgClaimProtoMsg {
  typeUrl: "/gitopia.gitopia.rewards.MsgClaim";
  value: Uint8Array;
}
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgClaimAmino {
  creator?: string;
}
export interface MsgClaimAminoMsg {
  type: "/gitopia.gitopia.rewards.MsgClaim";
  value: MsgClaimAmino;
}
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgClaimSDKType {
  creator: string;
}
export interface ClaimResponseReward {
  series: Series;
  amount: Coin;
}
export interface ClaimResponseRewardProtoMsg {
  typeUrl: "/gitopia.gitopia.rewards.ClaimResponseReward";
  value: Uint8Array;
}
export interface ClaimResponseRewardAmino {
  series?: Series;
  amount?: CoinAmino;
}
export interface ClaimResponseRewardAminoMsg {
  type: "/gitopia.gitopia.rewards.ClaimResponseReward";
  value: ClaimResponseRewardAmino;
}
export interface ClaimResponseRewardSDKType {
  series: Series;
  amount: CoinSDKType;
}
export interface MsgClaimResponse {
  claimedRewards: ClaimResponseReward[];
  expiredRewards: ClaimResponseReward[];
  allClaimedRewards: ClaimResponseReward[];
}
export interface MsgClaimResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.rewards.MsgClaimResponse";
  value: Uint8Array;
}
export interface MsgClaimResponseAmino {
  claimed_rewards?: ClaimResponseRewardAmino[];
  expired_rewards?: ClaimResponseRewardAmino[];
  all_claimed_rewards?: ClaimResponseRewardAmino[];
}
export interface MsgClaimResponseAminoMsg {
  type: "/gitopia.gitopia.rewards.MsgClaimResponse";
  value: MsgClaimResponseAmino;
}
export interface MsgClaimResponseSDKType {
  claimed_rewards: ClaimResponseRewardSDKType[];
  expired_rewards: ClaimResponseRewardSDKType[];
  all_claimed_rewards: ClaimResponseRewardSDKType[];
}
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/rewards parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/gitopia.gitopia.rewards.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /**
   * params defines the x/rewards parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/gitopia.gitopia.rewards.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.rewards.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/gitopia.gitopia.rewards.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgCreateReward(): MsgCreateReward {
  return {
    creator: "",
    recipient: "",
    amount: Coin.fromPartial({}),
    series: 0
  };
}
export const MsgCreateReward = {
  typeUrl: "/gitopia.gitopia.rewards.MsgCreateReward",
  encode(message: MsgCreateReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.series !== 0) {
      writer.uint32(32).int32(message.series);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateReward {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      series: isSet(object.series) ? seriesFromJSON(object.series) : -1
    };
  },
  fromPartial(object: Partial<MsgCreateReward>): MsgCreateReward {
    const message = createBaseMsgCreateReward();
    message.creator = object.creator ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.series = object.series ?? 0;
    return message;
  },
  fromAmino(object: MsgCreateRewardAmino): MsgCreateReward {
    const message = createBaseMsgCreateReward();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.series !== undefined && object.series !== null) {
      message.series = object.series;
    }
    return message;
  },
  toAmino(message: MsgCreateReward): MsgCreateRewardAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.series = message.series === 0 ? undefined : message.series;
    return obj;
  },
  fromAminoMsg(object: MsgCreateRewardAminoMsg): MsgCreateReward {
    return MsgCreateReward.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateRewardProtoMsg): MsgCreateReward {
    return MsgCreateReward.decode(message.value);
  },
  toProto(message: MsgCreateReward): Uint8Array {
    return MsgCreateReward.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateReward): MsgCreateRewardProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.rewards.MsgCreateReward",
      value: MsgCreateReward.encode(message).finish()
    };
  }
};
function createBaseMsgCreateRewardResponse(): MsgCreateRewardResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const MsgCreateRewardResponse = {
  typeUrl: "/gitopia.gitopia.rewards.MsgCreateRewardResponse",
  encode(message: MsgCreateRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateRewardResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateRewardResponse>): MsgCreateRewardResponse {
    const message = createBaseMsgCreateRewardResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateRewardResponseAmino): MsgCreateRewardResponse {
    const message = createBaseMsgCreateRewardResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgCreateRewardResponse): MsgCreateRewardResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateRewardResponseAminoMsg): MsgCreateRewardResponse {
    return MsgCreateRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateRewardResponseProtoMsg): MsgCreateRewardResponse {
    return MsgCreateRewardResponse.decode(message.value);
  },
  toProto(message: MsgCreateRewardResponse): Uint8Array {
    return MsgCreateRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateRewardResponse): MsgCreateRewardResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.rewards.MsgCreateRewardResponse",
      value: MsgCreateRewardResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaim(): MsgClaim {
  return {
    creator: ""
  };
}
export const MsgClaim = {
  typeUrl: "/gitopia.gitopia.rewards.MsgClaim",
  encode(message: MsgClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },
  fromJSON(object: any): MsgClaim {
    return {
      creator: isSet(object.creator) ? String(object.creator) : ""
    };
  },
  fromPartial(object: Partial<MsgClaim>): MsgClaim {
    const message = createBaseMsgClaim();
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgClaimAmino): MsgClaim {
    const message = createBaseMsgClaim();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: MsgClaim): MsgClaimAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgClaimAminoMsg): MsgClaim {
    return MsgClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimProtoMsg): MsgClaim {
    return MsgClaim.decode(message.value);
  },
  toProto(message: MsgClaim): Uint8Array {
    return MsgClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgClaim): MsgClaimProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.rewards.MsgClaim",
      value: MsgClaim.encode(message).finish()
    };
  }
};
function createBaseClaimResponseReward(): ClaimResponseReward {
  return {
    series: 0,
    amount: Coin.fromPartial({})
  };
}
export const ClaimResponseReward = {
  typeUrl: "/gitopia.gitopia.rewards.ClaimResponseReward",
  encode(message: ClaimResponseReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.series !== 0) {
      writer.uint32(8).int32(message.series);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ClaimResponseReward {
    return {
      series: isSet(object.series) ? seriesFromJSON(object.series) : -1,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<ClaimResponseReward>): ClaimResponseReward {
    const message = createBaseClaimResponseReward();
    message.series = object.series ?? 0;
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: ClaimResponseRewardAmino): ClaimResponseReward {
    const message = createBaseClaimResponseReward();
    if (object.series !== undefined && object.series !== null) {
      message.series = object.series;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: ClaimResponseReward): ClaimResponseRewardAmino {
    const obj: any = {};
    obj.series = message.series === 0 ? undefined : message.series;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: ClaimResponseRewardAminoMsg): ClaimResponseReward {
    return ClaimResponseReward.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimResponseRewardProtoMsg): ClaimResponseReward {
    return ClaimResponseReward.decode(message.value);
  },
  toProto(message: ClaimResponseReward): Uint8Array {
    return ClaimResponseReward.encode(message).finish();
  },
  toProtoMsg(message: ClaimResponseReward): ClaimResponseRewardProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.rewards.ClaimResponseReward",
      value: ClaimResponseReward.encode(message).finish()
    };
  }
};
function createBaseMsgClaimResponse(): MsgClaimResponse {
  return {
    claimedRewards: [],
    expiredRewards: [],
    allClaimedRewards: []
  };
}
export const MsgClaimResponse = {
  typeUrl: "/gitopia.gitopia.rewards.MsgClaimResponse",
  encode(message: MsgClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.claimedRewards) {
      ClaimResponseReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.expiredRewards) {
      ClaimResponseReward.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.allClaimedRewards) {
      ClaimResponseReward.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgClaimResponse {
    return {
      claimedRewards: Array.isArray(object?.claimedRewards) ? object.claimedRewards.map((e: any) => ClaimResponseReward.fromJSON(e)) : [],
      expiredRewards: Array.isArray(object?.expiredRewards) ? object.expiredRewards.map((e: any) => ClaimResponseReward.fromJSON(e)) : [],
      allClaimedRewards: Array.isArray(object?.allClaimedRewards) ? object.allClaimedRewards.map((e: any) => ClaimResponseReward.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgClaimResponse>): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    message.claimedRewards = object.claimedRewards?.map(e => ClaimResponseReward.fromPartial(e)) || [];
    message.expiredRewards = object.expiredRewards?.map(e => ClaimResponseReward.fromPartial(e)) || [];
    message.allClaimedRewards = object.allClaimedRewards?.map(e => ClaimResponseReward.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgClaimResponseAmino): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    message.claimedRewards = object.claimed_rewards?.map(e => ClaimResponseReward.fromAmino(e)) || [];
    message.expiredRewards = object.expired_rewards?.map(e => ClaimResponseReward.fromAmino(e)) || [];
    message.allClaimedRewards = object.all_claimed_rewards?.map(e => ClaimResponseReward.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgClaimResponse): MsgClaimResponseAmino {
    const obj: any = {};
    if (message.claimedRewards) {
      obj.claimed_rewards = message.claimedRewards.map(e => e ? ClaimResponseReward.toAmino(e) : undefined);
    } else {
      obj.claimed_rewards = message.claimedRewards;
    }
    if (message.expiredRewards) {
      obj.expired_rewards = message.expiredRewards.map(e => e ? ClaimResponseReward.toAmino(e) : undefined);
    } else {
      obj.expired_rewards = message.expiredRewards;
    }
    if (message.allClaimedRewards) {
      obj.all_claimed_rewards = message.allClaimedRewards.map(e => e ? ClaimResponseReward.toAmino(e) : undefined);
    } else {
      obj.all_claimed_rewards = message.allClaimedRewards;
    }
    return obj;
  },
  fromAminoMsg(object: MsgClaimResponseAminoMsg): MsgClaimResponse {
    return MsgClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimResponseProtoMsg): MsgClaimResponse {
    return MsgClaimResponse.decode(message.value);
  },
  toProto(message: MsgClaimResponse): Uint8Array {
    return MsgClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimResponse): MsgClaimResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.rewards.MsgClaimResponse",
      value: MsgClaimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/gitopia.gitopia.rewards.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.rewards.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/gitopia.gitopia.rewards.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.rewards.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};