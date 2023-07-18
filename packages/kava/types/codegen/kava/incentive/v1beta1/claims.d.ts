import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** BaseClaim is a claim with a single reward coin types */
export interface BaseClaim {
    owner: Uint8Array;
    reward?: Coin;
}
/** BaseClaim is a claim with a single reward coin types */
export interface BaseClaimSDKType {
    owner: Uint8Array;
    reward?: CoinSDKType;
}
/** BaseMultiClaim is a claim with multiple reward coin types */
export interface BaseMultiClaim {
    owner: Uint8Array;
    reward: Coin[];
}
/** BaseMultiClaim is a claim with multiple reward coin types */
export interface BaseMultiClaimSDKType {
    owner: Uint8Array;
    reward: CoinSDKType[];
}
/** RewardIndex stores reward accumulation information */
export interface RewardIndex {
    collateralType: string;
    rewardFactor: Uint8Array;
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
/** RewardIndexesProto defines a Protobuf wrapper around a RewardIndexes slice */
export interface RewardIndexesProtoSDKType {
    reward_indexes: RewardIndexSDKType[];
}
/** MultiRewardIndex stores reward accumulation information on multiple reward types */
export interface MultiRewardIndex {
    collateralType: string;
    rewardIndexes: RewardIndex[];
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
/** MultiRewardIndexesProto defines a Protobuf wrapper around a MultiRewardIndexes slice */
export interface MultiRewardIndexesProtoSDKType {
    multi_reward_indexes: MultiRewardIndexSDKType[];
}
/** USDXMintingClaim is for USDX minting rewards */
export interface USDXMintingClaim {
    baseClaim?: BaseClaim;
    rewardIndexes: RewardIndex[];
}
/** USDXMintingClaim is for USDX minting rewards */
export interface USDXMintingClaimSDKType {
    base_claim?: BaseClaimSDKType;
    reward_indexes: RewardIndexSDKType[];
}
/** HardLiquidityProviderClaim stores the hard liquidity provider rewards that can be claimed by owner */
export interface HardLiquidityProviderClaim {
    baseClaim?: BaseMultiClaim;
    supplyRewardIndexes: MultiRewardIndex[];
    borrowRewardIndexes: MultiRewardIndex[];
}
/** HardLiquidityProviderClaim stores the hard liquidity provider rewards that can be claimed by owner */
export interface HardLiquidityProviderClaimSDKType {
    base_claim?: BaseMultiClaimSDKType;
    supply_reward_indexes: MultiRewardIndexSDKType[];
    borrow_reward_indexes: MultiRewardIndexSDKType[];
}
/** DelegatorClaim stores delegation rewards that can be claimed by owner */
export interface DelegatorClaim {
    baseClaim?: BaseMultiClaim;
    rewardIndexes: MultiRewardIndex[];
}
/** DelegatorClaim stores delegation rewards that can be claimed by owner */
export interface DelegatorClaimSDKType {
    base_claim?: BaseMultiClaimSDKType;
    reward_indexes: MultiRewardIndexSDKType[];
}
/** SwapClaim stores the swap rewards that can be claimed by owner */
export interface SwapClaim {
    baseClaim?: BaseMultiClaim;
    rewardIndexes: MultiRewardIndex[];
}
/** SwapClaim stores the swap rewards that can be claimed by owner */
export interface SwapClaimSDKType {
    base_claim?: BaseMultiClaimSDKType;
    reward_indexes: MultiRewardIndexSDKType[];
}
/** SavingsClaim stores the savings rewards that can be claimed by owner */
export interface SavingsClaim {
    baseClaim?: BaseMultiClaim;
    rewardIndexes: MultiRewardIndex[];
}
/** SavingsClaim stores the savings rewards that can be claimed by owner */
export interface SavingsClaimSDKType {
    base_claim?: BaseMultiClaimSDKType;
    reward_indexes: MultiRewardIndexSDKType[];
}
/** EarnClaim stores the earn rewards that can be claimed by owner */
export interface EarnClaim {
    baseClaim?: BaseMultiClaim;
    rewardIndexes: MultiRewardIndex[];
}
/** EarnClaim stores the earn rewards that can be claimed by owner */
export interface EarnClaimSDKType {
    base_claim?: BaseMultiClaimSDKType;
    reward_indexes: MultiRewardIndexSDKType[];
}
export declare const BaseClaim: {
    encode(message: BaseClaim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BaseClaim;
    fromPartial(object: Partial<BaseClaim>): BaseClaim;
};
export declare const BaseMultiClaim: {
    encode(message: BaseMultiClaim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BaseMultiClaim;
    fromPartial(object: Partial<BaseMultiClaim>): BaseMultiClaim;
};
export declare const RewardIndex: {
    encode(message: RewardIndex, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RewardIndex;
    fromPartial(object: Partial<RewardIndex>): RewardIndex;
};
export declare const RewardIndexesProto: {
    encode(message: RewardIndexesProto, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RewardIndexesProto;
    fromPartial(object: Partial<RewardIndexesProto>): RewardIndexesProto;
};
export declare const MultiRewardIndex: {
    encode(message: MultiRewardIndex, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MultiRewardIndex;
    fromPartial(object: Partial<MultiRewardIndex>): MultiRewardIndex;
};
export declare const MultiRewardIndexesProto: {
    encode(message: MultiRewardIndexesProto, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MultiRewardIndexesProto;
    fromPartial(object: Partial<MultiRewardIndexesProto>): MultiRewardIndexesProto;
};
export declare const USDXMintingClaim: {
    encode(message: USDXMintingClaim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): USDXMintingClaim;
    fromPartial(object: Partial<USDXMintingClaim>): USDXMintingClaim;
};
export declare const HardLiquidityProviderClaim: {
    encode(message: HardLiquidityProviderClaim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): HardLiquidityProviderClaim;
    fromPartial(object: Partial<HardLiquidityProviderClaim>): HardLiquidityProviderClaim;
};
export declare const DelegatorClaim: {
    encode(message: DelegatorClaim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DelegatorClaim;
    fromPartial(object: Partial<DelegatorClaim>): DelegatorClaim;
};
export declare const SwapClaim: {
    encode(message: SwapClaim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SwapClaim;
    fromPartial(object: Partial<SwapClaim>): SwapClaim;
};
export declare const SavingsClaim: {
    encode(message: SavingsClaim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SavingsClaim;
    fromPartial(object: Partial<SavingsClaim>): SavingsClaim;
};
export declare const EarnClaim: {
    encode(message: EarnClaim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EarnClaim;
    fromPartial(object: Partial<EarnClaim>): EarnClaim;
};
