import { BinaryWriter } from "../../../binary";
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
    /** @deprecated */
    minInitialDepositRatio: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/kyve.global.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the global module parameters. */
export interface ParamsAmino {
    /** min_gas_price defines the minimum gas price value for all transactions. */
    min_gas_price?: string;
    /** burn_ratio defines the ratio of transaction fees burnt. */
    burn_ratio?: string;
    /**
     * gas_adjustments can add a constant amount of gas to a specific message type.
     * This gives more control to make certain messages more expensive to avoid spamming
     * of certain types of messages.
     */
    gas_adjustments?: GasAdjustmentAmino[];
    /**
     * gas_refunds lets the governance specify a fraction of how much gas
     * a user gets refunded for a certain type of transaction.
     * This could be used to make transactions which support to network cheaper.
     * Gas refunds only work if the transaction only included one message.
     */
    gas_refunds?: GasRefundAmino[];
    /**
     * min_initial_deposit_ratio sets a minimum fraction of initial deposit for a
     * governance proposal. This is used to avoid spamming of proposals and
     * polluting the proposals page.
     */
    /** @deprecated */
    min_initial_deposit_ratio?: string;
}
export interface ParamsAminoMsg {
    type: "/kyve.global.v1beta1.Params";
    value: ParamsAmino;
}
/** Params defines the global module parameters. */
export interface ParamsSDKType {
    min_gas_price: string;
    burn_ratio: string;
    gas_adjustments: GasAdjustmentSDKType[];
    gas_refunds: GasRefundSDKType[];
    /** @deprecated */
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
    amount: bigint;
}
export interface GasAdjustmentProtoMsg {
    typeUrl: "/kyve.global.v1beta1.GasAdjustment";
    value: Uint8Array;
}
/**
 * GasAdjustment stores for every message type a fixed amount
 * of gas which is added to the message
 */
export interface GasAdjustmentAmino {
    /** type of the sdk-message */
    type?: string;
    /** amount of gas which is added to the message */
    amount?: string;
}
export interface GasAdjustmentAminoMsg {
    type: "/kyve.global.v1beta1.GasAdjustment";
    value: GasAdjustmentAmino;
}
/**
 * GasAdjustment stores for every message type a fixed amount
 * of gas which is added to the message
 */
export interface GasAdjustmentSDKType {
    type: string;
    amount: bigint;
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
export interface GasRefundProtoMsg {
    typeUrl: "/kyve.global.v1beta1.GasRefund";
    value: Uint8Array;
}
/**
 * GasRefund stores the fraction of gas which will be refunded for a given
 * type of message.
 * This only works if the transaction only includes one message.
 */
export interface GasRefundAmino {
    /** type of the sdk-message */
    type?: string;
    /** fraction in decimal representation between 0 and 1 */
    fraction?: string;
}
export interface GasRefundAminoMsg {
    type: "/kyve.global.v1beta1.GasRefund";
    value: GasRefundAmino;
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
export declare const GasAdjustment: {
    typeUrl: string;
    encode(message: GasAdjustment, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GasAdjustment;
    fromPartial(object: Partial<GasAdjustment>): GasAdjustment;
    fromAmino(object: GasAdjustmentAmino): GasAdjustment;
    toAmino(message: GasAdjustment): GasAdjustmentAmino;
    fromAminoMsg(object: GasAdjustmentAminoMsg): GasAdjustment;
    fromProtoMsg(message: GasAdjustmentProtoMsg): GasAdjustment;
    toProto(message: GasAdjustment): Uint8Array;
    toProtoMsg(message: GasAdjustment): GasAdjustmentProtoMsg;
};
export declare const GasRefund: {
    typeUrl: string;
    encode(message: GasRefund, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GasRefund;
    fromPartial(object: Partial<GasRefund>): GasRefund;
    fromAmino(object: GasRefundAmino): GasRefund;
    toAmino(message: GasRefund): GasRefundAmino;
    fromAminoMsg(object: GasRefundAminoMsg): GasRefund;
    fromProtoMsg(message: GasRefundProtoMsg): GasRefund;
    toProto(message: GasRefund): Uint8Array;
    toProtoMsg(message: GasRefund): GasRefundProtoMsg;
};
