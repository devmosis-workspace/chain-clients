import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
/**
 * Params defines the parameters for the leverage module.
 * See https://github.com/umee-network/umee/blob/main/docs/design_docs/010-market-params.md
 * for more details.
 */
export interface Params {
  /**
   * Complete Liquidation Threshold determines how far between
   * liquidation_threshold (LT) and collateral_value (CV) a borrower's
   * borrowed value must have progressed in order to allow a full liquidation.
   * 0.3 indicates 30% of the way from LT to CV.
   * See also `minimum_close_factor` for more information.
   * Valid values: 0-1.
   */
  completeLiquidationThreshold: string;
  /**
   * Close Factor determines the portion of a borrower's position that can be
   * liquidated in a single event. Minimum Close Factor is Close Factor at
   * liquidation_threshold. 0.1 means that that 10% of the borrower position can
   * be liquidated when the borrowed value passes the liquidation_threshold.
   * close_factor scales linearly between minimum_close_factor and 1.0,
   * reaching its maximum when borrowed value passes
   * complete_liquidation_threshold. We can put it into the picture:
   * 
   *             borrowed          CV := collateral
   *             value                   value
   *  --- | ------- | ----- | -------- | ------->
   *     LV                 CL
   * 
   * LV = liquidation value = liquidation_threshold * CV
   * CL = LV + (CV-LV) * complete_liquidation_threshold
   *    is the borrowed value above which close factor will be 1.
   * 
   * Valid values: 0-1.
   */
  minimumCloseFactor: string;
  /**
   * Oracle Reward Factor determines the portion of interest accrued on
   * borrows that is sent to the oracle module to fund its reward pool.
   * Valid values: 0-1.
   */
  oracleRewardFactor: string;
  /**
   * Small Liquidation Size determines the USD value at which a borrow is
   * considered small enough to be liquidated in a single transaction, bypassing
   * dynamic close factor.
   */
  smallLiquidationSize: string;
  /**
   * Direct Liquidation Fee is a reduction factor in liquidation incentive
   * experienced by liquidators who choose to receive base assets instead of
   * uTokens as liquidation rewards.
   * Valid values: 0-1.
   */
  directLiquidationFee: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/umee.leverage.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the leverage module.
 * See https://github.com/umee-network/umee/blob/main/docs/design_docs/010-market-params.md
 * for more details.
 */
export interface ParamsAmino {
  /**
   * Complete Liquidation Threshold determines how far between
   * liquidation_threshold (LT) and collateral_value (CV) a borrower's
   * borrowed value must have progressed in order to allow a full liquidation.
   * 0.3 indicates 30% of the way from LT to CV.
   * See also `minimum_close_factor` for more information.
   * Valid values: 0-1.
   */
  complete_liquidation_threshold: string;
  /**
   * Close Factor determines the portion of a borrower's position that can be
   * liquidated in a single event. Minimum Close Factor is Close Factor at
   * liquidation_threshold. 0.1 means that that 10% of the borrower position can
   * be liquidated when the borrowed value passes the liquidation_threshold.
   * close_factor scales linearly between minimum_close_factor and 1.0,
   * reaching its maximum when borrowed value passes
   * complete_liquidation_threshold. We can put it into the picture:
   * 
   *             borrowed          CV := collateral
   *             value                   value
   *  --- | ------- | ----- | -------- | ------->
   *     LV                 CL
   * 
   * LV = liquidation value = liquidation_threshold * CV
   * CL = LV + (CV-LV) * complete_liquidation_threshold
   *    is the borrowed value above which close factor will be 1.
   * 
   * Valid values: 0-1.
   */
  minimum_close_factor: string;
  /**
   * Oracle Reward Factor determines the portion of interest accrued on
   * borrows that is sent to the oracle module to fund its reward pool.
   * Valid values: 0-1.
   */
  oracle_reward_factor: string;
  /**
   * Small Liquidation Size determines the USD value at which a borrow is
   * considered small enough to be liquidated in a single transaction, bypassing
   * dynamic close factor.
   */
  small_liquidation_size: string;
  /**
   * Direct Liquidation Fee is a reduction factor in liquidation incentive
   * experienced by liquidators who choose to receive base assets instead of
   * uTokens as liquidation rewards.
   * Valid values: 0-1.
   */
  direct_liquidation_fee: string;
}
export interface ParamsAminoMsg {
  type: "/umee.leverage.v1.Params";
  value: ParamsAmino;
}
/**
 * Params defines the parameters for the leverage module.
 * See https://github.com/umee-network/umee/blob/main/docs/design_docs/010-market-params.md
 * for more details.
 */
export interface ParamsSDKType {
  complete_liquidation_threshold: string;
  minimum_close_factor: string;
  oracle_reward_factor: string;
  small_liquidation_size: string;
  direct_liquidation_fee: string;
}
/**
 * Token defines a token, along with its metadata and parameters, in the Umee
 * capital facility that can be supplied and borrowed.
 * See https://github.com/umee-network/umee/blob/main/docs/design_docs/010-market-params.md
 * for more details.
 */
export interface Token {
  /**
   * Base Denom is the denomination of the underlying base token. Must be the base
   * denom as registered in the Bank module (so IBC denom for IBC tokens).
   */
  baseDenom: string;
  /**
   * Reserve Factor defines what portion of accrued interest goes to reserves
   * when this token is borrowed.
   * Valid values: 0-1.
   */
  reserveFactor: string;
  /**
   * Collateral Weight defines what portion of the total value of the asset
   * can contribute to a users borrowing power. If the collateral weight is
   * zero, using this asset as collateral against borrowing will be disabled.
   * Must be smaller than `liquidation_threshold`.
   * Valid values: 0-1.
   */
  collateralWeight: string;
  /**
   * Liquidation Threshold defines what amount of the total value of the
   * asset as a collateral can contribute to a user's liquidation threshold
   * (above which they become eligible for liquidation).
   * Must be bigger than `collateral_weight`.
   * Valid values: 0-1.
   * See also: min_close_factor.
   */
  liquidationThreshold: string;
  /**
   * Base Borrow Rate defines the minimum interest rate for borrowing this
   * asset.
   * Valid values: 0-∞
   */
  baseBorrowRate: string;
  /**
   * Kink Borrow Rate defines the interest rate for borrowing this
   * asset when supply utilization is equal to 'kink_utilization'.
   * Valid values: 0-∞
   */
  kinkBorrowRate: string;
  /**
   * Max Borrow Rate defines the interest rate for borrowing this
   * asset when supply utilization is at its maximum.
   * Valid values: 0-∞
   */
  maxBorrowRate: string;
  /**
   * Kink Utilization defines the supply utilization value where
   * the kink in the borrow interest rate function occurs.
   * Valid values: 0-1.
   */
  kinkUtilization: string;
  /**
   * Liquidation Incentive determines the portion of bonus collateral of
   * a token type liquidators receive as a liquidation reward.
   * Valid values: 0-1.
   */
  liquidationIncentive: string;
  /** Symbol Denom is the human readable denomination of this token. */
  symbolDenom: string;
  /**
   * Exponent is the power of ten by which to multiply, in order to convert
   * an amount of the token denoted in its symbol denom to the actual amount
   * of its base denom.
   */
  exponent: number;
  /**
   * Enable Msg Supply allows supplying for lending or collateral using this
   * token. `false` means that a token can no longer be supplied.
   * Note that withdrawing is always enabled. Disabling supply would
   * be one step in phasing out an asset type.
   */
  enableMsgSupply: boolean;
  /**
   * Enable Msg Borrow allows borrowing of this token. Note that repaying is
   * always enabled. Disabling borrowing would be one step in phasing out an
   * asset type, but could also be used from the start for asset types meant
   * to be collateral only, like meTokens.
   */
  enableMsgBorrow: boolean;
  /**
   * Blacklist should only be used to eliminate an asset completely. A blacklisted
   * asset is treated as though its oracle price is zero, and thus ignored by
   * calculations such as collateral value and borrow limit. Can still be repaid
   * or withdrawn, but not liquidated. A blacklisted token must have enable_msg_supply
   * and enable_msg_borrow set to false. Such tokens can be safely removed from the
   * oracle and price feeder as well.
   */
  blacklist: boolean;
  /**
   * Max Collateral Share specifies how much of the system's overall collateral
   * can be provided by a given token. 1.0 means that the token has no restriction.
   * 0.1 means maximum 10% of system's total collateral value can be provided by this token.
   * Valid values: 0-1.
   */
  maxCollateralShare: string;
  /**
   * Max Supply Utilization specifies the maximum supply utilization a token is
   * allowed to reach as a direct result of user borrowing. New borrows are not allowed when
   * the supply utilization is above `max_supply_utilization`.
   *    supply_utilization(token) = total_borrowed(token) / total_supply(token)
   * Valid values: 0-1.
   */
  maxSupplyUtilization: string;
  /**
   * Min Collateral Liquidity specifies min limit for the following function:
   *    collateral_liquidity(token) = available(token) / total_collateral(token)
   * Borrowing, collateralizing, or withdrawing assets is not allowed when the
   * result of such action invalidates min_collateral_liquidity.
   * Liquidity can only drop below this value due to interest or liquidations.
   * The goal is to assure that there is enough available (not borrowed) token to be available
   * for withdraw when there is a collateral liquidation and the liquidator needs to
   * withdraw uToken.
   * Valid values: 0 - inf
   */
  minCollateralLiquidity: string;
  /**
   * Max Supply is the maximum amount of tokens the protocol can hold.
   * Adding more supply of the given token to the protocol will return an error.
   * Must be a non negative value. 0 means that there is no limit.
   * To mark a token as not valid for supply, `msg_supply` must be set to false.
   */
  maxSupply: string;
  /**
   * Historic Medians is the number of median historic prices to request from
   * the oracle module when evaluating new borrow positions containing this token.
   * All MsgBorrow, MsgWithdraw, and MsgDecollateralize must result in healthy
   * borrow positions under both current and historic prices. The default value of
   * zero for this field causes current price to be used in those calculations
   * for the affected Token.
   * The time span covered by the historic median will be:
   *     oracle.Params.median_stamp_period * oracle.Params.historic_stamp_period * historic_medians.
   */
  historicMedians: number;
}
export interface TokenProtoMsg {
  typeUrl: "/umee.leverage.v1.Token";
  value: Uint8Array;
}
/**
 * Token defines a token, along with its metadata and parameters, in the Umee
 * capital facility that can be supplied and borrowed.
 * See https://github.com/umee-network/umee/blob/main/docs/design_docs/010-market-params.md
 * for more details.
 */
export interface TokenAmino {
  /**
   * Base Denom is the denomination of the underlying base token. Must be the base
   * denom as registered in the Bank module (so IBC denom for IBC tokens).
   */
  base_denom: string;
  /**
   * Reserve Factor defines what portion of accrued interest goes to reserves
   * when this token is borrowed.
   * Valid values: 0-1.
   */
  reserve_factor: string;
  /**
   * Collateral Weight defines what portion of the total value of the asset
   * can contribute to a users borrowing power. If the collateral weight is
   * zero, using this asset as collateral against borrowing will be disabled.
   * Must be smaller than `liquidation_threshold`.
   * Valid values: 0-1.
   */
  collateral_weight: string;
  /**
   * Liquidation Threshold defines what amount of the total value of the
   * asset as a collateral can contribute to a user's liquidation threshold
   * (above which they become eligible for liquidation).
   * Must be bigger than `collateral_weight`.
   * Valid values: 0-1.
   * See also: min_close_factor.
   */
  liquidation_threshold: string;
  /**
   * Base Borrow Rate defines the minimum interest rate for borrowing this
   * asset.
   * Valid values: 0-∞
   */
  base_borrow_rate: string;
  /**
   * Kink Borrow Rate defines the interest rate for borrowing this
   * asset when supply utilization is equal to 'kink_utilization'.
   * Valid values: 0-∞
   */
  kink_borrow_rate: string;
  /**
   * Max Borrow Rate defines the interest rate for borrowing this
   * asset when supply utilization is at its maximum.
   * Valid values: 0-∞
   */
  max_borrow_rate: string;
  /**
   * Kink Utilization defines the supply utilization value where
   * the kink in the borrow interest rate function occurs.
   * Valid values: 0-1.
   */
  kink_utilization: string;
  /**
   * Liquidation Incentive determines the portion of bonus collateral of
   * a token type liquidators receive as a liquidation reward.
   * Valid values: 0-1.
   */
  liquidation_incentive: string;
  /** Symbol Denom is the human readable denomination of this token. */
  symbol_denom: string;
  /**
   * Exponent is the power of ten by which to multiply, in order to convert
   * an amount of the token denoted in its symbol denom to the actual amount
   * of its base denom.
   */
  exponent: number;
  /**
   * Enable Msg Supply allows supplying for lending or collateral using this
   * token. `false` means that a token can no longer be supplied.
   * Note that withdrawing is always enabled. Disabling supply would
   * be one step in phasing out an asset type.
   */
  enable_msg_supply: boolean;
  /**
   * Enable Msg Borrow allows borrowing of this token. Note that repaying is
   * always enabled. Disabling borrowing would be one step in phasing out an
   * asset type, but could also be used from the start for asset types meant
   * to be collateral only, like meTokens.
   */
  enable_msg_borrow: boolean;
  /**
   * Blacklist should only be used to eliminate an asset completely. A blacklisted
   * asset is treated as though its oracle price is zero, and thus ignored by
   * calculations such as collateral value and borrow limit. Can still be repaid
   * or withdrawn, but not liquidated. A blacklisted token must have enable_msg_supply
   * and enable_msg_borrow set to false. Such tokens can be safely removed from the
   * oracle and price feeder as well.
   */
  blacklist: boolean;
  /**
   * Max Collateral Share specifies how much of the system's overall collateral
   * can be provided by a given token. 1.0 means that the token has no restriction.
   * 0.1 means maximum 10% of system's total collateral value can be provided by this token.
   * Valid values: 0-1.
   */
  max_collateral_share: string;
  /**
   * Max Supply Utilization specifies the maximum supply utilization a token is
   * allowed to reach as a direct result of user borrowing. New borrows are not allowed when
   * the supply utilization is above `max_supply_utilization`.
   *    supply_utilization(token) = total_borrowed(token) / total_supply(token)
   * Valid values: 0-1.
   */
  max_supply_utilization: string;
  /**
   * Min Collateral Liquidity specifies min limit for the following function:
   *    collateral_liquidity(token) = available(token) / total_collateral(token)
   * Borrowing, collateralizing, or withdrawing assets is not allowed when the
   * result of such action invalidates min_collateral_liquidity.
   * Liquidity can only drop below this value due to interest or liquidations.
   * The goal is to assure that there is enough available (not borrowed) token to be available
   * for withdraw when there is a collateral liquidation and the liquidator needs to
   * withdraw uToken.
   * Valid values: 0 - inf
   */
  min_collateral_liquidity: string;
  /**
   * Max Supply is the maximum amount of tokens the protocol can hold.
   * Adding more supply of the given token to the protocol will return an error.
   * Must be a non negative value. 0 means that there is no limit.
   * To mark a token as not valid for supply, `msg_supply` must be set to false.
   */
  max_supply: string;
  /**
   * Historic Medians is the number of median historic prices to request from
   * the oracle module when evaluating new borrow positions containing this token.
   * All MsgBorrow, MsgWithdraw, and MsgDecollateralize must result in healthy
   * borrow positions under both current and historic prices. The default value of
   * zero for this field causes current price to be used in those calculations
   * for the affected Token.
   * The time span covered by the historic median will be:
   *     oracle.Params.median_stamp_period * oracle.Params.historic_stamp_period * historic_medians.
   */
  historic_medians: number;
}
export interface TokenAminoMsg {
  type: "/umee.leverage.v1.Token";
  value: TokenAmino;
}
/**
 * Token defines a token, along with its metadata and parameters, in the Umee
 * capital facility that can be supplied and borrowed.
 * See https://github.com/umee-network/umee/blob/main/docs/design_docs/010-market-params.md
 * for more details.
 */
export interface TokenSDKType {
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
}
function createBaseParams(): Params {
  return {
    completeLiquidationThreshold: "",
    minimumCloseFactor: "",
    oracleRewardFactor: "",
    smallLiquidationSize: "",
    directLiquidationFee: ""
  };
}
export const Params = {
  typeUrl: "/umee.leverage.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.completeLiquidationThreshold !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.completeLiquidationThreshold, 18).atomics);
    }
    if (message.minimumCloseFactor !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.minimumCloseFactor, 18).atomics);
    }
    if (message.oracleRewardFactor !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.oracleRewardFactor, 18).atomics);
    }
    if (message.smallLiquidationSize !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.smallLiquidationSize, 18).atomics);
    }
    if (message.directLiquidationFee !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.directLiquidationFee, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      completeLiquidationThreshold: isSet(object.completeLiquidationThreshold) ? String(object.completeLiquidationThreshold) : "",
      minimumCloseFactor: isSet(object.minimumCloseFactor) ? String(object.minimumCloseFactor) : "",
      oracleRewardFactor: isSet(object.oracleRewardFactor) ? String(object.oracleRewardFactor) : "",
      smallLiquidationSize: isSet(object.smallLiquidationSize) ? String(object.smallLiquidationSize) : "",
      directLiquidationFee: isSet(object.directLiquidationFee) ? String(object.directLiquidationFee) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.completeLiquidationThreshold = object.completeLiquidationThreshold ?? "";
    message.minimumCloseFactor = object.minimumCloseFactor ?? "";
    message.oracleRewardFactor = object.oracleRewardFactor ?? "";
    message.smallLiquidationSize = object.smallLiquidationSize ?? "";
    message.directLiquidationFee = object.directLiquidationFee ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      completeLiquidationThreshold: object.complete_liquidation_threshold,
      minimumCloseFactor: object.minimum_close_factor,
      oracleRewardFactor: object.oracle_reward_factor,
      smallLiquidationSize: object.small_liquidation_size,
      directLiquidationFee: object.direct_liquidation_fee
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.complete_liquidation_threshold = message.completeLiquidationThreshold;
    obj.minimum_close_factor = message.minimumCloseFactor;
    obj.oracle_reward_factor = message.oracleRewardFactor;
    obj.small_liquidation_size = message.smallLiquidationSize;
    obj.direct_liquidation_fee = message.directLiquidationFee;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseToken(): Token {
  return {
    baseDenom: "",
    reserveFactor: "",
    collateralWeight: "",
    liquidationThreshold: "",
    baseBorrowRate: "",
    kinkBorrowRate: "",
    maxBorrowRate: "",
    kinkUtilization: "",
    liquidationIncentive: "",
    symbolDenom: "",
    exponent: 0,
    enableMsgSupply: false,
    enableMsgBorrow: false,
    blacklist: false,
    maxCollateralShare: "",
    maxSupplyUtilization: "",
    minCollateralLiquidity: "",
    maxSupply: "",
    historicMedians: 0
  };
}
export const Token = {
  typeUrl: "/umee.leverage.v1.Token",
  encode(message: Token, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    if (message.reserveFactor !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.reserveFactor, 18).atomics);
    }
    if (message.collateralWeight !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.collateralWeight, 18).atomics);
    }
    if (message.liquidationThreshold !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.liquidationThreshold, 18).atomics);
    }
    if (message.baseBorrowRate !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.baseBorrowRate, 18).atomics);
    }
    if (message.kinkBorrowRate !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.kinkBorrowRate, 18).atomics);
    }
    if (message.maxBorrowRate !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.maxBorrowRate, 18).atomics);
    }
    if (message.kinkUtilization !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.kinkUtilization, 18).atomics);
    }
    if (message.liquidationIncentive !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.liquidationIncentive, 18).atomics);
    }
    if (message.symbolDenom !== "") {
      writer.uint32(82).string(message.symbolDenom);
    }
    if (message.exponent !== 0) {
      writer.uint32(88).uint32(message.exponent);
    }
    if (message.enableMsgSupply === true) {
      writer.uint32(96).bool(message.enableMsgSupply);
    }
    if (message.enableMsgBorrow === true) {
      writer.uint32(104).bool(message.enableMsgBorrow);
    }
    if (message.blacklist === true) {
      writer.uint32(112).bool(message.blacklist);
    }
    if (message.maxCollateralShare !== "") {
      writer.uint32(122).string(Decimal.fromUserInput(message.maxCollateralShare, 18).atomics);
    }
    if (message.maxSupplyUtilization !== "") {
      writer.uint32(130).string(Decimal.fromUserInput(message.maxSupplyUtilization, 18).atomics);
    }
    if (message.minCollateralLiquidity !== "") {
      writer.uint32(138).string(Decimal.fromUserInput(message.minCollateralLiquidity, 18).atomics);
    }
    if (message.maxSupply !== "") {
      writer.uint32(146).string(message.maxSupply);
    }
    if (message.historicMedians !== 0) {
      writer.uint32(152).uint32(message.historicMedians);
    }
    return writer;
  },
  fromJSON(object: any): Token {
    return {
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      reserveFactor: isSet(object.reserveFactor) ? String(object.reserveFactor) : "",
      collateralWeight: isSet(object.collateralWeight) ? String(object.collateralWeight) : "",
      liquidationThreshold: isSet(object.liquidationThreshold) ? String(object.liquidationThreshold) : "",
      baseBorrowRate: isSet(object.baseBorrowRate) ? String(object.baseBorrowRate) : "",
      kinkBorrowRate: isSet(object.kinkBorrowRate) ? String(object.kinkBorrowRate) : "",
      maxBorrowRate: isSet(object.maxBorrowRate) ? String(object.maxBorrowRate) : "",
      kinkUtilization: isSet(object.kinkUtilization) ? String(object.kinkUtilization) : "",
      liquidationIncentive: isSet(object.liquidationIncentive) ? String(object.liquidationIncentive) : "",
      symbolDenom: isSet(object.symbolDenom) ? String(object.symbolDenom) : "",
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
      enableMsgSupply: isSet(object.enableMsgSupply) ? Boolean(object.enableMsgSupply) : false,
      enableMsgBorrow: isSet(object.enableMsgBorrow) ? Boolean(object.enableMsgBorrow) : false,
      blacklist: isSet(object.blacklist) ? Boolean(object.blacklist) : false,
      maxCollateralShare: isSet(object.maxCollateralShare) ? String(object.maxCollateralShare) : "",
      maxSupplyUtilization: isSet(object.maxSupplyUtilization) ? String(object.maxSupplyUtilization) : "",
      minCollateralLiquidity: isSet(object.minCollateralLiquidity) ? String(object.minCollateralLiquidity) : "",
      maxSupply: isSet(object.maxSupply) ? String(object.maxSupply) : "",
      historicMedians: isSet(object.historicMedians) ? Number(object.historicMedians) : 0
    };
  },
  fromPartial(object: Partial<Token>): Token {
    const message = createBaseToken();
    message.baseDenom = object.baseDenom ?? "";
    message.reserveFactor = object.reserveFactor ?? "";
    message.collateralWeight = object.collateralWeight ?? "";
    message.liquidationThreshold = object.liquidationThreshold ?? "";
    message.baseBorrowRate = object.baseBorrowRate ?? "";
    message.kinkBorrowRate = object.kinkBorrowRate ?? "";
    message.maxBorrowRate = object.maxBorrowRate ?? "";
    message.kinkUtilization = object.kinkUtilization ?? "";
    message.liquidationIncentive = object.liquidationIncentive ?? "";
    message.symbolDenom = object.symbolDenom ?? "";
    message.exponent = object.exponent ?? 0;
    message.enableMsgSupply = object.enableMsgSupply ?? false;
    message.enableMsgBorrow = object.enableMsgBorrow ?? false;
    message.blacklist = object.blacklist ?? false;
    message.maxCollateralShare = object.maxCollateralShare ?? "";
    message.maxSupplyUtilization = object.maxSupplyUtilization ?? "";
    message.minCollateralLiquidity = object.minCollateralLiquidity ?? "";
    message.maxSupply = object.maxSupply ?? "";
    message.historicMedians = object.historicMedians ?? 0;
    return message;
  },
  fromAmino(object: TokenAmino): Token {
    return {
      baseDenom: object.base_denom,
      reserveFactor: object.reserve_factor,
      collateralWeight: object.collateral_weight,
      liquidationThreshold: object.liquidation_threshold,
      baseBorrowRate: object.base_borrow_rate,
      kinkBorrowRate: object.kink_borrow_rate,
      maxBorrowRate: object.max_borrow_rate,
      kinkUtilization: object.kink_utilization,
      liquidationIncentive: object.liquidation_incentive,
      symbolDenom: object.symbol_denom,
      exponent: object.exponent,
      enableMsgSupply: object.enable_msg_supply,
      enableMsgBorrow: object.enable_msg_borrow,
      blacklist: object.blacklist,
      maxCollateralShare: object.max_collateral_share,
      maxSupplyUtilization: object.max_supply_utilization,
      minCollateralLiquidity: object.min_collateral_liquidity,
      maxSupply: object.max_supply,
      historicMedians: object.historic_medians
    };
  },
  toAmino(message: Token): TokenAmino {
    const obj: any = {};
    obj.base_denom = message.baseDenom;
    obj.reserve_factor = message.reserveFactor;
    obj.collateral_weight = message.collateralWeight;
    obj.liquidation_threshold = message.liquidationThreshold;
    obj.base_borrow_rate = message.baseBorrowRate;
    obj.kink_borrow_rate = message.kinkBorrowRate;
    obj.max_borrow_rate = message.maxBorrowRate;
    obj.kink_utilization = message.kinkUtilization;
    obj.liquidation_incentive = message.liquidationIncentive;
    obj.symbol_denom = message.symbolDenom;
    obj.exponent = message.exponent;
    obj.enable_msg_supply = message.enableMsgSupply;
    obj.enable_msg_borrow = message.enableMsgBorrow;
    obj.blacklist = message.blacklist;
    obj.max_collateral_share = message.maxCollateralShare;
    obj.max_supply_utilization = message.maxSupplyUtilization;
    obj.min_collateral_liquidity = message.minCollateralLiquidity;
    obj.max_supply = message.maxSupply;
    obj.historic_medians = message.historicMedians;
    return obj;
  },
  fromAminoMsg(object: TokenAminoMsg): Token {
    return Token.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenProtoMsg): Token {
    return Token.decode(message.value);
  },
  toProto(message: Token): Uint8Array {
    return Token.encode(message).finish();
  },
  toProtoMsg(message: Token): TokenProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.Token",
      value: Token.encode(message).finish()
    };
  }
};