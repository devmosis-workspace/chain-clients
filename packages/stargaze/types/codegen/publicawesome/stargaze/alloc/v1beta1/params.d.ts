import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../../binary";
export interface WeightedAddress {
    address: string;
    weight: string;
}
export interface WeightedAddressProtoMsg {
    typeUrl: "/publicawesome.stargaze.alloc.v1beta1.WeightedAddress";
    value: Uint8Array;
}
export interface WeightedAddressAmino {
    address?: string;
    weight?: string;
}
export interface WeightedAddressAminoMsg {
    type: "/publicawesome.stargaze.alloc.v1beta1.WeightedAddress";
    value: WeightedAddressAmino;
}
export interface WeightedAddressSDKType {
    address: string;
    weight: string;
}
export interface DistributionProportions {
    nftIncentives: string;
    developerRewards: string;
    communityPool: string;
}
export interface DistributionProportionsProtoMsg {
    typeUrl: "/publicawesome.stargaze.alloc.v1beta1.DistributionProportions";
    value: Uint8Array;
}
export interface DistributionProportionsAmino {
    nft_incentives?: string;
    developer_rewards?: string;
    community_pool?: string;
}
export interface DistributionProportionsAminoMsg {
    type: "/publicawesome.stargaze.alloc.v1beta1.DistributionProportions";
    value: DistributionProportionsAmino;
}
export interface DistributionProportionsSDKType {
    nft_incentives: string;
    developer_rewards: string;
    community_pool: string;
}
export interface Params {
    /** distribution_proportions defines the proportion of the minted denom */
    distributionProportions: DistributionProportions;
    /** addresses to receive developer rewards */
    weightedDeveloperRewardsReceivers: WeightedAddress[];
    /** addresses to receive incentive rewards */
    weightedIncentivesRewardsReceivers: WeightedAddress[];
    /**
     * SupplementAmount is the amount to be supplemented from the pool on top of
     * newly minted coins.
     */
    supplementAmount: Coin[];
}
export interface ParamsProtoMsg {
    typeUrl: "/publicawesome.stargaze.alloc.v1beta1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    /** distribution_proportions defines the proportion of the minted denom */
    distribution_proportions?: DistributionProportionsAmino;
    /** addresses to receive developer rewards */
    weighted_developer_rewards_receivers?: WeightedAddressAmino[];
    /** addresses to receive incentive rewards */
    weighted_incentives_rewards_receivers?: WeightedAddressAmino[];
    /**
     * SupplementAmount is the amount to be supplemented from the pool on top of
     * newly minted coins.
     */
    supplement_amount?: CoinAmino[];
}
export interface ParamsAminoMsg {
    type: "/publicawesome.stargaze.alloc.v1beta1.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    distribution_proportions: DistributionProportionsSDKType;
    weighted_developer_rewards_receivers: WeightedAddressSDKType[];
    weighted_incentives_rewards_receivers: WeightedAddressSDKType[];
    supplement_amount: CoinSDKType[];
}
export declare const WeightedAddress: {
    typeUrl: string;
    encode(message: WeightedAddress, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): WeightedAddress;
    fromPartial(object: Partial<WeightedAddress>): WeightedAddress;
    fromAmino(object: WeightedAddressAmino): WeightedAddress;
    toAmino(message: WeightedAddress): WeightedAddressAmino;
    fromAminoMsg(object: WeightedAddressAminoMsg): WeightedAddress;
    fromProtoMsg(message: WeightedAddressProtoMsg): WeightedAddress;
    toProto(message: WeightedAddress): Uint8Array;
    toProtoMsg(message: WeightedAddress): WeightedAddressProtoMsg;
};
export declare const DistributionProportions: {
    typeUrl: string;
    encode(message: DistributionProportions, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DistributionProportions;
    fromPartial(object: Partial<DistributionProportions>): DistributionProportions;
    fromAmino(object: DistributionProportionsAmino): DistributionProportions;
    toAmino(message: DistributionProportions): DistributionProportionsAmino;
    fromAminoMsg(object: DistributionProportionsAminoMsg): DistributionProportions;
    fromProtoMsg(message: DistributionProportionsProtoMsg): DistributionProportions;
    toProto(message: DistributionProportions): Uint8Array;
    toProtoMsg(message: DistributionProportions): DistributionProportionsProtoMsg;
};
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
