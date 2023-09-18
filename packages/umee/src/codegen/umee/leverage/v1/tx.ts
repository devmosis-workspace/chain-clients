import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Token, TokenAmino, TokenSDKType } from "./leverage";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
export interface MsgCollateralizeResponse {}
export interface MsgCollateralizeResponseProtoMsg {
  typeUrl: "/umee.leverage.v1.MsgCollateralizeResponse";
  value: Uint8Array;
}
/** MsgCollateralizeResponse defines the Msg/Collateralize response type. */
export interface MsgCollateralizeResponseAmino {}
export interface MsgCollateralizeResponseAminoMsg {
  type: "/umee.leverage.v1.MsgCollateralizeResponse";
  value: MsgCollateralizeResponseAmino;
}
/** MsgCollateralizeResponse defines the Msg/Collateralize response type. */
export interface MsgCollateralizeResponseSDKType {}
/** MsgDecollateralizeResponse defines the Msg/Decollateralize response type. */
export interface MsgDecollateralizeResponse {}
export interface MsgDecollateralizeResponseProtoMsg {
  typeUrl: "/umee.leverage.v1.MsgDecollateralizeResponse";
  value: Uint8Array;
}
/** MsgDecollateralizeResponse defines the Msg/Decollateralize response type. */
export interface MsgDecollateralizeResponseAmino {}
export interface MsgDecollateralizeResponseAminoMsg {
  type: "/umee.leverage.v1.MsgDecollateralizeResponse";
  value: MsgDecollateralizeResponseAmino;
}
/** MsgDecollateralizeResponse defines the Msg/Decollateralize response type. */
export interface MsgDecollateralizeResponseSDKType {}
/** MsgBorrowResponse defines the Msg/Borrow response type. */
export interface MsgBorrowResponse {}
export interface MsgBorrowResponseProtoMsg {
  typeUrl: "/umee.leverage.v1.MsgBorrowResponse";
  value: Uint8Array;
}
/** MsgBorrowResponse defines the Msg/Borrow response type. */
export interface MsgBorrowResponseAmino {}
export interface MsgBorrowResponseAminoMsg {
  type: "/umee.leverage.v1.MsgBorrowResponse";
  value: MsgBorrowResponseAmino;
}
/** MsgBorrowResponse defines the Msg/Borrow response type. */
export interface MsgBorrowResponseSDKType {}
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
export interface MsgGovUpdateRegistryResponse {}
export interface MsgGovUpdateRegistryResponseProtoMsg {
  typeUrl: "/umee.leverage.v1.MsgGovUpdateRegistryResponse";
  value: Uint8Array;
}
/** MsgGovUpdateRegistryResponse defines the Msg/GovUpdateRegistry response type. */
export interface MsgGovUpdateRegistryResponseAmino {}
export interface MsgGovUpdateRegistryResponseAminoMsg {
  type: "/umee.leverage.v1.MsgGovUpdateRegistryResponse";
  value: MsgGovUpdateRegistryResponseAmino;
}
/** MsgGovUpdateRegistryResponse defines the Msg/GovUpdateRegistry response type. */
export interface MsgGovUpdateRegistryResponseSDKType {}
function createBaseMsgSupply(): MsgSupply {
  return {
    supplier: "",
    asset: Coin.fromPartial({})
  };
}
export const MsgSupply = {
  typeUrl: "/umee.leverage.v1.MsgSupply",
  encode(message: MsgSupply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supplier !== "") {
      writer.uint32(10).string(message.supplier);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSupply {
    return {
      supplier: isSet(object.supplier) ? String(object.supplier) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<MsgSupply>): MsgSupply {
    const message = createBaseMsgSupply();
    message.supplier = object.supplier ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  },
  fromAmino(object: MsgSupplyAmino): MsgSupply {
    return {
      supplier: object.supplier,
      asset: object?.asset ? Coin.fromAmino(object.asset) : undefined
    };
  },
  toAmino(message: MsgSupply): MsgSupplyAmino {
    const obj: any = {};
    obj.supplier = message.supplier;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSupplyAminoMsg): MsgSupply {
    return MsgSupply.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSupplyProtoMsg): MsgSupply {
    return MsgSupply.decode(message.value);
  },
  toProto(message: MsgSupply): Uint8Array {
    return MsgSupply.encode(message).finish();
  },
  toProtoMsg(message: MsgSupply): MsgSupplyProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgSupply",
      value: MsgSupply.encode(message).finish()
    };
  }
};
function createBaseMsgWithdraw(): MsgWithdraw {
  return {
    supplier: "",
    asset: Coin.fromPartial({})
  };
}
export const MsgWithdraw = {
  typeUrl: "/umee.leverage.v1.MsgWithdraw",
  encode(message: MsgWithdraw, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supplier !== "") {
      writer.uint32(10).string(message.supplier);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgWithdraw {
    return {
      supplier: isSet(object.supplier) ? String(object.supplier) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<MsgWithdraw>): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.supplier = object.supplier ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  },
  fromAmino(object: MsgWithdrawAmino): MsgWithdraw {
    return {
      supplier: object.supplier,
      asset: object?.asset ? Coin.fromAmino(object.asset) : undefined
    };
  },
  toAmino(message: MsgWithdraw): MsgWithdrawAmino {
    const obj: any = {};
    obj.supplier = message.supplier;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawAminoMsg): MsgWithdraw {
    return MsgWithdraw.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawProtoMsg): MsgWithdraw {
    return MsgWithdraw.decode(message.value);
  },
  toProto(message: MsgWithdraw): Uint8Array {
    return MsgWithdraw.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdraw): MsgWithdrawProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgWithdraw",
      value: MsgWithdraw.encode(message).finish()
    };
  }
};
function createBaseMsgMaxWithdraw(): MsgMaxWithdraw {
  return {
    supplier: "",
    denom: ""
  };
}
export const MsgMaxWithdraw = {
  typeUrl: "/umee.leverage.v1.MsgMaxWithdraw",
  encode(message: MsgMaxWithdraw, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supplier !== "") {
      writer.uint32(10).string(message.supplier);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): MsgMaxWithdraw {
    return {
      supplier: isSet(object.supplier) ? String(object.supplier) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<MsgMaxWithdraw>): MsgMaxWithdraw {
    const message = createBaseMsgMaxWithdraw();
    message.supplier = object.supplier ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgMaxWithdrawAmino): MsgMaxWithdraw {
    return {
      supplier: object.supplier,
      denom: object.denom
    };
  },
  toAmino(message: MsgMaxWithdraw): MsgMaxWithdrawAmino {
    const obj: any = {};
    obj.supplier = message.supplier;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgMaxWithdrawAminoMsg): MsgMaxWithdraw {
    return MsgMaxWithdraw.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMaxWithdrawProtoMsg): MsgMaxWithdraw {
    return MsgMaxWithdraw.decode(message.value);
  },
  toProto(message: MsgMaxWithdraw): Uint8Array {
    return MsgMaxWithdraw.encode(message).finish();
  },
  toProtoMsg(message: MsgMaxWithdraw): MsgMaxWithdrawProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgMaxWithdraw",
      value: MsgMaxWithdraw.encode(message).finish()
    };
  }
};
function createBaseMsgCollateralize(): MsgCollateralize {
  return {
    borrower: "",
    asset: Coin.fromPartial({})
  };
}
export const MsgCollateralize = {
  typeUrl: "/umee.leverage.v1.MsgCollateralize",
  encode(message: MsgCollateralize, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCollateralize {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<MsgCollateralize>): MsgCollateralize {
    const message = createBaseMsgCollateralize();
    message.borrower = object.borrower ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  },
  fromAmino(object: MsgCollateralizeAmino): MsgCollateralize {
    return {
      borrower: object.borrower,
      asset: object?.asset ? Coin.fromAmino(object.asset) : undefined
    };
  },
  toAmino(message: MsgCollateralize): MsgCollateralizeAmino {
    const obj: any = {};
    obj.borrower = message.borrower;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCollateralizeAminoMsg): MsgCollateralize {
    return MsgCollateralize.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCollateralizeProtoMsg): MsgCollateralize {
    return MsgCollateralize.decode(message.value);
  },
  toProto(message: MsgCollateralize): Uint8Array {
    return MsgCollateralize.encode(message).finish();
  },
  toProtoMsg(message: MsgCollateralize): MsgCollateralizeProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgCollateralize",
      value: MsgCollateralize.encode(message).finish()
    };
  }
};
function createBaseMsgDecollateralize(): MsgDecollateralize {
  return {
    borrower: "",
    asset: Coin.fromPartial({})
  };
}
export const MsgDecollateralize = {
  typeUrl: "/umee.leverage.v1.MsgDecollateralize",
  encode(message: MsgDecollateralize, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgDecollateralize {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<MsgDecollateralize>): MsgDecollateralize {
    const message = createBaseMsgDecollateralize();
    message.borrower = object.borrower ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  },
  fromAmino(object: MsgDecollateralizeAmino): MsgDecollateralize {
    return {
      borrower: object.borrower,
      asset: object?.asset ? Coin.fromAmino(object.asset) : undefined
    };
  },
  toAmino(message: MsgDecollateralize): MsgDecollateralizeAmino {
    const obj: any = {};
    obj.borrower = message.borrower;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDecollateralizeAminoMsg): MsgDecollateralize {
    return MsgDecollateralize.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDecollateralizeProtoMsg): MsgDecollateralize {
    return MsgDecollateralize.decode(message.value);
  },
  toProto(message: MsgDecollateralize): Uint8Array {
    return MsgDecollateralize.encode(message).finish();
  },
  toProtoMsg(message: MsgDecollateralize): MsgDecollateralizeProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgDecollateralize",
      value: MsgDecollateralize.encode(message).finish()
    };
  }
};
function createBaseMsgBorrow(): MsgBorrow {
  return {
    borrower: "",
    asset: Coin.fromPartial({})
  };
}
export const MsgBorrow = {
  typeUrl: "/umee.leverage.v1.MsgBorrow",
  encode(message: MsgBorrow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgBorrow {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<MsgBorrow>): MsgBorrow {
    const message = createBaseMsgBorrow();
    message.borrower = object.borrower ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  },
  fromAmino(object: MsgBorrowAmino): MsgBorrow {
    return {
      borrower: object.borrower,
      asset: object?.asset ? Coin.fromAmino(object.asset) : undefined
    };
  },
  toAmino(message: MsgBorrow): MsgBorrowAmino {
    const obj: any = {};
    obj.borrower = message.borrower;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBorrowAminoMsg): MsgBorrow {
    return MsgBorrow.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBorrowProtoMsg): MsgBorrow {
    return MsgBorrow.decode(message.value);
  },
  toProto(message: MsgBorrow): Uint8Array {
    return MsgBorrow.encode(message).finish();
  },
  toProtoMsg(message: MsgBorrow): MsgBorrowProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgBorrow",
      value: MsgBorrow.encode(message).finish()
    };
  }
};
function createBaseMsgMaxBorrow(): MsgMaxBorrow {
  return {
    borrower: "",
    denom: ""
  };
}
export const MsgMaxBorrow = {
  typeUrl: "/umee.leverage.v1.MsgMaxBorrow",
  encode(message: MsgMaxBorrow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): MsgMaxBorrow {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<MsgMaxBorrow>): MsgMaxBorrow {
    const message = createBaseMsgMaxBorrow();
    message.borrower = object.borrower ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgMaxBorrowAmino): MsgMaxBorrow {
    return {
      borrower: object.borrower,
      denom: object.denom
    };
  },
  toAmino(message: MsgMaxBorrow): MsgMaxBorrowAmino {
    const obj: any = {};
    obj.borrower = message.borrower;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgMaxBorrowAminoMsg): MsgMaxBorrow {
    return MsgMaxBorrow.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMaxBorrowProtoMsg): MsgMaxBorrow {
    return MsgMaxBorrow.decode(message.value);
  },
  toProto(message: MsgMaxBorrow): Uint8Array {
    return MsgMaxBorrow.encode(message).finish();
  },
  toProtoMsg(message: MsgMaxBorrow): MsgMaxBorrowProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgMaxBorrow",
      value: MsgMaxBorrow.encode(message).finish()
    };
  }
};
function createBaseMsgRepay(): MsgRepay {
  return {
    borrower: "",
    asset: Coin.fromPartial({})
  };
}
export const MsgRepay = {
  typeUrl: "/umee.leverage.v1.MsgRepay",
  encode(message: MsgRepay, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgRepay {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<MsgRepay>): MsgRepay {
    const message = createBaseMsgRepay();
    message.borrower = object.borrower ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  },
  fromAmino(object: MsgRepayAmino): MsgRepay {
    return {
      borrower: object.borrower,
      asset: object?.asset ? Coin.fromAmino(object.asset) : undefined
    };
  },
  toAmino(message: MsgRepay): MsgRepayAmino {
    const obj: any = {};
    obj.borrower = message.borrower;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRepayAminoMsg): MsgRepay {
    return MsgRepay.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRepayProtoMsg): MsgRepay {
    return MsgRepay.decode(message.value);
  },
  toProto(message: MsgRepay): Uint8Array {
    return MsgRepay.encode(message).finish();
  },
  toProtoMsg(message: MsgRepay): MsgRepayProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgRepay",
      value: MsgRepay.encode(message).finish()
    };
  }
};
function createBaseMsgLiquidate(): MsgLiquidate {
  return {
    liquidator: "",
    borrower: "",
    repayment: Coin.fromPartial({}),
    rewardDenom: ""
  };
}
export const MsgLiquidate = {
  typeUrl: "/umee.leverage.v1.MsgLiquidate",
  encode(message: MsgLiquidate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liquidator !== "") {
      writer.uint32(10).string(message.liquidator);
    }
    if (message.borrower !== "") {
      writer.uint32(18).string(message.borrower);
    }
    if (message.repayment !== undefined) {
      Coin.encode(message.repayment, writer.uint32(26).fork()).ldelim();
    }
    if (message.rewardDenom !== "") {
      writer.uint32(34).string(message.rewardDenom);
    }
    return writer;
  },
  fromJSON(object: any): MsgLiquidate {
    return {
      liquidator: isSet(object.liquidator) ? String(object.liquidator) : "",
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      repayment: isSet(object.repayment) ? Coin.fromJSON(object.repayment) : undefined,
      rewardDenom: isSet(object.rewardDenom) ? String(object.rewardDenom) : ""
    };
  },
  fromPartial(object: Partial<MsgLiquidate>): MsgLiquidate {
    const message = createBaseMsgLiquidate();
    message.liquidator = object.liquidator ?? "";
    message.borrower = object.borrower ?? "";
    message.repayment = object.repayment !== undefined && object.repayment !== null ? Coin.fromPartial(object.repayment) : undefined;
    message.rewardDenom = object.rewardDenom ?? "";
    return message;
  },
  fromAmino(object: MsgLiquidateAmino): MsgLiquidate {
    return {
      liquidator: object.liquidator,
      borrower: object.borrower,
      repayment: object?.repayment ? Coin.fromAmino(object.repayment) : undefined,
      rewardDenom: object.reward_denom
    };
  },
  toAmino(message: MsgLiquidate): MsgLiquidateAmino {
    const obj: any = {};
    obj.liquidator = message.liquidator;
    obj.borrower = message.borrower;
    obj.repayment = message.repayment ? Coin.toAmino(message.repayment) : undefined;
    obj.reward_denom = message.rewardDenom;
    return obj;
  },
  fromAminoMsg(object: MsgLiquidateAminoMsg): MsgLiquidate {
    return MsgLiquidate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLiquidateProtoMsg): MsgLiquidate {
    return MsgLiquidate.decode(message.value);
  },
  toProto(message: MsgLiquidate): Uint8Array {
    return MsgLiquidate.encode(message).finish();
  },
  toProtoMsg(message: MsgLiquidate): MsgLiquidateProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgLiquidate",
      value: MsgLiquidate.encode(message).finish()
    };
  }
};
function createBaseMsgLeveragedLiquidate(): MsgLeveragedLiquidate {
  return {
    liquidator: "",
    borrower: "",
    repayDenom: "",
    rewardDenom: ""
  };
}
export const MsgLeveragedLiquidate = {
  typeUrl: "/umee.leverage.v1.MsgLeveragedLiquidate",
  encode(message: MsgLeveragedLiquidate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liquidator !== "") {
      writer.uint32(10).string(message.liquidator);
    }
    if (message.borrower !== "") {
      writer.uint32(18).string(message.borrower);
    }
    if (message.repayDenom !== "") {
      writer.uint32(26).string(message.repayDenom);
    }
    if (message.rewardDenom !== "") {
      writer.uint32(34).string(message.rewardDenom);
    }
    return writer;
  },
  fromJSON(object: any): MsgLeveragedLiquidate {
    return {
      liquidator: isSet(object.liquidator) ? String(object.liquidator) : "",
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      repayDenom: isSet(object.repayDenom) ? String(object.repayDenom) : "",
      rewardDenom: isSet(object.rewardDenom) ? String(object.rewardDenom) : ""
    };
  },
  fromPartial(object: Partial<MsgLeveragedLiquidate>): MsgLeveragedLiquidate {
    const message = createBaseMsgLeveragedLiquidate();
    message.liquidator = object.liquidator ?? "";
    message.borrower = object.borrower ?? "";
    message.repayDenom = object.repayDenom ?? "";
    message.rewardDenom = object.rewardDenom ?? "";
    return message;
  },
  fromAmino(object: MsgLeveragedLiquidateAmino): MsgLeveragedLiquidate {
    return {
      liquidator: object.liquidator,
      borrower: object.borrower,
      repayDenom: object.repay_denom,
      rewardDenom: object.reward_denom
    };
  },
  toAmino(message: MsgLeveragedLiquidate): MsgLeveragedLiquidateAmino {
    const obj: any = {};
    obj.liquidator = message.liquidator;
    obj.borrower = message.borrower;
    obj.repay_denom = message.repayDenom;
    obj.reward_denom = message.rewardDenom;
    return obj;
  },
  fromAminoMsg(object: MsgLeveragedLiquidateAminoMsg): MsgLeveragedLiquidate {
    return MsgLeveragedLiquidate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLeveragedLiquidateProtoMsg): MsgLeveragedLiquidate {
    return MsgLeveragedLiquidate.decode(message.value);
  },
  toProto(message: MsgLeveragedLiquidate): Uint8Array {
    return MsgLeveragedLiquidate.encode(message).finish();
  },
  toProtoMsg(message: MsgLeveragedLiquidate): MsgLeveragedLiquidateProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgLeveragedLiquidate",
      value: MsgLeveragedLiquidate.encode(message).finish()
    };
  }
};
function createBaseMsgSupplyCollateral(): MsgSupplyCollateral {
  return {
    supplier: "",
    asset: Coin.fromPartial({})
  };
}
export const MsgSupplyCollateral = {
  typeUrl: "/umee.leverage.v1.MsgSupplyCollateral",
  encode(message: MsgSupplyCollateral, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supplier !== "") {
      writer.uint32(10).string(message.supplier);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSupplyCollateral {
    return {
      supplier: isSet(object.supplier) ? String(object.supplier) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<MsgSupplyCollateral>): MsgSupplyCollateral {
    const message = createBaseMsgSupplyCollateral();
    message.supplier = object.supplier ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  },
  fromAmino(object: MsgSupplyCollateralAmino): MsgSupplyCollateral {
    return {
      supplier: object.supplier,
      asset: object?.asset ? Coin.fromAmino(object.asset) : undefined
    };
  },
  toAmino(message: MsgSupplyCollateral): MsgSupplyCollateralAmino {
    const obj: any = {};
    obj.supplier = message.supplier;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSupplyCollateralAminoMsg): MsgSupplyCollateral {
    return MsgSupplyCollateral.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSupplyCollateralProtoMsg): MsgSupplyCollateral {
    return MsgSupplyCollateral.decode(message.value);
  },
  toProto(message: MsgSupplyCollateral): Uint8Array {
    return MsgSupplyCollateral.encode(message).finish();
  },
  toProtoMsg(message: MsgSupplyCollateral): MsgSupplyCollateralProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgSupplyCollateral",
      value: MsgSupplyCollateral.encode(message).finish()
    };
  }
};
function createBaseMsgSupplyResponse(): MsgSupplyResponse {
  return {
    received: Coin.fromPartial({})
  };
}
export const MsgSupplyResponse = {
  typeUrl: "/umee.leverage.v1.MsgSupplyResponse",
  encode(message: MsgSupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.received !== undefined) {
      Coin.encode(message.received, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSupplyResponse {
    return {
      received: isSet(object.received) ? Coin.fromJSON(object.received) : undefined
    };
  },
  fromPartial(object: Partial<MsgSupplyResponse>): MsgSupplyResponse {
    const message = createBaseMsgSupplyResponse();
    message.received = object.received !== undefined && object.received !== null ? Coin.fromPartial(object.received) : undefined;
    return message;
  },
  fromAmino(object: MsgSupplyResponseAmino): MsgSupplyResponse {
    return {
      received: object?.received ? Coin.fromAmino(object.received) : undefined
    };
  },
  toAmino(message: MsgSupplyResponse): MsgSupplyResponseAmino {
    const obj: any = {};
    obj.received = message.received ? Coin.toAmino(message.received) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSupplyResponseAminoMsg): MsgSupplyResponse {
    return MsgSupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSupplyResponseProtoMsg): MsgSupplyResponse {
    return MsgSupplyResponse.decode(message.value);
  },
  toProto(message: MsgSupplyResponse): Uint8Array {
    return MsgSupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSupplyResponse): MsgSupplyResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgSupplyResponse",
      value: MsgSupplyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {
    received: Coin.fromPartial({})
  };
}
export const MsgWithdrawResponse = {
  typeUrl: "/umee.leverage.v1.MsgWithdrawResponse",
  encode(message: MsgWithdrawResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.received !== undefined) {
      Coin.encode(message.received, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgWithdrawResponse {
    return {
      received: isSet(object.received) ? Coin.fromJSON(object.received) : undefined
    };
  },
  fromPartial(object: Partial<MsgWithdrawResponse>): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    message.received = object.received !== undefined && object.received !== null ? Coin.fromPartial(object.received) : undefined;
    return message;
  },
  fromAmino(object: MsgWithdrawResponseAmino): MsgWithdrawResponse {
    return {
      received: object?.received ? Coin.fromAmino(object.received) : undefined
    };
  },
  toAmino(message: MsgWithdrawResponse): MsgWithdrawResponseAmino {
    const obj: any = {};
    obj.received = message.received ? Coin.toAmino(message.received) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawResponseAminoMsg): MsgWithdrawResponse {
    return MsgWithdrawResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawResponseProtoMsg): MsgWithdrawResponse {
    return MsgWithdrawResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawResponse): Uint8Array {
    return MsgWithdrawResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawResponse): MsgWithdrawResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgWithdrawResponse",
      value: MsgWithdrawResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMaxWithdrawResponse(): MsgMaxWithdrawResponse {
  return {
    withdrawn: Coin.fromPartial({}),
    received: Coin.fromPartial({})
  };
}
export const MsgMaxWithdrawResponse = {
  typeUrl: "/umee.leverage.v1.MsgMaxWithdrawResponse",
  encode(message: MsgMaxWithdrawResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.withdrawn !== undefined) {
      Coin.encode(message.withdrawn, writer.uint32(10).fork()).ldelim();
    }
    if (message.received !== undefined) {
      Coin.encode(message.received, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgMaxWithdrawResponse {
    return {
      withdrawn: isSet(object.withdrawn) ? Coin.fromJSON(object.withdrawn) : undefined,
      received: isSet(object.received) ? Coin.fromJSON(object.received) : undefined
    };
  },
  fromPartial(object: Partial<MsgMaxWithdrawResponse>): MsgMaxWithdrawResponse {
    const message = createBaseMsgMaxWithdrawResponse();
    message.withdrawn = object.withdrawn !== undefined && object.withdrawn !== null ? Coin.fromPartial(object.withdrawn) : undefined;
    message.received = object.received !== undefined && object.received !== null ? Coin.fromPartial(object.received) : undefined;
    return message;
  },
  fromAmino(object: MsgMaxWithdrawResponseAmino): MsgMaxWithdrawResponse {
    return {
      withdrawn: object?.withdrawn ? Coin.fromAmino(object.withdrawn) : undefined,
      received: object?.received ? Coin.fromAmino(object.received) : undefined
    };
  },
  toAmino(message: MsgMaxWithdrawResponse): MsgMaxWithdrawResponseAmino {
    const obj: any = {};
    obj.withdrawn = message.withdrawn ? Coin.toAmino(message.withdrawn) : undefined;
    obj.received = message.received ? Coin.toAmino(message.received) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMaxWithdrawResponseAminoMsg): MsgMaxWithdrawResponse {
    return MsgMaxWithdrawResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMaxWithdrawResponseProtoMsg): MsgMaxWithdrawResponse {
    return MsgMaxWithdrawResponse.decode(message.value);
  },
  toProto(message: MsgMaxWithdrawResponse): Uint8Array {
    return MsgMaxWithdrawResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMaxWithdrawResponse): MsgMaxWithdrawResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgMaxWithdrawResponse",
      value: MsgMaxWithdrawResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCollateralizeResponse(): MsgCollateralizeResponse {
  return {};
}
export const MsgCollateralizeResponse = {
  typeUrl: "/umee.leverage.v1.MsgCollateralizeResponse",
  encode(_: MsgCollateralizeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCollateralizeResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCollateralizeResponse>): MsgCollateralizeResponse {
    const message = createBaseMsgCollateralizeResponse();
    return message;
  },
  fromAmino(_: MsgCollateralizeResponseAmino): MsgCollateralizeResponse {
    return {};
  },
  toAmino(_: MsgCollateralizeResponse): MsgCollateralizeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCollateralizeResponseAminoMsg): MsgCollateralizeResponse {
    return MsgCollateralizeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCollateralizeResponseProtoMsg): MsgCollateralizeResponse {
    return MsgCollateralizeResponse.decode(message.value);
  },
  toProto(message: MsgCollateralizeResponse): Uint8Array {
    return MsgCollateralizeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCollateralizeResponse): MsgCollateralizeResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgCollateralizeResponse",
      value: MsgCollateralizeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDecollateralizeResponse(): MsgDecollateralizeResponse {
  return {};
}
export const MsgDecollateralizeResponse = {
  typeUrl: "/umee.leverage.v1.MsgDecollateralizeResponse",
  encode(_: MsgDecollateralizeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDecollateralizeResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDecollateralizeResponse>): MsgDecollateralizeResponse {
    const message = createBaseMsgDecollateralizeResponse();
    return message;
  },
  fromAmino(_: MsgDecollateralizeResponseAmino): MsgDecollateralizeResponse {
    return {};
  },
  toAmino(_: MsgDecollateralizeResponse): MsgDecollateralizeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDecollateralizeResponseAminoMsg): MsgDecollateralizeResponse {
    return MsgDecollateralizeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDecollateralizeResponseProtoMsg): MsgDecollateralizeResponse {
    return MsgDecollateralizeResponse.decode(message.value);
  },
  toProto(message: MsgDecollateralizeResponse): Uint8Array {
    return MsgDecollateralizeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDecollateralizeResponse): MsgDecollateralizeResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgDecollateralizeResponse",
      value: MsgDecollateralizeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBorrowResponse(): MsgBorrowResponse {
  return {};
}
export const MsgBorrowResponse = {
  typeUrl: "/umee.leverage.v1.MsgBorrowResponse",
  encode(_: MsgBorrowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgBorrowResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBorrowResponse>): MsgBorrowResponse {
    const message = createBaseMsgBorrowResponse();
    return message;
  },
  fromAmino(_: MsgBorrowResponseAmino): MsgBorrowResponse {
    return {};
  },
  toAmino(_: MsgBorrowResponse): MsgBorrowResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBorrowResponseAminoMsg): MsgBorrowResponse {
    return MsgBorrowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBorrowResponseProtoMsg): MsgBorrowResponse {
    return MsgBorrowResponse.decode(message.value);
  },
  toProto(message: MsgBorrowResponse): Uint8Array {
    return MsgBorrowResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBorrowResponse): MsgBorrowResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgBorrowResponse",
      value: MsgBorrowResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMaxBorrowResponse(): MsgMaxBorrowResponse {
  return {
    borrowed: Coin.fromPartial({})
  };
}
export const MsgMaxBorrowResponse = {
  typeUrl: "/umee.leverage.v1.MsgMaxBorrowResponse",
  encode(message: MsgMaxBorrowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.borrowed !== undefined) {
      Coin.encode(message.borrowed, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgMaxBorrowResponse {
    return {
      borrowed: isSet(object.borrowed) ? Coin.fromJSON(object.borrowed) : undefined
    };
  },
  fromPartial(object: Partial<MsgMaxBorrowResponse>): MsgMaxBorrowResponse {
    const message = createBaseMsgMaxBorrowResponse();
    message.borrowed = object.borrowed !== undefined && object.borrowed !== null ? Coin.fromPartial(object.borrowed) : undefined;
    return message;
  },
  fromAmino(object: MsgMaxBorrowResponseAmino): MsgMaxBorrowResponse {
    return {
      borrowed: object?.borrowed ? Coin.fromAmino(object.borrowed) : undefined
    };
  },
  toAmino(message: MsgMaxBorrowResponse): MsgMaxBorrowResponseAmino {
    const obj: any = {};
    obj.borrowed = message.borrowed ? Coin.toAmino(message.borrowed) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMaxBorrowResponseAminoMsg): MsgMaxBorrowResponse {
    return MsgMaxBorrowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMaxBorrowResponseProtoMsg): MsgMaxBorrowResponse {
    return MsgMaxBorrowResponse.decode(message.value);
  },
  toProto(message: MsgMaxBorrowResponse): Uint8Array {
    return MsgMaxBorrowResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMaxBorrowResponse): MsgMaxBorrowResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgMaxBorrowResponse",
      value: MsgMaxBorrowResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRepayResponse(): MsgRepayResponse {
  return {
    repaid: Coin.fromPartial({})
  };
}
export const MsgRepayResponse = {
  typeUrl: "/umee.leverage.v1.MsgRepayResponse",
  encode(message: MsgRepayResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.repaid !== undefined) {
      Coin.encode(message.repaid, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgRepayResponse {
    return {
      repaid: isSet(object.repaid) ? Coin.fromJSON(object.repaid) : undefined
    };
  },
  fromPartial(object: Partial<MsgRepayResponse>): MsgRepayResponse {
    const message = createBaseMsgRepayResponse();
    message.repaid = object.repaid !== undefined && object.repaid !== null ? Coin.fromPartial(object.repaid) : undefined;
    return message;
  },
  fromAmino(object: MsgRepayResponseAmino): MsgRepayResponse {
    return {
      repaid: object?.repaid ? Coin.fromAmino(object.repaid) : undefined
    };
  },
  toAmino(message: MsgRepayResponse): MsgRepayResponseAmino {
    const obj: any = {};
    obj.repaid = message.repaid ? Coin.toAmino(message.repaid) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRepayResponseAminoMsg): MsgRepayResponse {
    return MsgRepayResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRepayResponseProtoMsg): MsgRepayResponse {
    return MsgRepayResponse.decode(message.value);
  },
  toProto(message: MsgRepayResponse): Uint8Array {
    return MsgRepayResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRepayResponse): MsgRepayResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgRepayResponse",
      value: MsgRepayResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLiquidateResponse(): MsgLiquidateResponse {
  return {
    repaid: Coin.fromPartial({}),
    collateral: Coin.fromPartial({}),
    reward: Coin.fromPartial({})
  };
}
export const MsgLiquidateResponse = {
  typeUrl: "/umee.leverage.v1.MsgLiquidateResponse",
  encode(message: MsgLiquidateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.repaid !== undefined) {
      Coin.encode(message.repaid, writer.uint32(10).fork()).ldelim();
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(18).fork()).ldelim();
    }
    if (message.reward !== undefined) {
      Coin.encode(message.reward, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgLiquidateResponse {
    return {
      repaid: isSet(object.repaid) ? Coin.fromJSON(object.repaid) : undefined,
      collateral: isSet(object.collateral) ? Coin.fromJSON(object.collateral) : undefined,
      reward: isSet(object.reward) ? Coin.fromJSON(object.reward) : undefined
    };
  },
  fromPartial(object: Partial<MsgLiquidateResponse>): MsgLiquidateResponse {
    const message = createBaseMsgLiquidateResponse();
    message.repaid = object.repaid !== undefined && object.repaid !== null ? Coin.fromPartial(object.repaid) : undefined;
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    message.reward = object.reward !== undefined && object.reward !== null ? Coin.fromPartial(object.reward) : undefined;
    return message;
  },
  fromAmino(object: MsgLiquidateResponseAmino): MsgLiquidateResponse {
    return {
      repaid: object?.repaid ? Coin.fromAmino(object.repaid) : undefined,
      collateral: object?.collateral ? Coin.fromAmino(object.collateral) : undefined,
      reward: object?.reward ? Coin.fromAmino(object.reward) : undefined
    };
  },
  toAmino(message: MsgLiquidateResponse): MsgLiquidateResponseAmino {
    const obj: any = {};
    obj.repaid = message.repaid ? Coin.toAmino(message.repaid) : undefined;
    obj.collateral = message.collateral ? Coin.toAmino(message.collateral) : undefined;
    obj.reward = message.reward ? Coin.toAmino(message.reward) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgLiquidateResponseAminoMsg): MsgLiquidateResponse {
    return MsgLiquidateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLiquidateResponseProtoMsg): MsgLiquidateResponse {
    return MsgLiquidateResponse.decode(message.value);
  },
  toProto(message: MsgLiquidateResponse): Uint8Array {
    return MsgLiquidateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLiquidateResponse): MsgLiquidateResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgLiquidateResponse",
      value: MsgLiquidateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLeveragedLiquidateResponse(): MsgLeveragedLiquidateResponse {
  return {
    repaid: Coin.fromPartial({}),
    reward: Coin.fromPartial({})
  };
}
export const MsgLeveragedLiquidateResponse = {
  typeUrl: "/umee.leverage.v1.MsgLeveragedLiquidateResponse",
  encode(message: MsgLeveragedLiquidateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.repaid !== undefined) {
      Coin.encode(message.repaid, writer.uint32(10).fork()).ldelim();
    }
    if (message.reward !== undefined) {
      Coin.encode(message.reward, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgLeveragedLiquidateResponse {
    return {
      repaid: isSet(object.repaid) ? Coin.fromJSON(object.repaid) : undefined,
      reward: isSet(object.reward) ? Coin.fromJSON(object.reward) : undefined
    };
  },
  fromPartial(object: Partial<MsgLeveragedLiquidateResponse>): MsgLeveragedLiquidateResponse {
    const message = createBaseMsgLeveragedLiquidateResponse();
    message.repaid = object.repaid !== undefined && object.repaid !== null ? Coin.fromPartial(object.repaid) : undefined;
    message.reward = object.reward !== undefined && object.reward !== null ? Coin.fromPartial(object.reward) : undefined;
    return message;
  },
  fromAmino(object: MsgLeveragedLiquidateResponseAmino): MsgLeveragedLiquidateResponse {
    return {
      repaid: object?.repaid ? Coin.fromAmino(object.repaid) : undefined,
      reward: object?.reward ? Coin.fromAmino(object.reward) : undefined
    };
  },
  toAmino(message: MsgLeveragedLiquidateResponse): MsgLeveragedLiquidateResponseAmino {
    const obj: any = {};
    obj.repaid = message.repaid ? Coin.toAmino(message.repaid) : undefined;
    obj.reward = message.reward ? Coin.toAmino(message.reward) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgLeveragedLiquidateResponseAminoMsg): MsgLeveragedLiquidateResponse {
    return MsgLeveragedLiquidateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLeveragedLiquidateResponseProtoMsg): MsgLeveragedLiquidateResponse {
    return MsgLeveragedLiquidateResponse.decode(message.value);
  },
  toProto(message: MsgLeveragedLiquidateResponse): Uint8Array {
    return MsgLeveragedLiquidateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLeveragedLiquidateResponse): MsgLeveragedLiquidateResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgLeveragedLiquidateResponse",
      value: MsgLeveragedLiquidateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSupplyCollateralResponse(): MsgSupplyCollateralResponse {
  return {
    collateralized: Coin.fromPartial({})
  };
}
export const MsgSupplyCollateralResponse = {
  typeUrl: "/umee.leverage.v1.MsgSupplyCollateralResponse",
  encode(message: MsgSupplyCollateralResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collateralized !== undefined) {
      Coin.encode(message.collateralized, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSupplyCollateralResponse {
    return {
      collateralized: isSet(object.collateralized) ? Coin.fromJSON(object.collateralized) : undefined
    };
  },
  fromPartial(object: Partial<MsgSupplyCollateralResponse>): MsgSupplyCollateralResponse {
    const message = createBaseMsgSupplyCollateralResponse();
    message.collateralized = object.collateralized !== undefined && object.collateralized !== null ? Coin.fromPartial(object.collateralized) : undefined;
    return message;
  },
  fromAmino(object: MsgSupplyCollateralResponseAmino): MsgSupplyCollateralResponse {
    return {
      collateralized: object?.collateralized ? Coin.fromAmino(object.collateralized) : undefined
    };
  },
  toAmino(message: MsgSupplyCollateralResponse): MsgSupplyCollateralResponseAmino {
    const obj: any = {};
    obj.collateralized = message.collateralized ? Coin.toAmino(message.collateralized) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSupplyCollateralResponseAminoMsg): MsgSupplyCollateralResponse {
    return MsgSupplyCollateralResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSupplyCollateralResponseProtoMsg): MsgSupplyCollateralResponse {
    return MsgSupplyCollateralResponse.decode(message.value);
  },
  toProto(message: MsgSupplyCollateralResponse): Uint8Array {
    return MsgSupplyCollateralResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSupplyCollateralResponse): MsgSupplyCollateralResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgSupplyCollateralResponse",
      value: MsgSupplyCollateralResponse.encode(message).finish()
    };
  }
};
function createBaseMsgGovUpdateRegistry(): MsgGovUpdateRegistry {
  return {
    authority: "",
    title: "",
    description: "",
    addTokens: [],
    updateTokens: []
  };
}
export const MsgGovUpdateRegistry = {
  typeUrl: "/umee.leverage.v1.MsgGovUpdateRegistry",
  encode(message: MsgGovUpdateRegistry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    for (const v of message.addTokens) {
      Token.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.updateTokens) {
      Token.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgGovUpdateRegistry {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      addTokens: Array.isArray(object?.addTokens) ? object.addTokens.map((e: any) => Token.fromJSON(e)) : [],
      updateTokens: Array.isArray(object?.updateTokens) ? object.updateTokens.map((e: any) => Token.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgGovUpdateRegistry>): MsgGovUpdateRegistry {
    const message = createBaseMsgGovUpdateRegistry();
    message.authority = object.authority ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.addTokens = object.addTokens?.map(e => Token.fromPartial(e)) || [];
    message.updateTokens = object.updateTokens?.map(e => Token.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgGovUpdateRegistryAmino): MsgGovUpdateRegistry {
    return {
      authority: object.authority,
      title: object.title,
      description: object.description,
      addTokens: Array.isArray(object?.add_tokens) ? object.add_tokens.map((e: any) => Token.fromAmino(e)) : [],
      updateTokens: Array.isArray(object?.update_tokens) ? object.update_tokens.map((e: any) => Token.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgGovUpdateRegistry): MsgGovUpdateRegistryAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.title = message.title;
    obj.description = message.description;
    if (message.addTokens) {
      obj.add_tokens = message.addTokens.map(e => e ? Token.toAmino(e) : undefined);
    } else {
      obj.add_tokens = [];
    }
    if (message.updateTokens) {
      obj.update_tokens = message.updateTokens.map(e => e ? Token.toAmino(e) : undefined);
    } else {
      obj.update_tokens = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgGovUpdateRegistryAminoMsg): MsgGovUpdateRegistry {
    return MsgGovUpdateRegistry.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovUpdateRegistryProtoMsg): MsgGovUpdateRegistry {
    return MsgGovUpdateRegistry.decode(message.value);
  },
  toProto(message: MsgGovUpdateRegistry): Uint8Array {
    return MsgGovUpdateRegistry.encode(message).finish();
  },
  toProtoMsg(message: MsgGovUpdateRegistry): MsgGovUpdateRegistryProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgGovUpdateRegistry",
      value: MsgGovUpdateRegistry.encode(message).finish()
    };
  }
};
function createBaseMsgGovUpdateRegistryResponse(): MsgGovUpdateRegistryResponse {
  return {};
}
export const MsgGovUpdateRegistryResponse = {
  typeUrl: "/umee.leverage.v1.MsgGovUpdateRegistryResponse",
  encode(_: MsgGovUpdateRegistryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgGovUpdateRegistryResponse {
    return {};
  },
  fromPartial(_: Partial<MsgGovUpdateRegistryResponse>): MsgGovUpdateRegistryResponse {
    const message = createBaseMsgGovUpdateRegistryResponse();
    return message;
  },
  fromAmino(_: MsgGovUpdateRegistryResponseAmino): MsgGovUpdateRegistryResponse {
    return {};
  },
  toAmino(_: MsgGovUpdateRegistryResponse): MsgGovUpdateRegistryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGovUpdateRegistryResponseAminoMsg): MsgGovUpdateRegistryResponse {
    return MsgGovUpdateRegistryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovUpdateRegistryResponseProtoMsg): MsgGovUpdateRegistryResponse {
    return MsgGovUpdateRegistryResponse.decode(message.value);
  },
  toProto(message: MsgGovUpdateRegistryResponse): Uint8Array {
    return MsgGovUpdateRegistryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGovUpdateRegistryResponse): MsgGovUpdateRegistryResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgGovUpdateRegistryResponse",
      value: MsgGovUpdateRegistryResponse.encode(message).finish()
    };
  }
};