import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** BaseClaim is a claim with a single reward coin types */
export interface BaseClaim {
    $typeUrl?: string;
    owner: Uint8Array;
    reward: Coin;
}
export interface BaseClaimProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.BaseClaim";
    value: Uint8Array;
}
/** BaseClaim is a claim with a single reward coin types */
export interface BaseClaimAmino {
    owner: Uint8Array;
    reward?: CoinAmino;
}
export interface BaseClaimAminoMsg {
    type: "/kava.incentive.v1beta1.BaseClaim";
    value: BaseClaimAmino;
}
/** BaseClaim is a claim with a single reward coin types */
export interface BaseClaimSDKType {
    $typeUrl?: string;
    owner: Uint8Array;
    reward: CoinSDKType;
}
/** BaseMultiClaim is a claim with multiple reward coin types */
export interface BaseMultiClaim {
    $typeUrl?: string;
    owner: Uint8Array;
    reward: Coin[];
}
export interface BaseMultiClaimProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.BaseMultiClaim";
    value: Uint8Array;
}
/** BaseMultiClaim is a claim with multiple reward coin types */
export interface BaseMultiClaimAmino {
    owner: Uint8Array;
    reward: CoinAmino[];
}
export interface BaseMultiClaimAminoMsg {
    type: "/kava.incentive.v1beta1.BaseMultiClaim";
    value: BaseMultiClaimAmino;
}
/** BaseMultiClaim is a claim with multiple reward coin types */
export interface BaseMultiClaimSDKType {
    $typeUrl?: string;
    owner: Uint8Array;
    reward: CoinSDKType[];
}
/** RewardIndex stores reward accumulation information */
export interface RewardIndex {
    collateralType: string;
    rewardFactor: Uint8Array;
}
export interface RewardIndexProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.RewardIndex";
    value: Uint8Array;
}
/** RewardIndex stores reward accumulation information */
export interface RewardIndexAmino {
    collateral_type: string;
    reward_factor: Uint8Array;
}
export interface RewardIndexAminoMsg {
    type: "/kava.incentive.v1beta1.RewardIndex";
    value: RewardIndexAmino;
}
/** RewardIndex stores reward accumulation information */
export interface RewardIndexSDKType {
    collateral_type: string;
    reward_factor: Uint8Array;
}
/** RewardIndexesProto defines a Protobuf wrapper around a RewardIndexes slice */
export interface RewardIndexesProto {
    rewardIndexes: RewardIndex[];
}
export interface RewardIndexesProtoProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.RewardIndexesProto";
    value: Uint8Array;
}
/** RewardIndexesProto defines a Protobuf wrapper around a RewardIndexes slice */
export interface RewardIndexesProtoAmino {
    reward_indexes: RewardIndexAmino[];
}
export interface RewardIndexesProtoAminoMsg {
    type: "/kava.incentive.v1beta1.RewardIndexesProto";
    value: RewardIndexesProtoAmino;
}
/** RewardIndexesProto defines a Protobuf wrapper around a RewardIndexes slice */
export interface RewardIndexesProtoSDKType {
    reward_indexes: RewardIndexSDKType[];
}
/** MultiRewardIndex stores reward accumulation information on multiple reward types */
export interface MultiRewardIndex {
    collateralType: string;
    rewardIndexes: RewardIndex[];
}
export interface MultiRewardIndexProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.MultiRewardIndex";
    value: Uint8Array;
}
/** MultiRewardIndex stores reward accumulation information on multiple reward types */
export interface MultiRewardIndexAmino {
    collateral_type: string;
    reward_indexes: RewardIndexAmino[];
}
export interface MultiRewardIndexAminoMsg {
    type: "/kava.incentive.v1beta1.MultiRewardIndex";
    value: MultiRewardIndexAmino;
}
/** MultiRewardIndex stores reward accumulation information on multiple reward types */
export interface MultiRewardIndexSDKType {
    collateral_type: string;
    reward_indexes: RewardIndexSDKType[];
}
/** MultiRewardIndexesProto defines a Protobuf wrapper around a MultiRewardIndexes slice */
export interface MultiRewardIndexesProto {
    multiRewardIndexes: MultiRewardIndex[];
}
export interface MultiRewardIndexesProtoProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.MultiRewardIndexesProto";
    value: Uint8Array;
}
/** MultiRewardIndexesProto defines a Protobuf wrapper around a MultiRewardIndexes slice */
export interface MultiRewardIndexesProtoAmino {
    multi_reward_indexes: MultiRewardIndexAmino[];
}
export interface MultiRewardIndexesProtoAminoMsg {
    type: "/kava.incentive.v1beta1.MultiRewardIndexesProto";
    value: MultiRewardIndexesProtoAmino;
}
/** MultiRewardIndexesProto defines a Protobuf wrapper around a MultiRewardIndexes slice */
export interface MultiRewardIndexesProtoSDKType {
    multi_reward_indexes: MultiRewardIndexSDKType[];
}
/** USDXMintingClaim is for USDX minting rewards */
export interface USDXMintingClaim {
    $typeUrl?: string;
    baseClaim: BaseClaim;
    rewardIndexes: RewardIndex[];
}
export interface USDXMintingClaimProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.USDXMintingClaim";
    value: Uint8Array;
}
/** USDXMintingClaim is for USDX minting rewards */
export interface USDXMintingClaimAmino {
    base_claim?: BaseClaimAmino;
    reward_indexes: RewardIndexAmino[];
}
export interface USDXMintingClaimAminoMsg {
    type: "/kava.incentive.v1beta1.USDXMintingClaim";
    value: USDXMintingClaimAmino;
}
/** USDXMintingClaim is for USDX minting rewards */
export interface USDXMintingClaimSDKType {
    $typeUrl?: string;
    base_claim: BaseClaimSDKType;
    reward_indexes: RewardIndexSDKType[];
}
/** HardLiquidityProviderClaim stores the hard liquidity provider rewards that can be claimed by owner */
export interface HardLiquidityProviderClaim {
    $typeUrl?: string;
    baseClaim: BaseMultiClaim;
    supplyRewardIndexes: MultiRewardIndex[];
    borrowRewardIndexes: MultiRewardIndex[];
}
export interface HardLiquidityProviderClaimProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.HardLiquidityProviderClaim";
    value: Uint8Array;
}
/** HardLiquidityProviderClaim stores the hard liquidity provider rewards that can be claimed by owner */
export interface HardLiquidityProviderClaimAmino {
    base_claim?: BaseMultiClaimAmino;
    supply_reward_indexes: MultiRewardIndexAmino[];
    borrow_reward_indexes: MultiRewardIndexAmino[];
}
export interface HardLiquidityProviderClaimAminoMsg {
    type: "/kava.incentive.v1beta1.HardLiquidityProviderClaim";
    value: HardLiquidityProviderClaimAmino;
}
/** HardLiquidityProviderClaim stores the hard liquidity provider rewards that can be claimed by owner */
export interface HardLiquidityProviderClaimSDKType {
    $typeUrl?: string;
    base_claim: BaseMultiClaimSDKType;
    supply_reward_indexes: MultiRewardIndexSDKType[];
    borrow_reward_indexes: MultiRewardIndexSDKType[];
}
/** DelegatorClaim stores delegation rewards that can be claimed by owner */
export interface DelegatorClaim {
    $typeUrl?: string;
    baseClaim: BaseMultiClaim;
    rewardIndexes: MultiRewardIndex[];
}
export interface DelegatorClaimProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.DelegatorClaim";
    value: Uint8Array;
}
/** DelegatorClaim stores delegation rewards that can be claimed by owner */
export interface DelegatorClaimAmino {
    base_claim?: BaseMultiClaimAmino;
    reward_indexes: MultiRewardIndexAmino[];
}
export interface DelegatorClaimAminoMsg {
    type: "/kava.incentive.v1beta1.DelegatorClaim";
    value: DelegatorClaimAmino;
}
/** DelegatorClaim stores delegation rewards that can be claimed by owner */
export interface DelegatorClaimSDKType {
    $typeUrl?: string;
    base_claim: BaseMultiClaimSDKType;
    reward_indexes: MultiRewardIndexSDKType[];
}
/** SwapClaim stores the swap rewards that can be claimed by owner */
export interface SwapClaim {
    $typeUrl?: string;
    baseClaim: BaseMultiClaim;
    rewardIndexes: MultiRewardIndex[];
}
export interface SwapClaimProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.SwapClaim";
    value: Uint8Array;
}
/** SwapClaim stores the swap rewards that can be claimed by owner */
export interface SwapClaimAmino {
    base_claim?: BaseMultiClaimAmino;
    reward_indexes: MultiRewardIndexAmino[];
}
export interface SwapClaimAminoMsg {
    type: "/kava.incentive.v1beta1.SwapClaim";
    value: SwapClaimAmino;
}
/** SwapClaim stores the swap rewards that can be claimed by owner */
export interface SwapClaimSDKType {
    $typeUrl?: string;
    base_claim: BaseMultiClaimSDKType;
    reward_indexes: MultiRewardIndexSDKType[];
}
/** SavingsClaim stores the savings rewards that can be claimed by owner */
export interface SavingsClaim {
    $typeUrl?: string;
    baseClaim: BaseMultiClaim;
    rewardIndexes: MultiRewardIndex[];
}
export interface SavingsClaimProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.SavingsClaim";
    value: Uint8Array;
}
/** SavingsClaim stores the savings rewards that can be claimed by owner */
export interface SavingsClaimAmino {
    base_claim?: BaseMultiClaimAmino;
    reward_indexes: MultiRewardIndexAmino[];
}
export interface SavingsClaimAminoMsg {
    type: "/kava.incentive.v1beta1.SavingsClaim";
    value: SavingsClaimAmino;
}
/** SavingsClaim stores the savings rewards that can be claimed by owner */
export interface SavingsClaimSDKType {
    $typeUrl?: string;
    base_claim: BaseMultiClaimSDKType;
    reward_indexes: MultiRewardIndexSDKType[];
}
/** EarnClaim stores the earn rewards that can be claimed by owner */
export interface EarnClaim {
    $typeUrl?: string;
    baseClaim: BaseMultiClaim;
    rewardIndexes: MultiRewardIndex[];
}
export interface EarnClaimProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.EarnClaim";
    value: Uint8Array;
}
/** EarnClaim stores the earn rewards that can be claimed by owner */
export interface EarnClaimAmino {
    base_claim?: BaseMultiClaimAmino;
    reward_indexes: MultiRewardIndexAmino[];
}
export interface EarnClaimAminoMsg {
    type: "/kava.incentive.v1beta1.EarnClaim";
    value: EarnClaimAmino;
}
/** EarnClaim stores the earn rewards that can be claimed by owner */
export interface EarnClaimSDKType {
    $typeUrl?: string;
    base_claim: BaseMultiClaimSDKType;
    reward_indexes: MultiRewardIndexSDKType[];
}
export declare const BaseClaim: {
    typeUrl: string;
    encode(message: BaseClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BaseClaim;
    fromPartial(object: Partial<BaseClaim>): BaseClaim;
    fromAmino(object: BaseClaimAmino): BaseClaim;
    toAmino(message: BaseClaim): BaseClaimAmino;
    fromAminoMsg(object: BaseClaimAminoMsg): BaseClaim;
    fromProtoMsg(message: BaseClaimProtoMsg): BaseClaim;
    toProto(message: BaseClaim): Uint8Array;
    toProtoMsg(message: BaseClaim): BaseClaimProtoMsg;
};
export declare const BaseMultiClaim: {
    typeUrl: string;
    encode(message: BaseMultiClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BaseMultiClaim;
    fromPartial(object: Partial<BaseMultiClaim>): BaseMultiClaim;
    fromAmino(object: BaseMultiClaimAmino): BaseMultiClaim;
    toAmino(message: BaseMultiClaim): BaseMultiClaimAmino;
    fromAminoMsg(object: BaseMultiClaimAminoMsg): BaseMultiClaim;
    fromProtoMsg(message: BaseMultiClaimProtoMsg): BaseMultiClaim;
    toProto(message: BaseMultiClaim): Uint8Array;
    toProtoMsg(message: BaseMultiClaim): BaseMultiClaimProtoMsg;
};
export declare const RewardIndex: {
    typeUrl: string;
    encode(message: RewardIndex, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RewardIndex;
    fromPartial(object: Partial<RewardIndex>): RewardIndex;
    fromAmino(object: RewardIndexAmino): RewardIndex;
    toAmino(message: RewardIndex): RewardIndexAmino;
    fromAminoMsg(object: RewardIndexAminoMsg): RewardIndex;
    fromProtoMsg(message: RewardIndexProtoMsg): RewardIndex;
    toProto(message: RewardIndex): Uint8Array;
    toProtoMsg(message: RewardIndex): RewardIndexProtoMsg;
};
export declare const RewardIndexesProto: {
    typeUrl: string;
    encode(message: RewardIndexesProto, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RewardIndexesProto;
    fromPartial(object: Partial<RewardIndexesProto>): RewardIndexesProto;
    fromAmino(object: RewardIndexesProtoAmino): RewardIndexesProto;
    toAmino(message: RewardIndexesProto): RewardIndexesProtoAmino;
    fromAminoMsg(object: RewardIndexesProtoAminoMsg): RewardIndexesProto;
    fromProtoMsg(message: RewardIndexesProtoProtoMsg): RewardIndexesProto;
    toProto(message: RewardIndexesProto): Uint8Array;
    toProtoMsg(message: RewardIndexesProto): RewardIndexesProtoProtoMsg;
};
export declare const MultiRewardIndex: {
    typeUrl: string;
    encode(message: MultiRewardIndex, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MultiRewardIndex;
    fromPartial(object: Partial<MultiRewardIndex>): MultiRewardIndex;
    fromAmino(object: MultiRewardIndexAmino): MultiRewardIndex;
    toAmino(message: MultiRewardIndex): MultiRewardIndexAmino;
    fromAminoMsg(object: MultiRewardIndexAminoMsg): MultiRewardIndex;
    fromProtoMsg(message: MultiRewardIndexProtoMsg): MultiRewardIndex;
    toProto(message: MultiRewardIndex): Uint8Array;
    toProtoMsg(message: MultiRewardIndex): MultiRewardIndexProtoMsg;
};
export declare const MultiRewardIndexesProto: {
    typeUrl: string;
    encode(message: MultiRewardIndexesProto, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MultiRewardIndexesProto;
    fromPartial(object: Partial<MultiRewardIndexesProto>): MultiRewardIndexesProto;
    fromAmino(object: MultiRewardIndexesProtoAmino): MultiRewardIndexesProto;
    toAmino(message: MultiRewardIndexesProto): MultiRewardIndexesProtoAmino;
    fromAminoMsg(object: MultiRewardIndexesProtoAminoMsg): MultiRewardIndexesProto;
    fromProtoMsg(message: MultiRewardIndexesProtoProtoMsg): MultiRewardIndexesProto;
    toProto(message: MultiRewardIndexesProto): Uint8Array;
    toProtoMsg(message: MultiRewardIndexesProto): MultiRewardIndexesProtoProtoMsg;
};
export declare const USDXMintingClaim: {
    typeUrl: string;
    encode(message: USDXMintingClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): USDXMintingClaim;
    fromPartial(object: Partial<USDXMintingClaim>): USDXMintingClaim;
    fromAmino(object: USDXMintingClaimAmino): USDXMintingClaim;
    toAmino(message: USDXMintingClaim): USDXMintingClaimAmino;
    fromAminoMsg(object: USDXMintingClaimAminoMsg): USDXMintingClaim;
    fromProtoMsg(message: USDXMintingClaimProtoMsg): USDXMintingClaim;
    toProto(message: USDXMintingClaim): Uint8Array;
    toProtoMsg(message: USDXMintingClaim): USDXMintingClaimProtoMsg;
};
export declare const HardLiquidityProviderClaim: {
    typeUrl: string;
    encode(message: HardLiquidityProviderClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): HardLiquidityProviderClaim;
    fromPartial(object: Partial<HardLiquidityProviderClaim>): HardLiquidityProviderClaim;
    fromAmino(object: HardLiquidityProviderClaimAmino): HardLiquidityProviderClaim;
    toAmino(message: HardLiquidityProviderClaim): HardLiquidityProviderClaimAmino;
    fromAminoMsg(object: HardLiquidityProviderClaimAminoMsg): HardLiquidityProviderClaim;
    fromProtoMsg(message: HardLiquidityProviderClaimProtoMsg): HardLiquidityProviderClaim;
    toProto(message: HardLiquidityProviderClaim): Uint8Array;
    toProtoMsg(message: HardLiquidityProviderClaim): HardLiquidityProviderClaimProtoMsg;
};
export declare const DelegatorClaim: {
    typeUrl: string;
    encode(message: DelegatorClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DelegatorClaim;
    fromPartial(object: Partial<DelegatorClaim>): DelegatorClaim;
    fromAmino(object: DelegatorClaimAmino): DelegatorClaim;
    toAmino(message: DelegatorClaim): DelegatorClaimAmino;
    fromAminoMsg(object: DelegatorClaimAminoMsg): DelegatorClaim;
    fromProtoMsg(message: DelegatorClaimProtoMsg): DelegatorClaim;
    toProto(message: DelegatorClaim): Uint8Array;
    toProtoMsg(message: DelegatorClaim): DelegatorClaimProtoMsg;
};
export declare const SwapClaim: {
    typeUrl: string;
    encode(message: SwapClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SwapClaim;
    fromPartial(object: Partial<SwapClaim>): SwapClaim;
    fromAmino(object: SwapClaimAmino): SwapClaim;
    toAmino(message: SwapClaim): SwapClaimAmino;
    fromAminoMsg(object: SwapClaimAminoMsg): SwapClaim;
    fromProtoMsg(message: SwapClaimProtoMsg): SwapClaim;
    toProto(message: SwapClaim): Uint8Array;
    toProtoMsg(message: SwapClaim): SwapClaimProtoMsg;
};
export declare const SavingsClaim: {
    typeUrl: string;
    encode(message: SavingsClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SavingsClaim;
    fromPartial(object: Partial<SavingsClaim>): SavingsClaim;
    fromAmino(object: SavingsClaimAmino): SavingsClaim;
    toAmino(message: SavingsClaim): SavingsClaimAmino;
    fromAminoMsg(object: SavingsClaimAminoMsg): SavingsClaim;
    fromProtoMsg(message: SavingsClaimProtoMsg): SavingsClaim;
    toProto(message: SavingsClaim): Uint8Array;
    toProtoMsg(message: SavingsClaim): SavingsClaimProtoMsg;
};
export declare const EarnClaim: {
    typeUrl: string;
    encode(message: EarnClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EarnClaim;
    fromPartial(object: Partial<EarnClaim>): EarnClaim;
    fromAmino(object: EarnClaimAmino): EarnClaim;
    toAmino(message: EarnClaim): EarnClaimAmino;
    fromAminoMsg(object: EarnClaimAminoMsg): EarnClaim;
    fromProtoMsg(message: EarnClaimProtoMsg): EarnClaim;
    toProto(message: EarnClaim): Uint8Array;
    toProtoMsg(message: EarnClaim): EarnClaimProtoMsg;
};
