import { BinaryWriter } from "../../../binary";
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
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const Token: {
    typeUrl: string;
    encode(message: Token, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Token;
    fromPartial(object: Partial<Token>): Token;
    fromAmino(object: TokenAmino): Token;
    toAmino(message: Token): TokenAmino;
    fromAminoMsg(object: TokenAminoMsg): Token;
    fromProtoMsg(message: TokenProtoMsg): Token;
    toProto(message: Token): Uint8Array;
    toProtoMsg(message: Token): TokenProtoMsg;
};
