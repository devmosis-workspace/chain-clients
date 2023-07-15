import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Txs {
    txs: Uint8Array[];
}
export interface TxsSDKType {
    txs: Uint8Array[];
}
export interface Message {
    txs?: Txs;
    mevTxs?: MEVTxs;
}
export interface MessageSDKType {
    txs?: TxsSDKType;
    mev_txs?: MEVTxsSDKType;
}
export interface MEVMessage {
    txs?: Txs;
    desiredHeight: Long;
    bundleId: Long;
    bundleOrder: Long;
    bundleSize: Long;
    gasWanted: Long;
}
export interface MEVMessageSDKType {
    txs?: TxsSDKType;
    desired_height: Long;
    bundle_id: Long;
    bundle_order: Long;
    bundle_size: Long;
    gas_wanted: Long;
}
export interface MEVTxs {
    txs: Uint8Array[];
    desiredHeight: Long;
    bundleId: Long;
    bundleOrder: Long;
    bundleSize: Long;
    gasWanted: Long;
}
export interface MEVTxsSDKType {
    txs: Uint8Array[];
    desired_height: Long;
    bundle_id: Long;
    bundle_order: Long;
    bundle_size: Long;
    gas_wanted: Long;
}
export declare const Txs: {
    encode(message: Txs, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Txs;
    fromPartial(object: Partial<Txs>): Txs;
};
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Message;
    fromPartial(object: Partial<Message>): Message;
};
export declare const MEVMessage: {
    encode(message: MEVMessage, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MEVMessage;
    fromPartial(object: Partial<MEVMessage>): MEVMessage;
};
export declare const MEVTxs: {
    encode(message: MEVTxs, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MEVTxs;
    fromPartial(object: Partial<MEVTxs>): MEVTxs;
};
