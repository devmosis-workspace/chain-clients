import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType } from "./lock";
import { Long } from "../../helpers";
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
export declare const MsgLockTokens: {
    encode(message: MsgLockTokens, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgLockTokens;
    fromPartial(object: Partial<MsgLockTokens>): MsgLockTokens;
};
export declare const MsgLockTokensResponse: {
    encode(message: MsgLockTokensResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgLockTokensResponse;
    fromPartial(object: Partial<MsgLockTokensResponse>): MsgLockTokensResponse;
};
export declare const MsgBeginUnlockingAll: {
    encode(message: MsgBeginUnlockingAll, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBeginUnlockingAll;
    fromPartial(object: Partial<MsgBeginUnlockingAll>): MsgBeginUnlockingAll;
};
export declare const MsgBeginUnlockingAllResponse: {
    encode(message: MsgBeginUnlockingAllResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBeginUnlockingAllResponse;
    fromPartial(object: Partial<MsgBeginUnlockingAllResponse>): MsgBeginUnlockingAllResponse;
};
export declare const MsgBeginUnlocking: {
    encode(message: MsgBeginUnlocking, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBeginUnlocking;
    fromPartial(object: Partial<MsgBeginUnlocking>): MsgBeginUnlocking;
};
export declare const MsgBeginUnlockingResponse: {
    encode(message: MsgBeginUnlockingResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBeginUnlockingResponse;
    fromPartial(object: Partial<MsgBeginUnlockingResponse>): MsgBeginUnlockingResponse;
};
export declare const MsgExtendLockup: {
    encode(message: MsgExtendLockup, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgExtendLockup;
    fromPartial(object: Partial<MsgExtendLockup>): MsgExtendLockup;
};
export declare const MsgExtendLockupResponse: {
    encode(message: MsgExtendLockupResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgExtendLockupResponse;
    fromPartial(object: Partial<MsgExtendLockupResponse>): MsgExtendLockupResponse;
};
export declare const MsgForceUnlock: {
    encode(message: MsgForceUnlock, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgForceUnlock;
    fromPartial(object: Partial<MsgForceUnlock>): MsgForceUnlock;
};
export declare const MsgForceUnlockResponse: {
    encode(message: MsgForceUnlockResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgForceUnlockResponse;
    fromPartial(object: Partial<MsgForceUnlockResponse>): MsgForceUnlockResponse;
};
export declare const MsgSetRewardReceiverAddress: {
    encode(message: MsgSetRewardReceiverAddress, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSetRewardReceiverAddress;
    fromPartial(object: Partial<MsgSetRewardReceiverAddress>): MsgSetRewardReceiverAddress;
};
export declare const MsgSetRewardReceiverAddressResponse: {
    encode(message: MsgSetRewardReceiverAddressResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSetRewardReceiverAddressResponse;
    fromPartial(object: Partial<MsgSetRewardReceiverAddressResponse>): MsgSetRewardReceiverAddressResponse;
};
