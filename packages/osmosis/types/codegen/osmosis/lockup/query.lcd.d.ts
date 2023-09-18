import { LCDClient } from "@cosmology/lcd";
import { ModuleBalanceRequest, ModuleBalanceResponseSDKType, ModuleLockedAmountRequest, ModuleLockedAmountResponseSDKType, AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponseSDKType, AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponseSDKType, AccountLockedCoinsRequest, AccountLockedCoinsResponseSDKType, AccountLockedPastTimeRequest, AccountLockedPastTimeResponseSDKType, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponseSDKType, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponseSDKType, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponseSDKType, LockedDenomRequest, LockedDenomResponseSDKType, LockedRequest, LockedResponseSDKType, LockRewardReceiverRequest, LockRewardReceiverResponseSDKType, NextLockIDRequest, NextLockIDResponseSDKType, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponseSDKType, SyntheticLockupByLockupIDRequest, SyntheticLockupByLockupIDResponseSDKType, AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponseSDKType, AccountLockedDurationRequest, AccountLockedDurationResponseSDKType, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    moduleBalance(_params?: ModuleBalanceRequest): Promise<ModuleBalanceResponseSDKType>;
    moduleLockedAmount(_params?: ModuleLockedAmountRequest): Promise<ModuleLockedAmountResponseSDKType>;
    accountUnlockableCoins(params: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponseSDKType>;
    accountUnlockingCoins(params: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponseSDKType>;
    accountLockedCoins(params: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponseSDKType>;
    accountLockedPastTime(params: AccountLockedPastTimeRequest): Promise<AccountLockedPastTimeResponseSDKType>;
    accountLockedPastTimeNotUnlockingOnly(params: AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<AccountLockedPastTimeNotUnlockingOnlyResponseSDKType>;
    accountUnlockedBeforeTime(params: AccountUnlockedBeforeTimeRequest): Promise<AccountUnlockedBeforeTimeResponseSDKType>;
    accountLockedPastTimeDenom(params: AccountLockedPastTimeDenomRequest): Promise<AccountLockedPastTimeDenomResponseSDKType>;
    lockedDenom(params: LockedDenomRequest): Promise<LockedDenomResponseSDKType>;
    lockedByID(params: LockedRequest): Promise<LockedResponseSDKType>;
    lockRewardReceiver(params: LockRewardReceiverRequest): Promise<LockRewardReceiverResponseSDKType>;
    nextLockID(_params?: NextLockIDRequest): Promise<NextLockIDResponseSDKType>;
    syntheticLockupsByLockupID(params: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponseSDKType>;
    syntheticLockupByLockupID(params: SyntheticLockupByLockupIDRequest): Promise<SyntheticLockupByLockupIDResponseSDKType>;
    accountLockedLongerDuration(params: AccountLockedLongerDurationRequest): Promise<AccountLockedLongerDurationResponseSDKType>;
    accountLockedDuration(params: AccountLockedDurationRequest): Promise<AccountLockedDurationResponseSDKType>;
    accountLockedLongerDurationNotUnlockingOnly(params: AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType>;
    accountLockedLongerDurationDenom(params: AccountLockedLongerDurationDenomRequest): Promise<AccountLockedLongerDurationDenomResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
}
