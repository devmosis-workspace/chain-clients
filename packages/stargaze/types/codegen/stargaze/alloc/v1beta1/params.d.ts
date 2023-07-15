import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export interface WeightedAddress {
    address: string;
    weight: string;
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
export interface DistributionProportionsSDKType {
    nft_incentives: string;
    developer_rewards: string;
    community_pool: string;
}
export interface Params {
    /** distribution_proportions defines the proportion of the minted denom */
    distributionProportions?: DistributionProportions;
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
export interface ParamsSDKType {
    distribution_proportions?: DistributionProportionsSDKType;
    weighted_developer_rewards_receivers: WeightedAddressSDKType[];
    weighted_incentives_rewards_receivers: WeightedAddressSDKType[];
    supplement_amount: CoinSDKType[];
}
export declare const WeightedAddress: {
    encode(message: WeightedAddress, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): WeightedAddress;
    fromPartial(object: Partial<WeightedAddress>): WeightedAddress;
};
export declare const DistributionProportions: {
    encode(message: DistributionProportions, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DistributionProportions;
    fromPartial(object: Partial<DistributionProportions>): DistributionProportions;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
