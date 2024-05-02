import { DecCoin, DecCoinAmino, DecCoinSDKType, Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Pool, PoolAmino, PoolSDKType, Provider, ProviderAmino, ProviderSDKType, PurchaseList, PurchaseListAmino, PurchaseListSDKType, Withdraw, WithdrawAmino, WithdrawSDKType, ShieldStaking, ShieldStakingAmino, ShieldStakingSDKType } from "./shield";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the shield genesis state. */
export interface GenesisState {
    shieldAdmin: string;
    nextPoolId: bigint;
    nextPurchaseId: bigint;
    poolParams: PoolParams;
    claimProposalParams: ClaimProposalParams;
    distributionParams: DistributionParams;
    totalCollateral: string;
    totalWithdrawing: string;
    totalShield: string;
    totalClaimed: string;
    serviceFees: DecCoin[];
    remainingServiceFees: DecCoin[];
    pools: Pool[];
    providers: Provider[];
    purchaseLists: PurchaseList[];
    withdraws: Withdraw[];
    lastUpdateTime: Timestamp;
    shieldStakingRate: string;
    globalStakingPool: string;
    stakeForShields: ShieldStaking[];
    originalStakings: OriginalStaking[];
    proposalIDReimbursementPairs: ProposalIDReimbursementPair[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the shield genesis state. */
export interface GenesisStateAmino {
    shield_admin?: string;
    next_pool_id?: string;
    next_purchase_id?: string;
    pool_params?: PoolParamsAmino;
    claim_proposal_params?: ClaimProposalParamsAmino;
    distribution_params?: DistributionParamsAmino;
    total_collateral?: string;
    total_withdrawing?: string;
    total_shield?: string;
    total_claimed?: string;
    service_fees?: DecCoinAmino[];
    remaining_service_fees?: DecCoinAmino[];
    pools?: PoolAmino[];
    providers?: ProviderAmino[];
    purchase_lists?: PurchaseListAmino[];
    withdraws?: WithdrawAmino[];
    last_update_time?: string;
    shield_staking_rate?: string;
    global_staking_pool?: string;
    stake_for_shields?: ShieldStakingAmino[];
    original_stakings?: OriginalStakingAmino[];
    proposalID_reimbursement_pairs?: ProposalIDReimbursementPairAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/shentu.shield.v1alpha1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the shield genesis state. */
export interface GenesisStateSDKType {
    shield_admin: string;
    next_pool_id: bigint;
    next_purchase_id: bigint;
    pool_params: PoolParamsSDKType;
    claim_proposal_params: ClaimProposalParamsSDKType;
    distribution_params: DistributionParamsSDKType;
    total_collateral: string;
    total_withdrawing: string;
    total_shield: string;
    total_claimed: string;
    service_fees: DecCoinSDKType[];
    remaining_service_fees: DecCoinSDKType[];
    pools: PoolSDKType[];
    providers: ProviderSDKType[];
    purchase_lists: PurchaseListSDKType[];
    withdraws: WithdrawSDKType[];
    last_update_time: TimestampSDKType;
    shield_staking_rate: string;
    global_staking_pool: string;
    stake_for_shields: ShieldStakingSDKType[];
    original_stakings: OriginalStakingSDKType[];
    proposalID_reimbursement_pairs: ProposalIDReimbursementPairSDKType[];
}
export interface OriginalStaking {
    purchaseId: bigint;
    amount: string;
}
export interface OriginalStakingProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.OriginalStaking";
    value: Uint8Array;
}
export interface OriginalStakingAmino {
    purchase_id?: string;
    amount?: string;
}
export interface OriginalStakingAminoMsg {
    type: "/shentu.shield.v1alpha1.OriginalStaking";
    value: OriginalStakingAmino;
}
export interface OriginalStakingSDKType {
    purchase_id: bigint;
    amount: string;
}
export interface ProposalIDReimbursementPair {
    proposalId: bigint;
    reimbursement: Reimbursement;
}
export interface ProposalIDReimbursementPairProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.ProposalIDReimbursementPair";
    value: Uint8Array;
}
export interface ProposalIDReimbursementPairAmino {
    proposal_id?: string;
    reimbursement?: ReimbursementAmino;
}
export interface ProposalIDReimbursementPairAminoMsg {
    type: "/shentu.shield.v1alpha1.ProposalIDReimbursementPair";
    value: ProposalIDReimbursementPairAmino;
}
export interface ProposalIDReimbursementPairSDKType {
    proposal_id: bigint;
    reimbursement: ReimbursementSDKType;
}
export interface Reimbursement {
    amount: Coin[];
    beneficiary: string;
    payoutTime: Timestamp;
}
export interface ReimbursementProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.Reimbursement";
    value: Uint8Array;
}
export interface ReimbursementAmino {
    amount?: CoinAmino[];
    beneficiary?: string;
    payout_time?: string;
}
export interface ReimbursementAminoMsg {
    type: "/shentu.shield.v1alpha1.Reimbursement";
    value: ReimbursementAmino;
}
export interface ReimbursementSDKType {
    amount: CoinSDKType[];
    beneficiary: string;
    payout_time: TimestampSDKType;
}
/** PoolParams defines the parameters for the shield pool. */
export interface PoolParams {
    protectionPeriod: Duration;
    shieldFeesRate: string;
    withdrawPeriod: Duration;
    poolShieldLimit: string;
    minShieldPurchase: Coin[];
}
export interface PoolParamsProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.PoolParams";
    value: Uint8Array;
}
/** PoolParams defines the parameters for the shield pool. */
export interface PoolParamsAmino {
    protection_period?: DurationAmino;
    shield_fees_rate?: string;
    withdraw_period?: DurationAmino;
    pool_shield_limit?: string;
    min_shield_purchase?: CoinAmino[];
}
export interface PoolParamsAminoMsg {
    type: "/shentu.shield.v1alpha1.PoolParams";
    value: PoolParamsAmino;
}
/** PoolParams defines the parameters for the shield pool. */
export interface PoolParamsSDKType {
    protection_period: DurationSDKType;
    shield_fees_rate: string;
    withdraw_period: DurationSDKType;
    pool_shield_limit: string;
    min_shield_purchase: CoinSDKType[];
}
/** ClaimProposalParams defines the parameters for the shield claim proposals. */
export interface ClaimProposalParams {
    claimPeriod: Duration;
    payoutPeriod: Duration;
    minDeposit: Coin[];
    depositRate: string;
    feesRate: string;
}
export interface ClaimProposalParamsProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.ClaimProposalParams";
    value: Uint8Array;
}
/** ClaimProposalParams defines the parameters for the shield claim proposals. */
export interface ClaimProposalParamsAmino {
    claim_period?: DurationAmino;
    payout_period?: DurationAmino;
    min_deposit?: CoinAmino[];
    deposit_rate?: string;
    fees_rate?: string;
}
export interface ClaimProposalParamsAminoMsg {
    type: "/shentu.shield.v1alpha1.ClaimProposalParams";
    value: ClaimProposalParamsAmino;
}
/** ClaimProposalParams defines the parameters for the shield claim proposals. */
export interface ClaimProposalParamsSDKType {
    claim_period: DurationSDKType;
    payout_period: DurationSDKType;
    min_deposit: CoinSDKType[];
    deposit_rate: string;
    fees_rate: string;
}
/** DistributionParams defines the parameters for shield block reward. */
export interface DistributionParams {
    modelParamA: string;
    modelParamB: string;
    maxLeverage: string;
}
export interface DistributionParamsProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.DistributionParams";
    value: Uint8Array;
}
/** DistributionParams defines the parameters for shield block reward. */
export interface DistributionParamsAmino {
    model_param_a?: string;
    model_param_b?: string;
    max_leverage?: string;
}
export interface DistributionParamsAminoMsg {
    type: "/shentu.shield.v1alpha1.DistributionParams";
    value: DistributionParamsAmino;
}
/** DistributionParams defines the parameters for shield block reward. */
export interface DistributionParamsSDKType {
    model_param_a: string;
    model_param_b: string;
    max_leverage: string;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const OriginalStaking: {
    typeUrl: string;
    encode(message: OriginalStaking, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): OriginalStaking;
    fromPartial(object: Partial<OriginalStaking>): OriginalStaking;
    fromAmino(object: OriginalStakingAmino): OriginalStaking;
    toAmino(message: OriginalStaking): OriginalStakingAmino;
    fromAminoMsg(object: OriginalStakingAminoMsg): OriginalStaking;
    fromProtoMsg(message: OriginalStakingProtoMsg): OriginalStaking;
    toProto(message: OriginalStaking): Uint8Array;
    toProtoMsg(message: OriginalStaking): OriginalStakingProtoMsg;
};
export declare const ProposalIDReimbursementPair: {
    typeUrl: string;
    encode(message: ProposalIDReimbursementPair, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ProposalIDReimbursementPair;
    fromPartial(object: Partial<ProposalIDReimbursementPair>): ProposalIDReimbursementPair;
    fromAmino(object: ProposalIDReimbursementPairAmino): ProposalIDReimbursementPair;
    toAmino(message: ProposalIDReimbursementPair): ProposalIDReimbursementPairAmino;
    fromAminoMsg(object: ProposalIDReimbursementPairAminoMsg): ProposalIDReimbursementPair;
    fromProtoMsg(message: ProposalIDReimbursementPairProtoMsg): ProposalIDReimbursementPair;
    toProto(message: ProposalIDReimbursementPair): Uint8Array;
    toProtoMsg(message: ProposalIDReimbursementPair): ProposalIDReimbursementPairProtoMsg;
};
export declare const Reimbursement: {
    typeUrl: string;
    encode(message: Reimbursement, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Reimbursement;
    fromPartial(object: Partial<Reimbursement>): Reimbursement;
    fromAmino(object: ReimbursementAmino): Reimbursement;
    toAmino(message: Reimbursement): ReimbursementAmino;
    fromAminoMsg(object: ReimbursementAminoMsg): Reimbursement;
    fromProtoMsg(message: ReimbursementProtoMsg): Reimbursement;
    toProto(message: Reimbursement): Uint8Array;
    toProtoMsg(message: Reimbursement): ReimbursementProtoMsg;
};
export declare const PoolParams: {
    typeUrl: string;
    encode(message: PoolParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PoolParams;
    fromPartial(object: Partial<PoolParams>): PoolParams;
    fromAmino(object: PoolParamsAmino): PoolParams;
    toAmino(message: PoolParams): PoolParamsAmino;
    fromAminoMsg(object: PoolParamsAminoMsg): PoolParams;
    fromProtoMsg(message: PoolParamsProtoMsg): PoolParams;
    toProto(message: PoolParams): Uint8Array;
    toProtoMsg(message: PoolParams): PoolParamsProtoMsg;
};
export declare const ClaimProposalParams: {
    typeUrl: string;
    encode(message: ClaimProposalParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ClaimProposalParams;
    fromPartial(object: Partial<ClaimProposalParams>): ClaimProposalParams;
    fromAmino(object: ClaimProposalParamsAmino): ClaimProposalParams;
    toAmino(message: ClaimProposalParams): ClaimProposalParamsAmino;
    fromAminoMsg(object: ClaimProposalParamsAminoMsg): ClaimProposalParams;
    fromProtoMsg(message: ClaimProposalParamsProtoMsg): ClaimProposalParams;
    toProto(message: ClaimProposalParams): Uint8Array;
    toProtoMsg(message: ClaimProposalParams): ClaimProposalParamsProtoMsg;
};
export declare const DistributionParams: {
    typeUrl: string;
    encode(message: DistributionParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DistributionParams;
    fromPartial(object: Partial<DistributionParams>): DistributionParams;
    fromAmino(object: DistributionParamsAmino): DistributionParams;
    toAmino(message: DistributionParams): DistributionParamsAmino;
    fromAminoMsg(object: DistributionParamsAminoMsg): DistributionParams;
    fromProtoMsg(message: DistributionParamsProtoMsg): DistributionParams;
    toProto(message: DistributionParams): Uint8Array;
    toProtoMsg(message: DistributionParams): DistributionParamsProtoMsg;
};
