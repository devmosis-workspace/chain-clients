import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
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
/** Egress is the format for a swingset egress. */
export interface EgressSDKType {
    nickname: string;
    peer: Uint8Array;
    power_flags: string[];
}
/** The payload messages used by swingset state-sync */
export interface ExtensionSnapshotterArtifactPayload {
    name: string;
    data: Uint8Array;
}
/** The payload messages used by swingset state-sync */
export interface ExtensionSnapshotterArtifactPayloadSDKType {
    name: string;
    data: Uint8Array;
}
export declare const CoreEvalProposal: {
    encode(message: CoreEvalProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CoreEvalProposal;
    fromPartial(object: Partial<CoreEvalProposal>): CoreEvalProposal;
};
export declare const CoreEval: {
    encode(message: CoreEval, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CoreEval;
    fromPartial(object: Partial<CoreEval>): CoreEval;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
export declare const State: {
    encode(message: State, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): State;
    fromPartial(object: Partial<State>): State;
};
export declare const StringBeans: {
    encode(message: StringBeans, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): StringBeans;
    fromPartial(object: Partial<StringBeans>): StringBeans;
};
export declare const PowerFlagFee: {
    encode(message: PowerFlagFee, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PowerFlagFee;
    fromPartial(object: Partial<PowerFlagFee>): PowerFlagFee;
};
export declare const QueueSize: {
    encode(message: QueueSize, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueueSize;
    fromPartial(object: Partial<QueueSize>): QueueSize;
};
export declare const Egress: {
    encode(message: Egress, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Egress;
    fromPartial(object: Partial<Egress>): Egress;
};
export declare const ExtensionSnapshotterArtifactPayload: {
    encode(message: ExtensionSnapshotterArtifactPayload, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ExtensionSnapshotterArtifactPayload;
    fromPartial(object: Partial<ExtensionSnapshotterArtifactPayload>): ExtensionSnapshotterArtifactPayload;
};
