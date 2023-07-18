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
    stakingRewards: string;
    nftIncentives: string;
    nodeHostsIncentives: string;
    developerRewards: string;
    communityPool: string;
}
export interface DistributionProportionsSDKType {
    staking_rewards: string;
    nft_incentives: string;
    node_hosts_incentives: string;
    developer_rewards: string;
    community_pool: string;
}
export interface Params {
    /** distribution_proportions defines the proportion of the minted denom */
    distributionProportions?: DistributionProportions;
    /** address to receive developer rewards */
    weightedDeveloperRewardsReceivers: WeightedAddress[];
    /** address to receive nft incentives */
    weightedNftIncentivesReceivers: WeightedAddress[];
    /** address to receive node host incentives */
    weightedNodeHostsIncentivesReceivers: WeightedAddress[];
}
export interface ParamsSDKType {
    distribution_proportions?: DistributionProportionsSDKType;
    weighted_developer_rewards_receivers: WeightedAddressSDKType[];
    weighted_nft_incentives_receivers: WeightedAddressSDKType[];
    weighted_node_hosts_incentives_receivers: WeightedAddressSDKType[];
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
