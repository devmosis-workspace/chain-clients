import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgSetAirdropAllocations {
  allocator: string;
  airdropIdentifier: string;
  users: string[];
  weights: string[];
}
export interface MsgSetAirdropAllocationsSDKType {
  allocator: string;
  airdrop_identifier: string;
  users: string[];
  weights: string[];
}
export interface MsgSetAirdropAllocationsResponse {}
export interface MsgSetAirdropAllocationsResponseSDKType {}
export interface MsgClaimFreeAmount {
  user: string;
}
export interface MsgClaimFreeAmountSDKType {
  user: string;
}
export interface MsgClaimFreeAmountResponse {
  claimedAmount: Coin[];
}
export interface MsgClaimFreeAmountResponseSDKType {
  claimed_amount: CoinSDKType[];
}
export interface MsgCreateAirdrop {
  distributor: string;
  identifier: string;
  chainId: string;
  denom: string;
  startTime: Long;
  duration: Long;
  autopilotEnabled: boolean;
}
export interface MsgCreateAirdropSDKType {
  distributor: string;
  identifier: string;
  chain_id: string;
  denom: string;
  start_time: Long;
  duration: Long;
  autopilot_enabled: boolean;
}
export interface MsgCreateAirdropResponse {}
export interface MsgCreateAirdropResponseSDKType {}
export interface MsgDeleteAirdrop {
  distributor: string;
  identifier: string;
}
export interface MsgDeleteAirdropSDKType {
  distributor: string;
  identifier: string;
}
export interface MsgDeleteAirdropResponse {}
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
  encode(message: MsgSetAirdropAllocations, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      writer.uint32(34).string(v!);
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
  }
};
function createBaseMsgSetAirdropAllocationsResponse(): MsgSetAirdropAllocationsResponse {
  return {};
}
export const MsgSetAirdropAllocationsResponse = {
  encode(_: MsgSetAirdropAllocationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSetAirdropAllocationsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetAirdropAllocationsResponse>): MsgSetAirdropAllocationsResponse {
    const message = createBaseMsgSetAirdropAllocationsResponse();
    return message;
  }
};
function createBaseMsgClaimFreeAmount(): MsgClaimFreeAmount {
  return {
    user: ""
  };
}
export const MsgClaimFreeAmount = {
  encode(message: MsgClaimFreeAmount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgClaimFreeAmountResponse(): MsgClaimFreeAmountResponse {
  return {
    claimedAmount: []
  };
}
export const MsgClaimFreeAmountResponse = {
  encode(message: MsgClaimFreeAmountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgCreateAirdrop(): MsgCreateAirdrop {
  return {
    distributor: "",
    identifier: "",
    chainId: "",
    denom: "",
    startTime: Long.UZERO,
    duration: Long.UZERO,
    autopilotEnabled: false
  };
}
export const MsgCreateAirdrop = {
  encode(message: MsgCreateAirdrop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (!message.startTime.isZero()) {
      writer.uint32(24).uint64(message.startTime);
    }
    if (!message.duration.isZero()) {
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
      startTime: isSet(object.startTime) ? Long.fromValue(object.startTime) : Long.UZERO,
      duration: isSet(object.duration) ? Long.fromValue(object.duration) : Long.UZERO,
      autopilotEnabled: isSet(object.autopilotEnabled) ? Boolean(object.autopilotEnabled) : false
    };
  },
  fromPartial(object: Partial<MsgCreateAirdrop>): MsgCreateAirdrop {
    const message = createBaseMsgCreateAirdrop();
    message.distributor = object.distributor ?? "";
    message.identifier = object.identifier ?? "";
    message.chainId = object.chainId ?? "";
    message.denom = object.denom ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Long.fromValue(object.startTime) : Long.UZERO;
    message.duration = object.duration !== undefined && object.duration !== null ? Long.fromValue(object.duration) : Long.UZERO;
    message.autopilotEnabled = object.autopilotEnabled ?? false;
    return message;
  }
};
function createBaseMsgCreateAirdropResponse(): MsgCreateAirdropResponse {
  return {};
}
export const MsgCreateAirdropResponse = {
  encode(_: MsgCreateAirdropResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCreateAirdropResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateAirdropResponse>): MsgCreateAirdropResponse {
    const message = createBaseMsgCreateAirdropResponse();
    return message;
  }
};
function createBaseMsgDeleteAirdrop(): MsgDeleteAirdrop {
  return {
    distributor: "",
    identifier: ""
  };
}
export const MsgDeleteAirdrop = {
  encode(message: MsgDeleteAirdrop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgDeleteAirdropResponse(): MsgDeleteAirdropResponse {
  return {};
}
export const MsgDeleteAirdropResponse = {
  encode(_: MsgDeleteAirdropResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDeleteAirdropResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteAirdropResponse>): MsgDeleteAirdropResponse {
    const message = createBaseMsgDeleteAirdropResponse();
    return message;
  }
};