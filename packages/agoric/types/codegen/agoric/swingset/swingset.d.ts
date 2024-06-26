import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
/**
 * CoreEvalProposal is a gov Content type for evaluating code in the SwingSet
 * core.
 * See `agoric-sdk/packages/vats/src/core/eval.js`.
 */
export interface CoreEvalProposal {
    title: string;
    description: string;
    /**
     * Although evals are sequential, they may run concurrently, since they each
     * can return a Promise.
     */
    evals: CoreEval[];
}
export interface CoreEvalProposalProtoMsg {
    typeUrl: "/agoric.swingset.CoreEvalProposal";
    value: Uint8Array;
}
/**
 * CoreEvalProposal is a gov Content type for evaluating code in the SwingSet
 * core.
 * See `agoric-sdk/packages/vats/src/core/eval.js`.
 */
export interface CoreEvalProposalAmino {
    title?: string;
    description?: string;
    /**
     * Although evals are sequential, they may run concurrently, since they each
     * can return a Promise.
     */
    evals?: CoreEvalAmino[];
}
export interface CoreEvalProposalAminoMsg {
    type: "/agoric.swingset.CoreEvalProposal";
    value: CoreEvalProposalAmino;
}
/**
 * CoreEvalProposal is a gov Content type for evaluating code in the SwingSet
 * core.
 * See `agoric-sdk/packages/vats/src/core/eval.js`.
 */
export interface CoreEvalProposalSDKType {
    title: string;
    description: string;
    evals: CoreEvalSDKType[];
}
/**
 * CoreEval defines an individual SwingSet core evaluation, for use in
 * CoreEvalProposal.
 */
export interface CoreEval {
    /**
     * Grant these JSON-stringified core bootstrap permits to the jsCode, as the
     * `powers` endowment.
     */
    jsonPermits: string;
    /**
     * Evaluate this JavaScript code in a Compartment endowed with `powers` as
     * well as some powerless helpers.
     */
    jsCode: string;
}
export interface CoreEvalProtoMsg {
    typeUrl: "/agoric.swingset.CoreEval";
    value: Uint8Array;
}
/**
 * CoreEval defines an individual SwingSet core evaluation, for use in
 * CoreEvalProposal.
 */
export interface CoreEvalAmino {
    /**
     * Grant these JSON-stringified core bootstrap permits to the jsCode, as the
     * `powers` endowment.
     */
    json_permits?: string;
    /**
     * Evaluate this JavaScript code in a Compartment endowed with `powers` as
     * well as some powerless helpers.
     */
    js_code?: string;
}
export interface CoreEvalAminoMsg {
    type: "/agoric.swingset.CoreEval";
    value: CoreEvalAmino;
}
/**
 * CoreEval defines an individual SwingSet core evaluation, for use in
 * CoreEvalProposal.
 */
export interface CoreEvalSDKType {
    json_permits: string;
    js_code: string;
}
/** Params are the swingset configuration/governance parameters. */
export interface Params {
    /**
     * Map from unit name to a value in SwingSet "beans".
     * Must not be negative.
     *
     * These values are used by SwingSet to normalize named per-resource charges
     * (maybe rent) in a single Nat usage unit, the "bean".
     *
     * There is no required order to this list of entries, but all the chain
     * nodes must all serialize and deserialize the existing order without
     * permuting it.
     */
    beansPerUnit: StringBeans[];
    /**
     * The price in Coins per the unit named "fee".  This value is used by
     * cosmic-swingset JS code to decide how many tokens to charge.
     *
     * cost = beans_used * fee_unit_price / beans_per_unit["fee"]
     */
    feeUnitPrice: Coin[];
    /**
     * The SwingSet bootstrap vat configuration file.  Not usefully modifiable
     * via governance as it is only referenced by the chain's initial
     * construction.
     */
    bootstrapVatConfig: string;
    /**
     * If the provision submitter doesn't hold a provisionpass, their requested
     * power flags are looked up in this fee menu (first match wins) and the sum
     * is charged.  If any power flag is not found in this menu, the request is
     * rejected.
     */
    powerFlagFees: PowerFlagFee[];
    /**
     * Maximum sizes for queues.
     * These values are used by SwingSet to compute how many messages should be
     * accepted in a block.
     *
     * There is no required order to this list of entries, but all the chain
     * nodes must all serialize and deserialize the existing order without
     * permuting it.
     */
    queueMax: QueueSize[];
}
export interface ParamsProtoMsg {
    typeUrl: "/agoric.swingset.Params";
    value: Uint8Array;
}
/** Params are the swingset configuration/governance parameters. */
export interface ParamsAmino {
    /**
     * Map from unit name to a value in SwingSet "beans".
     * Must not be negative.
     *
     * These values are used by SwingSet to normalize named per-resource charges
     * (maybe rent) in a single Nat usage unit, the "bean".
     *
     * There is no required order to this list of entries, but all the chain
     * nodes must all serialize and deserialize the existing order without
     * permuting it.
     */
    beans_per_unit?: StringBeansAmino[];
    /**
     * The price in Coins per the unit named "fee".  This value is used by
     * cosmic-swingset JS code to decide how many tokens to charge.
     *
     * cost = beans_used * fee_unit_price / beans_per_unit["fee"]
     */
    fee_unit_price?: CoinAmino[];
    /**
     * The SwingSet bootstrap vat configuration file.  Not usefully modifiable
     * via governance as it is only referenced by the chain's initial
     * construction.
     */
    bootstrap_vat_config?: string;
    /**
     * If the provision submitter doesn't hold a provisionpass, their requested
     * power flags are looked up in this fee menu (first match wins) and the sum
     * is charged.  If any power flag is not found in this menu, the request is
     * rejected.
     */
    power_flag_fees?: PowerFlagFeeAmino[];
    /**
     * Maximum sizes for queues.
     * These values are used by SwingSet to compute how many messages should be
     * accepted in a block.
     *
     * There is no required order to this list of entries, but all the chain
     * nodes must all serialize and deserialize the existing order without
     * permuting it.
     */
    queue_max?: QueueSizeAmino[];
}
export interface ParamsAminoMsg {
    type: "/agoric.swingset.Params";
    value: ParamsAmino;
}
/** Params are the swingset configuration/governance parameters. */
export interface ParamsSDKType {
    beans_per_unit: StringBeansSDKType[];
    fee_unit_price: CoinSDKType[];
    bootstrap_vat_config: string;
    power_flag_fees: PowerFlagFeeSDKType[];
    queue_max: QueueSizeSDKType[];
}
/** The current state of the module. */
export interface State {
    /**
     * The allowed number of items to add to queues, as determined by SwingSet.
     * Transactions which attempt to enqueue more should be rejected.
     */
    queueAllowed: QueueSize[];
}
export interface StateProtoMsg {
    typeUrl: "/agoric.swingset.State";
    value: Uint8Array;
}
/** The current state of the module. */
export interface StateAmino {
    /**
     * The allowed number of items to add to queues, as determined by SwingSet.
     * Transactions which attempt to enqueue more should be rejected.
     */
    queue_allowed?: QueueSizeAmino[];
}
export interface StateAminoMsg {
    type: "/agoric.swingset.State";
    value: StateAmino;
}
/** The current state of the module. */
export interface StateSDKType {
    queue_allowed: QueueSizeSDKType[];
}
/** Map element of a string key to a Nat bean count. */
export interface StringBeans {
    /** What the beans are for. */
    key: string;
    /** The actual bean value. */
    beans: string;
}
export interface StringBeansProtoMsg {
    typeUrl: "/agoric.swingset.StringBeans";
    value: Uint8Array;
}
/** Map element of a string key to a Nat bean count. */
export interface StringBeansAmino {
    /** What the beans are for. */
    key?: string;
    /** The actual bean value. */
    beans?: string;
}
export interface StringBeansAminoMsg {
    type: "/agoric.swingset.StringBeans";
    value: StringBeansAmino;
}
/** Map element of a string key to a Nat bean count. */
export interface StringBeansSDKType {
    key: string;
    beans: string;
}
/** Map a provisioning power flag to its corresponding fee. */
export interface PowerFlagFee {
    powerFlag: string;
    fee: Coin[];
}
export interface PowerFlagFeeProtoMsg {
    typeUrl: "/agoric.swingset.PowerFlagFee";
    value: Uint8Array;
}
/** Map a provisioning power flag to its corresponding fee. */
export interface PowerFlagFeeAmino {
    power_flag?: string;
    fee?: CoinAmino[];
}
export interface PowerFlagFeeAminoMsg {
    type: "/agoric.swingset.PowerFlagFee";
    value: PowerFlagFeeAmino;
}
/** Map a provisioning power flag to its corresponding fee. */
export interface PowerFlagFeeSDKType {
    power_flag: string;
    fee: CoinSDKType[];
}
/** Map element of a string key to a size. */
export interface QueueSize {
    /** What the size is for. */
    key: string;
    /** The actual size value. */
    size: number;
}
export interface QueueSizeProtoMsg {
    typeUrl: "/agoric.swingset.QueueSize";
    value: Uint8Array;
}
/** Map element of a string key to a size. */
export interface QueueSizeAmino {
    /** What the size is for. */
    key?: string;
    /** The actual size value. */
    size?: number;
}
export interface QueueSizeAminoMsg {
    type: "/agoric.swingset.QueueSize";
    value: QueueSizeAmino;
}
/** Map element of a string key to a size. */
export interface QueueSizeSDKType {
    key: string;
    size: number;
}
/** Egress is the format for a swingset egress. */
export interface Egress {
    nickname: string;
    peer: Uint8Array;
    /** TODO: Remove these power flags as they are deprecated and have no effect. */
    powerFlags: string[];
}
export interface EgressProtoMsg {
    typeUrl: "/agoric.swingset.Egress";
    value: Uint8Array;
}
/** Egress is the format for a swingset egress. */
export interface EgressAmino {
    nickname?: string;
    peer?: string;
    /** TODO: Remove these power flags as they are deprecated and have no effect. */
    power_flags?: string[];
}
export interface EgressAminoMsg {
    type: "/agoric.swingset.Egress";
    value: EgressAmino;
}
/** Egress is the format for a swingset egress. */
export interface EgressSDKType {
    nickname: string;
    peer: Uint8Array;
    power_flags: string[];
}
/**
 * SwingStoreArtifact encodes an artifact of a swing-store export.
 * Artifacts may be stored or transmitted in any order. Most handlers do
 * maintain the artifact order from their original source as an effect of how
 * they handle the artifacts.
 */
export interface SwingStoreArtifact {
    name: string;
    data: Uint8Array;
}
export interface SwingStoreArtifactProtoMsg {
    typeUrl: "/agoric.swingset.SwingStoreArtifact";
    value: Uint8Array;
}
/**
 * SwingStoreArtifact encodes an artifact of a swing-store export.
 * Artifacts may be stored or transmitted in any order. Most handlers do
 * maintain the artifact order from their original source as an effect of how
 * they handle the artifacts.
 */
export interface SwingStoreArtifactAmino {
    name?: string;
    data?: string;
}
export interface SwingStoreArtifactAminoMsg {
    type: "/agoric.swingset.SwingStoreArtifact";
    value: SwingStoreArtifactAmino;
}
/**
 * SwingStoreArtifact encodes an artifact of a swing-store export.
 * Artifacts may be stored or transmitted in any order. Most handlers do
 * maintain the artifact order from their original source as an effect of how
 * they handle the artifacts.
 */
export interface SwingStoreArtifactSDKType {
    name: string;
    data: Uint8Array;
}
export declare const CoreEvalProposal: {
    typeUrl: string;
    encode(message: CoreEvalProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CoreEvalProposal;
    fromPartial(object: Partial<CoreEvalProposal>): CoreEvalProposal;
    fromAmino(object: CoreEvalProposalAmino): CoreEvalProposal;
    toAmino(message: CoreEvalProposal): CoreEvalProposalAmino;
    fromAminoMsg(object: CoreEvalProposalAminoMsg): CoreEvalProposal;
    fromProtoMsg(message: CoreEvalProposalProtoMsg): CoreEvalProposal;
    toProto(message: CoreEvalProposal): Uint8Array;
    toProtoMsg(message: CoreEvalProposal): CoreEvalProposalProtoMsg;
};
export declare const CoreEval: {
    typeUrl: string;
    encode(message: CoreEval, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CoreEval;
    fromPartial(object: Partial<CoreEval>): CoreEval;
    fromAmino(object: CoreEvalAmino): CoreEval;
    toAmino(message: CoreEval): CoreEvalAmino;
    fromAminoMsg(object: CoreEvalAminoMsg): CoreEval;
    fromProtoMsg(message: CoreEvalProtoMsg): CoreEval;
    toProto(message: CoreEval): Uint8Array;
    toProtoMsg(message: CoreEval): CoreEvalProtoMsg;
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
export declare const State: {
    typeUrl: string;
    encode(message: State, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): State;
    fromPartial(object: Partial<State>): State;
    fromAmino(object: StateAmino): State;
    toAmino(message: State): StateAmino;
    fromAminoMsg(object: StateAminoMsg): State;
    fromProtoMsg(message: StateProtoMsg): State;
    toProto(message: State): Uint8Array;
    toProtoMsg(message: State): StateProtoMsg;
};
export declare const StringBeans: {
    typeUrl: string;
    encode(message: StringBeans, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): StringBeans;
    fromPartial(object: Partial<StringBeans>): StringBeans;
    fromAmino(object: StringBeansAmino): StringBeans;
    toAmino(message: StringBeans): StringBeansAmino;
    fromAminoMsg(object: StringBeansAminoMsg): StringBeans;
    fromProtoMsg(message: StringBeansProtoMsg): StringBeans;
    toProto(message: StringBeans): Uint8Array;
    toProtoMsg(message: StringBeans): StringBeansProtoMsg;
};
export declare const PowerFlagFee: {
    typeUrl: string;
    encode(message: PowerFlagFee, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PowerFlagFee;
    fromPartial(object: Partial<PowerFlagFee>): PowerFlagFee;
    fromAmino(object: PowerFlagFeeAmino): PowerFlagFee;
    toAmino(message: PowerFlagFee): PowerFlagFeeAmino;
    fromAminoMsg(object: PowerFlagFeeAminoMsg): PowerFlagFee;
    fromProtoMsg(message: PowerFlagFeeProtoMsg): PowerFlagFee;
    toProto(message: PowerFlagFee): Uint8Array;
    toProtoMsg(message: PowerFlagFee): PowerFlagFeeProtoMsg;
};
export declare const QueueSize: {
    typeUrl: string;
    encode(message: QueueSize, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueueSize;
    fromPartial(object: Partial<QueueSize>): QueueSize;
    fromAmino(object: QueueSizeAmino): QueueSize;
    toAmino(message: QueueSize): QueueSizeAmino;
    fromAminoMsg(object: QueueSizeAminoMsg): QueueSize;
    fromProtoMsg(message: QueueSizeProtoMsg): QueueSize;
    toProto(message: QueueSize): Uint8Array;
    toProtoMsg(message: QueueSize): QueueSizeProtoMsg;
};
export declare const Egress: {
    typeUrl: string;
    encode(message: Egress, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Egress;
    fromPartial(object: Partial<Egress>): Egress;
    fromAmino(object: EgressAmino): Egress;
    toAmino(message: Egress): EgressAmino;
    fromAminoMsg(object: EgressAminoMsg): Egress;
    fromProtoMsg(message: EgressProtoMsg): Egress;
    toProto(message: Egress): Uint8Array;
    toProtoMsg(message: Egress): EgressProtoMsg;
};
export declare const SwingStoreArtifact: {
    typeUrl: string;
    encode(message: SwingStoreArtifact, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SwingStoreArtifact;
    fromPartial(object: Partial<SwingStoreArtifact>): SwingStoreArtifact;
    fromAmino(object: SwingStoreArtifactAmino): SwingStoreArtifact;
    toAmino(message: SwingStoreArtifact): SwingStoreArtifactAmino;
    fromAminoMsg(object: SwingStoreArtifactAminoMsg): SwingStoreArtifact;
    fromProtoMsg(message: SwingStoreArtifactProtoMsg): SwingStoreArtifact;
    toProto(message: SwingStoreArtifact): Uint8Array;
    toProtoMsg(message: SwingStoreArtifact): SwingStoreArtifactProtoMsg;
};
