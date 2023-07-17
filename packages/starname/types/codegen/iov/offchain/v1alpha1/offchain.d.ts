import * as _m0 from "protobufjs/minimal";
/** MsgSignData defines an arbitrary, general-purpose, off-chain message */
export interface MsgSignData {
    /** signer is the bech32 representation of the signer's account address */
    signer: string;
    /**
     * data represents the raw bytes of the content that is signed (text, json,
     * etc)
     */
    data: Uint8Array;
}
/** MsgSignData defines an arbitrary, general-purpose, off-chain message */
export interface MsgSignDataSDKType {
    signer: string;
    data: Uint8Array;
}
/**
 * ListOfMsgSignData defines a list of MsgSignData, used to marshal and
 * unmarshal them in a clean way
 */
export interface ListOfMsgSignData {
    /** msgs is a list of messages */
    msgs: MsgSignData[];
}
/**
 * ListOfMsgSignData defines a list of MsgSignData, used to marshal and
 * unmarshal them in a clean way
 */
export interface ListOfMsgSignDataSDKType {
    msgs: MsgSignDataSDKType[];
}
export declare const MsgSignData: {
    encode(message: MsgSignData, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSignData;
    fromPartial(object: Partial<MsgSignData>): MsgSignData;
};
export declare const ListOfMsgSignData: {
    encode(message: ListOfMsgSignData, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ListOfMsgSignData;
    fromPartial(object: Partial<ListOfMsgSignData>): ListOfMsgSignData;
};
