import { AminoMsg } from "@cosmjs/amino";
import { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking, MsgExtendLockup, MsgForceUnlock, MsgSetRewardReceiverAddress } from "./tx";
export interface MsgLockTokensAminoType extends AminoMsg {
    type: "osmosis/lockup/lock-tokens";
    value: {
        owner: string;
        duration: {
            seconds: string;
            nanos: number;
        };
        coins: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface MsgBeginUnlockingAllAminoType extends AminoMsg {
    type: "osmosis/lockup/begin-unlock-tokens";
    value: {
        owner: string;
    };
}
export interface MsgBeginUnlockingAminoType extends AminoMsg {
    type: "osmosis/lockup/begin-unlock-period-lock";
    value: {
        owner: string;
        ID: string;
        coins: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface MsgExtendLockupAminoType extends AminoMsg {
    type: "osmosis/lockup/extend-lockup";
    value: {
        owner: string;
        ID: string;
        duration: {
            seconds: string;
            nanos: number;
        };
    };
}
export interface MsgForceUnlockAminoType extends AminoMsg {
    type: "osmosis/lockup/force-unlock";
    value: {
        owner: string;
        ID: string;
        coins: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface MsgSetRewardReceiverAddressAminoType extends AminoMsg {
    type: "osmosis/lockup/set-reward-receiver-address";
    value: {
        owner: string;
        lockID: string;
        reward_receiver: string;
    };
}
export declare const AminoConverter: {
    "/osmosis.lockup.MsgLockTokens": {
        aminoType: string;
        toAmino: ({ owner, duration, coins }: MsgLockTokens) => MsgLockTokensAminoType["value"];
        fromAmino: ({ owner, duration, coins }: MsgLockTokensAminoType["value"]) => MsgLockTokens;
    };
    "/osmosis.lockup.MsgBeginUnlockingAll": {
        aminoType: string;
        toAmino: ({ owner }: MsgBeginUnlockingAll) => MsgBeginUnlockingAllAminoType["value"];
        fromAmino: ({ owner }: MsgBeginUnlockingAllAminoType["value"]) => MsgBeginUnlockingAll;
    };
    "/osmosis.lockup.MsgBeginUnlocking": {
        aminoType: string;
        toAmino: ({ owner, ID, coins }: MsgBeginUnlocking) => MsgBeginUnlockingAminoType["value"];
        fromAmino: ({ owner, ID, coins }: MsgBeginUnlockingAminoType["value"]) => MsgBeginUnlocking;
    };
    "/osmosis.lockup.MsgExtendLockup": {
        aminoType: string;
        toAmino: ({ owner, ID, duration }: MsgExtendLockup) => MsgExtendLockupAminoType["value"];
        fromAmino: ({ owner, ID, duration }: MsgExtendLockupAminoType["value"]) => MsgExtendLockup;
    };
    "/osmosis.lockup.MsgForceUnlock": {
        aminoType: string;
        toAmino: ({ owner, ID, coins }: MsgForceUnlock) => MsgForceUnlockAminoType["value"];
        fromAmino: ({ owner, ID, coins }: MsgForceUnlockAminoType["value"]) => MsgForceUnlock;
    };
    "/osmosis.lockup.MsgSetRewardReceiverAddress": {
        aminoType: string;
        toAmino: ({ owner, lockID, rewardReceiver }: MsgSetRewardReceiverAddress) => MsgSetRewardReceiverAddressAminoType["value"];
        fromAmino: ({ owner, lockID, reward_receiver }: MsgSetRewardReceiverAddressAminoType["value"]) => MsgSetRewardReceiverAddress;
    };
};
