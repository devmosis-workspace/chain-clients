import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType } from "./lock";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgLockTokens {
  owner: string;
  duration?: Duration;
  coins: Coin[];
}
export interface MsgLockTokensSDKType {
  owner: string;
  duration?: DurationSDKType;
  coins: CoinSDKType[];
}
export interface MsgLockTokensResponse {
  ID: Long;
}
export interface MsgLockTokensResponseSDKType {
  ID: Long;
}
export interface MsgBeginUnlockingAll {
  owner: string;
}
export interface MsgBeginUnlockingAllSDKType {
  owner: string;
}
export interface MsgBeginUnlockingAllResponse {
  unlocks: PeriodLock[];
}
export interface MsgBeginUnlockingAllResponseSDKType {
  unlocks: PeriodLockSDKType[];
}
export interface MsgBeginUnlocking {
  owner: string;
  ID: Long;
  /** Amount of unlocking coins. Unlock all if not set. */
  coins: Coin[];
}
export interface MsgBeginUnlockingSDKType {
  owner: string;
  ID: Long;
  coins: CoinSDKType[];
}
export interface MsgBeginUnlockingResponse {
  success: boolean;
  unlockingLockID: Long;
}
export interface MsgBeginUnlockingResponseSDKType {
  success: boolean;
  unlockingLockID: Long;
}
/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */
export interface MsgExtendLockup {
  owner: string;
  ID: Long;
  /**
   * duration to be set. fails if lower than the current duration, or is
   * unlocking
   */
  duration?: Duration;
}
/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */
export interface MsgExtendLockupSDKType {
  owner: string;
  ID: Long;
  duration?: DurationSDKType;
}
export interface MsgExtendLockupResponse {
  success: boolean;
}
export interface MsgExtendLockupResponseSDKType {
  success: boolean;
}
/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */
export interface MsgForceUnlock {
  owner: string;
  ID: Long;
  /** Amount of unlocking coins. Unlock all if not set. */
  coins: Coin[];
}
/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */
export interface MsgForceUnlockSDKType {
  owner: string;
  ID: Long;
  coins: CoinSDKType[];
}
export interface MsgForceUnlockResponse {
  success: boolean;
}
export interface MsgForceUnlockResponseSDKType {
  success: boolean;
}
export interface MsgSetRewardReceiverAddress {
  owner: string;
  lockID: Long;
  rewardReceiver: string;
}
export interface MsgSetRewardReceiverAddressSDKType {
  owner: string;
  lockID: Long;
  reward_receiver: string;
}
export interface MsgSetRewardReceiverAddressResponse {
  success: boolean;
}
export interface MsgSetRewardReceiverAddressResponseSDKType {
  success: boolean;
}
function createBaseMsgLockTokens(): MsgLockTokens {
  return {
    owner: "",
    duration: undefined,
    coins: []
  };
}
export const MsgLockTokens = {
  encode(message: MsgLockTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgLockTokens {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgLockTokens>): MsgLockTokens {
    const message = createBaseMsgLockTokens();
    message.owner = object.owner ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgLockTokensResponse(): MsgLockTokensResponse {
  return {
    ID: Long.UZERO
  };
}
export const MsgLockTokensResponse = {
  encode(message: MsgLockTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }
    return writer;
  },
  fromJSON(object: any): MsgLockTokensResponse {
    return {
      ID: isSet(object.ID) ? Long.fromValue(object.ID) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgLockTokensResponse>): MsgLockTokensResponse {
    const message = createBaseMsgLockTokensResponse();
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    return message;
  }
};
function createBaseMsgBeginUnlockingAll(): MsgBeginUnlockingAll {
  return {
    owner: ""
  };
}
export const MsgBeginUnlockingAll = {
  encode(message: MsgBeginUnlockingAll, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  fromJSON(object: any): MsgBeginUnlockingAll {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object: Partial<MsgBeginUnlockingAll>): MsgBeginUnlockingAll {
    const message = createBaseMsgBeginUnlockingAll();
    message.owner = object.owner ?? "";
    return message;
  }
};
function createBaseMsgBeginUnlockingAllResponse(): MsgBeginUnlockingAllResponse {
  return {
    unlocks: []
  };
}
export const MsgBeginUnlockingAllResponse = {
  encode(message: MsgBeginUnlockingAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unlocks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgBeginUnlockingAllResponse {
    return {
      unlocks: Array.isArray(object?.unlocks) ? object.unlocks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgBeginUnlockingAllResponse>): MsgBeginUnlockingAllResponse {
    const message = createBaseMsgBeginUnlockingAllResponse();
    message.unlocks = object.unlocks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgBeginUnlocking(): MsgBeginUnlocking {
  return {
    owner: "",
    ID: Long.UZERO,
    coins: []
  };
}
export const MsgBeginUnlocking = {
  encode(message: MsgBeginUnlocking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.ID.isZero()) {
      writer.uint32(16).uint64(message.ID);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgBeginUnlocking {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      ID: isSet(object.ID) ? Long.fromValue(object.ID) : Long.UZERO,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgBeginUnlocking>): MsgBeginUnlocking {
    const message = createBaseMsgBeginUnlocking();
    message.owner = object.owner ?? "";
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgBeginUnlockingResponse(): MsgBeginUnlockingResponse {
  return {
    success: false,
    unlockingLockID: Long.UZERO
  };
}
export const MsgBeginUnlockingResponse = {
  encode(message: MsgBeginUnlockingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (!message.unlockingLockID.isZero()) {
      writer.uint32(16).uint64(message.unlockingLockID);
    }
    return writer;
  },
  fromJSON(object: any): MsgBeginUnlockingResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false,
      unlockingLockID: isSet(object.unlockingLockID) ? Long.fromValue(object.unlockingLockID) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgBeginUnlockingResponse>): MsgBeginUnlockingResponse {
    const message = createBaseMsgBeginUnlockingResponse();
    message.success = object.success ?? false;
    message.unlockingLockID = object.unlockingLockID !== undefined && object.unlockingLockID !== null ? Long.fromValue(object.unlockingLockID) : Long.UZERO;
    return message;
  }
};
function createBaseMsgExtendLockup(): MsgExtendLockup {
  return {
    owner: "",
    ID: Long.UZERO,
    duration: undefined
  };
}
export const MsgExtendLockup = {
  encode(message: MsgExtendLockup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.ID.isZero()) {
      writer.uint32(16).uint64(message.ID);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgExtendLockup {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      ID: isSet(object.ID) ? Long.fromValue(object.ID) : Long.UZERO,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },
  fromPartial(object: Partial<MsgExtendLockup>): MsgExtendLockup {
    const message = createBaseMsgExtendLockup();
    message.owner = object.owner ?? "";
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  }
};
function createBaseMsgExtendLockupResponse(): MsgExtendLockupResponse {
  return {
    success: false
  };
}
export const MsgExtendLockupResponse = {
  encode(message: MsgExtendLockupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  fromJSON(object: any): MsgExtendLockupResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false
    };
  },
  fromPartial(object: Partial<MsgExtendLockupResponse>): MsgExtendLockupResponse {
    const message = createBaseMsgExtendLockupResponse();
    message.success = object.success ?? false;
    return message;
  }
};
function createBaseMsgForceUnlock(): MsgForceUnlock {
  return {
    owner: "",
    ID: Long.UZERO,
    coins: []
  };
}
export const MsgForceUnlock = {
  encode(message: MsgForceUnlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.ID.isZero()) {
      writer.uint32(16).uint64(message.ID);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgForceUnlock {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      ID: isSet(object.ID) ? Long.fromValue(object.ID) : Long.UZERO,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgForceUnlock>): MsgForceUnlock {
    const message = createBaseMsgForceUnlock();
    message.owner = object.owner ?? "";
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgForceUnlockResponse(): MsgForceUnlockResponse {
  return {
    success: false
  };
}
export const MsgForceUnlockResponse = {
  encode(message: MsgForceUnlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  fromJSON(object: any): MsgForceUnlockResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false
    };
  },
  fromPartial(object: Partial<MsgForceUnlockResponse>): MsgForceUnlockResponse {
    const message = createBaseMsgForceUnlockResponse();
    message.success = object.success ?? false;
    return message;
  }
};
function createBaseMsgSetRewardReceiverAddress(): MsgSetRewardReceiverAddress {
  return {
    owner: "",
    lockID: Long.UZERO,
    rewardReceiver: ""
  };
}
export const MsgSetRewardReceiverAddress = {
  encode(message: MsgSetRewardReceiverAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.lockID.isZero()) {
      writer.uint32(16).uint64(message.lockID);
    }
    if (message.rewardReceiver !== "") {
      writer.uint32(26).string(message.rewardReceiver);
    }
    return writer;
  },
  fromJSON(object: any): MsgSetRewardReceiverAddress {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      lockID: isSet(object.lockID) ? Long.fromValue(object.lockID) : Long.UZERO,
      rewardReceiver: isSet(object.rewardReceiver) ? String(object.rewardReceiver) : ""
    };
  },
  fromPartial(object: Partial<MsgSetRewardReceiverAddress>): MsgSetRewardReceiverAddress {
    const message = createBaseMsgSetRewardReceiverAddress();
    message.owner = object.owner ?? "";
    message.lockID = object.lockID !== undefined && object.lockID !== null ? Long.fromValue(object.lockID) : Long.UZERO;
    message.rewardReceiver = object.rewardReceiver ?? "";
    return message;
  }
};
function createBaseMsgSetRewardReceiverAddressResponse(): MsgSetRewardReceiverAddressResponse {
  return {
    success: false
  };
}
export const MsgSetRewardReceiverAddressResponse = {
  encode(message: MsgSetRewardReceiverAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  fromJSON(object: any): MsgSetRewardReceiverAddressResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false
    };
  },
  fromPartial(object: Partial<MsgSetRewardReceiverAddressResponse>): MsgSetRewardReceiverAddressResponse {
    const message = createBaseMsgSetRewardReceiverAddressResponse();
    message.success = object.success ?? false;
    return message;
  }
};