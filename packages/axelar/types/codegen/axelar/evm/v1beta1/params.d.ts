import { NetworkInfo, NetworkInfoAmino, NetworkInfoSDKType } from "./types";
import { Threshold, ThresholdAmino, ThresholdSDKType } from "../../utils/v1beta1/threshold";
import { Chain, ChainAmino, ChainSDKType } from "../../nexus/exported/v1beta1/types";
import { BinaryWriter } from "../../../binary";
/** Params is the parameter set for this module */
export interface Params {
    chain: string;
    confirmationHeight: bigint;
    network: string;
    tokenCode: Uint8Array;
    burnable: Uint8Array;
    revoteLockingPeriod: bigint;
    networks: NetworkInfo[];
    votingThreshold: Threshold;
    minVoterCount: bigint;
    commandsGasLimit: number;
    votingGracePeriod: bigint;
    endBlockerLimit: bigint;
    transferLimit: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.Params";
    value: Uint8Array;
}
/** Params is the parameter set for this module */
export interface ParamsAmino {
    chain?: string;
    confirmation_height?: string;
    network?: string;
    token_code?: string;
    burnable?: string;
    revote_locking_period?: string;
    networks?: NetworkInfoAmino[];
    voting_threshold?: ThresholdAmino;
    min_voter_count?: string;
    commands_gas_limit?: number;
    voting_grace_period?: string;
    end_blocker_limit?: string;
    transfer_limit?: string;
}
export interface ParamsAminoMsg {
    type: "/axelar.evm.v1beta1.Params";
    value: ParamsAmino;
}
/** Params is the parameter set for this module */
export interface ParamsSDKType {
    chain: string;
    confirmation_height: bigint;
    network: string;
    token_code: Uint8Array;
    burnable: Uint8Array;
    revote_locking_period: bigint;
    networks: NetworkInfoSDKType[];
    voting_threshold: ThresholdSDKType;
    min_voter_count: bigint;
    commands_gas_limit: number;
    voting_grace_period: bigint;
    end_blocker_limit: bigint;
    transfer_limit: bigint;
}
export interface PendingChain {
    params: Params;
    chain: Chain;
}
export interface PendingChainProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.PendingChain";
    value: Uint8Array;
}
export interface PendingChainAmino {
    params?: ParamsAmino;
    chain?: ChainAmino;
}
export interface PendingChainAminoMsg {
    type: "/axelar.evm.v1beta1.PendingChain";
    value: PendingChainAmino;
}
export interface PendingChainSDKType {
    params: ParamsSDKType;
    chain: ChainSDKType;
}
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
export declare const PendingChain: {
    typeUrl: string;
    encode(message: PendingChain, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PendingChain;
    fromPartial(object: Partial<PendingChain>): PendingChain;
    fromAmino(object: PendingChainAmino): PendingChain;
    toAmino(message: PendingChain): PendingChainAmino;
    fromAminoMsg(object: PendingChainAminoMsg): PendingChain;
    fromProtoMsg(message: PendingChainProtoMsg): PendingChain;
    toProto(message: PendingChain): Uint8Array;
    toProtoMsg(message: PendingChain): PendingChainProtoMsg;
};
