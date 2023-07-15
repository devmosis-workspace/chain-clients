import { AminoMsg } from "@cosmjs/amino";
import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgSuperfluidUndelegateAndUnbondLock, MsgLockAndSuperfluidDelegate, MsgCreateFullRangePositionAndSuperfluidDelegate, MsgUnPoolWhitelistedPool, MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition, MsgAddToConcentratedLiquiditySuperfluidPosition } from "./tx";
export interface MsgSuperfluidDelegateAminoType extends AminoMsg {
    type: "osmosis/superfluid-delegate";
    value: {
        sender: string;
        lock_id: string;
        val_addr: string;
    };
}
export interface MsgSuperfluidUndelegateAminoType extends AminoMsg {
    type: "osmosis/superfluid-undelegate";
    value: {
        sender: string;
        lock_id: string;
    };
}
export interface MsgSuperfluidUnbondLockAminoType extends AminoMsg {
    type: "osmosis/superfluid-unbond-lock";
    value: {
        sender: string;
        lock_id: string;
    };
}
export interface MsgSuperfluidUndelegateAndUnbondLockAminoType extends AminoMsg {
    type: "osmosis/superfluid-undelegate-and-unbond-lock";
    value: {
        sender: string;
        lock_id: string;
        coin: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgLockAndSuperfluidDelegateAminoType extends AminoMsg {
    type: "osmosis/lock-and-superfluid-delegate";
    value: {
        sender: string;
        coins: {
            denom: string;
            amount: string;
        }[];
        val_addr: string;
    };
}
export interface MsgCreateFullRangePositionAndSuperfluidDelegateAminoType extends AminoMsg {
    type: "osmosis/create-full-range-position-and-superfluid-delegate";
    value: {
        sender: string;
        coins: {
            denom: string;
            amount: string;
        }[];
        val_addr: string;
        pool_id: string;
    };
}
export interface MsgUnPoolWhitelistedPoolAminoType extends AminoMsg {
    type: "osmosis/unpool-whitelisted-pool";
    value: {
        sender: string;
        pool_id: string;
    };
}
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAminoType extends AminoMsg {
    type: "osmosis/unlock-and-migrate-shares-to-full-range-concentrated-position";
    value: {
        sender: string;
        lock_id: string;
        shares_to_migrate: {
            denom: string;
            amount: string;
        };
        token_out_mins: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface MsgAddToConcentratedLiquiditySuperfluidPositionAminoType extends AminoMsg {
    type: "osmosis/add-to-concentrated-liquidity-superfluid-position";
    value: {
        position_id: string;
        sender: string;
        token_desired0: {
            denom: string;
            amount: string;
        };
        token_desired1: {
            denom: string;
            amount: string;
        };
    };
}
export declare const AminoConverter: {
    "/osmosis.superfluid.MsgSuperfluidDelegate": {
        aminoType: string;
        toAmino: ({ sender, lockId, valAddr }: MsgSuperfluidDelegate) => MsgSuperfluidDelegateAminoType["value"];
        fromAmino: ({ sender, lock_id, val_addr }: MsgSuperfluidDelegateAminoType["value"]) => MsgSuperfluidDelegate;
    };
    "/osmosis.superfluid.MsgSuperfluidUndelegate": {
        aminoType: string;
        toAmino: ({ sender, lockId }: MsgSuperfluidUndelegate) => MsgSuperfluidUndelegateAminoType["value"];
        fromAmino: ({ sender, lock_id }: MsgSuperfluidUndelegateAminoType["value"]) => MsgSuperfluidUndelegate;
    };
    "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
        aminoType: string;
        toAmino: ({ sender, lockId }: MsgSuperfluidUnbondLock) => MsgSuperfluidUnbondLockAminoType["value"];
        fromAmino: ({ sender, lock_id }: MsgSuperfluidUnbondLockAminoType["value"]) => MsgSuperfluidUnbondLock;
    };
    "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock": {
        aminoType: string;
        toAmino: ({ sender, lockId, coin }: MsgSuperfluidUndelegateAndUnbondLock) => MsgSuperfluidUndelegateAndUnbondLockAminoType["value"];
        fromAmino: ({ sender, lock_id, coin }: MsgSuperfluidUndelegateAndUnbondLockAminoType["value"]) => MsgSuperfluidUndelegateAndUnbondLock;
    };
    "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
        aminoType: string;
        toAmino: ({ sender, coins, valAddr }: MsgLockAndSuperfluidDelegate) => MsgLockAndSuperfluidDelegateAminoType["value"];
        fromAmino: ({ sender, coins, val_addr }: MsgLockAndSuperfluidDelegateAminoType["value"]) => MsgLockAndSuperfluidDelegate;
    };
    "/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate": {
        aminoType: string;
        toAmino: ({ sender, coins, valAddr, poolId }: MsgCreateFullRangePositionAndSuperfluidDelegate) => MsgCreateFullRangePositionAndSuperfluidDelegateAminoType["value"];
        fromAmino: ({ sender, coins, val_addr, pool_id }: MsgCreateFullRangePositionAndSuperfluidDelegateAminoType["value"]) => MsgCreateFullRangePositionAndSuperfluidDelegate;
    };
    "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
        aminoType: string;
        toAmino: ({ sender, poolId }: MsgUnPoolWhitelistedPool) => MsgUnPoolWhitelistedPoolAminoType["value"];
        fromAmino: ({ sender, pool_id }: MsgUnPoolWhitelistedPoolAminoType["value"]) => MsgUnPoolWhitelistedPool;
    };
    "/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition": {
        aminoType: string;
        toAmino: ({ sender, lockId, sharesToMigrate, tokenOutMins }: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition) => MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAminoType["value"];
        fromAmino: ({ sender, lock_id, shares_to_migrate, token_out_mins }: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAminoType["value"]) => MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
    };
    "/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition": {
        aminoType: string;
        toAmino: ({ positionId, sender, tokenDesired0, tokenDesired1 }: MsgAddToConcentratedLiquiditySuperfluidPosition) => MsgAddToConcentratedLiquiditySuperfluidPositionAminoType["value"];
        fromAmino: ({ position_id, sender, token_desired0, token_desired1 }: MsgAddToConcentratedLiquiditySuperfluidPositionAminoType["value"]) => MsgAddToConcentratedLiquiditySuperfluidPosition;
    };
};
