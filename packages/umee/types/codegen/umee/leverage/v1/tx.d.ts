import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Token, TokenSDKType } from "./leverage";
import * as _m0 from "protobufjs/minimal";
/** MsgSupply represents a user's request to supply assets to the module. */
export interface MsgSupply {
    /** Supplier is the account address supplying assets and the signer of the message. */
    supplier: string;
    asset?: Coin;
}
/** MsgSupply represents a user's request to supply assets to the module. */
export interface MsgSupplySDKType {
    supplier: string;
    asset?: CoinSDKType;
}
/**
 * MsgWithdraw represents a user's request to withdraw supplied assets.
 * Asset must be a uToken.
 */
export interface MsgWithdraw {
    /** Supplier is the account address withdrawing assets and the signer of the message. */
    supplier: string;
    asset?: Coin;
}
/**
 * MsgWithdraw represents a user's request to withdraw supplied assets.
 * Asset must be a uToken.
 */
export interface MsgWithdrawSDKType {
    supplier: string;
    asset?: CoinSDKType;
}
/** MsgMaxWithdraw represents a user's request to withdraw the maximum valid amount of supplied assets. */
export interface MsgMaxWithdraw {
    /** Supplier is the account address withdrawing assets and the signer of the message. */
    supplier: string;
    /** Denom is base token denom to withdraw */
    denom: string;
}
/** MsgMaxWithdraw represents a user's request to withdraw the maximum valid amount of supplied assets. */
export interface MsgMaxWithdrawSDKType {
    supplier: string;
    denom: string;
}
/**
 * MsgCollateralize represents a user's request to enable selected
 * uTokens as collateral.
 */
export interface MsgCollateralize {
    /** Borrower is the account address adding collateral and the signer of the message. */
    borrower: string;
    asset?: Coin;
}
/**
 * MsgCollateralize represents a user's request to enable selected
 * uTokens as collateral.
 */
export interface MsgCollateralizeSDKType {
    borrower: string;
    asset?: CoinSDKType;
}
/**
 * MsgDecollateralize represents a user's request to disable selected
 * uTokens as collateral.
 */
export interface MsgDecollateralize {
    /** Borrower is the account address removing collateral and the signer of the message. */
    borrower: string;
    asset?: Coin;
}
/**
 * MsgDecollateralize represents a user's request to disable selected
 * uTokens as collateral.
 */
export interface MsgDecollateralizeSDKType {
    borrower: string;
    asset?: CoinSDKType;
}
/**
 * MsgBorrow represents a user's request to borrow a base asset type
 * from the module.
 */
export interface MsgBorrow {
    /**
     * Borrower is the account address taking a loan and the signer
     * of the message.
     */
    borrower: string;
    asset?: Coin;
}
/**
 * MsgBorrow represents a user's request to borrow a base asset type
 * from the module.
 */
export interface MsgBorrowSDKType {
    borrower: string;
    asset?: CoinSDKType;
}
/**
 * MsgMaxBorrow represents a user's request to borrow a base asset type
 * from the module, using the maximum available amount.
 */
export interface MsgMaxBorrow {
    /**
     * Borrower is the account address taking a loan and the signer
     * of the message.
     */
    borrower: string;
    denom: string;
}
/**
 * MsgMaxBorrow represents a user's request to borrow a base asset type
 * from the module, using the maximum available amount.
 */
export interface MsgMaxBorrowSDKType {
    borrower: string;
    denom: string;
}
/**
 * MsgRepay represents a user's request to repay a borrowed base asset
 * type to the module.
 */
export interface MsgRepay {
    /**
     * Borrower is the account address repaying a loan and the signer
     * of the message.
     */
    borrower: string;
    asset?: Coin;
}
/**
 * MsgRepay represents a user's request to repay a borrowed base asset
 * type to the module.
 */
export interface MsgRepaySDKType {
    borrower: string;
    asset?: CoinSDKType;
}
/** MsgLiquidate is the request structure for the Liquidate RPC. */
export interface MsgLiquidate {
    /**
     * Liquidator is the account address performing a liquidation and the signer
     * of the message.
     */
    liquidator: string;
    /**
     * Borrower is the account whose borrow is being repaid, and collateral consumed,
     * by the liquidation. It does not sign the message.
     */
    borrower: string;
    /**
     * Repayment is the maximum amount of base tokens that the liquidator is willing
     * to repay.
     */
    repayment?: Coin;
    /**
     * RewardDenom is the denom that the liquidator will receive as a liquidation reward.
     * If it is a uToken, the liquidator will receive uTokens from the borrower's
     * collateral. If it is a base token, the uTokens will be redeemed directly at
     * a reduced Liquidation Incentive, and the liquidator will receive base tokens.
     */
    rewardDenom: string;
}
/** MsgLiquidate is the request structure for the Liquidate RPC. */
export interface MsgLiquidateSDKType {
    liquidator: string;
    borrower: string;
    repayment?: CoinSDKType;
    reward_denom: string;
}
/** MsgLeveragedLiquidate is the request structure for the LeveragedLiquidate RPC. */
export interface MsgLeveragedLiquidate {
    /**
     * Liquidator is the account address performing a liquidation and the signer
     * of the message.
     */
    liquidator: string;
    /**
     * Borrower is the account whose borrow is being repaid, and collateral consumed,
     * by the liquidation. It does not sign the message.
     */
    borrower: string;
    /**
     * RepayDenom is the base token that the liquidator will borrow in order to repay on behalf of
     * the borrower.
     */
    repayDenom: string;
    /**
     * RewardDenom is the uToken denom that the liquidator will receive as a liquidation reward
     * and immediately collateralize.
     */
    rewardDenom: string;
}
/** MsgLeveragedLiquidate is the request structure for the LeveragedLiquidate RPC. */
export interface MsgLeveragedLiquidateSDKType {
    liquidator: string;
    borrower: string;
    repay_denom: string;
    reward_denom: string;
}
/** MsgSupplyCollateral represents a user's request to supply and collateralize assets to the module. */
export interface MsgSupplyCollateral {
    /** Supplier is the account address supplying assets and the signer of the message. */
    supplier: string;
    asset?: Coin;
}
/** MsgSupplyCollateral represents a user's request to supply and collateralize assets to the module. */
export interface MsgSupplyCollateralSDKType {
    supplier: string;
    asset?: CoinSDKType;
}
/** MsgSupplyResponse defines the Msg/Supply response type. */
export interface MsgSupplyResponse {
    /** Received is the amount of uTokens received. */
    received?: Coin;
}
/** MsgSupplyResponse defines the Msg/Supply response type. */
export interface MsgSupplyResponseSDKType {
    received?: CoinSDKType;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponse {
    /** Received is the amount of base tokens received. */
    received?: Coin;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseSDKType {
    received?: CoinSDKType;
}
/** MsgMaxWithdrawResponse defines the Msg/MaxWithdraw response type. */
export interface MsgMaxWithdrawResponse {
    /** Withdrawn is the amount of uTokens withdrawn. */
    withdrawn?: Coin;
    /** Received is the amount of base tokens received. */
    received?: Coin;
}
/** MsgMaxWithdrawResponse defines the Msg/MaxWithdraw response type. */
export interface MsgMaxWithdrawResponseSDKType {
    withdrawn?: CoinSDKType;
    received?: CoinSDKType;
}
/** MsgCollateralizeResponse defines the Msg/Collateralize response type. */
export interface MsgCollateralizeResponse {
}
/** MsgCollateralizeResponse defines the Msg/Collateralize response type. */
export interface MsgCollateralizeResponseSDKType {
}
/** MsgDecollateralizeResponse defines the Msg/Decollateralize response type. */
export interface MsgDecollateralizeResponse {
}
/** MsgDecollateralizeResponse defines the Msg/Decollateralize response type. */
export interface MsgDecollateralizeResponseSDKType {
}
/** MsgBorrowResponse defines the Msg/Borrow response type. */
export interface MsgBorrowResponse {
}
/** MsgBorrowResponse defines the Msg/Borrow response type. */
export interface MsgBorrowResponseSDKType {
}
/** MsgMaxBorrowResponse defines the Msg/MaxBorrow response type. */
export interface MsgMaxBorrowResponse {
    /** Borrowed is the amount of tokens borrowed. */
    borrowed?: Coin;
}
/** MsgMaxBorrowResponse defines the Msg/MaxBorrow response type. */
export interface MsgMaxBorrowResponseSDKType {
    borrowed?: CoinSDKType;
}
/** MsgRepayResponse defines the Msg/Repay response type. */
export interface MsgRepayResponse {
    /** Repaid is the amount of base tokens repaid to the module. */
    repaid?: Coin;
}
/** MsgRepayResponse defines the Msg/Repay response type. */
export interface MsgRepayResponseSDKType {
    repaid?: CoinSDKType;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponse {
    /**
     * Repaid is the amount of borrowed base tokens that the liquidator repaid
     * to the module on behalf of the borrower.
     */
    repaid?: Coin;
    /**
     * Collateral is the amount of the borrower's uToken collateral that
     * was liquidated.
     */
    collateral?: Coin;
    /**
     * Reward is the amount of base tokens that the liquidator received from
     * the module as reward for the liquidation.
     */
    reward?: Coin;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponseSDKType {
    repaid?: CoinSDKType;
    collateral?: CoinSDKType;
    reward?: CoinSDKType;
}
/** MsgLeveragedLiquidateResponse defines the Msg/LeveragedLiquidate response type. */
export interface MsgLeveragedLiquidateResponse {
    /**
     * Repaid is the amount of base tokens that the liquidator borrowed and repaid
     * to the module on behalf of the borrower.
     */
    repaid?: Coin;
    /**
     * Reward is the amount of collateral that the liquidator gained
     * as reward for the liquidation.
     */
    reward?: Coin;
}
/** MsgLeveragedLiquidateResponse defines the Msg/LeveragedLiquidate response type. */
export interface MsgLeveragedLiquidateResponseSDKType {
    repaid?: CoinSDKType;
    reward?: CoinSDKType;
}
/** MsgSupplyCollateralResponse defines the Msg/SupplyCollateral response type. */
export interface MsgSupplyCollateralResponse {
    /** Collateralized is the amount of uTokens collateralized. */
    collateralized?: Coin;
}
/** MsgSupplyCollateralResponse defines the Msg/SupplyCollateral response type. */
export interface MsgSupplyCollateralResponseSDKType {
    collateralized?: CoinSDKType;
}
/** MsgGovUpdateRegistry defines the Msg/GovUpdateRegistry request type. */
export interface MsgGovUpdateRegistry {
    /** authority is the address of the governance account. */
    authority: string;
    title: string;
    description: string;
    /** add_tokens defines new token settings. */
    addTokens: Token[];
    /** update_tokens defines the new settings for existed tokens. */
    updateTokens: Token[];
}
/** MsgGovUpdateRegistry defines the Msg/GovUpdateRegistry request type. */
export interface MsgGovUpdateRegistrySDKType {
    authority: string;
    title: string;
    description: string;
    add_tokens: TokenSDKType[];
    update_tokens: TokenSDKType[];
}
/** MsgGovUpdateRegistryResponse defines the Msg/GovUpdateRegistry response type. */
export interface MsgGovUpdateRegistryResponse {
}
/** MsgGovUpdateRegistryResponse defines the Msg/GovUpdateRegistry response type. */
export interface MsgGovUpdateRegistryResponseSDKType {
}
export declare const MsgSupply: {
    encode(message: MsgSupply, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSupply;
    fromPartial(object: Partial<MsgSupply>): MsgSupply;
};
export declare const MsgWithdraw: {
    encode(message: MsgWithdraw, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgWithdraw;
    fromPartial(object: Partial<MsgWithdraw>): MsgWithdraw;
};
export declare const MsgMaxWithdraw: {
    encode(message: MsgMaxWithdraw, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgMaxWithdraw;
    fromPartial(object: Partial<MsgMaxWithdraw>): MsgMaxWithdraw;
};
export declare const MsgCollateralize: {
    encode(message: MsgCollateralize, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCollateralize;
    fromPartial(object: Partial<MsgCollateralize>): MsgCollateralize;
};
export declare const MsgDecollateralize: {
    encode(message: MsgDecollateralize, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDecollateralize;
    fromPartial(object: Partial<MsgDecollateralize>): MsgDecollateralize;
};
export declare const MsgBorrow: {
    encode(message: MsgBorrow, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBorrow;
    fromPartial(object: Partial<MsgBorrow>): MsgBorrow;
};
export declare const MsgMaxBorrow: {
    encode(message: MsgMaxBorrow, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgMaxBorrow;
    fromPartial(object: Partial<MsgMaxBorrow>): MsgMaxBorrow;
};
export declare const MsgRepay: {
    encode(message: MsgRepay, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRepay;
    fromPartial(object: Partial<MsgRepay>): MsgRepay;
};
export declare const MsgLiquidate: {
    encode(message: MsgLiquidate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgLiquidate;
    fromPartial(object: Partial<MsgLiquidate>): MsgLiquidate;
};
export declare const MsgLeveragedLiquidate: {
    encode(message: MsgLeveragedLiquidate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgLeveragedLiquidate;
    fromPartial(object: Partial<MsgLeveragedLiquidate>): MsgLeveragedLiquidate;
};
export declare const MsgSupplyCollateral: {
    encode(message: MsgSupplyCollateral, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSupplyCollateral;
    fromPartial(object: Partial<MsgSupplyCollateral>): MsgSupplyCollateral;
};
export declare const MsgSupplyResponse: {
    encode(message: MsgSupplyResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSupplyResponse;
    fromPartial(object: Partial<MsgSupplyResponse>): MsgSupplyResponse;
};
export declare const MsgWithdrawResponse: {
    encode(message: MsgWithdrawResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgWithdrawResponse;
    fromPartial(object: Partial<MsgWithdrawResponse>): MsgWithdrawResponse;
};
export declare const MsgMaxWithdrawResponse: {
    encode(message: MsgMaxWithdrawResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgMaxWithdrawResponse;
    fromPartial(object: Partial<MsgMaxWithdrawResponse>): MsgMaxWithdrawResponse;
};
export declare const MsgCollateralizeResponse: {
    encode(_: MsgCollateralizeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCollateralizeResponse;
    fromPartial(_: Partial<MsgCollateralizeResponse>): MsgCollateralizeResponse;
};
export declare const MsgDecollateralizeResponse: {
    encode(_: MsgDecollateralizeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDecollateralizeResponse;
    fromPartial(_: Partial<MsgDecollateralizeResponse>): MsgDecollateralizeResponse;
};
export declare const MsgBorrowResponse: {
    encode(_: MsgBorrowResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgBorrowResponse;
    fromPartial(_: Partial<MsgBorrowResponse>): MsgBorrowResponse;
};
export declare const MsgMaxBorrowResponse: {
    encode(message: MsgMaxBorrowResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgMaxBorrowResponse;
    fromPartial(object: Partial<MsgMaxBorrowResponse>): MsgMaxBorrowResponse;
};
export declare const MsgRepayResponse: {
    encode(message: MsgRepayResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRepayResponse;
    fromPartial(object: Partial<MsgRepayResponse>): MsgRepayResponse;
};
export declare const MsgLiquidateResponse: {
    encode(message: MsgLiquidateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgLiquidateResponse;
    fromPartial(object: Partial<MsgLiquidateResponse>): MsgLiquidateResponse;
};
export declare const MsgLeveragedLiquidateResponse: {
    encode(message: MsgLeveragedLiquidateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgLeveragedLiquidateResponse;
    fromPartial(object: Partial<MsgLeveragedLiquidateResponse>): MsgLeveragedLiquidateResponse;
};
export declare const MsgSupplyCollateralResponse: {
    encode(message: MsgSupplyCollateralResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSupplyCollateralResponse;
    fromPartial(object: Partial<MsgSupplyCollateralResponse>): MsgSupplyCollateralResponse;
};
export declare const MsgGovUpdateRegistry: {
    encode(message: MsgGovUpdateRegistry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgGovUpdateRegistry;
    fromPartial(object: Partial<MsgGovUpdateRegistry>): MsgGovUpdateRegistry;
};
export declare const MsgGovUpdateRegistryResponse: {
    encode(_: MsgGovUpdateRegistryResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgGovUpdateRegistryResponse;
    fromPartial(_: Partial<MsgGovUpdateRegistryResponse>): MsgGovUpdateRegistryResponse;
};
