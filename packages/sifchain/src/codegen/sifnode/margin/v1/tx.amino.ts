import { positionFromJSON } from "./types";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgOpen, MsgClose, MsgForceClose, MsgUpdateParams, MsgUpdatePools, MsgUpdateRowanCollateral, MsgWhitelist, MsgDewhitelist, MsgAdminClose, MsgAdminCloseAll } from "./tx";
export interface MsgOpenAminoType extends AminoMsg {
  type: "/sifnode.margin.v1.MsgOpen";
  value: {
    signer: string;
    collateral_asset: string;
    collateral_amount: string;
    borrow_asset: string;
    position: number;
    leverage: string;
  };
}
export interface MsgCloseAminoType extends AminoMsg {
  type: "/sifnode.margin.v1.MsgClose";
  value: {
    signer: string;
    id: string;
  };
}
export interface MsgForceCloseAminoType extends AminoMsg {
  type: "/sifnode.margin.v1.MsgForceClose";
  value: {
    signer: string;
    mtp_address: string;
    id: string;
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/sifnode.margin.v1.MsgUpdateParams";
  value: {
    signer: string;
    params: {
      leverage_max: string;
      interest_rate_max: string;
      interest_rate_min: string;
      interest_rate_increase: string;
      interest_rate_decrease: string;
      health_gain_factor: string;
      epoch_length: string;
      pools: string[];
      removal_queue_threshold: string;
      max_open_positions: string;
      pool_open_threshold: string;
      force_close_fund_percentage: string;
      force_close_fund_address: string;
      incremental_interest_payment_fund_percentage: string;
      incremental_interest_payment_fund_address: string;
      sq_modifier: string;
      safety_factor: string;
      closed_pools: string[];
      incremental_interest_payment_enabled: boolean;
      whitelisting_enabled: boolean;
      rowan_collateral_enabled: boolean;
    };
  };
}
export interface MsgUpdatePoolsAminoType extends AminoMsg {
  type: "/sifnode.margin.v1.MsgUpdatePools";
  value: {
    signer: string;
    pools: string[];
    closed_pools: string[];
  };
}
export interface MsgUpdateRowanCollateralAminoType extends AminoMsg {
  type: "/sifnode.margin.v1.MsgUpdateRowanCollateral";
  value: {
    signer: string;
    rowan_collateral_enabled: boolean;
  };
}
export interface MsgWhitelistAminoType extends AminoMsg {
  type: "/sifnode.margin.v1.MsgWhitelist";
  value: {
    signer: string;
    whitelisted_address: string;
  };
}
export interface MsgDewhitelistAminoType extends AminoMsg {
  type: "/sifnode.margin.v1.MsgDewhitelist";
  value: {
    signer: string;
    whitelisted_address: string;
  };
}
export interface MsgAdminCloseAminoType extends AminoMsg {
  type: "/sifnode.margin.v1.MsgAdminClose";
  value: {
    signer: string;
    mtp_address: string;
    id: string;
    take_margin_fund: boolean;
  };
}
export interface MsgAdminCloseAllAminoType extends AminoMsg {
  type: "/sifnode.margin.v1.MsgAdminCloseAll";
  value: {
    signer: string;
    take_margin_fund: boolean;
  };
}
export const AminoConverter = {
  "/sifnode.margin.v1.MsgOpen": {
    aminoType: "/sifnode.margin.v1.MsgOpen",
    toAmino: ({
      signer,
      collateralAsset,
      collateralAmount,
      borrowAsset,
      position,
      leverage
    }: MsgOpen): MsgOpenAminoType["value"] => {
      return {
        signer,
        collateral_asset: collateralAsset,
        collateral_amount: collateralAmount,
        borrow_asset: borrowAsset,
        position,
        leverage
      };
    },
    fromAmino: ({
      signer,
      collateral_asset,
      collateral_amount,
      borrow_asset,
      position,
      leverage
    }: MsgOpenAminoType["value"]): MsgOpen => {
      return {
        signer,
        collateralAsset: collateral_asset,
        collateralAmount: collateral_amount,
        borrowAsset: borrow_asset,
        position: positionFromJSON(position),
        leverage
      };
    }
  },
  "/sifnode.margin.v1.MsgClose": {
    aminoType: "/sifnode.margin.v1.MsgClose",
    toAmino: ({
      signer,
      id
    }: MsgClose): MsgCloseAminoType["value"] => {
      return {
        signer,
        id: id.toString()
      };
    },
    fromAmino: ({
      signer,
      id
    }: MsgCloseAminoType["value"]): MsgClose => {
      return {
        signer,
        id: Long.fromString(id)
      };
    }
  },
  "/sifnode.margin.v1.MsgForceClose": {
    aminoType: "/sifnode.margin.v1.MsgForceClose",
    toAmino: ({
      signer,
      mtpAddress,
      id
    }: MsgForceClose): MsgForceCloseAminoType["value"] => {
      return {
        signer,
        mtp_address: mtpAddress,
        id: id.toString()
      };
    },
    fromAmino: ({
      signer,
      mtp_address,
      id
    }: MsgForceCloseAminoType["value"]): MsgForceClose => {
      return {
        signer,
        mtpAddress: mtp_address,
        id: Long.fromString(id)
      };
    }
  },
  "/sifnode.margin.v1.MsgUpdateParams": {
    aminoType: "/sifnode.margin.v1.MsgUpdateParams",
    toAmino: ({
      signer,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        signer,
        params: {
          leverage_max: params.leverageMax,
          interest_rate_max: params.interestRateMax,
          interest_rate_min: params.interestRateMin,
          interest_rate_increase: params.interestRateIncrease,
          interest_rate_decrease: params.interestRateDecrease,
          health_gain_factor: params.healthGainFactor,
          epoch_length: params.epochLength.toString(),
          pools: params.pools,
          removal_queue_threshold: params.removalQueueThreshold,
          max_open_positions: params.maxOpenPositions.toString(),
          pool_open_threshold: params.poolOpenThreshold,
          force_close_fund_percentage: params.forceCloseFundPercentage,
          force_close_fund_address: params.forceCloseFundAddress,
          incremental_interest_payment_fund_percentage: params.incrementalInterestPaymentFundPercentage,
          incremental_interest_payment_fund_address: params.incrementalInterestPaymentFundAddress,
          sq_modifier: params.sqModifier,
          safety_factor: params.safetyFactor,
          closed_pools: params.closedPools,
          incremental_interest_payment_enabled: params.incrementalInterestPaymentEnabled,
          whitelisting_enabled: params.whitelistingEnabled,
          rowan_collateral_enabled: params.rowanCollateralEnabled
        }
      };
    },
    fromAmino: ({
      signer,
      params
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        signer,
        params: {
          leverageMax: params.leverage_max,
          interestRateMax: params.interest_rate_max,
          interestRateMin: params.interest_rate_min,
          interestRateIncrease: params.interest_rate_increase,
          interestRateDecrease: params.interest_rate_decrease,
          healthGainFactor: params.health_gain_factor,
          epochLength: Long.fromString(params.epoch_length),
          pools: params.pools,
          removalQueueThreshold: params.removal_queue_threshold,
          maxOpenPositions: Long.fromString(params.max_open_positions),
          poolOpenThreshold: params.pool_open_threshold,
          forceCloseFundPercentage: params.force_close_fund_percentage,
          forceCloseFundAddress: params.force_close_fund_address,
          incrementalInterestPaymentFundPercentage: params.incremental_interest_payment_fund_percentage,
          incrementalInterestPaymentFundAddress: params.incremental_interest_payment_fund_address,
          sqModifier: params.sq_modifier,
          safetyFactor: params.safety_factor,
          closedPools: params.closed_pools,
          incrementalInterestPaymentEnabled: params.incremental_interest_payment_enabled,
          whitelistingEnabled: params.whitelisting_enabled,
          rowanCollateralEnabled: params.rowan_collateral_enabled
        }
      };
    }
  },
  "/sifnode.margin.v1.MsgUpdatePools": {
    aminoType: "/sifnode.margin.v1.MsgUpdatePools",
    toAmino: ({
      signer,
      pools,
      closedPools
    }: MsgUpdatePools): MsgUpdatePoolsAminoType["value"] => {
      return {
        signer,
        pools,
        closed_pools: closedPools
      };
    },
    fromAmino: ({
      signer,
      pools,
      closed_pools
    }: MsgUpdatePoolsAminoType["value"]): MsgUpdatePools => {
      return {
        signer,
        pools,
        closedPools: closed_pools
      };
    }
  },
  "/sifnode.margin.v1.MsgUpdateRowanCollateral": {
    aminoType: "/sifnode.margin.v1.MsgUpdateRowanCollateral",
    toAmino: ({
      signer,
      rowanCollateralEnabled
    }: MsgUpdateRowanCollateral): MsgUpdateRowanCollateralAminoType["value"] => {
      return {
        signer,
        rowan_collateral_enabled: rowanCollateralEnabled
      };
    },
    fromAmino: ({
      signer,
      rowan_collateral_enabled
    }: MsgUpdateRowanCollateralAminoType["value"]): MsgUpdateRowanCollateral => {
      return {
        signer,
        rowanCollateralEnabled: rowan_collateral_enabled
      };
    }
  },
  "/sifnode.margin.v1.MsgWhitelist": {
    aminoType: "/sifnode.margin.v1.MsgWhitelist",
    toAmino: ({
      signer,
      whitelistedAddress
    }: MsgWhitelist): MsgWhitelistAminoType["value"] => {
      return {
        signer,
        whitelisted_address: whitelistedAddress
      };
    },
    fromAmino: ({
      signer,
      whitelisted_address
    }: MsgWhitelistAminoType["value"]): MsgWhitelist => {
      return {
        signer,
        whitelistedAddress: whitelisted_address
      };
    }
  },
  "/sifnode.margin.v1.MsgDewhitelist": {
    aminoType: "/sifnode.margin.v1.MsgDewhitelist",
    toAmino: ({
      signer,
      whitelistedAddress
    }: MsgDewhitelist): MsgDewhitelistAminoType["value"] => {
      return {
        signer,
        whitelisted_address: whitelistedAddress
      };
    },
    fromAmino: ({
      signer,
      whitelisted_address
    }: MsgDewhitelistAminoType["value"]): MsgDewhitelist => {
      return {
        signer,
        whitelistedAddress: whitelisted_address
      };
    }
  },
  "/sifnode.margin.v1.MsgAdminClose": {
    aminoType: "/sifnode.margin.v1.MsgAdminClose",
    toAmino: ({
      signer,
      mtpAddress,
      id,
      takeMarginFund
    }: MsgAdminClose): MsgAdminCloseAminoType["value"] => {
      return {
        signer,
        mtp_address: mtpAddress,
        id: id.toString(),
        take_margin_fund: takeMarginFund
      };
    },
    fromAmino: ({
      signer,
      mtp_address,
      id,
      take_margin_fund
    }: MsgAdminCloseAminoType["value"]): MsgAdminClose => {
      return {
        signer,
        mtpAddress: mtp_address,
        id: Long.fromString(id),
        takeMarginFund: take_margin_fund
      };
    }
  },
  "/sifnode.margin.v1.MsgAdminCloseAll": {
    aminoType: "/sifnode.margin.v1.MsgAdminCloseAll",
    toAmino: ({
      signer,
      takeMarginFund
    }: MsgAdminCloseAll): MsgAdminCloseAllAminoType["value"] => {
      return {
        signer,
        take_margin_fund: takeMarginFund
      };
    },
    fromAmino: ({
      signer,
      take_margin_fund
    }: MsgAdminCloseAllAminoType["value"]): MsgAdminCloseAll => {
      return {
        signer,
        takeMarginFund: take_margin_fund
      };
    }
  }
};