import { Rpc } from "../../../helpers";
import { MsgSupply, MsgSupplyResponse, MsgWithdraw, MsgWithdrawResponse, MsgMaxWithdraw, MsgMaxWithdrawResponse, MsgCollateralize, MsgCollateralizeResponse, MsgDecollateralize, MsgDecollateralizeResponse, MsgBorrow, MsgBorrowResponse, MsgMaxBorrow, MsgMaxBorrowResponse, MsgRepay, MsgRepayResponse, MsgLiquidate, MsgLiquidateResponse, MsgLeveragedLiquidate, MsgLeveragedLiquidateResponse, MsgSupplyCollateral, MsgSupplyCollateralResponse, MsgGovUpdateRegistry, MsgGovUpdateRegistryResponse, MsgGovUpdateSpecialAssets, MsgGovUpdateSpecialAssetsResponse, MsgGovSetParams, MsgGovSetParamsResponse } from "./tx";
/** Msg defines the x/leverage module's Msg service. */
export interface Msg {
    /**
     * Supply moves tokens from user balance to the module for lending or collateral.
     * The user receives uTokens in return.
     */
    supply(request: MsgSupply): Promise<MsgSupplyResponse>;
    /**
     * Withdraw moves previously supplied tokens from the module back to the user balance in
     * exchange for burning uTokens.
     */
    withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
    /**
     * MaxWithdraw moves previously supplied tokens from the module back to the user balance in
     * exchange for burning uTokens. It automatically calculates the maximum valid amount to withdraw.
     * Zero is returned if no more tokens can be withdrawn.
     */
    maxWithdraw(request: MsgMaxWithdraw): Promise<MsgMaxWithdrawResponse>;
    /** Collateralize enables selected uTokens as collateral, which moves them to the module. */
    collateralize(request: MsgCollateralize): Promise<MsgCollateralizeResponse>;
    /**
     * Decollateralize disables selected uTokens as collateral. They are returned to the user's
     * balance from the module.
     */
    decollateralize(request: MsgDecollateralize): Promise<MsgDecollateralizeResponse>;
    /** Borrow allows a user to borrow tokens from the module if they have sufficient collateral. */
    borrow(request: MsgBorrow): Promise<MsgBorrowResponse>;
    /**
     * MaxBorrow allows a user to borrow the maximum amount of tokens their collateral will allow.
     * Zero is returned if no more can be borrowed.
     */
    maxBorrow(request: MsgMaxBorrow): Promise<MsgMaxBorrowResponse>;
    /** Repay allows a user to repay previously borrowed tokens and interest. */
    repay(request: MsgRepay): Promise<MsgRepayResponse>;
    /**
     * Liquidate allows a user to repay a different user's borrowed coins in exchange for some
     * of the target's collateral.
     */
    liquidate(request: MsgLiquidate): Promise<MsgLiquidateResponse>;
    /**
     * LeveragedLiquidate allows a user to repay a different user's borrowed coins in exchange for some
     * of the target's collateral. For leveraged liquidations, the tokens to repay are borrowed instead of
     * being taken from the liquidator's wallet, and the reward is immediately collateralized. Borrow
     * limit checks for the liquidator are deferred until after the reward is collateralized, allowing
     * this initial borrow to exceed the liquidator's borrow limit as long as it is healthy by the end
     * of the transaction. Repay amount is calculated automatically, so the liquidator only specifies
     * repay and reward token denoms. For safety, the liquidator cannot exceed 80% of their borrow limit when
     * executing this transaction, instead of the regular 100%. Also allows repayment and reward denoms to
     * be left blank - if not specified, the module will automatically select the first (alphabetically by denom)
     * borrow and/or collateral on the target account and the proceed normally.
     * After v6.0, includes a MaxRepay field which limits repay value in USD. To prevent dust exploits, this
     * value cannot be below $1.00
     */
    leveragedLiquidate(request: MsgLeveragedLiquidate): Promise<MsgLeveragedLiquidateResponse>;
    /** SupplyCollateral combines the Supply and Collateralize actions. */
    supplyCollateral(request: MsgSupplyCollateral): Promise<MsgSupplyCollateralResponse>;
    /**
     * GovUpdateRegistry adds new tokens to the token registry or
     * updates existing tokens with new settings.
     */
    govUpdateRegistry(request: MsgGovUpdateRegistry): Promise<MsgGovUpdateRegistryResponse>;
    /**
     * GovUpdateSpecialAssets adds, updates, or removes special asset pairs. Note that a special asset
     * pair can be removed by setting its special collateral weight to negative one. Also allows for the creation
     * of sets of assets, where each asset in the set forms a special asset pair with all of the others.
     */
    govUpdateSpecialAssets(request: MsgGovUpdateSpecialAssets): Promise<MsgGovUpdateSpecialAssetsResponse>;
    /** GovSetParams is used by governance proposals to update parameters. */
    govSetParams(request: MsgGovSetParams): Promise<MsgGovSetParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    supply(request: MsgSupply): Promise<MsgSupplyResponse>;
    withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
    maxWithdraw(request: MsgMaxWithdraw): Promise<MsgMaxWithdrawResponse>;
    collateralize(request: MsgCollateralize): Promise<MsgCollateralizeResponse>;
    decollateralize(request: MsgDecollateralize): Promise<MsgDecollateralizeResponse>;
    borrow(request: MsgBorrow): Promise<MsgBorrowResponse>;
    maxBorrow(request: MsgMaxBorrow): Promise<MsgMaxBorrowResponse>;
    repay(request: MsgRepay): Promise<MsgRepayResponse>;
    liquidate(request: MsgLiquidate): Promise<MsgLiquidateResponse>;
    leveragedLiquidate(request: MsgLeveragedLiquidate): Promise<MsgLeveragedLiquidateResponse>;
    supplyCollateral(request: MsgSupplyCollateral): Promise<MsgSupplyCollateralResponse>;
    govUpdateRegistry(request: MsgGovUpdateRegistry): Promise<MsgGovUpdateRegistryResponse>;
    govUpdateSpecialAssets(request: MsgGovUpdateSpecialAssets): Promise<MsgGovUpdateSpecialAssetsResponse>;
    govSetParams(request: MsgGovSetParams): Promise<MsgGovSetParamsResponse>;
}
