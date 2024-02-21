import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockAmino, PeriodLockSDKType, SyntheticLock, SyntheticLockAmino, SyntheticLockSDKType } from "./lock";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../binary";
export interface ModuleBalanceRequest {
}
export interface ModuleBalanceRequestProtoMsg {
    typeUrl: "/osmosis.lockup.ModuleBalanceRequest";
    value: Uint8Array;
}
export interface ModuleBalanceRequestAmino {
}
export interface ModuleBalanceRequestAminoMsg {
    type: "osmosis/lockup/module-balance-request";
    value: ModuleBalanceRequestAmino;
}
export interface ModuleBalanceRequestSDKType {
}
export interface ModuleBalanceResponse {
    coins: Coin[];
}
export interface ModuleBalanceResponseProtoMsg {
    typeUrl: "/osmosis.lockup.ModuleBalanceResponse";
    value: Uint8Array;
}
export interface ModuleBalanceResponseAmino {
    coins?: CoinAmino[];
}
export interface ModuleBalanceResponseAminoMsg {
    type: "osmosis/lockup/module-balance-response";
    value: ModuleBalanceResponseAmino;
}
export interface ModuleBalanceResponseSDKType {
    coins: CoinSDKType[];
}
export interface ModuleLockedAmountRequest {
}
export interface ModuleLockedAmountRequestProtoMsg {
    typeUrl: "/osmosis.lockup.ModuleLockedAmountRequest";
    value: Uint8Array;
}
export interface ModuleLockedAmountRequestAmino {
}
export interface ModuleLockedAmountRequestAminoMsg {
    type: "osmosis/lockup/module-locked-amount-request";
    value: ModuleLockedAmountRequestAmino;
}
export interface ModuleLockedAmountRequestSDKType {
}
export interface ModuleLockedAmountResponse {
    coins: Coin[];
}
export interface ModuleLockedAmountResponseProtoMsg {
    typeUrl: "/osmosis.lockup.ModuleLockedAmountResponse";
    value: Uint8Array;
}
export interface ModuleLockedAmountResponseAmino {
    coins?: CoinAmino[];
}
export interface ModuleLockedAmountResponseAminoMsg {
    type: "osmosis/lockup/module-locked-amount-response";
    value: ModuleLockedAmountResponseAmino;
}
export interface ModuleLockedAmountResponseSDKType {
    coins: CoinSDKType[];
}
export interface AccountUnlockableCoinsRequest {
    owner: string;
}
export interface AccountUnlockableCoinsRequestProtoMsg {
    typeUrl: "/osmosis.lockup.AccountUnlockableCoinsRequest";
    value: Uint8Array;
}
export interface AccountUnlockableCoinsRequestAmino {
    owner?: string;
}
export interface AccountUnlockableCoinsRequestAminoMsg {
    type: "osmosis/lockup/account-unlockable-coins-request";
    value: AccountUnlockableCoinsRequestAmino;
}
export interface AccountUnlockableCoinsRequestSDKType {
    owner: string;
}
export interface AccountUnlockableCoinsResponse {
    coins: Coin[];
}
export interface AccountUnlockableCoinsResponseProtoMsg {
    typeUrl: "/osmosis.lockup.AccountUnlockableCoinsResponse";
    value: Uint8Array;
}
export interface AccountUnlockableCoinsResponseAmino {
    coins?: CoinAmino[];
}
export interface AccountUnlockableCoinsResponseAminoMsg {
    type: "osmosis/lockup/account-unlockable-coins-response";
    value: AccountUnlockableCoinsResponseAmino;
}
export interface AccountUnlockableCoinsResponseSDKType {
    coins: CoinSDKType[];
}
export interface AccountUnlockingCoinsRequest {
    owner: string;
}
export interface AccountUnlockingCoinsRequestProtoMsg {
    typeUrl: "/osmosis.lockup.AccountUnlockingCoinsRequest";
    value: Uint8Array;
}
export interface AccountUnlockingCoinsRequestAmino {
    owner?: string;
}
export interface AccountUnlockingCoinsRequestAminoMsg {
    type: "osmosis/lockup/account-unlocking-coins-request";
    value: AccountUnlockingCoinsRequestAmino;
}
export interface AccountUnlockingCoinsRequestSDKType {
    owner: string;
}
export interface AccountUnlockingCoinsResponse {
    coins: Coin[];
}
export interface AccountUnlockingCoinsResponseProtoMsg {
    typeUrl: "/osmosis.lockup.AccountUnlockingCoinsResponse";
    value: Uint8Array;
}
export interface AccountUnlockingCoinsResponseAmino {
    coins?: CoinAmino[];
}
export interface AccountUnlockingCoinsResponseAminoMsg {
    type: "osmosis/lockup/account-unlocking-coins-response";
    value: AccountUnlockingCoinsResponseAmino;
}
export interface AccountUnlockingCoinsResponseSDKType {
    coins: CoinSDKType[];
}
export interface AccountLockedCoinsRequest {
    owner: string;
}
export interface AccountLockedCoinsRequestProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedCoinsRequest";
    value: Uint8Array;
}
export interface AccountLockedCoinsRequestAmino {
    owner?: string;
}
export interface AccountLockedCoinsRequestAminoMsg {
    type: "osmosis/lockup/account-locked-coins-request";
    value: AccountLockedCoinsRequestAmino;
}
export interface AccountLockedCoinsRequestSDKType {
    owner: string;
}
export interface AccountLockedCoinsResponse {
    coins: Coin[];
}
export interface AccountLockedCoinsResponseProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedCoinsResponse";
    value: Uint8Array;
}
export interface AccountLockedCoinsResponseAmino {
    coins?: CoinAmino[];
}
export interface AccountLockedCoinsResponseAminoMsg {
    type: "osmosis/lockup/account-locked-coins-response";
    value: AccountLockedCoinsResponseAmino;
}
export interface AccountLockedCoinsResponseSDKType {
    coins: CoinSDKType[];
}
export interface AccountLockedPastTimeRequest {
    owner: string;
    timestamp: Timestamp;
}
export interface AccountLockedPastTimeRequestProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeRequest";
    value: Uint8Array;
}
export interface AccountLockedPastTimeRequestAmino {
    owner?: string;
    timestamp?: string;
}
export interface AccountLockedPastTimeRequestAminoMsg {
    type: "osmosis/lockup/account-locked-past-time-request";
    value: AccountLockedPastTimeRequestAmino;
}
export interface AccountLockedPastTimeRequestSDKType {
    owner: string;
    timestamp: TimestampSDKType;
}
export interface AccountLockedPastTimeResponse {
    locks: PeriodLock[];
}
export interface AccountLockedPastTimeResponseProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeResponse";
    value: Uint8Array;
}
export interface AccountLockedPastTimeResponseAmino {
    locks?: PeriodLockAmino[];
}
export interface AccountLockedPastTimeResponseAminoMsg {
    type: "osmosis/lockup/account-locked-past-time-response";
    value: AccountLockedPastTimeResponseAmino;
}
export interface AccountLockedPastTimeResponseSDKType {
    locks: PeriodLockSDKType[];
}
export interface AccountLockedPastTimeNotUnlockingOnlyRequest {
    owner: string;
    timestamp: Timestamp;
}
export interface AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyRequest";
    value: Uint8Array;
}
export interface AccountLockedPastTimeNotUnlockingOnlyRequestAmino {
    owner?: string;
    timestamp?: string;
}
export interface AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg {
    type: "osmosis/lockup/account-locked-past-time-not-unlocking-only-request";
    value: AccountLockedPastTimeNotUnlockingOnlyRequestAmino;
}
export interface AccountLockedPastTimeNotUnlockingOnlyRequestSDKType {
    owner: string;
    timestamp: TimestampSDKType;
}
export interface AccountLockedPastTimeNotUnlockingOnlyResponse {
    locks: PeriodLock[];
}
export interface AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyResponse";
    value: Uint8Array;
}
export interface AccountLockedPastTimeNotUnlockingOnlyResponseAmino {
    locks?: PeriodLockAmino[];
}
export interface AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg {
    type: "osmosis/lockup/account-locked-past-time-not-unlocking-only-response";
    value: AccountLockedPastTimeNotUnlockingOnlyResponseAmino;
}
export interface AccountLockedPastTimeNotUnlockingOnlyResponseSDKType {
    locks: PeriodLockSDKType[];
}
export interface AccountUnlockedBeforeTimeRequest {
    owner: string;
    timestamp: Timestamp;
}
export interface AccountUnlockedBeforeTimeRequestProtoMsg {
    typeUrl: "/osmosis.lockup.AccountUnlockedBeforeTimeRequest";
    value: Uint8Array;
}
export interface AccountUnlockedBeforeTimeRequestAmino {
    owner?: string;
    timestamp?: string;
}
export interface AccountUnlockedBeforeTimeRequestAminoMsg {
    type: "osmosis/lockup/account-unlocked-before-time-request";
    value: AccountUnlockedBeforeTimeRequestAmino;
}
export interface AccountUnlockedBeforeTimeRequestSDKType {
    owner: string;
    timestamp: TimestampSDKType;
}
export interface AccountUnlockedBeforeTimeResponse {
    locks: PeriodLock[];
}
export interface AccountUnlockedBeforeTimeResponseProtoMsg {
    typeUrl: "/osmosis.lockup.AccountUnlockedBeforeTimeResponse";
    value: Uint8Array;
}
export interface AccountUnlockedBeforeTimeResponseAmino {
    locks?: PeriodLockAmino[];
}
export interface AccountUnlockedBeforeTimeResponseAminoMsg {
    type: "osmosis/lockup/account-unlocked-before-time-response";
    value: AccountUnlockedBeforeTimeResponseAmino;
}
export interface AccountUnlockedBeforeTimeResponseSDKType {
    locks: PeriodLockSDKType[];
}
export interface AccountLockedPastTimeDenomRequest {
    owner: string;
    timestamp: Timestamp;
    denom: string;
}
export interface AccountLockedPastTimeDenomRequestProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeDenomRequest";
    value: Uint8Array;
}
export interface AccountLockedPastTimeDenomRequestAmino {
    owner?: string;
    timestamp?: string;
    denom?: string;
}
export interface AccountLockedPastTimeDenomRequestAminoMsg {
    type: "osmosis/lockup/account-locked-past-time-denom-request";
    value: AccountLockedPastTimeDenomRequestAmino;
}
export interface AccountLockedPastTimeDenomRequestSDKType {
    owner: string;
    timestamp: TimestampSDKType;
    denom: string;
}
export interface AccountLockedPastTimeDenomResponse {
    locks: PeriodLock[];
}
export interface AccountLockedPastTimeDenomResponseProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeDenomResponse";
    value: Uint8Array;
}
export interface AccountLockedPastTimeDenomResponseAmino {
    locks?: PeriodLockAmino[];
}
export interface AccountLockedPastTimeDenomResponseAminoMsg {
    type: "osmosis/lockup/account-locked-past-time-denom-response";
    value: AccountLockedPastTimeDenomResponseAmino;
}
export interface AccountLockedPastTimeDenomResponseSDKType {
    locks: PeriodLockSDKType[];
}
export interface LockedDenomRequest {
    denom: string;
    duration: Duration;
}
export interface LockedDenomRequestProtoMsg {
    typeUrl: "/osmosis.lockup.LockedDenomRequest";
    value: Uint8Array;
}
export interface LockedDenomRequestAmino {
    denom?: string;
    duration?: DurationAmino;
}
export interface LockedDenomRequestAminoMsg {
    type: "osmosis/lockup/locked-denom-request";
    value: LockedDenomRequestAmino;
}
export interface LockedDenomRequestSDKType {
    denom: string;
    duration: DurationSDKType;
}
export interface LockedDenomResponse {
    amount: string;
}
export interface LockedDenomResponseProtoMsg {
    typeUrl: "/osmosis.lockup.LockedDenomResponse";
    value: Uint8Array;
}
export interface LockedDenomResponseAmino {
    amount?: string;
}
export interface LockedDenomResponseAminoMsg {
    type: "osmosis/lockup/locked-denom-response";
    value: LockedDenomResponseAmino;
}
export interface LockedDenomResponseSDKType {
    amount: string;
}
export interface LockedRequest {
    lockId: bigint;
}
export interface LockedRequestProtoMsg {
    typeUrl: "/osmosis.lockup.LockedRequest";
    value: Uint8Array;
}
export interface LockedRequestAmino {
    lock_id?: string;
}
export interface LockedRequestAminoMsg {
    type: "osmosis/lockup/locked-request";
    value: LockedRequestAmino;
}
export interface LockedRequestSDKType {
    lock_id: bigint;
}
export interface LockedResponse {
    lock?: PeriodLock;
}
export interface LockedResponseProtoMsg {
    typeUrl: "/osmosis.lockup.LockedResponse";
    value: Uint8Array;
}
export interface LockedResponseAmino {
    lock?: PeriodLockAmino;
}
export interface LockedResponseAminoMsg {
    type: "osmosis/lockup/locked-response";
    value: LockedResponseAmino;
}
export interface LockedResponseSDKType {
    lock?: PeriodLockSDKType;
}
export interface LockRewardReceiverRequest {
    lockId: bigint;
}
export interface LockRewardReceiverRequestProtoMsg {
    typeUrl: "/osmosis.lockup.LockRewardReceiverRequest";
    value: Uint8Array;
}
export interface LockRewardReceiverRequestAmino {
    lock_id?: string;
}
export interface LockRewardReceiverRequestAminoMsg {
    type: "osmosis/lockup/lock-reward-receiver-request";
    value: LockRewardReceiverRequestAmino;
}
export interface LockRewardReceiverRequestSDKType {
    lock_id: bigint;
}
export interface LockRewardReceiverResponse {
    rewardReceiver: string;
}
export interface LockRewardReceiverResponseProtoMsg {
    typeUrl: "/osmosis.lockup.LockRewardReceiverResponse";
    value: Uint8Array;
}
export interface LockRewardReceiverResponseAmino {
    reward_receiver?: string;
}
export interface LockRewardReceiverResponseAminoMsg {
    type: "osmosis/lockup/lock-reward-receiver-response";
    value: LockRewardReceiverResponseAmino;
}
export interface LockRewardReceiverResponseSDKType {
    reward_receiver: string;
}
export interface NextLockIDRequest {
}
export interface NextLockIDRequestProtoMsg {
    typeUrl: "/osmosis.lockup.NextLockIDRequest";
    value: Uint8Array;
}
export interface NextLockIDRequestAmino {
}
export interface NextLockIDRequestAminoMsg {
    type: "osmosis/lockup/next-lock-id-request";
    value: NextLockIDRequestAmino;
}
export interface NextLockIDRequestSDKType {
}
export interface NextLockIDResponse {
    lockId: bigint;
}
export interface NextLockIDResponseProtoMsg {
    typeUrl: "/osmosis.lockup.NextLockIDResponse";
    value: Uint8Array;
}
export interface NextLockIDResponseAmino {
    lock_id?: string;
}
export interface NextLockIDResponseAminoMsg {
    type: "osmosis/lockup/next-lock-id-response";
    value: NextLockIDResponseAmino;
}
export interface NextLockIDResponseSDKType {
    lock_id: bigint;
}
/** @deprecated */
export interface SyntheticLockupsByLockupIDRequest {
    lockId: bigint;
}
export interface SyntheticLockupsByLockupIDRequestProtoMsg {
    typeUrl: "/osmosis.lockup.SyntheticLockupsByLockupIDRequest";
    value: Uint8Array;
}
/** @deprecated */
export interface SyntheticLockupsByLockupIDRequestAmino {
    lock_id?: string;
}
export interface SyntheticLockupsByLockupIDRequestAminoMsg {
    type: "osmosis/lockup/synthetic-lockups-by-lockup-id-request";
    value: SyntheticLockupsByLockupIDRequestAmino;
}
/** @deprecated */
export interface SyntheticLockupsByLockupIDRequestSDKType {
    lock_id: bigint;
}
/** @deprecated */
export interface SyntheticLockupsByLockupIDResponse {
    syntheticLocks: SyntheticLock[];
}
export interface SyntheticLockupsByLockupIDResponseProtoMsg {
    typeUrl: "/osmosis.lockup.SyntheticLockupsByLockupIDResponse";
    value: Uint8Array;
}
/** @deprecated */
export interface SyntheticLockupsByLockupIDResponseAmino {
    synthetic_locks?: SyntheticLockAmino[];
}
export interface SyntheticLockupsByLockupIDResponseAminoMsg {
    type: "osmosis/lockup/synthetic-lockups-by-lockup-id-response";
    value: SyntheticLockupsByLockupIDResponseAmino;
}
/** @deprecated */
export interface SyntheticLockupsByLockupIDResponseSDKType {
    synthetic_locks: SyntheticLockSDKType[];
}
export interface SyntheticLockupByLockupIDRequest {
    lockId: bigint;
}
export interface SyntheticLockupByLockupIDRequestProtoMsg {
    typeUrl: "/osmosis.lockup.SyntheticLockupByLockupIDRequest";
    value: Uint8Array;
}
export interface SyntheticLockupByLockupIDRequestAmino {
    lock_id?: string;
}
export interface SyntheticLockupByLockupIDRequestAminoMsg {
    type: "osmosis/lockup/synthetic-lockup-by-lockup-id-request";
    value: SyntheticLockupByLockupIDRequestAmino;
}
export interface SyntheticLockupByLockupIDRequestSDKType {
    lock_id: bigint;
}
export interface SyntheticLockupByLockupIDResponse {
    syntheticLock: SyntheticLock;
}
export interface SyntheticLockupByLockupIDResponseProtoMsg {
    typeUrl: "/osmosis.lockup.SyntheticLockupByLockupIDResponse";
    value: Uint8Array;
}
export interface SyntheticLockupByLockupIDResponseAmino {
    synthetic_lock?: SyntheticLockAmino;
}
export interface SyntheticLockupByLockupIDResponseAminoMsg {
    type: "osmosis/lockup/synthetic-lockup-by-lockup-id-response";
    value: SyntheticLockupByLockupIDResponseAmino;
}
export interface SyntheticLockupByLockupIDResponseSDKType {
    synthetic_lock: SyntheticLockSDKType;
}
export interface AccountLockedLongerDurationRequest {
    owner: string;
    duration: Duration;
}
export interface AccountLockedLongerDurationRequestProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationRequest";
    value: Uint8Array;
}
export interface AccountLockedLongerDurationRequestAmino {
    owner?: string;
    duration?: DurationAmino;
}
export interface AccountLockedLongerDurationRequestAminoMsg {
    type: "osmosis/lockup/account-locked-longer-duration-request";
    value: AccountLockedLongerDurationRequestAmino;
}
export interface AccountLockedLongerDurationRequestSDKType {
    owner: string;
    duration: DurationSDKType;
}
export interface AccountLockedLongerDurationResponse {
    locks: PeriodLock[];
}
export interface AccountLockedLongerDurationResponseProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationResponse";
    value: Uint8Array;
}
export interface AccountLockedLongerDurationResponseAmino {
    locks?: PeriodLockAmino[];
}
export interface AccountLockedLongerDurationResponseAminoMsg {
    type: "osmosis/lockup/account-locked-longer-duration-response";
    value: AccountLockedLongerDurationResponseAmino;
}
export interface AccountLockedLongerDurationResponseSDKType {
    locks: PeriodLockSDKType[];
}
export interface AccountLockedDurationRequest {
    owner: string;
    duration: Duration;
}
export interface AccountLockedDurationRequestProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedDurationRequest";
    value: Uint8Array;
}
export interface AccountLockedDurationRequestAmino {
    owner?: string;
    duration?: DurationAmino;
}
export interface AccountLockedDurationRequestAminoMsg {
    type: "osmosis/lockup/account-locked-duration-request";
    value: AccountLockedDurationRequestAmino;
}
export interface AccountLockedDurationRequestSDKType {
    owner: string;
    duration: DurationSDKType;
}
export interface AccountLockedDurationResponse {
    locks: PeriodLock[];
}
export interface AccountLockedDurationResponseProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedDurationResponse";
    value: Uint8Array;
}
export interface AccountLockedDurationResponseAmino {
    locks?: PeriodLockAmino[];
}
export interface AccountLockedDurationResponseAminoMsg {
    type: "osmosis/lockup/account-locked-duration-response";
    value: AccountLockedDurationResponseAmino;
}
export interface AccountLockedDurationResponseSDKType {
    locks: PeriodLockSDKType[];
}
export interface AccountLockedLongerDurationNotUnlockingOnlyRequest {
    owner: string;
    duration: Duration;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyRequest";
    value: Uint8Array;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyRequestAmino {
    owner?: string;
    duration?: DurationAmino;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg {
    type: "osmosis/lockup/account-locked-longer-duration-not-unlocking-only-request";
    value: AccountLockedLongerDurationNotUnlockingOnlyRequestAmino;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType {
    owner: string;
    duration: DurationSDKType;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyResponse {
    locks: PeriodLock[];
}
export interface AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyResponse";
    value: Uint8Array;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyResponseAmino {
    locks?: PeriodLockAmino[];
}
export interface AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg {
    type: "osmosis/lockup/account-locked-longer-duration-not-unlocking-only-response";
    value: AccountLockedLongerDurationNotUnlockingOnlyResponseAmino;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType {
    locks: PeriodLockSDKType[];
}
export interface AccountLockedLongerDurationDenomRequest {
    owner: string;
    duration: Duration;
    denom: string;
}
export interface AccountLockedLongerDurationDenomRequestProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationDenomRequest";
    value: Uint8Array;
}
export interface AccountLockedLongerDurationDenomRequestAmino {
    owner?: string;
    duration?: DurationAmino;
    denom?: string;
}
export interface AccountLockedLongerDurationDenomRequestAminoMsg {
    type: "osmosis/lockup/account-locked-longer-duration-denom-request";
    value: AccountLockedLongerDurationDenomRequestAmino;
}
export interface AccountLockedLongerDurationDenomRequestSDKType {
    owner: string;
    duration: DurationSDKType;
    denom: string;
}
export interface AccountLockedLongerDurationDenomResponse {
    locks: PeriodLock[];
}
export interface AccountLockedLongerDurationDenomResponseProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationDenomResponse";
    value: Uint8Array;
}
export interface AccountLockedLongerDurationDenomResponseAmino {
    locks?: PeriodLockAmino[];
}
export interface AccountLockedLongerDurationDenomResponseAminoMsg {
    type: "osmosis/lockup/account-locked-longer-duration-denom-response";
    value: AccountLockedLongerDurationDenomResponseAmino;
}
export interface AccountLockedLongerDurationDenomResponseSDKType {
    locks: PeriodLockSDKType[];
}
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/osmosis.lockup.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "osmosis/lockup/query-params-request";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/osmosis.lockup.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "osmosis/lockup/query-params-response";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const ModuleBalanceRequest: {
    typeUrl: string;
    encode(_: ModuleBalanceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): ModuleBalanceRequest;
    fromPartial(_: Partial<ModuleBalanceRequest>): ModuleBalanceRequest;
    fromAmino(_: ModuleBalanceRequestAmino): ModuleBalanceRequest;
    toAmino(_: ModuleBalanceRequest): ModuleBalanceRequestAmino;
    fromAminoMsg(object: ModuleBalanceRequestAminoMsg): ModuleBalanceRequest;
    toAminoMsg(message: ModuleBalanceRequest): ModuleBalanceRequestAminoMsg;
    fromProtoMsg(message: ModuleBalanceRequestProtoMsg): ModuleBalanceRequest;
    toProto(message: ModuleBalanceRequest): Uint8Array;
    toProtoMsg(message: ModuleBalanceRequest): ModuleBalanceRequestProtoMsg;
};
export declare const ModuleBalanceResponse: {
    typeUrl: string;
    encode(message: ModuleBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ModuleBalanceResponse;
    fromPartial(object: Partial<ModuleBalanceResponse>): ModuleBalanceResponse;
    fromAmino(object: ModuleBalanceResponseAmino): ModuleBalanceResponse;
    toAmino(message: ModuleBalanceResponse): ModuleBalanceResponseAmino;
    fromAminoMsg(object: ModuleBalanceResponseAminoMsg): ModuleBalanceResponse;
    toAminoMsg(message: ModuleBalanceResponse): ModuleBalanceResponseAminoMsg;
    fromProtoMsg(message: ModuleBalanceResponseProtoMsg): ModuleBalanceResponse;
    toProto(message: ModuleBalanceResponse): Uint8Array;
    toProtoMsg(message: ModuleBalanceResponse): ModuleBalanceResponseProtoMsg;
};
export declare const ModuleLockedAmountRequest: {
    typeUrl: string;
    encode(_: ModuleLockedAmountRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): ModuleLockedAmountRequest;
    fromPartial(_: Partial<ModuleLockedAmountRequest>): ModuleLockedAmountRequest;
    fromAmino(_: ModuleLockedAmountRequestAmino): ModuleLockedAmountRequest;
    toAmino(_: ModuleLockedAmountRequest): ModuleLockedAmountRequestAmino;
    fromAminoMsg(object: ModuleLockedAmountRequestAminoMsg): ModuleLockedAmountRequest;
    toAminoMsg(message: ModuleLockedAmountRequest): ModuleLockedAmountRequestAminoMsg;
    fromProtoMsg(message: ModuleLockedAmountRequestProtoMsg): ModuleLockedAmountRequest;
    toProto(message: ModuleLockedAmountRequest): Uint8Array;
    toProtoMsg(message: ModuleLockedAmountRequest): ModuleLockedAmountRequestProtoMsg;
};
export declare const ModuleLockedAmountResponse: {
    typeUrl: string;
    encode(message: ModuleLockedAmountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ModuleLockedAmountResponse;
    fromPartial(object: Partial<ModuleLockedAmountResponse>): ModuleLockedAmountResponse;
    fromAmino(object: ModuleLockedAmountResponseAmino): ModuleLockedAmountResponse;
    toAmino(message: ModuleLockedAmountResponse): ModuleLockedAmountResponseAmino;
    fromAminoMsg(object: ModuleLockedAmountResponseAminoMsg): ModuleLockedAmountResponse;
    toAminoMsg(message: ModuleLockedAmountResponse): ModuleLockedAmountResponseAminoMsg;
    fromProtoMsg(message: ModuleLockedAmountResponseProtoMsg): ModuleLockedAmountResponse;
    toProto(message: ModuleLockedAmountResponse): Uint8Array;
    toProtoMsg(message: ModuleLockedAmountResponse): ModuleLockedAmountResponseProtoMsg;
};
export declare const AccountUnlockableCoinsRequest: {
    typeUrl: string;
    encode(message: AccountUnlockableCoinsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccountUnlockableCoinsRequest;
    fromPartial(object: Partial<AccountUnlockableCoinsRequest>): AccountUnlockableCoinsRequest;
    fromAmino(object: AccountUnlockableCoinsRequestAmino): AccountUnlockableCoinsRequest;
    toAmino(message: AccountUnlockableCoinsRequest): AccountUnlockableCoinsRequestAmino;
    fromAminoMsg(object: AccountUnlockableCoinsRequestAminoMsg): AccountUnlockableCoinsRequest;
    toAminoMsg(message: AccountUnlockableCoinsRequest): AccountUnlockableCoinsRequestAminoMsg;
    fromProtoMsg(message: AccountUnlockableCoinsRequestProtoMsg): AccountUnlockableCoinsRequest;
    toProto(message: AccountUnlockableCoinsRequest): Uint8Array;
    toProtoMsg(message: AccountUnlockableCoinsRequest): AccountUnlockableCoinsRequestProtoMsg;
};
export declare const AccountUnlockableCoinsResponse: {
    typeUrl: string;
    encode(message: AccountUnlockableCoinsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccountUnlockableCoinsResponse;
    fromPartial(object: Partial<AccountUnlockableCoinsResponse>): AccountUnlockableCoinsResponse;
    fromAmino(object: AccountUnlockableCoinsResponseAmino): AccountUnlockableCoinsResponse;
    toAmino(message: AccountUnlockableCoinsResponse): AccountUnlockableCoinsResponseAmino;
    fromAminoMsg(object: AccountUnlockableCoinsResponseAminoMsg): AccountUnlockableCoinsResponse;
    toAminoMsg(message: AccountUnlockableCoinsResponse): AccountUnlockableCoinsResponseAminoMsg;
    fromProtoMsg(message: AccountUnlockableCoinsResponseProtoMsg): AccountUnlockableCoinsResponse;
    toProto(message: AccountUnlockableCoinsResponse): Uint8Array;
    toProtoMsg(message: AccountUnlockableCoinsResponse): AccountUnlockableCoinsResponseProtoMsg;
};
export declare const AccountUnlockingCoinsRequest: {
    typeUrl: string;
    encode(message: AccountUnlockingCoinsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccountUnlockingCoinsRequest;
    fromPartial(object: Partial<AccountUnlockingCoinsRequest>): AccountUnlockingCoinsRequest;
    fromAmino(object: AccountUnlockingCoinsRequestAmino): AccountUnlockingCoinsRequest;
    toAmino(message: AccountUnlockingCoinsRequest): AccountUnlockingCoinsRequestAmino;
    fromAminoMsg(object: AccountUnlockingCoinsRequestAminoMsg): AccountUnlockingCoinsRequest;
    toAminoMsg(message: AccountUnlockingCoinsRequest): AccountUnlockingCoinsRequestAminoMsg;
    fromProtoMsg(message: AccountUnlockingCoinsRequestProtoMsg): AccountUnlockingCoinsRequest;
    toProto(message: AccountUnlockingCoinsRequest): Uint8Array;
    toProtoMsg(message: AccountUnlockingCoinsRequest): AccountUnlockingCoinsRequestProtoMsg;
};
export declare const AccountUnlockingCoinsResponse: {
    typeUrl: string;
    encode(message: AccountUnlockingCoinsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccountUnlockingCoinsResponse;
    fromPartial(object: Partial<AccountUnlockingCoinsResponse>): AccountUnlockingCoinsResponse;
    fromAmino(object: AccountUnlockingCoinsResponseAmino): AccountUnlockingCoinsResponse;
    toAmino(message: AccountUnlockingCoinsResponse): AccountUnlockingCoinsResponseAmino;
    fromAminoMsg(object: AccountUnlockingCoinsResponseAminoMsg): AccountUnlockingCoinsResponse;
    toAminoMsg(message: AccountUnlockingCoinsResponse): AccountUnlockingCoinsResponseAminoMsg;
    fromProtoMsg(message: AccountUnlockingCoinsResponseProtoMsg): AccountUnlockingCoinsResponse;
    toProto(message: AccountUnlockingCoinsResponse): Uint8Array;
    toProtoMsg(message: AccountUnlockingCoinsResponse): AccountUnlockingCoinsResponseProtoMsg;
};
export declare const AccountLockedCoinsRequest: {
    typeUrl: string;
    encode(message: AccountLockedCoinsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccountLockedCoinsRequest;
    fromPartial(object: Partial<AccountLockedCoinsRequest>): AccountLockedCoinsRequest;
    fromAmino(object: AccountLockedCoinsRequestAmino): AccountLockedCoinsRequest;
    toAmino(message: AccountLockedCoinsRequest): AccountLockedCoinsRequestAmino;
    fromAminoMsg(object: AccountLockedCoinsRequestAminoMsg): AccountLockedCoinsRequest;
    toAminoMsg(message: AccountLockedCoinsRequest): AccountLockedCoinsRequestAminoMsg;
    fromProtoMsg(message: AccountLockedCoinsRequestProtoMsg): AccountLockedCoinsRequest;
    toProto(message: AccountLockedCoinsRequest): Uint8Array;
    toProtoMsg(message: AccountLockedCoinsRequest): AccountLockedCoinsRequestProtoMsg;
};
export declare const AccountLockedCoinsResponse: {
    typeUrl: string;
    encode(message: AccountLockedCoinsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccountLockedCoinsResponse;
    fromPartial(object: Partial<AccountLockedCoinsResponse>): AccountLockedCoinsResponse;
    fromAmino(object: AccountLockedCoinsResponseAmino): AccountLockedCoinsResponse;
    toAmino(message: AccountLockedCoinsResponse): AccountLockedCoinsResponseAmino;
    fromAminoMsg(object: AccountLockedCoinsResponseAminoMsg): AccountLockedCoinsResponse;
    toAminoMsg(message: AccountLockedCoinsResponse): AccountLockedCoinsResponseAminoMsg;
    fromProtoMsg(message: AccountLockedCoinsResponseProtoMsg): AccountLockedCoinsResponse;
    toProto(message: AccountLockedCoinsResponse): Uint8Array;
    toProtoMsg(message: AccountLockedCoinsResponse): AccountLockedCoinsResponseProtoMsg;
};
export declare const AccountLockedPastTimeRequest: {
    typeUrl: string;
    encode(message: AccountLockedPastTimeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccountLockedPastTimeRequest;
    fromPartial(object: Partial<AccountLockedPastTimeRequest>): AccountLockedPastTimeRequest;
    fromAmino(object: AccountLockedPastTimeRequestAmino): AccountLockedPastTimeRequest;
    toAmino(message: AccountLockedPastTimeRequest): AccountLockedPastTimeRequestAmino;
    fromAminoMsg(object: AccountLockedPastTimeRequestAminoMsg): AccountLockedPastTimeRequest;
    toAminoMsg(message: AccountLockedPastTimeRequest): AccountLockedPastTimeRequestAminoMsg;
    fromProtoMsg(message: AccountLockedPastTimeRequestProtoMsg): AccountLockedPastTimeRequest;
    toProto(message: AccountLockedPastTimeRequest): Uint8Array;
    toProtoMsg(message: AccountLockedPastTimeRequest): AccountLockedPastTimeRequestProtoMsg;
};
export declare const AccountLockedPastTimeResponse: {
    typeUrl: string;
    encode(message: AccountLockedPastTimeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccountLockedPastTimeResponse;
    fromPartial(object: Partial<AccountLockedPastTimeResponse>): AccountLockedPastTimeResponse;
    fromAmino(object: AccountLockedPastTimeResponseAmino): AccountLockedPastTimeResponse;
    toAmino(message: AccountLockedPastTimeResponse): AccountLockedPastTimeResponseAmino;
    fromAminoMsg(object: AccountLockedPastTimeResponseAminoMsg): AccountLockedPastTimeResponse;
    toAminoMsg(message: AccountLockedPastTimeResponse): AccountLockedPastTimeResponseAminoMsg;
    fromProtoMsg(message: AccountLockedPastTimeResponseProtoMsg): AccountLockedPastTimeResponse;
    toProto(message: AccountLockedPastTimeResponse): Uint8Array;
    toProtoMsg(message: AccountLockedPastTimeResponse): AccountLockedPastTimeResponseProtoMsg;
};
export declare const AccountLockedPastTimeNotUnlockingOnlyRequest: {
    typeUrl: string;
    encode(message: AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccountLockedPastTimeNotUnlockingOnlyRequest;
    fromPartial(object: Partial<AccountLockedPastTimeNotUnlockingOnlyRequest>): AccountLockedPastTimeNotUnlockingOnlyRequest;
    fromAmino(object: AccountLockedPastTimeNotUnlockingOnlyRequestAmino): AccountLockedPastTimeNotUnlockingOnlyRequest;
    toAmino(message: AccountLockedPastTimeNotUnlockingOnlyRequest): AccountLockedPastTimeNotUnlockingOnlyRequestAmino;
    fromAminoMsg(object: AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg): AccountLockedPastTimeNotUnlockingOnlyRequest;
    toAminoMsg(message: AccountLockedPastTimeNotUnlockingOnlyRequest): AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg;
    fromProtoMsg(message: AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg): AccountLockedPastTimeNotUnlockingOnlyRequest;
    toProto(message: AccountLockedPastTimeNotUnlockingOnlyRequest): Uint8Array;
    toProtoMsg(message: AccountLockedPastTimeNotUnlockingOnlyRequest): AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg;
};
export declare const AccountLockedPastTimeNotUnlockingOnlyResponse: {
    typeUrl: string;
    encode(message: AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccountLockedPastTimeNotUnlockingOnlyResponse;
    fromPartial(object: Partial<AccountLockedPastTimeNotUnlockingOnlyResponse>): AccountLockedPastTimeNotUnlockingOnlyResponse;
    fromAmino(object: AccountLockedPastTimeNotUnlockingOnlyResponseAmino): AccountLockedPastTimeNotUnlockingOnlyResponse;
    toAmino(message: AccountLockedPastTimeNotUnlockingOnlyResponse): AccountLockedPastTimeNotUnlockingOnlyResponseAmino;
    fromAminoMsg(object: AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg): AccountLockedPastTimeNotUnlockingOnlyResponse;
    toAminoMsg(message: AccountLockedPastTimeNotUnlockingOnlyResponse): AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg;
    fromProtoMsg(message: AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg): AccountLockedPastTimeNotUnlockingOnlyResponse;
    toProto(message: AccountLockedPastTimeNotUnlockingOnlyResponse): Uint8Array;
    toProtoMsg(message: AccountLockedPastTimeNotUnlockingOnlyResponse): AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg;
};
export declare const AccountUnlockedBeforeTimeRequest: {
    typeUrl: string;
    encode(message: AccountUnlockedBeforeTimeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccountUnlockedBeforeTimeRequest;
    fromPartial(object: Partial<AccountUnlockedBeforeTimeRequest>): AccountUnlockedBeforeTimeRequest;
    fromAmino(object: AccountUnlockedBeforeTimeRequestAmino): AccountUnlockedBeforeTimeRequest;
    toAmino(message: AccountUnlockedBeforeTimeRequest): AccountUnlockedBeforeTimeRequestAmino;
    fromAminoMsg(object: AccountUnlockedBeforeTimeRequestAminoMsg): AccountUnlockedBeforeTimeRequest;
    toAminoMsg(message: AccountUnlockedBeforeTimeRequest): AccountUnlockedBeforeTimeRequestAminoMsg;
    fromProtoMsg(message: AccountUnlockedBeforeTimeRequestProtoMsg): AccountUnlockedBeforeTimeRequest;
    toProto(message: AccountUnlockedBeforeTimeRequest): Uint8Array;
    toProtoMsg(message: AccountUnlockedBeforeTimeRequest): AccountUnlockedBeforeTimeRequestProtoMsg;
};
export declare const AccountUnlockedBeforeTimeResponse: {
    typeUrl: string;
    encode(message: AccountUnlockedBeforeTimeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccountUnlockedBeforeTimeResponse;
    fromPartial(object: Partial<AccountUnlockedBeforeTimeResponse>): AccountUnlockedBeforeTimeResponse;
    fromAmino(object: AccountUnlockedBeforeTimeResponseAmino): AccountUnlockedBeforeTimeResponse;
    toAmino(message: AccountUnlockedBeforeTimeResponse): AccountUnlockedBeforeTimeResponseAmino;
    fromAminoMsg(object: AccountUnlockedBeforeTimeResponseAminoMsg): AccountUnlockedBeforeTimeResponse;
    toAminoMsg(message: AccountUnlockedBeforeTimeResponse): AccountUnlockedBeforeTimeResponseAminoMsg;
    fromProtoMsg(message: AccountUnlockedBeforeTimeResponseProtoMsg): AccountUnlockedBeforeTimeResponse;
    toProto(message: AccountUnlockedBeforeTimeResponse): Uint8Array;
    toProtoMsg(message: AccountUnlockedBeforeTimeResponse): AccountUnlockedBeforeTimeResponseProtoMsg;
};
export declare const AccountLockedPastTimeDenomRequest: {
    typeUrl: string;
    encode(message: AccountLockedPastTimeDenomRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccountLockedPastTimeDenomRequest;
    fromPartial(object: Partial<AccountLockedPastTimeDenomRequest>): AccountLockedPastTimeDenomRequest;
    fromAmino(object: AccountLockedPastTimeDenomRequestAmino): AccountLockedPastTimeDenomRequest;
    toAmino(message: AccountLockedPastTimeDenomRequest): AccountLockedPastTimeDenomRequestAmino;
    fromAminoMsg(object: AccountLockedPastTimeDenomRequestAminoMsg): AccountLockedPastTimeDenomRequest;
    toAminoMsg(message: AccountLockedPastTimeDenomRequest): AccountLockedPastTimeDenomRequestAminoMsg;
    fromProtoMsg(message: AccountLockedPastTimeDenomRequestProtoMsg): AccountLockedPastTimeDenomRequest;
    toProto(message: AccountLockedPastTimeDenomRequest): Uint8Array;
    toProtoMsg(message: AccountLockedPastTimeDenomRequest): AccountLockedPastTimeDenomRequestProtoMsg;
};
export declare const AccountLockedPastTimeDenomResponse: {
    typeUrl: string;
    encode(message: AccountLockedPastTimeDenomResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccountLockedPastTimeDenomResponse;
    fromPartial(object: Partial<AccountLockedPastTimeDenomResponse>): AccountLockedPastTimeDenomResponse;
    fromAmino(object: AccountLockedPastTimeDenomResponseAmino): AccountLockedPastTimeDenomResponse;
    toAmino(message: AccountLockedPastTimeDenomResponse): AccountLockedPastTimeDenomResponseAmino;
    fromAminoMsg(object: AccountLockedPastTimeDenomResponseAminoMsg): AccountLockedPastTimeDenomResponse;
    toAminoMsg(message: AccountLockedPastTimeDenomResponse): AccountLockedPastTimeDenomResponseAminoMsg;
    fromProtoMsg(message: AccountLockedPastTimeDenomResponseProtoMsg): AccountLockedPastTimeDenomResponse;
    toProto(message: AccountLockedPastTimeDenomResponse): Uint8Array;
    toProtoMsg(message: AccountLockedPastTimeDenomResponse): AccountLockedPastTimeDenomResponseProtoMsg;
};
export declare const LockedDenomRequest: {
    typeUrl: string;
    encode(message: LockedDenomRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LockedDenomRequest;
    fromPartial(object: Partial<LockedDenomRequest>): LockedDenomRequest;
    fromAmino(object: LockedDenomRequestAmino): LockedDenomRequest;
    toAmino(message: LockedDenomRequest): LockedDenomRequestAmino;
    fromAminoMsg(object: LockedDenomRequestAminoMsg): LockedDenomRequest;
    toAminoMsg(message: LockedDenomRequest): LockedDenomRequestAminoMsg;
    fromProtoMsg(message: LockedDenomRequestProtoMsg): LockedDenomRequest;
    toProto(message: LockedDenomRequest): Uint8Array;
    toProtoMsg(message: LockedDenomRequest): LockedDenomRequestProtoMsg;
};
export declare const LockedDenomResponse: {
    typeUrl: string;
    encode(message: LockedDenomResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LockedDenomResponse;
    fromPartial(object: Partial<LockedDenomResponse>): LockedDenomResponse;
    fromAmino(object: LockedDenomResponseAmino): LockedDenomResponse;
    toAmino(message: LockedDenomResponse): LockedDenomResponseAmino;
    fromAminoMsg(object: LockedDenomResponseAminoMsg): LockedDenomResponse;
    toAminoMsg(message: LockedDenomResponse): LockedDenomResponseAminoMsg;
    fromProtoMsg(message: LockedDenomResponseProtoMsg): LockedDenomResponse;
    toProto(message: LockedDenomResponse): Uint8Array;
    toProtoMsg(message: LockedDenomResponse): LockedDenomResponseProtoMsg;
};
export declare const LockedRequest: {
    typeUrl: string;
    encode(message: LockedRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LockedRequest;
    fromPartial(object: Partial<LockedRequest>): LockedRequest;
    fromAmino(object: LockedRequestAmino): LockedRequest;
    toAmino(message: LockedRequest): LockedRequestAmino;
    fromAminoMsg(object: LockedRequestAminoMsg): LockedRequest;
    toAminoMsg(message: LockedRequest): LockedRequestAminoMsg;
    fromProtoMsg(message: LockedRequestProtoMsg): LockedRequest;
    toProto(message: LockedRequest): Uint8Array;
    toProtoMsg(message: LockedRequest): LockedRequestProtoMsg;
};
export declare const LockedResponse: {
    typeUrl: string;
    encode(message: LockedResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LockedResponse;
    fromPartial(object: Partial<LockedResponse>): LockedResponse;
    fromAmino(object: LockedResponseAmino): LockedResponse;
    toAmino(message: LockedResponse): LockedResponseAmino;
    fromAminoMsg(object: LockedResponseAminoMsg): LockedResponse;
    toAminoMsg(message: LockedResponse): LockedResponseAminoMsg;
    fromProtoMsg(message: LockedResponseProtoMsg): LockedResponse;
    toProto(message: LockedResponse): Uint8Array;
    toProtoMsg(message: LockedResponse): LockedResponseProtoMsg;
};
export declare const LockRewardReceiverRequest: {
    typeUrl: string;
    encode(message: LockRewardReceiverRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LockRewardReceiverRequest;
    fromPartial(object: Partial<LockRewardReceiverRequest>): LockRewardReceiverRequest;
    fromAmino(object: LockRewardReceiverRequestAmino): LockRewardReceiverRequest;
    toAmino(message: LockRewardReceiverRequest): LockRewardReceiverRequestAmino;
    fromAminoMsg(object: LockRewardReceiverRequestAminoMsg): LockRewardReceiverRequest;
    toAminoMsg(message: LockRewardReceiverRequest): LockRewardReceiverRequestAminoMsg;
    fromProtoMsg(message: LockRewardReceiverRequestProtoMsg): LockRewardReceiverRequest;
    toProto(message: LockRewardReceiverRequest): Uint8Array;
    toProtoMsg(message: LockRewardReceiverRequest): LockRewardReceiverRequestProtoMsg;
};
export declare const LockRewardReceiverResponse: {
    typeUrl: string;
    encode(message: LockRewardReceiverResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LockRewardReceiverResponse;
    fromPartial(object: Partial<LockRewardReceiverResponse>): LockRewardReceiverResponse;
    fromAmino(object: LockRewardReceiverResponseAmino): LockRewardReceiverResponse;
    toAmino(message: LockRewardReceiverResponse): LockRewardReceiverResponseAmino;
    fromAminoMsg(object: LockRewardReceiverResponseAminoMsg): LockRewardReceiverResponse;
    toAminoMsg(message: LockRewardReceiverResponse): LockRewardReceiverResponseAminoMsg;
    fromProtoMsg(message: LockRewardReceiverResponseProtoMsg): LockRewardReceiverResponse;
    toProto(message: LockRewardReceiverResponse): Uint8Array;
    toProtoMsg(message: LockRewardReceiverResponse): LockRewardReceiverResponseProtoMsg;
};
export declare const NextLockIDRequest: {
    typeUrl: string;
    encode(_: NextLockIDRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): NextLockIDRequest;
    fromPartial(_: Partial<NextLockIDRequest>): NextLockIDRequest;
    fromAmino(_: NextLockIDRequestAmino): NextLockIDRequest;
    toAmino(_: NextLockIDRequest): NextLockIDRequestAmino;
    fromAminoMsg(object: NextLockIDRequestAminoMsg): NextLockIDRequest;
    toAminoMsg(message: NextLockIDRequest): NextLockIDRequestAminoMsg;
    fromProtoMsg(message: NextLockIDRequestProtoMsg): NextLockIDRequest;
    toProto(message: NextLockIDRequest): Uint8Array;
    toProtoMsg(message: NextLockIDRequest): NextLockIDRequestProtoMsg;
};
export declare const NextLockIDResponse: {
    typeUrl: string;
    encode(message: NextLockIDResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): NextLockIDResponse;
    fromPartial(object: Partial<NextLockIDResponse>): NextLockIDResponse;
    fromAmino(object: NextLockIDResponseAmino): NextLockIDResponse;
    toAmino(message: NextLockIDResponse): NextLockIDResponseAmino;
    fromAminoMsg(object: NextLockIDResponseAminoMsg): NextLockIDResponse;
    toAminoMsg(message: NextLockIDResponse): NextLockIDResponseAminoMsg;
    fromProtoMsg(message: NextLockIDResponseProtoMsg): NextLockIDResponse;
    toProto(message: NextLockIDResponse): Uint8Array;
    toProtoMsg(message: NextLockIDResponse): NextLockIDResponseProtoMsg;
};
export declare const SyntheticLockupsByLockupIDRequest: {
    typeUrl: string;
    encode(message: SyntheticLockupsByLockupIDRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SyntheticLockupsByLockupIDRequest;
    fromPartial(object: Partial<SyntheticLockupsByLockupIDRequest>): SyntheticLockupsByLockupIDRequest;
    fromAmino(object: SyntheticLockupsByLockupIDRequestAmino): SyntheticLockupsByLockupIDRequest;
    toAmino(message: SyntheticLockupsByLockupIDRequest): SyntheticLockupsByLockupIDRequestAmino;
    fromAminoMsg(object: SyntheticLockupsByLockupIDRequestAminoMsg): SyntheticLockupsByLockupIDRequest;
    toAminoMsg(message: SyntheticLockupsByLockupIDRequest): SyntheticLockupsByLockupIDRequestAminoMsg;
    fromProtoMsg(message: SyntheticLockupsByLockupIDRequestProtoMsg): SyntheticLockupsByLockupIDRequest;
    toProto(message: SyntheticLockupsByLockupIDRequest): Uint8Array;
    toProtoMsg(message: SyntheticLockupsByLockupIDRequest): SyntheticLockupsByLockupIDRequestProtoMsg;
};
export declare const SyntheticLockupsByLockupIDResponse: {
    typeUrl: string;
    encode(message: SyntheticLockupsByLockupIDResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SyntheticLockupsByLockupIDResponse;
    fromPartial(object: Partial<SyntheticLockupsByLockupIDResponse>): SyntheticLockupsByLockupIDResponse;
    fromAmino(object: SyntheticLockupsByLockupIDResponseAmino): SyntheticLockupsByLockupIDResponse;
    toAmino(message: SyntheticLockupsByLockupIDResponse): SyntheticLockupsByLockupIDResponseAmino;
    fromAminoMsg(object: SyntheticLockupsByLockupIDResponseAminoMsg): SyntheticLockupsByLockupIDResponse;
    toAminoMsg(message: SyntheticLockupsByLockupIDResponse): SyntheticLockupsByLockupIDResponseAminoMsg;
    fromProtoMsg(message: SyntheticLockupsByLockupIDResponseProtoMsg): SyntheticLockupsByLockupIDResponse;
    toProto(message: SyntheticLockupsByLockupIDResponse): Uint8Array;
    toProtoMsg(message: SyntheticLockupsByLockupIDResponse): SyntheticLockupsByLockupIDResponseProtoMsg;
};
export declare const SyntheticLockupByLockupIDRequest: {
    typeUrl: string;
    encode(message: SyntheticLockupByLockupIDRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SyntheticLockupByLockupIDRequest;
    fromPartial(object: Partial<SyntheticLockupByLockupIDRequest>): SyntheticLockupByLockupIDRequest;
    fromAmino(object: SyntheticLockupByLockupIDRequestAmino): SyntheticLockupByLockupIDRequest;
    toAmino(message: SyntheticLockupByLockupIDRequest): SyntheticLockupByLockupIDRequestAmino;
    fromAminoMsg(object: SyntheticLockupByLockupIDRequestAminoMsg): SyntheticLockupByLockupIDRequest;
    toAminoMsg(message: SyntheticLockupByLockupIDRequest): SyntheticLockupByLockupIDRequestAminoMsg;
    fromProtoMsg(message: SyntheticLockupByLockupIDRequestProtoMsg): SyntheticLockupByLockupIDRequest;
    toProto(message: SyntheticLockupByLockupIDRequest): Uint8Array;
    toProtoMsg(message: SyntheticLockupByLockupIDRequest): SyntheticLockupByLockupIDRequestProtoMsg;
};
export declare const SyntheticLockupByLockupIDResponse: {
    typeUrl: string;
    encode(message: SyntheticLockupByLockupIDResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SyntheticLockupByLockupIDResponse;
    fromPartial(object: Partial<SyntheticLockupByLockupIDResponse>): SyntheticLockupByLockupIDResponse;
    fromAmino(object: SyntheticLockupByLockupIDResponseAmino): SyntheticLockupByLockupIDResponse;
    toAmino(message: SyntheticLockupByLockupIDResponse): SyntheticLockupByLockupIDResponseAmino;
    fromAminoMsg(object: SyntheticLockupByLockupIDResponseAminoMsg): SyntheticLockupByLockupIDResponse;
    toAminoMsg(message: SyntheticLockupByLockupIDResponse): SyntheticLockupByLockupIDResponseAminoMsg;
    fromProtoMsg(message: SyntheticLockupByLockupIDResponseProtoMsg): SyntheticLockupByLockupIDResponse;
    toProto(message: SyntheticLockupByLockupIDResponse): Uint8Array;
    toProtoMsg(message: SyntheticLockupByLockupIDResponse): SyntheticLockupByLockupIDResponseProtoMsg;
};
export declare const AccountLockedLongerDurationRequest: {
    typeUrl: string;
    encode(message: AccountLockedLongerDurationRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccountLockedLongerDurationRequest;
    fromPartial(object: Partial<AccountLockedLongerDurationRequest>): AccountLockedLongerDurationRequest;
    fromAmino(object: AccountLockedLongerDurationRequestAmino): AccountLockedLongerDurationRequest;
    toAmino(message: AccountLockedLongerDurationRequest): AccountLockedLongerDurationRequestAmino;
    fromAminoMsg(object: AccountLockedLongerDurationRequestAminoMsg): AccountLockedLongerDurationRequest;
    toAminoMsg(message: AccountLockedLongerDurationRequest): AccountLockedLongerDurationRequestAminoMsg;
    fromProtoMsg(message: AccountLockedLongerDurationRequestProtoMsg): AccountLockedLongerDurationRequest;
    toProto(message: AccountLockedLongerDurationRequest): Uint8Array;
    toProtoMsg(message: AccountLockedLongerDurationRequest): AccountLockedLongerDurationRequestProtoMsg;
};
export declare const AccountLockedLongerDurationResponse: {
    typeUrl: string;
    encode(message: AccountLockedLongerDurationResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccountLockedLongerDurationResponse;
    fromPartial(object: Partial<AccountLockedLongerDurationResponse>): AccountLockedLongerDurationResponse;
    fromAmino(object: AccountLockedLongerDurationResponseAmino): AccountLockedLongerDurationResponse;
    toAmino(message: AccountLockedLongerDurationResponse): AccountLockedLongerDurationResponseAmino;
    fromAminoMsg(object: AccountLockedLongerDurationResponseAminoMsg): AccountLockedLongerDurationResponse;
    toAminoMsg(message: AccountLockedLongerDurationResponse): AccountLockedLongerDurationResponseAminoMsg;
    fromProtoMsg(message: AccountLockedLongerDurationResponseProtoMsg): AccountLockedLongerDurationResponse;
    toProto(message: AccountLockedLongerDurationResponse): Uint8Array;
    toProtoMsg(message: AccountLockedLongerDurationResponse): AccountLockedLongerDurationResponseProtoMsg;
};
export declare const AccountLockedDurationRequest: {
    typeUrl: string;
    encode(message: AccountLockedDurationRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccountLockedDurationRequest;
    fromPartial(object: Partial<AccountLockedDurationRequest>): AccountLockedDurationRequest;
    fromAmino(object: AccountLockedDurationRequestAmino): AccountLockedDurationRequest;
    toAmino(message: AccountLockedDurationRequest): AccountLockedDurationRequestAmino;
    fromAminoMsg(object: AccountLockedDurationRequestAminoMsg): AccountLockedDurationRequest;
    toAminoMsg(message: AccountLockedDurationRequest): AccountLockedDurationRequestAminoMsg;
    fromProtoMsg(message: AccountLockedDurationRequestProtoMsg): AccountLockedDurationRequest;
    toProto(message: AccountLockedDurationRequest): Uint8Array;
    toProtoMsg(message: AccountLockedDurationRequest): AccountLockedDurationRequestProtoMsg;
};
export declare const AccountLockedDurationResponse: {
    typeUrl: string;
    encode(message: AccountLockedDurationResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccountLockedDurationResponse;
    fromPartial(object: Partial<AccountLockedDurationResponse>): AccountLockedDurationResponse;
    fromAmino(object: AccountLockedDurationResponseAmino): AccountLockedDurationResponse;
    toAmino(message: AccountLockedDurationResponse): AccountLockedDurationResponseAmino;
    fromAminoMsg(object: AccountLockedDurationResponseAminoMsg): AccountLockedDurationResponse;
    toAminoMsg(message: AccountLockedDurationResponse): AccountLockedDurationResponseAminoMsg;
    fromProtoMsg(message: AccountLockedDurationResponseProtoMsg): AccountLockedDurationResponse;
    toProto(message: AccountLockedDurationResponse): Uint8Array;
    toProtoMsg(message: AccountLockedDurationResponse): AccountLockedDurationResponseProtoMsg;
};
export declare const AccountLockedLongerDurationNotUnlockingOnlyRequest: {
    typeUrl: string;
    encode(message: AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccountLockedLongerDurationNotUnlockingOnlyRequest;
    fromPartial(object: Partial<AccountLockedLongerDurationNotUnlockingOnlyRequest>): AccountLockedLongerDurationNotUnlockingOnlyRequest;
    fromAmino(object: AccountLockedLongerDurationNotUnlockingOnlyRequestAmino): AccountLockedLongerDurationNotUnlockingOnlyRequest;
    toAmino(message: AccountLockedLongerDurationNotUnlockingOnlyRequest): AccountLockedLongerDurationNotUnlockingOnlyRequestAmino;
    fromAminoMsg(object: AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg): AccountLockedLongerDurationNotUnlockingOnlyRequest;
    toAminoMsg(message: AccountLockedLongerDurationNotUnlockingOnlyRequest): AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg;
    fromProtoMsg(message: AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg): AccountLockedLongerDurationNotUnlockingOnlyRequest;
    toProto(message: AccountLockedLongerDurationNotUnlockingOnlyRequest): Uint8Array;
    toProtoMsg(message: AccountLockedLongerDurationNotUnlockingOnlyRequest): AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg;
};
export declare const AccountLockedLongerDurationNotUnlockingOnlyResponse: {
    typeUrl: string;
    encode(message: AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccountLockedLongerDurationNotUnlockingOnlyResponse;
    fromPartial(object: Partial<AccountLockedLongerDurationNotUnlockingOnlyResponse>): AccountLockedLongerDurationNotUnlockingOnlyResponse;
    fromAmino(object: AccountLockedLongerDurationNotUnlockingOnlyResponseAmino): AccountLockedLongerDurationNotUnlockingOnlyResponse;
    toAmino(message: AccountLockedLongerDurationNotUnlockingOnlyResponse): AccountLockedLongerDurationNotUnlockingOnlyResponseAmino;
    fromAminoMsg(object: AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg): AccountLockedLongerDurationNotUnlockingOnlyResponse;
    toAminoMsg(message: AccountLockedLongerDurationNotUnlockingOnlyResponse): AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg;
    fromProtoMsg(message: AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg): AccountLockedLongerDurationNotUnlockingOnlyResponse;
    toProto(message: AccountLockedLongerDurationNotUnlockingOnlyResponse): Uint8Array;
    toProtoMsg(message: AccountLockedLongerDurationNotUnlockingOnlyResponse): AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg;
};
export declare const AccountLockedLongerDurationDenomRequest: {
    typeUrl: string;
    encode(message: AccountLockedLongerDurationDenomRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccountLockedLongerDurationDenomRequest;
    fromPartial(object: Partial<AccountLockedLongerDurationDenomRequest>): AccountLockedLongerDurationDenomRequest;
    fromAmino(object: AccountLockedLongerDurationDenomRequestAmino): AccountLockedLongerDurationDenomRequest;
    toAmino(message: AccountLockedLongerDurationDenomRequest): AccountLockedLongerDurationDenomRequestAmino;
    fromAminoMsg(object: AccountLockedLongerDurationDenomRequestAminoMsg): AccountLockedLongerDurationDenomRequest;
    toAminoMsg(message: AccountLockedLongerDurationDenomRequest): AccountLockedLongerDurationDenomRequestAminoMsg;
    fromProtoMsg(message: AccountLockedLongerDurationDenomRequestProtoMsg): AccountLockedLongerDurationDenomRequest;
    toProto(message: AccountLockedLongerDurationDenomRequest): Uint8Array;
    toProtoMsg(message: AccountLockedLongerDurationDenomRequest): AccountLockedLongerDurationDenomRequestProtoMsg;
};
export declare const AccountLockedLongerDurationDenomResponse: {
    typeUrl: string;
    encode(message: AccountLockedLongerDurationDenomResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccountLockedLongerDurationDenomResponse;
    fromPartial(object: Partial<AccountLockedLongerDurationDenomResponse>): AccountLockedLongerDurationDenomResponse;
    fromAmino(object: AccountLockedLongerDurationDenomResponseAmino): AccountLockedLongerDurationDenomResponse;
    toAmino(message: AccountLockedLongerDurationDenomResponse): AccountLockedLongerDurationDenomResponseAmino;
    fromAminoMsg(object: AccountLockedLongerDurationDenomResponseAminoMsg): AccountLockedLongerDurationDenomResponse;
    toAminoMsg(message: AccountLockedLongerDurationDenomResponse): AccountLockedLongerDurationDenomResponseAminoMsg;
    fromProtoMsg(message: AccountLockedLongerDurationDenomResponseProtoMsg): AccountLockedLongerDurationDenomResponse;
    toProto(message: AccountLockedLongerDurationDenomResponse): Uint8Array;
    toProtoMsg(message: AccountLockedLongerDurationDenomResponse): AccountLockedLongerDurationDenomResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
