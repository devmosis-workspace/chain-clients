import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgSupply, MsgWithdraw, MsgMaxWithdraw, MsgCollateralize, MsgDecollateralize, MsgBorrow, MsgMaxBorrow, MsgRepay, MsgLiquidate, MsgLeveragedLiquidate, MsgSupplyCollateral, MsgGovUpdateRegistry } from "./tx";
export interface MsgSupplyAminoType extends AminoMsg {
  type: "/umee.leverage.v1.MsgSupply";
  value: {
    supplier: string;
    asset: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgWithdrawAminoType extends AminoMsg {
  type: "/umee.leverage.v1.MsgWithdraw";
  value: {
    supplier: string;
    asset: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgMaxWithdrawAminoType extends AminoMsg {
  type: "/umee.leverage.v1.MsgMaxWithdraw";
  value: {
    supplier: string;
    denom: string;
  };
}
export interface MsgCollateralizeAminoType extends AminoMsg {
  type: "/umee.leverage.v1.MsgCollateralize";
  value: {
    borrower: string;
    asset: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgDecollateralizeAminoType extends AminoMsg {
  type: "/umee.leverage.v1.MsgDecollateralize";
  value: {
    borrower: string;
    asset: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgBorrowAminoType extends AminoMsg {
  type: "/umee.leverage.v1.MsgBorrow";
  value: {
    borrower: string;
    asset: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgMaxBorrowAminoType extends AminoMsg {
  type: "/umee.leverage.v1.MsgMaxBorrow";
  value: {
    borrower: string;
    denom: string;
  };
}
export interface MsgRepayAminoType extends AminoMsg {
  type: "/umee.leverage.v1.MsgRepay";
  value: {
    borrower: string;
    asset: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgLiquidateAminoType extends AminoMsg {
  type: "/umee.leverage.v1.MsgLiquidate";
  value: {
    liquidator: string;
    borrower: string;
    repayment: {
      denom: string;
      amount: string;
    };
    reward_denom: string;
  };
}
export interface MsgLeveragedLiquidateAminoType extends AminoMsg {
  type: "/umee.leverage.v1.MsgLeveragedLiquidate";
  value: {
    liquidator: string;
    borrower: string;
    repay_denom: string;
    reward_denom: string;
  };
}
export interface MsgSupplyCollateralAminoType extends AminoMsg {
  type: "/umee.leverage.v1.MsgSupplyCollateral";
  value: {
    supplier: string;
    asset: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgGovUpdateRegistryAminoType extends AminoMsg {
  type: "/umee.leverage.v1.MsgGovUpdateRegistry";
  value: {
    authority: string;
    title: string;
    description: string;
    add_tokens: {
      base_denom: string;
      reserve_factor: string;
      collateral_weight: string;
      liquidation_threshold: string;
      base_borrow_rate: string;
      kink_borrow_rate: string;
      max_borrow_rate: string;
      kink_utilization: string;
      liquidation_incentive: string;
      symbol_denom: string;
      exponent: number;
      enable_msg_supply: boolean;
      enable_msg_borrow: boolean;
      blacklist: boolean;
      max_collateral_share: string;
      max_supply_utilization: string;
      min_collateral_liquidity: string;
      max_supply: string;
      historic_medians: number;
    }[];
    update_tokens: {
      base_denom: string;
      reserve_factor: string;
      collateral_weight: string;
      liquidation_threshold: string;
      base_borrow_rate: string;
      kink_borrow_rate: string;
      max_borrow_rate: string;
      kink_utilization: string;
      liquidation_incentive: string;
      symbol_denom: string;
      exponent: number;
      enable_msg_supply: boolean;
      enable_msg_borrow: boolean;
      blacklist: boolean;
      max_collateral_share: string;
      max_supply_utilization: string;
      min_collateral_liquidity: string;
      max_supply: string;
      historic_medians: number;
    }[];
  };
}
export const AminoConverter = {
  "/umee.leverage.v1.MsgSupply": {
    aminoType: "/umee.leverage.v1.MsgSupply",
    toAmino: ({
      supplier,
      asset
    }: MsgSupply): MsgSupplyAminoType["value"] => {
      return {
        supplier,
        asset: {
          denom: asset.denom,
          amount: Long.fromValue(asset.amount).toString()
        }
      };
    },
    fromAmino: ({
      supplier,
      asset
    }: MsgSupplyAminoType["value"]): MsgSupply => {
      return {
        supplier,
        asset: {
          denom: asset.denom,
          amount: asset.amount
        }
      };
    }
  },
  "/umee.leverage.v1.MsgWithdraw": {
    aminoType: "/umee.leverage.v1.MsgWithdraw",
    toAmino: ({
      supplier,
      asset
    }: MsgWithdraw): MsgWithdrawAminoType["value"] => {
      return {
        supplier,
        asset: {
          denom: asset.denom,
          amount: Long.fromValue(asset.amount).toString()
        }
      };
    },
    fromAmino: ({
      supplier,
      asset
    }: MsgWithdrawAminoType["value"]): MsgWithdraw => {
      return {
        supplier,
        asset: {
          denom: asset.denom,
          amount: asset.amount
        }
      };
    }
  },
  "/umee.leverage.v1.MsgMaxWithdraw": {
    aminoType: "/umee.leverage.v1.MsgMaxWithdraw",
    toAmino: ({
      supplier,
      denom
    }: MsgMaxWithdraw): MsgMaxWithdrawAminoType["value"] => {
      return {
        supplier,
        denom
      };
    },
    fromAmino: ({
      supplier,
      denom
    }: MsgMaxWithdrawAminoType["value"]): MsgMaxWithdraw => {
      return {
        supplier,
        denom
      };
    }
  },
  "/umee.leverage.v1.MsgCollateralize": {
    aminoType: "/umee.leverage.v1.MsgCollateralize",
    toAmino: ({
      borrower,
      asset
    }: MsgCollateralize): MsgCollateralizeAminoType["value"] => {
      return {
        borrower,
        asset: {
          denom: asset.denom,
          amount: Long.fromValue(asset.amount).toString()
        }
      };
    },
    fromAmino: ({
      borrower,
      asset
    }: MsgCollateralizeAminoType["value"]): MsgCollateralize => {
      return {
        borrower,
        asset: {
          denom: asset.denom,
          amount: asset.amount
        }
      };
    }
  },
  "/umee.leverage.v1.MsgDecollateralize": {
    aminoType: "/umee.leverage.v1.MsgDecollateralize",
    toAmino: ({
      borrower,
      asset
    }: MsgDecollateralize): MsgDecollateralizeAminoType["value"] => {
      return {
        borrower,
        asset: {
          denom: asset.denom,
          amount: Long.fromValue(asset.amount).toString()
        }
      };
    },
    fromAmino: ({
      borrower,
      asset
    }: MsgDecollateralizeAminoType["value"]): MsgDecollateralize => {
      return {
        borrower,
        asset: {
          denom: asset.denom,
          amount: asset.amount
        }
      };
    }
  },
  "/umee.leverage.v1.MsgBorrow": {
    aminoType: "/umee.leverage.v1.MsgBorrow",
    toAmino: ({
      borrower,
      asset
    }: MsgBorrow): MsgBorrowAminoType["value"] => {
      return {
        borrower,
        asset: {
          denom: asset.denom,
          amount: Long.fromValue(asset.amount).toString()
        }
      };
    },
    fromAmino: ({
      borrower,
      asset
    }: MsgBorrowAminoType["value"]): MsgBorrow => {
      return {
        borrower,
        asset: {
          denom: asset.denom,
          amount: asset.amount
        }
      };
    }
  },
  "/umee.leverage.v1.MsgMaxBorrow": {
    aminoType: "/umee.leverage.v1.MsgMaxBorrow",
    toAmino: ({
      borrower,
      denom
    }: MsgMaxBorrow): MsgMaxBorrowAminoType["value"] => {
      return {
        borrower,
        denom
      };
    },
    fromAmino: ({
      borrower,
      denom
    }: MsgMaxBorrowAminoType["value"]): MsgMaxBorrow => {
      return {
        borrower,
        denom
      };
    }
  },
  "/umee.leverage.v1.MsgRepay": {
    aminoType: "/umee.leverage.v1.MsgRepay",
    toAmino: ({
      borrower,
      asset
    }: MsgRepay): MsgRepayAminoType["value"] => {
      return {
        borrower,
        asset: {
          denom: asset.denom,
          amount: Long.fromValue(asset.amount).toString()
        }
      };
    },
    fromAmino: ({
      borrower,
      asset
    }: MsgRepayAminoType["value"]): MsgRepay => {
      return {
        borrower,
        asset: {
          denom: asset.denom,
          amount: asset.amount
        }
      };
    }
  },
  "/umee.leverage.v1.MsgLiquidate": {
    aminoType: "/umee.leverage.v1.MsgLiquidate",
    toAmino: ({
      liquidator,
      borrower,
      repayment,
      rewardDenom
    }: MsgLiquidate): MsgLiquidateAminoType["value"] => {
      return {
        liquidator,
        borrower,
        repayment: {
          denom: repayment.denom,
          amount: Long.fromValue(repayment.amount).toString()
        },
        reward_denom: rewardDenom
      };
    },
    fromAmino: ({
      liquidator,
      borrower,
      repayment,
      reward_denom
    }: MsgLiquidateAminoType["value"]): MsgLiquidate => {
      return {
        liquidator,
        borrower,
        repayment: {
          denom: repayment.denom,
          amount: repayment.amount
        },
        rewardDenom: reward_denom
      };
    }
  },
  "/umee.leverage.v1.MsgLeveragedLiquidate": {
    aminoType: "/umee.leverage.v1.MsgLeveragedLiquidate",
    toAmino: ({
      liquidator,
      borrower,
      repayDenom,
      rewardDenom
    }: MsgLeveragedLiquidate): MsgLeveragedLiquidateAminoType["value"] => {
      return {
        liquidator,
        borrower,
        repay_denom: repayDenom,
        reward_denom: rewardDenom
      };
    },
    fromAmino: ({
      liquidator,
      borrower,
      repay_denom,
      reward_denom
    }: MsgLeveragedLiquidateAminoType["value"]): MsgLeveragedLiquidate => {
      return {
        liquidator,
        borrower,
        repayDenom: repay_denom,
        rewardDenom: reward_denom
      };
    }
  },
  "/umee.leverage.v1.MsgSupplyCollateral": {
    aminoType: "/umee.leverage.v1.MsgSupplyCollateral",
    toAmino: ({
      supplier,
      asset
    }: MsgSupplyCollateral): MsgSupplyCollateralAminoType["value"] => {
      return {
        supplier,
        asset: {
          denom: asset.denom,
          amount: Long.fromValue(asset.amount).toString()
        }
      };
    },
    fromAmino: ({
      supplier,
      asset
    }: MsgSupplyCollateralAminoType["value"]): MsgSupplyCollateral => {
      return {
        supplier,
        asset: {
          denom: asset.denom,
          amount: asset.amount
        }
      };
    }
  },
  "/umee.leverage.v1.MsgGovUpdateRegistry": {
    aminoType: "/umee.leverage.v1.MsgGovUpdateRegistry",
    toAmino: ({
      authority,
      title,
      description,
      addTokens,
      updateTokens
    }: MsgGovUpdateRegistry): MsgGovUpdateRegistryAminoType["value"] => {
      return {
        authority,
        title,
        description,
        add_tokens: addTokens.map(el0 => ({
          base_denom: el0.baseDenom,
          reserve_factor: el0.reserveFactor,
          collateral_weight: el0.collateralWeight,
          liquidation_threshold: el0.liquidationThreshold,
          base_borrow_rate: el0.baseBorrowRate,
          kink_borrow_rate: el0.kinkBorrowRate,
          max_borrow_rate: el0.maxBorrowRate,
          kink_utilization: el0.kinkUtilization,
          liquidation_incentive: el0.liquidationIncentive,
          symbol_denom: el0.symbolDenom,
          exponent: el0.exponent,
          enable_msg_supply: el0.enableMsgSupply,
          enable_msg_borrow: el0.enableMsgBorrow,
          blacklist: el0.blacklist,
          max_collateral_share: el0.maxCollateralShare,
          max_supply_utilization: el0.maxSupplyUtilization,
          min_collateral_liquidity: el0.minCollateralLiquidity,
          max_supply: el0.maxSupply,
          historic_medians: el0.historicMedians
        })),
        update_tokens: updateTokens.map(el0 => ({
          base_denom: el0.baseDenom,
          reserve_factor: el0.reserveFactor,
          collateral_weight: el0.collateralWeight,
          liquidation_threshold: el0.liquidationThreshold,
          base_borrow_rate: el0.baseBorrowRate,
          kink_borrow_rate: el0.kinkBorrowRate,
          max_borrow_rate: el0.maxBorrowRate,
          kink_utilization: el0.kinkUtilization,
          liquidation_incentive: el0.liquidationIncentive,
          symbol_denom: el0.symbolDenom,
          exponent: el0.exponent,
          enable_msg_supply: el0.enableMsgSupply,
          enable_msg_borrow: el0.enableMsgBorrow,
          blacklist: el0.blacklist,
          max_collateral_share: el0.maxCollateralShare,
          max_supply_utilization: el0.maxSupplyUtilization,
          min_collateral_liquidity: el0.minCollateralLiquidity,
          max_supply: el0.maxSupply,
          historic_medians: el0.historicMedians
        }))
      };
    },
    fromAmino: ({
      authority,
      title,
      description,
      add_tokens,
      update_tokens
    }: MsgGovUpdateRegistryAminoType["value"]): MsgGovUpdateRegistry => {
      return {
        authority,
        title,
        description,
        addTokens: add_tokens.map(el0 => ({
          baseDenom: el0.base_denom,
          reserveFactor: el0.reserve_factor,
          collateralWeight: el0.collateral_weight,
          liquidationThreshold: el0.liquidation_threshold,
          baseBorrowRate: el0.base_borrow_rate,
          kinkBorrowRate: el0.kink_borrow_rate,
          maxBorrowRate: el0.max_borrow_rate,
          kinkUtilization: el0.kink_utilization,
          liquidationIncentive: el0.liquidation_incentive,
          symbolDenom: el0.symbol_denom,
          exponent: el0.exponent,
          enableMsgSupply: el0.enable_msg_supply,
          enableMsgBorrow: el0.enable_msg_borrow,
          blacklist: el0.blacklist,
          maxCollateralShare: el0.max_collateral_share,
          maxSupplyUtilization: el0.max_supply_utilization,
          minCollateralLiquidity: el0.min_collateral_liquidity,
          maxSupply: el0.max_supply,
          historicMedians: el0.historic_medians
        })),
        updateTokens: update_tokens.map(el0 => ({
          baseDenom: el0.base_denom,
          reserveFactor: el0.reserve_factor,
          collateralWeight: el0.collateral_weight,
          liquidationThreshold: el0.liquidation_threshold,
          baseBorrowRate: el0.base_borrow_rate,
          kinkBorrowRate: el0.kink_borrow_rate,
          maxBorrowRate: el0.max_borrow_rate,
          kinkUtilization: el0.kink_utilization,
          liquidationIncentive: el0.liquidation_incentive,
          symbolDenom: el0.symbol_denom,
          exponent: el0.exponent,
          enableMsgSupply: el0.enable_msg_supply,
          enableMsgBorrow: el0.enable_msg_borrow,
          blacklist: el0.blacklist,
          maxCollateralShare: el0.max_collateral_share,
          maxSupplyUtilization: el0.max_supply_utilization,
          minCollateralLiquidity: el0.min_collateral_liquidity,
          maxSupply: el0.max_supply,
          historicMedians: el0.historic_medians
        }))
      };
    }
  }
};