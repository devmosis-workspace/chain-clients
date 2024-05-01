import { BinaryWriter } from "../../../binary";
/** Minter represents the minting state. */
export interface Minter {
    /** current epoch provisions */
    epochProvisions: string;
}
export interface MinterProtoMsg {
    typeUrl: "/quicksilver.mint.v1beta1.Minter";
    value: Uint8Array;
}
/** Minter represents the minting state. */
export interface MinterAmino {
    /** current epoch provisions */
    epoch_provisions?: string;
}
export interface MinterAminoMsg {
    type: "/quicksilver.mint.v1beta1.Minter";
    value: MinterAmino;
}
/** Minter represents the minting state. */
export interface MinterSDKType {
    epoch_provisions: string;
}
export interface DistributionProportions {
    /**
     * staking defines the proportion of the minted minted_denom that is to be
     * allocated as staking rewards.
     */
    staking: string;
    /**
     * pool_incentives defines the proportion of the minted minted_denom that is
     * to be allocated as pool incentives.
     */
    poolIncentives: string;
    /**
     * participation_rewards defines the proportion of the minted minted_denom
     * that is to be allocated to participation rewards address.
     */
    participationRewards: string;
    /**
     * community_pool defines the proportion of the minted minted_denom that is
     * to be allocated to the community pool.
     */
    communityPool: string;
}
export interface DistributionProportionsProtoMsg {
    typeUrl: "/quicksilver.mint.v1beta1.DistributionProportions";
    value: Uint8Array;
}
export interface DistributionProportionsAmino {
    /**
     * staking defines the proportion of the minted minted_denom that is to be
     * allocated as staking rewards.
     */
    staking?: string;
    /**
     * pool_incentives defines the proportion of the minted minted_denom that is
     * to be allocated as pool incentives.
     */
    pool_incentives?: string;
    /**
     * participation_rewards defines the proportion of the minted minted_denom
     * that is to be allocated to participation rewards address.
     */
    participation_rewards?: string;
    /**
     * community_pool defines the proportion of the minted minted_denom that is
     * to be allocated to the community pool.
     */
    community_pool?: string;
}
export interface DistributionProportionsAminoMsg {
    type: "/quicksilver.mint.v1beta1.DistributionProportions";
    value: DistributionProportionsAmino;
}
export interface DistributionProportionsSDKType {
    staking: string;
    pool_incentives: string;
    participation_rewards: string;
    community_pool: string;
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
    typeUrl: "/quicksilver.mint.v1beta1.Params";
    value: Uint8Array;
}
/** Params holds parameters for the mint module. */
export interface ParamsAmino {
    /** type of coin to mint */
    mint_denom?: string;
    /** epoch provisions from the first epoch */
    genesis_epoch_provisions?: string;
    /** mint epoch identifier */
    epoch_identifier?: string;
    /** number of epochs take to reduce rewards */
    reduction_period_in_epochs?: string;
    /** reduction multiplier to execute on each period */
    reduction_factor?: string;
    /** distribution_proportions defines the proportion of the minted denom */
    distribution_proportions?: DistributionProportionsAmino;
    /** start epoch to distribute minting rewards */
    minting_rewards_distribution_start_epoch?: string;
}
export interface ParamsAminoMsg {
    type: "/quicksilver.mint.v1beta1.Params";
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
export declare const Minter: {
    typeUrl: string;
    encode(message: Minter, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Minter;
    fromPartial(object: Partial<Minter>): Minter;
    fromAmino(object: MinterAmino): Minter;
    toAmino(message: Minter): MinterAmino;
    fromAminoMsg(object: MinterAminoMsg): Minter;
    fromProtoMsg(message: MinterProtoMsg): Minter;
    toProto(message: Minter): Uint8Array;
    toProtoMsg(message: Minter): MinterProtoMsg;
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
