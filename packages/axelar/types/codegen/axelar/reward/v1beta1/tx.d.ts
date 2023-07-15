import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
export interface RefundMsgRequest {
    sender: Uint8Array;
    innerMessage?: Any;
}
export interface RefundMsgRequestSDKType {
    sender: Uint8Array;
    inner_message?: AnySDKType;
}
export interface RefundMsgResponse {
    data: Uint8Array;
    log: string;
}
export interface RefundMsgResponseSDKType {
    data: Uint8Array;
    log: string;
}
export declare const RefundMsgRequest: {
    encode(message: RefundMsgRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RefundMsgRequest;
    fromPartial(object: Partial<RefundMsgRequest>): RefundMsgRequest;
};
export declare const RefundMsgResponse: {
    encode(message: RefundMsgResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RefundMsgResponse;
    fromPartial(object: Partial<RefundMsgResponse>): RefundMsgResponse;
};
