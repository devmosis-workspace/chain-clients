import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
export interface MsgSetAirdropAllocations {
  allocator: string;
  airdropIdentifier: string;
  users: string[];
  weights: string[];
}
export interface MsgSetAirdropAllocationsProtoMsg {
  typeUrl: "/stride.claim.MsgSetAirdropAllocations";
  value: Uint8Array;
}
export interface MsgSetAirdropAllocationsAmino {
  allocator: string;
  airdrop_identifier: string;
  users: string[];
  weights: string[];
}
export interface MsgSetAirdropAllocationsAminoMsg {
  type: "/stride.claim.MsgSetAirdropAllocations";
  value: MsgSetAirdropAllocationsAmino;
}
export interface MsgSetAirdropAllocationsSDKType {
  allocator: string;
  airdrop_identifier: string;
  users: string[];
  weights: string[];
}
export interface MsgSetAirdropAllocationsResponse {}
export interface MsgSetAirdropAllocationsResponseProtoMsg {
  typeUrl: "/stride.claim.MsgSetAirdropAllocationsResponse";
  value: Uint8Array;
}
export interface MsgSetAirdropAllocationsResponseAmino {}
export interface MsgSetAirdropAllocationsResponseAminoMsg {
  type: "/stride.claim.MsgSetAirdropAllocationsResponse";
  value: MsgSetAirdropAllocationsResponseAmino;
}
export interface MsgSetAirdropAllocationsResponseSDKType {}
export interface MsgClaimFreeAmount {
  user: string;
}
export interface MsgClaimFreeAmountProtoMsg {
  typeUrl: "/stride.claim.MsgClaimFreeAmount";
  value: Uint8Array;
}
export interface MsgClaimFreeAmountAmino {
  user: string;
}
export interface MsgClaimFreeAmountAminoMsg {
  type: "/stride.claim.MsgClaimFreeAmount";
  value: MsgClaimFreeAmountAmino;
}
export interface MsgClaimFreeAmountSDKType {
  user: string;
}
export interface MsgClaimFreeAmountResponse {
  claimedAmount: Coin[];
}
export interface MsgClaimFreeAmountResponseProtoMsg {
  typeUrl: "/stride.claim.MsgClaimFreeAmountResponse";
  value: Uint8Array;
}
export interface MsgClaimFreeAmountResponseAmino {
  claimed_amount: CoinAmino[];
}
export interface MsgClaimFreeAmountResponseAminoMsg {
  type: "/stride.claim.MsgClaimFreeAmountResponse";
  value: MsgClaimFreeAmountResponseAmino;
}
export interface MsgClaimFreeAmountResponseSDKType {
  claimed_amount: CoinSDKType[];
}
export interface MsgCreateAirdrop {
  distributor: string;
  identifier: string;
  chainId: string;
  denom: string;
  startTime: bigint;
  duration: bigint;
  autopilotEnabled: boolean;
}
export interface MsgCreateAirdropProtoMsg {
  typeUrl: "/stride.claim.MsgCreateAirdrop";
  value: Uint8Array;
}
export interface MsgCreateAirdropAmino {
  distributor: string;
  identifier: string;
  chain_id: string;
  denom: string;
  start_time: string;
  duration: string;
  autopilot_enabled: boolean;
}
export interface MsgCreateAirdropAminoMsg {
  type: "/stride.claim.MsgCreateAirdrop";
  value: MsgCreateAirdropAmino;
}
export interface MsgCreateAirdropSDKType {
  distributor: string;
  identifier: string;
  chain_id: string;
  denom: string;
  start_time: bigint;
  duration: bigint;
  autopilot_enabled: boolean;
}
export interface MsgCreateAirdropResponse {}
export interface MsgCreateAirdropResponseProtoMsg {
  typeUrl: "/stride.claim.MsgCreateAirdropResponse";
  value: Uint8Array;
}
export interface MsgCreateAirdropResponseAmino {}
export interface MsgCreateAirdropResponseAminoMsg {
  type: "/stride.claim.MsgCreateAirdropResponse";
  value: MsgCreateAirdropResponseAmino;
}
export interface MsgCreateAirdropResponseSDKType {}
export interface MsgDeleteAirdrop {
  distributor: string;
  identifier: string;
}
export interface MsgDeleteAirdropProtoMsg {
  typeUrl: "/stride.claim.MsgDeleteAirdrop";
  value: Uint8Array;
}
export interface MsgDeleteAirdropAmino {
  distributor: string;
  identifier: string;
}
export interface MsgDeleteAirdropAminoMsg {
  type: "/stride.claim.MsgDeleteAirdrop";
  value: MsgDeleteAirdropAmino;
}
export interface MsgDeleteAirdropSDKType {
  distributor: string;
  identifier: string;
}
export interface MsgDeleteAirdropResponse {}
export interface MsgDeleteAirdropResponseProtoMsg {
  typeUrl: "/stride.claim.MsgDeleteAirdropResponse";
  value: Uint8Array;
}
export interface MsgDeleteAirdropResponseAmino {}
export interface MsgDeleteAirdropResponseAminoMsg {
  type: "/stride.claim.MsgDeleteAirdropResponse";
  value: MsgDeleteAirdropResponseAmino;
}
export interface MsgDeleteAirdropResponseSDKType {}
function createBaseMsgSetAirdropAllocations(): MsgSetAirdropAllocations {
  return {
    allocator: "",
    airdropIdentifier: "",
    users: [],
    weights: []
  };
}
export const MsgSetAirdropAllocations = {
  typeUrl: "/stride.claim.MsgSetAirdropAllocations",
  encode(message: MsgSetAirdropAllocations, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.allocator !== "") {
      writer.uint32(10).string(message.allocator);
    }
    if (message.airdropIdentifier !== "") {
      writer.uint32(18).string(message.airdropIdentifier);
    }
    for (const v of message.users) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.weights) {
      writer.uint32(34).string(Decimal.fromUserInput(v!, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): MsgSetAirdropAllocations {
    return {
      allocator: isSet(object.allocator) ? String(object.allocator) : "",
      airdropIdentifier: isSet(object.airdropIdentifier) ? String(object.airdropIdentifier) : "",
      users: Array.isArray(object?.users) ? object.users.map((e: any) => String(e)) : [],
      weights: Array.isArray(object?.weights) ? object.weights.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<MsgSetAirdropAllocations>): MsgSetAirdropAllocations {
    const message = createBaseMsgSetAirdropAllocations();
    message.allocator = object.allocator ?? "";
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.users = object.users?.map(e => e) || [];
    message.weights = object.weights?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgSetAirdropAllocationsAmino): MsgSetAirdropAllocations {
    return {
      allocator: object.allocator,
      airdropIdentifier: object.airdrop_identifier,
      users: Array.isArray(object?.users) ? object.users.map((e: any) => e) : [],
      weights: Array.isArray(object?.weights) ? object.weights.map((e: any) => e) : []
    };
  },
  toAmino(message: MsgSetAirdropAllocations): MsgSetAirdropAllocationsAmino {
    const obj: any = {};
    obj.allocator = message.allocator;
    obj.airdrop_identifier = message.airdropIdentifier;
    if (message.users) {
      obj.users = message.users.map(e => e);
    } else {
      obj.users = [];
    }
    if (message.weights) {
      obj.weights = message.weights.map(e => e);
    } else {
      obj.weights = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetAirdropAllocationsAminoMsg): MsgSetAirdropAllocations {
    return MsgSetAirdropAllocations.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetAirdropAllocationsProtoMsg): MsgSetAirdropAllocations {
    return MsgSetAirdropAllocations.decode(message.value);
  },
  toProto(message: MsgSetAirdropAllocations): Uint8Array {
    return MsgSetAirdropAllocations.encode(message).finish();
  },
  toProtoMsg(message: MsgSetAirdropAllocations): MsgSetAirdropAllocationsProtoMsg {
    return {
      typeUrl: "/stride.claim.MsgSetAirdropAllocations",
      value: MsgSetAirdropAllocations.encode(message).finish()
    };
  }
};
function createBaseMsgSetAirdropAllocationsResponse(): MsgSetAirdropAllocationsResponse {
  return {};
}
export const MsgSetAirdropAllocationsResponse = {
  typeUrl: "/stride.claim.MsgSetAirdropAllocationsResponse",
  encode(_: MsgSetAirdropAllocationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSetAirdropAllocationsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetAirdropAllocationsResponse>): MsgSetAirdropAllocationsResponse {
    const message = createBaseMsgSetAirdropAllocationsResponse();
    return message;
  },
  fromAmino(_: MsgSetAirdropAllocationsResponseAmino): MsgSetAirdropAllocationsResponse {
    return {};
  },
  toAmino(_: MsgSetAirdropAllocationsResponse): MsgSetAirdropAllocationsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetAirdropAllocationsResponseAminoMsg): MsgSetAirdropAllocationsResponse {
    return MsgSetAirdropAllocationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetAirdropAllocationsResponseProtoMsg): MsgSetAirdropAllocationsResponse {
    return MsgSetAirdropAllocationsResponse.decode(message.value);
  },
  toProto(message: MsgSetAirdropAllocationsResponse): Uint8Array {
    return MsgSetAirdropAllocationsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetAirdropAllocationsResponse): MsgSetAirdropAllocationsResponseProtoMsg {
    return {
      typeUrl: "/stride.claim.MsgSetAirdropAllocationsResponse",
      value: MsgSetAirdropAllocationsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimFreeAmount(): MsgClaimFreeAmount {
  return {
    user: ""
  };
}
export const MsgClaimFreeAmount = {
  typeUrl: "/stride.claim.MsgClaimFreeAmount",
  encode(message: MsgClaimFreeAmount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },
  fromJSON(object: any): MsgClaimFreeAmount {
    return {
      user: isSet(object.user) ? String(object.user) : ""
    };
  },
  fromPartial(object: Partial<MsgClaimFreeAmount>): MsgClaimFreeAmount {
    const message = createBaseMsgClaimFreeAmount();
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: MsgClaimFreeAmountAmino): MsgClaimFreeAmount {
    return {
      user: object.user
    };
  },
  toAmino(message: MsgClaimFreeAmount): MsgClaimFreeAmountAmino {
    const obj: any = {};
    obj.user = message.user;
    return obj;
  },
  fromAminoMsg(object: MsgClaimFreeAmountAminoMsg): MsgClaimFreeAmount {
    return MsgClaimFreeAmount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimFreeAmountProtoMsg): MsgClaimFreeAmount {
    return MsgClaimFreeAmount.decode(message.value);
  },
  toProto(message: MsgClaimFreeAmount): Uint8Array {
    return MsgClaimFreeAmount.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimFreeAmount): MsgClaimFreeAmountProtoMsg {
    return {
      typeUrl: "/stride.claim.MsgClaimFreeAmount",
      value: MsgClaimFreeAmount.encode(message).finish()
    };
  }
};
function createBaseMsgClaimFreeAmountResponse(): MsgClaimFreeAmountResponse {
  return {
    claimedAmount: []
  };
}
export const MsgClaimFreeAmountResponse = {
  typeUrl: "/stride.claim.MsgClaimFreeAmountResponse",
  encode(message: MsgClaimFreeAmountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.claimedAmount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgClaimFreeAmountResponse {
    return {
      claimedAmount: Array.isArray(object?.claimedAmount) ? object.claimedAmount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgClaimFreeAmountResponse>): MsgClaimFreeAmountResponse {
    const message = createBaseMsgClaimFreeAmountResponse();
    message.claimedAmount = object.claimedAmount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgClaimFreeAmountResponseAmino): MsgClaimFreeAmountResponse {
    return {
      claimedAmount: Array.isArray(object?.claimed_amount) ? object.claimed_amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgClaimFreeAmountResponse): MsgClaimFreeAmountResponseAmino {
    const obj: any = {};
    if (message.claimedAmount) {
      obj.claimed_amount = message.claimedAmount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.claimed_amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgClaimFreeAmountResponseAminoMsg): MsgClaimFreeAmountResponse {
    return MsgClaimFreeAmountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimFreeAmountResponseProtoMsg): MsgClaimFreeAmountResponse {
    return MsgClaimFreeAmountResponse.decode(message.value);
  },
  toProto(message: MsgClaimFreeAmountResponse): Uint8Array {
    return MsgClaimFreeAmountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimFreeAmountResponse): MsgClaimFreeAmountResponseProtoMsg {
    return {
      typeUrl: "/stride.claim.MsgClaimFreeAmountResponse",
      value: MsgClaimFreeAmountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateAirdrop(): MsgCreateAirdrop {
  return {
    distributor: "",
    identifier: "",
    chainId: "",
    denom: "",
    startTime: BigInt(0),
    duration: BigInt(0),
    autopilotEnabled: false
  };
}
export const MsgCreateAirdrop = {
  typeUrl: "/stride.claim.MsgCreateAirdrop",
  encode(message: MsgCreateAirdrop, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.distributor !== "") {
      writer.uint32(10).string(message.distributor);
    }
    if (message.identifier !== "") {
      writer.uint32(18).string(message.identifier);
    }
    if (message.chainId !== "") {
      writer.uint32(50).string(message.chainId);
    }
    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }
    if (message.startTime !== BigInt(0)) {
      writer.uint32(24).uint64(message.startTime);
    }
    if (message.duration !== BigInt(0)) {
      writer.uint32(32).uint64(message.duration);
    }
    if (message.autopilotEnabled === true) {
      writer.uint32(56).bool(message.autopilotEnabled);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateAirdrop {
    return {
      distributor: isSet(object.distributor) ? String(object.distributor) : "",
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      startTime: isSet(object.startTime) ? BigInt(object.startTime.toString()) : BigInt(0),
      duration: isSet(object.duration) ? BigInt(object.duration.toString()) : BigInt(0),
      autopilotEnabled: isSet(object.autopilotEnabled) ? Boolean(object.autopilotEnabled) : false
    };
  },
  fromPartial(object: Partial<MsgCreateAirdrop>): MsgCreateAirdrop {
    const message = createBaseMsgCreateAirdrop();
    message.distributor = object.distributor ?? "";
    message.identifier = object.identifier ?? "";
    message.chainId = object.chainId ?? "";
    message.denom = object.denom ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
    message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
    message.autopilotEnabled = object.autopilotEnabled ?? false;
    return message;
  },
  fromAmino(object: MsgCreateAirdropAmino): MsgCreateAirdrop {
    return {
      distributor: object.distributor,
      identifier: object.identifier,
      chainId: object.chain_id,
      denom: object.denom,
      startTime: BigInt(object.start_time),
      duration: BigInt(object.duration),
      autopilotEnabled: object.autopilot_enabled
    };
  },
  toAmino(message: MsgCreateAirdrop): MsgCreateAirdropAmino {
    const obj: any = {};
    obj.distributor = message.distributor;
    obj.identifier = message.identifier;
    obj.chain_id = message.chainId;
    obj.denom = message.denom;
    obj.start_time = message.startTime ? message.startTime.toString() : undefined;
    obj.duration = message.duration ? message.duration.toString() : undefined;
    obj.autopilot_enabled = message.autopilotEnabled;
    return obj;
  },
  fromAminoMsg(object: MsgCreateAirdropAminoMsg): MsgCreateAirdrop {
    return MsgCreateAirdrop.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateAirdropProtoMsg): MsgCreateAirdrop {
    return MsgCreateAirdrop.decode(message.value);
  },
  toProto(message: MsgCreateAirdrop): Uint8Array {
    return MsgCreateAirdrop.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAirdrop): MsgCreateAirdropProtoMsg {
    return {
      typeUrl: "/stride.claim.MsgCreateAirdrop",
      value: MsgCreateAirdrop.encode(message).finish()
    };
  }
};
function createBaseMsgCreateAirdropResponse(): MsgCreateAirdropResponse {
  return {};
}
export const MsgCreateAirdropResponse = {
  typeUrl: "/stride.claim.MsgCreateAirdropResponse",
  encode(_: MsgCreateAirdropResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreateAirdropResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateAirdropResponse>): MsgCreateAirdropResponse {
    const message = createBaseMsgCreateAirdropResponse();
    return message;
  },
  fromAmino(_: MsgCreateAirdropResponseAmino): MsgCreateAirdropResponse {
    return {};
  },
  toAmino(_: MsgCreateAirdropResponse): MsgCreateAirdropResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateAirdropResponseAminoMsg): MsgCreateAirdropResponse {
    return MsgCreateAirdropResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateAirdropResponseProtoMsg): MsgCreateAirdropResponse {
    return MsgCreateAirdropResponse.decode(message.value);
  },
  toProto(message: MsgCreateAirdropResponse): Uint8Array {
    return MsgCreateAirdropResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAirdropResponse): MsgCreateAirdropResponseProtoMsg {
    return {
      typeUrl: "/stride.claim.MsgCreateAirdropResponse",
      value: MsgCreateAirdropResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteAirdrop(): MsgDeleteAirdrop {
  return {
    distributor: "",
    identifier: ""
  };
}
export const MsgDeleteAirdrop = {
  typeUrl: "/stride.claim.MsgDeleteAirdrop",
  encode(message: MsgDeleteAirdrop, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.distributor !== "") {
      writer.uint32(10).string(message.distributor);
    }
    if (message.identifier !== "") {
      writer.uint32(18).string(message.identifier);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteAirdrop {
    return {
      distributor: isSet(object.distributor) ? String(object.distributor) : "",
      identifier: isSet(object.identifier) ? String(object.identifier) : ""
    };
  },
  fromPartial(object: Partial<MsgDeleteAirdrop>): MsgDeleteAirdrop {
    const message = createBaseMsgDeleteAirdrop();
    message.distributor = object.distributor ?? "";
    message.identifier = object.identifier ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteAirdropAmino): MsgDeleteAirdrop {
    return {
      distributor: object.distributor,
      identifier: object.identifier
    };
  },
  toAmino(message: MsgDeleteAirdrop): MsgDeleteAirdropAmino {
    const obj: any = {};
    obj.distributor = message.distributor;
    obj.identifier = message.identifier;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteAirdropAminoMsg): MsgDeleteAirdrop {
    return MsgDeleteAirdrop.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteAirdropProtoMsg): MsgDeleteAirdrop {
    return MsgDeleteAirdrop.decode(message.value);
  },
  toProto(message: MsgDeleteAirdrop): Uint8Array {
    return MsgDeleteAirdrop.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteAirdrop): MsgDeleteAirdropProtoMsg {
    return {
      typeUrl: "/stride.claim.MsgDeleteAirdrop",
      value: MsgDeleteAirdrop.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteAirdropResponse(): MsgDeleteAirdropResponse {
  return {};
}
export const MsgDeleteAirdropResponse = {
  typeUrl: "/stride.claim.MsgDeleteAirdropResponse",
  encode(_: MsgDeleteAirdropResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteAirdropResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteAirdropResponse>): MsgDeleteAirdropResponse {
    const message = createBaseMsgDeleteAirdropResponse();
    return message;
  },
  fromAmino(_: MsgDeleteAirdropResponseAmino): MsgDeleteAirdropResponse {
    return {};
  },
  toAmino(_: MsgDeleteAirdropResponse): MsgDeleteAirdropResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteAirdropResponseAminoMsg): MsgDeleteAirdropResponse {
    return MsgDeleteAirdropResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteAirdropResponseProtoMsg): MsgDeleteAirdropResponse {
    return MsgDeleteAirdropResponse.decode(message.value);
  },
  toProto(message: MsgDeleteAirdropResponse): Uint8Array {
    return MsgDeleteAirdropResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteAirdropResponse): MsgDeleteAirdropResponseProtoMsg {
    return {
      typeUrl: "/stride.claim.MsgDeleteAirdropResponse",
      value: MsgDeleteAirdropResponse.encode(message).finish()
    };
  }
};