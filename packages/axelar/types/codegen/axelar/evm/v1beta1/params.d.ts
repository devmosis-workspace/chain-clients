import { NetworkInfo, NetworkInfoSDKType } from "./types";
import { Threshold, ThresholdSDKType } from "../../utils/v1beta1/threshold";
import { Chain, ChainSDKType } from "../../nexus/exported/v1beta1/types";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params is the parameter set for this module */
export interface Params {
    chain: string;
    confirmationHeight: Long;
    network: string;
    tokenCode: Uint8Array;
    burnable: Uint8Array;
    revoteLockingPeriod: Long;
    networks: NetworkInfo[];
    votingThreshold?: Threshold;
    minVoterCount: Long;
    commandsGasLimit: number;
    votingGracePeriod: Long;
    endBlockerLimit: Long;
    transferLimit: Long;
}
/** Params is the parameter set for this module */
export interface ParamsSDKType {
    chain: string;
    confirmation_height: Long;
    network: string;
    token_code: Uint8Array;
    burnable: Uint8Array;
    revote_locking_period: Long;
    networks: NetworkInfoSDKType[];
    voting_threshold?: ThresholdSDKType;
    min_voter_count: Long;
    commands_gas_limit: number;
    voting_grace_period: Long;
    end_blocker_limit: Long;
    transfer_limit: Long;
}
export interface PendingChain {
    params?: Params;
    chain?: Chain;
}
export interface PendingChainSDKType {
    params?: ParamsSDKType;
    chain?: ChainSDKType;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
export declare const PendingChain: {
    encode(message: PendingChain, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PendingChain;
    fromPartial(object: Partial<PendingChain>): PendingChain;
};
