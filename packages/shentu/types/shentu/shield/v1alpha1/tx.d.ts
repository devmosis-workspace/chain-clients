import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** MsgCreatePool defines the attributes of a create-pool transaction. */
export interface MsgCreatePool {
    from: string;
    shield: Coin[];
    deposit: Coin[];
    sponsor: string;
    sponsorAddr: string;
    description: string;
    shieldLimit: string;
}
export interface MsgCreatePoolProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgCreatePool";
    value: Uint8Array;
}
/** MsgCreatePool defines the attributes of a create-pool transaction. */
export interface MsgCreatePoolAmino {
    from?: string;
    shield?: CoinAmino[];
    deposit?: CoinAmino[];
    sponsor?: string;
    sponsor_addr?: string;
    description?: string;
    shield_limit?: string;
}
export interface MsgCreatePoolAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgCreatePool";
    value: MsgCreatePoolAmino;
}
/** MsgCreatePool defines the attributes of a create-pool transaction. */
export interface MsgCreatePoolSDKType {
    from: string;
    shield: CoinSDKType[];
    deposit: CoinSDKType[];
    sponsor: string;
    sponsor_addr: string;
    description: string;
    shield_limit: string;
}
export interface MsgCreatePoolResponse {
}
export interface MsgCreatePoolResponseProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgCreatePoolResponse";
    value: Uint8Array;
}
export interface MsgCreatePoolResponseAmino {
}
export interface MsgCreatePoolResponseAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgCreatePoolResponse";
    value: MsgCreatePoolResponseAmino;
}
export interface MsgCreatePoolResponseSDKType {
}
/** MsgUpdatePool defines the attributes of a shield pool update transaction. */
export interface MsgUpdatePool {
    from: string;
    shield: Coin[];
    serviceFees: Coin[];
    poolId: bigint;
    description: string;
    shieldLimit: string;
}
export interface MsgUpdatePoolProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgUpdatePool";
    value: Uint8Array;
}
/** MsgUpdatePool defines the attributes of a shield pool update transaction. */
export interface MsgUpdatePoolAmino {
    from?: string;
    shield?: CoinAmino[];
    service_fees?: CoinAmino[];
    pool_id?: string;
    description?: string;
    shield_limit?: string;
}
export interface MsgUpdatePoolAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgUpdatePool";
    value: MsgUpdatePoolAmino;
}
/** MsgUpdatePool defines the attributes of a shield pool update transaction. */
export interface MsgUpdatePoolSDKType {
    from: string;
    shield: CoinSDKType[];
    service_fees: CoinSDKType[];
    pool_id: bigint;
    description: string;
    shield_limit: string;
}
export interface MsgUpdatePoolResponse {
}
export interface MsgUpdatePoolResponseProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgUpdatePoolResponse";
    value: Uint8Array;
}
export interface MsgUpdatePoolResponseAmino {
}
export interface MsgUpdatePoolResponseAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgUpdatePoolResponse";
    value: MsgUpdatePoolResponseAmino;
}
export interface MsgUpdatePoolResponseSDKType {
}
/** MsgPausePool defines the attributes of a pausing a shield pool. */
export interface MsgPausePool {
    from: string;
    poolId: bigint;
}
export interface MsgPausePoolProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgPausePool";
    value: Uint8Array;
}
/** MsgPausePool defines the attributes of a pausing a shield pool. */
export interface MsgPausePoolAmino {
    from?: string;
    pool_id?: string;
}
export interface MsgPausePoolAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgPausePool";
    value: MsgPausePoolAmino;
}
/** MsgPausePool defines the attributes of a pausing a shield pool. */
export interface MsgPausePoolSDKType {
    from: string;
    pool_id: bigint;
}
export interface MsgPausePoolResponse {
}
export interface MsgPausePoolResponseProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgPausePoolResponse";
    value: Uint8Array;
}
export interface MsgPausePoolResponseAmino {
}
export interface MsgPausePoolResponseAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgPausePoolResponse";
    value: MsgPausePoolResponseAmino;
}
export interface MsgPausePoolResponseSDKType {
}
/** MsgResumePool defines the attributes of a resuming a shield pool. */
export interface MsgResumePool {
    from: string;
    poolId: bigint;
}
export interface MsgResumePoolProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgResumePool";
    value: Uint8Array;
}
/** MsgResumePool defines the attributes of a resuming a shield pool. */
export interface MsgResumePoolAmino {
    from?: string;
    pool_id?: string;
}
export interface MsgResumePoolAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgResumePool";
    value: MsgResumePoolAmino;
}
/** MsgResumePool defines the attributes of a resuming a shield pool. */
export interface MsgResumePoolSDKType {
    from: string;
    pool_id: bigint;
}
export interface MsgResumePoolResponse {
}
export interface MsgResumePoolResponseProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgResumePoolResponse";
    value: Uint8Array;
}
export interface MsgResumePoolResponseAmino {
}
export interface MsgResumePoolResponseAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgResumePoolResponse";
    value: MsgResumePoolResponseAmino;
}
export interface MsgResumePoolResponseSDKType {
}
/** MsgDepositCollateral defines the attributes of a depositing collaterals. */
export interface MsgDepositCollateral {
    from: string;
    collateral: Coin[];
}
export interface MsgDepositCollateralProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgDepositCollateral";
    value: Uint8Array;
}
/** MsgDepositCollateral defines the attributes of a depositing collaterals. */
export interface MsgDepositCollateralAmino {
    from?: string;
    collateral?: CoinAmino[];
}
export interface MsgDepositCollateralAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgDepositCollateral";
    value: MsgDepositCollateralAmino;
}
/** MsgDepositCollateral defines the attributes of a depositing collaterals. */
export interface MsgDepositCollateralSDKType {
    from: string;
    collateral: CoinSDKType[];
}
export interface MsgDepositCollateralResponse {
}
export interface MsgDepositCollateralResponseProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgDepositCollateralResponse";
    value: Uint8Array;
}
export interface MsgDepositCollateralResponseAmino {
}
export interface MsgDepositCollateralResponseAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgDepositCollateralResponse";
    value: MsgDepositCollateralResponseAmino;
}
export interface MsgDepositCollateralResponseSDKType {
}
/** NewMsgWithdrawCollateral defines the attributes of a withdrawing collaterals. */
export interface MsgWithdrawCollateral {
    from: string;
    collateral: Coin[];
}
export interface MsgWithdrawCollateralProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawCollateral";
    value: Uint8Array;
}
/** NewMsgWithdrawCollateral defines the attributes of a withdrawing collaterals. */
export interface MsgWithdrawCollateralAmino {
    from?: string;
    collateral?: CoinAmino[];
}
export interface MsgWithdrawCollateralAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgWithdrawCollateral";
    value: MsgWithdrawCollateralAmino;
}
/** NewMsgWithdrawCollateral defines the attributes of a withdrawing collaterals. */
export interface MsgWithdrawCollateralSDKType {
    from: string;
    collateral: CoinSDKType[];
}
export interface MsgWithdrawCollateralResponse {
}
export interface MsgWithdrawCollateralResponseProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawCollateralResponse";
    value: Uint8Array;
}
export interface MsgWithdrawCollateralResponseAmino {
}
export interface MsgWithdrawCollateralResponseAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgWithdrawCollateralResponse";
    value: MsgWithdrawCollateralResponseAmino;
}
export interface MsgWithdrawCollateralResponseSDKType {
}
/** MsgWithdrawForeignRewards defines attribute of withdraw rewards transaction. */
export interface MsgWithdrawRewards {
    from: string;
}
export interface MsgWithdrawRewardsProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawRewards";
    value: Uint8Array;
}
/** MsgWithdrawForeignRewards defines attribute of withdraw rewards transaction. */
export interface MsgWithdrawRewardsAmino {
    from?: string;
}
export interface MsgWithdrawRewardsAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgWithdrawRewards";
    value: MsgWithdrawRewardsAmino;
}
/** MsgWithdrawForeignRewards defines attribute of withdraw rewards transaction. */
export interface MsgWithdrawRewardsSDKType {
    from: string;
}
export interface MsgWithdrawRewardsResponse {
}
export interface MsgWithdrawRewardsResponseProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawRewardsResponse";
    value: Uint8Array;
}
export interface MsgWithdrawRewardsResponseAmino {
}
export interface MsgWithdrawRewardsResponseAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgWithdrawRewardsResponse";
    value: MsgWithdrawRewardsResponseAmino;
}
export interface MsgWithdrawRewardsResponseSDKType {
}
/** MsgWithdrawForeignRewards defines attributes of withdraw foreign rewards transaction. */
export interface MsgWithdrawForeignRewards {
    from: string;
    denom: string;
    toAddr: string;
}
export interface MsgWithdrawForeignRewardsProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawForeignRewards";
    value: Uint8Array;
}
/** MsgWithdrawForeignRewards defines attributes of withdraw foreign rewards transaction. */
export interface MsgWithdrawForeignRewardsAmino {
    from?: string;
    denom?: string;
    to_addr?: string;
}
export interface MsgWithdrawForeignRewardsAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgWithdrawForeignRewards";
    value: MsgWithdrawForeignRewardsAmino;
}
/** MsgWithdrawForeignRewards defines attributes of withdraw foreign rewards transaction. */
export interface MsgWithdrawForeignRewardsSDKType {
    from: string;
    denom: string;
    to_addr: string;
}
export interface MsgWithdrawForeignRewardsResponse {
}
export interface MsgWithdrawForeignRewardsResponseProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawForeignRewardsResponse";
    value: Uint8Array;
}
export interface MsgWithdrawForeignRewardsResponseAmino {
}
export interface MsgWithdrawForeignRewardsResponseAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgWithdrawForeignRewardsResponse";
    value: MsgWithdrawForeignRewardsResponseAmino;
}
export interface MsgWithdrawForeignRewardsResponseSDKType {
}
/** MsgClearPayouts defines attributes of clear payouts transaction. */
export interface MsgClearPayouts {
    from: string;
    denom: string;
}
export interface MsgClearPayoutsProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgClearPayouts";
    value: Uint8Array;
}
/** MsgClearPayouts defines attributes of clear payouts transaction. */
export interface MsgClearPayoutsAmino {
    from?: string;
    denom?: string;
}
export interface MsgClearPayoutsAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgClearPayouts";
    value: MsgClearPayoutsAmino;
}
/** MsgClearPayouts defines attributes of clear payouts transaction. */
export interface MsgClearPayoutsSDKType {
    from: string;
    denom: string;
}
export interface MsgClearPayoutsResponse {
}
export interface MsgClearPayoutsResponseProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgClearPayoutsResponse";
    value: Uint8Array;
}
export interface MsgClearPayoutsResponseAmino {
}
export interface MsgClearPayoutsResponseAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgClearPayoutsResponse";
    value: MsgClearPayoutsResponseAmino;
}
export interface MsgClearPayoutsResponseSDKType {
}
/** MsgPurchaseShield defines the attributes of purchase shield transaction. */
export interface MsgPurchaseShield {
    poolId: bigint;
    shield: Coin[];
    description: string;
    from: string;
}
export interface MsgPurchaseShieldProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgPurchaseShield";
    value: Uint8Array;
}
/** MsgPurchaseShield defines the attributes of purchase shield transaction. */
export interface MsgPurchaseShieldAmino {
    pool_id?: string;
    shield?: CoinAmino[];
    description?: string;
    from?: string;
}
export interface MsgPurchaseShieldAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgPurchaseShield";
    value: MsgPurchaseShieldAmino;
}
/** MsgPurchaseShield defines the attributes of purchase shield transaction. */
export interface MsgPurchaseShieldSDKType {
    pool_id: bigint;
    shield: CoinSDKType[];
    description: string;
    from: string;
}
export interface MsgPurchaseShieldResponse {
}
export interface MsgPurchaseShieldResponseProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgPurchaseShieldResponse";
    value: Uint8Array;
}
export interface MsgPurchaseShieldResponseAmino {
}
export interface MsgPurchaseShieldResponseAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgPurchaseShieldResponse";
    value: MsgPurchaseShieldResponseAmino;
}
export interface MsgPurchaseShieldResponseSDKType {
}
/** MsgWithdrawReimburse defines the attributes of withdraw reimbursement transaction. */
export interface MsgWithdrawReimbursement {
    proposalId: bigint;
    from: string;
}
export interface MsgWithdrawReimbursementProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawReimbursement";
    value: Uint8Array;
}
/** MsgWithdrawReimburse defines the attributes of withdraw reimbursement transaction. */
export interface MsgWithdrawReimbursementAmino {
    proposal_id?: string;
    from?: string;
}
export interface MsgWithdrawReimbursementAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgWithdrawReimbursement";
    value: MsgWithdrawReimbursementAmino;
}
/** MsgWithdrawReimburse defines the attributes of withdraw reimbursement transaction. */
export interface MsgWithdrawReimbursementSDKType {
    proposal_id: bigint;
    from: string;
}
export interface MsgWithdrawReimbursementResponse {
}
export interface MsgWithdrawReimbursementResponseProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawReimbursementResponse";
    value: Uint8Array;
}
export interface MsgWithdrawReimbursementResponseAmino {
}
export interface MsgWithdrawReimbursementResponseAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgWithdrawReimbursementResponse";
    value: MsgWithdrawReimbursementResponseAmino;
}
export interface MsgWithdrawReimbursementResponseSDKType {
}
/**
 * TODO: eliminate this msg type
 * MsgStakeForShield defines the attributes of staking for purchase transaction.
 */
export interface MsgStakeForShield {
    poolId: bigint;
    shield: Coin[];
    description: string;
    from: string;
}
export interface MsgStakeForShieldProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgStakeForShield";
    value: Uint8Array;
}
/**
 * TODO: eliminate this msg type
 * MsgStakeForShield defines the attributes of staking for purchase transaction.
 */
export interface MsgStakeForShieldAmino {
    pool_id?: string;
    shield?: CoinAmino[];
    description?: string;
    from?: string;
}
export interface MsgStakeForShieldAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgStakeForShield";
    value: MsgStakeForShieldAmino;
}
/**
 * TODO: eliminate this msg type
 * MsgStakeForShield defines the attributes of staking for purchase transaction.
 */
export interface MsgStakeForShieldSDKType {
    pool_id: bigint;
    shield: CoinSDKType[];
    description: string;
    from: string;
}
export interface MsgStakeForShieldResponse {
}
export interface MsgStakeForShieldResponseProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgStakeForShieldResponse";
    value: Uint8Array;
}
export interface MsgStakeForShieldResponseAmino {
}
export interface MsgStakeForShieldResponseAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgStakeForShieldResponse";
    value: MsgStakeForShieldResponseAmino;
}
export interface MsgStakeForShieldResponseSDKType {
}
/** MsgUnstakeFromShield defines the attributes of staking for purchase transaction. */
export interface MsgUnstakeFromShield {
    poolId: bigint;
    shield: Coin[];
    from: string;
}
export interface MsgUnstakeFromShieldProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgUnstakeFromShield";
    value: Uint8Array;
}
/** MsgUnstakeFromShield defines the attributes of staking for purchase transaction. */
export interface MsgUnstakeFromShieldAmino {
    pool_id?: string;
    shield?: CoinAmino[];
    from?: string;
}
export interface MsgUnstakeFromShieldAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgUnstakeFromShield";
    value: MsgUnstakeFromShieldAmino;
}
/** MsgUnstakeFromShield defines the attributes of staking for purchase transaction. */
export interface MsgUnstakeFromShieldSDKType {
    pool_id: bigint;
    shield: CoinSDKType[];
    from: string;
}
export interface MsgUnstakeFromShieldResponse {
}
export interface MsgUnstakeFromShieldResponseProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgUnstakeFromShieldResponse";
    value: Uint8Array;
}
export interface MsgUnstakeFromShieldResponseAmino {
}
export interface MsgUnstakeFromShieldResponseAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgUnstakeFromShieldResponse";
    value: MsgUnstakeFromShieldResponseAmino;
}
export interface MsgUnstakeFromShieldResponseSDKType {
}
/** MsgUpdateSponsor defines the attributes of a update-sponsor transaction. */
export interface MsgUpdateSponsor {
    poolId: bigint;
    sponsor: string;
    sponsorAddr: string;
    from: string;
}
export interface MsgUpdateSponsorProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgUpdateSponsor";
    value: Uint8Array;
}
/** MsgUpdateSponsor defines the attributes of a update-sponsor transaction. */
export interface MsgUpdateSponsorAmino {
    pool_id?: string;
    sponsor?: string;
    sponsor_addr?: string;
    from?: string;
}
export interface MsgUpdateSponsorAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgUpdateSponsor";
    value: MsgUpdateSponsorAmino;
}
/** MsgUpdateSponsor defines the attributes of a update-sponsor transaction. */
export interface MsgUpdateSponsorSDKType {
    pool_id: bigint;
    sponsor: string;
    sponsor_addr: string;
    from: string;
}
export interface MsgUpdateSponsorResponse {
}
export interface MsgUpdateSponsorResponseProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.MsgUpdateSponsorResponse";
    value: Uint8Array;
}
export interface MsgUpdateSponsorResponseAmino {
}
export interface MsgUpdateSponsorResponseAminoMsg {
    type: "/shentu.shield.v1alpha1.MsgUpdateSponsorResponse";
    value: MsgUpdateSponsorResponseAmino;
}
export interface MsgUpdateSponsorResponseSDKType {
}
export declare const MsgCreatePool: {
    typeUrl: string;
    encode(message: MsgCreatePool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreatePool;
    fromPartial(object: Partial<MsgCreatePool>): MsgCreatePool;
    fromAmino(object: MsgCreatePoolAmino): MsgCreatePool;
    toAmino(message: MsgCreatePool): MsgCreatePoolAmino;
    fromAminoMsg(object: MsgCreatePoolAminoMsg): MsgCreatePool;
    fromProtoMsg(message: MsgCreatePoolProtoMsg): MsgCreatePool;
    toProto(message: MsgCreatePool): Uint8Array;
    toProtoMsg(message: MsgCreatePool): MsgCreatePoolProtoMsg;
};
export declare const MsgCreatePoolResponse: {
    typeUrl: string;
    encode(_: MsgCreatePoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreatePoolResponse;
    fromPartial(_: Partial<MsgCreatePoolResponse>): MsgCreatePoolResponse;
    fromAmino(_: MsgCreatePoolResponseAmino): MsgCreatePoolResponse;
    toAmino(_: MsgCreatePoolResponse): MsgCreatePoolResponseAmino;
    fromAminoMsg(object: MsgCreatePoolResponseAminoMsg): MsgCreatePoolResponse;
    fromProtoMsg(message: MsgCreatePoolResponseProtoMsg): MsgCreatePoolResponse;
    toProto(message: MsgCreatePoolResponse): Uint8Array;
    toProtoMsg(message: MsgCreatePoolResponse): MsgCreatePoolResponseProtoMsg;
};
export declare const MsgUpdatePool: {
    typeUrl: string;
    encode(message: MsgUpdatePool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdatePool;
    fromPartial(object: Partial<MsgUpdatePool>): MsgUpdatePool;
    fromAmino(object: MsgUpdatePoolAmino): MsgUpdatePool;
    toAmino(message: MsgUpdatePool): MsgUpdatePoolAmino;
    fromAminoMsg(object: MsgUpdatePoolAminoMsg): MsgUpdatePool;
    fromProtoMsg(message: MsgUpdatePoolProtoMsg): MsgUpdatePool;
    toProto(message: MsgUpdatePool): Uint8Array;
    toProtoMsg(message: MsgUpdatePool): MsgUpdatePoolProtoMsg;
};
export declare const MsgUpdatePoolResponse: {
    typeUrl: string;
    encode(_: MsgUpdatePoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdatePoolResponse;
    fromPartial(_: Partial<MsgUpdatePoolResponse>): MsgUpdatePoolResponse;
    fromAmino(_: MsgUpdatePoolResponseAmino): MsgUpdatePoolResponse;
    toAmino(_: MsgUpdatePoolResponse): MsgUpdatePoolResponseAmino;
    fromAminoMsg(object: MsgUpdatePoolResponseAminoMsg): MsgUpdatePoolResponse;
    fromProtoMsg(message: MsgUpdatePoolResponseProtoMsg): MsgUpdatePoolResponse;
    toProto(message: MsgUpdatePoolResponse): Uint8Array;
    toProtoMsg(message: MsgUpdatePoolResponse): MsgUpdatePoolResponseProtoMsg;
};
export declare const MsgPausePool: {
    typeUrl: string;
    encode(message: MsgPausePool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgPausePool;
    fromPartial(object: Partial<MsgPausePool>): MsgPausePool;
    fromAmino(object: MsgPausePoolAmino): MsgPausePool;
    toAmino(message: MsgPausePool): MsgPausePoolAmino;
    fromAminoMsg(object: MsgPausePoolAminoMsg): MsgPausePool;
    fromProtoMsg(message: MsgPausePoolProtoMsg): MsgPausePool;
    toProto(message: MsgPausePool): Uint8Array;
    toProtoMsg(message: MsgPausePool): MsgPausePoolProtoMsg;
};
export declare const MsgPausePoolResponse: {
    typeUrl: string;
    encode(_: MsgPausePoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgPausePoolResponse;
    fromPartial(_: Partial<MsgPausePoolResponse>): MsgPausePoolResponse;
    fromAmino(_: MsgPausePoolResponseAmino): MsgPausePoolResponse;
    toAmino(_: MsgPausePoolResponse): MsgPausePoolResponseAmino;
    fromAminoMsg(object: MsgPausePoolResponseAminoMsg): MsgPausePoolResponse;
    fromProtoMsg(message: MsgPausePoolResponseProtoMsg): MsgPausePoolResponse;
    toProto(message: MsgPausePoolResponse): Uint8Array;
    toProtoMsg(message: MsgPausePoolResponse): MsgPausePoolResponseProtoMsg;
};
export declare const MsgResumePool: {
    typeUrl: string;
    encode(message: MsgResumePool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgResumePool;
    fromPartial(object: Partial<MsgResumePool>): MsgResumePool;
    fromAmino(object: MsgResumePoolAmino): MsgResumePool;
    toAmino(message: MsgResumePool): MsgResumePoolAmino;
    fromAminoMsg(object: MsgResumePoolAminoMsg): MsgResumePool;
    fromProtoMsg(message: MsgResumePoolProtoMsg): MsgResumePool;
    toProto(message: MsgResumePool): Uint8Array;
    toProtoMsg(message: MsgResumePool): MsgResumePoolProtoMsg;
};
export declare const MsgResumePoolResponse: {
    typeUrl: string;
    encode(_: MsgResumePoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgResumePoolResponse;
    fromPartial(_: Partial<MsgResumePoolResponse>): MsgResumePoolResponse;
    fromAmino(_: MsgResumePoolResponseAmino): MsgResumePoolResponse;
    toAmino(_: MsgResumePoolResponse): MsgResumePoolResponseAmino;
    fromAminoMsg(object: MsgResumePoolResponseAminoMsg): MsgResumePoolResponse;
    fromProtoMsg(message: MsgResumePoolResponseProtoMsg): MsgResumePoolResponse;
    toProto(message: MsgResumePoolResponse): Uint8Array;
    toProtoMsg(message: MsgResumePoolResponse): MsgResumePoolResponseProtoMsg;
};
export declare const MsgDepositCollateral: {
    typeUrl: string;
    encode(message: MsgDepositCollateral, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDepositCollateral;
    fromPartial(object: Partial<MsgDepositCollateral>): MsgDepositCollateral;
    fromAmino(object: MsgDepositCollateralAmino): MsgDepositCollateral;
    toAmino(message: MsgDepositCollateral): MsgDepositCollateralAmino;
    fromAminoMsg(object: MsgDepositCollateralAminoMsg): MsgDepositCollateral;
    fromProtoMsg(message: MsgDepositCollateralProtoMsg): MsgDepositCollateral;
    toProto(message: MsgDepositCollateral): Uint8Array;
    toProtoMsg(message: MsgDepositCollateral): MsgDepositCollateralProtoMsg;
};
export declare const MsgDepositCollateralResponse: {
    typeUrl: string;
    encode(_: MsgDepositCollateralResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDepositCollateralResponse;
    fromPartial(_: Partial<MsgDepositCollateralResponse>): MsgDepositCollateralResponse;
    fromAmino(_: MsgDepositCollateralResponseAmino): MsgDepositCollateralResponse;
    toAmino(_: MsgDepositCollateralResponse): MsgDepositCollateralResponseAmino;
    fromAminoMsg(object: MsgDepositCollateralResponseAminoMsg): MsgDepositCollateralResponse;
    fromProtoMsg(message: MsgDepositCollateralResponseProtoMsg): MsgDepositCollateralResponse;
    toProto(message: MsgDepositCollateralResponse): Uint8Array;
    toProtoMsg(message: MsgDepositCollateralResponse): MsgDepositCollateralResponseProtoMsg;
};
export declare const MsgWithdrawCollateral: {
    typeUrl: string;
    encode(message: MsgWithdrawCollateral, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWithdrawCollateral;
    fromPartial(object: Partial<MsgWithdrawCollateral>): MsgWithdrawCollateral;
    fromAmino(object: MsgWithdrawCollateralAmino): MsgWithdrawCollateral;
    toAmino(message: MsgWithdrawCollateral): MsgWithdrawCollateralAmino;
    fromAminoMsg(object: MsgWithdrawCollateralAminoMsg): MsgWithdrawCollateral;
    fromProtoMsg(message: MsgWithdrawCollateralProtoMsg): MsgWithdrawCollateral;
    toProto(message: MsgWithdrawCollateral): Uint8Array;
    toProtoMsg(message: MsgWithdrawCollateral): MsgWithdrawCollateralProtoMsg;
};
export declare const MsgWithdrawCollateralResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawCollateralResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgWithdrawCollateralResponse;
    fromPartial(_: Partial<MsgWithdrawCollateralResponse>): MsgWithdrawCollateralResponse;
    fromAmino(_: MsgWithdrawCollateralResponseAmino): MsgWithdrawCollateralResponse;
    toAmino(_: MsgWithdrawCollateralResponse): MsgWithdrawCollateralResponseAmino;
    fromAminoMsg(object: MsgWithdrawCollateralResponseAminoMsg): MsgWithdrawCollateralResponse;
    fromProtoMsg(message: MsgWithdrawCollateralResponseProtoMsg): MsgWithdrawCollateralResponse;
    toProto(message: MsgWithdrawCollateralResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawCollateralResponse): MsgWithdrawCollateralResponseProtoMsg;
};
export declare const MsgWithdrawRewards: {
    typeUrl: string;
    encode(message: MsgWithdrawRewards, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWithdrawRewards;
    fromPartial(object: Partial<MsgWithdrawRewards>): MsgWithdrawRewards;
    fromAmino(object: MsgWithdrawRewardsAmino): MsgWithdrawRewards;
    toAmino(message: MsgWithdrawRewards): MsgWithdrawRewardsAmino;
    fromAminoMsg(object: MsgWithdrawRewardsAminoMsg): MsgWithdrawRewards;
    fromProtoMsg(message: MsgWithdrawRewardsProtoMsg): MsgWithdrawRewards;
    toProto(message: MsgWithdrawRewards): Uint8Array;
    toProtoMsg(message: MsgWithdrawRewards): MsgWithdrawRewardsProtoMsg;
};
export declare const MsgWithdrawRewardsResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgWithdrawRewardsResponse;
    fromPartial(_: Partial<MsgWithdrawRewardsResponse>): MsgWithdrawRewardsResponse;
    fromAmino(_: MsgWithdrawRewardsResponseAmino): MsgWithdrawRewardsResponse;
    toAmino(_: MsgWithdrawRewardsResponse): MsgWithdrawRewardsResponseAmino;
    fromAminoMsg(object: MsgWithdrawRewardsResponseAminoMsg): MsgWithdrawRewardsResponse;
    fromProtoMsg(message: MsgWithdrawRewardsResponseProtoMsg): MsgWithdrawRewardsResponse;
    toProto(message: MsgWithdrawRewardsResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawRewardsResponse): MsgWithdrawRewardsResponseProtoMsg;
};
export declare const MsgWithdrawForeignRewards: {
    typeUrl: string;
    encode(message: MsgWithdrawForeignRewards, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWithdrawForeignRewards;
    fromPartial(object: Partial<MsgWithdrawForeignRewards>): MsgWithdrawForeignRewards;
    fromAmino(object: MsgWithdrawForeignRewardsAmino): MsgWithdrawForeignRewards;
    toAmino(message: MsgWithdrawForeignRewards): MsgWithdrawForeignRewardsAmino;
    fromAminoMsg(object: MsgWithdrawForeignRewardsAminoMsg): MsgWithdrawForeignRewards;
    fromProtoMsg(message: MsgWithdrawForeignRewardsProtoMsg): MsgWithdrawForeignRewards;
    toProto(message: MsgWithdrawForeignRewards): Uint8Array;
    toProtoMsg(message: MsgWithdrawForeignRewards): MsgWithdrawForeignRewardsProtoMsg;
};
export declare const MsgWithdrawForeignRewardsResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawForeignRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgWithdrawForeignRewardsResponse;
    fromPartial(_: Partial<MsgWithdrawForeignRewardsResponse>): MsgWithdrawForeignRewardsResponse;
    fromAmino(_: MsgWithdrawForeignRewardsResponseAmino): MsgWithdrawForeignRewardsResponse;
    toAmino(_: MsgWithdrawForeignRewardsResponse): MsgWithdrawForeignRewardsResponseAmino;
    fromAminoMsg(object: MsgWithdrawForeignRewardsResponseAminoMsg): MsgWithdrawForeignRewardsResponse;
    fromProtoMsg(message: MsgWithdrawForeignRewardsResponseProtoMsg): MsgWithdrawForeignRewardsResponse;
    toProto(message: MsgWithdrawForeignRewardsResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawForeignRewardsResponse): MsgWithdrawForeignRewardsResponseProtoMsg;
};
export declare const MsgClearPayouts: {
    typeUrl: string;
    encode(message: MsgClearPayouts, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClearPayouts;
    fromPartial(object: Partial<MsgClearPayouts>): MsgClearPayouts;
    fromAmino(object: MsgClearPayoutsAmino): MsgClearPayouts;
    toAmino(message: MsgClearPayouts): MsgClearPayoutsAmino;
    fromAminoMsg(object: MsgClearPayoutsAminoMsg): MsgClearPayouts;
    fromProtoMsg(message: MsgClearPayoutsProtoMsg): MsgClearPayouts;
    toProto(message: MsgClearPayouts): Uint8Array;
    toProtoMsg(message: MsgClearPayouts): MsgClearPayoutsProtoMsg;
};
export declare const MsgClearPayoutsResponse: {
    typeUrl: string;
    encode(_: MsgClearPayoutsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgClearPayoutsResponse;
    fromPartial(_: Partial<MsgClearPayoutsResponse>): MsgClearPayoutsResponse;
    fromAmino(_: MsgClearPayoutsResponseAmino): MsgClearPayoutsResponse;
    toAmino(_: MsgClearPayoutsResponse): MsgClearPayoutsResponseAmino;
    fromAminoMsg(object: MsgClearPayoutsResponseAminoMsg): MsgClearPayoutsResponse;
    fromProtoMsg(message: MsgClearPayoutsResponseProtoMsg): MsgClearPayoutsResponse;
    toProto(message: MsgClearPayoutsResponse): Uint8Array;
    toProtoMsg(message: MsgClearPayoutsResponse): MsgClearPayoutsResponseProtoMsg;
};
export declare const MsgPurchaseShield: {
    typeUrl: string;
    encode(message: MsgPurchaseShield, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgPurchaseShield;
    fromPartial(object: Partial<MsgPurchaseShield>): MsgPurchaseShield;
    fromAmino(object: MsgPurchaseShieldAmino): MsgPurchaseShield;
    toAmino(message: MsgPurchaseShield): MsgPurchaseShieldAmino;
    fromAminoMsg(object: MsgPurchaseShieldAminoMsg): MsgPurchaseShield;
    fromProtoMsg(message: MsgPurchaseShieldProtoMsg): MsgPurchaseShield;
    toProto(message: MsgPurchaseShield): Uint8Array;
    toProtoMsg(message: MsgPurchaseShield): MsgPurchaseShieldProtoMsg;
};
export declare const MsgPurchaseShieldResponse: {
    typeUrl: string;
    encode(_: MsgPurchaseShieldResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgPurchaseShieldResponse;
    fromPartial(_: Partial<MsgPurchaseShieldResponse>): MsgPurchaseShieldResponse;
    fromAmino(_: MsgPurchaseShieldResponseAmino): MsgPurchaseShieldResponse;
    toAmino(_: MsgPurchaseShieldResponse): MsgPurchaseShieldResponseAmino;
    fromAminoMsg(object: MsgPurchaseShieldResponseAminoMsg): MsgPurchaseShieldResponse;
    fromProtoMsg(message: MsgPurchaseShieldResponseProtoMsg): MsgPurchaseShieldResponse;
    toProto(message: MsgPurchaseShieldResponse): Uint8Array;
    toProtoMsg(message: MsgPurchaseShieldResponse): MsgPurchaseShieldResponseProtoMsg;
};
export declare const MsgWithdrawReimbursement: {
    typeUrl: string;
    encode(message: MsgWithdrawReimbursement, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWithdrawReimbursement;
    fromPartial(object: Partial<MsgWithdrawReimbursement>): MsgWithdrawReimbursement;
    fromAmino(object: MsgWithdrawReimbursementAmino): MsgWithdrawReimbursement;
    toAmino(message: MsgWithdrawReimbursement): MsgWithdrawReimbursementAmino;
    fromAminoMsg(object: MsgWithdrawReimbursementAminoMsg): MsgWithdrawReimbursement;
    fromProtoMsg(message: MsgWithdrawReimbursementProtoMsg): MsgWithdrawReimbursement;
    toProto(message: MsgWithdrawReimbursement): Uint8Array;
    toProtoMsg(message: MsgWithdrawReimbursement): MsgWithdrawReimbursementProtoMsg;
};
export declare const MsgWithdrawReimbursementResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawReimbursementResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgWithdrawReimbursementResponse;
    fromPartial(_: Partial<MsgWithdrawReimbursementResponse>): MsgWithdrawReimbursementResponse;
    fromAmino(_: MsgWithdrawReimbursementResponseAmino): MsgWithdrawReimbursementResponse;
    toAmino(_: MsgWithdrawReimbursementResponse): MsgWithdrawReimbursementResponseAmino;
    fromAminoMsg(object: MsgWithdrawReimbursementResponseAminoMsg): MsgWithdrawReimbursementResponse;
    fromProtoMsg(message: MsgWithdrawReimbursementResponseProtoMsg): MsgWithdrawReimbursementResponse;
    toProto(message: MsgWithdrawReimbursementResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawReimbursementResponse): MsgWithdrawReimbursementResponseProtoMsg;
};
export declare const MsgStakeForShield: {
    typeUrl: string;
    encode(message: MsgStakeForShield, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgStakeForShield;
    fromPartial(object: Partial<MsgStakeForShield>): MsgStakeForShield;
    fromAmino(object: MsgStakeForShieldAmino): MsgStakeForShield;
    toAmino(message: MsgStakeForShield): MsgStakeForShieldAmino;
    fromAminoMsg(object: MsgStakeForShieldAminoMsg): MsgStakeForShield;
    fromProtoMsg(message: MsgStakeForShieldProtoMsg): MsgStakeForShield;
    toProto(message: MsgStakeForShield): Uint8Array;
    toProtoMsg(message: MsgStakeForShield): MsgStakeForShieldProtoMsg;
};
export declare const MsgStakeForShieldResponse: {
    typeUrl: string;
    encode(_: MsgStakeForShieldResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgStakeForShieldResponse;
    fromPartial(_: Partial<MsgStakeForShieldResponse>): MsgStakeForShieldResponse;
    fromAmino(_: MsgStakeForShieldResponseAmino): MsgStakeForShieldResponse;
    toAmino(_: MsgStakeForShieldResponse): MsgStakeForShieldResponseAmino;
    fromAminoMsg(object: MsgStakeForShieldResponseAminoMsg): MsgStakeForShieldResponse;
    fromProtoMsg(message: MsgStakeForShieldResponseProtoMsg): MsgStakeForShieldResponse;
    toProto(message: MsgStakeForShieldResponse): Uint8Array;
    toProtoMsg(message: MsgStakeForShieldResponse): MsgStakeForShieldResponseProtoMsg;
};
export declare const MsgUnstakeFromShield: {
    typeUrl: string;
    encode(message: MsgUnstakeFromShield, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUnstakeFromShield;
    fromPartial(object: Partial<MsgUnstakeFromShield>): MsgUnstakeFromShield;
    fromAmino(object: MsgUnstakeFromShieldAmino): MsgUnstakeFromShield;
    toAmino(message: MsgUnstakeFromShield): MsgUnstakeFromShieldAmino;
    fromAminoMsg(object: MsgUnstakeFromShieldAminoMsg): MsgUnstakeFromShield;
    fromProtoMsg(message: MsgUnstakeFromShieldProtoMsg): MsgUnstakeFromShield;
    toProto(message: MsgUnstakeFromShield): Uint8Array;
    toProtoMsg(message: MsgUnstakeFromShield): MsgUnstakeFromShieldProtoMsg;
};
export declare const MsgUnstakeFromShieldResponse: {
    typeUrl: string;
    encode(_: MsgUnstakeFromShieldResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUnstakeFromShieldResponse;
    fromPartial(_: Partial<MsgUnstakeFromShieldResponse>): MsgUnstakeFromShieldResponse;
    fromAmino(_: MsgUnstakeFromShieldResponseAmino): MsgUnstakeFromShieldResponse;
    toAmino(_: MsgUnstakeFromShieldResponse): MsgUnstakeFromShieldResponseAmino;
    fromAminoMsg(object: MsgUnstakeFromShieldResponseAminoMsg): MsgUnstakeFromShieldResponse;
    fromProtoMsg(message: MsgUnstakeFromShieldResponseProtoMsg): MsgUnstakeFromShieldResponse;
    toProto(message: MsgUnstakeFromShieldResponse): Uint8Array;
    toProtoMsg(message: MsgUnstakeFromShieldResponse): MsgUnstakeFromShieldResponseProtoMsg;
};
export declare const MsgUpdateSponsor: {
    typeUrl: string;
    encode(message: MsgUpdateSponsor, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateSponsor;
    fromPartial(object: Partial<MsgUpdateSponsor>): MsgUpdateSponsor;
    fromAmino(object: MsgUpdateSponsorAmino): MsgUpdateSponsor;
    toAmino(message: MsgUpdateSponsor): MsgUpdateSponsorAmino;
    fromAminoMsg(object: MsgUpdateSponsorAminoMsg): MsgUpdateSponsor;
    fromProtoMsg(message: MsgUpdateSponsorProtoMsg): MsgUpdateSponsor;
    toProto(message: MsgUpdateSponsor): Uint8Array;
    toProtoMsg(message: MsgUpdateSponsor): MsgUpdateSponsorProtoMsg;
};
export declare const MsgUpdateSponsorResponse: {
    typeUrl: string;
    encode(_: MsgUpdateSponsorResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateSponsorResponse;
    fromPartial(_: Partial<MsgUpdateSponsorResponse>): MsgUpdateSponsorResponse;
    fromAmino(_: MsgUpdateSponsorResponseAmino): MsgUpdateSponsorResponse;
    toAmino(_: MsgUpdateSponsorResponse): MsgUpdateSponsorResponseAmino;
    fromAminoMsg(object: MsgUpdateSponsorResponseAminoMsg): MsgUpdateSponsorResponse;
    fromProtoMsg(message: MsgUpdateSponsorResponseProtoMsg): MsgUpdateSponsorResponse;
    toProto(message: MsgUpdateSponsorResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateSponsorResponse): MsgUpdateSponsorResponseProtoMsg;
};
