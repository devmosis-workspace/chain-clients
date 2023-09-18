import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
export interface WeightedAddress {
  address: string;
  weight: string;
}
export interface WeightedAddressProtoMsg {
  typeUrl: "/omniflix.alloc.v1beta1.WeightedAddress";
  value: Uint8Array;
}
export interface WeightedAddressAmino {
  address: string;
  weight: string;
}
export interface WeightedAddressAminoMsg {
  type: "/omniflix.alloc.v1beta1.WeightedAddress";
  value: WeightedAddressAmino;
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
export interface DistributionProportionsProtoMsg {
  typeUrl: "/omniflix.alloc.v1beta1.DistributionProportions";
  value: Uint8Array;
}
export interface DistributionProportionsAmino {
  staking_rewards: string;
  nft_incentives: string;
  node_hosts_incentives: string;
  developer_rewards: string;
  community_pool: string;
}
export interface DistributionProportionsAminoMsg {
  type: "/omniflix.alloc.v1beta1.DistributionProportions";
  value: DistributionProportionsAmino;
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
  distributionProportions: DistributionProportions;
  /** address to receive developer rewards */
  weightedDeveloperRewardsReceivers: WeightedAddress[];
  /** address to receive nft incentives */
  weightedNftIncentivesReceivers: WeightedAddress[];
  /** address to receive node host incentives */
  weightedNodeHostsIncentivesReceivers: WeightedAddress[];
}
export interface ParamsProtoMsg {
  typeUrl: "/omniflix.alloc.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  /** distribution_proportions defines the proportion of the minted denom */
  distribution_proportions?: DistributionProportionsAmino;
  /** address to receive developer rewards */
  weighted_developer_rewards_receivers: WeightedAddressAmino[];
  /** address to receive nft incentives */
  weighted_nft_incentives_receivers: WeightedAddressAmino[];
  /** address to receive node host incentives */
  weighted_node_hosts_incentives_receivers: WeightedAddressAmino[];
}
export interface ParamsAminoMsg {
  type: "/omniflix.alloc.v1beta1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  distribution_proportions: DistributionProportionsSDKType;
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
  typeUrl: "/omniflix.alloc.v1beta1.WeightedAddress",
  encode(message: WeightedAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.weight, 18).atomics);
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
  },
  fromAmino(object: WeightedAddressAmino): WeightedAddress {
    return {
      address: object.address,
      weight: object.weight
    };
  },
  toAmino(message: WeightedAddress): WeightedAddressAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.weight = message.weight;
    return obj;
  },
  fromAminoMsg(object: WeightedAddressAminoMsg): WeightedAddress {
    return WeightedAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: WeightedAddressProtoMsg): WeightedAddress {
    return WeightedAddress.decode(message.value);
  },
  toProto(message: WeightedAddress): Uint8Array {
    return WeightedAddress.encode(message).finish();
  },
  toProtoMsg(message: WeightedAddress): WeightedAddressProtoMsg {
    return {
      typeUrl: "/omniflix.alloc.v1beta1.WeightedAddress",
      value: WeightedAddress.encode(message).finish()
    };
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
  typeUrl: "/omniflix.alloc.v1beta1.DistributionProportions",
  encode(message: DistributionProportions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakingRewards !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.stakingRewards, 18).atomics);
    }
    if (message.nftIncentives !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.nftIncentives, 18).atomics);
    }
    if (message.nodeHostsIncentives !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.nodeHostsIncentives, 18).atomics);
    }
    if (message.developerRewards !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.developerRewards, 18).atomics);
    }
    if (message.communityPool !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.communityPool, 18).atomics);
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
  },
  fromAmino(object: DistributionProportionsAmino): DistributionProportions {
    return {
      stakingRewards: object.staking_rewards,
      nftIncentives: object.nft_incentives,
      nodeHostsIncentives: object.node_hosts_incentives,
      developerRewards: object.developer_rewards,
      communityPool: object.community_pool
    };
  },
  toAmino(message: DistributionProportions): DistributionProportionsAmino {
    const obj: any = {};
    obj.staking_rewards = message.stakingRewards;
    obj.nft_incentives = message.nftIncentives;
    obj.node_hosts_incentives = message.nodeHostsIncentives;
    obj.developer_rewards = message.developerRewards;
    obj.community_pool = message.communityPool;
    return obj;
  },
  fromAminoMsg(object: DistributionProportionsAminoMsg): DistributionProportions {
    return DistributionProportions.fromAmino(object.value);
  },
  fromProtoMsg(message: DistributionProportionsProtoMsg): DistributionProportions {
    return DistributionProportions.decode(message.value);
  },
  toProto(message: DistributionProportions): Uint8Array {
    return DistributionProportions.encode(message).finish();
  },
  toProtoMsg(message: DistributionProportions): DistributionProportionsProtoMsg {
    return {
      typeUrl: "/omniflix.alloc.v1beta1.DistributionProportions",
      value: DistributionProportions.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    distributionProportions: DistributionProportions.fromPartial({}),
    weightedDeveloperRewardsReceivers: [],
    weightedNftIncentivesReceivers: [],
    weightedNodeHostsIncentivesReceivers: []
  };
}
export const Params = {
  typeUrl: "/omniflix.alloc.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      distributionProportions: object?.distribution_proportions ? DistributionProportions.fromAmino(object.distribution_proportions) : undefined,
      weightedDeveloperRewardsReceivers: Array.isArray(object?.weighted_developer_rewards_receivers) ? object.weighted_developer_rewards_receivers.map((e: any) => WeightedAddress.fromAmino(e)) : [],
      weightedNftIncentivesReceivers: Array.isArray(object?.weighted_nft_incentives_receivers) ? object.weighted_nft_incentives_receivers.map((e: any) => WeightedAddress.fromAmino(e)) : [],
      weightedNodeHostsIncentivesReceivers: Array.isArray(object?.weighted_node_hosts_incentives_receivers) ? object.weighted_node_hosts_incentives_receivers.map((e: any) => WeightedAddress.fromAmino(e)) : []
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.distribution_proportions = message.distributionProportions ? DistributionProportions.toAmino(message.distributionProportions) : undefined;
    if (message.weightedDeveloperRewardsReceivers) {
      obj.weighted_developer_rewards_receivers = message.weightedDeveloperRewardsReceivers.map(e => e ? WeightedAddress.toAmino(e) : undefined);
    } else {
      obj.weighted_developer_rewards_receivers = [];
    }
    if (message.weightedNftIncentivesReceivers) {
      obj.weighted_nft_incentives_receivers = message.weightedNftIncentivesReceivers.map(e => e ? WeightedAddress.toAmino(e) : undefined);
    } else {
      obj.weighted_nft_incentives_receivers = [];
    }
    if (message.weightedNodeHostsIncentivesReceivers) {
      obj.weighted_node_hosts_incentives_receivers = message.weightedNodeHostsIncentivesReceivers.map(e => e ? WeightedAddress.toAmino(e) : undefined);
    } else {
      obj.weighted_node_hosts_incentives_receivers = [];
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/omniflix.alloc.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};