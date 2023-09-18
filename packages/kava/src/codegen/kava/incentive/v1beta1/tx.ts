import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * Selection is a pair of denom and multiplier name. It holds the choice of multiplier a user makes when they claim a
 * denom.
 */
export interface Selection {
  denom: string;
  multiplierName: string;
}
export interface SelectionProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.Selection";
  value: Uint8Array;
}
/**
 * Selection is a pair of denom and multiplier name. It holds the choice of multiplier a user makes when they claim a
 * denom.
 */
export interface SelectionAmino {
  denom: string;
  multiplier_name: string;
}
export interface SelectionAminoMsg {
  type: "/kava.incentive.v1beta1.Selection";
  value: SelectionAmino;
}
/**
 * Selection is a pair of denom and multiplier name. It holds the choice of multiplier a user makes when they claim a
 * denom.
 */
export interface SelectionSDKType {
  denom: string;
  multiplier_name: string;
}
/** MsgClaimUSDXMintingReward message type used to claim USDX minting rewards */
export interface MsgClaimUSDXMintingReward {
  sender: string;
  multiplierName: string;
}
export interface MsgClaimUSDXMintingRewardProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward";
  value: Uint8Array;
}
/** MsgClaimUSDXMintingReward message type used to claim USDX minting rewards */
export interface MsgClaimUSDXMintingRewardAmino {
  sender: string;
  multiplier_name: string;
}
export interface MsgClaimUSDXMintingRewardAminoMsg {
  type: "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward";
  value: MsgClaimUSDXMintingRewardAmino;
}
/** MsgClaimUSDXMintingReward message type used to claim USDX minting rewards */
export interface MsgClaimUSDXMintingRewardSDKType {
  sender: string;
  multiplier_name: string;
}
/** MsgClaimUSDXMintingRewardResponse defines the Msg/ClaimUSDXMintingReward response type. */
export interface MsgClaimUSDXMintingRewardResponse {}
export interface MsgClaimUSDXMintingRewardResponseProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.MsgClaimUSDXMintingRewardResponse";
  value: Uint8Array;
}
/** MsgClaimUSDXMintingRewardResponse defines the Msg/ClaimUSDXMintingReward response type. */
export interface MsgClaimUSDXMintingRewardResponseAmino {}
export interface MsgClaimUSDXMintingRewardResponseAminoMsg {
  type: "/kava.incentive.v1beta1.MsgClaimUSDXMintingRewardResponse";
  value: MsgClaimUSDXMintingRewardResponseAmino;
}
/** MsgClaimUSDXMintingRewardResponse defines the Msg/ClaimUSDXMintingReward response type. */
export interface MsgClaimUSDXMintingRewardResponseSDKType {}
/** MsgClaimHardReward message type used to claim Hard liquidity provider rewards */
export interface MsgClaimHardReward {
  sender: string;
  denomsToClaim: Selection[];
}
export interface MsgClaimHardRewardProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.MsgClaimHardReward";
  value: Uint8Array;
}
/** MsgClaimHardReward message type used to claim Hard liquidity provider rewards */
export interface MsgClaimHardRewardAmino {
  sender: string;
  denoms_to_claim: SelectionAmino[];
}
export interface MsgClaimHardRewardAminoMsg {
  type: "/kava.incentive.v1beta1.MsgClaimHardReward";
  value: MsgClaimHardRewardAmino;
}
/** MsgClaimHardReward message type used to claim Hard liquidity provider rewards */
export interface MsgClaimHardRewardSDKType {
  sender: string;
  denoms_to_claim: SelectionSDKType[];
}
/** MsgClaimHardRewardResponse defines the Msg/ClaimHardReward response type. */
export interface MsgClaimHardRewardResponse {}
export interface MsgClaimHardRewardResponseProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.MsgClaimHardRewardResponse";
  value: Uint8Array;
}
/** MsgClaimHardRewardResponse defines the Msg/ClaimHardReward response type. */
export interface MsgClaimHardRewardResponseAmino {}
export interface MsgClaimHardRewardResponseAminoMsg {
  type: "/kava.incentive.v1beta1.MsgClaimHardRewardResponse";
  value: MsgClaimHardRewardResponseAmino;
}
/** MsgClaimHardRewardResponse defines the Msg/ClaimHardReward response type. */
export interface MsgClaimHardRewardResponseSDKType {}
/** MsgClaimDelegatorReward message type used to claim delegator rewards */
export interface MsgClaimDelegatorReward {
  sender: string;
  denomsToClaim: Selection[];
}
export interface MsgClaimDelegatorRewardProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.MsgClaimDelegatorReward";
  value: Uint8Array;
}
/** MsgClaimDelegatorReward message type used to claim delegator rewards */
export interface MsgClaimDelegatorRewardAmino {
  sender: string;
  denoms_to_claim: SelectionAmino[];
}
export interface MsgClaimDelegatorRewardAminoMsg {
  type: "/kava.incentive.v1beta1.MsgClaimDelegatorReward";
  value: MsgClaimDelegatorRewardAmino;
}
/** MsgClaimDelegatorReward message type used to claim delegator rewards */
export interface MsgClaimDelegatorRewardSDKType {
  sender: string;
  denoms_to_claim: SelectionSDKType[];
}
/** MsgClaimDelegatorRewardResponse defines the Msg/ClaimDelegatorReward response type. */
export interface MsgClaimDelegatorRewardResponse {}
export interface MsgClaimDelegatorRewardResponseProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.MsgClaimDelegatorRewardResponse";
  value: Uint8Array;
}
/** MsgClaimDelegatorRewardResponse defines the Msg/ClaimDelegatorReward response type. */
export interface MsgClaimDelegatorRewardResponseAmino {}
export interface MsgClaimDelegatorRewardResponseAminoMsg {
  type: "/kava.incentive.v1beta1.MsgClaimDelegatorRewardResponse";
  value: MsgClaimDelegatorRewardResponseAmino;
}
/** MsgClaimDelegatorRewardResponse defines the Msg/ClaimDelegatorReward response type. */
export interface MsgClaimDelegatorRewardResponseSDKType {}
/** MsgClaimSwapReward message type used to claim delegator rewards */
export interface MsgClaimSwapReward {
  sender: string;
  denomsToClaim: Selection[];
}
export interface MsgClaimSwapRewardProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.MsgClaimSwapReward";
  value: Uint8Array;
}
/** MsgClaimSwapReward message type used to claim delegator rewards */
export interface MsgClaimSwapRewardAmino {
  sender: string;
  denoms_to_claim: SelectionAmino[];
}
export interface MsgClaimSwapRewardAminoMsg {
  type: "/kava.incentive.v1beta1.MsgClaimSwapReward";
  value: MsgClaimSwapRewardAmino;
}
/** MsgClaimSwapReward message type used to claim delegator rewards */
export interface MsgClaimSwapRewardSDKType {
  sender: string;
  denoms_to_claim: SelectionSDKType[];
}
/** MsgClaimSwapRewardResponse defines the Msg/ClaimSwapReward response type. */
export interface MsgClaimSwapRewardResponse {}
export interface MsgClaimSwapRewardResponseProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.MsgClaimSwapRewardResponse";
  value: Uint8Array;
}
/** MsgClaimSwapRewardResponse defines the Msg/ClaimSwapReward response type. */
export interface MsgClaimSwapRewardResponseAmino {}
export interface MsgClaimSwapRewardResponseAminoMsg {
  type: "/kava.incentive.v1beta1.MsgClaimSwapRewardResponse";
  value: MsgClaimSwapRewardResponseAmino;
}
/** MsgClaimSwapRewardResponse defines the Msg/ClaimSwapReward response type. */
export interface MsgClaimSwapRewardResponseSDKType {}
/** MsgClaimSavingsReward message type used to claim savings rewards */
export interface MsgClaimSavingsReward {
  sender: string;
  denomsToClaim: Selection[];
}
export interface MsgClaimSavingsRewardProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.MsgClaimSavingsReward";
  value: Uint8Array;
}
/** MsgClaimSavingsReward message type used to claim savings rewards */
export interface MsgClaimSavingsRewardAmino {
  sender: string;
  denoms_to_claim: SelectionAmino[];
}
export interface MsgClaimSavingsRewardAminoMsg {
  type: "/kava.incentive.v1beta1.MsgClaimSavingsReward";
  value: MsgClaimSavingsRewardAmino;
}
/** MsgClaimSavingsReward message type used to claim savings rewards */
export interface MsgClaimSavingsRewardSDKType {
  sender: string;
  denoms_to_claim: SelectionSDKType[];
}
/** MsgClaimSavingsRewardResponse defines the Msg/ClaimSavingsReward response type. */
export interface MsgClaimSavingsRewardResponse {}
export interface MsgClaimSavingsRewardResponseProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.MsgClaimSavingsRewardResponse";
  value: Uint8Array;
}
/** MsgClaimSavingsRewardResponse defines the Msg/ClaimSavingsReward response type. */
export interface MsgClaimSavingsRewardResponseAmino {}
export interface MsgClaimSavingsRewardResponseAminoMsg {
  type: "/kava.incentive.v1beta1.MsgClaimSavingsRewardResponse";
  value: MsgClaimSavingsRewardResponseAmino;
}
/** MsgClaimSavingsRewardResponse defines the Msg/ClaimSavingsReward response type. */
export interface MsgClaimSavingsRewardResponseSDKType {}
/** MsgClaimEarnReward message type used to claim earn rewards */
export interface MsgClaimEarnReward {
  sender: string;
  denomsToClaim: Selection[];
}
export interface MsgClaimEarnRewardProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.MsgClaimEarnReward";
  value: Uint8Array;
}
/** MsgClaimEarnReward message type used to claim earn rewards */
export interface MsgClaimEarnRewardAmino {
  sender: string;
  denoms_to_claim: SelectionAmino[];
}
export interface MsgClaimEarnRewardAminoMsg {
  type: "/kava.incentive.v1beta1.MsgClaimEarnReward";
  value: MsgClaimEarnRewardAmino;
}
/** MsgClaimEarnReward message type used to claim earn rewards */
export interface MsgClaimEarnRewardSDKType {
  sender: string;
  denoms_to_claim: SelectionSDKType[];
}
/** MsgClaimEarnRewardResponse defines the Msg/ClaimEarnReward response type. */
export interface MsgClaimEarnRewardResponse {}
export interface MsgClaimEarnRewardResponseProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.MsgClaimEarnRewardResponse";
  value: Uint8Array;
}
/** MsgClaimEarnRewardResponse defines the Msg/ClaimEarnReward response type. */
export interface MsgClaimEarnRewardResponseAmino {}
export interface MsgClaimEarnRewardResponseAminoMsg {
  type: "/kava.incentive.v1beta1.MsgClaimEarnRewardResponse";
  value: MsgClaimEarnRewardResponseAmino;
}
/** MsgClaimEarnRewardResponse defines the Msg/ClaimEarnReward response type. */
export interface MsgClaimEarnRewardResponseSDKType {}
function createBaseSelection(): Selection {
  return {
    denom: "",
    multiplierName: ""
  };
}
export const Selection = {
  typeUrl: "/kava.incentive.v1beta1.Selection",
  encode(message: Selection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.multiplierName !== "") {
      writer.uint32(18).string(message.multiplierName);
    }
    return writer;
  },
  fromJSON(object: any): Selection {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      multiplierName: isSet(object.multiplierName) ? String(object.multiplierName) : ""
    };
  },
  fromPartial(object: Partial<Selection>): Selection {
    const message = createBaseSelection();
    message.denom = object.denom ?? "";
    message.multiplierName = object.multiplierName ?? "";
    return message;
  },
  fromAmino(object: SelectionAmino): Selection {
    return {
      denom: object.denom,
      multiplierName: object.multiplier_name
    };
  },
  toAmino(message: Selection): SelectionAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.multiplier_name = message.multiplierName;
    return obj;
  },
  fromAminoMsg(object: SelectionAminoMsg): Selection {
    return Selection.fromAmino(object.value);
  },
  fromProtoMsg(message: SelectionProtoMsg): Selection {
    return Selection.decode(message.value);
  },
  toProto(message: Selection): Uint8Array {
    return Selection.encode(message).finish();
  },
  toProtoMsg(message: Selection): SelectionProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.Selection",
      value: Selection.encode(message).finish()
    };
  }
};
function createBaseMsgClaimUSDXMintingReward(): MsgClaimUSDXMintingReward {
  return {
    sender: "",
    multiplierName: ""
  };
}
export const MsgClaimUSDXMintingReward = {
  typeUrl: "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward",
  encode(message: MsgClaimUSDXMintingReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.multiplierName !== "") {
      writer.uint32(18).string(message.multiplierName);
    }
    return writer;
  },
  fromJSON(object: any): MsgClaimUSDXMintingReward {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      multiplierName: isSet(object.multiplierName) ? String(object.multiplierName) : ""
    };
  },
  fromPartial(object: Partial<MsgClaimUSDXMintingReward>): MsgClaimUSDXMintingReward {
    const message = createBaseMsgClaimUSDXMintingReward();
    message.sender = object.sender ?? "";
    message.multiplierName = object.multiplierName ?? "";
    return message;
  },
  fromAmino(object: MsgClaimUSDXMintingRewardAmino): MsgClaimUSDXMintingReward {
    return {
      sender: object.sender,
      multiplierName: object.multiplier_name
    };
  },
  toAmino(message: MsgClaimUSDXMintingReward): MsgClaimUSDXMintingRewardAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.multiplier_name = message.multiplierName;
    return obj;
  },
  fromAminoMsg(object: MsgClaimUSDXMintingRewardAminoMsg): MsgClaimUSDXMintingReward {
    return MsgClaimUSDXMintingReward.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimUSDXMintingRewardProtoMsg): MsgClaimUSDXMintingReward {
    return MsgClaimUSDXMintingReward.decode(message.value);
  },
  toProto(message: MsgClaimUSDXMintingReward): Uint8Array {
    return MsgClaimUSDXMintingReward.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimUSDXMintingReward): MsgClaimUSDXMintingRewardProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward",
      value: MsgClaimUSDXMintingReward.encode(message).finish()
    };
  }
};
function createBaseMsgClaimUSDXMintingRewardResponse(): MsgClaimUSDXMintingRewardResponse {
  return {};
}
export const MsgClaimUSDXMintingRewardResponse = {
  typeUrl: "/kava.incentive.v1beta1.MsgClaimUSDXMintingRewardResponse",
  encode(_: MsgClaimUSDXMintingRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgClaimUSDXMintingRewardResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClaimUSDXMintingRewardResponse>): MsgClaimUSDXMintingRewardResponse {
    const message = createBaseMsgClaimUSDXMintingRewardResponse();
    return message;
  },
  fromAmino(_: MsgClaimUSDXMintingRewardResponseAmino): MsgClaimUSDXMintingRewardResponse {
    return {};
  },
  toAmino(_: MsgClaimUSDXMintingRewardResponse): MsgClaimUSDXMintingRewardResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimUSDXMintingRewardResponseAminoMsg): MsgClaimUSDXMintingRewardResponse {
    return MsgClaimUSDXMintingRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimUSDXMintingRewardResponseProtoMsg): MsgClaimUSDXMintingRewardResponse {
    return MsgClaimUSDXMintingRewardResponse.decode(message.value);
  },
  toProto(message: MsgClaimUSDXMintingRewardResponse): Uint8Array {
    return MsgClaimUSDXMintingRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimUSDXMintingRewardResponse): MsgClaimUSDXMintingRewardResponseProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.MsgClaimUSDXMintingRewardResponse",
      value: MsgClaimUSDXMintingRewardResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimHardReward(): MsgClaimHardReward {
  return {
    sender: "",
    denomsToClaim: []
  };
}
export const MsgClaimHardReward = {
  typeUrl: "/kava.incentive.v1beta1.MsgClaimHardReward",
  encode(message: MsgClaimHardReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.denomsToClaim) {
      Selection.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgClaimHardReward {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denomsToClaim: Array.isArray(object?.denomsToClaim) ? object.denomsToClaim.map((e: any) => Selection.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgClaimHardReward>): MsgClaimHardReward {
    const message = createBaseMsgClaimHardReward();
    message.sender = object.sender ?? "";
    message.denomsToClaim = object.denomsToClaim?.map(e => Selection.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgClaimHardRewardAmino): MsgClaimHardReward {
    return {
      sender: object.sender,
      denomsToClaim: Array.isArray(object?.denoms_to_claim) ? object.denoms_to_claim.map((e: any) => Selection.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgClaimHardReward): MsgClaimHardRewardAmino {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.denomsToClaim) {
      obj.denoms_to_claim = message.denomsToClaim.map(e => e ? Selection.toAmino(e) : undefined);
    } else {
      obj.denoms_to_claim = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgClaimHardRewardAminoMsg): MsgClaimHardReward {
    return MsgClaimHardReward.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimHardRewardProtoMsg): MsgClaimHardReward {
    return MsgClaimHardReward.decode(message.value);
  },
  toProto(message: MsgClaimHardReward): Uint8Array {
    return MsgClaimHardReward.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimHardReward): MsgClaimHardRewardProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.MsgClaimHardReward",
      value: MsgClaimHardReward.encode(message).finish()
    };
  }
};
function createBaseMsgClaimHardRewardResponse(): MsgClaimHardRewardResponse {
  return {};
}
export const MsgClaimHardRewardResponse = {
  typeUrl: "/kava.incentive.v1beta1.MsgClaimHardRewardResponse",
  encode(_: MsgClaimHardRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgClaimHardRewardResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClaimHardRewardResponse>): MsgClaimHardRewardResponse {
    const message = createBaseMsgClaimHardRewardResponse();
    return message;
  },
  fromAmino(_: MsgClaimHardRewardResponseAmino): MsgClaimHardRewardResponse {
    return {};
  },
  toAmino(_: MsgClaimHardRewardResponse): MsgClaimHardRewardResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimHardRewardResponseAminoMsg): MsgClaimHardRewardResponse {
    return MsgClaimHardRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimHardRewardResponseProtoMsg): MsgClaimHardRewardResponse {
    return MsgClaimHardRewardResponse.decode(message.value);
  },
  toProto(message: MsgClaimHardRewardResponse): Uint8Array {
    return MsgClaimHardRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimHardRewardResponse): MsgClaimHardRewardResponseProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.MsgClaimHardRewardResponse",
      value: MsgClaimHardRewardResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimDelegatorReward(): MsgClaimDelegatorReward {
  return {
    sender: "",
    denomsToClaim: []
  };
}
export const MsgClaimDelegatorReward = {
  typeUrl: "/kava.incentive.v1beta1.MsgClaimDelegatorReward",
  encode(message: MsgClaimDelegatorReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.denomsToClaim) {
      Selection.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgClaimDelegatorReward {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denomsToClaim: Array.isArray(object?.denomsToClaim) ? object.denomsToClaim.map((e: any) => Selection.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgClaimDelegatorReward>): MsgClaimDelegatorReward {
    const message = createBaseMsgClaimDelegatorReward();
    message.sender = object.sender ?? "";
    message.denomsToClaim = object.denomsToClaim?.map(e => Selection.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgClaimDelegatorRewardAmino): MsgClaimDelegatorReward {
    return {
      sender: object.sender,
      denomsToClaim: Array.isArray(object?.denoms_to_claim) ? object.denoms_to_claim.map((e: any) => Selection.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgClaimDelegatorReward): MsgClaimDelegatorRewardAmino {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.denomsToClaim) {
      obj.denoms_to_claim = message.denomsToClaim.map(e => e ? Selection.toAmino(e) : undefined);
    } else {
      obj.denoms_to_claim = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgClaimDelegatorRewardAminoMsg): MsgClaimDelegatorReward {
    return MsgClaimDelegatorReward.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimDelegatorRewardProtoMsg): MsgClaimDelegatorReward {
    return MsgClaimDelegatorReward.decode(message.value);
  },
  toProto(message: MsgClaimDelegatorReward): Uint8Array {
    return MsgClaimDelegatorReward.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimDelegatorReward): MsgClaimDelegatorRewardProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.MsgClaimDelegatorReward",
      value: MsgClaimDelegatorReward.encode(message).finish()
    };
  }
};
function createBaseMsgClaimDelegatorRewardResponse(): MsgClaimDelegatorRewardResponse {
  return {};
}
export const MsgClaimDelegatorRewardResponse = {
  typeUrl: "/kava.incentive.v1beta1.MsgClaimDelegatorRewardResponse",
  encode(_: MsgClaimDelegatorRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgClaimDelegatorRewardResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClaimDelegatorRewardResponse>): MsgClaimDelegatorRewardResponse {
    const message = createBaseMsgClaimDelegatorRewardResponse();
    return message;
  },
  fromAmino(_: MsgClaimDelegatorRewardResponseAmino): MsgClaimDelegatorRewardResponse {
    return {};
  },
  toAmino(_: MsgClaimDelegatorRewardResponse): MsgClaimDelegatorRewardResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimDelegatorRewardResponseAminoMsg): MsgClaimDelegatorRewardResponse {
    return MsgClaimDelegatorRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimDelegatorRewardResponseProtoMsg): MsgClaimDelegatorRewardResponse {
    return MsgClaimDelegatorRewardResponse.decode(message.value);
  },
  toProto(message: MsgClaimDelegatorRewardResponse): Uint8Array {
    return MsgClaimDelegatorRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimDelegatorRewardResponse): MsgClaimDelegatorRewardResponseProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.MsgClaimDelegatorRewardResponse",
      value: MsgClaimDelegatorRewardResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimSwapReward(): MsgClaimSwapReward {
  return {
    sender: "",
    denomsToClaim: []
  };
}
export const MsgClaimSwapReward = {
  typeUrl: "/kava.incentive.v1beta1.MsgClaimSwapReward",
  encode(message: MsgClaimSwapReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.denomsToClaim) {
      Selection.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgClaimSwapReward {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denomsToClaim: Array.isArray(object?.denomsToClaim) ? object.denomsToClaim.map((e: any) => Selection.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgClaimSwapReward>): MsgClaimSwapReward {
    const message = createBaseMsgClaimSwapReward();
    message.sender = object.sender ?? "";
    message.denomsToClaim = object.denomsToClaim?.map(e => Selection.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgClaimSwapRewardAmino): MsgClaimSwapReward {
    return {
      sender: object.sender,
      denomsToClaim: Array.isArray(object?.denoms_to_claim) ? object.denoms_to_claim.map((e: any) => Selection.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgClaimSwapReward): MsgClaimSwapRewardAmino {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.denomsToClaim) {
      obj.denoms_to_claim = message.denomsToClaim.map(e => e ? Selection.toAmino(e) : undefined);
    } else {
      obj.denoms_to_claim = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgClaimSwapRewardAminoMsg): MsgClaimSwapReward {
    return MsgClaimSwapReward.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimSwapRewardProtoMsg): MsgClaimSwapReward {
    return MsgClaimSwapReward.decode(message.value);
  },
  toProto(message: MsgClaimSwapReward): Uint8Array {
    return MsgClaimSwapReward.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimSwapReward): MsgClaimSwapRewardProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.MsgClaimSwapReward",
      value: MsgClaimSwapReward.encode(message).finish()
    };
  }
};
function createBaseMsgClaimSwapRewardResponse(): MsgClaimSwapRewardResponse {
  return {};
}
export const MsgClaimSwapRewardResponse = {
  typeUrl: "/kava.incentive.v1beta1.MsgClaimSwapRewardResponse",
  encode(_: MsgClaimSwapRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgClaimSwapRewardResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClaimSwapRewardResponse>): MsgClaimSwapRewardResponse {
    const message = createBaseMsgClaimSwapRewardResponse();
    return message;
  },
  fromAmino(_: MsgClaimSwapRewardResponseAmino): MsgClaimSwapRewardResponse {
    return {};
  },
  toAmino(_: MsgClaimSwapRewardResponse): MsgClaimSwapRewardResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimSwapRewardResponseAminoMsg): MsgClaimSwapRewardResponse {
    return MsgClaimSwapRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimSwapRewardResponseProtoMsg): MsgClaimSwapRewardResponse {
    return MsgClaimSwapRewardResponse.decode(message.value);
  },
  toProto(message: MsgClaimSwapRewardResponse): Uint8Array {
    return MsgClaimSwapRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimSwapRewardResponse): MsgClaimSwapRewardResponseProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.MsgClaimSwapRewardResponse",
      value: MsgClaimSwapRewardResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimSavingsReward(): MsgClaimSavingsReward {
  return {
    sender: "",
    denomsToClaim: []
  };
}
export const MsgClaimSavingsReward = {
  typeUrl: "/kava.incentive.v1beta1.MsgClaimSavingsReward",
  encode(message: MsgClaimSavingsReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.denomsToClaim) {
      Selection.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgClaimSavingsReward {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denomsToClaim: Array.isArray(object?.denomsToClaim) ? object.denomsToClaim.map((e: any) => Selection.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgClaimSavingsReward>): MsgClaimSavingsReward {
    const message = createBaseMsgClaimSavingsReward();
    message.sender = object.sender ?? "";
    message.denomsToClaim = object.denomsToClaim?.map(e => Selection.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgClaimSavingsRewardAmino): MsgClaimSavingsReward {
    return {
      sender: object.sender,
      denomsToClaim: Array.isArray(object?.denoms_to_claim) ? object.denoms_to_claim.map((e: any) => Selection.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgClaimSavingsReward): MsgClaimSavingsRewardAmino {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.denomsToClaim) {
      obj.denoms_to_claim = message.denomsToClaim.map(e => e ? Selection.toAmino(e) : undefined);
    } else {
      obj.denoms_to_claim = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgClaimSavingsRewardAminoMsg): MsgClaimSavingsReward {
    return MsgClaimSavingsReward.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimSavingsRewardProtoMsg): MsgClaimSavingsReward {
    return MsgClaimSavingsReward.decode(message.value);
  },
  toProto(message: MsgClaimSavingsReward): Uint8Array {
    return MsgClaimSavingsReward.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimSavingsReward): MsgClaimSavingsRewardProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.MsgClaimSavingsReward",
      value: MsgClaimSavingsReward.encode(message).finish()
    };
  }
};
function createBaseMsgClaimSavingsRewardResponse(): MsgClaimSavingsRewardResponse {
  return {};
}
export const MsgClaimSavingsRewardResponse = {
  typeUrl: "/kava.incentive.v1beta1.MsgClaimSavingsRewardResponse",
  encode(_: MsgClaimSavingsRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgClaimSavingsRewardResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClaimSavingsRewardResponse>): MsgClaimSavingsRewardResponse {
    const message = createBaseMsgClaimSavingsRewardResponse();
    return message;
  },
  fromAmino(_: MsgClaimSavingsRewardResponseAmino): MsgClaimSavingsRewardResponse {
    return {};
  },
  toAmino(_: MsgClaimSavingsRewardResponse): MsgClaimSavingsRewardResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimSavingsRewardResponseAminoMsg): MsgClaimSavingsRewardResponse {
    return MsgClaimSavingsRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimSavingsRewardResponseProtoMsg): MsgClaimSavingsRewardResponse {
    return MsgClaimSavingsRewardResponse.decode(message.value);
  },
  toProto(message: MsgClaimSavingsRewardResponse): Uint8Array {
    return MsgClaimSavingsRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimSavingsRewardResponse): MsgClaimSavingsRewardResponseProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.MsgClaimSavingsRewardResponse",
      value: MsgClaimSavingsRewardResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimEarnReward(): MsgClaimEarnReward {
  return {
    sender: "",
    denomsToClaim: []
  };
}
export const MsgClaimEarnReward = {
  typeUrl: "/kava.incentive.v1beta1.MsgClaimEarnReward",
  encode(message: MsgClaimEarnReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.denomsToClaim) {
      Selection.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgClaimEarnReward {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denomsToClaim: Array.isArray(object?.denomsToClaim) ? object.denomsToClaim.map((e: any) => Selection.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgClaimEarnReward>): MsgClaimEarnReward {
    const message = createBaseMsgClaimEarnReward();
    message.sender = object.sender ?? "";
    message.denomsToClaim = object.denomsToClaim?.map(e => Selection.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgClaimEarnRewardAmino): MsgClaimEarnReward {
    return {
      sender: object.sender,
      denomsToClaim: Array.isArray(object?.denoms_to_claim) ? object.denoms_to_claim.map((e: any) => Selection.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgClaimEarnReward): MsgClaimEarnRewardAmino {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.denomsToClaim) {
      obj.denoms_to_claim = message.denomsToClaim.map(e => e ? Selection.toAmino(e) : undefined);
    } else {
      obj.denoms_to_claim = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgClaimEarnRewardAminoMsg): MsgClaimEarnReward {
    return MsgClaimEarnReward.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimEarnRewardProtoMsg): MsgClaimEarnReward {
    return MsgClaimEarnReward.decode(message.value);
  },
  toProto(message: MsgClaimEarnReward): Uint8Array {
    return MsgClaimEarnReward.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimEarnReward): MsgClaimEarnRewardProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.MsgClaimEarnReward",
      value: MsgClaimEarnReward.encode(message).finish()
    };
  }
};
function createBaseMsgClaimEarnRewardResponse(): MsgClaimEarnRewardResponse {
  return {};
}
export const MsgClaimEarnRewardResponse = {
  typeUrl: "/kava.incentive.v1beta1.MsgClaimEarnRewardResponse",
  encode(_: MsgClaimEarnRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgClaimEarnRewardResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClaimEarnRewardResponse>): MsgClaimEarnRewardResponse {
    const message = createBaseMsgClaimEarnRewardResponse();
    return message;
  },
  fromAmino(_: MsgClaimEarnRewardResponseAmino): MsgClaimEarnRewardResponse {
    return {};
  },
  toAmino(_: MsgClaimEarnRewardResponse): MsgClaimEarnRewardResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimEarnRewardResponseAminoMsg): MsgClaimEarnRewardResponse {
    return MsgClaimEarnRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimEarnRewardResponseProtoMsg): MsgClaimEarnRewardResponse {
    return MsgClaimEarnRewardResponse.decode(message.value);
  },
  toProto(message: MsgClaimEarnRewardResponse): Uint8Array {
    return MsgClaimEarnRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimEarnRewardResponse): MsgClaimEarnRewardResponseProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.MsgClaimEarnRewardResponse",
      value: MsgClaimEarnRewardResponse.encode(message).finish()
    };
  }
};