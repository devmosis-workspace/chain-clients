import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * Incentive defines an instance that organizes distribution conditions for a
 * given smart contract
 */
export interface Incentive {
    /** contract address of the smart contract to be incentivized */
    contract: string;
    /** allocations is a slice of denoms and percentages of rewards to be allocated */
    allocations: DecCoin[];
    /** epochs defines the number of remaining epochs for the incentive */
    epochs: number;
    /** start_time of the incentive distribution */
    startTime?: Timestamp;
    /** total_gas is the cumulative gas spent by all gas meters of the incentive during the epoch */
    totalGas: Long;
}
/**
 * Incentive defines an instance that organizes distribution conditions for a
 * given smart contract
 */
export interface IncentiveSDKType {
    contract: string;
    allocations: DecCoinSDKType[];
    epochs: number;
    start_time?: TimestampSDKType;
    total_gas: Long;
}
/** GasMeter tracks the cumulative gas spent per participant in one epoch */
export interface GasMeter {
    /** contract is the hex address of the incentivized smart contract */
    contract: string;
    /** participant address that interacts with the incentive */
    participant: string;
    /** cumulative_gas spent during the epoch */
    cumulativeGas: Long;
}
/** GasMeter tracks the cumulative gas spent per participant in one epoch */
export interface GasMeterSDKType {
    contract: string;
    participant: string;
    cumulative_gas: Long;
}
/** RegisterIncentiveProposal is a gov Content type to register an incentive */
export interface RegisterIncentiveProposal {
    /** title of the proposal */
    title: string;
    /** description of the proposal */
    description: string;
    /** contract address to be registered */
    contract: string;
    /** allocations defines the denoms and percentage of rewards to be allocated */
    allocations: DecCoin[];
    /** epochs is the number of remaining epochs for the incentive */
    epochs: number;
}
/** RegisterIncentiveProposal is a gov Content type to register an incentive */
export interface RegisterIncentiveProposalSDKType {
    title: string;
    description: string;
    contract: string;
    allocations: DecCoinSDKType[];
    epochs: number;
}
/** CancelIncentiveProposal is a gov Content type to cancel an incentive */
export interface CancelIncentiveProposal {
    /** title of the proposal */
    title: string;
    /** description of the proposal */
    description: string;
    /** contract address of the incentivized smart contract */
    contract: string;
}
/** CancelIncentiveProposal is a gov Content type to cancel an incentive */
export interface CancelIncentiveProposalSDKType {
    title: string;
    description: string;
    contract: string;
}
export declare const Incentive: {
    encode(message: Incentive, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Incentive;
    fromPartial(object: Partial<Incentive>): Incentive;
};
export declare const GasMeter: {
    encode(message: GasMeter, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GasMeter;
    fromPartial(object: Partial<GasMeter>): GasMeter;
};
export declare const RegisterIncentiveProposal: {
    encode(message: RegisterIncentiveProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RegisterIncentiveProposal;
    fromPartial(object: Partial<RegisterIncentiveProposal>): RegisterIncentiveProposal;
};
export declare const CancelIncentiveProposal: {
    encode(message: CancelIncentiveProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CancelIncentiveProposal;
    fromPartial(object: Partial<CancelIncentiveProposal>): CancelIncentiveProposal;
};
