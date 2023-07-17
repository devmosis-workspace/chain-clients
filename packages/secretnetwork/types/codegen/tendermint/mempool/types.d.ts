import * as _m0 from "protobufjs/minimal";
export interface Txs {
    txs: Uint8Array[];
}
export interface TxsSDKType {
    txs: Uint8Array[];
}
export interface Message {
    txs?: Txs;
}
export interface MessageSDKType {
    txs?: TxsSDKType;
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
