import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType, SyntheticLock, SyntheticLockSDKType } from "./lock";
import { Params, ParamsSDKType } from "./params";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ModuleBalanceRequest {
}
export interface ModuleBalanceRequestSDKType {
}
export interface ModuleBalanceResponse {
    coins: Coin[];
}
export interface ModuleBalanceResponseSDKType {
    coins: CoinSDKType[];
}
export interface ModuleLockedAmountRequest {
}
export interface ModuleLockedAmountRequestSDKType {
}
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
export interface NextLockIDRequest {
}
export interface NextLockIDRequestSDKType {
}
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
export interface QueryParamsRequest {
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params?: Params;
}
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export declare const ModuleBalanceRequest: {
    encode(_: ModuleBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): ModuleBalanceRequest;
    fromPartial(_: Partial<ModuleBalanceRequest>): ModuleBalanceRequest;
};
export declare const ModuleBalanceResponse: {
    encode(message: ModuleBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ModuleBalanceResponse;
    fromPartial(object: Partial<ModuleBalanceResponse>): ModuleBalanceResponse;
};
export declare const ModuleLockedAmountRequest: {
    encode(_: ModuleLockedAmountRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): ModuleLockedAmountRequest;
    fromPartial(_: Partial<ModuleLockedAmountRequest>): ModuleLockedAmountRequest;
};
export declare const ModuleLockedAmountResponse: {
    encode(message: ModuleLockedAmountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ModuleLockedAmountResponse;
    fromPartial(object: Partial<ModuleLockedAmountResponse>): ModuleLockedAmountResponse;
};
export declare const AccountUnlockableCoinsRequest: {
    encode(message: AccountUnlockableCoinsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccountUnlockableCoinsRequest;
    fromPartial(object: Partial<AccountUnlockableCoinsRequest>): AccountUnlockableCoinsRequest;
};
export declare const AccountUnlockableCoinsResponse: {
    encode(message: AccountUnlockableCoinsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccountUnlockableCoinsResponse;
    fromPartial(object: Partial<AccountUnlockableCoinsResponse>): AccountUnlockableCoinsResponse;
};
export declare const AccountUnlockingCoinsRequest: {
    encode(message: AccountUnlockingCoinsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccountUnlockingCoinsRequest;
    fromPartial(object: Partial<AccountUnlockingCoinsRequest>): AccountUnlockingCoinsRequest;
};
export declare const AccountUnlockingCoinsResponse: {
    encode(message: AccountUnlockingCoinsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccountUnlockingCoinsResponse;
    fromPartial(object: Partial<AccountUnlockingCoinsResponse>): AccountUnlockingCoinsResponse;
};
export declare const AccountLockedCoinsRequest: {
    encode(message: AccountLockedCoinsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccountLockedCoinsRequest;
    fromPartial(object: Partial<AccountLockedCoinsRequest>): AccountLockedCoinsRequest;
};
export declare const AccountLockedCoinsResponse: {
    encode(message: AccountLockedCoinsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccountLockedCoinsResponse;
    fromPartial(object: Partial<AccountLockedCoinsResponse>): AccountLockedCoinsResponse;
};
export declare const AccountLockedPastTimeRequest: {
    encode(message: AccountLockedPastTimeRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccountLockedPastTimeRequest;
    fromPartial(object: Partial<AccountLockedPastTimeRequest>): AccountLockedPastTimeRequest;
};
export declare const AccountLockedPastTimeResponse: {
    encode(message: AccountLockedPastTimeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccountLockedPastTimeResponse;
    fromPartial(object: Partial<AccountLockedPastTimeResponse>): AccountLockedPastTimeResponse;
};
export declare const AccountLockedPastTimeNotUnlockingOnlyRequest: {
    encode(message: AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccountLockedPastTimeNotUnlockingOnlyRequest;
    fromPartial(object: Partial<AccountLockedPastTimeNotUnlockingOnlyRequest>): AccountLockedPastTimeNotUnlockingOnlyRequest;
};
export declare const AccountLockedPastTimeNotUnlockingOnlyResponse: {
    encode(message: AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccountLockedPastTimeNotUnlockingOnlyResponse;
    fromPartial(object: Partial<AccountLockedPastTimeNotUnlockingOnlyResponse>): AccountLockedPastTimeNotUnlockingOnlyResponse;
};
export declare const AccountUnlockedBeforeTimeRequest: {
    encode(message: AccountUnlockedBeforeTimeRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccountUnlockedBeforeTimeRequest;
    fromPartial(object: Partial<AccountUnlockedBeforeTimeRequest>): AccountUnlockedBeforeTimeRequest;
};
export declare const AccountUnlockedBeforeTimeResponse: {
    encode(message: AccountUnlockedBeforeTimeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccountUnlockedBeforeTimeResponse;
    fromPartial(object: Partial<AccountUnlockedBeforeTimeResponse>): AccountUnlockedBeforeTimeResponse;
};
export declare const AccountLockedPastTimeDenomRequest: {
    encode(message: AccountLockedPastTimeDenomRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccountLockedPastTimeDenomRequest;
    fromPartial(object: Partial<AccountLockedPastTimeDenomRequest>): AccountLockedPastTimeDenomRequest;
};
export declare const AccountLockedPastTimeDenomResponse: {
    encode(message: AccountLockedPastTimeDenomResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccountLockedPastTimeDenomResponse;
    fromPartial(object: Partial<AccountLockedPastTimeDenomResponse>): AccountLockedPastTimeDenomResponse;
};
export declare const LockedDenomRequest: {
    encode(message: LockedDenomRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LockedDenomRequest;
    fromPartial(object: Partial<LockedDenomRequest>): LockedDenomRequest;
};
export declare const LockedDenomResponse: {
    encode(message: LockedDenomResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LockedDenomResponse;
    fromPartial(object: Partial<LockedDenomResponse>): LockedDenomResponse;
};
export declare const LockedRequest: {
    encode(message: LockedRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LockedRequest;
    fromPartial(object: Partial<LockedRequest>): LockedRequest;
};
export declare const LockedResponse: {
    encode(message: LockedResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LockedResponse;
    fromPartial(object: Partial<LockedResponse>): LockedResponse;
};
export declare const LockRewardReceiverRequest: {
    encode(message: LockRewardReceiverRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LockRewardReceiverRequest;
    fromPartial(object: Partial<LockRewardReceiverRequest>): LockRewardReceiverRequest;
};
export declare const LockRewardReceiverResponse: {
    encode(message: LockRewardReceiverResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LockRewardReceiverResponse;
    fromPartial(object: Partial<LockRewardReceiverResponse>): LockRewardReceiverResponse;
};
export declare const NextLockIDRequest: {
    encode(_: NextLockIDRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): NextLockIDRequest;
    fromPartial(_: Partial<NextLockIDRequest>): NextLockIDRequest;
};
export declare const NextLockIDResponse: {
    encode(message: NextLockIDResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): NextLockIDResponse;
    fromPartial(object: Partial<NextLockIDResponse>): NextLockIDResponse;
};
export declare const SyntheticLockupsByLockupIDRequest: {
    encode(message: SyntheticLockupsByLockupIDRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SyntheticLockupsByLockupIDRequest;
    fromPartial(object: Partial<SyntheticLockupsByLockupIDRequest>): SyntheticLockupsByLockupIDRequest;
};
export declare const SyntheticLockupsByLockupIDResponse: {
    encode(message: SyntheticLockupsByLockupIDResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SyntheticLockupsByLockupIDResponse;
    fromPartial(object: Partial<SyntheticLockupsByLockupIDResponse>): SyntheticLockupsByLockupIDResponse;
};
export declare const SyntheticLockupByLockupIDRequest: {
    encode(message: SyntheticLockupByLockupIDRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SyntheticLockupByLockupIDRequest;
    fromPartial(object: Partial<SyntheticLockupByLockupIDRequest>): SyntheticLockupByLockupIDRequest;
};
export declare const SyntheticLockupByLockupIDResponse: {
    encode(message: SyntheticLockupByLockupIDResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SyntheticLockupByLockupIDResponse;
    fromPartial(object: Partial<SyntheticLockupByLockupIDResponse>): SyntheticLockupByLockupIDResponse;
};
export declare const AccountLockedLongerDurationRequest: {
    encode(message: AccountLockedLongerDurationRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccountLockedLongerDurationRequest;
    fromPartial(object: Partial<AccountLockedLongerDurationRequest>): AccountLockedLongerDurationRequest;
};
export declare const AccountLockedLongerDurationResponse: {
    encode(message: AccountLockedLongerDurationResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccountLockedLongerDurationResponse;
    fromPartial(object: Partial<AccountLockedLongerDurationResponse>): AccountLockedLongerDurationResponse;
};
export declare const AccountLockedDurationRequest: {
    encode(message: AccountLockedDurationRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccountLockedDurationRequest;
    fromPartial(object: Partial<AccountLockedDurationRequest>): AccountLockedDurationRequest;
};
export declare const AccountLockedDurationResponse: {
    encode(message: AccountLockedDurationResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccountLockedDurationResponse;
    fromPartial(object: Partial<AccountLockedDurationResponse>): AccountLockedDurationResponse;
};
export declare const AccountLockedLongerDurationNotUnlockingOnlyRequest: {
    encode(message: AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccountLockedLongerDurationNotUnlockingOnlyRequest;
    fromPartial(object: Partial<AccountLockedLongerDurationNotUnlockingOnlyRequest>): AccountLockedLongerDurationNotUnlockingOnlyRequest;
};
export declare const AccountLockedLongerDurationNotUnlockingOnlyResponse: {
    encode(message: AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccountLockedLongerDurationNotUnlockingOnlyResponse;
    fromPartial(object: Partial<AccountLockedLongerDurationNotUnlockingOnlyResponse>): AccountLockedLongerDurationNotUnlockingOnlyResponse;
};
export declare const AccountLockedLongerDurationDenomRequest: {
    encode(message: AccountLockedLongerDurationDenomRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccountLockedLongerDurationDenomRequest;
    fromPartial(object: Partial<AccountLockedLongerDurationDenomRequest>): AccountLockedLongerDurationDenomRequest;
};
export declare const AccountLockedLongerDurationDenomResponse: {
    encode(message: AccountLockedLongerDurationDenomResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccountLockedLongerDurationDenomResponse;
    fromPartial(object: Partial<AccountLockedLongerDurationDenomResponse>): AccountLockedLongerDurationDenomResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
