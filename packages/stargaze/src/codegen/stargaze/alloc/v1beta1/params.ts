import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
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
    nftIncentives: "",
    developerRewards: "",
    communityPool: ""
  };
}
export const DistributionProportions = {
  encode(message: DistributionProportions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftIncentives !== "") {
      writer.uint32(10).string(message.nftIncentives);
    }
    if (message.developerRewards !== "") {
      writer.uint32(18).string(message.developerRewards);
    }
    if (message.communityPool !== "") {
      writer.uint32(26).string(message.communityPool);
    }
    return writer;
  },
  fromJSON(object: any): DistributionProportions {
    return {
      nftIncentives: isSet(object.nftIncentives) ? String(object.nftIncentives) : "",
      developerRewards: isSet(object.developerRewards) ? String(object.developerRewards) : "",
      communityPool: isSet(object.communityPool) ? String(object.communityPool) : ""
    };
  },
  fromPartial(object: Partial<DistributionProportions>): DistributionProportions {
    const message = createBaseDistributionProportions();
    message.nftIncentives = object.nftIncentives ?? "";
    message.developerRewards = object.developerRewards ?? "";
    message.communityPool = object.communityPool ?? "";
    return message;
  }
};
function createBaseParams(): Params {
  return {
    distributionProportions: undefined,
    weightedDeveloperRewardsReceivers: [],
    weightedIncentivesRewardsReceivers: [],
    supplementAmount: []
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
    for (const v of message.weightedIncentivesRewardsReceivers) {
      WeightedAddress.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.supplementAmount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      distributionProportions: isSet(object.distributionProportions) ? DistributionProportions.fromJSON(object.distributionProportions) : undefined,
      weightedDeveloperRewardsReceivers: Array.isArray(object?.weightedDeveloperRewardsReceivers) ? object.weightedDeveloperRewardsReceivers.map((e: any) => WeightedAddress.fromJSON(e)) : [],
      weightedIncentivesRewardsReceivers: Array.isArray(object?.weightedIncentivesRewardsReceivers) ? object.weightedIncentivesRewardsReceivers.map((e: any) => WeightedAddress.fromJSON(e)) : [],
      supplementAmount: Array.isArray(object?.supplementAmount) ? object.supplementAmount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.distributionProportions = object.distributionProportions !== undefined && object.distributionProportions !== null ? DistributionProportions.fromPartial(object.distributionProportions) : undefined;
    message.weightedDeveloperRewardsReceivers = object.weightedDeveloperRewardsReceivers?.map(e => WeightedAddress.fromPartial(e)) || [];
    message.weightedIncentivesRewardsReceivers = object.weightedIncentivesRewardsReceivers?.map(e => WeightedAddress.fromPartial(e)) || [];
    message.supplementAmount = object.supplementAmount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};