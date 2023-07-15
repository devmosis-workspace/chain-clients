import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType, SyntheticLock, SyntheticLockSDKType } from "./lock";
import { Params, ParamsSDKType } from "./params";
import { Long, isSet, fromJsonTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ModuleBalanceRequest {}
export interface ModuleBalanceRequestSDKType {}
export interface ModuleBalanceResponse {
  coins: Coin[];
}
export interface ModuleBalanceResponseSDKType {
  coins: CoinSDKType[];
}
export interface ModuleLockedAmountRequest {}
export interface ModuleLockedAmountRequestSDKType {}
export interface ModuleLockedAmountResponse {
  coins: Coin[];
}
export interface ModuleLockedAmountResponseSDKType {
  coins: CoinSDKType[];
}
export interface AccountUnlockableCoinsRequest {
  owner: string;
}
export interface AccountUnlockableCoinsRequestSDKType {
  owner: string;
}
export interface AccountUnlockableCoinsResponse {
  coins: Coin[];
}
export interface AccountUnlockableCoinsResponseSDKType {
  coins: CoinSDKType[];
}
export interface AccountUnlockingCoinsRequest {
  owner: string;
}
export interface AccountUnlockingCoinsRequestSDKType {
  owner: string;
}
export interface AccountUnlockingCoinsResponse {
  coins: Coin[];
}
export interface AccountUnlockingCoinsResponseSDKType {
  coins: CoinSDKType[];
}
export interface AccountLockedCoinsRequest {
  owner: string;
}
export interface AccountLockedCoinsRequestSDKType {
  owner: string;
}
export interface AccountLockedCoinsResponse {
  coins: Coin[];
}
export interface AccountLockedCoinsResponseSDKType {
  coins: CoinSDKType[];
}
export interface AccountLockedPastTimeRequest {
  owner: string;
  timestamp?: Timestamp;
}
export interface AccountLockedPastTimeRequestSDKType {
  owner: string;
  timestamp?: TimestampSDKType;
}
export interface AccountLockedPastTimeResponse {
  locks: PeriodLock[];
}
export interface AccountLockedPastTimeResponseSDKType {
  locks: PeriodLockSDKType[];
}
export interface AccountLockedPastTimeNotUnlockingOnlyRequest {
  owner: string;
  timestamp?: Timestamp;
}
export interface AccountLockedPastTimeNotUnlockingOnlyRequestSDKType {
  owner: string;
  timestamp?: TimestampSDKType;
}
export interface AccountLockedPastTimeNotUnlockingOnlyResponse {
  locks: PeriodLock[];
}
export interface AccountLockedPastTimeNotUnlockingOnlyResponseSDKType {
  locks: PeriodLockSDKType[];
}
export interface AccountUnlockedBeforeTimeRequest {
  owner: string;
  timestamp?: Timestamp;
}
export interface AccountUnlockedBeforeTimeRequestSDKType {
  owner: string;
  timestamp?: TimestampSDKType;
}
export interface AccountUnlockedBeforeTimeResponse {
  locks: PeriodLock[];
}
export interface AccountUnlockedBeforeTimeResponseSDKType {
  locks: PeriodLockSDKType[];
}
export interface AccountLockedPastTimeDenomRequest {
  owner: string;
  timestamp?: Timestamp;
  denom: string;
}
export interface AccountLockedPastTimeDenomRequestSDKType {
  owner: string;
  timestamp?: TimestampSDKType;
  denom: string;
}
export interface AccountLockedPastTimeDenomResponse {
  locks: PeriodLock[];
}
export interface AccountLockedPastTimeDenomResponseSDKType {
  locks: PeriodLockSDKType[];
}
export interface LockedDenomRequest {
  denom: string;
  duration?: Duration;
}
export interface LockedDenomRequestSDKType {
  denom: string;
  duration?: DurationSDKType;
}
export interface LockedDenomResponse {
  amount: string;
}
export interface LockedDenomResponseSDKType {
  amount: string;
}
export interface LockedRequest {
  lockId: Long;
}
export interface LockedRequestSDKType {
  lock_id: Long;
}
export interface LockedResponse {
  lock?: PeriodLock;
}
export interface LockedResponseSDKType {
  lock?: PeriodLockSDKType;
}
export interface LockRewardReceiverRequest {
  lockId: Long;
}
export interface LockRewardReceiverRequestSDKType {
  lock_id: Long;
}
export interface LockRewardReceiverResponse {
  rewardReceiver: string;
}
export interface LockRewardReceiverResponseSDKType {
  reward_receiver: string;
}
export interface NextLockIDRequest {}
export interface NextLockIDRequestSDKType {}
export interface NextLockIDResponse {
  lockId: Long;
}
export interface NextLockIDResponseSDKType {
  lock_id: Long;
}
/** @deprecated */
export interface SyntheticLockupsByLockupIDRequest {
  lockId: Long;
}
/** @deprecated */
export interface SyntheticLockupsByLockupIDRequestSDKType {
  lock_id: Long;
}
/** @deprecated */
export interface SyntheticLockupsByLockupIDResponse {
  syntheticLocks: SyntheticLock[];
}
/** @deprecated */
export interface SyntheticLockupsByLockupIDResponseSDKType {
  synthetic_locks: SyntheticLockSDKType[];
}
export interface SyntheticLockupByLockupIDRequest {
  lockId: Long;
}
export interface SyntheticLockupByLockupIDRequestSDKType {
  lock_id: Long;
}
export interface SyntheticLockupByLockupIDResponse {
  syntheticLock?: SyntheticLock;
}
export interface SyntheticLockupByLockupIDResponseSDKType {
  synthetic_lock?: SyntheticLockSDKType;
}
export interface AccountLockedLongerDurationRequest {
  owner: string;
  duration?: Duration;
}
export interface AccountLockedLongerDurationRequestSDKType {
  owner: string;
  duration?: DurationSDKType;
}
export interface AccountLockedLongerDurationResponse {
  locks: PeriodLock[];
}
export interface AccountLockedLongerDurationResponseSDKType {
  locks: PeriodLockSDKType[];
}
export interface AccountLockedDurationRequest {
  owner: string;
  duration?: Duration;
}
export interface AccountLockedDurationRequestSDKType {
  owner: string;
  duration?: DurationSDKType;
}
export interface AccountLockedDurationResponse {
  locks: PeriodLock[];
}
export interface AccountLockedDurationResponseSDKType {
  locks: PeriodLockSDKType[];
}
export interface AccountLockedLongerDurationNotUnlockingOnlyRequest {
  owner: string;
  duration?: Duration;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType {
  owner: string;
  duration?: DurationSDKType;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyResponse {
  locks: PeriodLock[];
}
export interface AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType {
  locks: PeriodLockSDKType[];
}
export interface AccountLockedLongerDurationDenomRequest {
  owner: string;
  duration?: Duration;
  denom: string;
}
export interface AccountLockedLongerDurationDenomRequestSDKType {
  owner: string;
  duration?: DurationSDKType;
  denom: string;
}
export interface AccountLockedLongerDurationDenomResponse {
  locks: PeriodLock[];
}
export interface AccountLockedLongerDurationDenomResponseSDKType {
  locks: PeriodLockSDKType[];
}
export interface QueryParamsRequest {}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
function createBaseModuleBalanceRequest(): ModuleBalanceRequest {
  return {};
}
export const ModuleBalanceRequest = {
  encode(_: ModuleBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): ModuleBalanceRequest {
    return {};
  },
  fromPartial(_: Partial<ModuleBalanceRequest>): ModuleBalanceRequest {
    const message = createBaseModuleBalanceRequest();
    return message;
  }
};
function createBaseModuleBalanceResponse(): ModuleBalanceResponse {
  return {
    coins: []
  };
}
export const ModuleBalanceResponse = {
  encode(message: ModuleBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ModuleBalanceResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ModuleBalanceResponse>): ModuleBalanceResponse {
    const message = createBaseModuleBalanceResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseModuleLockedAmountRequest(): ModuleLockedAmountRequest {
  return {};
}
export const ModuleLockedAmountRequest = {
  encode(_: ModuleLockedAmountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): ModuleLockedAmountRequest {
    return {};
  },
  fromPartial(_: Partial<ModuleLockedAmountRequest>): ModuleLockedAmountRequest {
    const message = createBaseModuleLockedAmountRequest();
    return message;
  }
};
function createBaseModuleLockedAmountResponse(): ModuleLockedAmountResponse {
  return {
    coins: []
  };
}
export const ModuleLockedAmountResponse = {
  encode(message: ModuleLockedAmountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ModuleLockedAmountResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ModuleLockedAmountResponse>): ModuleLockedAmountResponse {
    const message = createBaseModuleLockedAmountResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAccountUnlockableCoinsRequest(): AccountUnlockableCoinsRequest {
  return {
    owner: ""
  };
}
export const AccountUnlockableCoinsRequest = {
  encode(message: AccountUnlockableCoinsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  fromJSON(object: any): AccountUnlockableCoinsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object: Partial<AccountUnlockableCoinsRequest>): AccountUnlockableCoinsRequest {
    const message = createBaseAccountUnlockableCoinsRequest();
    message.owner = object.owner ?? "";
    return message;
  }
};
function createBaseAccountUnlockableCoinsResponse(): AccountUnlockableCoinsResponse {
  return {
    coins: []
  };
}
export const AccountUnlockableCoinsResponse = {
  encode(message: AccountUnlockableCoinsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AccountUnlockableCoinsResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<AccountUnlockableCoinsResponse>): AccountUnlockableCoinsResponse {
    const message = createBaseAccountUnlockableCoinsResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAccountUnlockingCoinsRequest(): AccountUnlockingCoinsRequest {
  return {
    owner: ""
  };
}
export const AccountUnlockingCoinsRequest = {
  encode(message: AccountUnlockingCoinsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  fromJSON(object: any): AccountUnlockingCoinsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object: Partial<AccountUnlockingCoinsRequest>): AccountUnlockingCoinsRequest {
    const message = createBaseAccountUnlockingCoinsRequest();
    message.owner = object.owner ?? "";
    return message;
  }
};
function createBaseAccountUnlockingCoinsResponse(): AccountUnlockingCoinsResponse {
  return {
    coins: []
  };
}
export const AccountUnlockingCoinsResponse = {
  encode(message: AccountUnlockingCoinsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AccountUnlockingCoinsResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<AccountUnlockingCoinsResponse>): AccountUnlockingCoinsResponse {
    const message = createBaseAccountUnlockingCoinsResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAccountLockedCoinsRequest(): AccountLockedCoinsRequest {
  return {
    owner: ""
  };
}
export const AccountLockedCoinsRequest = {
  encode(message: AccountLockedCoinsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  fromJSON(object: any): AccountLockedCoinsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object: Partial<AccountLockedCoinsRequest>): AccountLockedCoinsRequest {
    const message = createBaseAccountLockedCoinsRequest();
    message.owner = object.owner ?? "";
    return message;
  }
};
function createBaseAccountLockedCoinsResponse(): AccountLockedCoinsResponse {
  return {
    coins: []
  };
}
export const AccountLockedCoinsResponse = {
  encode(message: AccountLockedCoinsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AccountLockedCoinsResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<AccountLockedCoinsResponse>): AccountLockedCoinsResponse {
    const message = createBaseAccountLockedCoinsResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAccountLockedPastTimeRequest(): AccountLockedPastTimeRequest {
  return {
    owner: "",
    timestamp: undefined
  };
}
export const AccountLockedPastTimeRequest = {
  encode(message: AccountLockedPastTimeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AccountLockedPastTimeRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  fromPartial(object: Partial<AccountLockedPastTimeRequest>): AccountLockedPastTimeRequest {
    const message = createBaseAccountLockedPastTimeRequest();
    message.owner = object.owner ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  }
};
function createBaseAccountLockedPastTimeResponse(): AccountLockedPastTimeResponse {
  return {
    locks: []
  };
}
export const AccountLockedPastTimeResponse = {
  encode(message: AccountLockedPastTimeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AccountLockedPastTimeResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<AccountLockedPastTimeResponse>): AccountLockedPastTimeResponse {
    const message = createBaseAccountLockedPastTimeResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAccountLockedPastTimeNotUnlockingOnlyRequest(): AccountLockedPastTimeNotUnlockingOnlyRequest {
  return {
    owner: "",
    timestamp: undefined
  };
}
export const AccountLockedPastTimeNotUnlockingOnlyRequest = {
  encode(message: AccountLockedPastTimeNotUnlockingOnlyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AccountLockedPastTimeNotUnlockingOnlyRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  fromPartial(object: Partial<AccountLockedPastTimeNotUnlockingOnlyRequest>): AccountLockedPastTimeNotUnlockingOnlyRequest {
    const message = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();
    message.owner = object.owner ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  }
};
function createBaseAccountLockedPastTimeNotUnlockingOnlyResponse(): AccountLockedPastTimeNotUnlockingOnlyResponse {
  return {
    locks: []
  };
}
export const AccountLockedPastTimeNotUnlockingOnlyResponse = {
  encode(message: AccountLockedPastTimeNotUnlockingOnlyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AccountLockedPastTimeNotUnlockingOnlyResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<AccountLockedPastTimeNotUnlockingOnlyResponse>): AccountLockedPastTimeNotUnlockingOnlyResponse {
    const message = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAccountUnlockedBeforeTimeRequest(): AccountUnlockedBeforeTimeRequest {
  return {
    owner: "",
    timestamp: undefined
  };
}
export const AccountUnlockedBeforeTimeRequest = {
  encode(message: AccountUnlockedBeforeTimeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AccountUnlockedBeforeTimeRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  fromPartial(object: Partial<AccountUnlockedBeforeTimeRequest>): AccountUnlockedBeforeTimeRequest {
    const message = createBaseAccountUnlockedBeforeTimeRequest();
    message.owner = object.owner ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  }
};
function createBaseAccountUnlockedBeforeTimeResponse(): AccountUnlockedBeforeTimeResponse {
  return {
    locks: []
  };
}
export const AccountUnlockedBeforeTimeResponse = {
  encode(message: AccountUnlockedBeforeTimeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AccountUnlockedBeforeTimeResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<AccountUnlockedBeforeTimeResponse>): AccountUnlockedBeforeTimeResponse {
    const message = createBaseAccountUnlockedBeforeTimeResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAccountLockedPastTimeDenomRequest(): AccountLockedPastTimeDenomRequest {
  return {
    owner: "",
    timestamp: undefined,
    denom: ""
  };
}
export const AccountLockedPastTimeDenomRequest = {
  encode(message: AccountLockedPastTimeDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): AccountLockedPastTimeDenomRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<AccountLockedPastTimeDenomRequest>): AccountLockedPastTimeDenomRequest {
    const message = createBaseAccountLockedPastTimeDenomRequest();
    message.owner = object.owner ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseAccountLockedPastTimeDenomResponse(): AccountLockedPastTimeDenomResponse {
  return {
    locks: []
  };
}
export const AccountLockedPastTimeDenomResponse = {
  encode(message: AccountLockedPastTimeDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AccountLockedPastTimeDenomResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<AccountLockedPastTimeDenomResponse>): AccountLockedPastTimeDenomResponse {
    const message = createBaseAccountLockedPastTimeDenomResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  }
};
function createBaseLockedDenomRequest(): LockedDenomRequest {
  return {
    denom: "",
    duration: undefined
  };
}
export const LockedDenomRequest = {
  encode(message: LockedDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): LockedDenomRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },
  fromPartial(object: Partial<LockedDenomRequest>): LockedDenomRequest {
    const message = createBaseLockedDenomRequest();
    message.denom = object.denom ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  }
};
function createBaseLockedDenomResponse(): LockedDenomResponse {
  return {
    amount: ""
  };
}
export const LockedDenomResponse = {
  encode(message: LockedDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): LockedDenomResponse {
    return {
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  fromPartial(object: Partial<LockedDenomResponse>): LockedDenomResponse {
    const message = createBaseLockedDenomResponse();
    message.amount = object.amount ?? "";
    return message;
  }
};
function createBaseLockedRequest(): LockedRequest {
  return {
    lockId: Long.UZERO
  };
}
export const LockedRequest = {
  encode(message: LockedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId);
    }
    return writer;
  },
  fromJSON(object: any): LockedRequest {
    return {
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<LockedRequest>): LockedRequest {
    const message = createBaseLockedRequest();
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    return message;
  }
};
function createBaseLockedResponse(): LockedResponse {
  return {
    lock: undefined
  };
}
export const LockedResponse = {
  encode(message: LockedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lock !== undefined) {
      PeriodLock.encode(message.lock, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): LockedResponse {
    return {
      lock: isSet(object.lock) ? PeriodLock.fromJSON(object.lock) : undefined
    };
  },
  fromPartial(object: Partial<LockedResponse>): LockedResponse {
    const message = createBaseLockedResponse();
    message.lock = object.lock !== undefined && object.lock !== null ? PeriodLock.fromPartial(object.lock) : undefined;
    return message;
  }
};
function createBaseLockRewardReceiverRequest(): LockRewardReceiverRequest {
  return {
    lockId: Long.UZERO
  };
}
export const LockRewardReceiverRequest = {
  encode(message: LockRewardReceiverRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId);
    }
    return writer;
  },
  fromJSON(object: any): LockRewardReceiverRequest {
    return {
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<LockRewardReceiverRequest>): LockRewardReceiverRequest {
    const message = createBaseLockRewardReceiverRequest();
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    return message;
  }
};
function createBaseLockRewardReceiverResponse(): LockRewardReceiverResponse {
  return {
    rewardReceiver: ""
  };
}
export const LockRewardReceiverResponse = {
  encode(message: LockRewardReceiverResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardReceiver !== "") {
      writer.uint32(10).string(message.rewardReceiver);
    }
    return writer;
  },
  fromJSON(object: any): LockRewardReceiverResponse {
    return {
      rewardReceiver: isSet(object.rewardReceiver) ? String(object.rewardReceiver) : ""
    };
  },
  fromPartial(object: Partial<LockRewardReceiverResponse>): LockRewardReceiverResponse {
    const message = createBaseLockRewardReceiverResponse();
    message.rewardReceiver = object.rewardReceiver ?? "";
    return message;
  }
};
function createBaseNextLockIDRequest(): NextLockIDRequest {
  return {};
}
export const NextLockIDRequest = {
  encode(_: NextLockIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): NextLockIDRequest {
    return {};
  },
  fromPartial(_: Partial<NextLockIDRequest>): NextLockIDRequest {
    const message = createBaseNextLockIDRequest();
    return message;
  }
};
function createBaseNextLockIDResponse(): NextLockIDResponse {
  return {
    lockId: Long.UZERO
  };
}
export const NextLockIDResponse = {
  encode(message: NextLockIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId);
    }
    return writer;
  },
  fromJSON(object: any): NextLockIDResponse {
    return {
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<NextLockIDResponse>): NextLockIDResponse {
    const message = createBaseNextLockIDResponse();
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    return message;
  }
};
function createBaseSyntheticLockupsByLockupIDRequest(): SyntheticLockupsByLockupIDRequest {
  return {
    lockId: Long.UZERO
  };
}
export const SyntheticLockupsByLockupIDRequest = {
  encode(message: SyntheticLockupsByLockupIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId);
    }
    return writer;
  },
  fromJSON(object: any): SyntheticLockupsByLockupIDRequest {
    return {
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<SyntheticLockupsByLockupIDRequest>): SyntheticLockupsByLockupIDRequest {
    const message = createBaseSyntheticLockupsByLockupIDRequest();
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    return message;
  }
};
function createBaseSyntheticLockupsByLockupIDResponse(): SyntheticLockupsByLockupIDResponse {
  return {
    syntheticLocks: []
  };
}
export const SyntheticLockupsByLockupIDResponse = {
  encode(message: SyntheticLockupsByLockupIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.syntheticLocks) {
      SyntheticLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SyntheticLockupsByLockupIDResponse {
    return {
      syntheticLocks: Array.isArray(object?.syntheticLocks) ? object.syntheticLocks.map((e: any) => SyntheticLock.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<SyntheticLockupsByLockupIDResponse>): SyntheticLockupsByLockupIDResponse {
    const message = createBaseSyntheticLockupsByLockupIDResponse();
    message.syntheticLocks = object.syntheticLocks?.map(e => SyntheticLock.fromPartial(e)) || [];
    return message;
  }
};
function createBaseSyntheticLockupByLockupIDRequest(): SyntheticLockupByLockupIDRequest {
  return {
    lockId: Long.UZERO
  };
}
export const SyntheticLockupByLockupIDRequest = {
  encode(message: SyntheticLockupByLockupIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId);
    }
    return writer;
  },
  fromJSON(object: any): SyntheticLockupByLockupIDRequest {
    return {
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<SyntheticLockupByLockupIDRequest>): SyntheticLockupByLockupIDRequest {
    const message = createBaseSyntheticLockupByLockupIDRequest();
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    return message;
  }
};
function createBaseSyntheticLockupByLockupIDResponse(): SyntheticLockupByLockupIDResponse {
  return {
    syntheticLock: undefined
  };
}
export const SyntheticLockupByLockupIDResponse = {
  encode(message: SyntheticLockupByLockupIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.syntheticLock !== undefined) {
      SyntheticLock.encode(message.syntheticLock, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SyntheticLockupByLockupIDResponse {
    return {
      syntheticLock: isSet(object.syntheticLock) ? SyntheticLock.fromJSON(object.syntheticLock) : undefined
    };
  },
  fromPartial(object: Partial<SyntheticLockupByLockupIDResponse>): SyntheticLockupByLockupIDResponse {
    const message = createBaseSyntheticLockupByLockupIDResponse();
    message.syntheticLock = object.syntheticLock !== undefined && object.syntheticLock !== null ? SyntheticLock.fromPartial(object.syntheticLock) : undefined;
    return message;
  }
};
function createBaseAccountLockedLongerDurationRequest(): AccountLockedLongerDurationRequest {
  return {
    owner: "",
    duration: undefined
  };
}
export const AccountLockedLongerDurationRequest = {
  encode(message: AccountLockedLongerDurationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AccountLockedLongerDurationRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },
  fromPartial(object: Partial<AccountLockedLongerDurationRequest>): AccountLockedLongerDurationRequest {
    const message = createBaseAccountLockedLongerDurationRequest();
    message.owner = object.owner ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  }
};
function createBaseAccountLockedLongerDurationResponse(): AccountLockedLongerDurationResponse {
  return {
    locks: []
  };
}
export const AccountLockedLongerDurationResponse = {
  encode(message: AccountLockedLongerDurationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AccountLockedLongerDurationResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<AccountLockedLongerDurationResponse>): AccountLockedLongerDurationResponse {
    const message = createBaseAccountLockedLongerDurationResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAccountLockedDurationRequest(): AccountLockedDurationRequest {
  return {
    owner: "",
    duration: undefined
  };
}
export const AccountLockedDurationRequest = {
  encode(message: AccountLockedDurationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AccountLockedDurationRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },
  fromPartial(object: Partial<AccountLockedDurationRequest>): AccountLockedDurationRequest {
    const message = createBaseAccountLockedDurationRequest();
    message.owner = object.owner ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  }
};
function createBaseAccountLockedDurationResponse(): AccountLockedDurationResponse {
  return {
    locks: []
  };
}
export const AccountLockedDurationResponse = {
  encode(message: AccountLockedDurationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AccountLockedDurationResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<AccountLockedDurationResponse>): AccountLockedDurationResponse {
    const message = createBaseAccountLockedDurationResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest(): AccountLockedLongerDurationNotUnlockingOnlyRequest {
  return {
    owner: "",
    duration: undefined
  };
}
export const AccountLockedLongerDurationNotUnlockingOnlyRequest = {
  encode(message: AccountLockedLongerDurationNotUnlockingOnlyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AccountLockedLongerDurationNotUnlockingOnlyRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },
  fromPartial(object: Partial<AccountLockedLongerDurationNotUnlockingOnlyRequest>): AccountLockedLongerDurationNotUnlockingOnlyRequest {
    const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();
    message.owner = object.owner ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  }
};
function createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse(): AccountLockedLongerDurationNotUnlockingOnlyResponse {
  return {
    locks: []
  };
}
export const AccountLockedLongerDurationNotUnlockingOnlyResponse = {
  encode(message: AccountLockedLongerDurationNotUnlockingOnlyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AccountLockedLongerDurationNotUnlockingOnlyResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<AccountLockedLongerDurationNotUnlockingOnlyResponse>): AccountLockedLongerDurationNotUnlockingOnlyResponse {
    const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAccountLockedLongerDurationDenomRequest(): AccountLockedLongerDurationDenomRequest {
  return {
    owner: "",
    duration: undefined,
    denom: ""
  };
}
export const AccountLockedLongerDurationDenomRequest = {
  encode(message: AccountLockedLongerDurationDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): AccountLockedLongerDurationDenomRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<AccountLockedLongerDurationDenomRequest>): AccountLockedLongerDurationDenomRequest {
    const message = createBaseAccountLockedLongerDurationDenomRequest();
    message.owner = object.owner ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseAccountLockedLongerDurationDenomResponse(): AccountLockedLongerDurationDenomResponse {
  return {
    locks: []
  };
}
export const AccountLockedLongerDurationDenomResponse = {
  encode(message: AccountLockedLongerDurationDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AccountLockedLongerDurationDenomResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<AccountLockedLongerDurationDenomResponse>): AccountLockedLongerDurationDenomResponse {
    const message = createBaseAccountLockedLongerDurationDenomResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};