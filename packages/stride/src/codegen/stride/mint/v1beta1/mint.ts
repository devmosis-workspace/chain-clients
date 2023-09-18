import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
/** Minter represents the minting state. */
export interface Minter {
  /** current epoch provisions */
  epochProvisions: string;
}
export interface MinterProtoMsg {
  typeUrl: "/stride.mint.v1beta1.Minter";
  value: Uint8Array;
}
/** Minter represents the minting state. */
export interface MinterAmino {
  /** current epoch provisions */
  epoch_provisions: string;
}
export interface MinterAminoMsg {
  type: "/stride.mint.v1beta1.Minter";
  value: MinterAmino;
}
/** Minter represents the minting state. */
export interface MinterSDKType {
  epoch_provisions: string;
}
/** next id: 5 */
export interface DistributionProportions {
  /**
   * staking defines the proportion of the minted minted_denom that is to be
   * allocated as staking rewards.
   */
  staking: string;
  /**
   * community_pool defines the proportion of the minted mint_denom that is
   * to be allocated to the community pool: growth.
   */
  communityPoolGrowth: string;
  /**
   * community_pool defines the proportion of the minted mint_denom that is
   * to be allocated to the community pool: security budget.
   */
  communityPoolSecurityBudget: string;
  /**
   * strategic_reserve defines the proportion of the minted mint_denom that is
   * to be allocated to the pool: strategic reserve.
   */
  strategicReserve: string;
}
export interface DistributionProportionsProtoMsg {
  typeUrl: "/stride.mint.v1beta1.DistributionProportions";
  value: Uint8Array;
}
/** next id: 5 */
export interface DistributionProportionsAmino {
  /**
   * staking defines the proportion of the minted minted_denom that is to be
   * allocated as staking rewards.
   */
  staking: string;
  /**
   * community_pool defines the proportion of the minted mint_denom that is
   * to be allocated to the community pool: growth.
   */
  community_pool_growth: string;
  /**
   * community_pool defines the proportion of the minted mint_denom that is
   * to be allocated to the community pool: security budget.
   */
  community_pool_security_budget: string;
  /**
   * strategic_reserve defines the proportion of the minted mint_denom that is
   * to be allocated to the pool: strategic reserve.
   */
  strategic_reserve: string;
}
export interface DistributionProportionsAminoMsg {
  type: "/stride.mint.v1beta1.DistributionProportions";
  value: DistributionProportionsAmino;
}
/** next id: 5 */
export interface DistributionProportionsSDKType {
  staking: string;
  community_pool_growth: string;
  community_pool_security_budget: string;
  strategic_reserve: string;
}
/** Params holds parameters for the mint module. */
export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** epoch provisions from the first epoch */
  genesisEpochProvisions: string;
  /** mint epoch identifier */
  epochIdentifier: string;
  /** number of epochs take to reduce rewards */
  reductionPeriodInEpochs: bigint;
  /** reduction multiplier to execute on each period */
  reductionFactor: string;
  /** distribution_proportions defines the proportion of the minted denom */
  distributionProportions: DistributionProportions;
  /** start epoch to distribute minting rewards */
  mintingRewardsDistributionStartEpoch: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/stride.mint.v1beta1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the mint module. */
export interface ParamsAmino {
  /** type of coin to mint */
  mint_denom: string;
  /** epoch provisions from the first epoch */
  genesis_epoch_provisions: string;
  /** mint epoch identifier */
  epoch_identifier: string;
  /** number of epochs take to reduce rewards */
  reduction_period_in_epochs: string;
  /** reduction multiplier to execute on each period */
  reduction_factor: string;
  /** distribution_proportions defines the proportion of the minted denom */
  distribution_proportions?: DistributionProportionsAmino;
  /** start epoch to distribute minting rewards */
  minting_rewards_distribution_start_epoch: string;
}
export interface ParamsAminoMsg {
  type: "/stride.mint.v1beta1.Params";
  value: ParamsAmino;
}
/** Params holds parameters for the mint module. */
export interface ParamsSDKType {
  mint_denom: string;
  genesis_epoch_provisions: string;
  epoch_identifier: string;
  reduction_period_in_epochs: bigint;
  reduction_factor: string;
  distribution_proportions: DistributionProportionsSDKType;
  minting_rewards_distribution_start_epoch: bigint;
}
function createBaseMinter(): Minter {
  return {
    epochProvisions: ""
  };
}
export const Minter = {
  typeUrl: "/stride.mint.v1beta1.Minter",
  encode(message: Minter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochProvisions !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.epochProvisions, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Minter {
    return {
      epochProvisions: isSet(object.epochProvisions) ? String(object.epochProvisions) : ""
    };
  },
  fromPartial(object: Partial<Minter>): Minter {
    const message = createBaseMinter();
    message.epochProvisions = object.epochProvisions ?? "";
    return message;
  },
  fromAmino(object: MinterAmino): Minter {
    return {
      epochProvisions: object.epoch_provisions
    };
  },
  toAmino(message: Minter): MinterAmino {
    const obj: any = {};
    obj.epoch_provisions = message.epochProvisions;
    return obj;
  },
  fromAminoMsg(object: MinterAminoMsg): Minter {
    return Minter.fromAmino(object.value);
  },
  fromProtoMsg(message: MinterProtoMsg): Minter {
    return Minter.decode(message.value);
  },
  toProto(message: Minter): Uint8Array {
    return Minter.encode(message).finish();
  },
  toProtoMsg(message: Minter): MinterProtoMsg {
    return {
      typeUrl: "/stride.mint.v1beta1.Minter",
      value: Minter.encode(message).finish()
    };
  }
};
function createBaseDistributionProportions(): DistributionProportions {
  return {
    staking: "",
    communityPoolGrowth: "",
    communityPoolSecurityBudget: "",
    strategicReserve: ""
  };
}
export const DistributionProportions = {
  typeUrl: "/stride.mint.v1beta1.DistributionProportions",
  encode(message: DistributionProportions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staking !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.staking, 18).atomics);
    }
    if (message.communityPoolGrowth !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.communityPoolGrowth, 18).atomics);
    }
    if (message.communityPoolSecurityBudget !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.communityPoolSecurityBudget, 18).atomics);
    }
    if (message.strategicReserve !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.strategicReserve, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): DistributionProportions {
    return {
      staking: isSet(object.staking) ? String(object.staking) : "",
      communityPoolGrowth: isSet(object.communityPoolGrowth) ? String(object.communityPoolGrowth) : "",
      communityPoolSecurityBudget: isSet(object.communityPoolSecurityBudget) ? String(object.communityPoolSecurityBudget) : "",
      strategicReserve: isSet(object.strategicReserve) ? String(object.strategicReserve) : ""
    };
  },
  fromPartial(object: Partial<DistributionProportions>): DistributionProportions {
    const message = createBaseDistributionProportions();
    message.staking = object.staking ?? "";
    message.communityPoolGrowth = object.communityPoolGrowth ?? "";
    message.communityPoolSecurityBudget = object.communityPoolSecurityBudget ?? "";
    message.strategicReserve = object.strategicReserve ?? "";
    return message;
  },
  fromAmino(object: DistributionProportionsAmino): DistributionProportions {
    return {
      staking: object.staking,
      communityPoolGrowth: object.community_pool_growth,
      communityPoolSecurityBudget: object.community_pool_security_budget,
      strategicReserve: object.strategic_reserve
    };
  },
  toAmino(message: DistributionProportions): DistributionProportionsAmino {
    const obj: any = {};
    obj.staking = message.staking;
    obj.community_pool_growth = message.communityPoolGrowth;
    obj.community_pool_security_budget = message.communityPoolSecurityBudget;
    obj.strategic_reserve = message.strategicReserve;
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
      typeUrl: "/stride.mint.v1beta1.DistributionProportions",
      value: DistributionProportions.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    mintDenom: "",
    genesisEpochProvisions: "",
    epochIdentifier: "",
    reductionPeriodInEpochs: BigInt(0),
    reductionFactor: "",
    distributionProportions: DistributionProportions.fromPartial({}),
    mintingRewardsDistributionStartEpoch: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/stride.mint.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.genesisEpochProvisions !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.genesisEpochProvisions, 18).atomics);
    }
    if (message.epochIdentifier !== "") {
      writer.uint32(26).string(message.epochIdentifier);
    }
    if (message.reductionPeriodInEpochs !== BigInt(0)) {
      writer.uint32(32).int64(message.reductionPeriodInEpochs);
    }
    if (message.reductionFactor !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.reductionFactor, 18).atomics);
    }
    if (message.distributionProportions !== undefined) {
      DistributionProportions.encode(message.distributionProportions, writer.uint32(50).fork()).ldelim();
    }
    if (message.mintingRewardsDistributionStartEpoch !== BigInt(0)) {
      writer.uint32(56).int64(message.mintingRewardsDistributionStartEpoch);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      mintDenom: isSet(object.mintDenom) ? String(object.mintDenom) : "",
      genesisEpochProvisions: isSet(object.genesisEpochProvisions) ? String(object.genesisEpochProvisions) : "",
      epochIdentifier: isSet(object.epochIdentifier) ? String(object.epochIdentifier) : "",
      reductionPeriodInEpochs: isSet(object.reductionPeriodInEpochs) ? BigInt(object.reductionPeriodInEpochs.toString()) : BigInt(0),
      reductionFactor: isSet(object.reductionFactor) ? String(object.reductionFactor) : "",
      distributionProportions: isSet(object.distributionProportions) ? DistributionProportions.fromJSON(object.distributionProportions) : undefined,
      mintingRewardsDistributionStartEpoch: isSet(object.mintingRewardsDistributionStartEpoch) ? BigInt(object.mintingRewardsDistributionStartEpoch.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    message.genesisEpochProvisions = object.genesisEpochProvisions ?? "";
    message.epochIdentifier = object.epochIdentifier ?? "";
    message.reductionPeriodInEpochs = object.reductionPeriodInEpochs !== undefined && object.reductionPeriodInEpochs !== null ? BigInt(object.reductionPeriodInEpochs.toString()) : BigInt(0);
    message.reductionFactor = object.reductionFactor ?? "";
    message.distributionProportions = object.distributionProportions !== undefined && object.distributionProportions !== null ? DistributionProportions.fromPartial(object.distributionProportions) : undefined;
    message.mintingRewardsDistributionStartEpoch = object.mintingRewardsDistributionStartEpoch !== undefined && object.mintingRewardsDistributionStartEpoch !== null ? BigInt(object.mintingRewardsDistributionStartEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      mintDenom: object.mint_denom,
      genesisEpochProvisions: object.genesis_epoch_provisions,
      epochIdentifier: object.epoch_identifier,
      reductionPeriodInEpochs: BigInt(object.reduction_period_in_epochs),
      reductionFactor: object.reduction_factor,
      distributionProportions: object?.distribution_proportions ? DistributionProportions.fromAmino(object.distribution_proportions) : undefined,
      mintingRewardsDistributionStartEpoch: BigInt(object.minting_rewards_distribution_start_epoch)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.mint_denom = message.mintDenom;
    obj.genesis_epoch_provisions = message.genesisEpochProvisions;
    obj.epoch_identifier = message.epochIdentifier;
    obj.reduction_period_in_epochs = message.reductionPeriodInEpochs ? message.reductionPeriodInEpochs.toString() : undefined;
    obj.reduction_factor = message.reductionFactor;
    obj.distribution_proportions = message.distributionProportions ? DistributionProportions.toAmino(message.distributionProportions) : undefined;
    obj.minting_rewards_distribution_start_epoch = message.mintingRewardsDistributionStartEpoch ? message.mintingRewardsDistributionStartEpoch.toString() : undefined;
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
      typeUrl: "/stride.mint.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};