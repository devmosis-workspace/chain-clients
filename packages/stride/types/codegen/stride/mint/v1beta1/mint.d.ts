import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Minter represents the minting state. */
export interface Minter {
    /** current epoch provisions */
    epochProvisions: string;
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
    reductionPeriodInEpochs: Long;
    /** reduction multiplier to execute on each period */
    reductionFactor: string;
    /** distribution_proportions defines the proportion of the minted denom */
    distributionProportions?: DistributionProportions;
    /** start epoch to distribute minting rewards */
    mintingRewardsDistributionStartEpoch: Long;
}
/** Params holds parameters for the mint module. */
export interface ParamsSDKType {
    mint_denom: string;
    genesis_epoch_provisions: string;
    epoch_identifier: string;
    reduction_period_in_epochs: Long;
    reduction_factor: string;
    distribution_proportions?: DistributionProportionsSDKType;
    minting_rewards_distribution_start_epoch: Long;
}
export declare const Minter: {
    encode(message: Minter, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Minter;
    fromPartial(object: Partial<Minter>): Minter;
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
