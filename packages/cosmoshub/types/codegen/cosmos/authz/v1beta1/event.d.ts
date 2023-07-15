import * as _m0 from "protobufjs/minimal";
/** EventGrant is emitted on Msg/Grant */
export interface EventGrant {
    /** Msg type URL for which an autorization is granted */
    msgTypeUrl: string;
    /** Granter account address */
    granter: string;
    /** Grantee account address */
    grantee: string;
}
/** EventGrant is emitted on Msg/Grant */
export interface EventGrantSDKType {
    msg_type_url: string;
    granter: string;
    grantee: string;
}
/** EventRevoke is emitted on Msg/Revoke */
export interface EventRevoke {
    /** Msg type URL for which an autorization is revoked */
    msgTypeUrl: string;
    /** Granter account address */
    granter: string;
    /** Grantee account address */
    grantee: string;
}
/** EventRevoke is emitted on Msg/Revoke */
export interface EventRevokeSDKType {
    msg_type_url: string;
    granter: string;
    grantee: string;
}
export declare const EventGrant: {
    encode(message: EventGrant, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventGrant;
    fromPartial(object: Partial<EventGrant>): EventGrant;
};
export declare const EventRevoke: {
    encode(message: EventRevoke, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventRevoke;
    fromPartial(object: Partial<EventRevoke>): EventRevoke;
};
