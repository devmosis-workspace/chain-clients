import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface VoteRequest {
    sender: Uint8Array;
    pollId: Long;
    vote?: Any;
}
export interface VoteRequestSDKType {
    sender: Uint8Array;
    poll_id: Long;
    vote?: AnySDKType;
}
export interface VoteResponse {
    log: string;
}
export interface VoteResponseSDKType {
    log: string;
}
export declare const VoteRequest: {
    encode(message: VoteRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): VoteRequest;
    fromPartial(object: Partial<VoteRequest>): VoteRequest;
};
export declare const VoteResponse: {
    encode(message: VoteResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): VoteResponse;
    fromPartial(object: Partial<VoteResponse>): VoteResponse;
};
