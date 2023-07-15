import * as _m0 from "protobufjs/minimal";
/** EventSend is emitted on Msg/Send */
export interface EventSend {
    classId: string;
    id: string;
    sender: string;
    receiver: string;
}
/** EventSend is emitted on Msg/Send */
export interface EventSendSDKType {
    class_id: string;
    id: string;
    sender: string;
    receiver: string;
}
/** EventMint is emitted on Mint */
export interface EventMint {
    classId: string;
    id: string;
    owner: string;
}
/** EventMint is emitted on Mint */
export interface EventMintSDKType {
    class_id: string;
    id: string;
    owner: string;
}
/** EventBurn is emitted on Burn */
export interface EventBurn {
    classId: string;
    id: string;
    owner: string;
}
/** EventBurn is emitted on Burn */
export interface EventBurnSDKType {
    class_id: string;
    id: string;
    owner: string;
}
export declare const EventSend: {
    encode(message: EventSend, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventSend;
    fromPartial(object: Partial<EventSend>): EventSend;
};
export declare const EventMint: {
    encode(message: EventMint, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventMint;
    fromPartial(object: Partial<EventMint>): EventMint;
};
export declare const EventBurn: {
    encode(message: EventBurn, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventBurn;
    fromPartial(object: Partial<EventBurn>): EventBurn;
};
