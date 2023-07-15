import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
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
export const AminoConverter = {
  "/osmosis.superfluid.MsgSuperfluidDelegate": {
    aminoType: "osmosis/superfluid-delegate",
    toAmino: ({
      sender,
      lockId,
      valAddr
    }: MsgSuperfluidDelegate): MsgSuperfluidDelegateAminoType["value"] => {
      return {
        sender,
        lock_id: lockId.toString(),
        val_addr: valAddr
      };
    },
    fromAmino: ({
      sender,
      lock_id,
      val_addr
    }: MsgSuperfluidDelegateAminoType["value"]): MsgSuperfluidDelegate => {
      return {
        sender,
        lockId: Long.fromString(lock_id),
        valAddr: val_addr
      };
    }
  },
  "/osmosis.superfluid.MsgSuperfluidUndelegate": {
    aminoType: "osmosis/superfluid-undelegate",
    toAmino: ({
      sender,
      lockId
    }: MsgSuperfluidUndelegate): MsgSuperfluidUndelegateAminoType["value"] => {
      return {
        sender,
        lock_id: lockId.toString()
      };
    },
    fromAmino: ({
      sender,
      lock_id
    }: MsgSuperfluidUndelegateAminoType["value"]): MsgSuperfluidUndelegate => {
      return {
        sender,
        lockId: Long.fromString(lock_id)
      };
    }
  },
  "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
    aminoType: "osmosis/superfluid-unbond-lock",
    toAmino: ({
      sender,
      lockId
    }: MsgSuperfluidUnbondLock): MsgSuperfluidUnbondLockAminoType["value"] => {
      return {
        sender,
        lock_id: lockId.toString()
      };
    },
    fromAmino: ({
      sender,
      lock_id
    }: MsgSuperfluidUnbondLockAminoType["value"]): MsgSuperfluidUnbondLock => {
      return {
        sender,
        lockId: Long.fromString(lock_id)
      };
    }
  },
  "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock": {
    aminoType: "osmosis/superfluid-undelegate-and-unbond-lock",
    toAmino: ({
      sender,
      lockId,
      coin
    }: MsgSuperfluidUndelegateAndUnbondLock): MsgSuperfluidUndelegateAndUnbondLockAminoType["value"] => {
      return {
        sender,
        lock_id: lockId.toString(),
        coin: {
          denom: coin.denom,
          amount: Long.fromValue(coin.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      lock_id,
      coin
    }: MsgSuperfluidUndelegateAndUnbondLockAminoType["value"]): MsgSuperfluidUndelegateAndUnbondLock => {
      return {
        sender,
        lockId: Long.fromString(lock_id),
        coin: {
          denom: coin.denom,
          amount: coin.amount
        }
      };
    }
  },
  "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
    aminoType: "osmosis/lock-and-superfluid-delegate",
    toAmino: ({
      sender,
      coins,
      valAddr
    }: MsgLockAndSuperfluidDelegate): MsgLockAndSuperfluidDelegateAminoType["value"] => {
      return {
        sender,
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        val_addr: valAddr
      };
    },
    fromAmino: ({
      sender,
      coins,
      val_addr
    }: MsgLockAndSuperfluidDelegateAminoType["value"]): MsgLockAndSuperfluidDelegate => {
      return {
        sender,
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        valAddr: val_addr
      };
    }
  },
  "/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate": {
    aminoType: "osmosis/create-full-range-position-and-superfluid-delegate",
    toAmino: ({
      sender,
      coins,
      valAddr,
      poolId
    }: MsgCreateFullRangePositionAndSuperfluidDelegate): MsgCreateFullRangePositionAndSuperfluidDelegateAminoType["value"] => {
      return {
        sender,
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        val_addr: valAddr,
        pool_id: poolId.toString()
      };
    },
    fromAmino: ({
      sender,
      coins,
      val_addr,
      pool_id
    }: MsgCreateFullRangePositionAndSuperfluidDelegateAminoType["value"]): MsgCreateFullRangePositionAndSuperfluidDelegate => {
      return {
        sender,
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        valAddr: val_addr,
        poolId: Long.fromString(pool_id)
      };
    }
  },
  "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
    aminoType: "osmosis/unpool-whitelisted-pool",
    toAmino: ({
      sender,
      poolId
    }: MsgUnPoolWhitelistedPool): MsgUnPoolWhitelistedPoolAminoType["value"] => {
      return {
        sender,
        pool_id: poolId.toString()
      };
    },
    fromAmino: ({
      sender,
      pool_id
    }: MsgUnPoolWhitelistedPoolAminoType["value"]): MsgUnPoolWhitelistedPool => {
      return {
        sender,
        poolId: Long.fromString(pool_id)
      };
    }
  },
  "/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition": {
    aminoType: "osmosis/unlock-and-migrate-shares-to-full-range-concentrated-position",
    toAmino: ({
      sender,
      lockId,
      sharesToMigrate,
      tokenOutMins
    }: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAminoType["value"] => {
      return {
        sender,
        lock_id: lockId.toString(),
        shares_to_migrate: {
          denom: sharesToMigrate.denom,
          amount: Long.fromValue(sharesToMigrate.amount).toString()
        },
        token_out_mins: tokenOutMins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      sender,
      lock_id,
      shares_to_migrate,
      token_out_mins
    }: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAminoType["value"]): MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition => {
      return {
        sender,
        lockId: Long.fromString(lock_id),
        sharesToMigrate: {
          denom: shares_to_migrate.denom,
          amount: shares_to_migrate.amount
        },
        tokenOutMins: token_out_mins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition": {
    aminoType: "osmosis/add-to-concentrated-liquidity-superfluid-position",
    toAmino: ({
      positionId,
      sender,
      tokenDesired0,
      tokenDesired1
    }: MsgAddToConcentratedLiquiditySuperfluidPosition): MsgAddToConcentratedLiquiditySuperfluidPositionAminoType["value"] => {
      return {
        position_id: positionId.toString(),
        sender,
        token_desired0: {
          denom: tokenDesired0.denom,
          amount: Long.fromValue(tokenDesired0.amount).toString()
        },
        token_desired1: {
          denom: tokenDesired1.denom,
          amount: Long.fromValue(tokenDesired1.amount).toString()
        }
      };
    },
    fromAmino: ({
      position_id,
      sender,
      token_desired0,
      token_desired1
    }: MsgAddToConcentratedLiquiditySuperfluidPositionAminoType["value"]): MsgAddToConcentratedLiquiditySuperfluidPosition => {
      return {
        positionId: Long.fromString(position_id),
        sender,
        tokenDesired0: {
          denom: token_desired0.denom,
          amount: token_desired0.amount
        },
        tokenDesired1: {
          denom: token_desired1.denom,
          amount: token_desired1.amount
        }
      };
    }
  }
};