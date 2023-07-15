import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** IDSet represents a set of IDs */
export interface IDSet {
    /** IDSet represents a set of IDs */
    ids: Long[];
}
/** IDSet represents a set of IDs */
export interface IDSetSDKType {
    ids: Long[];
}
export interface BatchFees {
    token: string;
    totalFees: string;
    txCount: Long;
}
export interface BatchFeesSDKType {
    token: string;
    total_fees: string;
    tx_count: Long;
}
export interface EventWithdrawalReceived {
    bridgeContract: string;
    bridgeChainId: string;
    outgoingTxId: string;
    nonce: string;
}
export interface EventWithdrawalReceivedSDKType {
    bridge_contract: string;
    bridge_chain_id: string;
    outgoing_tx_id: string;
    nonce: string;
}
export interface EventWithdrawCanceled {
    sender: string;
    txId: string;
    bridgeContract: string;
    bridgeChainId: string;
}
export interface EventWithdrawCanceledSDKType {
    sender: string;
    tx_id: string;
    bridge_contract: string;
    bridge_chain_id: string;
}
export declare const IDSet: {
    encode(message: IDSet, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): IDSet;
    fromPartial(object: Partial<IDSet>): IDSet;
};
export declare const BatchFees: {
    encode(message: BatchFees, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BatchFees;
    fromPartial(object: Partial<BatchFees>): BatchFees;
};
export declare const EventWithdrawalReceived: {
    encode(message: EventWithdrawalReceived, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventWithdrawalReceived;
    fromPartial(object: Partial<EventWithdrawalReceived>): EventWithdrawalReceived;
};
export declare const EventWithdrawCanceled: {
    encode(message: EventWithdrawCanceled, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventWithdrawCanceled;
    fromPartial(object: Partial<EventWithdrawCanceled>): EventWithdrawCanceled;
};
