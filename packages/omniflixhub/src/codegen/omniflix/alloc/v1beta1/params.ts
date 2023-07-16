import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
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
function createBaseWeightedAddress(): WeightedAddress {
  return {
    address: "",
    weight: ""
  };
}
export const WeightedAddress = {
  encode(message: WeightedAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  fromJSON(object: any): WeightedAddress {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },
  fromPartial(object: Partial<WeightedAddress>): WeightedAddress {
    const message = createBaseWeightedAddress();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    return message;
  }
};
function createBaseDistributionProportions(): DistributionProportions {
  return {
    stakingRewards: "",
    nftIncentives: "",
    nodeHostsIncentives: "",
    developerRewards: "",
    communityPool: ""
  };
}
export const DistributionProportions = {
  encode(message: DistributionProportions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakingRewards !== "") {
      writer.uint32(10).string(message.stakingRewards);
    }
    if (message.nftIncentives !== "") {
      writer.uint32(18).string(message.nftIncentives);
    }
    if (message.nodeHostsIncentives !== "") {
      writer.uint32(26).string(message.nodeHostsIncentives);
    }
    if (message.developerRewards !== "") {
      writer.uint32(34).string(message.developerRewards);
    }
    if (message.communityPool !== "") {
      writer.uint32(42).string(message.communityPool);
    }
    return writer;
  },
  fromJSON(object: any): DistributionProportions {
    return {
      stakingRewards: isSet(object.stakingRewards) ? String(object.stakingRewards) : "",
      nftIncentives: isSet(object.nftIncentives) ? String(object.nftIncentives) : "",
      nodeHostsIncentives: isSet(object.nodeHostsIncentives) ? String(object.nodeHostsIncentives) : "",
      developerRewards: isSet(object.developerRewards) ? String(object.developerRewards) : "",
      communityPool: isSet(object.communityPool) ? String(object.communityPool) : ""
    };
  },
  fromPartial(object: Partial<DistributionProportions>): DistributionProportions {
    const message = createBaseDistributionProportions();
    message.stakingRewards = object.stakingRewards ?? "";
    message.nftIncentives = object.nftIncentives ?? "";
    message.nodeHostsIncentives = object.nodeHostsIncentives ?? "";
    message.developerRewards = object.developerRewards ?? "";
    message.communityPool = object.communityPool ?? "";
    return message;
  }
};
function createBaseParams(): Params {
  return {
    distributionProportions: undefined,
    weightedDeveloperRewardsReceivers: [],
    weightedNftIncentivesReceivers: [],
    weightedNodeHostsIncentivesReceivers: []
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.distributionProportions !== undefined) {
      DistributionProportions.encode(message.distributionProportions, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.weightedDeveloperRewardsReceivers) {
      WeightedAddress.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.weightedNftIncentivesReceivers) {
      WeightedAddress.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.weightedNodeHostsIncentivesReceivers) {
      WeightedAddress.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      distributionProportions: isSet(object.distributionProportions) ? DistributionProportions.fromJSON(object.distributionProportions) : undefined,
      weightedDeveloperRewardsReceivers: Array.isArray(object?.weightedDeveloperRewardsReceivers) ? object.weightedDeveloperRewardsReceivers.map((e: any) => WeightedAddress.fromJSON(e)) : [],
      weightedNftIncentivesReceivers: Array.isArray(object?.weightedNftIncentivesReceivers) ? object.weightedNftIncentivesReceivers.map((e: any) => WeightedAddress.fromJSON(e)) : [],
      weightedNodeHostsIncentivesReceivers: Array.isArray(object?.weightedNodeHostsIncentivesReceivers) ? object.weightedNodeHostsIncentivesReceivers.map((e: any) => WeightedAddress.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.distributionProportions = object.distributionProportions !== undefined && object.distributionProportions !== null ? DistributionProportions.fromPartial(object.distributionProportions) : undefined;
    message.weightedDeveloperRewardsReceivers = object.weightedDeveloperRewardsReceivers?.map(e => WeightedAddress.fromPartial(e)) || [];
    message.weightedNftIncentivesReceivers = object.weightedNftIncentivesReceivers?.map(e => WeightedAddress.fromPartial(e)) || [];
    message.weightedNodeHostsIncentivesReceivers = object.weightedNodeHostsIncentivesReceivers?.map(e => WeightedAddress.fromPartial(e)) || [];
    return message;
  }
};