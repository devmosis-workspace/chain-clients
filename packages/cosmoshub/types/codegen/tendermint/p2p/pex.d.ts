import { NetAddress, NetAddressSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
export interface PexRequest {
}
export interface PexRequestSDKType {
}
export interface PexAddrs {
    addrs: NetAddress[];
}
export interface PexAddrsSDKType {
    addrs: NetAddressSDKType[];
}
export interface Message {
    pexRequest?: PexRequest;
    pexAddrs?: PexAddrs;
}
export interface MessageSDKType {
    pex_request?: PexRequestSDKType;
    pex_addrs?: PexAddrsSDKType;
}
export declare const PexRequest: {
    encode(_: PexRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): PexRequest;
    fromPartial(_: Partial<PexRequest>): PexRequest;
};
export declare const PexAddrs: {
    encode(message: PexAddrs, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PexAddrs;
    fromPartial(object: Partial<PexAddrs>): PexAddrs;
};
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Message;
    fromPartial(object: Partial<Message>): Message;
};
