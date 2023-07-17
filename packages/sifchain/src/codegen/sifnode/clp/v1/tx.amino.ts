import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgRemoveLiquidity, MsgRemoveLiquidityUnits, MsgCreatePool, MsgAddLiquidity, MsgSwap, MsgDecommissionPool, MsgUnlockLiquidityRequest, MsgUpdateRewardsParamsRequest, MsgAddRewardPeriodRequest, MsgModifyPmtpRates, MsgUpdatePmtpParams, MsgUpdateStakingRewardParams, MsgSetSymmetryThreshold, MsgCancelUnlock, MsgUpdateLiquidityProtectionParams, MsgModifyLiquidityProtectionRates, MsgAddProviderDistributionPeriodRequest, MsgUpdateSwapFeeParamsRequest } from "./tx";
export interface MsgRemoveLiquidityAminoType extends AminoMsg {
  type: "/sifnode.clp.v1.MsgRemoveLiquidity";
  value: {
    signer: string;
    external_asset: {
      symbol: string;
    };
    w_basis_points: string;
    asymmetry: string;
  };
}
export interface MsgRemoveLiquidityUnitsAminoType extends AminoMsg {
  type: "/sifnode.clp.v1.MsgRemoveLiquidityUnits";
  value: {
    signer: string;
    external_asset: {
      symbol: string;
    };
    withdraw_units: string;
  };
}
export interface MsgCreatePoolAminoType extends AminoMsg {
  type: "/sifnode.clp.v1.MsgCreatePool";
  value: {
    signer: string;
    external_asset: {
      symbol: string;
    };
    native_asset_amount: string;
    external_asset_amount: string;
  };
}
export interface MsgAddLiquidityAminoType extends AminoMsg {
  type: "/sifnode.clp.v1.MsgAddLiquidity";
  value: {
    signer: string;
    external_asset: {
      symbol: string;
    };
    native_asset_amount: string;
    external_asset_amount: string;
  };
}
export interface MsgSwapAminoType extends AminoMsg {
  type: "/sifnode.clp.v1.MsgSwap";
  value: {
    signer: string;
    sent_asset: {
      symbol: string;
    };
    received_asset: {
      symbol: string;
    };
    sent_amount: string;
    min_receiving_amount: string;
  };
}
export interface MsgDecommissionPoolAminoType extends AminoMsg {
  type: "/sifnode.clp.v1.MsgDecommissionPool";
  value: {
    signer: string;
    symbol: string;
  };
}
export interface MsgUnlockLiquidityRequestAminoType extends AminoMsg {
  type: "/sifnode.clp.v1.MsgUnlockLiquidityRequest";
  value: {
    signer: string;
    external_asset: {
      symbol: string;
    };
    units: string;
  };
}
export interface MsgUpdateRewardsParamsRequestAminoType extends AminoMsg {
  type: "/sifnode.clp.v1.MsgUpdateRewardsParamsRequest";
  value: {
    signer: string;
    liquidity_removal_lock_period: string;
    liquidity_removal_cancel_period: string;
  };
}
export interface MsgAddRewardPeriodRequestAminoType extends AminoMsg {
  type: "/sifnode.clp.v1.MsgAddRewardPeriodRequest";
  value: {
    signer: string;
    reward_periods: {
      reward_period_id: string;
      reward_period_start_block: string;
      reward_period_end_block: string;
      reward_period_allocation: string;
      reward_period_pool_multipliers: {
        pool_multiplier_asset: string;
        multiplier: string;
      }[];
      reward_period_default_multiplier: string;
      reward_period_distribute: boolean;
      reward_period_mod: string;
    }[];
  };
}
export interface MsgModifyPmtpRatesAminoType extends AminoMsg {
  type: "/sifnode.clp.v1.MsgModifyPmtpRates";
  value: {
    signer: string;
    block_rate: string;
    running_rate: string;
    end_policy: boolean;
  };
}
export interface MsgUpdatePmtpParamsAminoType extends AminoMsg {
  type: "/sifnode.clp.v1.MsgUpdatePmtpParams";
  value: {
    signer: string;
    pmtp_period_governance_rate: string;
    pmtp_period_epoch_length: string;
    pmtp_period_start_block: string;
    pmtp_period_end_block: string;
  };
}
export interface MsgUpdateStakingRewardParamsAminoType extends AminoMsg {
  type: "/sifnode.clp.v1.MsgUpdateStakingRewardParams";
  value: {
    signer: string;
    minter: string;
    params: string;
  };
}
export interface MsgSetSymmetryThresholdAminoType extends AminoMsg {
  type: "/sifnode.clp.v1.MsgSetSymmetryThreshold";
  value: {
    signer: string;
    threshold: string;
    ratio: string;
  };
}
export interface MsgCancelUnlockAminoType extends AminoMsg {
  type: "/sifnode.clp.v1.MsgCancelUnlock";
  value: {
    signer: string;
    external_asset: {
      symbol: string;
    };
    units: string;
  };
}
export interface MsgUpdateLiquidityProtectionParamsAminoType extends AminoMsg {
  type: "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParams";
  value: {
    signer: string;
    max_rowan_liquidity_threshold: string;
    max_rowan_liquidity_threshold_asset: string;
    epoch_length: string;
    is_active: boolean;
  };
}
export interface MsgModifyLiquidityProtectionRatesAminoType extends AminoMsg {
  type: "/sifnode.clp.v1.MsgModifyLiquidityProtectionRates";
  value: {
    signer: string;
    current_rowan_liquidity_threshold: string;
  };
}
export interface MsgAddProviderDistributionPeriodRequestAminoType extends AminoMsg {
  type: "/sifnode.clp.v1.MsgAddProviderDistributionPeriodRequest";
  value: {
    signer: string;
    distribution_periods: {
      distribution_period_block_rate: string;
      distribution_period_start_block: string;
      distribution_period_end_block: string;
      distribution_period_mod: string;
    }[];
  };
}
export interface MsgUpdateSwapFeeParamsRequestAminoType extends AminoMsg {
  type: "/sifnode.clp.v1.MsgUpdateSwapFeeParamsRequest";
  value: {
    signer: string;
    default_swap_fee_rate: string;
    token_params: {
      asset: string;
      swap_fee_rate: string;
    }[];
  };
}
export const AminoConverter = {
  "/sifnode.clp.v1.MsgRemoveLiquidity": {
    aminoType: "/sifnode.clp.v1.MsgRemoveLiquidity",
    toAmino: ({
      signer,
      externalAsset,
      wBasisPoints,
      asymmetry
    }: MsgRemoveLiquidity): MsgRemoveLiquidityAminoType["value"] => {
      return {
        signer,
        external_asset: {
          symbol: externalAsset.symbol
        },
        w_basis_points: wBasisPoints,
        asymmetry
      };
    },
    fromAmino: ({
      signer,
      external_asset,
      w_basis_points,
      asymmetry
    }: MsgRemoveLiquidityAminoType["value"]): MsgRemoveLiquidity => {
      return {
        signer,
        externalAsset: {
          symbol: external_asset.symbol
        },
        wBasisPoints: w_basis_points,
        asymmetry
      };
    }
  },
  "/sifnode.clp.v1.MsgRemoveLiquidityUnits": {
    aminoType: "/sifnode.clp.v1.MsgRemoveLiquidityUnits",
    toAmino: ({
      signer,
      externalAsset,
      withdrawUnits
    }: MsgRemoveLiquidityUnits): MsgRemoveLiquidityUnitsAminoType["value"] => {
      return {
        signer,
        external_asset: {
          symbol: externalAsset.symbol
        },
        withdraw_units: withdrawUnits
      };
    },
    fromAmino: ({
      signer,
      external_asset,
      withdraw_units
    }: MsgRemoveLiquidityUnitsAminoType["value"]): MsgRemoveLiquidityUnits => {
      return {
        signer,
        externalAsset: {
          symbol: external_asset.symbol
        },
        withdrawUnits: withdraw_units
      };
    }
  },
  "/sifnode.clp.v1.MsgCreatePool": {
    aminoType: "/sifnode.clp.v1.MsgCreatePool",
    toAmino: ({
      signer,
      externalAsset,
      nativeAssetAmount,
      externalAssetAmount
    }: MsgCreatePool): MsgCreatePoolAminoType["value"] => {
      return {
        signer,
        external_asset: {
          symbol: externalAsset.symbol
        },
        native_asset_amount: nativeAssetAmount,
        external_asset_amount: externalAssetAmount
      };
    },
    fromAmino: ({
      signer,
      external_asset,
      native_asset_amount,
      external_asset_amount
    }: MsgCreatePoolAminoType["value"]): MsgCreatePool => {
      return {
        signer,
        externalAsset: {
          symbol: external_asset.symbol
        },
        nativeAssetAmount: native_asset_amount,
        externalAssetAmount: external_asset_amount
      };
    }
  },
  "/sifnode.clp.v1.MsgAddLiquidity": {
    aminoType: "/sifnode.clp.v1.MsgAddLiquidity",
    toAmino: ({
      signer,
      externalAsset,
      nativeAssetAmount,
      externalAssetAmount
    }: MsgAddLiquidity): MsgAddLiquidityAminoType["value"] => {
      return {
        signer,
        external_asset: {
          symbol: externalAsset.symbol
        },
        native_asset_amount: nativeAssetAmount,
        external_asset_amount: externalAssetAmount
      };
    },
    fromAmino: ({
      signer,
      external_asset,
      native_asset_amount,
      external_asset_amount
    }: MsgAddLiquidityAminoType["value"]): MsgAddLiquidity => {
      return {
        signer,
        externalAsset: {
          symbol: external_asset.symbol
        },
        nativeAssetAmount: native_asset_amount,
        externalAssetAmount: external_asset_amount
      };
    }
  },
  "/sifnode.clp.v1.MsgSwap": {
    aminoType: "/sifnode.clp.v1.MsgSwap",
    toAmino: ({
      signer,
      sentAsset,
      receivedAsset,
      sentAmount,
      minReceivingAmount
    }: MsgSwap): MsgSwapAminoType["value"] => {
      return {
        signer,
        sent_asset: {
          symbol: sentAsset.symbol
        },
        received_asset: {
          symbol: receivedAsset.symbol
        },
        sent_amount: sentAmount,
        min_receiving_amount: minReceivingAmount
      };
    },
    fromAmino: ({
      signer,
      sent_asset,
      received_asset,
      sent_amount,
      min_receiving_amount
    }: MsgSwapAminoType["value"]): MsgSwap => {
      return {
        signer,
        sentAsset: {
          symbol: sent_asset.symbol
        },
        receivedAsset: {
          symbol: received_asset.symbol
        },
        sentAmount: sent_amount,
        minReceivingAmount: min_receiving_amount
      };
    }
  },
  "/sifnode.clp.v1.MsgDecommissionPool": {
    aminoType: "/sifnode.clp.v1.MsgDecommissionPool",
    toAmino: ({
      signer,
      symbol
    }: MsgDecommissionPool): MsgDecommissionPoolAminoType["value"] => {
      return {
        signer,
        symbol
      };
    },
    fromAmino: ({
      signer,
      symbol
    }: MsgDecommissionPoolAminoType["value"]): MsgDecommissionPool => {
      return {
        signer,
        symbol
      };
    }
  },
  "/sifnode.clp.v1.MsgUnlockLiquidityRequest": {
    aminoType: "/sifnode.clp.v1.MsgUnlockLiquidityRequest",
    toAmino: ({
      signer,
      externalAsset,
      units
    }: MsgUnlockLiquidityRequest): MsgUnlockLiquidityRequestAminoType["value"] => {
      return {
        signer,
        external_asset: {
          symbol: externalAsset.symbol
        },
        units
      };
    },
    fromAmino: ({
      signer,
      external_asset,
      units
    }: MsgUnlockLiquidityRequestAminoType["value"]): MsgUnlockLiquidityRequest => {
      return {
        signer,
        externalAsset: {
          symbol: external_asset.symbol
        },
        units
      };
    }
  },
  "/sifnode.clp.v1.MsgUpdateRewardsParamsRequest": {
    aminoType: "/sifnode.clp.v1.MsgUpdateRewardsParamsRequest",
    toAmino: ({
      signer,
      liquidityRemovalLockPeriod,
      liquidityRemovalCancelPeriod
    }: MsgUpdateRewardsParamsRequest): MsgUpdateRewardsParamsRequestAminoType["value"] => {
      return {
        signer,
        liquidity_removal_lock_period: liquidityRemovalLockPeriod.toString(),
        liquidity_removal_cancel_period: liquidityRemovalCancelPeriod.toString()
      };
    },
    fromAmino: ({
      signer,
      liquidity_removal_lock_period,
      liquidity_removal_cancel_period
    }: MsgUpdateRewardsParamsRequestAminoType["value"]): MsgUpdateRewardsParamsRequest => {
      return {
        signer,
        liquidityRemovalLockPeriod: Long.fromString(liquidity_removal_lock_period),
        liquidityRemovalCancelPeriod: Long.fromString(liquidity_removal_cancel_period)
      };
    }
  },
  "/sifnode.clp.v1.MsgAddRewardPeriodRequest": {
    aminoType: "/sifnode.clp.v1.MsgAddRewardPeriodRequest",
    toAmino: ({
      signer,
      rewardPeriods
    }: MsgAddRewardPeriodRequest): MsgAddRewardPeriodRequestAminoType["value"] => {
      return {
        signer,
        reward_periods: rewardPeriods.map(el0 => ({
          reward_period_id: el0.rewardPeriodId,
          reward_period_start_block: el0.rewardPeriodStartBlock.toString(),
          reward_period_end_block: el0.rewardPeriodEndBlock.toString(),
          reward_period_allocation: el0.rewardPeriodAllocation,
          reward_period_pool_multipliers: el0.rewardPeriodPoolMultipliers.map(el1 => ({
            pool_multiplier_asset: el1.poolMultiplierAsset,
            multiplier: el1.multiplier
          })),
          reward_period_default_multiplier: el0.rewardPeriodDefaultMultiplier,
          reward_period_distribute: el0.rewardPeriodDistribute,
          reward_period_mod: el0.rewardPeriodMod.toString()
        }))
      };
    },
    fromAmino: ({
      signer,
      reward_periods
    }: MsgAddRewardPeriodRequestAminoType["value"]): MsgAddRewardPeriodRequest => {
      return {
        signer,
        rewardPeriods: reward_periods.map(el0 => ({
          rewardPeriodId: el0.reward_period_id,
          rewardPeriodStartBlock: Long.fromString(el0.reward_period_start_block),
          rewardPeriodEndBlock: Long.fromString(el0.reward_period_end_block),
          rewardPeriodAllocation: el0.reward_period_allocation,
          rewardPeriodPoolMultipliers: el0.reward_period_pool_multipliers.map(el1 => ({
            poolMultiplierAsset: el1.pool_multiplier_asset,
            multiplier: el1.multiplier
          })),
          rewardPeriodDefaultMultiplier: el0.reward_period_default_multiplier,
          rewardPeriodDistribute: el0.reward_period_distribute,
          rewardPeriodMod: Long.fromString(el0.reward_period_mod)
        }))
      };
    }
  },
  "/sifnode.clp.v1.MsgModifyPmtpRates": {
    aminoType: "/sifnode.clp.v1.MsgModifyPmtpRates",
    toAmino: ({
      signer,
      blockRate,
      runningRate,
      endPolicy
    }: MsgModifyPmtpRates): MsgModifyPmtpRatesAminoType["value"] => {
      return {
        signer,
        block_rate: blockRate,
        running_rate: runningRate,
        end_policy: endPolicy
      };
    },
    fromAmino: ({
      signer,
      block_rate,
      running_rate,
      end_policy
    }: MsgModifyPmtpRatesAminoType["value"]): MsgModifyPmtpRates => {
      return {
        signer,
        blockRate: block_rate,
        runningRate: running_rate,
        endPolicy: end_policy
      };
    }
  },
  "/sifnode.clp.v1.MsgUpdatePmtpParams": {
    aminoType: "/sifnode.clp.v1.MsgUpdatePmtpParams",
    toAmino: ({
      signer,
      pmtpPeriodGovernanceRate,
      pmtpPeriodEpochLength,
      pmtpPeriodStartBlock,
      pmtpPeriodEndBlock
    }: MsgUpdatePmtpParams): MsgUpdatePmtpParamsAminoType["value"] => {
      return {
        signer,
        pmtp_period_governance_rate: pmtpPeriodGovernanceRate,
        pmtp_period_epoch_length: pmtpPeriodEpochLength.toString(),
        pmtp_period_start_block: pmtpPeriodStartBlock.toString(),
        pmtp_period_end_block: pmtpPeriodEndBlock.toString()
      };
    },
    fromAmino: ({
      signer,
      pmtp_period_governance_rate,
      pmtp_period_epoch_length,
      pmtp_period_start_block,
      pmtp_period_end_block
    }: MsgUpdatePmtpParamsAminoType["value"]): MsgUpdatePmtpParams => {
      return {
        signer,
        pmtpPeriodGovernanceRate: pmtp_period_governance_rate,
        pmtpPeriodEpochLength: Long.fromString(pmtp_period_epoch_length),
        pmtpPeriodStartBlock: Long.fromString(pmtp_period_start_block),
        pmtpPeriodEndBlock: Long.fromString(pmtp_period_end_block)
      };
    }
  },
  "/sifnode.clp.v1.MsgUpdateStakingRewardParams": {
    aminoType: "/sifnode.clp.v1.MsgUpdateStakingRewardParams",
    toAmino: ({
      signer,
      minter,
      params
    }: MsgUpdateStakingRewardParams): MsgUpdateStakingRewardParamsAminoType["value"] => {
      return {
        signer,
        minter,
        params
      };
    },
    fromAmino: ({
      signer,
      minter,
      params
    }: MsgUpdateStakingRewardParamsAminoType["value"]): MsgUpdateStakingRewardParams => {
      return {
        signer,
        minter,
        params
      };
    }
  },
  "/sifnode.clp.v1.MsgSetSymmetryThreshold": {
    aminoType: "/sifnode.clp.v1.MsgSetSymmetryThreshold",
    toAmino: ({
      signer,
      threshold,
      ratio
    }: MsgSetSymmetryThreshold): MsgSetSymmetryThresholdAminoType["value"] => {
      return {
        signer,
        threshold,
        ratio
      };
    },
    fromAmino: ({
      signer,
      threshold,
      ratio
    }: MsgSetSymmetryThresholdAminoType["value"]): MsgSetSymmetryThreshold => {
      return {
        signer,
        threshold,
        ratio
      };
    }
  },
  "/sifnode.clp.v1.MsgCancelUnlock": {
    aminoType: "/sifnode.clp.v1.MsgCancelUnlock",
    toAmino: ({
      signer,
      externalAsset,
      units
    }: MsgCancelUnlock): MsgCancelUnlockAminoType["value"] => {
      return {
        signer,
        external_asset: {
          symbol: externalAsset.symbol
        },
        units
      };
    },
    fromAmino: ({
      signer,
      external_asset,
      units
    }: MsgCancelUnlockAminoType["value"]): MsgCancelUnlock => {
      return {
        signer,
        externalAsset: {
          symbol: external_asset.symbol
        },
        units
      };
    }
  },
  "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParams": {
    aminoType: "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParams",
    toAmino: ({
      signer,
      maxRowanLiquidityThreshold,
      maxRowanLiquidityThresholdAsset,
      epochLength,
      isActive
    }: MsgUpdateLiquidityProtectionParams): MsgUpdateLiquidityProtectionParamsAminoType["value"] => {
      return {
        signer,
        max_rowan_liquidity_threshold: maxRowanLiquidityThreshold,
        max_rowan_liquidity_threshold_asset: maxRowanLiquidityThresholdAsset,
        epoch_length: epochLength.toString(),
        is_active: isActive
      };
    },
    fromAmino: ({
      signer,
      max_rowan_liquidity_threshold,
      max_rowan_liquidity_threshold_asset,
      epoch_length,
      is_active
    }: MsgUpdateLiquidityProtectionParamsAminoType["value"]): MsgUpdateLiquidityProtectionParams => {
      return {
        signer,
        maxRowanLiquidityThreshold: max_rowan_liquidity_threshold,
        maxRowanLiquidityThresholdAsset: max_rowan_liquidity_threshold_asset,
        epochLength: Long.fromString(epoch_length),
        isActive: is_active
      };
    }
  },
  "/sifnode.clp.v1.MsgModifyLiquidityProtectionRates": {
    aminoType: "/sifnode.clp.v1.MsgModifyLiquidityProtectionRates",
    toAmino: ({
      signer,
      currentRowanLiquidityThreshold
    }: MsgModifyLiquidityProtectionRates): MsgModifyLiquidityProtectionRatesAminoType["value"] => {
      return {
        signer,
        current_rowan_liquidity_threshold: currentRowanLiquidityThreshold
      };
    },
    fromAmino: ({
      signer,
      current_rowan_liquidity_threshold
    }: MsgModifyLiquidityProtectionRatesAminoType["value"]): MsgModifyLiquidityProtectionRates => {
      return {
        signer,
        currentRowanLiquidityThreshold: current_rowan_liquidity_threshold
      };
    }
  },
  "/sifnode.clp.v1.MsgAddProviderDistributionPeriodRequest": {
    aminoType: "/sifnode.clp.v1.MsgAddProviderDistributionPeriodRequest",
    toAmino: ({
      signer,
      distributionPeriods
    }: MsgAddProviderDistributionPeriodRequest): MsgAddProviderDistributionPeriodRequestAminoType["value"] => {
      return {
        signer,
        distribution_periods: distributionPeriods.map(el0 => ({
          distribution_period_block_rate: el0.distributionPeriodBlockRate,
          distribution_period_start_block: el0.distributionPeriodStartBlock.toString(),
          distribution_period_end_block: el0.distributionPeriodEndBlock.toString(),
          distribution_period_mod: el0.distributionPeriodMod.toString()
        }))
      };
    },
    fromAmino: ({
      signer,
      distribution_periods
    }: MsgAddProviderDistributionPeriodRequestAminoType["value"]): MsgAddProviderDistributionPeriodRequest => {
      return {
        signer,
        distributionPeriods: distribution_periods.map(el0 => ({
          distributionPeriodBlockRate: el0.distribution_period_block_rate,
          distributionPeriodStartBlock: Long.fromString(el0.distribution_period_start_block),
          distributionPeriodEndBlock: Long.fromString(el0.distribution_period_end_block),
          distributionPeriodMod: Long.fromString(el0.distribution_period_mod)
        }))
      };
    }
  },
  "/sifnode.clp.v1.MsgUpdateSwapFeeParamsRequest": {
    aminoType: "/sifnode.clp.v1.MsgUpdateSwapFeeParamsRequest",
    toAmino: ({
      signer,
      defaultSwapFeeRate,
      tokenParams
    }: MsgUpdateSwapFeeParamsRequest): MsgUpdateSwapFeeParamsRequestAminoType["value"] => {
      return {
        signer,
        default_swap_fee_rate: defaultSwapFeeRate,
        token_params: tokenParams.map(el0 => ({
          asset: el0.asset,
          swap_fee_rate: el0.swapFeeRate
        }))
      };
    },
    fromAmino: ({
      signer,
      default_swap_fee_rate,
      token_params
    }: MsgUpdateSwapFeeParamsRequestAminoType["value"]): MsgUpdateSwapFeeParamsRequest => {
      return {
        signer,
        defaultSwapFeeRate: default_swap_fee_rate,
        tokenParams: token_params.map(el0 => ({
          asset: el0.asset,
          swapFeeRate: el0.swap_fee_rate
        }))
      };
    }
  }
};