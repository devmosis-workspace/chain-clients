import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the global module parameters. */
export interface Params {
    /** min_gas_price defines the minimum gas price value for all transactions. */
    minGasPrice: string;
    /** burn_ratio defines the ratio of transaction fees burnt. */
    burnRatio: string;
    /**
     * gas_adjustments can add a constant amount of gas to a specific message type.
     * This gives more control to make certain messages more expensive to avoid spamming
     * of certain types of messages.
     */
    gasAdjustments: GasAdjustment[];
    /**
     * gas_refunds lets the governance specify a fraction of how much gas
     * a user gets refunded for a certain type of transaction.
     * This could be used to make transactions which support to network cheaper.
     * Gas refunds only work if the transaction only included one message.
     */
    gasRefunds: GasRefund[];
    /**
     * min_initial_deposit_ratio sets a minimum fraction of initial deposit for a
     * governance proposal. This is used to avoid spamming of proposals and
     * polluting the proposals page.
     */
    minInitialDepositRatio: string;
}
/** Params defines the global module parameters. */
export interface ParamsSDKType {
    min_gas_price: string;
    burn_ratio: string;
    gas_adjustments: GasAdjustmentSDKType[];
    gas_refunds: GasRefundSDKType[];
    min_initial_deposit_ratio: string;
}
/**
 * GasAdjustment stores for every message type a fixed amount
 * of gas which is added to the message
 */
export interface GasAdjustment {
    /** type of the sdk-message */
    type: string;
    /** amount of gas which is added to the message */
    amount: Long;
}
/**
 * GasAdjustment stores for every message type a fixed amount
 * of gas which is added to the message
 */
export interface GasAdjustmentSDKType {
    type: string;
    amount: Long;
}
/**
 * GasRefund stores the fraction of gas which will be refunded for a given
 * type of message.
 * This only works if the transaction only includes one message.
 */
export interface GasRefund {
    /** type of the sdk-message */
    type: string;
    /** fraction in decimal representation between 0 and 1 */
    fraction: string;
}
/**
 * GasRefund stores the fraction of gas which will be refunded for a given
 * type of message.
 * This only works if the transaction only includes one message.
 */
export interface GasRefundSDKType {
    type: string;
    fraction: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
export declare const GasAdjustment: {
    encode(message: GasAdjustment, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GasAdjustment;
    fromPartial(object: Partial<GasAdjustment>): GasAdjustment;
};
export declare const GasRefund: {
    encode(message: GasRefund, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GasRefund;
    fromPartial(object: Partial<GasRefund>): GasRefund;
};
