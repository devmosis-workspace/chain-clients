import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Token, TokenAmino, TokenSDKType } from "./leverage";
import { BinaryWriter } from "../../../binary";
/** MsgSupply represents a user's request to supply assets to the module. */
export interface MsgSupply {
    /** Supplier is the account address supplying assets and the signer of the message. */
    supplier: string;
    asset: Coin;
}
export interface MsgSupplyProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgSupply";
    value: Uint8Array;
}
/** MsgSupply represents a user's request to supply assets to the module. */
export interface MsgSupplyAmino {
    /** Supplier is the account address supplying assets and the signer of the message. */
    supplier: string;
    asset?: CoinAmino;
}
export interface MsgSupplyAminoMsg {
    type: "/umee.leverage.v1.MsgSupply";
    value: MsgSupplyAmino;
}
/** MsgSupply represents a user's request to supply assets to the module. */
export interface MsgSupplySDKType {
    supplier: string;
    asset: CoinSDKType;
}
/**
 * MsgWithdraw represents a user's request to withdraw supplied assets.
 * Asset must be a uToken.
 */
export interface MsgWithdraw {
    /** Supplier is the account address withdrawing assets and the signer of the message. */
    supplier: string;
    asset: Coin;
}
export interface MsgWithdrawProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgWithdraw";
    value: Uint8Array;
}
/**
 * MsgWithdraw represents a user's request to withdraw supplied assets.
 * Asset must be a uToken.
 */
export interface MsgWithdrawAmino {
    /** Supplier is the account address withdrawing assets and the signer of the message. */
    supplier: string;
    asset?: CoinAmino;
}
export interface MsgWithdrawAminoMsg {
    type: "/umee.leverage.v1.MsgWithdraw";
    value: MsgWithdrawAmino;
}
/**
 * MsgWithdraw represents a user's request to withdraw supplied assets.
 * Asset must be a uToken.
 */
export interface MsgWithdrawSDKType {
    supplier: string;
    asset: CoinSDKType;
}
/** MsgMaxWithdraw represents a user's request to withdraw the maximum valid amount of supplied assets. */
export interface MsgMaxWithdraw {
    /** Supplier is the account address withdrawing assets and the signer of the message. */
    supplier: string;
    /** Denom is base token denom to withdraw */
    denom: string;
}
export interface MsgMaxWithdrawProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgMaxWithdraw";
    value: Uint8Array;
}
/** MsgMaxWithdraw represents a user's request to withdraw the maximum valid amount of supplied assets. */
export interface MsgMaxWithdrawAmino {
    /** Supplier is the account address withdrawing assets and the signer of the message. */
    supplier: string;
    /** Denom is base token denom to withdraw */
    denom: string;
}
export interface MsgMaxWithdrawAminoMsg {
    type: "/umee.leverage.v1.MsgMaxWithdraw";
    value: MsgMaxWithdrawAmino;
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
    asset: Coin;
}
export interface MsgCollateralizeProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgCollateralize";
    value: Uint8Array;
}
/**
 * MsgCollateralize represents a user's request to enable selected
 * uTokens as collateral.
 */
export interface MsgCollateralizeAmino {
    /** Borrower is the account address adding collateral and the signer of the message. */
    borrower: string;
    asset?: CoinAmino;
}
export interface MsgCollateralizeAminoMsg {
    type: "/umee.leverage.v1.MsgCollateralize";
    value: MsgCollateralizeAmino;
}
/**
 * MsgCollateralize represents a user's request to enable selected
 * uTokens as collateral.
 */
export interface MsgCollateralizeSDKType {
    borrower: string;
    asset: CoinSDKType;
}
/**
 * MsgDecollateralize represents a user's request to disable selected
 * uTokens as collateral.
 */
export interface MsgDecollateralize {
    /** Borrower is the account address removing collateral and the signer of the message. */
    borrower: string;
    asset: Coin;
}
export interface MsgDecollateralizeProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgDecollateralize";
    value: Uint8Array;
}
/**
 * MsgDecollateralize represents a user's request to disable selected
 * uTokens as collateral.
 */
export interface MsgDecollateralizeAmino {
    /** Borrower is the account address removing collateral and the signer of the message. */
    borrower: string;
    asset?: CoinAmino;
}
export interface MsgDecollateralizeAminoMsg {
    type: "/umee.leverage.v1.MsgDecollateralize";
    value: MsgDecollateralizeAmino;
}
/**
 * MsgDecollateralize represents a user's request to disable selected
 * uTokens as collateral.
 */
export interface MsgDecollateralizeSDKType {
    borrower: string;
    asset: CoinSDKType;
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
    asset: Coin;
}
export interface MsgBorrowProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgBorrow";
    value: Uint8Array;
}
/**
 * MsgBorrow represents a user's request to borrow a base asset type
 * from the module.
 */
export interface MsgBorrowAmino {
    /**
     * Borrower is the account address taking a loan and the signer
     * of the message.
     */
    borrower: string;
    asset?: CoinAmino;
}
export interface MsgBorrowAminoMsg {
    type: "/umee.leverage.v1.MsgBorrow";
    value: MsgBorrowAmino;
}
/**
 * MsgBorrow represents a user's request to borrow a base asset type
 * from the module.
 */
export interface MsgBorrowSDKType {
    borrower: string;
    asset: CoinSDKType;
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
export interface MsgMaxBorrowProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgMaxBorrow";
    value: Uint8Array;
}
/**
 * MsgMaxBorrow represents a user's request to borrow a base asset type
 * from the module, using the maximum available amount.
 */
export interface MsgMaxBorrowAmino {
    /**
     * Borrower is the account address taking a loan and the signer
     * of the message.
     */
    borrower: string;
    denom: string;
}
export interface MsgMaxBorrowAminoMsg {
    type: "/umee.leverage.v1.MsgMaxBorrow";
    value: MsgMaxBorrowAmino;
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
    asset: Coin;
}
export interface MsgRepayProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgRepay";
    value: Uint8Array;
}
/**
 * MsgRepay represents a user's request to repay a borrowed base asset
 * type to the module.
 */
export interface MsgRepayAmino {
    /**
     * Borrower is the account address repaying a loan and the signer
     * of the message.
     */
    borrower: string;
    asset?: CoinAmino;
}
export interface MsgRepayAminoMsg {
    type: "/umee.leverage.v1.MsgRepay";
    value: MsgRepayAmino;
}
/**
 * MsgRepay represents a user's request to repay a borrowed base asset
 * type to the module.
 */
export interface MsgRepaySDKType {
    borrower: string;
    asset: CoinSDKType;
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
    repayment: Coin;
    /**
     * RewardDenom is the denom that the liquidator will receive as a liquidation reward.
     * If it is a uToken, the liquidator will receive uTokens from the borrower's
     * collateral. If it is a base token, the uTokens will be redeemed directly at
     * a reduced Liquidation Incentive, and the liquidator will receive base tokens.
     */
    rewardDenom: string;
}
export interface MsgLiquidateProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgLiquidate";
    value: Uint8Array;
}
/** MsgLiquidate is the request structure for the Liquidate RPC. */
export interface MsgLiquidateAmino {
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
    repayment?: CoinAmino;
    /**
     * RewardDenom is the denom that the liquidator will receive as a liquidation reward.
     * If it is a uToken, the liquidator will receive uTokens from the borrower's
     * collateral. If it is a base token, the uTokens will be redeemed directly at
     * a reduced Liquidation Incentive, and the liquidator will receive base tokens.
     */
    reward_denom: string;
}
export interface MsgLiquidateAminoMsg {
    type: "/umee.leverage.v1.MsgLiquidate";
    value: MsgLiquidateAmino;
}
/** MsgLiquidate is the request structure for the Liquidate RPC. */
export interface MsgLiquidateSDKType {
    liquidator: string;
    borrower: string;
    repayment: CoinSDKType;
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
export interface MsgLeveragedLiquidateProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgLeveragedLiquidate";
    value: Uint8Array;
}
/** MsgLeveragedLiquidate is the request structure for the LeveragedLiquidate RPC. */
export interface MsgLeveragedLiquidateAmino {
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
    repay_denom: string;
    /**
     * RewardDenom is the uToken denom that the liquidator will receive as a liquidation reward
     * and immediately collateralize.
     */
    reward_denom: string;
}
export interface MsgLeveragedLiquidateAminoMsg {
    type: "/umee.leverage.v1.MsgLeveragedLiquidate";
    value: MsgLeveragedLiquidateAmino;
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
    asset: Coin;
}
export interface MsgSupplyCollateralProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgSupplyCollateral";
    value: Uint8Array;
}
/** MsgSupplyCollateral represents a user's request to supply and collateralize assets to the module. */
export interface MsgSupplyCollateralAmino {
    /** Supplier is the account address supplying assets and the signer of the message. */
    supplier: string;
    asset?: CoinAmino;
}
export interface MsgSupplyCollateralAminoMsg {
    type: "/umee.leverage.v1.MsgSupplyCollateral";
    value: MsgSupplyCollateralAmino;
}
/** MsgSupplyCollateral represents a user's request to supply and collateralize assets to the module. */
export interface MsgSupplyCollateralSDKType {
    supplier: string;
    asset: CoinSDKType;
}
/** MsgSupplyResponse defines the Msg/Supply response type. */
export interface MsgSupplyResponse {
    /** Received is the amount of uTokens received. */
    received: Coin;
}
export interface MsgSupplyResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgSupplyResponse";
    value: Uint8Array;
}
/** MsgSupplyResponse defines the Msg/Supply response type. */
export interface MsgSupplyResponseAmino {
    /** Received is the amount of uTokens received. */
    received?: CoinAmino;
}
export interface MsgSupplyResponseAminoMsg {
    type: "/umee.leverage.v1.MsgSupplyResponse";
    value: MsgSupplyResponseAmino;
}
/** MsgSupplyResponse defines the Msg/Supply response type. */
export interface MsgSupplyResponseSDKType {
    received: CoinSDKType;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponse {
    /** Received is the amount of base tokens received. */
    received: Coin;
}
export interface MsgWithdrawResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgWithdrawResponse";
    value: Uint8Array;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseAmino {
    /** Received is the amount of base tokens received. */
    received?: CoinAmino;
}
export interface MsgWithdrawResponseAminoMsg {
    type: "/umee.leverage.v1.MsgWithdrawResponse";
    value: MsgWithdrawResponseAmino;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseSDKType {
    received: CoinSDKType;
}
/** MsgMaxWithdrawResponse defines the Msg/MaxWithdraw response type. */
export interface MsgMaxWithdrawResponse {
    /** Withdrawn is the amount of uTokens withdrawn. */
    withdrawn: Coin;
    /** Received is the amount of base tokens received. */
    received: Coin;
}
export interface MsgMaxWithdrawResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgMaxWithdrawResponse";
    value: Uint8Array;
}
/** MsgMaxWithdrawResponse defines the Msg/MaxWithdraw response type. */
export interface MsgMaxWithdrawResponseAmino {
    /** Withdrawn is the amount of uTokens withdrawn. */
    withdrawn?: CoinAmino;
    /** Received is the amount of base tokens received. */
    received?: CoinAmino;
}
export interface MsgMaxWithdrawResponseAminoMsg {
    type: "/umee.leverage.v1.MsgMaxWithdrawResponse";
    value: MsgMaxWithdrawResponseAmino;
}
/** MsgMaxWithdrawResponse defines the Msg/MaxWithdraw response type. */
export interface MsgMaxWithdrawResponseSDKType {
    withdrawn: CoinSDKType;
    received: CoinSDKType;
}
/** MsgCollateralizeResponse defines the Msg/Collateralize response type. */
export interface MsgCollateralizeResponse {
}
export interface MsgCollateralizeResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgCollateralizeResponse";
    value: Uint8Array;
}
/** MsgCollateralizeResponse defines the Msg/Collateralize response type. */
export interface MsgCollateralizeResponseAmino {
}
export interface MsgCollateralizeResponseAminoMsg {
    type: "/umee.leverage.v1.MsgCollateralizeResponse";
    value: MsgCollateralizeResponseAmino;
}
/** MsgCollateralizeResponse defines the Msg/Collateralize response type. */
export interface MsgCollateralizeResponseSDKType {
}
/** MsgDecollateralizeResponse defines the Msg/Decollateralize response type. */
export interface MsgDecollateralizeResponse {
}
export interface MsgDecollateralizeResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgDecollateralizeResponse";
    value: Uint8Array;
}
/** MsgDecollateralizeResponse defines the Msg/Decollateralize response type. */
export interface MsgDecollateralizeResponseAmino {
}
export interface MsgDecollateralizeResponseAminoMsg {
    type: "/umee.leverage.v1.MsgDecollateralizeResponse";
    value: MsgDecollateralizeResponseAmino;
}
/** MsgDecollateralizeResponse defines the Msg/Decollateralize response type. */
export interface MsgDecollateralizeResponseSDKType {
}
/** MsgBorrowResponse defines the Msg/Borrow response type. */
export interface MsgBorrowResponse {
}
export interface MsgBorrowResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgBorrowResponse";
    value: Uint8Array;
}
/** MsgBorrowResponse defines the Msg/Borrow response type. */
export interface MsgBorrowResponseAmino {
}
export interface MsgBorrowResponseAminoMsg {
    type: "/umee.leverage.v1.MsgBorrowResponse";
    value: MsgBorrowResponseAmino;
}
/** MsgBorrowResponse defines the Msg/Borrow response type. */
export interface MsgBorrowResponseSDKType {
}
/** MsgMaxBorrowResponse defines the Msg/MaxBorrow response type. */
export interface MsgMaxBorrowResponse {
    /** Borrowed is the amount of tokens borrowed. */
    borrowed: Coin;
}
export interface MsgMaxBorrowResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgMaxBorrowResponse";
    value: Uint8Array;
}
/** MsgMaxBorrowResponse defines the Msg/MaxBorrow response type. */
export interface MsgMaxBorrowResponseAmino {
    /** Borrowed is the amount of tokens borrowed. */
    borrowed?: CoinAmino;
}
export interface MsgMaxBorrowResponseAminoMsg {
    type: "/umee.leverage.v1.MsgMaxBorrowResponse";
    value: MsgMaxBorrowResponseAmino;
}
/** MsgMaxBorrowResponse defines the Msg/MaxBorrow response type. */
export interface MsgMaxBorrowResponseSDKType {
    borrowed: CoinSDKType;
}
/** MsgRepayResponse defines the Msg/Repay response type. */
export interface MsgRepayResponse {
    /** Repaid is the amount of base tokens repaid to the module. */
    repaid: Coin;
}
export interface MsgRepayResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgRepayResponse";
    value: Uint8Array;
}
/** MsgRepayResponse defines the Msg/Repay response type. */
export interface MsgRepayResponseAmino {
    /** Repaid is the amount of base tokens repaid to the module. */
    repaid?: CoinAmino;
}
export interface MsgRepayResponseAminoMsg {
    type: "/umee.leverage.v1.MsgRepayResponse";
    value: MsgRepayResponseAmino;
}
/** MsgRepayResponse defines the Msg/Repay response type. */
export interface MsgRepayResponseSDKType {
    repaid: CoinSDKType;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponse {
    /**
     * Repaid is the amount of borrowed base tokens that the liquidator repaid
     * to the module on behalf of the borrower.
     */
    repaid: Coin;
    /**
     * Collateral is the amount of the borrower's uToken collateral that
     * was liquidated.
     */
    collateral: Coin;
    /**
     * Reward is the amount of base tokens that the liquidator received from
     * the module as reward for the liquidation.
     */
    reward: Coin;
}
export interface MsgLiquidateResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgLiquidateResponse";
    value: Uint8Array;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponseAmino {
    /**
     * Repaid is the amount of borrowed base tokens that the liquidator repaid
     * to the module on behalf of the borrower.
     */
    repaid?: CoinAmino;
    /**
     * Collateral is the amount of the borrower's uToken collateral that
     * was liquidated.
     */
    collateral?: CoinAmino;
    /**
     * Reward is the amount of base tokens that the liquidator received from
     * the module as reward for the liquidation.
     */
    reward?: CoinAmino;
}
export interface MsgLiquidateResponseAminoMsg {
    type: "/umee.leverage.v1.MsgLiquidateResponse";
    value: MsgLiquidateResponseAmino;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponseSDKType {
    repaid: CoinSDKType;
    collateral: CoinSDKType;
    reward: CoinSDKType;
}
/** MsgLeveragedLiquidateResponse defines the Msg/LeveragedLiquidate response type. */
export interface MsgLeveragedLiquidateResponse {
    /**
     * Repaid is the amount of base tokens that the liquidator borrowed and repaid
     * to the module on behalf of the borrower.
     */
    repaid: Coin;
    /**
     * Reward is the amount of collateral that the liquidator gained
     * as reward for the liquidation.
     */
    reward: Coin;
}
export interface MsgLeveragedLiquidateResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgLeveragedLiquidateResponse";
    value: Uint8Array;
}
/** MsgLeveragedLiquidateResponse defines the Msg/LeveragedLiquidate response type. */
export interface MsgLeveragedLiquidateResponseAmino {
    /**
     * Repaid is the amount of base tokens that the liquidator borrowed and repaid
     * to the module on behalf of the borrower.
     */
    repaid?: CoinAmino;
    /**
     * Reward is the amount of collateral that the liquidator gained
     * as reward for the liquidation.
     */
    reward?: CoinAmino;
}
export interface MsgLeveragedLiquidateResponseAminoMsg {
    type: "/umee.leverage.v1.MsgLeveragedLiquidateResponse";
    value: MsgLeveragedLiquidateResponseAmino;
}
/** MsgLeveragedLiquidateResponse defines the Msg/LeveragedLiquidate response type. */
export interface MsgLeveragedLiquidateResponseSDKType {
    repaid: CoinSDKType;
    reward: CoinSDKType;
}
/** MsgSupplyCollateralResponse defines the Msg/SupplyCollateral response type. */
export interface MsgSupplyCollateralResponse {
    /** Collateralized is the amount of uTokens collateralized. */
    collateralized: Coin;
}
export interface MsgSupplyCollateralResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgSupplyCollateralResponse";
    value: Uint8Array;
}
/** MsgSupplyCollateralResponse defines the Msg/SupplyCollateral response type. */
export interface MsgSupplyCollateralResponseAmino {
    /** Collateralized is the amount of uTokens collateralized. */
    collateralized?: CoinAmino;
}
export interface MsgSupplyCollateralResponseAminoMsg {
    type: "/umee.leverage.v1.MsgSupplyCollateralResponse";
    value: MsgSupplyCollateralResponseAmino;
}
/** MsgSupplyCollateralResponse defines the Msg/SupplyCollateral response type. */
export interface MsgSupplyCollateralResponseSDKType {
    collateralized: CoinSDKType;
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
export interface MsgGovUpdateRegistryProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgGovUpdateRegistry";
    value: Uint8Array;
}
/** MsgGovUpdateRegistry defines the Msg/GovUpdateRegistry request type. */
export interface MsgGovUpdateRegistryAmino {
    /** authority is the address of the governance account. */
    authority: string;
    title: string;
    description: string;
    /** add_tokens defines new token settings. */
    add_tokens: TokenAmino[];
    /** update_tokens defines the new settings for existed tokens. */
    update_tokens: TokenAmino[];
}
export interface MsgGovUpdateRegistryAminoMsg {
    type: "/umee.leverage.v1.MsgGovUpdateRegistry";
    value: MsgGovUpdateRegistryAmino;
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
export interface MsgGovUpdateRegistryResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgGovUpdateRegistryResponse";
    value: Uint8Array;
}
/** MsgGovUpdateRegistryResponse defines the Msg/GovUpdateRegistry response type. */
export interface MsgGovUpdateRegistryResponseAmino {
}
export interface MsgGovUpdateRegistryResponseAminoMsg {
    type: "/umee.leverage.v1.MsgGovUpdateRegistryResponse";
    value: MsgGovUpdateRegistryResponseAmino;
}
/** MsgGovUpdateRegistryResponse defines the Msg/GovUpdateRegistry response type. */
export interface MsgGovUpdateRegistryResponseSDKType {
}
export declare const MsgSupply: {
    typeUrl: string;
    encode(message: MsgSupply, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSupply;
    fromPartial(object: Partial<MsgSupply>): MsgSupply;
    fromAmino(object: MsgSupplyAmino): MsgSupply;
    toAmino(message: MsgSupply): MsgSupplyAmino;
    fromAminoMsg(object: MsgSupplyAminoMsg): MsgSupply;
    fromProtoMsg(message: MsgSupplyProtoMsg): MsgSupply;
    toProto(message: MsgSupply): Uint8Array;
    toProtoMsg(message: MsgSupply): MsgSupplyProtoMsg;
};
export declare const MsgWithdraw: {
    typeUrl: string;
    encode(message: MsgWithdraw, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWithdraw;
    fromPartial(object: Partial<MsgWithdraw>): MsgWithdraw;
    fromAmino(object: MsgWithdrawAmino): MsgWithdraw;
    toAmino(message: MsgWithdraw): MsgWithdrawAmino;
    fromAminoMsg(object: MsgWithdrawAminoMsg): MsgWithdraw;
    fromProtoMsg(message: MsgWithdrawProtoMsg): MsgWithdraw;
    toProto(message: MsgWithdraw): Uint8Array;
    toProtoMsg(message: MsgWithdraw): MsgWithdrawProtoMsg;
};
export declare const MsgMaxWithdraw: {
    typeUrl: string;
    encode(message: MsgMaxWithdraw, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgMaxWithdraw;
    fromPartial(object: Partial<MsgMaxWithdraw>): MsgMaxWithdraw;
    fromAmino(object: MsgMaxWithdrawAmino): MsgMaxWithdraw;
    toAmino(message: MsgMaxWithdraw): MsgMaxWithdrawAmino;
    fromAminoMsg(object: MsgMaxWithdrawAminoMsg): MsgMaxWithdraw;
    fromProtoMsg(message: MsgMaxWithdrawProtoMsg): MsgMaxWithdraw;
    toProto(message: MsgMaxWithdraw): Uint8Array;
    toProtoMsg(message: MsgMaxWithdraw): MsgMaxWithdrawProtoMsg;
};
export declare const MsgCollateralize: {
    typeUrl: string;
    encode(message: MsgCollateralize, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCollateralize;
    fromPartial(object: Partial<MsgCollateralize>): MsgCollateralize;
    fromAmino(object: MsgCollateralizeAmino): MsgCollateralize;
    toAmino(message: MsgCollateralize): MsgCollateralizeAmino;
    fromAminoMsg(object: MsgCollateralizeAminoMsg): MsgCollateralize;
    fromProtoMsg(message: MsgCollateralizeProtoMsg): MsgCollateralize;
    toProto(message: MsgCollateralize): Uint8Array;
    toProtoMsg(message: MsgCollateralize): MsgCollateralizeProtoMsg;
};
export declare const MsgDecollateralize: {
    typeUrl: string;
    encode(message: MsgDecollateralize, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDecollateralize;
    fromPartial(object: Partial<MsgDecollateralize>): MsgDecollateralize;
    fromAmino(object: MsgDecollateralizeAmino): MsgDecollateralize;
    toAmino(message: MsgDecollateralize): MsgDecollateralizeAmino;
    fromAminoMsg(object: MsgDecollateralizeAminoMsg): MsgDecollateralize;
    fromProtoMsg(message: MsgDecollateralizeProtoMsg): MsgDecollateralize;
    toProto(message: MsgDecollateralize): Uint8Array;
    toProtoMsg(message: MsgDecollateralize): MsgDecollateralizeProtoMsg;
};
export declare const MsgBorrow: {
    typeUrl: string;
    encode(message: MsgBorrow, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBorrow;
    fromPartial(object: Partial<MsgBorrow>): MsgBorrow;
    fromAmino(object: MsgBorrowAmino): MsgBorrow;
    toAmino(message: MsgBorrow): MsgBorrowAmino;
    fromAminoMsg(object: MsgBorrowAminoMsg): MsgBorrow;
    fromProtoMsg(message: MsgBorrowProtoMsg): MsgBorrow;
    toProto(message: MsgBorrow): Uint8Array;
    toProtoMsg(message: MsgBorrow): MsgBorrowProtoMsg;
};
export declare const MsgMaxBorrow: {
    typeUrl: string;
    encode(message: MsgMaxBorrow, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgMaxBorrow;
    fromPartial(object: Partial<MsgMaxBorrow>): MsgMaxBorrow;
    fromAmino(object: MsgMaxBorrowAmino): MsgMaxBorrow;
    toAmino(message: MsgMaxBorrow): MsgMaxBorrowAmino;
    fromAminoMsg(object: MsgMaxBorrowAminoMsg): MsgMaxBorrow;
    fromProtoMsg(message: MsgMaxBorrowProtoMsg): MsgMaxBorrow;
    toProto(message: MsgMaxBorrow): Uint8Array;
    toProtoMsg(message: MsgMaxBorrow): MsgMaxBorrowProtoMsg;
};
export declare const MsgRepay: {
    typeUrl: string;
    encode(message: MsgRepay, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRepay;
    fromPartial(object: Partial<MsgRepay>): MsgRepay;
    fromAmino(object: MsgRepayAmino): MsgRepay;
    toAmino(message: MsgRepay): MsgRepayAmino;
    fromAminoMsg(object: MsgRepayAminoMsg): MsgRepay;
    fromProtoMsg(message: MsgRepayProtoMsg): MsgRepay;
    toProto(message: MsgRepay): Uint8Array;
    toProtoMsg(message: MsgRepay): MsgRepayProtoMsg;
};
export declare const MsgLiquidate: {
    typeUrl: string;
    encode(message: MsgLiquidate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgLiquidate;
    fromPartial(object: Partial<MsgLiquidate>): MsgLiquidate;
    fromAmino(object: MsgLiquidateAmino): MsgLiquidate;
    toAmino(message: MsgLiquidate): MsgLiquidateAmino;
    fromAminoMsg(object: MsgLiquidateAminoMsg): MsgLiquidate;
    fromProtoMsg(message: MsgLiquidateProtoMsg): MsgLiquidate;
    toProto(message: MsgLiquidate): Uint8Array;
    toProtoMsg(message: MsgLiquidate): MsgLiquidateProtoMsg;
};
export declare const MsgLeveragedLiquidate: {
    typeUrl: string;
    encode(message: MsgLeveragedLiquidate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgLeveragedLiquidate;
    fromPartial(object: Partial<MsgLeveragedLiquidate>): MsgLeveragedLiquidate;
    fromAmino(object: MsgLeveragedLiquidateAmino): MsgLeveragedLiquidate;
    toAmino(message: MsgLeveragedLiquidate): MsgLeveragedLiquidateAmino;
    fromAminoMsg(object: MsgLeveragedLiquidateAminoMsg): MsgLeveragedLiquidate;
    fromProtoMsg(message: MsgLeveragedLiquidateProtoMsg): MsgLeveragedLiquidate;
    toProto(message: MsgLeveragedLiquidate): Uint8Array;
    toProtoMsg(message: MsgLeveragedLiquidate): MsgLeveragedLiquidateProtoMsg;
};
export declare const MsgSupplyCollateral: {
    typeUrl: string;
    encode(message: MsgSupplyCollateral, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSupplyCollateral;
    fromPartial(object: Partial<MsgSupplyCollateral>): MsgSupplyCollateral;
    fromAmino(object: MsgSupplyCollateralAmino): MsgSupplyCollateral;
    toAmino(message: MsgSupplyCollateral): MsgSupplyCollateralAmino;
    fromAminoMsg(object: MsgSupplyCollateralAminoMsg): MsgSupplyCollateral;
    fromProtoMsg(message: MsgSupplyCollateralProtoMsg): MsgSupplyCollateral;
    toProto(message: MsgSupplyCollateral): Uint8Array;
    toProtoMsg(message: MsgSupplyCollateral): MsgSupplyCollateralProtoMsg;
};
export declare const MsgSupplyResponse: {
    typeUrl: string;
    encode(message: MsgSupplyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSupplyResponse;
    fromPartial(object: Partial<MsgSupplyResponse>): MsgSupplyResponse;
    fromAmino(object: MsgSupplyResponseAmino): MsgSupplyResponse;
    toAmino(message: MsgSupplyResponse): MsgSupplyResponseAmino;
    fromAminoMsg(object: MsgSupplyResponseAminoMsg): MsgSupplyResponse;
    fromProtoMsg(message: MsgSupplyResponseProtoMsg): MsgSupplyResponse;
    toProto(message: MsgSupplyResponse): Uint8Array;
    toProtoMsg(message: MsgSupplyResponse): MsgSupplyResponseProtoMsg;
};
export declare const MsgWithdrawResponse: {
    typeUrl: string;
    encode(message: MsgWithdrawResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWithdrawResponse;
    fromPartial(object: Partial<MsgWithdrawResponse>): MsgWithdrawResponse;
    fromAmino(object: MsgWithdrawResponseAmino): MsgWithdrawResponse;
    toAmino(message: MsgWithdrawResponse): MsgWithdrawResponseAmino;
    fromAminoMsg(object: MsgWithdrawResponseAminoMsg): MsgWithdrawResponse;
    fromProtoMsg(message: MsgWithdrawResponseProtoMsg): MsgWithdrawResponse;
    toProto(message: MsgWithdrawResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawResponse): MsgWithdrawResponseProtoMsg;
};
export declare const MsgMaxWithdrawResponse: {
    typeUrl: string;
    encode(message: MsgMaxWithdrawResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgMaxWithdrawResponse;
    fromPartial(object: Partial<MsgMaxWithdrawResponse>): MsgMaxWithdrawResponse;
    fromAmino(object: MsgMaxWithdrawResponseAmino): MsgMaxWithdrawResponse;
    toAmino(message: MsgMaxWithdrawResponse): MsgMaxWithdrawResponseAmino;
    fromAminoMsg(object: MsgMaxWithdrawResponseAminoMsg): MsgMaxWithdrawResponse;
    fromProtoMsg(message: MsgMaxWithdrawResponseProtoMsg): MsgMaxWithdrawResponse;
    toProto(message: MsgMaxWithdrawResponse): Uint8Array;
    toProtoMsg(message: MsgMaxWithdrawResponse): MsgMaxWithdrawResponseProtoMsg;
};
export declare const MsgCollateralizeResponse: {
    typeUrl: string;
    encode(_: MsgCollateralizeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCollateralizeResponse;
    fromPartial(_: Partial<MsgCollateralizeResponse>): MsgCollateralizeResponse;
    fromAmino(_: MsgCollateralizeResponseAmino): MsgCollateralizeResponse;
    toAmino(_: MsgCollateralizeResponse): MsgCollateralizeResponseAmino;
    fromAminoMsg(object: MsgCollateralizeResponseAminoMsg): MsgCollateralizeResponse;
    fromProtoMsg(message: MsgCollateralizeResponseProtoMsg): MsgCollateralizeResponse;
    toProto(message: MsgCollateralizeResponse): Uint8Array;
    toProtoMsg(message: MsgCollateralizeResponse): MsgCollateralizeResponseProtoMsg;
};
export declare const MsgDecollateralizeResponse: {
    typeUrl: string;
    encode(_: MsgDecollateralizeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDecollateralizeResponse;
    fromPartial(_: Partial<MsgDecollateralizeResponse>): MsgDecollateralizeResponse;
    fromAmino(_: MsgDecollateralizeResponseAmino): MsgDecollateralizeResponse;
    toAmino(_: MsgDecollateralizeResponse): MsgDecollateralizeResponseAmino;
    fromAminoMsg(object: MsgDecollateralizeResponseAminoMsg): MsgDecollateralizeResponse;
    fromProtoMsg(message: MsgDecollateralizeResponseProtoMsg): MsgDecollateralizeResponse;
    toProto(message: MsgDecollateralizeResponse): Uint8Array;
    toProtoMsg(message: MsgDecollateralizeResponse): MsgDecollateralizeResponseProtoMsg;
};
export declare const MsgBorrowResponse: {
    typeUrl: string;
    encode(_: MsgBorrowResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgBorrowResponse;
    fromPartial(_: Partial<MsgBorrowResponse>): MsgBorrowResponse;
    fromAmino(_: MsgBorrowResponseAmino): MsgBorrowResponse;
    toAmino(_: MsgBorrowResponse): MsgBorrowResponseAmino;
    fromAminoMsg(object: MsgBorrowResponseAminoMsg): MsgBorrowResponse;
    fromProtoMsg(message: MsgBorrowResponseProtoMsg): MsgBorrowResponse;
    toProto(message: MsgBorrowResponse): Uint8Array;
    toProtoMsg(message: MsgBorrowResponse): MsgBorrowResponseProtoMsg;
};
export declare const MsgMaxBorrowResponse: {
    typeUrl: string;
    encode(message: MsgMaxBorrowResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgMaxBorrowResponse;
    fromPartial(object: Partial<MsgMaxBorrowResponse>): MsgMaxBorrowResponse;
    fromAmino(object: MsgMaxBorrowResponseAmino): MsgMaxBorrowResponse;
    toAmino(message: MsgMaxBorrowResponse): MsgMaxBorrowResponseAmino;
    fromAminoMsg(object: MsgMaxBorrowResponseAminoMsg): MsgMaxBorrowResponse;
    fromProtoMsg(message: MsgMaxBorrowResponseProtoMsg): MsgMaxBorrowResponse;
    toProto(message: MsgMaxBorrowResponse): Uint8Array;
    toProtoMsg(message: MsgMaxBorrowResponse): MsgMaxBorrowResponseProtoMsg;
};
export declare const MsgRepayResponse: {
    typeUrl: string;
    encode(message: MsgRepayResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRepayResponse;
    fromPartial(object: Partial<MsgRepayResponse>): MsgRepayResponse;
    fromAmino(object: MsgRepayResponseAmino): MsgRepayResponse;
    toAmino(message: MsgRepayResponse): MsgRepayResponseAmino;
    fromAminoMsg(object: MsgRepayResponseAminoMsg): MsgRepayResponse;
    fromProtoMsg(message: MsgRepayResponseProtoMsg): MsgRepayResponse;
    toProto(message: MsgRepayResponse): Uint8Array;
    toProtoMsg(message: MsgRepayResponse): MsgRepayResponseProtoMsg;
};
export declare const MsgLiquidateResponse: {
    typeUrl: string;
    encode(message: MsgLiquidateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgLiquidateResponse;
    fromPartial(object: Partial<MsgLiquidateResponse>): MsgLiquidateResponse;
    fromAmino(object: MsgLiquidateResponseAmino): MsgLiquidateResponse;
    toAmino(message: MsgLiquidateResponse): MsgLiquidateResponseAmino;
    fromAminoMsg(object: MsgLiquidateResponseAminoMsg): MsgLiquidateResponse;
    fromProtoMsg(message: MsgLiquidateResponseProtoMsg): MsgLiquidateResponse;
    toProto(message: MsgLiquidateResponse): Uint8Array;
    toProtoMsg(message: MsgLiquidateResponse): MsgLiquidateResponseProtoMsg;
};
export declare const MsgLeveragedLiquidateResponse: {
    typeUrl: string;
    encode(message: MsgLeveragedLiquidateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgLeveragedLiquidateResponse;
    fromPartial(object: Partial<MsgLeveragedLiquidateResponse>): MsgLeveragedLiquidateResponse;
    fromAmino(object: MsgLeveragedLiquidateResponseAmino): MsgLeveragedLiquidateResponse;
    toAmino(message: MsgLeveragedLiquidateResponse): MsgLeveragedLiquidateResponseAmino;
    fromAminoMsg(object: MsgLeveragedLiquidateResponseAminoMsg): MsgLeveragedLiquidateResponse;
    fromProtoMsg(message: MsgLeveragedLiquidateResponseProtoMsg): MsgLeveragedLiquidateResponse;
    toProto(message: MsgLeveragedLiquidateResponse): Uint8Array;
    toProtoMsg(message: MsgLeveragedLiquidateResponse): MsgLeveragedLiquidateResponseProtoMsg;
};
export declare const MsgSupplyCollateralResponse: {
    typeUrl: string;
    encode(message: MsgSupplyCollateralResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSupplyCollateralResponse;
    fromPartial(object: Partial<MsgSupplyCollateralResponse>): MsgSupplyCollateralResponse;
    fromAmino(object: MsgSupplyCollateralResponseAmino): MsgSupplyCollateralResponse;
    toAmino(message: MsgSupplyCollateralResponse): MsgSupplyCollateralResponseAmino;
    fromAminoMsg(object: MsgSupplyCollateralResponseAminoMsg): MsgSupplyCollateralResponse;
    fromProtoMsg(message: MsgSupplyCollateralResponseProtoMsg): MsgSupplyCollateralResponse;
    toProto(message: MsgSupplyCollateralResponse): Uint8Array;
    toProtoMsg(message: MsgSupplyCollateralResponse): MsgSupplyCollateralResponseProtoMsg;
};
export declare const MsgGovUpdateRegistry: {
    typeUrl: string;
    encode(message: MsgGovUpdateRegistry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgGovUpdateRegistry;
    fromPartial(object: Partial<MsgGovUpdateRegistry>): MsgGovUpdateRegistry;
    fromAmino(object: MsgGovUpdateRegistryAmino): MsgGovUpdateRegistry;
    toAmino(message: MsgGovUpdateRegistry): MsgGovUpdateRegistryAmino;
    fromAminoMsg(object: MsgGovUpdateRegistryAminoMsg): MsgGovUpdateRegistry;
    fromProtoMsg(message: MsgGovUpdateRegistryProtoMsg): MsgGovUpdateRegistry;
    toProto(message: MsgGovUpdateRegistry): Uint8Array;
    toProtoMsg(message: MsgGovUpdateRegistry): MsgGovUpdateRegistryProtoMsg;
};
export declare const MsgGovUpdateRegistryResponse: {
    typeUrl: string;
    encode(_: MsgGovUpdateRegistryResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgGovUpdateRegistryResponse;
    fromPartial(_: Partial<MsgGovUpdateRegistryResponse>): MsgGovUpdateRegistryResponse;
    fromAmino(_: MsgGovUpdateRegistryResponseAmino): MsgGovUpdateRegistryResponse;
    toAmino(_: MsgGovUpdateRegistryResponse): MsgGovUpdateRegistryResponseAmino;
    fromAminoMsg(object: MsgGovUpdateRegistryResponseAminoMsg): MsgGovUpdateRegistryResponse;
    fromProtoMsg(message: MsgGovUpdateRegistryResponseProtoMsg): MsgGovUpdateRegistryResponse;
    toProto(message: MsgGovUpdateRegistryResponse): Uint8Array;
    toProtoMsg(message: MsgGovUpdateRegistryResponse): MsgGovUpdateRegistryResponseProtoMsg;
};
