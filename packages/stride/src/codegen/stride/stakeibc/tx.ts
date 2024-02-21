import { Validator, ValidatorAmino, ValidatorSDKType } from "./validator";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
export interface MsgUpdateInnerRedemptionRateBounds {
  creator: string;
  chainId: string;
  minInnerRedemptionRate: string;
  maxInnerRedemptionRate: string;
}
export interface MsgUpdateInnerRedemptionRateBoundsProtoMsg {
  typeUrl: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds";
  value: Uint8Array;
}
export interface MsgUpdateInnerRedemptionRateBoundsAmino {
  creator?: string;
  chain_id?: string;
  min_inner_redemption_rate?: string;
  max_inner_redemption_rate?: string;
}
export interface MsgUpdateInnerRedemptionRateBoundsAminoMsg {
  type: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds";
  value: MsgUpdateInnerRedemptionRateBoundsAmino;
}
export interface MsgUpdateInnerRedemptionRateBoundsSDKType {
  creator: string;
  chain_id: string;
  min_inner_redemption_rate: string;
  max_inner_redemption_rate: string;
}
export interface MsgUpdateInnerRedemptionRateBoundsResponse {}
export interface MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBoundsResponse";
  value: Uint8Array;
}
export interface MsgUpdateInnerRedemptionRateBoundsResponseAmino {}
export interface MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg {
  type: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBoundsResponse";
  value: MsgUpdateInnerRedemptionRateBoundsResponseAmino;
}
export interface MsgUpdateInnerRedemptionRateBoundsResponseSDKType {}
export interface MsgLiquidStake {
  creator: string;
  amount: string;
  hostDenom: string;
}
export interface MsgLiquidStakeProtoMsg {
  typeUrl: "/stride.stakeibc.MsgLiquidStake";
  value: Uint8Array;
}
export interface MsgLiquidStakeAmino {
  creator?: string;
  amount?: string;
  host_denom?: string;
}
export interface MsgLiquidStakeAminoMsg {
  type: "/stride.stakeibc.MsgLiquidStake";
  value: MsgLiquidStakeAmino;
}
export interface MsgLiquidStakeSDKType {
  creator: string;
  amount: string;
  host_denom: string;
}
export interface MsgLiquidStakeResponse {
  stToken: Coin;
}
export interface MsgLiquidStakeResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgLiquidStakeResponse";
  value: Uint8Array;
}
export interface MsgLiquidStakeResponseAmino {
  st_token?: CoinAmino;
}
export interface MsgLiquidStakeResponseAminoMsg {
  type: "/stride.stakeibc.MsgLiquidStakeResponse";
  value: MsgLiquidStakeResponseAmino;
}
export interface MsgLiquidStakeResponseSDKType {
  st_token: CoinSDKType;
}
export interface MsgLSMLiquidStake {
  creator: string;
  amount: string;
  lsmTokenIbcDenom: string;
}
export interface MsgLSMLiquidStakeProtoMsg {
  typeUrl: "/stride.stakeibc.MsgLSMLiquidStake";
  value: Uint8Array;
}
export interface MsgLSMLiquidStakeAmino {
  creator?: string;
  amount?: string;
  lsm_token_ibc_denom?: string;
}
export interface MsgLSMLiquidStakeAminoMsg {
  type: "/stride.stakeibc.MsgLSMLiquidStake";
  value: MsgLSMLiquidStakeAmino;
}
export interface MsgLSMLiquidStakeSDKType {
  creator: string;
  amount: string;
  lsm_token_ibc_denom: string;
}
export interface MsgLSMLiquidStakeResponse {
  transactionComplete: boolean;
}
export interface MsgLSMLiquidStakeResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgLSMLiquidStakeResponse";
  value: Uint8Array;
}
export interface MsgLSMLiquidStakeResponseAmino {
  transaction_complete?: boolean;
}
export interface MsgLSMLiquidStakeResponseAminoMsg {
  type: "/stride.stakeibc.MsgLSMLiquidStakeResponse";
  value: MsgLSMLiquidStakeResponseAmino;
}
export interface MsgLSMLiquidStakeResponseSDKType {
  transaction_complete: boolean;
}
export interface MsgClearBalance {
  creator: string;
  chainId: string;
  amount: string;
  channel: string;
}
export interface MsgClearBalanceProtoMsg {
  typeUrl: "/stride.stakeibc.MsgClearBalance";
  value: Uint8Array;
}
export interface MsgClearBalanceAmino {
  creator?: string;
  chain_id?: string;
  amount?: string;
  channel?: string;
}
export interface MsgClearBalanceAminoMsg {
  type: "/stride.stakeibc.MsgClearBalance";
  value: MsgClearBalanceAmino;
}
export interface MsgClearBalanceSDKType {
  creator: string;
  chain_id: string;
  amount: string;
  channel: string;
}
export interface MsgClearBalanceResponse {}
export interface MsgClearBalanceResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgClearBalanceResponse";
  value: Uint8Array;
}
export interface MsgClearBalanceResponseAmino {}
export interface MsgClearBalanceResponseAminoMsg {
  type: "/stride.stakeibc.MsgClearBalanceResponse";
  value: MsgClearBalanceResponseAmino;
}
export interface MsgClearBalanceResponseSDKType {}
export interface MsgRedeemStake {
  creator: string;
  amount: string;
  hostZone: string;
  receiver: string;
}
export interface MsgRedeemStakeProtoMsg {
  typeUrl: "/stride.stakeibc.MsgRedeemStake";
  value: Uint8Array;
}
export interface MsgRedeemStakeAmino {
  creator?: string;
  amount?: string;
  host_zone?: string;
  receiver?: string;
}
export interface MsgRedeemStakeAminoMsg {
  type: "/stride.stakeibc.MsgRedeemStake";
  value: MsgRedeemStakeAmino;
}
export interface MsgRedeemStakeSDKType {
  creator: string;
  amount: string;
  host_zone: string;
  receiver: string;
}
export interface MsgRedeemStakeResponse {}
export interface MsgRedeemStakeResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgRedeemStakeResponse";
  value: Uint8Array;
}
export interface MsgRedeemStakeResponseAmino {}
export interface MsgRedeemStakeResponseAminoMsg {
  type: "/stride.stakeibc.MsgRedeemStakeResponse";
  value: MsgRedeemStakeResponseAmino;
}
export interface MsgRedeemStakeResponseSDKType {}
/** next: 15 */
export interface MsgRegisterHostZone {
  connectionId: string;
  bech32prefix: string;
  hostDenom: string;
  ibcDenom: string;
  creator: string;
  transferChannelId: string;
  unbondingPeriod: bigint;
  minRedemptionRate: string;
  maxRedemptionRate: string;
  lsmLiquidStakeEnabled: boolean;
}
export interface MsgRegisterHostZoneProtoMsg {
  typeUrl: "/stride.stakeibc.MsgRegisterHostZone";
  value: Uint8Array;
}
/** next: 15 */
export interface MsgRegisterHostZoneAmino {
  connection_id?: string;
  bech32prefix?: string;
  host_denom?: string;
  ibc_denom?: string;
  creator?: string;
  transfer_channel_id?: string;
  unbonding_period?: string;
  min_redemption_rate?: string;
  max_redemption_rate?: string;
  lsm_liquid_stake_enabled?: boolean;
}
export interface MsgRegisterHostZoneAminoMsg {
  type: "/stride.stakeibc.MsgRegisterHostZone";
  value: MsgRegisterHostZoneAmino;
}
/** next: 15 */
export interface MsgRegisterHostZoneSDKType {
  connection_id: string;
  bech32prefix: string;
  host_denom: string;
  ibc_denom: string;
  creator: string;
  transfer_channel_id: string;
  unbonding_period: bigint;
  min_redemption_rate: string;
  max_redemption_rate: string;
  lsm_liquid_stake_enabled: boolean;
}
export interface MsgRegisterHostZoneResponse {}
export interface MsgRegisterHostZoneResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgRegisterHostZoneResponse";
  value: Uint8Array;
}
export interface MsgRegisterHostZoneResponseAmino {}
export interface MsgRegisterHostZoneResponseAminoMsg {
  type: "/stride.stakeibc.MsgRegisterHostZoneResponse";
  value: MsgRegisterHostZoneResponseAmino;
}
export interface MsgRegisterHostZoneResponseSDKType {}
export interface MsgClaimUndelegatedTokens {
  creator: string;
  /** UserUnbondingRecords are keyed on {chain_id}.{epoch}.{receiver} */
  hostZoneId: string;
  epoch: bigint;
  receiver: string;
}
export interface MsgClaimUndelegatedTokensProtoMsg {
  typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokens";
  value: Uint8Array;
}
export interface MsgClaimUndelegatedTokensAmino {
  creator?: string;
  /** UserUnbondingRecords are keyed on {chain_id}.{epoch}.{receiver} */
  host_zone_id?: string;
  epoch?: string;
  receiver?: string;
}
export interface MsgClaimUndelegatedTokensAminoMsg {
  type: "/stride.stakeibc.MsgClaimUndelegatedTokens";
  value: MsgClaimUndelegatedTokensAmino;
}
export interface MsgClaimUndelegatedTokensSDKType {
  creator: string;
  host_zone_id: string;
  epoch: bigint;
  receiver: string;
}
export interface MsgClaimUndelegatedTokensResponse {}
export interface MsgClaimUndelegatedTokensResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokensResponse";
  value: Uint8Array;
}
export interface MsgClaimUndelegatedTokensResponseAmino {}
export interface MsgClaimUndelegatedTokensResponseAminoMsg {
  type: "/stride.stakeibc.MsgClaimUndelegatedTokensResponse";
  value: MsgClaimUndelegatedTokensResponseAmino;
}
export interface MsgClaimUndelegatedTokensResponseSDKType {}
export interface MsgRebalanceValidators {
  creator: string;
  hostZone: string;
  numRebalance: bigint;
}
export interface MsgRebalanceValidatorsProtoMsg {
  typeUrl: "/stride.stakeibc.MsgRebalanceValidators";
  value: Uint8Array;
}
export interface MsgRebalanceValidatorsAmino {
  creator?: string;
  host_zone?: string;
  num_rebalance?: string;
}
export interface MsgRebalanceValidatorsAminoMsg {
  type: "/stride.stakeibc.MsgRebalanceValidators";
  value: MsgRebalanceValidatorsAmino;
}
export interface MsgRebalanceValidatorsSDKType {
  creator: string;
  host_zone: string;
  num_rebalance: bigint;
}
export interface MsgRebalanceValidatorsResponse {}
export interface MsgRebalanceValidatorsResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgRebalanceValidatorsResponse";
  value: Uint8Array;
}
export interface MsgRebalanceValidatorsResponseAmino {}
export interface MsgRebalanceValidatorsResponseAminoMsg {
  type: "/stride.stakeibc.MsgRebalanceValidatorsResponse";
  value: MsgRebalanceValidatorsResponseAmino;
}
export interface MsgRebalanceValidatorsResponseSDKType {}
export interface MsgAddValidators {
  creator: string;
  hostZone: string;
  validators: Validator[];
}
export interface MsgAddValidatorsProtoMsg {
  typeUrl: "/stride.stakeibc.MsgAddValidators";
  value: Uint8Array;
}
export interface MsgAddValidatorsAmino {
  creator?: string;
  host_zone?: string;
  validators?: ValidatorAmino[];
}
export interface MsgAddValidatorsAminoMsg {
  type: "/stride.stakeibc.MsgAddValidators";
  value: MsgAddValidatorsAmino;
}
export interface MsgAddValidatorsSDKType {
  creator: string;
  host_zone: string;
  validators: ValidatorSDKType[];
}
export interface MsgAddValidatorsResponse {}
export interface MsgAddValidatorsResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgAddValidatorsResponse";
  value: Uint8Array;
}
export interface MsgAddValidatorsResponseAmino {}
export interface MsgAddValidatorsResponseAminoMsg {
  type: "/stride.stakeibc.MsgAddValidatorsResponse";
  value: MsgAddValidatorsResponseAmino;
}
export interface MsgAddValidatorsResponseSDKType {}
export interface ValidatorWeight {
  address: string;
  weight: bigint;
}
export interface ValidatorWeightProtoMsg {
  typeUrl: "/stride.stakeibc.ValidatorWeight";
  value: Uint8Array;
}
export interface ValidatorWeightAmino {
  address?: string;
  weight?: string;
}
export interface ValidatorWeightAminoMsg {
  type: "/stride.stakeibc.ValidatorWeight";
  value: ValidatorWeightAmino;
}
export interface ValidatorWeightSDKType {
  address: string;
  weight: bigint;
}
export interface MsgChangeValidatorWeights {
  creator: string;
  hostZone: string;
  validatorWeights: ValidatorWeight[];
}
export interface MsgChangeValidatorWeightsProtoMsg {
  typeUrl: "/stride.stakeibc.MsgChangeValidatorWeights";
  value: Uint8Array;
}
export interface MsgChangeValidatorWeightsAmino {
  creator?: string;
  host_zone?: string;
  validator_weights?: ValidatorWeightAmino[];
}
export interface MsgChangeValidatorWeightsAminoMsg {
  type: "/stride.stakeibc.MsgChangeValidatorWeights";
  value: MsgChangeValidatorWeightsAmino;
}
export interface MsgChangeValidatorWeightsSDKType {
  creator: string;
  host_zone: string;
  validator_weights: ValidatorWeightSDKType[];
}
export interface MsgChangeValidatorWeightsResponse {}
export interface MsgChangeValidatorWeightsResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgChangeValidatorWeightsResponse";
  value: Uint8Array;
}
export interface MsgChangeValidatorWeightsResponseAmino {}
export interface MsgChangeValidatorWeightsResponseAminoMsg {
  type: "/stride.stakeibc.MsgChangeValidatorWeightsResponse";
  value: MsgChangeValidatorWeightsResponseAmino;
}
export interface MsgChangeValidatorWeightsResponseSDKType {}
export interface MsgDeleteValidator {
  creator: string;
  hostZone: string;
  valAddr: string;
}
export interface MsgDeleteValidatorProtoMsg {
  typeUrl: "/stride.stakeibc.MsgDeleteValidator";
  value: Uint8Array;
}
export interface MsgDeleteValidatorAmino {
  creator?: string;
  host_zone?: string;
  val_addr?: string;
}
export interface MsgDeleteValidatorAminoMsg {
  type: "/stride.stakeibc.MsgDeleteValidator";
  value: MsgDeleteValidatorAmino;
}
export interface MsgDeleteValidatorSDKType {
  creator: string;
  host_zone: string;
  val_addr: string;
}
export interface MsgDeleteValidatorResponse {}
export interface MsgDeleteValidatorResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgDeleteValidatorResponse";
  value: Uint8Array;
}
export interface MsgDeleteValidatorResponseAmino {}
export interface MsgDeleteValidatorResponseAminoMsg {
  type: "/stride.stakeibc.MsgDeleteValidatorResponse";
  value: MsgDeleteValidatorResponseAmino;
}
export interface MsgDeleteValidatorResponseSDKType {}
export interface MsgRestoreInterchainAccount {
  creator: string;
  chainId: string;
  connectionId: string;
  accountOwner: string;
}
export interface MsgRestoreInterchainAccountProtoMsg {
  typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccount";
  value: Uint8Array;
}
export interface MsgRestoreInterchainAccountAmino {
  creator?: string;
  chain_id?: string;
  connection_id?: string;
  account_owner?: string;
}
export interface MsgRestoreInterchainAccountAminoMsg {
  type: "/stride.stakeibc.MsgRestoreInterchainAccount";
  value: MsgRestoreInterchainAccountAmino;
}
export interface MsgRestoreInterchainAccountSDKType {
  creator: string;
  chain_id: string;
  connection_id: string;
  account_owner: string;
}
export interface MsgRestoreInterchainAccountResponse {}
export interface MsgRestoreInterchainAccountResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccountResponse";
  value: Uint8Array;
}
export interface MsgRestoreInterchainAccountResponseAmino {}
export interface MsgRestoreInterchainAccountResponseAminoMsg {
  type: "/stride.stakeibc.MsgRestoreInterchainAccountResponse";
  value: MsgRestoreInterchainAccountResponseAmino;
}
export interface MsgRestoreInterchainAccountResponseSDKType {}
export interface MsgUpdateValidatorSharesExchRate {
  creator: string;
  chainId: string;
  valoper: string;
}
export interface MsgUpdateValidatorSharesExchRateProtoMsg {
  typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate";
  value: Uint8Array;
}
export interface MsgUpdateValidatorSharesExchRateAmino {
  creator?: string;
  chain_id?: string;
  valoper?: string;
}
export interface MsgUpdateValidatorSharesExchRateAminoMsg {
  type: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate";
  value: MsgUpdateValidatorSharesExchRateAmino;
}
export interface MsgUpdateValidatorSharesExchRateSDKType {
  creator: string;
  chain_id: string;
  valoper: string;
}
export interface MsgUpdateValidatorSharesExchRateResponse {}
export interface MsgUpdateValidatorSharesExchRateResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRateResponse";
  value: Uint8Array;
}
export interface MsgUpdateValidatorSharesExchRateResponseAmino {}
export interface MsgUpdateValidatorSharesExchRateResponseAminoMsg {
  type: "/stride.stakeibc.MsgUpdateValidatorSharesExchRateResponse";
  value: MsgUpdateValidatorSharesExchRateResponseAmino;
}
export interface MsgUpdateValidatorSharesExchRateResponseSDKType {}
export interface MsgCalibrateDelegation {
  creator: string;
  chainId: string;
  valoper: string;
}
export interface MsgCalibrateDelegationProtoMsg {
  typeUrl: "/stride.stakeibc.MsgCalibrateDelegation";
  value: Uint8Array;
}
export interface MsgCalibrateDelegationAmino {
  creator?: string;
  chain_id?: string;
  valoper?: string;
}
export interface MsgCalibrateDelegationAminoMsg {
  type: "/stride.stakeibc.MsgCalibrateDelegation";
  value: MsgCalibrateDelegationAmino;
}
export interface MsgCalibrateDelegationSDKType {
  creator: string;
  chain_id: string;
  valoper: string;
}
export interface MsgCalibrateDelegationResponse {}
export interface MsgCalibrateDelegationResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgCalibrateDelegationResponse";
  value: Uint8Array;
}
export interface MsgCalibrateDelegationResponseAmino {}
export interface MsgCalibrateDelegationResponseAminoMsg {
  type: "/stride.stakeibc.MsgCalibrateDelegationResponse";
  value: MsgCalibrateDelegationResponseAmino;
}
export interface MsgCalibrateDelegationResponseSDKType {}
export interface MsgResumeHostZone {
  creator: string;
  chainId: string;
}
export interface MsgResumeHostZoneProtoMsg {
  typeUrl: "/stride.stakeibc.MsgResumeHostZone";
  value: Uint8Array;
}
export interface MsgResumeHostZoneAmino {
  creator?: string;
  chain_id?: string;
}
export interface MsgResumeHostZoneAminoMsg {
  type: "/stride.stakeibc.MsgResumeHostZone";
  value: MsgResumeHostZoneAmino;
}
export interface MsgResumeHostZoneSDKType {
  creator: string;
  chain_id: string;
}
export interface MsgResumeHostZoneResponse {}
export interface MsgResumeHostZoneResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgResumeHostZoneResponse";
  value: Uint8Array;
}
export interface MsgResumeHostZoneResponseAmino {}
export interface MsgResumeHostZoneResponseAminoMsg {
  type: "/stride.stakeibc.MsgResumeHostZoneResponse";
  value: MsgResumeHostZoneResponseAmino;
}
export interface MsgResumeHostZoneResponseSDKType {}
/** Creates a new trade route */
export interface MsgCreateTradeRoute {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /** The chain ID of the host zone */
  hostChainId: string;
  /** Connection IDs between stride and the other zones */
  strideToRewardConnectionId: string;
  strideToTradeConnectionId: string;
  /** Transfer channels between the host, reward, and trade zones */
  hostToRewardTransferChannelId: string;
  rewardToTradeTransferChannelId: string;
  tradeToHostTransferChannelId: string;
  /** ibc denom for the reward token on the host zone (e.g. ibc/usdc on dYdX) */
  rewardDenomOnHost: string;
  /** native denom of reward token on the reward zone (e.g. usdc on Noble) */
  rewardDenomOnReward: string;
  /** ibc denom of the reward token on the trade zone (e.g. ibc/usdc on Osmosis) */
  rewardDenomOnTrade: string;
  /** ibc denom of the host's token on the trade zone (e.g. ibc/dydx on Osmosis) */
  hostDenomOnTrade: string;
  /** the host zone's native denom (e.g. dydx on dYdX) */
  hostDenomOnHost: string;
  /** The osmosis pool ID */
  poolId: bigint;
  /**
   * Threshold defining the percentage of tokens that could be lost in the trade
   * This captures both the loss from slippage and from a stale price on stride
   * "0.05" means the output from the trade can be no less than a 5% deviation
   * from the current value
   */
  maxAllowedSwapLossRate: string;
  /**
   * minimum amount of reward tokens to initate a swap
   * if not provided, defaults to 0
   */
  minSwapAmount: string;
  /**
   * maximum amount of reward tokens in a single swap
   * if not provided, defaults to 10e24
   */
  maxSwapAmount: string;
}
export interface MsgCreateTradeRouteProtoMsg {
  typeUrl: "/stride.stakeibc.MsgCreateTradeRoute";
  value: Uint8Array;
}
/** Creates a new trade route */
export interface MsgCreateTradeRouteAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority?: string;
  /** The chain ID of the host zone */
  host_chain_id?: string;
  /** Connection IDs between stride and the other zones */
  stride_to_reward_connection_id?: string;
  stride_to_trade_connection_id?: string;
  /** Transfer channels between the host, reward, and trade zones */
  host_to_reward_transfer_channel_id?: string;
  reward_to_trade_transfer_channel_id?: string;
  trade_to_host_transfer_channel_id?: string;
  /** ibc denom for the reward token on the host zone (e.g. ibc/usdc on dYdX) */
  reward_denom_on_host?: string;
  /** native denom of reward token on the reward zone (e.g. usdc on Noble) */
  reward_denom_on_reward?: string;
  /** ibc denom of the reward token on the trade zone (e.g. ibc/usdc on Osmosis) */
  reward_denom_on_trade?: string;
  /** ibc denom of the host's token on the trade zone (e.g. ibc/dydx on Osmosis) */
  host_denom_on_trade?: string;
  /** the host zone's native denom (e.g. dydx on dYdX) */
  host_denom_on_host?: string;
  /** The osmosis pool ID */
  pool_id?: string;
  /**
   * Threshold defining the percentage of tokens that could be lost in the trade
   * This captures both the loss from slippage and from a stale price on stride
   * "0.05" means the output from the trade can be no less than a 5% deviation
   * from the current value
   */
  max_allowed_swap_loss_rate?: string;
  /**
   * minimum amount of reward tokens to initate a swap
   * if not provided, defaults to 0
   */
  min_swap_amount?: string;
  /**
   * maximum amount of reward tokens in a single swap
   * if not provided, defaults to 10e24
   */
  max_swap_amount?: string;
}
export interface MsgCreateTradeRouteAminoMsg {
  type: "stride/x/stakeibc/MsgCreateTradeRoute";
  value: MsgCreateTradeRouteAmino;
}
/** Creates a new trade route */
export interface MsgCreateTradeRouteSDKType {
  authority: string;
  host_chain_id: string;
  stride_to_reward_connection_id: string;
  stride_to_trade_connection_id: string;
  host_to_reward_transfer_channel_id: string;
  reward_to_trade_transfer_channel_id: string;
  trade_to_host_transfer_channel_id: string;
  reward_denom_on_host: string;
  reward_denom_on_reward: string;
  reward_denom_on_trade: string;
  host_denom_on_trade: string;
  host_denom_on_host: string;
  pool_id: bigint;
  max_allowed_swap_loss_rate: string;
  min_swap_amount: string;
  max_swap_amount: string;
}
export interface MsgCreateTradeRouteResponse {}
export interface MsgCreateTradeRouteResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgCreateTradeRouteResponse";
  value: Uint8Array;
}
export interface MsgCreateTradeRouteResponseAmino {}
export interface MsgCreateTradeRouteResponseAminoMsg {
  type: "/stride.stakeibc.MsgCreateTradeRouteResponse";
  value: MsgCreateTradeRouteResponseAmino;
}
export interface MsgCreateTradeRouteResponseSDKType {}
/** Deletes a trade route */
export interface MsgDeleteTradeRoute {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /** The reward denom of the route in it's native form (e.g. usdc) */
  rewardDenom: string;
  /** The host zone's denom in it's native form (e.g. dydx) */
  hostDenom: string;
}
export interface MsgDeleteTradeRouteProtoMsg {
  typeUrl: "/stride.stakeibc.MsgDeleteTradeRoute";
  value: Uint8Array;
}
/** Deletes a trade route */
export interface MsgDeleteTradeRouteAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority?: string;
  /** The reward denom of the route in it's native form (e.g. usdc) */
  reward_denom?: string;
  /** The host zone's denom in it's native form (e.g. dydx) */
  host_denom?: string;
}
export interface MsgDeleteTradeRouteAminoMsg {
  type: "stride/x/stakeibc/MsgDeleteTradeRoute";
  value: MsgDeleteTradeRouteAmino;
}
/** Deletes a trade route */
export interface MsgDeleteTradeRouteSDKType {
  authority: string;
  reward_denom: string;
  host_denom: string;
}
export interface MsgDeleteTradeRouteResponse {}
export interface MsgDeleteTradeRouteResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgDeleteTradeRouteResponse";
  value: Uint8Array;
}
export interface MsgDeleteTradeRouteResponseAmino {}
export interface MsgDeleteTradeRouteResponseAminoMsg {
  type: "/stride.stakeibc.MsgDeleteTradeRouteResponse";
  value: MsgDeleteTradeRouteResponseAmino;
}
export interface MsgDeleteTradeRouteResponseSDKType {}
/** Updates the config of a trade route */
export interface MsgUpdateTradeRoute {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /** The reward denom of the route in it's native form (e.g. usdc) */
  rewardDenom: string;
  /** The host zone's denom in it's native form (e.g. dydx) */
  hostDenom: string;
  /** The osmosis pool ID */
  poolId: bigint;
  /**
   * Threshold defining the percentage of tokens that could be lost in the trade
   * This captures both the loss from slippage and from a stale price on stride
   * "0.05" means the output from the trade can be no less than a 5% deviation
   * from the current value
   */
  maxAllowedSwapLossRate: string;
  /**
   * minimum amount of reward tokens to initate a swap
   * if not provided, defaults to 0
   */
  minSwapAmount: string;
  /**
   * maximum amount of reward tokens in a single swap
   * if not provided, defaults to 10e24
   */
  maxSwapAmount: string;
}
export interface MsgUpdateTradeRouteProtoMsg {
  typeUrl: "/stride.stakeibc.MsgUpdateTradeRoute";
  value: Uint8Array;
}
/** Updates the config of a trade route */
export interface MsgUpdateTradeRouteAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority?: string;
  /** The reward denom of the route in it's native form (e.g. usdc) */
  reward_denom?: string;
  /** The host zone's denom in it's native form (e.g. dydx) */
  host_denom?: string;
  /** The osmosis pool ID */
  pool_id?: string;
  /**
   * Threshold defining the percentage of tokens that could be lost in the trade
   * This captures both the loss from slippage and from a stale price on stride
   * "0.05" means the output from the trade can be no less than a 5% deviation
   * from the current value
   */
  max_allowed_swap_loss_rate?: string;
  /**
   * minimum amount of reward tokens to initate a swap
   * if not provided, defaults to 0
   */
  min_swap_amount?: string;
  /**
   * maximum amount of reward tokens in a single swap
   * if not provided, defaults to 10e24
   */
  max_swap_amount?: string;
}
export interface MsgUpdateTradeRouteAminoMsg {
  type: "stride/x/stakeibc/MsgUpdateTradeRoute";
  value: MsgUpdateTradeRouteAmino;
}
/** Updates the config of a trade route */
export interface MsgUpdateTradeRouteSDKType {
  authority: string;
  reward_denom: string;
  host_denom: string;
  pool_id: bigint;
  max_allowed_swap_loss_rate: string;
  min_swap_amount: string;
  max_swap_amount: string;
}
export interface MsgUpdateTradeRouteResponse {}
export interface MsgUpdateTradeRouteResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgUpdateTradeRouteResponse";
  value: Uint8Array;
}
export interface MsgUpdateTradeRouteResponseAmino {}
export interface MsgUpdateTradeRouteResponseAminoMsg {
  type: "/stride.stakeibc.MsgUpdateTradeRouteResponse";
  value: MsgUpdateTradeRouteResponseAmino;
}
export interface MsgUpdateTradeRouteResponseSDKType {}
function createBaseMsgUpdateInnerRedemptionRateBounds(): MsgUpdateInnerRedemptionRateBounds {
  return {
    creator: "",
    chainId: "",
    minInnerRedemptionRate: "",
    maxInnerRedemptionRate: ""
  };
}
export const MsgUpdateInnerRedemptionRateBounds = {
  typeUrl: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds",
  encode(message: MsgUpdateInnerRedemptionRateBounds, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.minInnerRedemptionRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.minInnerRedemptionRate, 18).atomics);
    }
    if (message.maxInnerRedemptionRate !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.maxInnerRedemptionRate, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateInnerRedemptionRateBounds {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      minInnerRedemptionRate: isSet(object.minInnerRedemptionRate) ? String(object.minInnerRedemptionRate) : "",
      maxInnerRedemptionRate: isSet(object.maxInnerRedemptionRate) ? String(object.maxInnerRedemptionRate) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateInnerRedemptionRateBounds>): MsgUpdateInnerRedemptionRateBounds {
    const message = createBaseMsgUpdateInnerRedemptionRateBounds();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.minInnerRedemptionRate = object.minInnerRedemptionRate ?? "";
    message.maxInnerRedemptionRate = object.maxInnerRedemptionRate ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateInnerRedemptionRateBoundsAmino): MsgUpdateInnerRedemptionRateBounds {
    const message = createBaseMsgUpdateInnerRedemptionRateBounds();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.min_inner_redemption_rate !== undefined && object.min_inner_redemption_rate !== null) {
      message.minInnerRedemptionRate = object.min_inner_redemption_rate;
    }
    if (object.max_inner_redemption_rate !== undefined && object.max_inner_redemption_rate !== null) {
      message.maxInnerRedemptionRate = object.max_inner_redemption_rate;
    }
    return message;
  },
  toAmino(message: MsgUpdateInnerRedemptionRateBounds): MsgUpdateInnerRedemptionRateBoundsAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.chain_id = message.chainId;
    obj.min_inner_redemption_rate = message.minInnerRedemptionRate;
    obj.max_inner_redemption_rate = message.maxInnerRedemptionRate;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateInnerRedemptionRateBoundsAminoMsg): MsgUpdateInnerRedemptionRateBounds {
    return MsgUpdateInnerRedemptionRateBounds.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateInnerRedemptionRateBoundsProtoMsg): MsgUpdateInnerRedemptionRateBounds {
    return MsgUpdateInnerRedemptionRateBounds.decode(message.value);
  },
  toProto(message: MsgUpdateInnerRedemptionRateBounds): Uint8Array {
    return MsgUpdateInnerRedemptionRateBounds.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateInnerRedemptionRateBounds): MsgUpdateInnerRedemptionRateBoundsProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds",
      value: MsgUpdateInnerRedemptionRateBounds.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateInnerRedemptionRateBoundsResponse(): MsgUpdateInnerRedemptionRateBoundsResponse {
  return {};
}
export const MsgUpdateInnerRedemptionRateBoundsResponse = {
  typeUrl: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBoundsResponse",
  encode(_: MsgUpdateInnerRedemptionRateBoundsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateInnerRedemptionRateBoundsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateInnerRedemptionRateBoundsResponse>): MsgUpdateInnerRedemptionRateBoundsResponse {
    const message = createBaseMsgUpdateInnerRedemptionRateBoundsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateInnerRedemptionRateBoundsResponseAmino): MsgUpdateInnerRedemptionRateBoundsResponse {
    const message = createBaseMsgUpdateInnerRedemptionRateBoundsResponse();
    return message;
  },
  toAmino(_: MsgUpdateInnerRedemptionRateBoundsResponse): MsgUpdateInnerRedemptionRateBoundsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): MsgUpdateInnerRedemptionRateBoundsResponse {
    return MsgUpdateInnerRedemptionRateBoundsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): MsgUpdateInnerRedemptionRateBoundsResponse {
    return MsgUpdateInnerRedemptionRateBoundsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array {
    return MsgUpdateInnerRedemptionRateBoundsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateInnerRedemptionRateBoundsResponse): MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBoundsResponse",
      value: MsgUpdateInnerRedemptionRateBoundsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLiquidStake(): MsgLiquidStake {
  return {
    creator: "",
    amount: "",
    hostDenom: ""
  };
}
export const MsgLiquidStake = {
  typeUrl: "/stride.stakeibc.MsgLiquidStake",
  encode(message: MsgLiquidStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.hostDenom !== "") {
      writer.uint32(26).string(message.hostDenom);
    }
    return writer;
  },
  fromJSON(object: any): MsgLiquidStake {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      hostDenom: isSet(object.hostDenom) ? String(object.hostDenom) : ""
    };
  },
  fromPartial(object: Partial<MsgLiquidStake>): MsgLiquidStake {
    const message = createBaseMsgLiquidStake();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.hostDenom = object.hostDenom ?? "";
    return message;
  },
  fromAmino(object: MsgLiquidStakeAmino): MsgLiquidStake {
    const message = createBaseMsgLiquidStake();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.host_denom !== undefined && object.host_denom !== null) {
      message.hostDenom = object.host_denom;
    }
    return message;
  },
  toAmino(message: MsgLiquidStake): MsgLiquidStakeAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.amount = message.amount;
    obj.host_denom = message.hostDenom;
    return obj;
  },
  fromAminoMsg(object: MsgLiquidStakeAminoMsg): MsgLiquidStake {
    return MsgLiquidStake.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLiquidStakeProtoMsg): MsgLiquidStake {
    return MsgLiquidStake.decode(message.value);
  },
  toProto(message: MsgLiquidStake): Uint8Array {
    return MsgLiquidStake.encode(message).finish();
  },
  toProtoMsg(message: MsgLiquidStake): MsgLiquidStakeProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgLiquidStake",
      value: MsgLiquidStake.encode(message).finish()
    };
  }
};
function createBaseMsgLiquidStakeResponse(): MsgLiquidStakeResponse {
  return {
    stToken: Coin.fromPartial({})
  };
}
export const MsgLiquidStakeResponse = {
  typeUrl: "/stride.stakeibc.MsgLiquidStakeResponse",
  encode(message: MsgLiquidStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stToken !== undefined) {
      Coin.encode(message.stToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgLiquidStakeResponse {
    return {
      stToken: isSet(object.stToken) ? Coin.fromJSON(object.stToken) : undefined
    };
  },
  fromPartial(object: Partial<MsgLiquidStakeResponse>): MsgLiquidStakeResponse {
    const message = createBaseMsgLiquidStakeResponse();
    message.stToken = object.stToken !== undefined && object.stToken !== null ? Coin.fromPartial(object.stToken) : undefined;
    return message;
  },
  fromAmino(object: MsgLiquidStakeResponseAmino): MsgLiquidStakeResponse {
    const message = createBaseMsgLiquidStakeResponse();
    if (object.st_token !== undefined && object.st_token !== null) {
      message.stToken = Coin.fromAmino(object.st_token);
    }
    return message;
  },
  toAmino(message: MsgLiquidStakeResponse): MsgLiquidStakeResponseAmino {
    const obj: any = {};
    obj.st_token = message.stToken ? Coin.toAmino(message.stToken) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgLiquidStakeResponseAminoMsg): MsgLiquidStakeResponse {
    return MsgLiquidStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLiquidStakeResponseProtoMsg): MsgLiquidStakeResponse {
    return MsgLiquidStakeResponse.decode(message.value);
  },
  toProto(message: MsgLiquidStakeResponse): Uint8Array {
    return MsgLiquidStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLiquidStakeResponse): MsgLiquidStakeResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgLiquidStakeResponse",
      value: MsgLiquidStakeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLSMLiquidStake(): MsgLSMLiquidStake {
  return {
    creator: "",
    amount: "",
    lsmTokenIbcDenom: ""
  };
}
export const MsgLSMLiquidStake = {
  typeUrl: "/stride.stakeibc.MsgLSMLiquidStake",
  encode(message: MsgLSMLiquidStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.lsmTokenIbcDenom !== "") {
      writer.uint32(26).string(message.lsmTokenIbcDenom);
    }
    return writer;
  },
  fromJSON(object: any): MsgLSMLiquidStake {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      lsmTokenIbcDenom: isSet(object.lsmTokenIbcDenom) ? String(object.lsmTokenIbcDenom) : ""
    };
  },
  fromPartial(object: Partial<MsgLSMLiquidStake>): MsgLSMLiquidStake {
    const message = createBaseMsgLSMLiquidStake();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.lsmTokenIbcDenom = object.lsmTokenIbcDenom ?? "";
    return message;
  },
  fromAmino(object: MsgLSMLiquidStakeAmino): MsgLSMLiquidStake {
    const message = createBaseMsgLSMLiquidStake();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.lsm_token_ibc_denom !== undefined && object.lsm_token_ibc_denom !== null) {
      message.lsmTokenIbcDenom = object.lsm_token_ibc_denom;
    }
    return message;
  },
  toAmino(message: MsgLSMLiquidStake): MsgLSMLiquidStakeAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.amount = message.amount;
    obj.lsm_token_ibc_denom = message.lsmTokenIbcDenom;
    return obj;
  },
  fromAminoMsg(object: MsgLSMLiquidStakeAminoMsg): MsgLSMLiquidStake {
    return MsgLSMLiquidStake.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLSMLiquidStakeProtoMsg): MsgLSMLiquidStake {
    return MsgLSMLiquidStake.decode(message.value);
  },
  toProto(message: MsgLSMLiquidStake): Uint8Array {
    return MsgLSMLiquidStake.encode(message).finish();
  },
  toProtoMsg(message: MsgLSMLiquidStake): MsgLSMLiquidStakeProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgLSMLiquidStake",
      value: MsgLSMLiquidStake.encode(message).finish()
    };
  }
};
function createBaseMsgLSMLiquidStakeResponse(): MsgLSMLiquidStakeResponse {
  return {
    transactionComplete: false
  };
}
export const MsgLSMLiquidStakeResponse = {
  typeUrl: "/stride.stakeibc.MsgLSMLiquidStakeResponse",
  encode(message: MsgLSMLiquidStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.transactionComplete === true) {
      writer.uint32(8).bool(message.transactionComplete);
    }
    return writer;
  },
  fromJSON(object: any): MsgLSMLiquidStakeResponse {
    return {
      transactionComplete: isSet(object.transactionComplete) ? Boolean(object.transactionComplete) : false
    };
  },
  fromPartial(object: Partial<MsgLSMLiquidStakeResponse>): MsgLSMLiquidStakeResponse {
    const message = createBaseMsgLSMLiquidStakeResponse();
    message.transactionComplete = object.transactionComplete ?? false;
    return message;
  },
  fromAmino(object: MsgLSMLiquidStakeResponseAmino): MsgLSMLiquidStakeResponse {
    const message = createBaseMsgLSMLiquidStakeResponse();
    if (object.transaction_complete !== undefined && object.transaction_complete !== null) {
      message.transactionComplete = object.transaction_complete;
    }
    return message;
  },
  toAmino(message: MsgLSMLiquidStakeResponse): MsgLSMLiquidStakeResponseAmino {
    const obj: any = {};
    obj.transaction_complete = message.transactionComplete;
    return obj;
  },
  fromAminoMsg(object: MsgLSMLiquidStakeResponseAminoMsg): MsgLSMLiquidStakeResponse {
    return MsgLSMLiquidStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLSMLiquidStakeResponseProtoMsg): MsgLSMLiquidStakeResponse {
    return MsgLSMLiquidStakeResponse.decode(message.value);
  },
  toProto(message: MsgLSMLiquidStakeResponse): Uint8Array {
    return MsgLSMLiquidStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLSMLiquidStakeResponse): MsgLSMLiquidStakeResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgLSMLiquidStakeResponse",
      value: MsgLSMLiquidStakeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClearBalance(): MsgClearBalance {
  return {
    creator: "",
    chainId: "",
    amount: "",
    channel: ""
  };
}
export const MsgClearBalance = {
  typeUrl: "/stride.stakeibc.MsgClearBalance",
  encode(message: MsgClearBalance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.channel !== "") {
      writer.uint32(34).string(message.channel);
    }
    return writer;
  },
  fromJSON(object: any): MsgClearBalance {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      channel: isSet(object.channel) ? String(object.channel) : ""
    };
  },
  fromPartial(object: Partial<MsgClearBalance>): MsgClearBalance {
    const message = createBaseMsgClearBalance();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.amount = object.amount ?? "";
    message.channel = object.channel ?? "";
    return message;
  },
  fromAmino(object: MsgClearBalanceAmino): MsgClearBalance {
    const message = createBaseMsgClearBalance();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    }
    return message;
  },
  toAmino(message: MsgClearBalance): MsgClearBalanceAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.chain_id = message.chainId;
    obj.amount = message.amount;
    obj.channel = message.channel;
    return obj;
  },
  fromAminoMsg(object: MsgClearBalanceAminoMsg): MsgClearBalance {
    return MsgClearBalance.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClearBalanceProtoMsg): MsgClearBalance {
    return MsgClearBalance.decode(message.value);
  },
  toProto(message: MsgClearBalance): Uint8Array {
    return MsgClearBalance.encode(message).finish();
  },
  toProtoMsg(message: MsgClearBalance): MsgClearBalanceProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgClearBalance",
      value: MsgClearBalance.encode(message).finish()
    };
  }
};
function createBaseMsgClearBalanceResponse(): MsgClearBalanceResponse {
  return {};
}
export const MsgClearBalanceResponse = {
  typeUrl: "/stride.stakeibc.MsgClearBalanceResponse",
  encode(_: MsgClearBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgClearBalanceResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClearBalanceResponse>): MsgClearBalanceResponse {
    const message = createBaseMsgClearBalanceResponse();
    return message;
  },
  fromAmino(_: MsgClearBalanceResponseAmino): MsgClearBalanceResponse {
    const message = createBaseMsgClearBalanceResponse();
    return message;
  },
  toAmino(_: MsgClearBalanceResponse): MsgClearBalanceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClearBalanceResponseAminoMsg): MsgClearBalanceResponse {
    return MsgClearBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClearBalanceResponseProtoMsg): MsgClearBalanceResponse {
    return MsgClearBalanceResponse.decode(message.value);
  },
  toProto(message: MsgClearBalanceResponse): Uint8Array {
    return MsgClearBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClearBalanceResponse): MsgClearBalanceResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgClearBalanceResponse",
      value: MsgClearBalanceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemStake(): MsgRedeemStake {
  return {
    creator: "",
    amount: "",
    hostZone: "",
    receiver: ""
  };
}
export const MsgRedeemStake = {
  typeUrl: "/stride.stakeibc.MsgRedeemStake",
  encode(message: MsgRedeemStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.hostZone !== "") {
      writer.uint32(26).string(message.hostZone);
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    return writer;
  },
  fromJSON(object: any): MsgRedeemStake {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      hostZone: isSet(object.hostZone) ? String(object.hostZone) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : ""
    };
  },
  fromPartial(object: Partial<MsgRedeemStake>): MsgRedeemStake {
    const message = createBaseMsgRedeemStake();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.hostZone = object.hostZone ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object: MsgRedeemStakeAmino): MsgRedeemStake {
    const message = createBaseMsgRedeemStake();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.host_zone !== undefined && object.host_zone !== null) {
      message.hostZone = object.host_zone;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message: MsgRedeemStake): MsgRedeemStakeAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.amount = message.amount;
    obj.host_zone = message.hostZone;
    obj.receiver = message.receiver;
    return obj;
  },
  fromAminoMsg(object: MsgRedeemStakeAminoMsg): MsgRedeemStake {
    return MsgRedeemStake.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRedeemStakeProtoMsg): MsgRedeemStake {
    return MsgRedeemStake.decode(message.value);
  },
  toProto(message: MsgRedeemStake): Uint8Array {
    return MsgRedeemStake.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemStake): MsgRedeemStakeProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgRedeemStake",
      value: MsgRedeemStake.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemStakeResponse(): MsgRedeemStakeResponse {
  return {};
}
export const MsgRedeemStakeResponse = {
  typeUrl: "/stride.stakeibc.MsgRedeemStakeResponse",
  encode(_: MsgRedeemStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRedeemStakeResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRedeemStakeResponse>): MsgRedeemStakeResponse {
    const message = createBaseMsgRedeemStakeResponse();
    return message;
  },
  fromAmino(_: MsgRedeemStakeResponseAmino): MsgRedeemStakeResponse {
    const message = createBaseMsgRedeemStakeResponse();
    return message;
  },
  toAmino(_: MsgRedeemStakeResponse): MsgRedeemStakeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRedeemStakeResponseAminoMsg): MsgRedeemStakeResponse {
    return MsgRedeemStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRedeemStakeResponseProtoMsg): MsgRedeemStakeResponse {
    return MsgRedeemStakeResponse.decode(message.value);
  },
  toProto(message: MsgRedeemStakeResponse): Uint8Array {
    return MsgRedeemStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemStakeResponse): MsgRedeemStakeResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgRedeemStakeResponse",
      value: MsgRedeemStakeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterHostZone(): MsgRegisterHostZone {
  return {
    connectionId: "",
    bech32prefix: "",
    hostDenom: "",
    ibcDenom: "",
    creator: "",
    transferChannelId: "",
    unbondingPeriod: BigInt(0),
    minRedemptionRate: "",
    maxRedemptionRate: "",
    lsmLiquidStakeEnabled: false
  };
}
export const MsgRegisterHostZone = {
  typeUrl: "/stride.stakeibc.MsgRegisterHostZone",
  encode(message: MsgRegisterHostZone, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.bech32prefix !== "") {
      writer.uint32(98).string(message.bech32prefix);
    }
    if (message.hostDenom !== "") {
      writer.uint32(34).string(message.hostDenom);
    }
    if (message.ibcDenom !== "") {
      writer.uint32(42).string(message.ibcDenom);
    }
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    if (message.transferChannelId !== "") {
      writer.uint32(82).string(message.transferChannelId);
    }
    if (message.unbondingPeriod !== BigInt(0)) {
      writer.uint32(88).uint64(message.unbondingPeriod);
    }
    if (message.minRedemptionRate !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.minRedemptionRate, 18).atomics);
    }
    if (message.maxRedemptionRate !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.maxRedemptionRate, 18).atomics);
    }
    if (message.lsmLiquidStakeEnabled === true) {
      writer.uint32(120).bool(message.lsmLiquidStakeEnabled);
    }
    return writer;
  },
  fromJSON(object: any): MsgRegisterHostZone {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      bech32prefix: isSet(object.bech32prefix) ? String(object.bech32prefix) : "",
      hostDenom: isSet(object.hostDenom) ? String(object.hostDenom) : "",
      ibcDenom: isSet(object.ibcDenom) ? String(object.ibcDenom) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      transferChannelId: isSet(object.transferChannelId) ? String(object.transferChannelId) : "",
      unbondingPeriod: isSet(object.unbondingPeriod) ? BigInt(object.unbondingPeriod.toString()) : BigInt(0),
      minRedemptionRate: isSet(object.minRedemptionRate) ? String(object.minRedemptionRate) : "",
      maxRedemptionRate: isSet(object.maxRedemptionRate) ? String(object.maxRedemptionRate) : "",
      lsmLiquidStakeEnabled: isSet(object.lsmLiquidStakeEnabled) ? Boolean(object.lsmLiquidStakeEnabled) : false
    };
  },
  fromPartial(object: Partial<MsgRegisterHostZone>): MsgRegisterHostZone {
    const message = createBaseMsgRegisterHostZone();
    message.connectionId = object.connectionId ?? "";
    message.bech32prefix = object.bech32prefix ?? "";
    message.hostDenom = object.hostDenom ?? "";
    message.ibcDenom = object.ibcDenom ?? "";
    message.creator = object.creator ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    message.unbondingPeriod = object.unbondingPeriod !== undefined && object.unbondingPeriod !== null ? BigInt(object.unbondingPeriod.toString()) : BigInt(0);
    message.minRedemptionRate = object.minRedemptionRate ?? "";
    message.maxRedemptionRate = object.maxRedemptionRate ?? "";
    message.lsmLiquidStakeEnabled = object.lsmLiquidStakeEnabled ?? false;
    return message;
  },
  fromAmino(object: MsgRegisterHostZoneAmino): MsgRegisterHostZone {
    const message = createBaseMsgRegisterHostZone();
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.bech32prefix !== undefined && object.bech32prefix !== null) {
      message.bech32prefix = object.bech32prefix;
    }
    if (object.host_denom !== undefined && object.host_denom !== null) {
      message.hostDenom = object.host_denom;
    }
    if (object.ibc_denom !== undefined && object.ibc_denom !== null) {
      message.ibcDenom = object.ibc_denom;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.transfer_channel_id !== undefined && object.transfer_channel_id !== null) {
      message.transferChannelId = object.transfer_channel_id;
    }
    if (object.unbonding_period !== undefined && object.unbonding_period !== null) {
      message.unbondingPeriod = BigInt(object.unbonding_period);
    }
    if (object.min_redemption_rate !== undefined && object.min_redemption_rate !== null) {
      message.minRedemptionRate = object.min_redemption_rate;
    }
    if (object.max_redemption_rate !== undefined && object.max_redemption_rate !== null) {
      message.maxRedemptionRate = object.max_redemption_rate;
    }
    if (object.lsm_liquid_stake_enabled !== undefined && object.lsm_liquid_stake_enabled !== null) {
      message.lsmLiquidStakeEnabled = object.lsm_liquid_stake_enabled;
    }
    return message;
  },
  toAmino(message: MsgRegisterHostZone): MsgRegisterHostZoneAmino {
    const obj: any = {};
    obj.connection_id = message.connectionId;
    obj.bech32prefix = message.bech32prefix;
    obj.host_denom = message.hostDenom;
    obj.ibc_denom = message.ibcDenom;
    obj.creator = message.creator;
    obj.transfer_channel_id = message.transferChannelId;
    obj.unbonding_period = message.unbondingPeriod ? message.unbondingPeriod.toString() : undefined;
    obj.min_redemption_rate = message.minRedemptionRate;
    obj.max_redemption_rate = message.maxRedemptionRate;
    obj.lsm_liquid_stake_enabled = message.lsmLiquidStakeEnabled;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterHostZoneAminoMsg): MsgRegisterHostZone {
    return MsgRegisterHostZone.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterHostZoneProtoMsg): MsgRegisterHostZone {
    return MsgRegisterHostZone.decode(message.value);
  },
  toProto(message: MsgRegisterHostZone): Uint8Array {
    return MsgRegisterHostZone.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterHostZone): MsgRegisterHostZoneProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgRegisterHostZone",
      value: MsgRegisterHostZone.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterHostZoneResponse(): MsgRegisterHostZoneResponse {
  return {};
}
export const MsgRegisterHostZoneResponse = {
  typeUrl: "/stride.stakeibc.MsgRegisterHostZoneResponse",
  encode(_: MsgRegisterHostZoneResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRegisterHostZoneResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRegisterHostZoneResponse>): MsgRegisterHostZoneResponse {
    const message = createBaseMsgRegisterHostZoneResponse();
    return message;
  },
  fromAmino(_: MsgRegisterHostZoneResponseAmino): MsgRegisterHostZoneResponse {
    const message = createBaseMsgRegisterHostZoneResponse();
    return message;
  },
  toAmino(_: MsgRegisterHostZoneResponse): MsgRegisterHostZoneResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterHostZoneResponseAminoMsg): MsgRegisterHostZoneResponse {
    return MsgRegisterHostZoneResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterHostZoneResponseProtoMsg): MsgRegisterHostZoneResponse {
    return MsgRegisterHostZoneResponse.decode(message.value);
  },
  toProto(message: MsgRegisterHostZoneResponse): Uint8Array {
    return MsgRegisterHostZoneResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterHostZoneResponse): MsgRegisterHostZoneResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgRegisterHostZoneResponse",
      value: MsgRegisterHostZoneResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimUndelegatedTokens(): MsgClaimUndelegatedTokens {
  return {
    creator: "",
    hostZoneId: "",
    epoch: BigInt(0),
    receiver: ""
  };
}
export const MsgClaimUndelegatedTokens = {
  typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokens",
  encode(message: MsgClaimUndelegatedTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostZoneId !== "") {
      writer.uint32(18).string(message.hostZoneId);
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(24).uint64(message.epoch);
    }
    if (message.receiver !== "") {
      writer.uint32(42).string(message.receiver);
    }
    return writer;
  },
  fromJSON(object: any): MsgClaimUndelegatedTokens {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostZoneId: isSet(object.hostZoneId) ? String(object.hostZoneId) : "",
      epoch: isSet(object.epoch) ? BigInt(object.epoch.toString()) : BigInt(0),
      receiver: isSet(object.receiver) ? String(object.receiver) : ""
    };
  },
  fromPartial(object: Partial<MsgClaimUndelegatedTokens>): MsgClaimUndelegatedTokens {
    const message = createBaseMsgClaimUndelegatedTokens();
    message.creator = object.creator ?? "";
    message.hostZoneId = object.hostZoneId ?? "";
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object: MsgClaimUndelegatedTokensAmino): MsgClaimUndelegatedTokens {
    const message = createBaseMsgClaimUndelegatedTokens();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_zone_id !== undefined && object.host_zone_id !== null) {
      message.hostZoneId = object.host_zone_id;
    }
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message: MsgClaimUndelegatedTokens): MsgClaimUndelegatedTokensAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.host_zone_id = message.hostZoneId;
    obj.epoch = message.epoch ? message.epoch.toString() : undefined;
    obj.receiver = message.receiver;
    return obj;
  },
  fromAminoMsg(object: MsgClaimUndelegatedTokensAminoMsg): MsgClaimUndelegatedTokens {
    return MsgClaimUndelegatedTokens.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimUndelegatedTokensProtoMsg): MsgClaimUndelegatedTokens {
    return MsgClaimUndelegatedTokens.decode(message.value);
  },
  toProto(message: MsgClaimUndelegatedTokens): Uint8Array {
    return MsgClaimUndelegatedTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimUndelegatedTokens): MsgClaimUndelegatedTokensProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokens",
      value: MsgClaimUndelegatedTokens.encode(message).finish()
    };
  }
};
function createBaseMsgClaimUndelegatedTokensResponse(): MsgClaimUndelegatedTokensResponse {
  return {};
}
export const MsgClaimUndelegatedTokensResponse = {
  typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokensResponse",
  encode(_: MsgClaimUndelegatedTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgClaimUndelegatedTokensResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClaimUndelegatedTokensResponse>): MsgClaimUndelegatedTokensResponse {
    const message = createBaseMsgClaimUndelegatedTokensResponse();
    return message;
  },
  fromAmino(_: MsgClaimUndelegatedTokensResponseAmino): MsgClaimUndelegatedTokensResponse {
    const message = createBaseMsgClaimUndelegatedTokensResponse();
    return message;
  },
  toAmino(_: MsgClaimUndelegatedTokensResponse): MsgClaimUndelegatedTokensResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimUndelegatedTokensResponseAminoMsg): MsgClaimUndelegatedTokensResponse {
    return MsgClaimUndelegatedTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimUndelegatedTokensResponseProtoMsg): MsgClaimUndelegatedTokensResponse {
    return MsgClaimUndelegatedTokensResponse.decode(message.value);
  },
  toProto(message: MsgClaimUndelegatedTokensResponse): Uint8Array {
    return MsgClaimUndelegatedTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimUndelegatedTokensResponse): MsgClaimUndelegatedTokensResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokensResponse",
      value: MsgClaimUndelegatedTokensResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRebalanceValidators(): MsgRebalanceValidators {
  return {
    creator: "",
    hostZone: "",
    numRebalance: BigInt(0)
  };
}
export const MsgRebalanceValidators = {
  typeUrl: "/stride.stakeibc.MsgRebalanceValidators",
  encode(message: MsgRebalanceValidators, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostZone !== "") {
      writer.uint32(18).string(message.hostZone);
    }
    if (message.numRebalance !== BigInt(0)) {
      writer.uint32(24).uint64(message.numRebalance);
    }
    return writer;
  },
  fromJSON(object: any): MsgRebalanceValidators {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostZone: isSet(object.hostZone) ? String(object.hostZone) : "",
      numRebalance: isSet(object.numRebalance) ? BigInt(object.numRebalance.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgRebalanceValidators>): MsgRebalanceValidators {
    const message = createBaseMsgRebalanceValidators();
    message.creator = object.creator ?? "";
    message.hostZone = object.hostZone ?? "";
    message.numRebalance = object.numRebalance !== undefined && object.numRebalance !== null ? BigInt(object.numRebalance.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRebalanceValidatorsAmino): MsgRebalanceValidators {
    const message = createBaseMsgRebalanceValidators();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_zone !== undefined && object.host_zone !== null) {
      message.hostZone = object.host_zone;
    }
    if (object.num_rebalance !== undefined && object.num_rebalance !== null) {
      message.numRebalance = BigInt(object.num_rebalance);
    }
    return message;
  },
  toAmino(message: MsgRebalanceValidators): MsgRebalanceValidatorsAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.host_zone = message.hostZone;
    obj.num_rebalance = message.numRebalance ? message.numRebalance.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRebalanceValidatorsAminoMsg): MsgRebalanceValidators {
    return MsgRebalanceValidators.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRebalanceValidatorsProtoMsg): MsgRebalanceValidators {
    return MsgRebalanceValidators.decode(message.value);
  },
  toProto(message: MsgRebalanceValidators): Uint8Array {
    return MsgRebalanceValidators.encode(message).finish();
  },
  toProtoMsg(message: MsgRebalanceValidators): MsgRebalanceValidatorsProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgRebalanceValidators",
      value: MsgRebalanceValidators.encode(message).finish()
    };
  }
};
function createBaseMsgRebalanceValidatorsResponse(): MsgRebalanceValidatorsResponse {
  return {};
}
export const MsgRebalanceValidatorsResponse = {
  typeUrl: "/stride.stakeibc.MsgRebalanceValidatorsResponse",
  encode(_: MsgRebalanceValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRebalanceValidatorsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRebalanceValidatorsResponse>): MsgRebalanceValidatorsResponse {
    const message = createBaseMsgRebalanceValidatorsResponse();
    return message;
  },
  fromAmino(_: MsgRebalanceValidatorsResponseAmino): MsgRebalanceValidatorsResponse {
    const message = createBaseMsgRebalanceValidatorsResponse();
    return message;
  },
  toAmino(_: MsgRebalanceValidatorsResponse): MsgRebalanceValidatorsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRebalanceValidatorsResponseAminoMsg): MsgRebalanceValidatorsResponse {
    return MsgRebalanceValidatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRebalanceValidatorsResponseProtoMsg): MsgRebalanceValidatorsResponse {
    return MsgRebalanceValidatorsResponse.decode(message.value);
  },
  toProto(message: MsgRebalanceValidatorsResponse): Uint8Array {
    return MsgRebalanceValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRebalanceValidatorsResponse): MsgRebalanceValidatorsResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgRebalanceValidatorsResponse",
      value: MsgRebalanceValidatorsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddValidators(): MsgAddValidators {
  return {
    creator: "",
    hostZone: "",
    validators: []
  };
}
export const MsgAddValidators = {
  typeUrl: "/stride.stakeibc.MsgAddValidators",
  encode(message: MsgAddValidators, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostZone !== "") {
      writer.uint32(18).string(message.hostZone);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgAddValidators {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostZone: isSet(object.hostZone) ? String(object.hostZone) : "",
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgAddValidators>): MsgAddValidators {
    const message = createBaseMsgAddValidators();
    message.creator = object.creator ?? "";
    message.hostZone = object.hostZone ?? "";
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgAddValidatorsAmino): MsgAddValidators {
    const message = createBaseMsgAddValidators();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_zone !== undefined && object.host_zone !== null) {
      message.hostZone = object.host_zone;
    }
    message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgAddValidators): MsgAddValidatorsAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.host_zone = message.hostZone;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgAddValidatorsAminoMsg): MsgAddValidators {
    return MsgAddValidators.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddValidatorsProtoMsg): MsgAddValidators {
    return MsgAddValidators.decode(message.value);
  },
  toProto(message: MsgAddValidators): Uint8Array {
    return MsgAddValidators.encode(message).finish();
  },
  toProtoMsg(message: MsgAddValidators): MsgAddValidatorsProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgAddValidators",
      value: MsgAddValidators.encode(message).finish()
    };
  }
};
function createBaseMsgAddValidatorsResponse(): MsgAddValidatorsResponse {
  return {};
}
export const MsgAddValidatorsResponse = {
  typeUrl: "/stride.stakeibc.MsgAddValidatorsResponse",
  encode(_: MsgAddValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAddValidatorsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddValidatorsResponse>): MsgAddValidatorsResponse {
    const message = createBaseMsgAddValidatorsResponse();
    return message;
  },
  fromAmino(_: MsgAddValidatorsResponseAmino): MsgAddValidatorsResponse {
    const message = createBaseMsgAddValidatorsResponse();
    return message;
  },
  toAmino(_: MsgAddValidatorsResponse): MsgAddValidatorsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddValidatorsResponseAminoMsg): MsgAddValidatorsResponse {
    return MsgAddValidatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddValidatorsResponseProtoMsg): MsgAddValidatorsResponse {
    return MsgAddValidatorsResponse.decode(message.value);
  },
  toProto(message: MsgAddValidatorsResponse): Uint8Array {
    return MsgAddValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddValidatorsResponse): MsgAddValidatorsResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgAddValidatorsResponse",
      value: MsgAddValidatorsResponse.encode(message).finish()
    };
  }
};
function createBaseValidatorWeight(): ValidatorWeight {
  return {
    address: "",
    weight: BigInt(0)
  };
}
export const ValidatorWeight = {
  typeUrl: "/stride.stakeibc.ValidatorWeight",
  encode(message: ValidatorWeight, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== BigInt(0)) {
      writer.uint32(16).uint64(message.weight);
    }
    return writer;
  },
  fromJSON(object: any): ValidatorWeight {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      weight: isSet(object.weight) ? BigInt(object.weight.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<ValidatorWeight>): ValidatorWeight {
    const message = createBaseValidatorWeight();
    message.address = object.address ?? "";
    message.weight = object.weight !== undefined && object.weight !== null ? BigInt(object.weight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ValidatorWeightAmino): ValidatorWeight {
    const message = createBaseValidatorWeight();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = BigInt(object.weight);
    }
    return message;
  },
  toAmino(message: ValidatorWeight): ValidatorWeightAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.weight = message.weight ? message.weight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorWeightAminoMsg): ValidatorWeight {
    return ValidatorWeight.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorWeightProtoMsg): ValidatorWeight {
    return ValidatorWeight.decode(message.value);
  },
  toProto(message: ValidatorWeight): Uint8Array {
    return ValidatorWeight.encode(message).finish();
  },
  toProtoMsg(message: ValidatorWeight): ValidatorWeightProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.ValidatorWeight",
      value: ValidatorWeight.encode(message).finish()
    };
  }
};
function createBaseMsgChangeValidatorWeights(): MsgChangeValidatorWeights {
  return {
    creator: "",
    hostZone: "",
    validatorWeights: []
  };
}
export const MsgChangeValidatorWeights = {
  typeUrl: "/stride.stakeibc.MsgChangeValidatorWeights",
  encode(message: MsgChangeValidatorWeights, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostZone !== "") {
      writer.uint32(18).string(message.hostZone);
    }
    for (const v of message.validatorWeights) {
      ValidatorWeight.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgChangeValidatorWeights {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostZone: isSet(object.hostZone) ? String(object.hostZone) : "",
      validatorWeights: Array.isArray(object?.validatorWeights) ? object.validatorWeights.map((e: any) => ValidatorWeight.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgChangeValidatorWeights>): MsgChangeValidatorWeights {
    const message = createBaseMsgChangeValidatorWeights();
    message.creator = object.creator ?? "";
    message.hostZone = object.hostZone ?? "";
    message.validatorWeights = object.validatorWeights?.map(e => ValidatorWeight.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgChangeValidatorWeightsAmino): MsgChangeValidatorWeights {
    const message = createBaseMsgChangeValidatorWeights();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_zone !== undefined && object.host_zone !== null) {
      message.hostZone = object.host_zone;
    }
    message.validatorWeights = object.validator_weights?.map(e => ValidatorWeight.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgChangeValidatorWeights): MsgChangeValidatorWeightsAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.host_zone = message.hostZone;
    if (message.validatorWeights) {
      obj.validator_weights = message.validatorWeights.map(e => e ? ValidatorWeight.toAmino(e) : undefined);
    } else {
      obj.validator_weights = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgChangeValidatorWeightsAminoMsg): MsgChangeValidatorWeights {
    return MsgChangeValidatorWeights.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeValidatorWeightsProtoMsg): MsgChangeValidatorWeights {
    return MsgChangeValidatorWeights.decode(message.value);
  },
  toProto(message: MsgChangeValidatorWeights): Uint8Array {
    return MsgChangeValidatorWeights.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeValidatorWeights): MsgChangeValidatorWeightsProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgChangeValidatorWeights",
      value: MsgChangeValidatorWeights.encode(message).finish()
    };
  }
};
function createBaseMsgChangeValidatorWeightsResponse(): MsgChangeValidatorWeightsResponse {
  return {};
}
export const MsgChangeValidatorWeightsResponse = {
  typeUrl: "/stride.stakeibc.MsgChangeValidatorWeightsResponse",
  encode(_: MsgChangeValidatorWeightsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgChangeValidatorWeightsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgChangeValidatorWeightsResponse>): MsgChangeValidatorWeightsResponse {
    const message = createBaseMsgChangeValidatorWeightsResponse();
    return message;
  },
  fromAmino(_: MsgChangeValidatorWeightsResponseAmino): MsgChangeValidatorWeightsResponse {
    const message = createBaseMsgChangeValidatorWeightsResponse();
    return message;
  },
  toAmino(_: MsgChangeValidatorWeightsResponse): MsgChangeValidatorWeightsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChangeValidatorWeightsResponseAminoMsg): MsgChangeValidatorWeightsResponse {
    return MsgChangeValidatorWeightsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeValidatorWeightsResponseProtoMsg): MsgChangeValidatorWeightsResponse {
    return MsgChangeValidatorWeightsResponse.decode(message.value);
  },
  toProto(message: MsgChangeValidatorWeightsResponse): Uint8Array {
    return MsgChangeValidatorWeightsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeValidatorWeightsResponse): MsgChangeValidatorWeightsResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgChangeValidatorWeightsResponse",
      value: MsgChangeValidatorWeightsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteValidator(): MsgDeleteValidator {
  return {
    creator: "",
    hostZone: "",
    valAddr: ""
  };
}
export const MsgDeleteValidator = {
  typeUrl: "/stride.stakeibc.MsgDeleteValidator",
  encode(message: MsgDeleteValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostZone !== "") {
      writer.uint32(18).string(message.hostZone);
    }
    if (message.valAddr !== "") {
      writer.uint32(26).string(message.valAddr);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteValidator {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostZone: isSet(object.hostZone) ? String(object.hostZone) : "",
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : ""
    };
  },
  fromPartial(object: Partial<MsgDeleteValidator>): MsgDeleteValidator {
    const message = createBaseMsgDeleteValidator();
    message.creator = object.creator ?? "";
    message.hostZone = object.hostZone ?? "";
    message.valAddr = object.valAddr ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteValidatorAmino): MsgDeleteValidator {
    const message = createBaseMsgDeleteValidator();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_zone !== undefined && object.host_zone !== null) {
      message.hostZone = object.host_zone;
    }
    if (object.val_addr !== undefined && object.val_addr !== null) {
      message.valAddr = object.val_addr;
    }
    return message;
  },
  toAmino(message: MsgDeleteValidator): MsgDeleteValidatorAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.host_zone = message.hostZone;
    obj.val_addr = message.valAddr;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteValidatorAminoMsg): MsgDeleteValidator {
    return MsgDeleteValidator.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteValidatorProtoMsg): MsgDeleteValidator {
    return MsgDeleteValidator.decode(message.value);
  },
  toProto(message: MsgDeleteValidator): Uint8Array {
    return MsgDeleteValidator.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteValidator): MsgDeleteValidatorProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgDeleteValidator",
      value: MsgDeleteValidator.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteValidatorResponse(): MsgDeleteValidatorResponse {
  return {};
}
export const MsgDeleteValidatorResponse = {
  typeUrl: "/stride.stakeibc.MsgDeleteValidatorResponse",
  encode(_: MsgDeleteValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteValidatorResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteValidatorResponse>): MsgDeleteValidatorResponse {
    const message = createBaseMsgDeleteValidatorResponse();
    return message;
  },
  fromAmino(_: MsgDeleteValidatorResponseAmino): MsgDeleteValidatorResponse {
    const message = createBaseMsgDeleteValidatorResponse();
    return message;
  },
  toAmino(_: MsgDeleteValidatorResponse): MsgDeleteValidatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteValidatorResponseAminoMsg): MsgDeleteValidatorResponse {
    return MsgDeleteValidatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteValidatorResponseProtoMsg): MsgDeleteValidatorResponse {
    return MsgDeleteValidatorResponse.decode(message.value);
  },
  toProto(message: MsgDeleteValidatorResponse): Uint8Array {
    return MsgDeleteValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteValidatorResponse): MsgDeleteValidatorResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgDeleteValidatorResponse",
      value: MsgDeleteValidatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRestoreInterchainAccount(): MsgRestoreInterchainAccount {
  return {
    creator: "",
    chainId: "",
    connectionId: "",
    accountOwner: ""
  };
}
export const MsgRestoreInterchainAccount = {
  typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccount",
  encode(message: MsgRestoreInterchainAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    if (message.accountOwner !== "") {
      writer.uint32(34).string(message.accountOwner);
    }
    return writer;
  },
  fromJSON(object: any): MsgRestoreInterchainAccount {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      accountOwner: isSet(object.accountOwner) ? String(object.accountOwner) : ""
    };
  },
  fromPartial(object: Partial<MsgRestoreInterchainAccount>): MsgRestoreInterchainAccount {
    const message = createBaseMsgRestoreInterchainAccount();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.connectionId = object.connectionId ?? "";
    message.accountOwner = object.accountOwner ?? "";
    return message;
  },
  fromAmino(object: MsgRestoreInterchainAccountAmino): MsgRestoreInterchainAccount {
    const message = createBaseMsgRestoreInterchainAccount();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.account_owner !== undefined && object.account_owner !== null) {
      message.accountOwner = object.account_owner;
    }
    return message;
  },
  toAmino(message: MsgRestoreInterchainAccount): MsgRestoreInterchainAccountAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.chain_id = message.chainId;
    obj.connection_id = message.connectionId;
    obj.account_owner = message.accountOwner;
    return obj;
  },
  fromAminoMsg(object: MsgRestoreInterchainAccountAminoMsg): MsgRestoreInterchainAccount {
    return MsgRestoreInterchainAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRestoreInterchainAccountProtoMsg): MsgRestoreInterchainAccount {
    return MsgRestoreInterchainAccount.decode(message.value);
  },
  toProto(message: MsgRestoreInterchainAccount): Uint8Array {
    return MsgRestoreInterchainAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgRestoreInterchainAccount): MsgRestoreInterchainAccountProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccount",
      value: MsgRestoreInterchainAccount.encode(message).finish()
    };
  }
};
function createBaseMsgRestoreInterchainAccountResponse(): MsgRestoreInterchainAccountResponse {
  return {};
}
export const MsgRestoreInterchainAccountResponse = {
  typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccountResponse",
  encode(_: MsgRestoreInterchainAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRestoreInterchainAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRestoreInterchainAccountResponse>): MsgRestoreInterchainAccountResponse {
    const message = createBaseMsgRestoreInterchainAccountResponse();
    return message;
  },
  fromAmino(_: MsgRestoreInterchainAccountResponseAmino): MsgRestoreInterchainAccountResponse {
    const message = createBaseMsgRestoreInterchainAccountResponse();
    return message;
  },
  toAmino(_: MsgRestoreInterchainAccountResponse): MsgRestoreInterchainAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRestoreInterchainAccountResponseAminoMsg): MsgRestoreInterchainAccountResponse {
    return MsgRestoreInterchainAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRestoreInterchainAccountResponseProtoMsg): MsgRestoreInterchainAccountResponse {
    return MsgRestoreInterchainAccountResponse.decode(message.value);
  },
  toProto(message: MsgRestoreInterchainAccountResponse): Uint8Array {
    return MsgRestoreInterchainAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRestoreInterchainAccountResponse): MsgRestoreInterchainAccountResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccountResponse",
      value: MsgRestoreInterchainAccountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateValidatorSharesExchRate(): MsgUpdateValidatorSharesExchRate {
  return {
    creator: "",
    chainId: "",
    valoper: ""
  };
}
export const MsgUpdateValidatorSharesExchRate = {
  typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate",
  encode(message: MsgUpdateValidatorSharesExchRate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.valoper !== "") {
      writer.uint32(26).string(message.valoper);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateValidatorSharesExchRate {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      valoper: isSet(object.valoper) ? String(object.valoper) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateValidatorSharesExchRate>): MsgUpdateValidatorSharesExchRate {
    const message = createBaseMsgUpdateValidatorSharesExchRate();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.valoper = object.valoper ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateValidatorSharesExchRateAmino): MsgUpdateValidatorSharesExchRate {
    const message = createBaseMsgUpdateValidatorSharesExchRate();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.valoper !== undefined && object.valoper !== null) {
      message.valoper = object.valoper;
    }
    return message;
  },
  toAmino(message: MsgUpdateValidatorSharesExchRate): MsgUpdateValidatorSharesExchRateAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.chain_id = message.chainId;
    obj.valoper = message.valoper;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateValidatorSharesExchRateAminoMsg): MsgUpdateValidatorSharesExchRate {
    return MsgUpdateValidatorSharesExchRate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateValidatorSharesExchRateProtoMsg): MsgUpdateValidatorSharesExchRate {
    return MsgUpdateValidatorSharesExchRate.decode(message.value);
  },
  toProto(message: MsgUpdateValidatorSharesExchRate): Uint8Array {
    return MsgUpdateValidatorSharesExchRate.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateValidatorSharesExchRate): MsgUpdateValidatorSharesExchRateProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate",
      value: MsgUpdateValidatorSharesExchRate.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateValidatorSharesExchRateResponse(): MsgUpdateValidatorSharesExchRateResponse {
  return {};
}
export const MsgUpdateValidatorSharesExchRateResponse = {
  typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRateResponse",
  encode(_: MsgUpdateValidatorSharesExchRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateValidatorSharesExchRateResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateValidatorSharesExchRateResponse>): MsgUpdateValidatorSharesExchRateResponse {
    const message = createBaseMsgUpdateValidatorSharesExchRateResponse();
    return message;
  },
  fromAmino(_: MsgUpdateValidatorSharesExchRateResponseAmino): MsgUpdateValidatorSharesExchRateResponse {
    const message = createBaseMsgUpdateValidatorSharesExchRateResponse();
    return message;
  },
  toAmino(_: MsgUpdateValidatorSharesExchRateResponse): MsgUpdateValidatorSharesExchRateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateValidatorSharesExchRateResponseAminoMsg): MsgUpdateValidatorSharesExchRateResponse {
    return MsgUpdateValidatorSharesExchRateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateValidatorSharesExchRateResponseProtoMsg): MsgUpdateValidatorSharesExchRateResponse {
    return MsgUpdateValidatorSharesExchRateResponse.decode(message.value);
  },
  toProto(message: MsgUpdateValidatorSharesExchRateResponse): Uint8Array {
    return MsgUpdateValidatorSharesExchRateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateValidatorSharesExchRateResponse): MsgUpdateValidatorSharesExchRateResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRateResponse",
      value: MsgUpdateValidatorSharesExchRateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCalibrateDelegation(): MsgCalibrateDelegation {
  return {
    creator: "",
    chainId: "",
    valoper: ""
  };
}
export const MsgCalibrateDelegation = {
  typeUrl: "/stride.stakeibc.MsgCalibrateDelegation",
  encode(message: MsgCalibrateDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.valoper !== "") {
      writer.uint32(26).string(message.valoper);
    }
    return writer;
  },
  fromJSON(object: any): MsgCalibrateDelegation {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      valoper: isSet(object.valoper) ? String(object.valoper) : ""
    };
  },
  fromPartial(object: Partial<MsgCalibrateDelegation>): MsgCalibrateDelegation {
    const message = createBaseMsgCalibrateDelegation();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.valoper = object.valoper ?? "";
    return message;
  },
  fromAmino(object: MsgCalibrateDelegationAmino): MsgCalibrateDelegation {
    const message = createBaseMsgCalibrateDelegation();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.valoper !== undefined && object.valoper !== null) {
      message.valoper = object.valoper;
    }
    return message;
  },
  toAmino(message: MsgCalibrateDelegation): MsgCalibrateDelegationAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.chain_id = message.chainId;
    obj.valoper = message.valoper;
    return obj;
  },
  fromAminoMsg(object: MsgCalibrateDelegationAminoMsg): MsgCalibrateDelegation {
    return MsgCalibrateDelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCalibrateDelegationProtoMsg): MsgCalibrateDelegation {
    return MsgCalibrateDelegation.decode(message.value);
  },
  toProto(message: MsgCalibrateDelegation): Uint8Array {
    return MsgCalibrateDelegation.encode(message).finish();
  },
  toProtoMsg(message: MsgCalibrateDelegation): MsgCalibrateDelegationProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgCalibrateDelegation",
      value: MsgCalibrateDelegation.encode(message).finish()
    };
  }
};
function createBaseMsgCalibrateDelegationResponse(): MsgCalibrateDelegationResponse {
  return {};
}
export const MsgCalibrateDelegationResponse = {
  typeUrl: "/stride.stakeibc.MsgCalibrateDelegationResponse",
  encode(_: MsgCalibrateDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCalibrateDelegationResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCalibrateDelegationResponse>): MsgCalibrateDelegationResponse {
    const message = createBaseMsgCalibrateDelegationResponse();
    return message;
  },
  fromAmino(_: MsgCalibrateDelegationResponseAmino): MsgCalibrateDelegationResponse {
    const message = createBaseMsgCalibrateDelegationResponse();
    return message;
  },
  toAmino(_: MsgCalibrateDelegationResponse): MsgCalibrateDelegationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCalibrateDelegationResponseAminoMsg): MsgCalibrateDelegationResponse {
    return MsgCalibrateDelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCalibrateDelegationResponseProtoMsg): MsgCalibrateDelegationResponse {
    return MsgCalibrateDelegationResponse.decode(message.value);
  },
  toProto(message: MsgCalibrateDelegationResponse): Uint8Array {
    return MsgCalibrateDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCalibrateDelegationResponse): MsgCalibrateDelegationResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgCalibrateDelegationResponse",
      value: MsgCalibrateDelegationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgResumeHostZone(): MsgResumeHostZone {
  return {
    creator: "",
    chainId: ""
  };
}
export const MsgResumeHostZone = {
  typeUrl: "/stride.stakeibc.MsgResumeHostZone",
  encode(message: MsgResumeHostZone, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): MsgResumeHostZone {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },
  fromPartial(object: Partial<MsgResumeHostZone>): MsgResumeHostZone {
    const message = createBaseMsgResumeHostZone();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    return message;
  },
  fromAmino(object: MsgResumeHostZoneAmino): MsgResumeHostZone {
    const message = createBaseMsgResumeHostZone();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    return message;
  },
  toAmino(message: MsgResumeHostZone): MsgResumeHostZoneAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.chain_id = message.chainId;
    return obj;
  },
  fromAminoMsg(object: MsgResumeHostZoneAminoMsg): MsgResumeHostZone {
    return MsgResumeHostZone.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgResumeHostZoneProtoMsg): MsgResumeHostZone {
    return MsgResumeHostZone.decode(message.value);
  },
  toProto(message: MsgResumeHostZone): Uint8Array {
    return MsgResumeHostZone.encode(message).finish();
  },
  toProtoMsg(message: MsgResumeHostZone): MsgResumeHostZoneProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgResumeHostZone",
      value: MsgResumeHostZone.encode(message).finish()
    };
  }
};
function createBaseMsgResumeHostZoneResponse(): MsgResumeHostZoneResponse {
  return {};
}
export const MsgResumeHostZoneResponse = {
  typeUrl: "/stride.stakeibc.MsgResumeHostZoneResponse",
  encode(_: MsgResumeHostZoneResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgResumeHostZoneResponse {
    return {};
  },
  fromPartial(_: Partial<MsgResumeHostZoneResponse>): MsgResumeHostZoneResponse {
    const message = createBaseMsgResumeHostZoneResponse();
    return message;
  },
  fromAmino(_: MsgResumeHostZoneResponseAmino): MsgResumeHostZoneResponse {
    const message = createBaseMsgResumeHostZoneResponse();
    return message;
  },
  toAmino(_: MsgResumeHostZoneResponse): MsgResumeHostZoneResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgResumeHostZoneResponseAminoMsg): MsgResumeHostZoneResponse {
    return MsgResumeHostZoneResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgResumeHostZoneResponseProtoMsg): MsgResumeHostZoneResponse {
    return MsgResumeHostZoneResponse.decode(message.value);
  },
  toProto(message: MsgResumeHostZoneResponse): Uint8Array {
    return MsgResumeHostZoneResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgResumeHostZoneResponse): MsgResumeHostZoneResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgResumeHostZoneResponse",
      value: MsgResumeHostZoneResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateTradeRoute(): MsgCreateTradeRoute {
  return {
    authority: "",
    hostChainId: "",
    strideToRewardConnectionId: "",
    strideToTradeConnectionId: "",
    hostToRewardTransferChannelId: "",
    rewardToTradeTransferChannelId: "",
    tradeToHostTransferChannelId: "",
    rewardDenomOnHost: "",
    rewardDenomOnReward: "",
    rewardDenomOnTrade: "",
    hostDenomOnTrade: "",
    hostDenomOnHost: "",
    poolId: BigInt(0),
    maxAllowedSwapLossRate: "",
    minSwapAmount: "",
    maxSwapAmount: ""
  };
}
export const MsgCreateTradeRoute = {
  typeUrl: "/stride.stakeibc.MsgCreateTradeRoute",
  encode(message: MsgCreateTradeRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.hostChainId !== "") {
      writer.uint32(18).string(message.hostChainId);
    }
    if (message.strideToRewardConnectionId !== "") {
      writer.uint32(26).string(message.strideToRewardConnectionId);
    }
    if (message.strideToTradeConnectionId !== "") {
      writer.uint32(34).string(message.strideToTradeConnectionId);
    }
    if (message.hostToRewardTransferChannelId !== "") {
      writer.uint32(42).string(message.hostToRewardTransferChannelId);
    }
    if (message.rewardToTradeTransferChannelId !== "") {
      writer.uint32(50).string(message.rewardToTradeTransferChannelId);
    }
    if (message.tradeToHostTransferChannelId !== "") {
      writer.uint32(58).string(message.tradeToHostTransferChannelId);
    }
    if (message.rewardDenomOnHost !== "") {
      writer.uint32(66).string(message.rewardDenomOnHost);
    }
    if (message.rewardDenomOnReward !== "") {
      writer.uint32(74).string(message.rewardDenomOnReward);
    }
    if (message.rewardDenomOnTrade !== "") {
      writer.uint32(82).string(message.rewardDenomOnTrade);
    }
    if (message.hostDenomOnTrade !== "") {
      writer.uint32(90).string(message.hostDenomOnTrade);
    }
    if (message.hostDenomOnHost !== "") {
      writer.uint32(98).string(message.hostDenomOnHost);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(104).uint64(message.poolId);
    }
    if (message.maxAllowedSwapLossRate !== "") {
      writer.uint32(114).string(message.maxAllowedSwapLossRate);
    }
    if (message.minSwapAmount !== "") {
      writer.uint32(122).string(message.minSwapAmount);
    }
    if (message.maxSwapAmount !== "") {
      writer.uint32(130).string(message.maxSwapAmount);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateTradeRoute {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      hostChainId: isSet(object.hostChainId) ? String(object.hostChainId) : "",
      strideToRewardConnectionId: isSet(object.strideToRewardConnectionId) ? String(object.strideToRewardConnectionId) : "",
      strideToTradeConnectionId: isSet(object.strideToTradeConnectionId) ? String(object.strideToTradeConnectionId) : "",
      hostToRewardTransferChannelId: isSet(object.hostToRewardTransferChannelId) ? String(object.hostToRewardTransferChannelId) : "",
      rewardToTradeTransferChannelId: isSet(object.rewardToTradeTransferChannelId) ? String(object.rewardToTradeTransferChannelId) : "",
      tradeToHostTransferChannelId: isSet(object.tradeToHostTransferChannelId) ? String(object.tradeToHostTransferChannelId) : "",
      rewardDenomOnHost: isSet(object.rewardDenomOnHost) ? String(object.rewardDenomOnHost) : "",
      rewardDenomOnReward: isSet(object.rewardDenomOnReward) ? String(object.rewardDenomOnReward) : "",
      rewardDenomOnTrade: isSet(object.rewardDenomOnTrade) ? String(object.rewardDenomOnTrade) : "",
      hostDenomOnTrade: isSet(object.hostDenomOnTrade) ? String(object.hostDenomOnTrade) : "",
      hostDenomOnHost: isSet(object.hostDenomOnHost) ? String(object.hostDenomOnHost) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      maxAllowedSwapLossRate: isSet(object.maxAllowedSwapLossRate) ? String(object.maxAllowedSwapLossRate) : "",
      minSwapAmount: isSet(object.minSwapAmount) ? String(object.minSwapAmount) : "",
      maxSwapAmount: isSet(object.maxSwapAmount) ? String(object.maxSwapAmount) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateTradeRoute>): MsgCreateTradeRoute {
    const message = createBaseMsgCreateTradeRoute();
    message.authority = object.authority ?? "";
    message.hostChainId = object.hostChainId ?? "";
    message.strideToRewardConnectionId = object.strideToRewardConnectionId ?? "";
    message.strideToTradeConnectionId = object.strideToTradeConnectionId ?? "";
    message.hostToRewardTransferChannelId = object.hostToRewardTransferChannelId ?? "";
    message.rewardToTradeTransferChannelId = object.rewardToTradeTransferChannelId ?? "";
    message.tradeToHostTransferChannelId = object.tradeToHostTransferChannelId ?? "";
    message.rewardDenomOnHost = object.rewardDenomOnHost ?? "";
    message.rewardDenomOnReward = object.rewardDenomOnReward ?? "";
    message.rewardDenomOnTrade = object.rewardDenomOnTrade ?? "";
    message.hostDenomOnTrade = object.hostDenomOnTrade ?? "";
    message.hostDenomOnHost = object.hostDenomOnHost ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.maxAllowedSwapLossRate = object.maxAllowedSwapLossRate ?? "";
    message.minSwapAmount = object.minSwapAmount ?? "";
    message.maxSwapAmount = object.maxSwapAmount ?? "";
    return message;
  },
  fromAmino(object: MsgCreateTradeRouteAmino): MsgCreateTradeRoute {
    const message = createBaseMsgCreateTradeRoute();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.host_chain_id !== undefined && object.host_chain_id !== null) {
      message.hostChainId = object.host_chain_id;
    }
    if (object.stride_to_reward_connection_id !== undefined && object.stride_to_reward_connection_id !== null) {
      message.strideToRewardConnectionId = object.stride_to_reward_connection_id;
    }
    if (object.stride_to_trade_connection_id !== undefined && object.stride_to_trade_connection_id !== null) {
      message.strideToTradeConnectionId = object.stride_to_trade_connection_id;
    }
    if (object.host_to_reward_transfer_channel_id !== undefined && object.host_to_reward_transfer_channel_id !== null) {
      message.hostToRewardTransferChannelId = object.host_to_reward_transfer_channel_id;
    }
    if (object.reward_to_trade_transfer_channel_id !== undefined && object.reward_to_trade_transfer_channel_id !== null) {
      message.rewardToTradeTransferChannelId = object.reward_to_trade_transfer_channel_id;
    }
    if (object.trade_to_host_transfer_channel_id !== undefined && object.trade_to_host_transfer_channel_id !== null) {
      message.tradeToHostTransferChannelId = object.trade_to_host_transfer_channel_id;
    }
    if (object.reward_denom_on_host !== undefined && object.reward_denom_on_host !== null) {
      message.rewardDenomOnHost = object.reward_denom_on_host;
    }
    if (object.reward_denom_on_reward !== undefined && object.reward_denom_on_reward !== null) {
      message.rewardDenomOnReward = object.reward_denom_on_reward;
    }
    if (object.reward_denom_on_trade !== undefined && object.reward_denom_on_trade !== null) {
      message.rewardDenomOnTrade = object.reward_denom_on_trade;
    }
    if (object.host_denom_on_trade !== undefined && object.host_denom_on_trade !== null) {
      message.hostDenomOnTrade = object.host_denom_on_trade;
    }
    if (object.host_denom_on_host !== undefined && object.host_denom_on_host !== null) {
      message.hostDenomOnHost = object.host_denom_on_host;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.max_allowed_swap_loss_rate !== undefined && object.max_allowed_swap_loss_rate !== null) {
      message.maxAllowedSwapLossRate = object.max_allowed_swap_loss_rate;
    }
    if (object.min_swap_amount !== undefined && object.min_swap_amount !== null) {
      message.minSwapAmount = object.min_swap_amount;
    }
    if (object.max_swap_amount !== undefined && object.max_swap_amount !== null) {
      message.maxSwapAmount = object.max_swap_amount;
    }
    return message;
  },
  toAmino(message: MsgCreateTradeRoute): MsgCreateTradeRouteAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.host_chain_id = message.hostChainId;
    obj.stride_to_reward_connection_id = message.strideToRewardConnectionId;
    obj.stride_to_trade_connection_id = message.strideToTradeConnectionId;
    obj.host_to_reward_transfer_channel_id = message.hostToRewardTransferChannelId;
    obj.reward_to_trade_transfer_channel_id = message.rewardToTradeTransferChannelId;
    obj.trade_to_host_transfer_channel_id = message.tradeToHostTransferChannelId;
    obj.reward_denom_on_host = message.rewardDenomOnHost;
    obj.reward_denom_on_reward = message.rewardDenomOnReward;
    obj.reward_denom_on_trade = message.rewardDenomOnTrade;
    obj.host_denom_on_trade = message.hostDenomOnTrade;
    obj.host_denom_on_host = message.hostDenomOnHost;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.max_allowed_swap_loss_rate = message.maxAllowedSwapLossRate;
    obj.min_swap_amount = message.minSwapAmount;
    obj.max_swap_amount = message.maxSwapAmount;
    return obj;
  },
  fromAminoMsg(object: MsgCreateTradeRouteAminoMsg): MsgCreateTradeRoute {
    return MsgCreateTradeRoute.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateTradeRoute): MsgCreateTradeRouteAminoMsg {
    return {
      type: "stride/x/stakeibc/MsgCreateTradeRoute",
      value: MsgCreateTradeRoute.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateTradeRouteProtoMsg): MsgCreateTradeRoute {
    return MsgCreateTradeRoute.decode(message.value);
  },
  toProto(message: MsgCreateTradeRoute): Uint8Array {
    return MsgCreateTradeRoute.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTradeRoute): MsgCreateTradeRouteProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgCreateTradeRoute",
      value: MsgCreateTradeRoute.encode(message).finish()
    };
  }
};
function createBaseMsgCreateTradeRouteResponse(): MsgCreateTradeRouteResponse {
  return {};
}
export const MsgCreateTradeRouteResponse = {
  typeUrl: "/stride.stakeibc.MsgCreateTradeRouteResponse",
  encode(_: MsgCreateTradeRouteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreateTradeRouteResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateTradeRouteResponse>): MsgCreateTradeRouteResponse {
    const message = createBaseMsgCreateTradeRouteResponse();
    return message;
  },
  fromAmino(_: MsgCreateTradeRouteResponseAmino): MsgCreateTradeRouteResponse {
    const message = createBaseMsgCreateTradeRouteResponse();
    return message;
  },
  toAmino(_: MsgCreateTradeRouteResponse): MsgCreateTradeRouteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateTradeRouteResponseAminoMsg): MsgCreateTradeRouteResponse {
    return MsgCreateTradeRouteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateTradeRouteResponseProtoMsg): MsgCreateTradeRouteResponse {
    return MsgCreateTradeRouteResponse.decode(message.value);
  },
  toProto(message: MsgCreateTradeRouteResponse): Uint8Array {
    return MsgCreateTradeRouteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTradeRouteResponse): MsgCreateTradeRouteResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgCreateTradeRouteResponse",
      value: MsgCreateTradeRouteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteTradeRoute(): MsgDeleteTradeRoute {
  return {
    authority: "",
    rewardDenom: "",
    hostDenom: ""
  };
}
export const MsgDeleteTradeRoute = {
  typeUrl: "/stride.stakeibc.MsgDeleteTradeRoute",
  encode(message: MsgDeleteTradeRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.rewardDenom !== "") {
      writer.uint32(18).string(message.rewardDenom);
    }
    if (message.hostDenom !== "") {
      writer.uint32(26).string(message.hostDenom);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteTradeRoute {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      rewardDenom: isSet(object.rewardDenom) ? String(object.rewardDenom) : "",
      hostDenom: isSet(object.hostDenom) ? String(object.hostDenom) : ""
    };
  },
  fromPartial(object: Partial<MsgDeleteTradeRoute>): MsgDeleteTradeRoute {
    const message = createBaseMsgDeleteTradeRoute();
    message.authority = object.authority ?? "";
    message.rewardDenom = object.rewardDenom ?? "";
    message.hostDenom = object.hostDenom ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteTradeRouteAmino): MsgDeleteTradeRoute {
    const message = createBaseMsgDeleteTradeRoute();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.reward_denom !== undefined && object.reward_denom !== null) {
      message.rewardDenom = object.reward_denom;
    }
    if (object.host_denom !== undefined && object.host_denom !== null) {
      message.hostDenom = object.host_denom;
    }
    return message;
  },
  toAmino(message: MsgDeleteTradeRoute): MsgDeleteTradeRouteAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.reward_denom = message.rewardDenom;
    obj.host_denom = message.hostDenom;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteTradeRouteAminoMsg): MsgDeleteTradeRoute {
    return MsgDeleteTradeRoute.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeleteTradeRoute): MsgDeleteTradeRouteAminoMsg {
    return {
      type: "stride/x/stakeibc/MsgDeleteTradeRoute",
      value: MsgDeleteTradeRoute.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeleteTradeRouteProtoMsg): MsgDeleteTradeRoute {
    return MsgDeleteTradeRoute.decode(message.value);
  },
  toProto(message: MsgDeleteTradeRoute): Uint8Array {
    return MsgDeleteTradeRoute.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteTradeRoute): MsgDeleteTradeRouteProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgDeleteTradeRoute",
      value: MsgDeleteTradeRoute.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteTradeRouteResponse(): MsgDeleteTradeRouteResponse {
  return {};
}
export const MsgDeleteTradeRouteResponse = {
  typeUrl: "/stride.stakeibc.MsgDeleteTradeRouteResponse",
  encode(_: MsgDeleteTradeRouteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteTradeRouteResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteTradeRouteResponse>): MsgDeleteTradeRouteResponse {
    const message = createBaseMsgDeleteTradeRouteResponse();
    return message;
  },
  fromAmino(_: MsgDeleteTradeRouteResponseAmino): MsgDeleteTradeRouteResponse {
    const message = createBaseMsgDeleteTradeRouteResponse();
    return message;
  },
  toAmino(_: MsgDeleteTradeRouteResponse): MsgDeleteTradeRouteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteTradeRouteResponseAminoMsg): MsgDeleteTradeRouteResponse {
    return MsgDeleteTradeRouteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteTradeRouteResponseProtoMsg): MsgDeleteTradeRouteResponse {
    return MsgDeleteTradeRouteResponse.decode(message.value);
  },
  toProto(message: MsgDeleteTradeRouteResponse): Uint8Array {
    return MsgDeleteTradeRouteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteTradeRouteResponse): MsgDeleteTradeRouteResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgDeleteTradeRouteResponse",
      value: MsgDeleteTradeRouteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateTradeRoute(): MsgUpdateTradeRoute {
  return {
    authority: "",
    rewardDenom: "",
    hostDenom: "",
    poolId: BigInt(0),
    maxAllowedSwapLossRate: "",
    minSwapAmount: "",
    maxSwapAmount: ""
  };
}
export const MsgUpdateTradeRoute = {
  typeUrl: "/stride.stakeibc.MsgUpdateTradeRoute",
  encode(message: MsgUpdateTradeRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.rewardDenom !== "") {
      writer.uint32(18).string(message.rewardDenom);
    }
    if (message.hostDenom !== "") {
      writer.uint32(26).string(message.hostDenom);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(32).uint64(message.poolId);
    }
    if (message.maxAllowedSwapLossRate !== "") {
      writer.uint32(42).string(message.maxAllowedSwapLossRate);
    }
    if (message.minSwapAmount !== "") {
      writer.uint32(50).string(message.minSwapAmount);
    }
    if (message.maxSwapAmount !== "") {
      writer.uint32(58).string(message.maxSwapAmount);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateTradeRoute {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      rewardDenom: isSet(object.rewardDenom) ? String(object.rewardDenom) : "",
      hostDenom: isSet(object.hostDenom) ? String(object.hostDenom) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      maxAllowedSwapLossRate: isSet(object.maxAllowedSwapLossRate) ? String(object.maxAllowedSwapLossRate) : "",
      minSwapAmount: isSet(object.minSwapAmount) ? String(object.minSwapAmount) : "",
      maxSwapAmount: isSet(object.maxSwapAmount) ? String(object.maxSwapAmount) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateTradeRoute>): MsgUpdateTradeRoute {
    const message = createBaseMsgUpdateTradeRoute();
    message.authority = object.authority ?? "";
    message.rewardDenom = object.rewardDenom ?? "";
    message.hostDenom = object.hostDenom ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.maxAllowedSwapLossRate = object.maxAllowedSwapLossRate ?? "";
    message.minSwapAmount = object.minSwapAmount ?? "";
    message.maxSwapAmount = object.maxSwapAmount ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateTradeRouteAmino): MsgUpdateTradeRoute {
    const message = createBaseMsgUpdateTradeRoute();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.reward_denom !== undefined && object.reward_denom !== null) {
      message.rewardDenom = object.reward_denom;
    }
    if (object.host_denom !== undefined && object.host_denom !== null) {
      message.hostDenom = object.host_denom;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.max_allowed_swap_loss_rate !== undefined && object.max_allowed_swap_loss_rate !== null) {
      message.maxAllowedSwapLossRate = object.max_allowed_swap_loss_rate;
    }
    if (object.min_swap_amount !== undefined && object.min_swap_amount !== null) {
      message.minSwapAmount = object.min_swap_amount;
    }
    if (object.max_swap_amount !== undefined && object.max_swap_amount !== null) {
      message.maxSwapAmount = object.max_swap_amount;
    }
    return message;
  },
  toAmino(message: MsgUpdateTradeRoute): MsgUpdateTradeRouteAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.reward_denom = message.rewardDenom;
    obj.host_denom = message.hostDenom;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.max_allowed_swap_loss_rate = message.maxAllowedSwapLossRate;
    obj.min_swap_amount = message.minSwapAmount;
    obj.max_swap_amount = message.maxSwapAmount;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateTradeRouteAminoMsg): MsgUpdateTradeRoute {
    return MsgUpdateTradeRoute.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateTradeRoute): MsgUpdateTradeRouteAminoMsg {
    return {
      type: "stride/x/stakeibc/MsgUpdateTradeRoute",
      value: MsgUpdateTradeRoute.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateTradeRouteProtoMsg): MsgUpdateTradeRoute {
    return MsgUpdateTradeRoute.decode(message.value);
  },
  toProto(message: MsgUpdateTradeRoute): Uint8Array {
    return MsgUpdateTradeRoute.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateTradeRoute): MsgUpdateTradeRouteProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgUpdateTradeRoute",
      value: MsgUpdateTradeRoute.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateTradeRouteResponse(): MsgUpdateTradeRouteResponse {
  return {};
}
export const MsgUpdateTradeRouteResponse = {
  typeUrl: "/stride.stakeibc.MsgUpdateTradeRouteResponse",
  encode(_: MsgUpdateTradeRouteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateTradeRouteResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateTradeRouteResponse>): MsgUpdateTradeRouteResponse {
    const message = createBaseMsgUpdateTradeRouteResponse();
    return message;
  },
  fromAmino(_: MsgUpdateTradeRouteResponseAmino): MsgUpdateTradeRouteResponse {
    const message = createBaseMsgUpdateTradeRouteResponse();
    return message;
  },
  toAmino(_: MsgUpdateTradeRouteResponse): MsgUpdateTradeRouteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateTradeRouteResponseAminoMsg): MsgUpdateTradeRouteResponse {
    return MsgUpdateTradeRouteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateTradeRouteResponseProtoMsg): MsgUpdateTradeRouteResponse {
    return MsgUpdateTradeRouteResponse.decode(message.value);
  },
  toProto(message: MsgUpdateTradeRouteResponse): Uint8Array {
    return MsgUpdateTradeRouteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateTradeRouteResponse): MsgUpdateTradeRouteResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgUpdateTradeRouteResponse",
      value: MsgUpdateTradeRouteResponse.encode(message).finish()
    };
  }
};